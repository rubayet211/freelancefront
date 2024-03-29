import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation
    if (!email || !password) {
      setError("Email and password are required");
    } else if (!isValidEmail(email)) {
      setError("Invalid email address");
    } else {
      console.log({ email, password });
      setEmail("");
      setPassword("");
      setError("");
    }
  };

  const isValidEmail = (email) => {
    const emailPattern = /^\S+@\S+\.\S+$/;
    return emailPattern.test(email);
  };

  const handleNewUser = () => {
    router.push("/registration");
  };

  return (
    <main className="flex space-x-10">
      <div className="flex flex-col items-center justify-center mt-[30rem] mb-[30rem] ml-10 w-[60rem] h-[70rem] px-28 pt-20 bg-emerald-50 dark:bg-gradient-to-r from-slate-900 via-emerald-900 to-sky-900">
        <Image
          src="/login.png"
          alt="Login Page"
          width={200}
          height={200}
          className="mb-5"
        />
        <h1 className="text-2xl text-center font-bold mb-2 dark:text-gray-200">
          Start Your Journey as a Freelancer
        </h1>
        <p className="text-center text-gray-700 dark:text-gray-200">
          Embark on a thrilling freelancing journey, unlocking endless
          opportunities! As a freelancer, shape your path, set your schedule,
          and work on passion projects. Whether you are a pro or just starting,
          freelancing offers flexibility and dynamic ways to showcase skills.
          Join a global community, connect with clients, and take control of
          your career. Break free from constraints and let creativity flourish.
          Start your freelancing journey now for freedom and fulfillment!
        </p>
      </div>

      <div className="flex flex-col justify-center mt-[30rem] mb-[30rem] w-[70rem] bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Sign in
            </h1>
          </div>

          <div className="mt-5">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Email address
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      value={email}
                      onChange={handleChangeEmail}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    />
                    <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                      <svg
                        className="h-5 w-5 text-red-500"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor="password"
                      className="block text-sm mb-2 dark:text-white"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={password}
                      onChange={handleChangePassword}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    />
                    <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                      <a
                        className="text-sm text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        href="../examples/html/recover-account.html"
                      >
                        Forgot password?
                      </a>
                      <svg
                        className="h-5 w-5 text-red-500"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ms-3 flex flex-row justify-around">
                    <label
                      htmlFor="remember-me"
                      className="text-sm dark:text-white"
                    >
                      Remember me
                    </label>
                    <a
                      className="text-sm text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="../examples/html/recover-account.html"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Sign in
                </button>
                {error && <p className="text-xl text-red-600 mt-2">{error}</p>}
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Do not have an account yet? &nbsp;
                </p>
                <button
                  type="button"
                  onClick={handleNewUser}
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-[30rem] mb-[30rem] mr-10 w-[60rem] h-[70rem] px-20 pt-20 bg-emerald-50 dark:bg-gradient-to-r from-slate-900 via-emerald-900 to-sky-900">
        <Image
          src="/login.png"
          alt="Login Page"
          width={200}
          height={200}
          className="mb-5"
        />
        <h1 className="text-2xl text-center font-bold mb-2 dark:text-gray-200">
          Start Your Journey as a Client
        </h1>
        <p className="text-center text-gray-700 dark:text-gray-200">
          Embark on a transformative client journey and discover the ease of
          finding top freelancers for your projects. Whether you're a business
          owner, entrepreneur, or an individual seeking specific skills,
          freelancing offers a diverse pool of professionals ready to meet your
          needs. Post projects, connect with skilled freelancers, and watch
          ideas come to life. Take control, explore a global talent pool, and
          enjoy task management simplicity. Start your client journey today and
          witness the power of collaboration that can elevate your projects to
          new heights!
        </p>
      </div>
    </main>
  );
};

export default Login;
