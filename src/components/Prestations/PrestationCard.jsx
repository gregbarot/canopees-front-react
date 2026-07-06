import "./PrestationCard.css";
import ModalButton from "./ModalButton";
import { useServiceImages } from "../../hooks/useServiceImages";


export default function PrestationCard({ prestation }) {
  const backUrl = import.meta.env.VITE_BACK_URL;

  const { serviceImages, loading, error } = useServiceImages(prestation.id);

  const isOdd = prestation.id % 2 !== 0;

  const mainImage =
    serviceImages.find((image) => image.main) || serviceImages[0];

  return (
    // mon container pour le fond
    <article className={`prestation-card ${isOdd ? "odd" : "even"} py-4 px-4`}>
      <div className="container">
        {/* mon conatainer pour l'ordre */}
        <div className={`row ${!isOdd ? "flex-lg-row-reverse" : ""} g-4`}>
          {/* ma div info */}
          <div className="prestation-info col-12 col-lg-7 d-flex">
            <div className="d-flex flex-column justify-content-start">
              <h2 className="text-lg-start">{prestation.name}</h2>

              <div
                className={`prestation-divider divider-${prestation.color} align-self-center align-self-lg-start`}
              ></div>

              <div
                className="prestation-description rich-text"
                dangerouslySetInnerHTML={{
                  __html: prestation.description || "",
                }}
              />
              {/* Bouton mobile */}
              <div className="d-none d-lg-flex mt-auto">
                <ModalButton prestation={prestation} images={serviceImages} />
              </div>
            </div>
          </div>
          {/* Ma div image */}
          <div className="prestation-img col-12 col-lg-5">
            {loading && <p>Chargement de l’image...</p>}

            {error && <p>Image indisponible.</p>}

            {!loading && !error && mainImage && (
              <img
                src={`${backUrl}${mainImage.imageUrl}`}
                alt={mainImage.altText}
                className={`img-fluid border-${prestation.color}`}
              />
            )}

          </div>

          {/* Bouton Desktop */}
          <div className="d-lg-none d-flex justify-content-center my-5">
            <ModalButton prestation={prestation} images={serviceImages}/>
          </div>
        </div>
      </div>
    </article>
  );
}
