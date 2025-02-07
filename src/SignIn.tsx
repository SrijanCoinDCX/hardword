import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

const clientId = '317542900345-avsfj5efv8nsfrfpj6p5t30kr4ih3u63.apps.googleusercontent.com';

function GoogleSignIn() {
  const onSuccess = (credentialResponse: any) => {
    const decoded = jwtDecode(credentialResponse.credential);
    console.log('Login Success: currentUser:', decoded);
    // Here you would typically handle the user data and authentication
  };

  const onError = () => {
    console.log('Login Failed');
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="GoogleSignIn">
        <h2>Sign in with Google</h2>
        <GoogleLogin
          onSuccess={onSuccess}
          onError={onError}
          useOneTap
          shape="rectangular"
          size="large"
          text="continue_with"
        />
      </div>
    </GoogleOAuthProvider>
  );
}

export default GoogleSignIn;