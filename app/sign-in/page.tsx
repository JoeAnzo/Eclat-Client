// "use client"
// import * as React from 'react'
// import { useState } from 'react'
// import { useSignUp } from "@clerk/nextjs"
// import { redirect, useRouter } from "next/navigation"


// export default function signIn() {
//   const {isLoaded,signUp,setActive} = useSignUp()
//   const [identifier,setIdentifier] = useState('');
//   const [password,setPassWord] = useState('')
//   const [error,setError] = useState('');
//   const [loading,setLoading] = useState(false)
//   const router = useRouter()
  
//   if (!isLoaded) return null

//   // Handle GoogleAuth

//   const handleGoogleSignUp = async () => {
//     setError('')
//     try {
//         await signUp.authenticateWithRedirect({
//             strategy:'oauth_google',
//             redirectUrl:'/sso-callback',
//             redirectUrlComplete:'/',
//         })
//     } catch (err:any) {
//         setError(err.errors?.[0]?.longMessage || 'Google signup failed.');
//     }
//   }

//   // Handle Form submission here

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setError('')

//     try {
//         const result = await signIn.create({
//             identifier: identifier.trim(),
//             password,
//         })

//         if (result.status === 'complete') {
//             await setActive({session: result.createdSessionId});
//             router.push('/')
//             router.refresh();
//         }
//     } catch (err:any) {
//         setError(err.errors?.[0]?.longMessage || 'Invalid credentials');
//     }
//   }
//   return (
//    <div className="min-h-screen px-4 py-12 flex justify-center items-center">
//     <div>
//         <h2>Welcome to E`clat Essence</h2>
//         <p></p>
//     </div>
//    </div>
//   )
// }

