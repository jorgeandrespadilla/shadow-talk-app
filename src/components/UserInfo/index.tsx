import { useSession } from '@/hooks/useSession';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';
import './UserInfo.css';

function UserInfo() {
  const { session, removeSession } = useSession();

  if (!session) {
    return null;
  }

  function closeSession() {
    removeSession();
  }

  return (
    <div className="user-info__container">
      <img className="user-info__avatar" src={session.avatar} alt="avatar" />
      <div className="user-info__name">{session.nickName}</div>
      <button className="user-info__close" onClick={closeSession}>
        <ArrowRightOnRectangleIcon className="icon-lg" />
      </button>
    </div>
  );
}

export default UserInfo;