const ImageGalleryItem = ({ srs, alt }) => {
  return (
    <li className="gallery-item">
      <img src={srs} alt={alt} />
    </li>
  );
};

export default ImageGalleryItem;
