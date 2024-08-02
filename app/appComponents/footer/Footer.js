import React from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function Footer() {
  return (
    <div className="bg-black text-white p-5 h-[60vh] flex items-center flex-col mt-20">
      <div className="w-full flex justify-between items-center h-full">
        <div className="flex justify-between flex-wrap gap-10 w-full">
          <div>
            <h3 className="text-xl pb-4">NewsScrolls</h3>
            <p className="max-w-[400px] leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
              eligendi, vel doloribus quibusdam consectetur, provident dolor
              nostrum sit possimus odit neque laborum dicta ipsa quisquam beatae
              architecto soluta aperiam corporis.
            </p>
          </div>
          <div>
            <h3 className="text-xl pb-4">Quick Links</h3>
            <ul className="leading-loose">
              <li>Home</li>
              <li>Contact</li>
              <li>About</li>
              <li>Login</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl pb-4">Follow Us</h3>
            <ul className="leading-loose">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Youtube</li>
            </ul>
          </div>
          <div className="justify-self-end self-center">
            <h3>Subscribe to our newsletter</h3>
            <div className="flex items-center space-x-2">
              <Input type="email" placeholder="Email" />
              <Button type="submit">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t w-full pt-4">
        <p className="text-center">Copyright &copy; 2024 NewsScrolls</p>
      </div>
    </div>
  );
}

export default Footer;
