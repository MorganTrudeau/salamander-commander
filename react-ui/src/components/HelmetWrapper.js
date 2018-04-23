import React, { Component } from "react";
import { Helmet } from "react-helmet";

class HelmetWrapper extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{this.props.title}</title>
          <meta name="description" content={this.props.description} />
          <meta name="keywords" content={this.props.keywords} />
          <meta name="robots" content="index,follow" />
          {this.props.canonical ? (
            <link rel="canonical" href={this.props.canonical} />
          ) : null}
        </Helmet>
      </div>
    );
  }
}

export default HelmetWrapper;
