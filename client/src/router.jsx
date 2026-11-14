import { createBrowserRouter, Navigate } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import DashboardLayout from './layouts/DashboardLayout';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './features/auth/LoginPage';
import RegisterPage from './features/auth/RegisterPage';
import DashboardPage from './features/dashboard/DashboardPage';
import SubscriptionsPage from './features/subscriptions/SubscriptionsPage';
import AnalyticsPage from './features/analytics/AnalyticsPage';
import SettingsPage from './features/settings/SettingsPage';
import AdminDashboard from './features/admin/AdminDashboard';
import AdminRoute from './components/AdminRoute';
import MaintenancePage from './features/maintenance/MaintenancePage';
import PrivacyPolicyPage from './features/privacy/PrivacyPolicyPage';
import TermsPage from './features/terms/TermsPage';
import NotFoundPage from './features/notfound/NotFoundPage';

const router = createBrowserRouter([
  {
    // Maintenance page (public)
    path: '/maintenance',
    element: <MaintenancePage />,
  },
  {
    // Privacy Policy page (public)
    path: '/privacy-policy',
    element: <PrivacyPolicyPage />,
  },
  {
    // Redirect /privacy to /privacy-policy
    path: '/privacy',
    element: <Navigate to="/privacy-policy" replace />,
  },
  {
    // Terms & Conditions page (public)
    path: '/terms-conditions',
    element: <TermsPage />,
  },
  {
    // Redirect /terms to /terms-conditions
    path: '/terms',
    element: <Navigate to="/terms-conditions" replace />,
  },
  {
    // Root route: redirect to dashboard (protected route will redirect to /login if unauthenticated)
    path: '/',
    element: <Navigate to="/dashboard" replace />,
  },
  {
    // Public routes (authentication)
    element: <AuthLayout />,
    children: [
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <RegisterPage /> },
    ],
  },
  {
    // Protected routes (dashboard)
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: '/dashboard', element: <DashboardPage /> },
      { path: '/subscriptions', element: <SubscriptionsPage /> },
      { path: '/analytics', element: <AnalyticsPage /> },
      { path: '/settings', element: <SettingsPage /> },
      { path: '/admin', element: <AdminRoute><AdminDashboard /></AdminRoute> },
    ],
  },
  {
    // Explicit 404 route
    path: '/404',
    element: <NotFoundPage />,
  },
  {
    // Catch-all: 404 Page Not Found for all invalid/unmatched routes
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;

