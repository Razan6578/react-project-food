import './style.css';
import type { User } from '../../../../types/user';
import { useNavigate } from 'react-router-dom';

const UserCard = (props: User) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('currentUserToken');
    navigate('/');
  };

  return (
    <div className="user-cont">
      <p>{props.email}</p>
      <button onClick={handleLogout} style={{ backgroundColor: 'red' }}>
        Log out of the account
      </button>
    </div>
  );
};

export default UserCard;
