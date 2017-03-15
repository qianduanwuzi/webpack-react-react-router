import React, {Component, PropTypes} from 'react';
import css from "./daohang.css";
import daohang from "./daohang.js";
export default class DaohangView extends Component {
       constructor(props) {
            super(props);
            this.state = {
            }
        };
        componentDidMount(){
            console.log('daogangpageiscoming')
            // daohang.getAmapLocation('江苏省苏州市月亮湾路10号慧湖大厦');
            let dh = new daohang();
            console.log(dh);
            dh.init("container", {},'全国',500);
            // dh.initGeocoder('全国',500);
            // dh.geocoder('江苏省苏州市月亮湾路10号慧湖大厦');
            // dh.map.plugin(["AMap.ToolBar"], function() {
            //     dh.map.addControl(new AMap.ToolBar());
            // });

            // 江苏省苏州市月亮湾路10号慧湖大厦
        //    var map = new AMap.Map("container", {
        //         resizeEnable: true
        //     });
        //     AMap.service(["AMap.PlaceSearch"], function() {
        //         var placeSearch = new AMap.PlaceSearch({ //构造地点查询类
        //             pageSize: 5,
        //             pageIndex: 1,
        //             city: "010", //城市
        //             map: map,
        //             panel: "panel"
        //         });
        //         //关键字查询
        //         placeSearch.search('苏州大学');
        //     }); 
	    };

        componentWillMount() {
        };


        render() {
            return (
                <div>
                    this is daohang
                   <div id="container" className={css.container} style={{width:"800px",height:"300px",marginLeft:"300px",marginTop:"100px",height:"460px"}}></div>
                   <div id="tip">
                        
                        <span id="result"></span>
                  </div>

               </div>
            )
        }
}
// DaohangView.contextTypes = {
//   router: React.PropTypes.object.isRequired
// };