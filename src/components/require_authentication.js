import React, { Component } from 'react';
import { connect } from 'react-redux';

// instead of export a class we export a function
export default function (ComposedComponent) {

    // define a property of an actual class!
    // we don't need to instantiate a object

    // Authentication.contextTypes 
    class Authentication extends Component {
        // to be able to use the context object for redirects!
        static contextTypes = {
            router: React.PropTypes.object
        }

        componentWillMount() {
            if (!this.props.authenticated) {
                this.context.router.history.push('/');
            }

        }
        
        // to handle edge case if user is on protected resource
        // and logs out so he doesn't see the restricted content
        componentWillUpdate(nextProps){
            if(!nextProps.authenticated){
                this.context.router.history.push('/');
            }
        }

        render() {
            // console.log(this.context);
            return <ComposedComponent {...this.props} />
        }
    }

    function mapStateToProps(state) {
        return { authenticated: state.authenticated };
    }

    // connect higher order component with redux store!, so we have access
    // to the authenticated state
    return connect(mapStateToProps)(Authentication);
}

// composedComponent = Component which goes in as Input


