import React,{Component} from 'react';
import { createStore} from 'redux';
import Counter from './components/counter.jsx'
import counter from './reducer/index.js'
const store = createStore(counter)
export default class Component1 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
           
        }
    };
    componentDidMount(){
       
    };
   
    render() {
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