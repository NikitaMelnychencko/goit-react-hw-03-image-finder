import { Component } from 'react';
import Section from 'components/Section/Section';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Searchbar from 'components/Searchbar/Searchbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { nanoid } from 'nanoid';
const BASE = 'https://pixabay.com/api/';
const KEY = '23933594-99c5d6abfa76120a4e36d3057';
class App extends Component {
  state = {
    searchName: '',
    image: null,
    loading: false,
  };
  // componentDidMount() {
  //   let url =
  //     BASE +
  //     `?q=car&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(image => this.setState({ image }))
  //     .catch()
  //     .finally(() => this.setState({ loading: true }));
  // }
  handleFormSubmit = searchName => {
    this.setState({ searchName });
  };

  render() {
    return (
      <>
        <Section>
          <Searchbar onSubmit={this.handleFormSubmit} />
        </Section>
        <Section>
          {!this.state.loading && <p>Loading...</p>}{' '}
          {this.state.image && <ImageGallery image={this.state.image} />}
        </Section>
        <ToastContainer autoClose={4000} />
      </>
    );
  }
}
export default App;
