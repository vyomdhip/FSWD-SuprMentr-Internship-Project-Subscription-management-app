import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useThemeStore from '../../store/themeStore';
import useAuthStore from '../../store/authStore';
import './TermsPage.css';

const EFFECTIVE_DATE = 'October 27, 2026';

/* ── Table of Contents data ── */
const tocItems = [
  { id: 'acceptance', label: 'Acceptance of Terms' },
  { id: 'eligibility', label: 'Eligibility' },
  { id: 'account-registration', label: 'Account Registration & Security' },
  { id: 'subscription-tracking', label: 'Subscription Tracking & Billing Estimates' },
  { id: 'user-responsibilities', label: 'User Responsibilities' },
  { id: 'notifications', label: 'Notifications & Reminders' },
  { id: 'third-party-services', label: 'Third-Party Services' },
  { id: 'intellectual-property', label: 'Intellectual Property' },
  { id: 'service-availability', label: 'Service Availability' },
  { id: 'limitation-of-liability', label: 'Limitation of Liability' },
  { id: 'termination', label: 'Termination' },
  { id: 'changes-to-terms', label: 'Changes to Terms' },
  { id: 'governing-law', label: 'Governing Law' },
  { id: 'contact', label: 'Contact Information' },
];

const TermsPage = () => {
  const initTheme = useThemeStore((state) => state.initTheme);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const { hash } = useLocation();

  const returnPath = isAuthenticated ? '/dashboard' : '/login';
  const returnLabel = isAuthenticated ? 'Back to Dashboard' : 'Back to App';

  // Ensure the theme is applied on this standalone page
  useEffect(() => {
    initTheme();
  }, [initTheme]);

  // Scroll to hash anchor on mount or hash change
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="terms-page" id="terms-page">
      {/* Background orbs wrapped in clipping container */}
      <div className="terms-bg" aria-hidden="true">
        <div className="terms-bg-orb terms-bg-orb--1" />
        <div className="terms-bg-orb terms-bg-orb--2" />
      </div>

      {/* Top bar */}
      <div className="terms-topbar">
        <Link to={returnPath} className="terms-back-link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          {returnLabel}
        </Link>
      </div>

      <div className="terms-container">
        {/* Header */}
        <header className="terms-header">
          <div className="terms-header-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </div>
          <h1>
            Terms & <span className="gradient-text">Conditions</span>
          </h1>
          <p className="terms-effective-date">Effective Date: {EFFECTIVE_DATE}</p>
        </header>

        {/* Table of Contents */}
        <nav className="terms-toc" aria-label="Table of contents">
          <h2>Contents</h2>
          <ol>
            {tocItems.map((item, i) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>
                  <span className="terms-toc-num">{i + 1}.</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 1. Acceptance of Terms */}
        <section className="terms-card" id="acceptance">
          <div className="terms-card-header">
            <h2>1. Acceptance of Terms</h2>
          </div>
          <p>
            By creating an account on SubTrackr, accessing the platform, or using any of its features, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use the service.
          </p>
          <p>
            These terms apply to all users of SubTrackr, including registered account holders and administrative users. Continued use of the platform after any updates to these terms constitutes acceptance of the revised terms.
          </p>
        </section>

        {/* 2. Eligibility */}
        <section className="terms-card" id="eligibility">
          <div className="terms-card-header">
            <h2>2. Eligibility</h2>
          </div>
          <p>
            To use SubTrackr, you must be at least 18 years of age or the age of majority in your jurisdiction, whichever is greater. By creating an account, you represent and warrant that you meet this requirement.
          </p>
          <p>
            If you are using SubTrackr on behalf of an organisation, you represent that you have the authority to bind that organisation to these terms.
          </p>
        </section>

        {/* 3. Account Registration & Security */}
        <section className="terms-card" id="account-registration">
          <div className="terms-card-header">
            <h2>3. Account Registration & Security</h2>
          </div>
          <p>When you register for SubTrackr, you agree to:</p>
          <ul>
            <li>Provide accurate and complete information, including your full name and a valid email address.</li>
            <li>Maintain the confidentiality of your account credentials. Your password is stored as a one-way bcrypt hash and cannot be recovered — only reset.</li>
            <li>Notify the SubTrackr team promptly if you suspect any unauthorised access to your account.</li>
            <li>Accept responsibility for all activity that occurs under your account.</li>
          </ul>
          <p>
            SubTrackr reserves the right to suspend or terminate accounts that violate these terms or are used for any unlawful purpose.
          </p>
        </section>

        {/* 4. Subscription Tracking & Billing Estimates */}
        <section className="terms-card" id="subscription-tracking">
          <div className="terms-card-header">
            <h2>4. Subscription Tracking & Billing Estimates</h2>
          </div>
          <p>
            SubTrackr is a <strong>subscription tracking and management tool</strong>. It allows you to manually record your subscriptions, view spending analytics, set budget limits, and receive renewal reminders.
          </p>
          <p style={{ marginTop: 'var(--space-md)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--text-primary)' }}>
            Important disclaimers:
          </p>
          <ul>
            <li>SubTrackr does <strong>not</strong> process, initiate, or facilitate any subscription payments or financial transactions on your behalf.</li>
            <li>SubTrackr does <strong>not</strong> integrate with your bank, payment processor, or subscription provider to verify billing amounts.</li>
            <li>All subscription costs, billing cycles, renewal dates, and spending summaries shown in the app are based entirely on the data <strong>you enter manually</strong>.</li>
            <li>SubTrackr does <strong>not</strong> guarantee the accuracy, completeness, or timeliness of billing estimates, next-payment-date calculations, or analytics dashboards.</li>
            <li>You are solely responsible for verifying actual charges with your subscription providers and financial institutions.</li>
          </ul>
          <p>
            Features such as budget alerts, cost trend charts, category breakdowns, and PDF report exports are provided as informational tools to help you organise your subscriptions. They are not financial advice.
          </p>
        </section>

        {/* 5. User Responsibilities */}
        <section className="terms-card" id="user-responsibilities">
          <div className="terms-card-header">
            <h2>5. User Responsibilities</h2>
          </div>
          <p>As a SubTrackr user, you agree to:</p>
          <ul>
            <li>Use the platform only for its intended purpose — tracking and managing personal or organisational subscriptions.</li>
            <li>Ensure that the subscription data you enter is accurate and kept up to date.</li>
            <li>Not attempt to access another user&apos;s account, data, or administrative features without authorisation.</li>
            <li>Not use automated tools, bots, or scripts to interact with the platform without prior written consent.</li>
            <li>Not upload or submit any content that is unlawful, harmful, abusive, or in violation of any applicable law.</li>
            <li>Not attempt to reverse-engineer, decompile, or otherwise derive the source code of the platform, except where permitted by law.</li>
          </ul>
        </section>

        {/* 6. Notifications & Reminders */}
        <section className="terms-card" id="notifications">
          <div className="terms-card-header">
            <h2>6. Notifications & Reminders</h2>
          </div>
          <p>SubTrackr provides the following notification features:</p>
          <ul>
            <li><strong>In-app notifications</strong> — alerts for upcoming payments, trial expirations, budget threshold warnings, and unused subscription reminders. These are generated automatically based on your subscription data.</li>
            <li><strong>Email reminders</strong> — renewal reminder emails sent when a subscription payment is due within 3 days. Email delivery depends on server-side configuration (SendGrid) and may not be available in all deployments.</li>
          </ul>
          <p>
            Notifications are provided on a <strong>best-effort basis</strong>. SubTrackr does not guarantee that notifications will be delivered on time, or at all. You should not rely solely on SubTrackr notifications to manage payment deadlines. Always maintain independent reminders for critical payments.
          </p>
        </section>

        {/* 7. Third-Party Services */}
        <section className="terms-card" id="third-party-services">
          <div className="terms-card-header">
            <h2>7. Third-Party Services</h2>
          </div>
          <p>SubTrackr relies on third-party infrastructure to operate:</p>
          <ul>
            <li><strong>MongoDB Atlas</strong> (MongoDB, Inc.) — cloud database hosting and data storage.</li>
            <li><strong>SendGrid</strong> (Twilio Inc.) — email delivery service for transactional renewal reminders, when configured.</li>
          </ul>
          <p>
            Your use of SubTrackr is also subject to the terms and privacy policies of these third-party providers. SubTrackr is not responsible for the practices, availability, or security of third-party services beyond reasonable due diligence in their selection.
          </p>
          <p>
            SubTrackr does not use any third-party analytics, advertising, or social media tracking services.
          </p>
        </section>

        {/* 8. Intellectual Property */}
        <section className="terms-card" id="intellectual-property">
          <div className="terms-card-header">
            <h2>8. Intellectual Property</h2>
          </div>
          <p>
            All content, design, code, graphics, logos, and visual elements of the SubTrackr platform are the property of SubTrackr or its licensors and are protected by applicable intellectual property laws.
          </p>
          <ul>
            <li>You may not copy, modify, distribute, or create derivative works from any part of the platform without prior written permission.</li>
            <li>The SubTrackr name, logo, and branding are proprietary and may not be used without authorisation.</li>
          </ul>
          <p>
            You retain ownership of the subscription data you enter into SubTrackr. We claim no intellectual property rights over your personal data.
          </p>
        </section>

        {/* 9. Service Availability */}
        <section className="terms-card" id="service-availability">
          <div className="terms-card-header">
            <h2>9. Service Availability</h2>
          </div>
          <p>
            SubTrackr is provided on an <strong>&quot;as is&quot;</strong> and <strong>&quot;as available&quot;</strong> basis. We strive to maintain reliable service, but we do not guarantee uninterrupted or error-free operation.
          </p>
          <ul>
            <li>The platform may be temporarily unavailable due to maintenance, updates, or circumstances beyond our control.</li>
            <li>SubTrackr includes a maintenance mode feature; during scheduled maintenance windows, access may be restricted for non-administrative users.</li>
            <li>We reserve the right to modify, suspend, or discontinue any feature of the platform at any time, with or without prior notice.</li>
          </ul>
        </section>

        {/* 10. Limitation of Liability */}
        <section className="terms-card" id="limitation-of-liability">
          <div className="terms-card-header">
            <h2>10. Limitation of Liability</h2>
          </div>
          <p>
            To the fullest extent permitted by applicable law, SubTrackr and its operators shall not be held liable for any indirect, incidental, special, consequential, or punitive damages arising from:
          </p>
          <ul>
            <li>Your use of, or inability to use, the platform.</li>
            <li>Inaccurate billing estimates, missed renewal reminders, or incorrect spending calculations resulting from user-entered data.</li>
            <li>Unauthorised access to your account due to compromised credentials.</li>
            <li>Any actions taken by third-party service providers used by the platform.</li>
            <li>Data loss resulting from account deletion, system failures, or circumstances beyond our reasonable control.</li>
          </ul>
          <p>
            SubTrackr is a free subscription tracking tool and does not charge users for access. Our total liability for any claim arising from your use of the service shall not exceed the amount you have paid to us, which may be zero.
          </p>
        </section>

        {/* 11. Termination */}
        <section className="terms-card" id="termination">
          <div className="terms-card-header">
            <h2>11. Termination</h2>
          </div>
          <p>
            You may terminate your account at any time by using the <strong>Delete Account</strong> option in the Settings page. Account deletion is immediate and permanent — all your data, including subscriptions, notifications, and profile information, will be purged from the database.
          </p>
          <p>
            SubTrackr reserves the right to suspend or terminate your account at any time, without prior notice, if:
          </p>
          <ul>
            <li>You violate any provision of these Terms and Conditions.</li>
            <li>Your account is used for unlawful or abusive activities.</li>
            <li>Continued provision of the service becomes impractical or unfeasible.</li>
          </ul>
          <p>
            Upon termination, your right to access the platform ceases immediately. Provisions of these terms that by their nature should survive termination (including limitation of liability and intellectual property) shall remain in effect.
          </p>
        </section>

        {/* 12. Changes to Terms */}
        <section className="terms-card" id="changes-to-terms">
          <div className="terms-card-header">
            <h2>12. Changes to Terms</h2>
          </div>
          <p>
            We may update these Terms and Conditions from time to time. When we make changes:
          </p>
          <ul>
            <li>The &quot;Effective Date&quot; at the top of this page will be updated.</li>
            <li>Material changes may be communicated through an in-app notification.</li>
          </ul>
          <p>
            It is your responsibility to review these terms periodically. Continued use of SubTrackr after changes are published constitutes acceptance of the revised terms.
          </p>
        </section>

        {/* 13. Governing Law */}
        <section className="terms-card" id="governing-law">
          <div className="terms-card-header">
            <h2>13. Governing Law</h2>
          </div>
          <p>
            These Terms and Conditions shall be governed by and construed in accordance with the laws of India.
          </p>
          <div className="terms-placeholder">
            <span>⚠</span>
            <span>Placeholder: The specific state/jurisdiction and dispute resolution venue should be confirmed by the project owner before production deployment.</span>
          </div>
          <p style={{ marginTop: 'var(--space-md)' }}>
            Any disputes arising from or related to these terms or your use of SubTrackr shall be resolved through good-faith negotiation. If a resolution cannot be reached, disputes shall be submitted to the competent courts of the applicable jurisdiction.
          </p>
        </section>

        {/* 14. Contact Information */}
        <section className="terms-card" id="contact">
          <div className="terms-card-header">
            <h2>14. Contact Information</h2>
          </div>
          <p>If you have questions, concerns, or feedback regarding these Terms and Conditions, please contact us:</p>
          <ul>
            <li><strong>Email</strong>: <a href="mailto:substrackr@gmail.com">substrackr@gmail.com</a></li>
            <li><strong>Response Window</strong>: We aim to respond to all inquiries within 48 to 72 business hours.</li>
            <li><strong>Subject Line Guidance</strong>: To ensure rapid routing, please include <em>&quot;[Terms Inquiry]&quot;</em> or <em>&quot;[Legal Request]&quot;</em> in your email subject.</li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="terms-footer">
          <p>© {new Date().getFullYear()} SubTrackr. These terms are provided for informational purposes and do not constitute legal advice.</p>
          <p className="terms-footer-links">
            <Link to={returnPath}>{isAuthenticated ? 'Return to Dashboard' : 'Return to SubTrackr'}</Link>
            <span className="terms-footer-sep">·</span>
            <Link to="/privacy">Privacy Policy</Link>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default TermsPage;
