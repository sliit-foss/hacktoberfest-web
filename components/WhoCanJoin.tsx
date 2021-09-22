const WhoCanJoin = (): JSX.Element => {
  const lastCardContent = (color: string, zIndex: String) => (
    <div
      className={`${color} sticky ${zIndex} pt-24 pb-24 px-10 lg:px-20 text-white a`}
    >
      <div className="text-center lg:text-left text-4xl break-all mb-8 ">
        Event Organizers
      </div>
      <div className="text-center lg:text-left text-xl font-normal ">
        Create events to bring people together for mentorship and code
        collaborations, so even more people around the world help support open
        source!
      </div>
    </div>
  );

  return (
    <div className="w-full bg-peach-light flex flex-col justify-start items-start relative">
      <div className="bg-peach-light h-44 w-full"></div>
      <div className="w-full lg:w-1/2 bg-red-dark flex flex-row justify-center items-center">
        <img
          src="/Hacktoberfest_flourish_year.png"
          alt="groupImage"
          className="h-28 lg:h-36 lg:w-auto object-fit absolute z-50 top-30"
        />
      </div>
      <img
          src="/flourish.png"
          alt="groupImage"
          className="lg:w-auto object-fit absolute right-0 bottom-0 z-50 hidden lg:flex"
        />
      <div className="w-full lg:w-1/2 flex flex-col justify-start items-start sticky z-10 mb-44">
        <div className="w-full  bg-green-lighter pt-24 pb-16 px-10 lg:px-20 text-center text-4xl">
          Who can Join?
        </div>
        <div className="w-full  bg-green-darker pt-24 pb-24 px-10 lg:px-20 text-white">
          <div className="text-center lg:text-left text-4xl break-all mb-8">
            Contributors
          </div>
          <div className="text-center lg:text-left text-xl font-normal">
            Anyone around the globe who desires to help drive the growth of open
            source and make positive contributions to an ever-growing community.
            All backgrounds and skill levels are encouraged to participate.
          </div>
        </div>
        <div className="w-full bg-red-dark pt-24 pb-24 px-10 lg:px-20 text-white">
          <div className="text-center lg:text-left text-4xl break-all mb-8">
            Maintainers
          </div>
          <div className="text-center lg:text-left text-xl font-normal">
            Anyone that runs an open source project on GitHub or GitLab and
            desires help from the community to improve their project can join
            Hacktoberfest.
          </div>
        </div>
        <div className="w-full bg-green-dark pt-24 pb-24 px-10 lg:px-20 text-white">
          <div className="text-center lg:text-left text-4xl break-all mb-8">
            Companies
          </div>
          <div className="text-center lg:text-left text-xl font-normal">
            Encourage people to contribute to your company’s repositories,
            organize community events, and engage internal employees.
          </div>
        </div>
        <div className="w-full sticky top-0 ">
          {lastCardContent("bg-green-light", "z-40")}
          <div className="w-3/4 h-96 bg-peach-light absolute left-0 top-0 mt-2 ml-2 z-30 hidden lg:flex"></div>
          <div className="w-full h-1/4 bg-peach-light absolute left-8 top-0 mt-2 ml-2 z-30 hidden lg:flex"></div>
          <div className="w-full absolute left-0 top-0 mt-2 ml-2 hidden lg:flex">
            {lastCardContent("bg-peach-light", "z-30")}
          </div>
          <div className="w-full absolute left-0 top-0 mt-4 ml-4 hidden lg:flex">
            {lastCardContent("bg-red-dark", "z-20")}
          </div>
          <div className="w-full absolute left-0 top-0 mt-6 ml-6 hidden lg:flex">
            {lastCardContent("bg-peach-light", "z-10")}
          </div>
          <div className="w-10/12 h-96 bg-peach-light absolute left-0 top-0 mt-6 ml-6 z-10 hidden lg:flex"></div>
          <div className="w-full h-1/2 bg-peach-light absolute left-8 top-0 mt-6 ml-6 z-10 hidden lg:flex"></div>
          <div className="w-full absolute left-0 top-0 mt-8 ml-8 hidden lg:flex">
            {lastCardContent("bg-red-light", "z-0")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoCanJoin;
