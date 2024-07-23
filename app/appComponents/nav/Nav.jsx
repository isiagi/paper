import { Button } from "@/components/ui/button";
import React from "react";

function Nav() {
  return (
    <nav className="flex justify-between items-center  min-h-[10vh] px-5 border-b-[1px]">
      <h1>News</h1>

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
          <Button variant="outline">Login</Button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
