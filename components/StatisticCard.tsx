interface props {
  name: string;
  value: string;
  valueBR: string;
  nameBR: string;
  visibility: string;
}

const StatisticCard = ({
  name,
  value,
  valueBR,
  nameBR,
  visibility,
}: props): JSX.Element => {
  return (
    <div
      className={`w-10/12 xl:w-64 2xl:w-80 w-80 my-16 flex flex-col justify-start items-start shadow-xl hover:shadow-2xl transform hover:scale-101 ${valueBR} ${nameBR} ${visibility} transition-all ease-out duration-500`}
    >
      <div
        className={`w-full bg-green-lighter py-12  text-5xl text-center ${valueBR}`}
      >
        {value}
      </div>
      <div
        className={`w-full bg-red-dark py-8 px-5 text-xl text-white text-center ${nameBR}`}
      >
        {name}
      </div>
    </div>
  );
};

export default StatisticCard;
