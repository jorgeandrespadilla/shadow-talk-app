import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import Brand from '@/components/Brand';
import Loader from '@/components/Loader';
import { useSession } from '@/hooks/useSession';
import { useClipboard } from '@/hooks/useClipboard';
import { Session as SessionData } from '@/shared/types';
import { handleAPIError } from '@/shared/validation';
import { createSession } from '@/services/sessions';
import './Session.css';

function Session() {
  const navigate = useNavigate();
  const { session: currentSession, updateSession } = useSession();
  const [newSession, setNewSession] = useState<SessionData | null>(null);
  const { copied, copyToClipboard } = useClipboard();

  useEffect(() => {
    let loadingSessionToast: string | undefined;
    const run = async () => {
      try {
        if (currentSession) {
          navigate('/');
          return;
        }
        loadingSessionToast = toast.loading('Creating new session...');
        const session = await createSession();
        setNewSession(session);
        toast.dismiss(loadingSessionToast);
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
  }, [setNewSession, currentSession]);

  async function handleSubmit() {
    if (!newSession) {
      return;
    }
    await updateSession(newSession);
    navigate('/');
  }

  return (
    <div className="session__content">
      <div className="session__content-wrapper">
        <Brand type='header' />
        <div className="session__description">
          {
            newSession ? (
              <div className="session__code">
                <span>
                  Your session code is <strong>{newSession.sessionCode}</strong>
                </span>
                <button
                  className="outlined"
                  onClick={() => copyToClipboard(newSession.sessionCode)}
                  disabled={copied}
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            ) : (
              <Loader />
            )
          }
        </div>
        <div className='session__actions'>
          <button
            onClick={handleSubmit}
            disabled={!newSession}
          >
            <span>Start</span>
            <ChevronRightIcon className="icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Session;