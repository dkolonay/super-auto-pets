//React
import * as React from 'react';
import Helmet from "react-helmet";

//Images
import ogImage from '../images/og-image.jpg';


const Seo = ({title, description, siteUrl})=>{
    return (
        <Helmet
        htmlAttributes={{
          lang: 'en'
        }}
          title={title}
          meta={[
            {
              name: 'description',
              content: description,
            },
            {
              property: 'og:title',
              content: title,
            },
            {
              property: 'og:description',
              content: description
            },
            {
              property: 'og:type',
              content: 'website',
            },
            {
              name: 'twitter:title',
              content: title,
            },
            {
              name: 'twitter:description',
              content: description,
            },
            {
              property: "og:image",
              content: `${siteUrl}${ogImage}`,
            },
            {
              name: "twitter:card",
              content: "summary_large_image",
            }
          ]}
        />
    )
}

export default Seo;