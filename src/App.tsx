import { useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { healthCheckAll } from './services/common';
import { handleAPIError } from './shared/validation';
import { useSession } from './hooks/useSession';
import { getSession } from './services/sessions';
import Loader from './components/Loader';
import Router from './routes';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const { hasActiveSession, updateSession, getSessionCode } = useSession();

  useEffect(() => {
    let loadingSessionToast: string | undefined;
    const run = async () => {
      try {
        // Check if services are available
        await healthCheckAll();
        if (hasActiveSession) {
          setLoading(false);
          return;
        }
        // Check if there is a session available and restore it
        const sessionCode = await getSessionCode();
        if (!sessionCode) {
          setLoading(false);
          return;
        }
        loadingSessionToast = toast.loading('Restoring session...');
        const session = await getSession({
          sessionCode,
        });
        if (!session) {
          setLoading(false);
          toast.dismiss(loadingSessionToast);
          toast.error('Session not found');
          return;
        }
        await updateSession(session);
        toast.dismiss(loadingSessionToast);
        setLoading(false);
      }
      catch (error) {
        toast.dismiss(loadingSessionToast);
        handleAPIError(error);
      }
    };
    run();
    return () => {
      toast.dismiss(loadingSessionToast);
    }
  }, [hasActiveSession]);

  return (
    <>
      {
        loading ? (
          <div className="loading">
            <Loader />
          </div>
        ) : <Router showTopBar={hasActiveSession} />
      }
      <Toaster position="top-center" toastOptions={{
        className: 'custom-toast'
      }} />
    </>
  );
}

export default App;
