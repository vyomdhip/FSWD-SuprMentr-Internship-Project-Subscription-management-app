const express = require('express');
const router = express.Router();
const { runAllDailyJobs } = require('../jobs/lifecycleJobs');

/**
 * GET or POST /api/cron/daily
 * Secured endpoint for external cron services (e.g., cron-job.org, Render Cron Job).
 * Expects: Authorization: Bearer <CRON_SECRET> OR ?key=<CRON_SECRET> / ?secret=<CRON_SECRET>
 */
const handleDailyCron = async (req, res) => {
  // ── Auth check ──
  const authHeader = req.headers.authorization;
  const querySecret = req.query.key || req.query.secret;
  const expectedSecret = process.env.CRON_SECRET;

  const isAuthorized =
    Boolean(expectedSecret) &&
    (authHeader === `Bearer ${expectedSecret}` || querySecret === expectedSecret);

  if (!isAuthorized) {
    console.warn(`[Cron] Unauthorized daily cron trigger attempt from ${req.ip}`);
    return res.status(401).json({
      success: false,
      message: 'Unauthorized. Provide valid Authorization header or ?key=<CRON_SECRET>',
    });
  }

  // ── Run jobs ──
  try {
    console.log('[Cron] Triggering daily lifecycle jobs via HTTP endpoint...');
    await runAllDailyJobs();
    return res.status(200).json({
      success: true,
      message: 'Daily jobs completed successfully',
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('[Cron] Daily jobs execution failed:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Daily jobs failed',
      error: error.message,
    });
  }
};

router.get('/daily', handleDailyCron);
router.post('/daily', handleDailyCron);

module.exports = router;
