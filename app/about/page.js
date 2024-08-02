import Image from "next/image";
import React from "react";

function page() {
  return (
    <div>
      <div className="text-3xl flex justify-center items-center h-[200px] bg-black text-white">
        <h3>About NewsScrolls</h3>
      </div>

      <div className="grid grid-cols-fluid gap-5 mt-20">
        <div>
          <Image
            src="/assets/images/pa.png"
            width={0}
            height={0}
            sizes="100vw"
            alt="paper"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="leading-loose">
          <h1 className="text-3xl text-center pb-4">About NewsScrolls</h1>
          <p>
            Welcome to NewsScrolls, your gateway to the rich tapestry of
            historical news and events. At NewsScrolls, we are dedicated to
            preserving the legacy of journalism by curating and archiving
            newspaper articles from across the globe. Our platform offers a
            unique collection of news stories, headlines, and features that
            capture the essence of past eras, providing invaluable insights into
            the events and narratives that have shaped our world.
          </p>

          <p>
            We believe that history is not just a record of dates and events but
            a collection of stories that reflect the human experience. Our
            mission is to make these stories accessible to researchers,
            historians, educators, and anyone with a curiosity for the past. By
            archiving these articles, we aim to ensure that the voices and
            perspectives of previous generations continue to inform and inspire.
          </p>

          <p>
            At NewsScrolls, we are committed to providing a user-friendly and
            easily navigable experience. Our extensive archive is meticulously
            organized and searchable, allowing you to explore a vast range of
            topics and time periods. Whether you`&apos;`re delving into
            political developments, cultural shifts, or historical milestones,
            our platform offers a wealth of knowledge at your fingertips.
          </p>

          <p>
            Join us in exploring the chronicles of history, where each scroll
            reveals a piece of the past. Discover the stories behind the news
            with NewsScrolls, where history lives on.
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
