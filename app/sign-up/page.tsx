// src/components/auth/sign-up-form.tsx
"use client";

import * as React from "react";
import { useSignUp, useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, SignUpFormValues } from "./signup-schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// Import the new layout primitives from Shadcn
import { Field, FieldLabel, FieldDescription, FieldError } from "@/components/ui/field";

export default function SignUpForm() {
  const { signUp } = useSignUp();
  const { signIn } = useSignIn();
  const router = useRouter();
  const [verifying, setVerifying] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const { control, handleSubmit, setError, formState: { errors } } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { email: "", password: "", code: "" },
  });

  if (!signUp || !signIn) {
    return <div className="p-4 text-center text-sm text-muted-foreground">Initializing form...</div>;
  }

  // Clerk v7 explicit .sso() pattern for Google OAuth
  async function handleGoogleOAuth() {
    setLoading(true);
    try {
      await signIn.sso({
        strategy: "oauth_google",
        redirectUrl: "/",
        redirectCallbackUrl: "/sign-up/sso-callback"
      });
    } catch (err: any) {
      setError("root", { message: err.errors?.[0]?.message || "Google auth failed" });
      setLoading(false);
    }
  }

  // Standard credentials account generation
  async function onSubmit(values: SignUpFormValues) {
    setLoading(true);
    try {
      await signUp.password({ emailAddress: values.email, password: values.password });
      setVerifying(true);
    } catch (err: any) {
      setError("root", { message: err.errors?.[0]?.message || "Failed to create account" });
    } finally {
      setLoading(false);
    }
  }

  // OTP Validation Handler using Clerk v7 .finalize()
  async function onVerifySubmit(values: SignUpFormValues) {
    if (!values.code) return;
    setLoading(true);
    try {
      await signUp.verifications.verifyEmailCode({ code: values.code });
      if (signUp.status === "complete") {
        await signUp.finalize({
          navigate: async () => {
            router.push("/dashboard");
          },
        });
      }
    } catch (err: any) {
      setError("code", { message: err.errors?.[0]?.message || "Invalid code" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="h-screen flex flex-col items-center justify-center">
    <h2 className="text-center font-playfair my-4 text-2xl">Welcome to <span className="text-(--primary-color)">Eclat Essense</span></h2>
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle>{verifying ? "Verify Email" : "Create Account"}</CardTitle>
        <CardDescription>
          {verifying ? "Check your inbox for your code." : "Sign up via Google or credentials."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!verifying && (
          <div className="space-y-4 mb-4">
            <div className="relative flex items-center justify-center my-4">
              <span className="absolute inset-x-0 h-px bg-muted"></span>
            </div>
          </div>
        )}

        {/* Standard raw HTML form paired directly with RHF's handleSubmit hook */}
        <form onSubmit={handleSubmit(verifying ? onVerifySubmit : onSubmit)} className="space-y-4">
          {!verifying ? (
            <>
              {/* EMAIL FIELD */}
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Field data-invalid={!!errors.email}>
                    <FieldLabel>Email</FieldLabel>
                    <Input placeholder="username@example.com" {...field} className="h-12 rounded-none"/>
                    <FieldError>{errors.email?.message}</FieldError>
                  </Field>
                )}
              />

              {/* PASSWORD FIELD */}
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <Field data-invalid={!!errors.password}>
                    <FieldLabel>Password</FieldLabel>
                    <Input type="password" {...field} className="h-12 rounded-none"/>
                    <FieldError>{errors.password?.message}</FieldError>
                  </Field>
                )}
              />
            </>
          ) : (
            /* VERIFICATION OTP CODE FIELD */
            <Controller
              name="code"
              control={control}
              render={({ field }) => (
                <Field data-invalid={!!errors.code}>
                  <FieldLabel>Verification Code</FieldLabel>
                  <Input placeholder="123456" {...field} className="h-12 rounded-none"/>
                  <FieldError>{errors.code?.message}</FieldError>
                </Field>
              )}
            />
          )}
          
          {errors.root && (
            <p className="text-sm font-medium text-destructive">{errors.root.message}</p>
          )}

          <Button type="submit" className="w-full bg-(--primary-color) h-12 rounded-none" disabled={loading}>
            {loading ? "Processing..." : verifying ? "Verify Code" : "Sign Up"}
          </Button>
          <Button 
            type="button" 
            variant="outline" 
            className="w-full flex items-center justify-center h-12 rounded-none" 
            onClick={handleGoogleOAuth}
            disabled={loading}
            >
              <svg className="h-4 w-4" aria-hidden="true" viewBox="0 0 488 512">
                <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
              </svg>
              Continue with Google
            </Button>
        </form>
      </CardContent>
    </Card>
    </section>
  );
}
