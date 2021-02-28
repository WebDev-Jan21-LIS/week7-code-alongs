import React from 'react';

class Counter extends React.Component {
    state = {
        count: 0
    }

    componentDidMount() {
       console.log('Component DID MOUNT.')
        //1. Do an API request
        axios.get('').then((response) => {
            this.setState({
                something: response.data
            })
        });
        //2. Set the state

       //Everytime we change the state
       //We get a RE-RENDER 
        this.intervalId = setInterval(() => {
            this.setState((state) => ({        
                count: state.count + 1
           }))
        }, 1000)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE from', prevState.count);
        //Re-fecth data from an API
        // if (this.props.languange !== prevProps.language) {
        // re-fetch data
        //}
    }

    componentWillUnmount() {
        console.log('Component WILL UNMOUNT');
        clearInterval(this.intervalId);
    }

    render() {
        console.log('Component RENDER.') 
        const { count } = this.state;
            return <h1>{count}</h1>
    }
}

export default Counter;