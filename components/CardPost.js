import Link from "next/link";
import Date from "../components/Date";
import Image from "next/image";

export default function CardPost({ allPostData }) {
  return (
    <div className="card">
      <img className="card-img" src={allPostData.coverImage} alt="" />
      <div className="post-date">
        Posted on <Date dateString={allPostData.date} />
      </div>
      <h3>{allPostData.title}</h3>
      <div className="content">
        <Link className="btn-card" href={`/posts/${allPostData.id}`}>
          Read more...
        </Link>
      </div>
    </div>
  );
}
