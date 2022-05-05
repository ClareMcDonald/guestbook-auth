import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function Auth() {
  const { login } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const location = useLocation();
  const history = useHistory();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      await login(email, password);
      console.log(location.search.origin)
      const url = location.search.origin ? location.search.pathname : '/';
      
      history.replace(url);

    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <h1>Auth</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" />
        <button type="submit">Sign In</button>
        {/* get clarifcation on the below line */}
        <p>{error}</p>
      </form>
    </>
  )
}
