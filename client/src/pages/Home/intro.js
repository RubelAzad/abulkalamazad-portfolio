import React from "react";
import { useSelector } from "react-redux";

function Intro() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { intro } = portfolioData;
  const {
    firstName,
    lastName,
    designation,
    description,
    middleName,
    welcomeText,
  } = intro;

  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10">
      <h1 className="text-white">{welcomeText || ""}</h1>
      <h1 className="text-7xl sm:text-3xl text-secondary font-semibold">
        {firstName || ""} {middleName || ""} {lastName || ""}
      </h1>
      <h1 className="text-6xl sm:text-2xl text-white font-semibold">
        {designation || ""}
      </h1>
      <p className="text-white">{description || ""}</p>
      <a
        href="https://shorturl.at/DttON"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="border-2 border-tertiary text-tertiary px-10 py-5 sm:px-5 sm:py-3">
          My Resume
        </button>
      </a>
    </div>
  );
}

export default Intro;
