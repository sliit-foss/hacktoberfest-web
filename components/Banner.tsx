const Banner = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="h-85vh md:h-screen w-screen bg-center bg-cover relative"
        style={{
          backgroundImage: "url('/hacktoberfest-web/banner-blank-light.png')",
          backgroundRepeat: "repeat-y",
        }}
      >
        {" "}
      </div>
      <div className="h-screen flex justify-center items-center absolute left-0 top-0">
        <div className="w-11/12 sm:w-3/4 lg:w-1/2">
          <div className="text-5xl lg:text-7xl font-extrabold mt-0 lg:mt-12 px-7 text-center text-red-light ">
            Open Hack Day Sri Lanka
          </div>
          <img
            src="/hacktoberfest-web/Hacktoberfest logo.png"
            alt={"hacktoberfest logo"}
            className="my-10"
          />
          <div className="w-full text-xl font-semibold text-red-dark text-center px-10">
            Open source is changing the world – one contribution at a time.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
