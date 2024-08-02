import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import Papers from "../appComponents/papers/Papers";

function page() {
  return (
    <div className="">
      <div className="text-3xl flex justify-center items-center h-[200px] bg-black text-white">
        <h3>OverView</h3>
      </div>

      <Breadcrumb className="my-4 px-5">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Papper</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex w-full flex-wrap px-5 my-4 justify-center gap-10 items-center">
        <div className="w-full md:w-[30%] bg-red-400">
          <Image
            src="/assets/images/paper1.jpg"
            width={0}
            height={0}
            sizes="100vw"
            alt="overview"
            className="w-full object-cover object-center"
          />
        </div>
        <div>
          <h3 className="text-2xl">Publisher : RedPepper</h3>
          <p className="py-3">Date of publication : 12-02-2018</p>
          <Link href="/detail">
            <Button>Preview</Button>
          </Link>
        </div>
      </div>
      <Papers />
    </div>
  );
}

export default page;
