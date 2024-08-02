import React from "react";
import Image from "next/image";
import { HiOutlineNewspaper } from "react-icons/hi2";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Papers() {
  return (
    <div className="px-5">
      <div className="py-5 flex items-center gap-2">
        <HiOutlineNewspaper />
        <h3 className="">NewsPapers of 1986 by New Vision</h3>
      </div>
      <div className="grid grid-cols-fluid gap-5">
        {[1, 2, 3, 4, 5].map((item, i) => (
          <Link key={i} href="/overView">
            <Card>
              <div>
                <Image
                  src="https://images.unsplash.com/photo-1498644035638-2c3357894b10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5ld3NwYXBlcnxlbnwwfHwwfHx8MA%3D%3D"
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="paper"
                  className="w-full h-[250px] object-cover object-center"
                />
              </div>
              <CardHeader>
                <CardTitle>NewVision</CardTitle>
                <CardDescription>12 july 2023</CardDescription>
              </CardHeader>
            </Card>

            {/* <div className=" ">
              <div>
                <Image
                  src="https://images.unsplash.com/photo-1498644035638-2c3357894b10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5ld3NwYXBlcnxlbnwwfHwwfHx8MA%3D%3D"
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="paper"
                  className="w-full h-[250px] object-cover object-center"
                />
              </div>
              <div>
                <h3 className="text-2xl">Mps pay themselves</h3>
                <div className="flex justify-between">
                  <p>23 july 2023</p>
                  <p>New Vision</p>
                </div>
              </div>
            </div> */}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Papers;
