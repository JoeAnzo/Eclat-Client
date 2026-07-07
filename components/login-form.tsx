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
  email: z.string().trim().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
})

type LoginFormValues = z.infer<typeof loginSchema>

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const { signIn } = useSignIn()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  })

  async function onSubmit(values: LoginFormValues) {
    if (!signIn) {
      setError("Authentication is not ready yet")
      return
    }

    setError("")
    setIsSubmitting(true)

    try {
      const result = await signIn.create({
        identifier: values.email,
        password: values.password,
      })

      if (result.error) {
        setError(result.error.message || "Invalid email or password")
        return
      }

      router.push("/")
    } catch (err: unknown) {
      console.error(err)
      setError("Invalid email or password")
    } finally {
      setIsSubmitting(false)
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
                  placeholder="m@example.com"
                  className="rounded-none h-8"
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
                  className="rounded-none h-8"
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
                {error ? <p className="mt-2 text-sm text-red-500">{error}</p> : null}
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
