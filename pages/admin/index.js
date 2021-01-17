import Link from "next/link";

export default function Admin() {
  return (
    <div className="flex container mx-auto md:px-16 justify-center items-center">
      <Link href="/admin/portfolio">
        <div className="flex justify-center items-center bg-black w-48 h-48 mr-8 text-white font-bold text-lg hover:bg-white border-8 border-black hover:text-black cursor-pointer">
          PORTFOLIO
        </div>
      </Link>
      <div className="flex justify-center items-center bg-black w-48 h-48 mr-8 text-white font-bold text-lg hover:bg-white border-8 border-black hover:text-black">
        CURSOS
      </div>
      <div className="flex justify-center items-center bg-black w-48 h-48 text-white font-bold text-lg hover:bg-white border-8 border-black hover:text-black">
        TIENDA
      </div>
    </div>
  );
}
