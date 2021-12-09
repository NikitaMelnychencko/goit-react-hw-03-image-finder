const ImageGalleryItem = ({ srs, alt, onClick, largeImageURL }) => {
  return (
    <li className="gallery-item" onClick={() => onClick(largeImageURL, alt)}>
      <img src={srs} alt={alt} />
    </li>
  );
};

export default ImageGalleryItem;
