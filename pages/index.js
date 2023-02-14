import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import CardPost from "../components/CardPost";
import Search from "../components/Search";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section classname={utilStyles.headingMd}>
        <p>
          I'm the Fantasy Football Tipster! Every Game Week, I'll be here to
          discuss the best Ins and Outs before the upcoming transfer deadline
          while sharing my own wins and woes along the way.
        </p>
        <Search />
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <div className="posts">
          {allPostsData.map((allPostData, index) => (
            <CardPost allPostData={allPostData} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
