import React from "react"
import {connect} from "react-redux"
class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {mang: []}
  }
  render(){
      return(
        <div>
          <h1>Vi Van Thuc </h1>
        </div>
      );
  }
}
//state trong function connect chinh la cac state cua store co trong Provider
//state nay dai dien cho store ... goi state.mang tuc la chi lay cai mang trong store thoi .. khong phai lay
//het gia tr
module.exports = connect(function(state){
  //return ra doi tuong chinh la props cua Home
  return {mang: state.mang}
})(Home);
