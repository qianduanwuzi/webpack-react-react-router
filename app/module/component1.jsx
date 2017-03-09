import React,{Component} from 'react';
import css from './components.css';
import i from '../image/img1.png';
import headImg from '../image/portrait-Case04.jpg';
import Params from './config.js';
import Component2 from './component2.jsx';
import InnerStyle from './innerStyle.jsx';
import Ondragevent from './ondragevent.jsx';
export default class Component1 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            params:Params,
            show:false,
            hasExperience: false
        }
    };
    componentDidMount(){
        $(this.refs.kuang).hide();
    };
    handleMouseOver(){
        $(this.refs.kuang).fadeIn(1000);
    };
    handleMouseOut(){
        this.setState({hasExperience:true})
        $(this.refs.kuang).fadeOut(1000);
    };
    changeShow(t){
        console.log(t);
            this.setState({hasExperience: t});
    };
    render() {
        var eachCase = this.state.params.map((one,index)=>{
            return(
                <div key={index}>
                    <img src={i} className={css.headImg} onMouseOver={this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}/>
                    <div ref="kuang">
                        <div className={css.cover}></div>
                        <div className={css.detail}>
                            <div className={css.inside}>
                                <p><label className={css.label}>姓名 :</label><span>{one.name}</span></p>
                                <p><label className={css.label}>年龄 :</label><span>{one.age}</span></p>
                                <p><label className={css.label}>地址 :</label><span>{one.address}</span></p>
                                <p><label className={css.label}>职业 :</label><span>{one.work}</span></p>
                                <p style={{display:"flex"}}><label className={css.label}>贞操 :</label><span>{one.xuanyan}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });
        return (
            <div>
                <div>
                    {eachCase}
                </div>
                <Component2 hasExperience={this.state.hasExperience} changeShow={this.changeShow.bind(this)}/>
                <Ondragevent />
                <InnerStyle />
            </div>
        )
    }
} 