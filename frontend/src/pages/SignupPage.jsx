import React, { useState } from "react";
import GenderCheckBox from "../components/GenderCheckBox";
import { Link } from "react-router-dom";
import useSignup from "../hooks/useSignup";

const SignupPage = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const { loading, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <section className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xll font-semibold text-center text-gray-300">
          SignUp
          <span className="text-blue-500 ml-2">Chat App</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full name</span>
            </label>
            <input
              type="text"
              placeholder="Baz Bixxxy"
              className="w-full input input-bordered h-10"
              required
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">email</span>
            </label>
            <input
              type="email"
              placeholder="prefered email eg bazbixxxy"
              className="w-full input input-bordered h-10"
              required
              value={inputs.email}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Choose one you can rememeber"
              className="w-full input input-bordered h-10"
              required
              minLength={6}
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full input input-bordered h-10"
              required
              minLength={6}
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          <GenderCheckBox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />

          <Link
            to="/login"
            className="text-sm hover:underline text-blue-900 mt-2 inline-block self-center hover:text-white"
          >
            Already have an account
          </Link>

          <div>
            <button className="btn btn-block mt-2" disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
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
          SignUp
          <span className="text-blue-500 ml-2">Chat App</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">email</span>
            </label>
            <input
              type="text"
              placeholder="Baz Bixxxy"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">email</span>
            </label>
            <input
              type="text"
              placeholder="Choose a email eg bazbixxxy"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Choose one you can rememeber"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <GenderCheckBox />

          <a
            href="#"
            className="text-sm hover:underline text-blue-700 mt-2 inline-block self-center"
          >
            Already have an account
          </a>

          <div>
            <button className="btn btn-block mt-2">SignUp</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignupPage;
