import Link from "next/link";

const Connect = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center bg-green-darker">
      <div className="mt-20 mb-20 px-10 text-4xl text-green-lighter text-center tracking-wider" data-aos="fade-right">
        Connect with the community, ask questions and find projects.
      </div>
      <Link href="https://github.com">
        <a className="w-full flex justify-center" data-aos="fade-left">
          <div
            className="py-12 px-10 mb-24 w-1/2 flex justify-center items-center bg-green-lighter hover:bg-green-light text-gray-800 hover:text-white text-2xl text-center tracking-wide rounded-xl transition ease-in duration-200 bg-cover bg-center"
            style={{
              backgroundImage: "url('/hacktoberfest-web/buttonBG.png')",
            }}
          >
            View Repositories
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Connect;
