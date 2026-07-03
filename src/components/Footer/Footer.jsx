import { Link } from "react-router-dom";
import "./Footer.css";

import { useCompanyInfos } from "../../hooks/useCompanyInfos";

import pinmap from "../../assets/icons/pinmap.svg";
import phone from "../../assets/icons/phone.svg";
import mail from "../../assets/icons/mail.svg";

import logo_facebook from "../../assets/icons/logo_facebook.svg";
import logo_instagram from "../../assets/icons/logo_instagram.svg";
import logo_linkedin from "../../assets/icons/logo_linkedin.svg";

export default function Footer() {
  const backUrl = import.meta.env.VITE_BACK_URL;

  const { companyInfos, loading, error } = useCompanyInfos();

  const canopeesInfo =
    companyInfos.find((companyInfo) => companyInfo.name === "Canopées");

  return (

    <footer>
      <div className="container">

          <p className="title">Canopées</p>

          {/* Coordonnées */}
          <div className="row justify-content-center gy-4 pb-5">
            <div className="col-12 col-lg-auto d-flex justify-content-center align-items-center">
              <img src={pinmap} alt="" className="pe-2" />
              <span className="footer-text px-2">
                {canopeesInfo?.address}
              </span>
            </div>
            <div className="col-12 col-lg-auto d-flex justify-content-center align-items-center">
              <img src={phone} alt="" className="px-2" />
              <span className="footer-text px-2">
                {canopeesInfo?.phone}
              </span>
            </div>
            <div className="col-12 col-lg-auto d-flex justify-content-center align-items-center">
              <img src={mail} alt="" className="px-2" />
              <span className="footer-text ps-2">
                {canopeesInfo?.email}
              </span>
            </div>
          </div>

          {/* Réseaux Sociaux */}
          <div
            className="list-group list-group-horizontal justify-content-center"
            id="social-footer"
          >
            <ul className="row justify-content-center gap-3">
              <li className="col list-group-item justify-content-center align-self-center border-0">
                <Link to={canopeesInfo?.facebookUrl} target="_blank" rel="noopener noreferrer">
                  <img
                    className="social-icon"
                    src={logo_facebook}
                    alt=""
                    aria-label="acceder à notre profil Facebook"
                  />
                </Link>
              </li>
              <li className="col list-group-item justify-content-center align-self-center border-0">
                <Link to={canopeesInfo?.instagramUrl} target="_blank" rel="noopener noreferrer">
                  <img
                    className="social-icon"
                    src={logo_instagram}
                    alt=""
                    aria-label="acceder à notre profil Instagram"
                  />
                </Link>
              </li>
              <li className="col list-group-item justify-content-center align-self-center border-0">
                <Link to= {canopeesInfo?.linkedinUrl} target="_blank" rel="noopener noreferrer">
                  <img
                    className="social-icon"
                    src={logo_linkedin}
                    alt=""
                    aria-label="acceder à notre profil Linkedin"
                  />
                </Link>
              </li>
            </ul>
          </div>

          <div className="divider my-4"></div>

          {/* Mentions Légales */}

          <div className="navbar navbar-expand">
            <div className="container justify-content-center">
              <ul className="navbar-nav justify-content-center">
                <li className="nav-item">
                  <Link className="footer-link" to="/mentions-legales">
                    Mentions légales
                  </Link>
                  <span className="px-2">-</span>
                </li>
                <li className="nav-item">
                  <Link className="footer-link" to="/cgu">
                    CGU
                  </Link>
                  <span className="px-2">-</span>
                </li>
                <li className="nav-item">
                  <Link className="footer-link" to="/cgv">
                    CGV
                  </Link>
                </li>
              </ul>
            </div>
          </div>

      </div>
    </footer>
  );
}
