import React, { Component } from "react";


import styles from "./newsImageStyles";

class NewsImage extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }



  render() {
    const { urlToImage } = this.props;
    const thumbnailImage =
      "https://images.unsplash.com/photo-1508612761958-e931d843bdd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80";
   

    return (

    );
  }
}

export default NewsImage;
