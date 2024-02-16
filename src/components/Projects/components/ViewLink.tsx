// components/FeatureList.js
import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { ViewLinkProps } from "~/types/types";

export default function ViewLink({ linkTilte1, linkPath1 }: ViewLinkProps) {
  return (
    <>
      <a
        href={linkPath1}
        target="_blank"
        rel="noopener noreferrer"
        className="px-2"
      >
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-0 gap-4 my-6">
          <div className="p-4 font-bold rounded-md shadow-md transition duration-100 ease-in-out transform hover:scale-95">
            <div className="flex justify-center mt-4">
              <div className="flex flex-row items-center justify-between bg-gray-50 py-2 px-4 rounded-md">
                {linkTilte1}
                <AiOutlineEye size={30} className="mx-2 me-2 flex-shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}
