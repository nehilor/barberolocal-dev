import Link from "next/link";
    import { useAuth } from "../context/AuthContext";

    export default function Navbar() {
      const { currentUser } = useAuth();

      return (
        <nav className="bg-white shadow-lg">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex space-x-7">
                <Link href="/" className="flex items-center py-4 px-2">
                  <span className="font-semibold text-gray-500 text-lg">
                    BarberConnect
                  </span>
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-3">
                {currentUser ? (
                  <>
                    <Link
                      href="/dashboard"
                      className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-gray-200 transition duration-300"
                    >
                      My Panel
                    </Link>
                    <button
                      onClick={() => auth.signOut()}
                      className="py-2 px-2 font-medium text-red-500 rounded hover:bg-red-100 transition duration-300"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-gray-200 transition duration-300"
                    >
                      Login
                    </Link>
                    <Link
                      href="/signup"
                      className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-gray-200 transition duration-300"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>
      );
    }
