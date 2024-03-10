
import Image from "next/image";

const Header = () => {
  return (
    <div
      className="flex w-full align-text-middle 
    px-2 my-10 justify-around 
    flex-row flex-nowrap"
    >
      {/* first div containing two images aligned on left of the header */}

        <Image
          src="/assets/rajgurulogo.png"
          width={80}
          height={80}
          alt="Shaheed Rajguru college logo"
        />

      {/* second div containing the heading */}

      <h2
        className="h-min mx-4 px-4 py-2
        border-2 shadow-sm border-white rounded-3xl
        text-white text-center
        md:text-2xl md:px-16 md:py-3
     hover:shadow-md hover:shadow-slate-200 hover:transition-duration-1000"
      >
        <a href="">Click here to submit your idea</a>
      </h2>


      {/* <Image
          src="/assets/viksitbharatlogo.png"
          width={120}
          height={80}
          alt="Viksit Bharat logo"
        /> */}

      <Image src="/assets/NSSLogo.png" width={80} height={80} alt="NSS logo" />
    </div>
  );
};

export default Header;
