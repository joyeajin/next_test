import Link from "next/link";

export function Card({ picture, mainTitle, contents, link }) {
  return (
    <article className="card">
      <span>{picture}</span>
      <h5>{mainTitle}</h5>
      <p>
        {contents.length > 100 ? `${contents.substring(0, 100)}...` : contents}
      </p>
      <Link href={link}>링크</Link>
    </article>
  );
}
