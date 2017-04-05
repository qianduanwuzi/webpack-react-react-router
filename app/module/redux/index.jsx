import React,{Component} from 'react';
import { createStore} from 'redux';
import Counter from './components/counter.jsx';
import counter from './reducer/index.js';
import { connect } from 'react-redux';
var store = createStore(counter)
// @connect(
//     (state) => {
//         return {
//             articleReducer: state.articleReducer
//         };
//     }
// )

export default class Component1 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
           
        }
    };
    //  static propTypes = {
    //         articleReducer: PropTypes.object.isRequired
    // };
    componentDidMount(){
        console.log(store);
    };
   
    render() {
        console.log(store.getState())
            return(
                <div>
                   <Counter
                        value={store.getState()}
                        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
                        onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
                    />,
                </div>
            )
        };
       
    }