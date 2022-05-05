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
  
  return (
    <>
      <h1>Auth</h1>
      <form>
        <input />
        <input />
        <button>Sign In</button>
      </form>
    </>
  )
}
