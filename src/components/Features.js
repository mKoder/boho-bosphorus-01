import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import showdown from 'showdown'

const converter = new showdown.Converter()

const FeatureGrid = ({ gridItems }) => (
  <div id="features" className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-6">
        <div className="card">
          <div className="card-content">
            <div className="card-image">
                <PreviewCompatibleImage imageInfo={item} />
            </div>
            <div className="card-content is-overlay">
              <span className="tag is-black is-large">{item.title}</span>
            </div>
            <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(item.text) }}/>
          </div>
        </div>
      </div>
    ))}
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
