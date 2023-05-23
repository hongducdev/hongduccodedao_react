interface SEOProps {
  title: string;
  description: string;
  url: string;
  image: string;
}

export const BlogSEO = ({ title, description, url, image }: SEOProps) => {
  const seo = {
    title,
    description,
    url,
    image,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="title" content={seo.title}></meta>
      <meta
        name="keywords"
        content="Nguyễn Hồng Đức (hongduccodedao), hongducodedao, Nguyễn Hồng Đức"
      ></meta>
      <meta name="author" content="Nguyễn Hồng Đức (hongduccodedao)"></meta>
      <meta name="geo.region" content="VN"></meta>
      <meta property="og:locale" content="vi_VN"></meta>
      <meta name="theme-color" content="#1DC071"></meta>
      <meta name="description" content={seo.description} />
      <meta
        name="google-site-verification"
        content="wO7_mXt_nA0dY_Xw1LH7l2YExnqGbSAx0A-mfo72lVs"
      />
      <meta
        name="facebook-domain-verification"
        content="mkiddxmoh9v84vek04vz472wd41n2f"
      />
      <meta name="msvalidate.01" content="719E848983AA37F4AA3A04B3616E1F9F" />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`https://hongduccodedao.site/${seo.url}`}
      />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content={`https://hongduccodedao.site/${seo.url}`}
      />
      <meta property="twitter:title" content={seo.title} />
      <meta
        property="twitter:description"
        content={seo.description}
      />
      <meta
        property="twitter:image"
        content={seo.image}
      />
    </>
  );
};
