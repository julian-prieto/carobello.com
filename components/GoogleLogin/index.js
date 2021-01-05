import { useAuth } from "hooks/useAuth";

export default function GoogleLogin() {
  const { googleSignIn } = useAuth();

  return (
    <div className="text-center">
      <button
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={() => googleSignIn()}
      >
        Google Login
      </button>
    </div>
  );
}
