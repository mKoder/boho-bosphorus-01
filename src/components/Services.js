import * as React from "react";
import PropTypes from "prop-types";
import Masonry from 'react-masonry-component';
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import { GatsbyImage } from "gatsby-plugin-image";

const images = [
  "https://picsum.photos/200/300?image=1050",
  "https://picsum.photos/300/300?image=206",
  "https://picsum.photos/400/500?image=1050",
  "https://picsum.photos/800/200?image=1050",
]

const masonryOptions = {
  transitionDuration: 0
};

const imagesLoadedOptions = {}

const FeatureGrid = ({ gridItems }) => (
  <div id="services" className="block">
    <Masonry
      options={masonryOptions} // default {}
      disableImagesLoaded={false} // default false
      updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
      imagesLoadedOptions={imagesLoadedOptions} // default {}
    >
      {gridItems.map((item, index) => (
        <div className="column is-4">
          <div className="card">
            <div className="card-content">
              <div className="card-image">
                  <GatsbyImage
                    image={item.image.childImageSharp.gatsbyImageData}
                    style={{ borderRadius: "2px", width: "100%" }}
                  />
              </div>
              <p className="has-text-centered">{item.title}</p>
            </div>
          </div>
        </div>
      ))}
    </Masonry>
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
