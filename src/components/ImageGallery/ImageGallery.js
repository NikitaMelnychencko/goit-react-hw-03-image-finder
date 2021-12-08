import { PureComponent } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';

class ImageGallery extends PureComponent {
  state = {
    image: [],
    loading: false,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchName !== this.props.searchName) {
      const BASE = 'https://pixabay.com/api/';
      const KEY = '23933594-99c5d6abfa76120a4e36d3057';
      const url =
        BASE +
        `?q=${this.props.searchName}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;
      this.setState({ loading: true });
      fetch(url)
        .then(res => res.json())
        .then(image => this.setState({ image: [...image.hits] }))
        .catch(error => toast.error('Opss 404!'))
        .finally(() => this.setState({ loading: false }));
    }
  }
  render() {
    const { image, loading } = this.state;
    return (
      <>
        {loading && <p>Loading...</p>}{' '}
        <ul className="gallery">
          {!this.props.searchName && (
            <li>
              <p>Input value</p>
            </li>
          )}
          {image.map(img => (
            <ImageGalleryItem
              key={img.id}
              onClick={this.props.onClick}
              srs={img.previewURL}
              alt={img.tags}
              largeImageURL={img.largeImageURL}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default ImageGallery;
