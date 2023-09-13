import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import maskani from "../../src/assets/svg/maskani.png";
import {FcHome} from "react-icons/fc"
export default function Header() {
  const [pageState, setPageState] = useState("Sign in");
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Sign in");
      }
    });
  }, [auth]);

  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-40">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div className="flex justify-between items-center  cursor-pointer">
          <div>
            <p className="">
              <FcHome className="'mr-4 text-6xl bg-red-500 rounded-full p-1 border-2 hover:bg-red-300" />
            </p>

          </div>
          <div className="grid justify-center items-center">
            <p className=" text-md md:text-3xl  text-red-700 font-extrabold text-center hover:text-red-400">
              Maskani
            </p>
            <span className="hidden sm:block text-sm  text-blue-600 hover:text-blue-400">Better living happy home</span>

          </div>
          
          
          
        </div>
        <div>
          <ul className="flex space-x-5 md:space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/") && "text-black border-b-red-500"
                }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute("/offers") && "text-black border-b-red-500"
                }`}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${(pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) &&
                "text-black border-b-red-500"
                }`}
              onClick={() => navigate("/profile")}
            >
              {pageState}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}