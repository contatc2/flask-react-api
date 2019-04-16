import React from 'react';

import Gif from './gif';
import StoreList from './store_list';
import SearchBar from './search_bar';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [],
      selectedGifId: "xT9IgDEI1iZyb2wqo8",
    };
  }

  search = () => {
    fetch('/api/v1/stores')
    .then(response => response.json())
    .then(data => {this.setState({
        stores: data});
    });
  }

  render() {
    const { selectedGifId } = this.state;
    const { stores } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="store-list">
            <StoreList stores={stores} />
          </div>
        </div>
        <div className="right-scene">
          <div>
            <Gif id={selectedGifId} />
          </div>
        </div>
      </div>
    );
  }
}
