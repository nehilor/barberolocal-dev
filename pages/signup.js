import { useState } from "react";
    import { useRouter } from "next/router";
    import { createUserWithEmailAndPassword } from "firebase/auth";
    import { auth } from "../firebase";
    import Link from "next/link";

    export default function Signup() {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [error, setError] = useState("");
      const [role, setRole] = useState("user");
      const router = useRouter();

      const handleSignup = async (e) => {
        e.preventDefault();
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          router.push("/");
        } catch (error) {
          setError(error.message);
        }
      };

      return (
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSignup} className="max-w-sm">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mb-4 border rounded"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mb-4 border rounded"
              required
            />
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-2 mb-4 border rounded"
            >
              <option value="user">User</option>
              <option value="barber">Barber</option>
            </select>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Sign Up
            </button>
          </form>
          <p className="mt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </div>
      );
    }
