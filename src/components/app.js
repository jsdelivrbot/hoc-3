import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from './layout';

class App extends Component {
  render() {
    return (
        <Layout>
          <div>

          </div>
        </Layout>
    );
  }
}

function mapStateToProps(state){
  return {posts: state.posts};
}

// Component to Container
export default connect(mapStateToProps)(App);