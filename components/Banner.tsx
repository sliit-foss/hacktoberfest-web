import Image from "next/image";
import Logo from "../public/Hacktoberfest_final_2color-06 copy.png";

const Banner = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="h-85vh lg:h-screen w-screen bg-center bg-cover lg:bg-contain"
        style={{
          backgroundImage: "url('/banner-blank-light.png')",
          backgroundRepeat: "repeat-y",
        }}
      >
      </div>
      <div className="h-screen flex justify-center items-center absolute left-0 top-0">
        <div className="w-11/12 sm:w-3/4 lg:w-1/2 ">
          <Image src={Logo} alt={"hacktoberfest logo"} />
          <div className="w-full text-xl font-medium text-red-dark text-center px-10">
            Open source is changing the world – one contribution at a time.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
