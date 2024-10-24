"use client";
import { usePathname, useRouter } from "next/navigation";

const BreadCrumb = ({ Title }) => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="">
      <h1 className=" z-50 text-white text-center font-bold text-5xl pt-8 pb-4">
        {Title}
      </h1>

      <ul className="flex items-center justify-center font-[sans-serif] space-x-4 mt-4">
        <li
          onClick={() => router.push("/")}
          className="text-white text-base cursor-pointer"
        >
          Home
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-gray-400 w-3.5 -rotate-90"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
              clipRule="evenodd"
              data-original="#000000"
            ></path>
          </svg>
        </li>
        <li
          onClick={() => router.push(`${pathname.split("/")[1]}`)}
          className="text-gray-300 text-base cursor-pointer"
        >
          {pathname.split("/")[1]}
        </li>
      </ul>
    </div>
  );
};

export default BreadCrumb;
