// src/app/sign-up/sso-callback/page.tsx
"use client";

import { AuthenticateWithRedirectCallback } from "@clerk/nextjs";

export default function ClerkV7SSOCallbackPage() {
  /**
   * Clerk v7 parses the incoming PKCE/OAuth state tokens natively.
   * By providing these properties, it automatically redirects the user
   * to your final landing path once the session is established.
   */
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-background">
      <div className="text-center space-y-2">
        {/* Native Clerk v7 Callback Handler */}
        <AuthenticateWithRedirectCallback 
          signUpForceRedirectUrl="/"
          signInForceRedirectUrl="/"
        />
        <p className="text-sm text-muted-foreground animate-pulse">
          Completing secure connection...
        </p>
      </div>
    </div>
  );
}
