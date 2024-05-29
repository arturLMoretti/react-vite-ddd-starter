import ErrorFallback from '@/presentation/pages/errorElement';
import LoginPage from '@/presentation/pages/login';
import { Navigate, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    index: true,
    path: "/login",
    element: (
      <LoginPage />
    ),
    errorElement: (
      <ErrorFallback />
    )
  },
  {
    path: '*',
    children: [
      { index: true, element: <Navigate to="/login" /> },
    ]
  }
]);

export default router;
