import actionkeys from '../constantAction/constant.js';
const oneState= {}

function demoOneReducer(state = oneState,action){
    console.log(action)
    switch (action.type){
        case actionkeys.ONE :
            return Object.assign({},state,action)
        default :
            return state
    }
}

export default demoOneReducer