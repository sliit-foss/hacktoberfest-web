import StatisticCard from "./StatisticCard";

const Stats = (): JSX.Element => {
  return (
    <div className="w-full flex flex-col justify-start items-start bg-peach-light">
      <img
        src="/flourish_rotated.png"
        alt="flourish"
        className="w-10/12 md:w-8/12 lg:w-5/12 object-fit"
        data-aos="fade-right"
      />
      <div className="w-full flex flex-col justify-center items-center ">
        <div className="w-10/12 2xl:w-3/4 flex flex-col justify-center items-center relative">
          <div
            className="text-5xl lg:text-6xl font-extrabold mt-20 mb-10 text-center break-all"
            data-aos="fade-left"
          >
            Global Stats for Hacktoberfest 2020
          </div>
          <img
            src="/branch.png"
            alt="branch"
            className="w-10/12 md:w-8/12 lg:w-5/12 object-fit"
            data-aos="fade"
          />
          <div className="absolute left-0 top-28%" data-aos="fade-right">
            <StatisticCard
              name="Participants"
              value="169,886"
              valueBR="rounded-t-xl rounded-tr-3xl+"
              nameBR="rounded-b-xl"
              visibility="hidden xl:flex"
            />
          </div>
          <div className="absolute right-0 top-34%" data-aos="fade-left">
            <StatisticCard
              name="Participating Repositories"
              value="116,361"
              valueBR="rounded-t-xl rounded-tl-3xl+"
              nameBR="rounded-b-xl"
              visibility="hidden xl:flex"
            />
          </div>

          <div
            className="w-full flex flex-col justify-center items-center"
            data-aos="fade-right"
          >
            <StatisticCard
              name="Participants"
              value="169,886"
              valueBR="rounded-t-xl rounded-tr-3xl+"
              nameBR="rounded-b-xl"
              visibility="flex xl:hidden"
            />
          </div>

          <div
            className="w-full flex flex-col justify-center items-center"
            data-aos="fade-left"
          >
            <StatisticCard
              name="Participating Repositories"
              value="116,361"
              valueBR="rounded-t-xl rounded-tl-3xl+"
              nameBR="rounded-b-xl"
              visibility="flex xl:hidden"
            />
          </div>

          <div
            className="w-full flex flex-col justify-center items-center"
            data-aos="fade-up"
          >
            <StatisticCard
              name="Represented Countries"
              value="135"
              valueBR="rounded-t-xl"
              nameBR="rounded-bl-xl rounded-br-3xl+"
              visibility=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
