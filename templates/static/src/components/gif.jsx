import React from 'react';

class Gif extends React.Component {
  // shouldComponentUpdate(nextProps) {
  //   const { id } = this.props;
  //   return nextProps.id !== id;
  // }

  render() {
    const { id } = this.props;
    if (!id) {
      return null;
    }
    const src = `https://media3.giphy.com/media/${id}/200.gif`;
    return (
      <img
        src={src}
        alt=""
        className="gif"
      />
    );
  }
}

export default Gif;
