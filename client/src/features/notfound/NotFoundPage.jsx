import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/authStore';
import useThemeStore from '../../store/themeStore';
import './NotFoundPage.css';

const NotFoundPage = () => {
  const initTheme = useThemeStore((state) => state.initTheme);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isAdmin = useAuthStore((state) => state.isAdmin);
  const navigate = useNavigate();

  // Ensure application theme (dark/light) is applied on initial render
  useEffect(() => {
    initTheme();
  }, [initTheme]);

  // Determine home path based on authentication role
  const homePath = isAuthenticated ? (isAdmin ? '/admin' : '/dashboard') : '/login';

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate(homePath);
    }
  };

  return (
    <div className="notfound-page" id="notfound-page">
      {/* Background ambient gradient orbs */}
      <div className="notfound-bg-glow notfound-bg-glow--1" aria-hidden="true" />
      <div className="notfound-bg-glow notfound-bg-glow--2" aria-hidden="true" />

      <main className="notfound-card" role="main">
        {/* Brand pill */}
        <div className="notfound-brand">
          <div className="notfound-brand-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="1" y="4" width="22" height="16" rx="3" />
              <line x1="1" y1="10" x2="23" y2="10" />
              <line x1="6" y1="15" x2="10" y2="15" />
            </svg>
          </div>
          <span className="notfound-brand-name">SubTrackr</span>
        </div>

        {/* Relevant 404 vector illustration */}
        <div className="notfound-illustration">
          <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            {/* Ambient circular badge */}
            <circle cx="60" cy="60" r="54" fill="var(--primary-subtle)" stroke="var(--border)" strokeWidth="1.5" />

            {/* Background card / browser element */}
            <rect x="26" y="28" width="68" height="52" rx="10" fill="var(--bg-surface)" stroke="var(--border-strong)" strokeWidth="1.5" />

            {/* Window header bar & status dots */}
            <line x1="26" y1="42" x2="94" y2="42" stroke="var(--border)" strokeWidth="1.5" />
            <circle cx="36" cy="35" r="2.5" fill="var(--danger)" opacity="0.85" />
            <circle cx="44" cy="35" r="2.5" fill="var(--warning)" opacity="0.85" />
            <circle cx="52" cy="35" r="2.5" fill="var(--success)" opacity="0.85" />

            {/* Content skeleton lines */}
            <line x1="36" y1="52" x2="60" y2="52" stroke="var(--border-strong)" strokeWidth="2" strokeLinecap="round" />
            <line x1="36" y1="60" x2="52" y2="60" stroke="var(--border)" strokeWidth="2" strokeLinecap="round" />
            <line x1="36" y1="68" x2="44" y2="68" stroke="var(--border)" strokeWidth="2" strokeLinecap="round" />

            {/* Decorative accent elements */}
            <circle cx="86" cy="24" r="3" fill="var(--accent)" opacity="0.75" />
            <circle cx="18" cy="74" r="2.5" fill="var(--primary)" opacity="0.65" />
            <path d="M100 48 L102 52 L106 54 L102 56 L100 60 L98 56 L94 54 L98 52 Z" fill="var(--accent)" opacity="0.85" />

            {/* Magnifying search lens */}
            <g className="notfound-glass-group">
              <circle cx="74" cy="72" r="20" fill="var(--bg-elevated)" opacity="0.95" />
              <circle cx="74" cy="72" r="20" stroke="var(--primary)" strokeWidth="3" />
              <circle cx="74" cy="72" r="16" stroke="var(--accent)" strokeWidth="1.5" opacity="0.6" fill="var(--primary-light)" />
              {/* Question mark glyph */}
              <path d="M71 66 C71 63.5 77 63.5 77 67 C77 69.5 74 70.5 74 73" stroke="var(--text-primary)" strokeWidth="2" strokeLinecap="round" fill="none" />
              <circle cx="74" cy="77" r="1.25" fill="var(--text-primary)" />
              {/* Handle */}
              <line x1="88" y1="86" x2="104" y2="102" stroke="var(--primary)" strokeWidth="4.5" strokeLinecap="round" />
              <line x1="93" y1="91" x2="102" y2="100" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
            </g>
          </svg>
        </div>

        {/* 404 Heading */}
        <h1 className="notfound-code gradient-text">404</h1>

        {/* Required message */}
        <h2 className="notfound-title">Oops! The page you're looking for doesn't exist.</h2>

        <p className="notfound-message">
          The link you followed may be broken, or the page may have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {/* Action buttons */}
        <div className="notfound-actions">
          <Link
            to={homePath}
            className="notfound-home-btn"
            id="notfound-home-btn"
            title="Go to Home"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="notfound-btn-icon"
              aria-hidden="true"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>Go Back Home</span>
          </Link>

          <button
            type="button"
            onClick={handleGoBack}
            className="notfound-back-btn"
            id="notfound-back-btn"
            title="Go to previous page"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="notfound-btn-icon"
              aria-hidden="true"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <span>Previous Page</span>
          </button>
        </div>

        <div className="notfound-footer">
          <span>Lost? Let's get you back on track.</span>
        </div>
      </main>
    </div>
  );
};

export default NotFoundPage;
