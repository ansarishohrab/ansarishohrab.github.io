import { useState } from "react";
import UILoader from "../ui-loader/UILoader";
import "./UIImage.scss";

const UIImage = (props) => {
  const {
    width,
    height,
    src,
    alt,
    scale,
    loaderPadding,
    loaderWidth,
    loaderHeight,
  } = props;
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const onImageLoaded = () => {
    setIsImageLoaded(true);
  };

  const onImageError = (e) => {
    console.error(e.message);
    setIsImageLoaded(false);
  };

  return (
    <div className="ui-image-container">
      {!isImageLoaded && (
        <UILoader
          width={loaderWidth || width}
          height={loaderHeight || width}
          padding={loaderPadding}
        />
      )}
      <img
        className={`${scale ? "scaled" : ""} ${
          isImageLoaded ? "loaded" : ""
        } blur`}
        style={{ width, height: height || "auto" }}
        src={src}
        alt={alt}
        onLoad={onImageLoaded}
        onError={onImageError}
      />
    </div>
  );
};

export default UIImage;
