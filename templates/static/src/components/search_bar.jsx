import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }

  handleUpdate = (event) => {
    const { search } = this.props;
    this.setState({
      term: event.target.value
    });
    search(event.target.value);
  }

  render() {
    const { term } = this.state;
    return (
      <input
        value={term}
        type="text"
        className="form-control form-search"
        onChange={this.handleUpdate}
      />
    );
  }
}

