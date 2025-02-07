import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const clientId =
  "317542900345-avsfj5efv8nsfrfpj6p5t30kr4ih3u63.apps.googleusercontent.com";

interface GoogleSignInProps {
  onSignIn: (user: any, idToken: string) => void;
}

function GoogleSignIn({ onSignIn }: GoogleSignInProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSuccess = (credentialResponse: any) => {
    setIsLoading(true);
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      console.log("Login Success: currentUser:", decoded);
      console.log("ID Token:", credentialResponse.credential);
      onSignIn(decoded, credentialResponse.credential);// Pass the decoded user info to the parent component
    } catch (err) {
      setError("Failed to decode user information.");
    } finally {
      setIsLoading(false);
    }
  };

  const onError = () => {
    setError("Login Failed. Please try again.");
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="GoogleSignIn">
        {error && <p className="error-message">{error}</p>}
        <GoogleLogin
          onSuccess={onSuccess}
          onError={onError}
          useOneTap
          shape="rectangular"
          size="large"
          text="continue_with"
          theme="filled_black"
          width="300"
        />
        {isLoading && <p>Loading...</p>}
      </div>
    </GoogleOAuthProvider>
  );
}

export default GoogleSignIn;
