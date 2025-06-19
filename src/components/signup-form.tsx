"use client";

import { authClient } from "@/lib/auth-client";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const SignupForm = () => {
  const router = useRouter();
  const handleSignUp = async () => {
    await authClient.signUp.email(
      {
        email: "admin@example.com",
        password: "password123",
        name: "User admin",
      },
      // Callback functions to handle the request, success, and error
      {
        onRequest: (ctx) => {
          console.log("Signing up...", ctx.body);
        },
        onSuccess: (data) => {
          console.log("Sign up successful:", data);
          router.replace("/login");
        },
        onError: (error) => {
          console.error("Sign up failed:", error);
        },
      }
    );
  };

  return (
    <>
      <div>
        <Button onClick={handleSignUp} className="w-full">
          Sign Up
        </Button>
      </div>
    </>
  );
};

export default SignupForm;
