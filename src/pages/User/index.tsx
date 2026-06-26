import PageLayout from '../../shared/layouts/PageLayout';
import '../../features/mainPage/components/UserCard';
import './style.css';
import UserCard from '../../features/mainPage/components/UserCard';

const User = () => {
  const userData = localStorage.getItem('user');

  const user = userData ? JSON.parse(userData) : null;

  return (
    <PageLayout name={'User'} href={'/user'}>
      <UserCard
        id={user.id}
        email={user.email}
        phoneNumber={user.phoneNumber}
        password={user.password}
      />
    </PageLayout>
  );
};

export default User;
