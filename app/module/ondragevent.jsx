import React,{Component} from 'react';
import css from './components.css';
export default class Ondragevent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    };
    componentDidMount(){

    };
    ondrag(){
        this.setState({show:true});
    };
    onDrop(){
        this.setState({show:false});
    };
    dragStart(event){
        // console.log(event);
        // event.dataTransfer.setData("Text",ev.target.id);
    };
    render() {
        return (
            <div>
                <div className={css.container} onDrop={this.onDrop.bind(this)}>
                    <p className={css.tuozhuai} draggable="true"  onDragStart={() => this.dragStart(this)} onDrag={this.ondrag.bind(this)} id="dragme">拖拽我</p>
                </div>
                <div className={css.container} onDrop={this.onDrop.bind(this)}>
                    <p draggable="true" onDrag={this.ondrag.bind(this)}></p>
                </div>
                <div style={{clear:"both"}}></div>
                <div>{this.state.show? "您正在拖拽":""}</div>
            </div>
        )
    }
} 