import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ image }) => {
  const arr = image.hits;
  return (
    <ul className="gallery">
      {arr.map(img => (
        <ImageGalleryItem key={img.id} srs={img.previewURL} alt={img.tags} />
      ))}
    </ul>
  );
};

export default ImageGallery;
