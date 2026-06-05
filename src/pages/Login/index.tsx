import PageLayout from "../../shared/layouts/PageLayout";
import { useNavigate } from 'react-router-dom';

const Login = () =>{

  const navigate = useNavigate();
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    // Валідація полів

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    
    // Перевірка валідності email
 
    if (!emailRegex.test(email)) {
      alert('Invalid email format');
      return;
    }

    // Перевірка валідності пароля
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      alert('Password does not meet requirements');
      return;
    }

    try {
      const response = await fetch(
        'http://127.0.0.1:8000/api/login/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );

      const data = await response.json();

      console.log(data);

      if (response.ok) {
        alert('Login successful');
        localStorage.setItem('user', JSON.stringify(data.user));

        navigate('/');
      } else {
        alert(data.message || 'Login error');
      }

    } catch (error) {
      console.log(error);
      alert('Server error');
    }
  };
  
  return (
    <PageLayout name={'Login'} href={'/login'}>
      <div style={{ margin: '150px', textAlign: 'center' }}>
        <h1>Login</h1>
      
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '400px' }}>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" pattern={emailRegex.toString()}  required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" required />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </PageLayout>
  )
};


export default Login;
