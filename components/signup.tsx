"use client"

import type React from "react"
import Link from "next/link"
import { Button, Card, CardContent } from "./ui";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { Separator } from "./ui/separator";
import { Github, Twitter } from "lucide-react"

export default function SignupForm() {

  return (
    <Card className="dark bg-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] w-[448px] ">
      <CardContent className="space-y-6 p-10">
        <header className="text-center space-y-2">
          <h1 className="mb-2 text-2xl font-bold text-white">Create an account</h1>
          <p className="text-sm text-gray-400">
            Already have an account?{" "}
            <Link href="/login" className="text-white hover:underline">
              Log in
            </Link>
          </p>
        </header>

        <form  className="space-y-6">
            <fieldset className="space-y-2">      
                <div>
                    <Input
                    type="text"
                    name="fullName"
                    placeholder="Full name"
                    required
                    className=" bg-black "
                    />
                </div>

                <div>
                    <Input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    required
                    className="bg-black"
                    />
                </div>

                <div>
                    <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    className="bg-black"
                    />
                </div>

                <div>
                    <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    required
                    className="bg-black"
                    />
                </div>
            </fieldset>

          <div className="flex items-center">
            <Checkbox id="agreeToTerms" />

            <label htmlFor="agreeToTerms" className="ml-2 text-sm text-gray-400">
              I agree to the{" "}
              <Link href="/terms" className="text-white hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-white hover:underline">
                Privacy Policy
              </Link>
            </label>
          </div>

          <Button
            type="submit"
            className="w-full font-bold"
          >
            Sign up
          </Button>
        </form>
        <div className="flex items-center my-6 gap-2">
          <Separator className="flex-1 bg-gray-700" />
          <span className="text-sm text-muted-foreground">
            Or continue with
          </span>
          <Separator className="flex-1 bg-gray-700" />
        </div>

        <div className="flex justify-center gap-3">
          <Button variant={"outline"} type="button" className="flex-1 bg-black">
            <Github /> GitHub
          </Button>
          <Button variant={"outline"} type="button" className="flex-1 bg-black">
            <Twitter /> Twitter
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

