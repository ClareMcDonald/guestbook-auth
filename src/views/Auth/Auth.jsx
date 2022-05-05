import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function Auth() {
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
