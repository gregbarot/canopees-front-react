import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import { useCompanyInfos } from "../hooks/useCompanyInfos";

import logo from "../assets/images/logo-canopees.png";
import Navbar from "./Navbar/Navbar";

export default function Header() {
  const backUrl = import.meta.env.VITE_BACK_URL;

  const { companyInfos, loading, error } = useCompanyInfos();

  const canopeesInfo =
    companyInfos.find((companyInfo) => companyInfo.name === "Canopées");

  //Effet de scroll sur le logo
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${scrolled ? "scrolled" : ""} container pb-3 px-5`}>
      {/* Logo */}
      <div
        className={`${scrolled ? "py-0" : "py-5"} logo-container d-flex justify-content-center`}
      >
        <Link to="/">
          <img className="logo" src={`${backUrl}${canopeesInfo?.logoUrl}`} alt="logo de Canopées" />
        </Link>
      </div>

      {/* Navbar */}
      <Navbar />
    </header>
  );
}
