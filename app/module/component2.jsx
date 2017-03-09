import React,{Component} from 'react';
import css from './components.css';
import i from '../image/img1.png';
export default class Component2 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    };
    componentDidMount(){

    };
    componentWillReceiveProps(curProps) {
        console.log('进来了');
        console.log(curProps);
        if(curProps.hasExperience){
            this.setState({show:true});
            console.log('hasExperience的值为true')
            setTimeout(() =>{
                this.props.changeShow(false);
            },1000)
        }
    };
    render() {
        console.log('com2的render()')
        return (
            <div style={{display:this.props.hasExperience? "block":"none"}}>
               111
               <span style={{display:this.state.show? "block":"none"}}>222</span>
            </div>
        )
    }
} 