import { PureComponent } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { nanoid } from 'nanoid';
import Button from 'components/Button/Button';

class ImageGallery extends PureComponent {
  state = {
    image: [],
    status: 'idle',
    error: null,
    page: 1,
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.searchName !== this.props.searchName ||
      prevState.page !== this.state.page
    ) {
      const BASE = 'https://pixabay.com/api/';
      const KEY = '23933594-99c5d6abfa76120a4e36d3057';
      const url =
        BASE +
        `?q=${this.props.searchName}&page=${this.state.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;
      this.setState({ status: 'pending' });
      fetch(url)
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(new Error(`Oops, something went wrong.`));
        })
        .then(image => {
          if (image.hits.length === 0) {
            return Promise.reject(
              new Error(`No results were found for your search.`),
            );
          }
          this.setState({
            image: [...this.state.image, ...image.hits],
            status: 'resolved',
          });
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }
  nextPage = () => {
    this.setState({
      page: this.state.page + 1,
    });
  };
  render() {
    const { image, status, error } = this.state;
    return (
      <>
        {status === 'idle' && <p>Input value</p>}
        {status === 'pending' && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        )}
        {status === 'rejected' && <strong>{error.message}</strong>}
        {status === 'resolved' && (
          <>
            <ul className="gallery">
              {image.map(img => (
                <ImageGalleryItem
                  key={nanoid()}
                  onClick={this.props.onClick}
                  srs={img.previewURL}
                  alt={img.tags}
                  largeImageURL={img.largeImageURL}
                />
              ))}
            </ul>
            <Button onClick={this.nextPage} />
          </>
        )}
      </>
    );
  }
}

export default ImageGallery;
