import React from "react";
import Head from "next/head";

import socialTags from "./socialTags";

const SEO = (props) => {
  const { url, title, description, image, schemaType } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta itemprop="name" content={title} />
      <meta itemprop="description" content={description} />
      <meta itemprop="image" content={image} />
      {socialTags(props).map(({ name, content }) => (
        <meta key={name} name={name} content={content} />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": schemaType,
            name: title,
            about: description,
            url,
          }),
        }}
      />
    </Head>
  );
};

export default SEO;
