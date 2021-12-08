import { Component } from 'react';
import Section from 'components/Section/Section';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Searchbar from 'components/Searchbar/Searchbar';
import Modal from 'components/Modal/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    searchName: '',
    showModal: false,
    imageSrc: null,
    imageAlt: null,
  };

  handleFormSubmit = searchName => {
    this.setState({ searchName });
  };
  toggleModal = (src, alt) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      imageSrc: src,
      imageAlt: alt,
    }));
  };
  render() {
    return (
      <>
        <Section>
          <Searchbar onSubmit={this.handleFormSubmit} />
        </Section>
        <Section>
          <ImageGallery
            searchName={this.state.searchName}
            onClick={this.toggleModal}
          />
        </Section>
        {this.state.showModal && (
          <Modal
            src={this.state.imageSrc}
            alt={this.state.imageAlt}
            onClose={this.toggleModal}
          />
        )}
        <ToastContainer autoClose={4000} />
      </>
    );
  }
}
export default App;
