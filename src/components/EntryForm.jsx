import { useState } from 'react';
import { useUser } from '../context/UserContext';
import { createEntry } from '../services/entries';

export default function EntryForm() {
    const [content, setContent] = useState('');
    const { user } = useUser();

  return (
    <>
        <form onSubmit={createEntry}>
            <textarea value={content} name='content' onChange={(e) => setContent(e.target.value)}></textarea>
            <button type='submit'>Add Entry</button>
        </form>
    </>
  )
}
