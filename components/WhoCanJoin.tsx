const WhoCanJoin = (): JSX.Element => {
  const lastCardContent = (color: string, zIndex: String, opacity: String) => (
    <div className={`w-full ${color} sticky ${zIndex}`}>
      <img
        src="/hacktoberfest-web/2020/4.jpg"
        alt="groupImage"
        className={`w-full h-35vh object-cover shadow-lg filter hover:brightness-110 transition-all ease-out duration-500 opacity-${opacity}`}
      />
    </div>
  );

  return (
    <div className="w-full bg-peach-light flex flex-col justify-start items-start relative">
      <div className="bg-peach-light h-44 w-full"></div>
      <div className="w-full lg:w-1/2 bg-red-dark flex flex-row justify-center items-center">
        <img
          src="/hacktoberfest-web/2020/Hacktoberfest_flourish_year.png"
          alt="flourish"
          className="h-28 lg:h-36 lg:w-auto object-fit absolute z-50 top-30"
          data-aos="fade-right"
        />
      </div>
      <img
        src="/hacktoberfest-web/flourish.png"
        alt="flourish"
        className="lg:w-auto object-fit absolute right-0 bottom-0 z-50 hidden lg:flex"
        data-aos="fade-left"
      />
      <div className="w-full lg:w-1/2 flex flex-col justify-start items-start sticky z-10 mb-44">
        <div
          className="w-full  bg-green-lighter pt-24 pb-16 px-10 lg:px-20 text-center text-4xl"
          data-aos="fade-right"
        >
          Past Events
        </div>
        <div className="w-full" data-aos="fade-right">
          <img
            src="/hacktoberfest-web/2020/1.jpg"
            alt="groupImage"
            className="w-full h-35vh object-cover shadow-lg filter hover:brightness-110 transition-all ease-out duration-500"
          />
        </div>
        <div className="w-full" data-aos="fade-right">
          <img
            src="/hacktoberfest-web/2020/2.jpg"
            alt="groupImage"
            className="w-full h-35vh object-cover shadow-lg filter hover:brightness-110 transition-all ease-out duration-500"
          />
        </div>
        <div className="w-full" data-aos="fade-right">
          <img
            src="/hacktoberfest-web/2020/3.jpg"
            alt="groupImage"
            className="w-full h-35vh object-cover shadow-lg filter hover:brightness-110 transition-all ease-out duration-500"
          />
        </div>
        <div className="w-full sticky top-0" data-aos="fade-right">
          {lastCardContent("bg-green-light", "z-40", "100")}
          <div className="w-3/4 h-96 bg-peach-light absolute left-0 top-0 mt-2 ml-2 z-30 hidden lg:flex"></div>
          <div className="w-full h-1/4 bg-peach-light absolute left-8 top-0 mt-2 ml-2 z-30 hidden lg:flex"></div>
          <div className="w-full absolute left-0 top-0 mt-2 ml-2 hidden lg:flex">
            {lastCardContent("bg-peach-light", "z-30", "0")}
          </div>
          <div className="w-full absolute left-0 top-0 mt-4 ml-4 hidden lg:flex">
            {lastCardContent("bg-red-dark", "z-20", "0")}
          </div>
          <div className="w-full absolute left-0 top-0 mt-6 ml-6 hidden lg:flex">
            {lastCardContent("bg-peach-light", "z-10", "0")}
          </div>
          <div className="w-10/12 h-96 bg-peach-light absolute left-0 top-0 mt-6 ml-6 z-10 hidden lg:flex"></div>
          <div className="w-full h-1/2 bg-peach-light absolute left-8 top-0 mt-6 ml-6 z-10 hidden lg:flex"></div>
          <div className="w-full absolute left-0 top-0 mt-8 ml-8 hidden lg:flex">
            {lastCardContent("bg-red-light", "z-0", "0")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoCanJoin;
