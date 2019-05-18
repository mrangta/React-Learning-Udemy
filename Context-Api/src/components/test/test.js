import React, { Component } from 'react'

export default class Test extends Component {

    state = {
        title: '',
        body: ''
    };
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data => this.setState({
                title: data.title,
                body: data.body
            }))
    }

    // componentWillMount() {
    //     console.log("Component Will Mount..");
    // }

    // componentDidUpdate() {
    //     console.log("Component Did Update..");
    // }

    // componentWillUpdate() {
    //     console.log("Component Will Update..");
    // }

    // componentWillReceiveProps(nextProps, nextState) {
    //     console.log("Component Will Receive Props..");
    // }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     return {
    //         title: 'something'
    //     };
    // }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log("getSnapshotBeforeUpdate");
    // }

    render() {
        return (
            <div>
                <h1>Test all Lifecycle methods here</h1>
            </div>
        )
    }
}
