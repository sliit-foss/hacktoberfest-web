import Countdown from "react-countdown";

interface CountdownRenderProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: any;
}

const Navbar = (): JSX.Element => {
  const Completionist = () => (
    <div>
      <span className="w-full flex justify-center px-10 text-2xl font-bold text-white text-center animate-pulse">
        Hacktoberfest is Happening Now !
      </span>
    </div>
  );

  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: CountdownRenderProps) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <div className=" text-2xl font-bold cursor-default mr-1 my-4 text-white text-center">
          <span className="ml-2 text-2xl font-bold">Hacktoberfest</span>
          <span className="ml-2 text-2xl font-normal opacity-70 mr-2">
            Returns in
          </span>
          <span>
            {("0" + days).slice(-2)}
            <span className="mr-2 opacity-50 font-normal">d</span>
            {("0" + hours).slice(-2)}
            <span className="mr-2 opacity-50 font-normal">h</span>
            {("0" + minutes).slice(-2)}
            <span className="mr-2 opacity-50 font-normal">m</span>
            {("0" + seconds).slice(-2)}
            <span className="mr-2 opacity-50 font-normal">s</span>
          </span>
        </div>
      );
    }
  };

  return (
    <header className="sticky top-0 flex flex-row w-full bg-green-light justify-center items-center z-20 shadow-lg">
      <Countdown date={1632996000000} renderer={renderer} />
    </header>
  );
};

export default Navbar;
