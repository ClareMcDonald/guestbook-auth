import { useEffect, useState } from 'react';
import EntryForm from '../../components/EntryForm';
import { useUser } from '../../context/UserContext';
import { getEntries } from '../../services/entries';

export default function Dashboard() {
  const { logout } = useUser();
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEntries()
      .then(setEntries)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <h2>Dashboard</h2>
      <button onClick={logout}>Sign Out</button>
      <EntryForm onAddEntry={getEntries} />
      {loading
        ? <p>Loading entries ^_^</p>
        : <ul>{entries.map((entry) => (
          <li key={entry.id}>{entry.content}</li>
        ))}</ul>
      }
    </>
  )
}
