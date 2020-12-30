export default function Home() {
  return (
    <div
      className="absolute top-0 left-0 bg-cover bg-center w-full min-h-screen -z-10 pt-h-full"
      style={{ backgroundImage: "url(https://via.placeholder.com/1600x1900)" }}
    >
      <div className="flex">
        <div className="hidden md:flex flex-1"></div>
        <div className="flex flex-1 justify-center items-center bg-black h-48 text-white">
          Carito
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-1">
          <div className="flex flex-1 justify-center items-center bg-purple-300 h-48 text-white">
            Carito 1
          </div>
          <div className="flex flex-1 justify-center items-center bg-yellow-300 h-48 text-white">
            Carito 2
          </div>
        </div>
        <div className="flex-1 hidden md:flex"></div>
      </div>
    </div>
  );
}
