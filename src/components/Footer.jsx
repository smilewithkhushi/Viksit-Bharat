
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-tr from-lime-400 via-emerald-500 to-teal-700s text-white pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-8/12 px-4">
            <h4 className="text-3xl fonat-semibold text-blueGray-700">
              Shaheed Rajguru College of Applied Sciences for Women
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              University of Delhi,{" "}
              <i>NAAC Grade A+ | NIRK 2023 Ranking-32 (College Category) </i>
            </h5>
          </div>
        </div>

        <div className="w-full lg:w-4.5/12 px-4">
          <ul className="list-unstyled">
            <li>
              <a href="address" className="inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15.5 2a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1-.5-.5v-15a.5.5 0 0 1 .5-.5h11zm-1 1H5v14h9V3z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M9 13.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-2z"
                  />
                </svg>

                <i>Vasundhara Enclave,Delhi-110096</i>
              </a>
            </li>
            <li>
              <a href="tel:1234567890" className="inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15.5 2a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1-.5-.5v-15a.5.5 0 0 1 .5-.5h11zm-1 1H5v14h9V3z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M9 13.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-2z"
                  />
                </svg>
                <i>011-22623503,011-22623505</i>
              </a>
            </li>
            <li>
              <a
                href="mailto:example@gmail.com"
                className="inline-flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15.5 2a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1-.5-.5v-15a.5.5 0 0 1 .5-.5h11zm-1 1H5v14h9V3z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M9 13.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-2z"
                  />
                </svg>

                <i>principal@rajguru.du.ac.in</i>
              </a>
            </li>
          </ul>
          <div className="mt-6 lg:mb-0 mb-6">
            <a
              href="https://x.com/NssSrcasw?t=oi5h2KJATOqEdi8gBhafkA&s=09"
              target="_blank"
            >
              <button
                className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
                id="twitter"
              >
                <Image
                src='/assets/x.png'
                width={200}
                height={200}
                alt="twitter logo"
                />

                
              </button>
            </a>
            <a
              href="https://www.instagram.com/nss_srcasw?igsh=a2RnYm4yd3Fqb3k3"
              target="_blank"
            >
              <button
                className="bg-white text-pink-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
                id="instagram"
              >                <Image
              src='/assets/instagram.png'
              width={200}
              height={200}
              alt="instagram logo"
              />

              </button>
            </a>
            <a
              href="https://youtube.com/@nsssrcasw?feature=shared"
              target="_blank"
            >
              <button
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
                id="youtube"
              >
              <Image
                src='/assets/youtube.png'
                width={200}
                height={200}
                alt="youtube logo"
                />


              </button>
            </a>
          </div>
        </div>
      </div>

      <hr className="my-6 border-blueGray-300" />
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-7.5/12 px-4 mx-auto text-center">
          <div className="text-sm text-blueGray-500 font-semibold py-1">
            Copyright © <span id="get-current-year">2024</span>
            <a
              className="text-blueGray-500 hover:text-gray-800"
              target="_blank"
            >
              | Shaheed Rajguru College of Applied Sciences for Women | 
            </a>
            <a className="text-blueGray-500 hover:text-blueGray-800">
              {" "}
              All Rights Reserved
            </a>
            .
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
