"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useSignIn } from "@clerk/nextjs"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").trim().email("Please enter a valid email address"),
  password: z.string().min(6, "Password is required"),
})

type LoginFormValues = z.infer<typeof loginSchema>

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [globalError, setGlobalError] = useState("")
  const router = useRouter()
  const { signIn } = useSignIn()

  const {
    register,
    handleSubmit,
    formState: { errors,isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
    defaultValues:{
      email:'',
      password:''
    }
  })

  async function onSubmit(values: LoginFormValues) {
    if (!signIn) return
  setGlobalError("")

  // Clerk v7 uses direct methods that return an error object instead of throwing exceptions
  const result = await signIn.password({
    identifier: values.email,
    password: values.password,
  })

  // Check the returned error property directly
  if (result.error) {
    console.error(result.error)
    setGlobalError(result.error.message || "Invalid email or password")
    return
  }
  if (signIn.status === "complete") {
    await signIn.finalize() // Commits the session
    router.push("/")
  } else {
    setGlobalError("Additional verification steps are required.")
  }
  }

 async function handleGoogleSignIn() {
  if (!signIn) return
  
  setGlobalError("")

  // Clerk v7 uses .sso() for OAuth providers and returns error object directly
  const result = await signIn.sso({
    strategy: 'oauth_google',
    redirectUrl: '/', // Route where your callback component is rendered
    redirectCallbackUrl: '/sign-in/sso-call',         // Fallback/Final route if additional steps are needed
  })

  // Check the return object for execution errors instead of catching exceptions
  if (result?.error) {
    console.error(result.error)
    setGlobalError(result.error.message || "An error occurred during Google sign-in")
  }
}

  return (
    <div className={cn("flex flex-col gap-6 border-none", className)} {...props}>
      <Card className="">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email and password to continue.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="Alex@example.com"
                  className="rounded-none h-12"
                  {...register("email")}
                />
                {errors.email ? (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                ) : null}
              </Field>

              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  className="rounded-none h-12"
                  {...register("password")}
                />
                {errors.password ? (
                  <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
                ) : null}
              </Field>

              <Field>
                <Button
                  size="lg"
                  type="submit"
                  className="bg-(--primary-color) h-12 rounded-none"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Signing in..." : "Login"}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-none"
                  disabled={isSubmitting}
                  onClick={handleGoogleSignIn}
                >
                 Continue with Google
                </Button>
                {globalError ? <p className="mt-2 text-sm text-red-500">{globalError}</p> : null}
                <FieldDescription className="text-center mt-3">
                  Don&apos;t have an account? <a href="/sign-up">Sign up</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
