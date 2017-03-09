import React,{Component} from 'react';
import css from './components.css';
export default class InnerStyle extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            color: 'red',
        }
    };
    componentDidMount(){
        console.log(this.props.children)
    };
    render() {
        return (
            <section>
                <h1>Color</h1>
                <h3>Name</h3>
                <p>{this.state.color || "white"}</p>
                <h3>Hex</h3>
                <p>
                    {(() => {
                        switch (this.state.color) {
                        case "red":   return "#FF0000";
                        case "green": return "#00FF00";
                        case "blue":  return "#0000FF";
                        default:      return "#FFFFFF";
                        }
                    })()}
                </p>
            </section>
        )
    }
} 