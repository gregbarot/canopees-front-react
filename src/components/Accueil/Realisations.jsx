import Carousel from "../Carousel/Carousel";

export default function Realisations({content}) {
  if (!content) {
    return null;
  }
  
  return (
    <section className="py-4" id="realisations">
      <h2>{content.title}</h2>
      <Carousel />
    </section>
  );
}
