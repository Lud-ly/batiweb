"use client";
import { useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdClose, MdDashboardCustomize } from "react-icons/md";
import { projectsCardBackOffice } from "~/data/backoffice";
import ArrowBack from "~/src/components/ArrowBack";
import BackofficeLinks from "~/src/components/Projects/BackofficeLinks";

export default function BackofficePage() {
  const [showDetail, setShowDetail] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedName, setSelectedName] = useState("");
  const [SelectedDescription, setSelectedDescription] = useState("");

  return (
    <div className="flex flex-col p-4">
      <ArrowBack iSize={30} />
      <div className="flex flex-row items-center mb-4 p-4">
        <h1 className="lg:text-4xl text-2xl font-bold p-3 lg:mx-14 uppercase">
          Logiciel de gestion
        </h1>
        <MdDashboardCustomize size={50} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center my-9">
        {projectsCardBackOffice.map((projectsCard) => (
          <div className="my-6 flex flex-col items-center bg-gray-100 hover:bg-gray-200 rounded-2xl p-4">
            <button
              onClick={() => {
                setSelectedImage(projectsCard.path);
                setSelectedName(projectsCard.name);
                setSelectedDescription(projectsCard.description);
                setShowDetail(true);
              }}
            >
              <img
                key={projectsCard.path}
                src={projectsCard.path}
                alt={`logo img ${projectsCard.path}`}
                className="mx-auto"
                width={600}
                height={400}
              />
            </button>
            <div className=" p-3 flex flex-col items-center font-bold">
              {projectsCard.name}
            </div>
            <div className=" p-3 flex flex-col items-center font-bold">
              {projectsCard.description}
            </div>
            <AiOutlineCheckCircle
              size={40}
              className={`me-2 flex-shrink-0 ${getStatusColorClass(
                projectsCard.status
              )}`}
            />
            {showDetail && (
              <div className="fixed inset-0 z-10 flex items-center justify-center backdrop-blur overflow-auto py-14 px-14">
                <div className="py-8 px-14 h-full text-black  dark:text-white">
                  <div className="text-gray-900 bg-gray-300">
                    <div className="text-gray-900 text-5xl flex flex-col items-center">
                      {selectedName}
                    </div>
                    <div className="text-gray-900 p-3 flex flex-col items-start">
                      <p>{SelectedDescription}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowDetail(false)}
                    className="absolute p-1 bg-gray-200 dark:bg-gray-800 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
                  >
                    <MdClose size={50} />
                  </button>
                  <div className="flex flex-col items-center py-14">
                    <img
                      key={`detail`}
                      src={selectedImage}
                      alt={`project img`}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <BackofficeLinks />
    </div>
  );
}

const getStatusColorClass = (status: number) => {
  switch (status) {
    case 1:
      return "text-green-700 dark:text-green-400";
    case 2:
      return "text-orange-700 dark:text-orange-400";
    case 3:
      return "text-red-700 dark:text-red-900";
    case 4:
      return "text-black";
    default:
      return "";
  }
};
