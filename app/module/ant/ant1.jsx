import React,{Component} from 'react';
import { DatePicker,message } from 'antd';//.babelrc 配置了babel-plugin-import 按需加载当前css,style
import Util from '../../util/util.js';
import css from './ant1.css';
export default class Antd1View extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        }
    };
    componentDidMount(){
        //  <div style={{ width: 400 }}>
        //             <DatePicker onChange={value => this.handleChange(value)} />
        //             <div style={{ marginTop: 20 }}>当前日期：{date}</div>
        //             <div className={css.mycheck}>  
        //                 <input type="checkbox" name="check1" value="check1" id="check1" /><label for="check1"></label>
        //             </div>
        //         </div>
    };
    handleChange(date) {
        message.info('您选择的日期是: ' + Util.formatDate(new Date(date)));
        this.setState({ date });
    };
    render() {
        let date = Util.formatDate(new Date(this.state.date));
        console.log(date)
            return(
                <div style={{ width: 400 }}>
                    <DatePicker onChange={value => this.handleChange(value)} />
                    <div style={{ marginTop: 20 }}>当前日期：{date}</div>
                    <div className={css.mycheck}>  
                        <input type="checkbox" name="check1" value="check1" id="check1" />
                        <label for="check1"></label>
                    </div>
                </div>
            )
    }
} 