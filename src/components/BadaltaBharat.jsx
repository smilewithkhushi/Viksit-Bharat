import next from "next";

const BadaltaBharat = () => {
  return (
    <section className="w-full md:px-10 my-10">

      <div className="flex flex-row justify-evenly flex-wrap md:flex-nowrap lg:flex-nowrap">
        {/* section for a embedded youtube video */}

        <div className="md:w-1/2 flex mx-6 align-middle justify-center">

          <iframe
            width="460"
            height="300"
            src="https://www.youtube.com/embed/6G-pfT7g3bM"
            title="Adressed by PM Narendra Modi Ji"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div className="md:w-1/2 flex flex-col text-justify px-4 py-8 text-wrap">
          
          <h1 className="text-4xl text-blue-600 font-bold text-shadow-md">
            Badalte Bharat Ki Baat
          </h1>

          <p className="text-2xl text-wrap my-4 text-white text-bold">
            Today the goal of the country is Viksit Bharat, Sashakt Bharat! We
            cannot stop until this dream of a developed India is fulfilled.”
          </p>
          <p className="font-bold text-lg text-white">-Narendra Modi, Prime Minister of India</p>

          <h2 className="my-4 text-white text-xl">
            <a href="" className="rounded-lg border-2 border-white px-6
            hover:shadow-lg hover:bg-white hover:text-black
            ">More Videos</a>
          </h2>
        </div>

      </div>
    </section>
  );
};

export default BadaltaBharat;
