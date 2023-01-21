import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/Date";
import utilStyles from "../../styles/utils.module.css";
import Image from "next/image";
import CardPost from "../../components/CardPost";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          {" "}
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <div className="display: flex flex-direcction: center align-items: center">
          <h1>Team Insight</h1>
          <Image
            src={postData.blogImage}
            height={300}
            width={300}
            alt="My weekly fantasy team"
          />
        </div>
      </article>
      <CardPost postData={postData}></CardPost>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
