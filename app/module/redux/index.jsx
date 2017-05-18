import React, { Component } from 'react';
import { createStore } from 'redux';
import Counter from './components/counter.jsx';
import counter from './reducer/index.js';
import { connect, Provider } from 'react-redux';
var store = createStore(counter)
// @connect(
//     (state) => {
//         return {
//             ...state
//         };
//     }
// )



class Component1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            a: 2
        }
    };
    //  static propTypes = {
    //         articleReducer: PropTypes.object.isRequired
    // };
    componentDidMount() {
        console.log(store);
    };

    render() {
        console.log(store.getState())
        return (
            <Provider>
                <div>
                    a:{this.props.a}
                    <Counter
                        value={store.getState()}
                        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
                        onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
                        />,
                </div>
            </Provider>

        )
    };

}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Component1);