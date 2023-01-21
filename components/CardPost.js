import Link from "next/link";
import Date from "../components/Date";

export default function CardPost({ postData }) {
  return (
    <div className="card">
      <img src={postData.blogImage} alt="" />
      <div className="post-date">
        Posted on <Date dateString={postData.date} />
      </div>
      <h3>{postData.title}</h3>
      <Link className="btn" href={`/posts/${postData.id}`}>
        Read more...
      </Link>
    </div>
  );
}
