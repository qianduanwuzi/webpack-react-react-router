import IndexView from '../module/component1.jsx'
import App from '../module/app.jsx';
import DaoHangView from '../module/daohang/daohang.jsx';
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
        }
    ]
}