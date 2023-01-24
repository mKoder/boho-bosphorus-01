import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features";
import Services from "../components/Services";
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  mainpitch,
  description,
  intro,
}) => {
  const heroImage = getImage(image) || image;

  console.log('GOT TITLE', title)

  return (
    <div>
      <FullWidthImage img={heroImage} />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-12">
                <div className="content">
                  <div className="content">
                    <div className="tile">
                      <h1 className="title">{mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <h1 className="has-text-centered">{mainpitch.description}</h1>
                    </div>
                    <div className="tile">
                      <h4 className="has-text-centered">{description}</h4>
                    </div>
                    <h2 className="has-text-centered lined-header"><span>Spaces</span></h2>
                  </div>
                  <div className="tile">

                  </div>
                  <Features gridItems={intro.spaces} />
                  <h2 className="has-text-centered lined-header"><span>Services on demand</span></h2>
                  <Services gridItems={intro.services} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    spaces: PropTypes.array,
    services: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout pageTitle={frontmatter.title}>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        mainpitch {
          description
        }
        description
        intro {
          spaces {
            image {
              childImageSharp {
                gatsbyImageData(width: 600, quality: 90, layout: CONSTRAINED)
              }
            }
            title
            text
            body
          }
          services {
            image {
              childImageSharp {
                gatsbyImageData(width: 600, quality: 90, layout: CONSTRAINED)
              }
            }
            title
          }
          heading
          description
        }
      }
    }
  }
`;
