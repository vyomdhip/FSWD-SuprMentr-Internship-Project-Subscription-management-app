const dotenv = require('dotenv');
const path = require('path');

// Load .env from the project root
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

const env = {
  MONGODB_URI: process.env.MONGODB_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  PORT: parseInt(process.env.PORT, 10) || 5000,
  NODE_ENV: process.env.NODE_ENV || 'development',

  // Email service config (Brevo, Resend, or SendGrid)
  BREVO_API_KEY: process.env.BREVO_API_KEY || null,
  RESEND_API_KEY: process.env.RESEND_API_KEY || null,
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY || null,
  EMAIL_FROM: process.env.EMAIL_FROM || null,

  // Admin email (auto-promoted to admin role on login)
  ADMIN_EMAIL: process.env.ADMIN_EMAIL || 'vyomdhip1132003@gmail.com',
};

// Validate required variables
const required = ['MONGODB_URI', 'JWT_SECRET'];
for (const key of required) {
  if (!env[key]) {
    console.error(`❌ Missing required environment variable: ${key}`);
    console.error(`   Please copy .env.example to .env and fill in values.`);
    process.exit(1);
  }
}

module.exports = env;
