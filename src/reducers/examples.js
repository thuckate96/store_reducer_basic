// import {redux} from "redux"
var redux = require("redux")
// var defaultState = {
//   mang: ["Android", "IOS", "NodeJs"],
//   isAdding: false
// }
// //action la mot chi thi, state chua du lieu ma chi thi muon thay doi
// var reducer = (state = defaultState, action) => {
//   switch (action.type) {
//     case 'TOGGLE_IS_ADDING':
//       return {...state, isAdding: !state.isAdding}
//       //tao chi thi them mot item
//     case "ADD_ITEM":
//       return {...state,mang: [...state.mang, action.item]}
//     case "REMOVE_ITEM":
//     //filter: return cac phan tu thoa man dieu kien cua mang
//     //true: thoa man dieu kien duoc dua vao mang tra ve
//     //false: Khong thoa man dieu kien, loai bo ra khoi mang
//       return {...state, mang: state.mang.filter((e, i) => i != action.index)}
//     default:
//     return state;
//   }
// }

//chia tach reducer thanh nhieu file
//Tai sao phai lam the ? vi de quan ly cac state re hon
//Vi du co state {mang: [], toggle_is_adding} thi neu state nhieu len thi quan ly no rat kho
//vi vay tach ra thanh nhieu reducer de quan ly cac state
//tach .....................
var mangReducer = (state= ["Android", "IOS", "NodeJs"], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.item]
      case "REMOVE_ITEM":
      //filter: return cac phan tu thoa man dieu kien cua mang
      //true: thoa man dieu kien duoc dua vao mang tra ve
      //false: Khong thoa man dieu kien, loai bo ra khoi mang
        return state.filter((e, i) => i != action.index)
      default:
      return state;
  }
}
var isAddingReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_IS_ADDING':
      return !state
    default:
      return state
  }
}

//Nhu vay la ta co hai cai reducer de xu ly 2 cai state la mangReduce va isAddingReducer
//Goi cau lenh ket noi 2 reducer thanh mot reducer cua store
var reducer = redux.combineReducers({
  //bien mang se duoc dieu khien bang mangReducer
  mang: mangReducer,
  isAdding: isAddingReducer
})
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
))
//Can export store ra thanh nhieu de su dung store cho tat ca cac component trong react

//cu moi lan thay doi se hien thi ra gia tri
store.subscribe(()=>{
  var str = store.getState();
  document.getElementById('page_detail').innerHTML = JSON.stringify(str);
})
//thuc thi chi thi
store.dispatch({type: "TOGGLE_IS_ADDING"})
store.dispatch({type: "ADD_ITEM", item: "Ruby"})
store.dispatch({type: 'REMOVE_ITEM', index: 1})

module.exports = store
