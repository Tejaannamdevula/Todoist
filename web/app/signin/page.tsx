"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Login() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-row space-x-100  place-content-evenly ">
        <div className="h-screen flex-col justify-center  items-center">
          <div className="flex justify-normal items-center">
            <Image
              src="/todoist.svg"
              width={127}
              height={32}
              alt="todoist logo"
            ></Image>
          </div>

          <div className="flex-col  justify-center items-center">
            <h1 className={`font-bold text-3xl ${inter.className}`}> Log in</h1>
            <div></div>

            <div>
              <button
                onClick={async () => {
                  await signIn("google");
                }}
              >
                Login with Google
              </button>
              <br />

              <button
                onClick={async () => {
                  await signIn("github");
                }}
              >
                Login with GitHub
              </button>
            </div>
          </div>

          <div className="flex-col">
            <Label htmlFor="Email">Email</Label>
            <Input
              id="Email"
              type="email"
              placeholder="Enter your email..."
            ></Input>
            <Label htmlFor="Password">Password</Label>
            <Input
              id="Password"
              type="password"
              placeholder="Enter your pasword"
            ></Input>
            <Button>Login</Button>
          </div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <div className="flex">
            Dont have an account ?<a href="/signup">sign up</a>
          </div>
        </div>

        <div className="flex place-content-center">
          <Image src="/signin.png" height={100} width={300} alt="photo"></Image>
        </div>
      </div>
    </div>
  );
}
