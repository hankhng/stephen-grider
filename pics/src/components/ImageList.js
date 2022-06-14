import React from "react";
import './ImageList.css'
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    // use .id to give uniqueness for the component so React knows which one to render
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
