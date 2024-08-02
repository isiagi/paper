"use client";

import React, { useState, useRef, createRef } from "react";

// import Image from "next/image";
// import React, { useRef } from "react";

import Image from "next/image";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import { ScrollArea } from "@/components/ui/scroll-area";

import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
  Download,
  PanelLeft,
  RefreshCcwIcon,
  ZoomInIcon,
  ZoomOutIcon,
} from "lucide-react";

import { useScreenshot, createFileName } from "use-react-screenshot";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const images = [
  {
    original: "/assets/images/paper1.jpg",
    thumbnail: "/assets/images/paper1.jpg",
  },
  {
    original: "/assets/images/paper2.jpg",
    thumbnail: "/assets/images/paper2.jpg",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

function Page() {
  // const book = useRef();const
  const [index, setIndex] = useState(0);

  const ref = createRef(null);
  const [image, takeScreenshot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0,
  });
  const getImage = () => takeScreenshot(ref.current);

  const download = (image, { name = "img", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => takeScreenshot(ref.current).then(download);

  // handleNext, if index passed to is equall to array length, set index to 0
  const handleNext = (index) => {
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  // handlePrev, if index passed to is equall to 0, set index to array length - 1
  const handlePrev = (index) => {
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <>
      <Sheet className="bg-orange-500">
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[200px]">
          <SheetHeader>
            <SheetTitle>NewsScrolls</SheetTitle>
            <SheetDescription>Pages</SheetDescription>
          </SheetHeader>
          <SheetClose asChild>
            <ScrollArea className="">
              {images.map((item, i) => (
                <div key={i} onClick={() => setIndex(i)}>
                  <Image
                    src={item.original}
                    alt="Image 1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "20%",
                      objectFit: "cover",
                    }}
                  />
                  <p>Page 1</p>
                </div>
              ))}
            </ScrollArea>
          </SheetClose>
        </SheetContent>
      </Sheet>
      <div className="flex mt-4 px-5 gap-20 ">
        {/* <Splide
          aria-label="My Favorite Images"
          className="bg-red-400 h-[500px]"
        >
          <SplideSlide>
            <TransformWrapper
              initialScale={1}
              // minScale={1}
              // maxScale={3}
              // wheel={{ step: 0.05 }}
            >
              {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                <React.Fragment>
                  <div className="tools">
                    <Button onClick={() => zoomIn()}>+</Button>
                    <Button onClick={() => zoomOut()}>-</Button>
                    <Button onClick={() => resetTransform()}>x</Button>
                  </div>
                  <TransformComponent>
                    <Image
                      src="/assets/images/paper1.jpg"
                      alt="Image 1"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "500px",
                        objectFit: "contain",
                      }}
                    />
                    <div>Example text</div>
                  </TransformComponent>
                </React.Fragment>
              )}
            </TransformWrapper>
          </SplideSlide>
          <SplideSlide>
            <Image
              src="/assets/images/paper2.jpg"
              alt="Image 2"
              width={500}
              height={500}
            />
          </SplideSlide>
        </Splide> */}

        <ScrollArea className="h-[400px] hidden md:block w-[150px] rounded-md border p-4">
          <h1 className="text-lg font-light">Pages</h1>
          {images.map((item, i) => (
            <div key={i} onClick={() => setIndex(i)}>
              <Image
                src={item.original}
                alt="Image 1"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <p>Page 1</p>
            </div>
          ))}
        </ScrollArea>

        <div className="md:w-[600px]  w-full flex-1">
          <TransformWrapper
            initialScale={1}
            // minScale={1}
            // maxScale={3}
            // wheel={{ step: 0.05 }}
          >
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
              <React.Fragment>
                <div className="tools flex items-center gap-5 p-4">
                  <ZoomInIcon onClick={() => zoomIn()} />
                  <ZoomOutIcon onClick={() => zoomOut()} />

                  <RefreshCcwIcon onClick={() => resetTransform()} />
                  <ArrowRightCircleIcon onClick={() => handleNext(index)} />
                  <ArrowLeftCircleIcon onClick={() => handlePrev(index)} />

                  <Download onClick={downloadScreenshot} />
                </div>
                <TransformComponent>
                  <Image
                    src={images[index].original}
                    alt="Image 1"
                    width={0}
                    height={0}
                    sizes="100vw"
                    ref={ref}
                    // style={{
                    //   width: "100%",
                    //   height: "100%",
                    //   objectFit: "cover",
                    // }}
                    className="w-[600px] h-full object-cover"
                  />
                  {/* <div>Example text</div> */}
                </TransformComponent>
              </React.Fragment>
            )}
          </TransformWrapper>
        </div>
      </div>
    </>
  );
}

export default Page;
