import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <section className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xll font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500 ml-2">Chat App</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">User Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email eg baz@email.com"
              className="w-full input input-bordered h-10"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Link
            to="/signup"
            className="text-sm hover:underline text-blue-900 mt-2 inline-block self-center hover:text-white"
          >
            Don't have an account
          </Link>
          <div className="self-center">
            <button className="btn btn-block mt-2" disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );

  return (
    <section className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xll font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500 ml-2">Chat App</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">email</span>
            </label>
            <input
              type="text"
              placeholder="Enter your email eg @bazbixxxy"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <a
            href="#"
            className="text-sm hover:underline text-blue-700 mt-2 inline-block self-center"
          >
            Don't have an account
          </a>
          <div className="self-center">
            <button className="btn btn-block mt-2">Login</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
