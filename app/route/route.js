import IndexView from '../module/component1.jsx'
import App from '../module/app.jsx';
import DaoHangView from '../module/daohang/daohang.jsx';
import Ant1View from '../module/ant/ant1.jsx';
export default{
    path: '/',
    component: App,
    indexRoute: {
        component: IndexView
    },
    childRoutes: [
        {
            path: 'index',
            component: IndexView,
            name:'首页',
            onEnter: function(nx,re){
                document.title = this.name
            }
        },{
            path: 'daohang',
            component: DaoHangView,
            name:'导航',
            onEnter: function(nx,re){
                document.title = this.name
            }
        },{
            path: 'ant1',
            component: Ant1View,
            name:'ant1',
            onEnter: function(nx,re){
                document.title = this.name
            }
        }
    ]
}