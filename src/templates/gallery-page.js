import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Gallery from "../components/Gallery";
import FullWidthImage from "../components/FullWidthImage";
import { getImage } from "gatsby-plugin-image";

// eslint-disable-next-line
export const GalleryPageTemplate = ({
  headerimage,
  title,
  images,
}) => {
  const heroImageProcessed = getImage(headerimage) || headerimage;

  return (
    <div>
      <FullWidthImage
        img={heroImageProcessed}
        title={title}
        h1Class="has-text-weight-bold is-size-4-mobile is-size-3-tablet is-size-2-widescreen"
        h1Transform="rotate(-90deg) translate(-20px, -450%)"
      />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-12">
                <Gallery images={images} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

GalleryPageTemplate.propTypes = {
  images: PropTypes.array
};

const GalleryPage = ({ data }) => {
  const { frontmatter: {
    headerimage,
    images,
    title,
  } } = data.markdownRemark;

  return (
    <Layout>
      <GalleryPageTemplate
        images={images}
        headerimage={headerimage}
        title={title}
      />
    </Layout>
  );
};

GalleryPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default GalleryPage;

export const galleryPageQuery = graphql`
  query GalleryPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        headerimage {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        title
        images {
          image {
            childImageSharp {
              gatsbyImageData(width: 600, quality: 90, layout: CONSTRAINED)
            }
          }
          alt
        }  
      }
    }
  }
`;

