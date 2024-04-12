export function Card({ picture, mainTitle, contents }) {
  return (
    <article className="card">
      <span>{picture}</span>
      <h5>{mainTitle}</h5>
      <p>
        {contents.length > 100 ? `${contents.substring(0, 100)}...` : contents}
      </p>
    </article>
  );
}
