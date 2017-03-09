import React, {Component, PropTypes} from 'react';
export default class AppView extends Component {
       constructor(props) {
            super(props);
            this.state = {
            }
        };
        componentDidMount(){
            // this.context.router.listen((route) => {

            // });
	    };

        componentWillMount() {
        };


        render() {
            return (
                <div>
                    <div style={{width:"100%",height:"50px",backgroundColor:"red",color:"white"}}>
                        this is app !!!公共头
                    </div>
                    <div>
                        {this.props.children}
                    </div>
                </div>
            )
        }
}
// AppView.contextTypes = {
//   router: React.PropTypes.object.isRequired
// };