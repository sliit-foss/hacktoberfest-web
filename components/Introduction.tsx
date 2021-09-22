const Introduction = (): JSX.Element => {
  return (
    <div className="relative">
      <div className="w-full flex flex-col justify-center items-center bg-green-lighter relative z-30">
        <div className="w-3/4">
          <div className="text-5xl lg:text-6xl font-extrabold mt-40 mb-20 text-center lg:text-left break-all">
            What is Hacktoberfest?
          </div>
          <div className="w-full lg:w-5/12 leading-extra-loose text-center lg:text-left mb-16">
            Hosted by DigitalOcean for the 8th year in a row, Hacktoberfest
            encourages participation in giving back to the open source community
            by completing pull requests, participating in events, and donating
            to open source projects.
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center bg-peach-light ">
        <div className="w-3/4">
          <div className="w-full lg:w-5/12 leading-extra-loose text-center lg:text-left text-red-dark mt-16 mb-14 lg:mb-52">
            All backgrounds and skill levels are encouraged to complete the
            challenge.
          </div>
          <img
            src="/groupImage.jpeg"
            alt="groupImage"
            className="w-full object-cover rounded-xl flex lg:hidden mb-20 shadow-lg filter hover:brightness-110 transition-all ease-out duration-500"
          />
        </div>
      </div>
      <div className="absolute left-1/2 bottom-20% 2xl:bottom-10% w-3/4 z-30 hidden lg:flex">
        <img
          src="/groupImage.jpeg"
          alt="groupImage"
          className="w-1/2 h-25vw object-cover rounded-2xl rounded-bl-high_curve filter hover:brightness-110 transition-all ease-out duration-500"
        />
      </div>
      <div className="absolute left-49% bottom-18% 2xl:bottom-7% w-3/4 z-0 hidden lg:flex">
        <div
          className="w-1/2 h-25vw border-5 relative "
          style={{
            borderColor: "transparent transparent #4a584b #4a584b",
            borderRadius: "0 0 0 10rem",
          }}
        >
          <div className="absolute left-0 top-0 w-full h-15vw xl:h-17vw bg-peach-light transform scale-105"></div>
          <div className="absolute right-0 top-0 w-3/4 xl:w-81% h-25vw bg-peach-light transform scale-105"></div>
        </div>
      </div>
      <div className="absolute left-48% bottom-16% 2xl:bottom-5% w-3/4 z-0 hidden lg:flex">
        <div
          className="w-1/2 h-25vw border-5 relative "
          style={{
            borderColor: "transparent transparent #B53A25 #B53A25",
            borderRadius: "0 0 0 10rem",
          }}
        >
          <div className="absolute left-0 top-0 w-full h-15vw xl:h-17vw bg-peach-light transform scale-105"></div>
          <div className="absolute right-0 top-0 w-3/4 xl:w-81% h-25vw bg-peach-light transform scale-105"></div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
