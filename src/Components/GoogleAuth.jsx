// src/components/GoogleAuth.jsx
import { useState, useEffect } from 'react';
import { account } from '../lib/appwrite';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



function GoogleAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const checkSession = async () => {
      try {
        const session = await account.getSession('current');
        const userData = await account.get();
        setUser(userData);
      } catch (error) {
        console.error('Session not found', error);
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, []);

  const loginWithGoogle = async () => {
    try {
      // The URL to redirect back to after authentication
      const redirectUrl = "https://latent-ai.netlify.app";
      
      // Create OAuth session with Google
      account.createOAuth2Session('google', redirectUrl, `${redirectUrl}/auth-failure`);
    } catch (error) {
      console.error('OAuth error', error);
    }
  };

  const logout = async () => {
    try {
      await account.deleteSession('current');
      setUser(null);
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  if (loading) {
    return <div
     style={{
        color: "white"
      }}
    >Loading...</div>;
  }

  return (
    <div>
      {user ? (
        <div>
          <h2
       style={{
              color: "white"
            }}
          >Welcome, {user.name}</h2>
          <p
         style={{
              color: "white"
            }} 


          >Email: {user.email}</p>
          <Button variant="outlined" size="medium" onClick={logout}>Logout</Button>
        </div>
      ) : (
        <Button variant="outlined" size="medium" onClick={loginWithGoogle}>Login with Google</Button>
      )}
    </div>
  );
}

export default GoogleAuth;
