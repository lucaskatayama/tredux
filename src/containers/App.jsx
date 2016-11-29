import React, { PropTypes, Component } from 'react';
import Navbar from './Navbar';


class Main extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  componentWillMount() {
    this.updateDimensions();
  }

  // Handle resize changes
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  // Removes when leave page
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateDimensions);
  }

  // Update main content height, removes Navbar height
  updateDimensions = () => {
    const Navbarheight = 50;
    const height = window.innerHeight - Navbarheight;
    this.setState({ height });
  }

  render() {
    return (
      <div className="skin-blue layout-top-nav">
        <div className="wrapper">
          <Navbar />
          <div className="content-wrapper" style={{ minHeight: this.state.height, maxHeight: this.state.height }}>
            <div className="container-fluid" style={{ padding: '0' }}>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
