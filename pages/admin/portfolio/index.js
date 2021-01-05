import Link from "next/link";
import { useAuth } from "hooks/useAuth";
import { GoogleLogin, Modal } from "components";
import { useCollection } from "@nandorojo/swr-firestore";

export default function AdminPortfolio() {
  const { user } = useAuth();
  const { data = [], loading, error } = useCollection("portfolio", {
    listen: true,
  });

  if (!user) {
    return <GoogleLogin />;
  }
  if (loading) {
    return "Loading...";
  }
  if (error) {
    return "ERROR";
  }

  return (
    <div className="flex flex-col container px-8 mt-8 md:px-16 md:mx-auto">
      <div className="space-x-2">
        <span>
          <Link href="/admin">Admin</Link>
        </span>
        <span>&gt;</span>
        <span>Portfolio</span>
      </div>
      <div className="flex justify-end">
        <Link href="/admin/portfolio/nuevo">
          <button className="button p-4 bg-black text-white border-2 border-black hover:bg-white hover:text-black font-normal text-xs">
            NUEVO
          </button>
        </Link>
      </div>
      <div className="mt-8">
        {data.map((item) => (
          <div key={item.id} className="border-2 border-black mb-4">
            <pre>{JSON.stringify(item, null, 2)}</pre>
          </div>
        ))}
      </div>
    </div>
  );
}
