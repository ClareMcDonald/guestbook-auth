import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { signOutUser } from '../services/user';

export default function Header() {
    const { user } = useUser();

    async function handleSignOut() {
        setUser('');
        await signOutUser();

    }
  return (
      <>
          <h1>Alchemy Guestbook</h1>
          <h4>logged in as {user.email}</h4>
    </>
  )
}
