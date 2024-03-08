import React from "react";
import Image from "next/image";

const Pledge = () => {
  return (
    <section className="w-full md:px-10 my-10">
      <div className="flex flex-row justify-evenly flex-wrap md:flex-nowrap lg:flex-nowrap">
        {/* section for a embedded youtube video */}

        <div className="md:w-1/2 mx-6 justify-center align-middle flex">
          <Image
            src="/assets/pledge.png"
            width={420}
            height={300}
            className="rounded-2xl m-2 align-middle justify-center"
            alt="Pledge"
          />
        </div>

        <div className="md:w-1/2 flex-col px-4 py-8 flex-wrap">
          <h1 className="text-5xl text-blue-600 font-bold text-shadow-md">
            Sankalp Pledge
          </h1>

          <p className="text-2xl text-wrap my-4 text-white text-bold">
            Join us in taking the pledge and be the part of the change
          </p>

          <h2 className="my-10 text-white text-2xl">
            <a
              href=""
              className="rounded-lg border-2 border-white px-6
          hover:shadow-lg hover:bg-white hover:text-black
          "
            >
              Take Pledge
            </a>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Pledge;
