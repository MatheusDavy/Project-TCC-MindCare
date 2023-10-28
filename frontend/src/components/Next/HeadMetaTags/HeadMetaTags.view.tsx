import Head from "next/head";

export default function HeadMetaTags({title, description, canonical, metaImage}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical}></link>
        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={metaImage} />
        <meta property="og:url" content={canonical} />
        <meta property="og:description" content={description}></meta>
      </Head>
    </>
  );
}

