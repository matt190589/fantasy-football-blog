import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import { useState } from "react";
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
  const [allPosts, setAllPosts] = useState(allPostsData);
  const filterPosts = (event) => {
    console.log(event.target.value);
    const value = event.target.value.toLowerCase();
    const filteredPosts = allPostsData.filter((post) =>
      `${post.tags}`.toLowerCase().includes(value)
    );
    setAllPosts(filteredPosts);
  };

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Search filterPosts={filterPosts} />
      <section className={utilStyles.headingMd}>
        <p>
          I'm the Fantasy Football Tipster! Every Game Week, I'll be here to
          discuss the best Ins and Outs before the upcoming transfer deadline
          while sharing my own wins and woes along the way.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <div className="posts">
          {allPosts.map((allPosts, index) => (
            <CardPost allPostData={allPosts} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
