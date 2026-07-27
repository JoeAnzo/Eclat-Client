"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useSignUp } from "@clerk/nextjs"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

const signUpSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters").trim(),
  email: z.string().min(1, "Email is required").trim().email("Please enter a valid email address"),
  phoneNumber: z.string().min(5, "Phone number is required").trim(),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Please confirm your password"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
})

type SignUpFormValues = z.infer<typeof signUpSchema>

export default function SignUpForm({ className, ...props }: React.ComponentProps<"div">) {
  const [globalError, setGlobalError] = useState("")
  const [pendingVerification, setPendingVerification] = useState(false)
  const [verificationCode, setVerificationCode] = useState("")
  
  const router = useRouter()
  
  // Clerk v7+ maps fetchStatus for handling tracking cycles
  const { signUp, fetchStatus } = useSignUp()
  const isCurrentlyFetching = fetchStatus === "fetching"

  const { register, handleSubmit, formState: { errors } } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    mode: "onBlur",
    defaultValues: { username: '', email: '', phoneNumber: '', password: '', confirmPassword: '' }
  })

  // Phase 1: Initialize account registration via .create()
  async function onSubmit(values: SignUpFormValues) {
    if (!signUp) return
    setGlobalError("")

    const result = await signUp.create({
      username: values.username,
      emailAddress: values.email,
      password: values.password,
    })

    if (result.error) {
      setGlobalError(result.error.message || "An error occurred during registration.")
      return
    }

    // Clerk v7+ verification dispatch call
    const prepResult = await signUp.verifications.sendEmailCode()
    
    if (prepResult.error) {
      setGlobalError(prepResult.error.message || "Failed to send verification code.")
      return
    }

    setPendingVerification(true)
  }

  // Phase 2: Process direct code validation
  async function handleVerify(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!signUp) return
    setGlobalError("")

    // Clerk v7+ explicit validation argument schema
    const result = await signUp.verifications.verifyEmailCode({
      code: verificationCode,
    })

    if (result.error) {
      setGlobalError(result.error.message || "Invalid or expired verification code.")
      return
    }

    // Commit active instance context directly
    if (signUp.status === "complete") {
      await signUp.finalize()
      router.push("/")
    } else {
      setGlobalError("Additional verification steps are required.")
    }
  }

  return (
    <div className={cn("flex flex-col gap-6 border-none pt-12", className)} {...props}>
      <Card className="border-none max-w-[340px]">
        <CardHeader>
          <CardTitle className="text-center text-lg">
            {pendingVerification ? "Verify your Email" : "Create your account"}
          </CardTitle>
          <CardDescription>
            {pendingVerification 
              ? "Enter the verification code sent to your inbox." 
              : "Fill out the fields below to register."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!pendingVerification ? (
            <form onSubmit={handleSubmit(onSubmit)}>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="username">Username</FieldLabel>
                  <Input id="username" placeholder="johndoe" className="rounded-none h-10" {...register("username")} />
                  {errors.username && <p className="mt-1 text-sm text-red-500">{errors.username.message}</p>}
                </Field>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input id="email" type="email" placeholder="alex@example.com" className="rounded-none h-10" {...register("email")} />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                </Field>
                <Field>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Input id="password" type="password" className="rounded-none h-10" {...register("password")} />
                  {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>}
                </Field>

                <Field>
                  <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
                  <Input id="confirmPassword" type="password" className="rounded-none h-10" {...register("confirmPassword")} />
                  {errors.confirmPassword && <p className="mt-1 text-sm text-red-500">{errors.confirmPassword.message}</p>}
                </Field>

                <Field>
                  <Button size="lg" type="submit" className="bg-(--primary-color) h-12 rounded-none w-full" disabled={isCurrentlyFetching}>
                    {isCurrentlyFetching ? "Registering..." : "Sign Up"}
                  </Button>
                  {globalError && <p className="mt-2 text-sm text-red-500">{globalError}</p>}
                </Field>
              </FieldGroup>
            </form>
          ) : (
            <form onSubmit={handleVerify}>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="code">Verification Code</FieldLabel>
                  <Input 
                    id="code" 
                    type="text" 
                    placeholder="123456" 
                    className="rounded-none h-10" 
                    value={verificationCode} 
                    onChange={(e) => setVerificationCode(e.target.value)}
                    required
                  />
                </Field>
                <Field>
                  <Button size="lg" type="submit" className="bg-(--primary-color) h-12 rounded-none w-full" disabled={isCurrentlyFetching}>
                    {isCurrentlyFetching ? "Verifying..." : "Verify Code"}
                  </Button>
                  {globalError && <p className="mt-2 text-sm text-red-500">{globalError}</p>}
                </Field>
              </FieldGroup>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
