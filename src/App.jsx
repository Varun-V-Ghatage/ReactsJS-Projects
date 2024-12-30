// import React, { Component } from 'react'
// // import DATA1 from './components/DATA1'

// export default class App extends Component {

//   constructor(){
//     super()
//     this.state={
//       //name:"Varun",
//       //frnd:"SrushT" 
//       count:0,
//       bgcolor:document.body.style.backgroundColor=red
//      }
//     console.log(this.state)
//     console.log(this.state.count);
//   }
//   increment=()=>{
//     this.setState({count:this.state.count+1})
//     // this.state.bgcolor="blue";
//     // this.setState(bgcolor:document.body.style.backgroundColor=red);
//   }
//   decrement=()=>{
//     this.setState({count:this.state.count-1})
//     this.setState(bgcolor,"red");
//   }


  

//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.increment}  >Increment</button>
//         <button onClick={this.decrement}  >Decrement</button>
      
//       </div>
//     )
//   }
// }
// ==================================HOOKS
// import React from 'react'
// import { useState } from 'react'

// const App = () => {
// let [post,newpost]=useState("Admiral")
 
// let promotion1=()=>{
//   newpost("Vice-Admiral")
// }
// let promotion2=()=>{
//   newpost("Rear-Admiral")
// }

//   return (
//     <div><h1>{post}</h1>
//     <button onClick={promotion1}>Promo1</button><br />
//      <button onClick={promotion2}>Promo2</button></div>
//   )
// }

// export default App





import React from 'react'
import { useState } from 'react'

const App = () => {
let [Marine,newpost]=useState({
  name:"Admiral Akainu",
  post:"Vice-Admiral"
})
 
let promotion1=()=>{
  newpost({
    name:"Fleet-Admiral Akainu",
    post:"Fleet-Admiral"
  })
                    // newpost(Marine.{
   //didn't work    //   name:"Fleet-Admiral Akainu",
                    //   post:"Fleet-Admiral"
                    // })
                    // newpost(Marine{name="Sir Akainu"})
}
let promotion2=()=>{
  newpost({ 
    name:Marine.name,
    post:"Rear-Admiral"})
}

let promotion3=()=>{
  newpost({ 
    name:"Defence-Head",
    post:"Celestial Dragon"})
}

  return (
    <div>
      <h1>{Marine.name}</h1>
      <h1>{Marine.post}</h1>

    <button onClick={promotion1}>Promo1</button><br />
    <button onClick={promotion2}>Promo2</button><br />
    <button onClick={promotion3}>Promo3</button>
    </div>
  )
}

export default App