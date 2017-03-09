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
                    this is app !!!
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