import actionkeys from '../constantAction/constant.js';
// import Utils from '../common/utils.js';
// 临时性配置
// import seoConf from './seo.js';
// var url = "http://172.20.7.101:3001/";
// let url = '/';
// 服务端
// if (typeof (isBrowser) === 'undefined') {
//   url = 'http://localhost:3002/';
// } else {
  // 前端
//   url = '/';
// }
export function demoOne(params) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
    //   Utils.fetchGet(`${url}API/mall/news/newslist`, params).then((res) => {
    //     if (res.code === 200) {
    //       dispatch({ type: actionkeys.ONE, list: res.data.datas, counts: res.data.totalCount });
    //       resolve('ok');
    //     } else {
    //       reject('fail');
    //     }
    //   });
        dispatch({type: actionkeys.ONE,newcount:params.count})
    });

  };
}