import Wave from "react-wavify";
import { FacebookShareButton, TwitterShareButton } from "react-share";

const Footer = (): JSX.Element => {
  return (
    <div className="w-full flex flex-col justify-center items-center relative">
      <div className="bg-peach-light h-44 w-full"></div>
      <img
        src="/hacktoberfest-web/H-icon-dark.png"
        alt="icon"
        className="w-20 h-20 lg:w-32 lg:h-32 object-cover absolute z-50 top-8.6rem lg:top-28"
      />
      <div className="relative w-full">
        <Wave
          className="opacity-100 absolute bottom-0 h-5/12 pointer-events-none z-0"
          fill="#F74700"
          paused={false}
          options={{
            height: 40,
            amplitude: 40,
            speed: 0.25,
            points: 3,
          }}
        />
        <Wave
          className="opacity-70 absolute bottom-0 h-5/12 pointer-events-none z-0"
          fill="#F74700"
          paused={false}
          options={{
            height: 30,
            amplitude: 40,
            speed: 0.25,
            points: 3,
          }}
        />
        <div className="w-full lg:flex lg:flex-col z-40">
          <div className="w-full lg:flex lg:flex-row justify-between bg-green-lighter lg:h-60 px-10%">
            <div className="w-full lg:w-1/2 flex flex-col justify-start items-center lg:items-start">
              <div className="w-full md:mb-4 lg:mb-3 mt-8 lg:mt-2 px-10 text-center lg:text-left">
                <div className="w-full text-xl font-bold mt-10 mb-5 text-red-dark">
                  GET UPDATES
                </div>
                <p>Be the first to know when Hacktoberfest 2021 launches!</p>
                <form className="flex flex-row justify-center lg:justify-start items-center mt-2 mb-4 sm:mb-3 relative">
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    className="p-2 pl-8 py-4 pb-14 lg:pb-4 mt-5 w-full lg:w-3/4 rounded-md lg:rounded-full block text-black shadow-md focus:outline-none focus:ring-4 focus:ring-red-light "
                  />
                  <button
                    type="submit"
                    className="absolute right-auto lg:right-1/4 bottom-0 mr-0 lg:mr-2 mb-2 px-5 w-97% lg:w-auto bg-red-light hover:bg-red-dark shadow-lg hover:shadow-xl py-2 w-1/4 flex justify-center items-center text-white font-sans font-semibold rounded-md lg:rounded-full cursor-pointer transition ease-in duration-200"
                  >
                    Get Updates
                  </button>
                </form>
              </div>
            </div>
            <div className="w-full lg:w-1/4 py-10 pt-5 lg:py-0 lg:pt-12 text-center lg:text-left flex flex-col justify-start items-center lg:items-start">
              <div className="w-full text-xl font-bold mb-5 text-red-dark">
                SHARE
              </div>
              <ul>
                <li className="pt-0 pb-1">
                  <TwitterShareButton
                    url={"https://hacktoberfest.digitalocean.com"}
                    title="Hacktoberfest 2021"
                  >
                    <div className="hover:text-red-dark transition ease-in duration-200">
                      Twitter
                    </div>
                  </TwitterShareButton>
                </li>
                <li className="pt-1 pb-1">
                  <FacebookShareButton
                    title="Hacktoberfest 2021"
                    url={"https://hacktoberfest.digitalocean.com"}
                    hashtag="#OSS #SLIIT #SL"
                  >
                    <div className="hover:text-red-dark transition ease-in duration-200">
                      Facebook
                    </div>
                  </FacebookShareButton>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:flex lg:flex-col justify-around lg:items-center text-center bg-green-lighter">
            <h5 className="px-10 py-8 lg:4 text-white text-sm font-semibold relative z-10">
              © 2021 DigitalOcean, LLC. All rights reserved.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
