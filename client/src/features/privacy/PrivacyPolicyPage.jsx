import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useThemeStore from '../../store/themeStore';
import useAuthStore from '../../store/authStore';
import './PrivacyPolicyPage.css';

const EFFECTIVE_DATE = 'October 17, 2026';

/* ── Table of Contents data ── */
const tocItems = [
  { id: 'info-collected', label: 'Information We Collect' },
  { id: 'how-we-use', label: 'How We Use Your Information' },
  { id: 'storage-security', label: 'Data Storage & Security' },
  { id: 'email-notifications', label: 'Email Notifications' },
  { id: 'third-party', label: 'Third-Party Services' },
  { id: 'cookies-local-storage', label: 'Cookies & Local Storage' },
  { id: 'data-retention', label: 'Data Retention & Deletion' },
  { id: 'user-rights', label: 'Your Rights' },
  { id: 'policy-updates', label: 'Policy Updates' },
  { id: 'contact', label: 'Contact Information' },
];

const PrivacyPolicyPage = () => {
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
    <div className="privacy-page" id="privacy-policy-page">
      {/* Background orbs wrapped in clipping container */}
      <div className="privacy-bg" aria-hidden="true">
        <div className="privacy-bg-orb privacy-bg-orb--1" />
        <div className="privacy-bg-orb privacy-bg-orb--2" />
      </div>

      {/* Top bar */}
      <div className="privacy-topbar">
        <Link to={returnPath} className="privacy-back-link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          {returnLabel}
        </Link>
      </div>

      <div className="privacy-container">
        {/* Header */}
        <header className="privacy-header">
          <div className="privacy-header-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <h1>
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="privacy-effective-date">Effective Date: {EFFECTIVE_DATE}</p>
        </header>

        {/* Table of Contents */}
        <nav className="privacy-toc" aria-label="Table of contents">
          <h2>Contents</h2>
          <ol>
            {tocItems.map((item, i) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>
                  <span className="privacy-toc-num">{i + 1}.</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 1. Information We Collect */}
        <section className="privacy-card" id="info-collected">
          <div className="privacy-card-header">
            <h2>1. Information We Collect</h2>
          </div>

          <h3>Account Data</h3>
          <p>When you register for SubTrackr, we collect the following information to create and manage your account:</p>
          <ul>
            <li><strong>Full name</strong> — used for personalisation and display within the app.</li>
            <li><strong>Email address</strong> — used as your unique login identifier and for sending optional email notifications.</li>
            <li><strong>Password</strong> — stored as a one-way salted hash using bcrypt. We never store or have access to your plaintext password.</li>
          </ul>

          <h3>Subscription & Financial Preferences</h3>
          <p>To provide subscription tracking and analytics, we store data you enter voluntarily:</p>
          <ul>
            <li>Subscription name, cost, billing cycle, start date, next payment date, and status.</li>
            <li>Category tags and optional notes you attach to subscriptions.</li>
            <li>Logo URLs you provide for subscriptions.</li>
            <li>Trial end dates for subscriptions in a trial period.</li>
          </ul>

          <h3>Preferences & Settings</h3>
          <ul>
            <li><strong>Theme preference</strong> — dark or light mode.</li>
            <li><strong>Currency preference</strong> — INR or USD display format.</li>
            <li><strong>Budget limit</strong> — optional monthly spending threshold you configure.</li>
          </ul>

          <h3>Automatically Collected Data</h3>
          <ul>
            <li><strong>Timestamps</strong> — account creation and update timestamps, subscription creation/modification dates, and last interaction dates are recorded automatically by the database.</li>
          </ul>
          <p>We do <strong>not</strong> collect IP addresses, browser fingerprints, device identifiers, geolocation data, or usage analytics through any tracking SDK.</p>
        </section>

        {/* 2. How We Use Your Information */}
        <section className="privacy-card" id="how-we-use">
          <div className="privacy-card-header">
            <h2>2. How We Use Your Information</h2>
          </div>
          <p>Your data is used exclusively to provide the features of SubTrackr:</p>
          <ul>
            <li><strong>Authentication</strong> — verifying your identity when you sign in via JWT-based sessions.</li>
            <li><strong>Subscription management</strong> — displaying, calculating, and tracking your subscriptions, billing cycles, and payment dates.</li>
            <li><strong>Dashboard & analytics</strong> — generating spending summaries, cost trends, category breakdowns, and budget alerts from your subscription data.</li>
            <li><strong>Notifications</strong> — creating in-app alerts for upcoming payments, trial expirations, budget threshold warnings, and unused subscriptions.</li>
            <li><strong>Email reminders</strong> — sending renewal reminder emails when a payment is due within 3 days (only if email sending is configured).</li>
            <li><strong>Lifecycle automation</strong> — automatically transitioning subscription statuses (e.g., trial → expiring) and advancing payment dates.</li>
            <li><strong>PDF report export</strong> — generating downloadable subscription reports on the client side from your data.</li>
            <li><strong>Administrative oversight</strong> — admin users can view aggregate platform statistics such as user counts and total subscription counts. Admins cannot view your individual subscription costs or notes.</li>
          </ul>
          <p>We do <strong>not</strong> sell, rent, share, or trade your personal information with third parties for marketing or advertising purposes.</p>
        </section>

        {/* 3. Data Storage & Security */}
        <section className="privacy-card" id="storage-security">
          <div className="privacy-card-header">
            <h2>3. Data Storage & Security</h2>
          </div>
          <p>We implement the following security measures to protect your data:</p>
          <ul>
            <li><strong>Cloud hosting & data residency</strong> — our database is hosted on MongoDB Atlas deployed in the AWS Asia Pacific (Mumbai) region (<code>ap-south-1</code>).</li>
            <li><strong>Encryption in transit & at rest</strong> — all data transmitted between the server and database is encrypted using TLS (Transport Layer Security 1.2/1.3), and stored data is encrypted at rest using industry-standard AES-256 encryption.</li>
            <li><strong>Network access controls</strong> — database connections are locked down with strict IP allowlisting and role-based authentication credentials.</li>
            <li><strong>Password hashing</strong> — passwords are hashed using bcrypt with automatic salting before storage. Plaintext passwords are never persisted.</li>
            <li><strong>JWT authentication</strong> — sessions are managed using signed JSON Web Tokens signed with a secure server-side secret key.</li>
            <li><strong>HTTP security headers</strong> — Helmet middleware applies standard security headers (<code>X-Content-Type-Options</code>, <code>X-Frame-Options</code>, <code>Strict-Transport-Security</code>, etc.).</li>
            <li><strong>CORS protection</strong> — cross-origin requests are strictly restricted to the configured frontend origin.</li>
            <li><strong>Input validation</strong> — all API inputs are validated against strict schemas using Zod before processing.</li>
          </ul>
          <p style={{ marginTop: 'var(--space-md)', fontSize: 'var(--font-size-sm)', color: 'var(--text-muted)' }}>
            While we implement industry-standard technical and organisational safeguards to protect your personal data, no method of transmission over the Internet or electronic cloud storage can be guaranteed to be 100% secure.
          </p>
        </section>

        {/* 4. Email Notifications */}
        <section className="privacy-card" id="email-notifications">
          <div className="privacy-card-header">
            <h2>4. Email Notifications</h2>
          </div>
          <p>SubTrackr may send you transactional emails related to your subscription activity:</p>
          <ul>
            <li><strong>Renewal reminders</strong> — sent when a subscription payment is due within 3 days. These include the subscription name, billing cycle, renewal date, and cost.</li>
          </ul>
          <p>Email sending is handled via the SendGrid API. If the SendGrid API key is not configured on the server, email functionality is disabled entirely and no emails are sent.</p>
          <p>We do <strong>not</strong> send marketing, promotional, or newsletter emails. All emails are strictly service-related.</p>
          <p>
            Because these renewal reminders are strictly transactional and directly tied to your active subscriptions, they are sent automatically when email delivery is configured. You can manage or stop reminders for any subscription by editing, pausing, or deleting the subscription from your dashboard, deleting your account via Settings, or contacting support at <a href="mailto:substrackr@gmail.com">substrackr@gmail.com</a>.
          </p>
        </section>

        {/* 5. Third-Party Services */}
        <section className="privacy-card" id="third-party">
          <div className="privacy-card-header">
            <h2>5. Third-Party Services</h2>
          </div>
          <p>SubTrackr relies on the following third-party services to operate:</p>

          <h3>MongoDB Atlas</h3>
          <p>All application data (accounts, subscriptions, notifications, and categories) is stored in a MongoDB Atlas cloud database operated by MongoDB, Inc., hosted in the AWS Asia Pacific (Mumbai) region (<code>ap-south-1</code>).</p>
          <ul>
            <li>Data is stored on MongoDB Atlas cloud infrastructure with automated replication.</li>
            <li>MongoDB Atlas provides industry-standard encryption at rest (AES-256) and in transit (TLS 1.2/1.3) by default.</li>
            <li>For more information on MongoDB's security and data handling practices, review the <a href="https://www.mongodb.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">MongoDB Privacy Policy</a>.</li>
          </ul>

          <h3>SendGrid (Twilio)</h3>
          <p>When configured, renewal reminder emails are sent through the SendGrid email delivery service operated by Twilio Inc.</p>
          <ul>
            <li>SendGrid receives the recipient email address and email content solely to deliver service-related messages.</li>
            <li>No additional personal data is shared with SendGrid beyond what is required to transmit the email.</li>
            <li>For more information on Twilio's privacy practices, review the <a href="https://www.twilio.com/en-us/legal/privacy" target="_blank" rel="noopener noreferrer">Twilio Privacy Statement</a>.</li>
          </ul>

          <p>We do <strong>not</strong> use any analytics services, advertising networks, social media trackers, or CDN-based user tracking.</p>
        </section>

        {/* 6. Cookies & Local Storage */}
        <section className="privacy-card" id="cookies-local-storage">
          <div className="privacy-card-header">
            <h2>6. Cookies & Local Storage</h2>
          </div>
          <p>SubTrackr does <strong>not</strong> set any HTTP cookies.</p>
          <p>The application uses browser <strong>localStorage</strong> to persist the following data on your device:</p>
          <ul>
            <li><strong>Authentication token</strong> — a JWT token stored after login to maintain your session. Cleared on logout.</li>
            <li><strong>User profile data</strong> — your name, email, role, and preferences cached locally for faster page loads. Cleared on logout.</li>
            <li><strong>Theme preference</strong> — your dark/light mode selection so it persists across browser sessions.</li>
          </ul>
          <p>All localStorage data is stored locally in your browser and is not transmitted to any third party. You can clear this data at any time by logging out or clearing your browser storage.</p>
        </section>

        {/* 7. Data Retention & Deletion */}
        <section className="privacy-card" id="data-retention">
          <div className="privacy-card-header">
            <h2>7. Data Retention & Deletion</h2>
          </div>
          <p>Your data is retained for as long as you maintain an active SubTrackr account:</p>
          <ul>
            <li><strong>Account data</strong> — retained until you delete your account through the Settings page.</li>
            <li><strong>Subscriptions</strong> — retained until you individually delete them or delete your account.</li>
            <li><strong>Notifications</strong> — stored in the database. Notifications are associated with your account and removed when your account is deleted.</li>
          </ul>
          <p>
            Data deletion is <strong>immediate and permanent</strong>. When you confirm account deletion in your Settings page, your user profile, all tracked subscriptions, and notification records are purged from the live database in real time. Local session data (authentication tokens and cached profile details) is immediately wiped from your browser storage.
          </p>
          <p>
            Routine disaster recovery snapshots maintained by MongoDB Atlas are cycled out and permanently overwritten in accordance with standard cloud backup retention windows (up to 30 days), after which no residual copies exist.
          </p>
        </section>

        {/* 8. Your Rights */}
        <section className="privacy-card" id="user-rights">
          <div className="privacy-card-header">
            <h2>8. Your Rights</h2>
          </div>
          <p>SubTrackr provides built-in self-service controls so you can manage your personal data directly:</p>
          <ul>
            <li><strong>Access your data</strong> — view all your subscriptions, notifications, and profile information at any time within the app.</li>
            <li><strong>Update your data</strong> — edit your profile name, password, currency preference, theme, and budget limit from the Settings page.</li>
            <li><strong>Export your data</strong> — generate and download a PDF report of all your subscriptions from the Subscriptions page.</li>
            <li><strong>Delete subscriptions</strong> — remove individual subscriptions at any time.</li>
            <li><strong>Delete your account</strong> — permanently delete your account and all associated data from the Settings page.</li>
          </ul>

          <h3>Statutory Data Protection Rights</h3>
          <p>
            Depending on your jurisdiction (including under India&apos;s Digital Personal Data Protection Act, the EU/UK GDPR, or the California CCPA), you may have legal rights to request data rectification, full erasure, portability, or grievance redressal.
          </p>
          <p>
            If you need assistance exercising rights beyond the self-service controls in your account, or wish to submit a formal data inquiry, please contact us at <a href="mailto:substrackr@gmail.com">substrackr@gmail.com</a>. We will verify your request and respond within 30 days at no charge.
          </p>
        </section>

        {/* 9. Policy Updates */}
        <section className="privacy-card" id="policy-updates">
          <div className="privacy-card-header">
            <h2>9. Policy Updates</h2>
          </div>
          <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for operational, legal, or regulatory reasons. When we make changes:</p>
          <ul>
            <li>The "Effective Date" at the top of this page will be updated.</li>
            <li>Material changes will be communicated through an in-app notification.</li>
          </ul>
          <p>We encourage you to review this page periodically to stay informed about how we protect your data.</p>
        </section>

        {/* 10. Contact Information */}
        <section className="privacy-card" id="contact">
          <div className="privacy-card-header">
            <h2>10. Contact Information</h2>
          </div>
          <p>If you have questions, concerns, feedback, or requests regarding this Privacy Policy or your personal data, please reach out to us:</p>
          <ul>
            <li><strong>Email</strong>: <a href="mailto:substrackr@gmail.com">substrackr@gmail.com</a></li>
            <li><strong>Response Window</strong>: We aim to acknowledge and respond to all privacy inquiries within 48 to 72 business hours.</li>
            <li><strong>Subject Line Guidance</strong>: To ensure rapid routing, please include <em>&quot;[Privacy Request]&quot;</em> or <em>&quot;[Data Inquiry]&quot;</em> in your email subject.</li>
          </ul>
          <p>
            For statutory data subject requests (such as access, rectification, or account erasure under GDPR, CCPA, or DPDP regulations), verified requests are fulfilled within 30 days at no charge.
          </p>
        </section>

        {/* Footer */}
        <footer className="privacy-footer">
          <p>© {new Date().getFullYear()} SubTrackr. This privacy notice is provided for informational purposes and does not constitute legal advice.</p>
          <p>
            <Link to={returnPath}>{isAuthenticated ? 'Return to Dashboard' : 'Return to SubTrackr'}</Link>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
