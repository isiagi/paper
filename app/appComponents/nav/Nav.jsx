import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

function Nav() {
  return (
    <nav className="flex justify-between items-center  min-h-[10vh] px-5 border-b-[1px]">
      <h1 className="hidden md:block">NewsScrolls</h1>

      <ul className="flex space-x-4 items-center">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <Button>Subscribe</Button>
        </li>
        <li>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {/* <Link href="/login">
            <Button variant="outline">Login</Button>
          </Link> */}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
