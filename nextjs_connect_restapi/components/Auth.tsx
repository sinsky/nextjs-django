import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { useRouter } from "next/router";
import Cookie from "universal-cookie";

const cookie = new Cookie();
const cookieKey = "access_token";
const cookieOptions = { path: "/" };
const { NEXT_PUBLIC_RESTAPI_URL } = process.env;

const Auth = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const login = async () => {
    await fetch(`${NEXT_PUBLIC_RESTAPI_URL}/api/auth/jwt/create/`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.status === 400) throw "authentication failed";
        else if (res.ok) return res.json();
      })
      .then((data) => {
        cookie.set(cookieKey, data.access, cookieOptions);
      })
      .then((_) => router.push("/main-page"))
      .catch(alert);
  };
  const authUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) login();
    else
      await fetch(`${NEXT_PUBLIC_RESTAPI_URL}/api/register/`, {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          if (res.status === 400) throw "authentication failed";
        })
        .then((_) => login())
        .catch(alert);
  };

  return (
    <>
      <div className="w-full max-w-md space-y-8">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-auto h-12 mx-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-center text-white">
            {isLogin ? "Login" : "Sign up"}
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={authUser}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <input
                name="username"
                type="text"
                autoComplete="username"
                required
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <input
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="text-sm">
              <button
                className="font-medium cursor-pointer text-white-600 hover:text-indigo-500"
                onClick={() => setIsLogin(!isLogin)}
              >
                Change mode?
              </button>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon className="w-5 h-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
              </span>
              {isLogin ? "Login with JWT" : "Create new user"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Auth;
