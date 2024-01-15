import React from 'react'
import {Content,Footer, Header } from './func-components'
import Calendar from './class-components'

// function App() {

// return (
// [<Header />,<Content /> ,<Footer /> ] //add header
// )
// }
// export default App

// import MsgBox2 from './func-props'
// function App() {
// return (
// <MsgBox2
// text= "การใช้ props"
// color= "red "
// bgColor="#ccc"
// fontSize="18pt"
// border="solid 1px black"
// />
// ) 
// }
// export default App


function App() {
    return (
    <>
    <Header/>
    <p><center><Calendar/></center></p>
    <Content/>
    <Footer/>
    </>
    )
    }
    export default App


// import logo from './logo.svg';
// import './App.css';
// import React from'react'
// import './style.css';
// function App() {

//     let r='<b>React</b>'
//     let rn='<b>React</b> Native'
//     const el=(
//       <div>
//         Create Web <br/>
//         with <span dangerouslySetInnerHTML={{__html:r}}/> & <span dangerouslySetInnerHTML={{__html:rn}}/>
//       </div>
//     )
// return el

// return(
//   <table border="1">
//   <tr>
//     <th>Product</th><th>Price</th>
//     </tr>
//   <tr>
//     <td>Book</td><td>320</td>
//   </tr>
//   <tr>
//     <td>Cake</td><td>70</td>
//   </tr>
//   </table>
// )

// const divStyle ={
//   color:'red',
//   backgroundColor:'powderblue',
//   fontSize:'larger',
//   padding:'3px',
// }
// return <div style={divStyle}>Hello React</div>
// return(
// <>
// <h2 style={{textAlign: "center"}}>Bitkub.com</h2>
// <div className='title' style={{textAlign: "center"}}>ยินดีต้องรับสู่นวัตกรรมเปลี่ยนโลก</div>
// </>
// )
// }

// export default App;
