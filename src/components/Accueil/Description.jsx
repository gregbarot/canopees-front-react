export default function Description({ content }) {
  if (!content) {
    return null;
  }
  
  return (
    <>
      <section className="pt-4" id="description">
        <h1>{content.title}</h1>
        <div
        dangerouslySetInnerHTML={{ __html: content.textContent }}
        />
        
      </section>
    </>
  );
}
