import { Routes, Route, Navigate } from 'react-router-dom';
import AddPost from '@/pages/AddPost';
import Feed from '@/pages/Feed';
import Session from '@/pages/Session';
import MainLayout from '@/components/MainLayout';
import ProtectedRoute from './ProtectedRoute';

type RouterProps = {
  showTopBar?: boolean;
};

function Router({
  showTopBar = true,
}: RouterProps) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout showTopBar={showTopBar} />
        }
      >
        <Route path="/session" element={<Session />} />
        <Route index element={<Navigate to="/feed" replace />} />
        <Route path="/feed" element={<ProtectedRoute><Feed /></ProtectedRoute>} />
        <Route path="/post/new" element={<ProtectedRoute><AddPost /></ProtectedRoute>} />
      </Route>
      <Route path="*" element={<Navigate to="/feed" replace />} />
    </Routes>
  );
}

export default Router;