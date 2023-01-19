import * as React from "react";
import PropTypes from "prop-types";
import ImageGallery from 'react-image-gallery';
import Masonry from 'react-masonry-component';
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import { GatsbyImage } from "gatsby-plugin-image";

const masonryOptions = {
  transitionDuration: 0
};

const imagesLoadedOptions = {}

const Gallery = ({ images }) => (
    <div id="gallery">
      <Masonry
        options={masonryOptions} // default {}
        disableImagesLoaded={false} // default false
        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
        imagesLoadedOptions={imagesLoadedOptions} // default {}
      >
        {images.map((image, index) => (
          <div className="column is-4">
            <div>
              <GatsbyImage
                image={image.image.childImageSharp.gatsbyImageData}
                style={{ border: "2px solid #121212" ,borderRadius: "3px", width: "100%" }}
                alt={image.alt}
              />
            </div>
          </div>
        ))}
      </Masonry>
    </div>
  );

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      alt: PropTypes.string,
    })
  ),
};

export default Gallery;
