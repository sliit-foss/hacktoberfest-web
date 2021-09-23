const Banner = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="h-85vh lg:h-screen w-screen bg-center bg-cover lg:bg-contain"
        style={{
          backgroundImage: "url('/hacktoberfest-web/banner-blank-light.png')",
          backgroundRepeat: "repeat-y",
          backgroundSize: "cover",
        }}
      >
      </div>
      <div className="h-screen flex justify-center items-center absolute left-0 top-0">
        <div className="w-11/12 sm:w-3/4 lg:w-1/2 ">
          <img src="/hacktoberfest-web/Hacktoberfest_final_2color-06 copy.png" alt={"hacktoberfest logo"} />
          <div className="w-full text-xl font-semibold text-red-dark text-center px-10">
            Open source is changing the world – one contribution at a time.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
