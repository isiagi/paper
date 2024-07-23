"use client";

import { Button } from "@/components/ui/button";
// import Image from "next/image";
import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Image } from "antd";

function Page() {
  const book = useRef();
  return (
    <div className="overflow-hidden h-screen">
      <HTMLFlipBook ref={book} width={500} height={300}>
        <div className="demoPage">
          <Zoom>
            <Image
              src="https://images.unsplash.com/photo-1498644035638-2c3357894b10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5ld3NwYXBlcnxlbnwwfHwwfHx8MA%3D%3D"
              width={"100%"}
              height={500}
              alt="paper"
              className="w-full h-full object-cover object-center"
            />
          </Zoom>
        </div>
        <div className="demoPage">
          <Image
            src="https://images.unsplash.com/photo-1498644035638-2c3357894b10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5ld3NwYXBlcnxlbnwwfHwwfHx8MA%3D%3D"
            width={"100%"}
            height={500}
            alt="paper"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="demoPage">Page 3</div>
        <div className="demoPage">Page 4</div>
      </HTMLFlipBook>

      <Button onClick={() => book.current.pageFlip().flipNext()}>Next</Button>
      <Button onClick={() => book.current.pageFlip().flipPrev()}>Prev</Button>
    </div>
  );
}

export default Page;
