import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {

        site {
                siteMetadata{
            author
          }
      }
    }

    `)

    return(

        <footer>

            <p> created by {data.site.siteMetadata.author} using gatsby</p>
        </footer>
    )
}

export default Footer