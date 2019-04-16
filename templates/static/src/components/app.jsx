import React from 'react';

import Gif from './gif';
import SearchBar from './search_bar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      stores: [],
      selectedGifId: "xT9IgDEI1iZyb2wqo8",
    };
  }

  componentDidMount() {
    this.callApi('stores')
  }

  callApi(endpoint) {
    fetch(`/api/v1/${endpoint}`)
      .then(response => response.json())
      .then(
        (data) => {
          this.setState({
            stores: data,
            isLoaded: true
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  search(query) {
    this.callApi('stores')
  }

  renderStores() {
    const { error, isLoaded, stores } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {stores.map(store => (
            <li key={store.postcode}>
              {store.name} {store.postcode}
            </li>
          ))}
        </ul>
      );
    }
  }

  render() {
    const { selectedGifId } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="store-list">
            {this.renderStores()}
          </div>
        </div>
        <div className="right-scene">
          <div className="selected-gif">
            <Gif id={selectedGifId} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
