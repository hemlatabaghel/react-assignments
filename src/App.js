import Body from './components/body/Body';
import Carousel from './components/carousel/Carousel';
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar';
import React from 'react'
import Categories from './components/categories/Categories';

function App({name}) {
  // let name = "sachin tendulkar"
  return (
    <div>
      {/* <Header/> */}
      <Navbar/> 
      <br/>
      {/* <Categories/> */}
      {/* <Carousel/> */}
      <Body name={name}/>
      {/* <Footer/> */}
    </div>

  );
}

// export const  App = ({name,course}) => {
//   return (
//     <div>
//       <h1>Hello  {name} {course}</h1>
//       <button onClick = {() => clickHandler(name)}>Click</button>
//     </div>
    
      
//   )
//   function clickHandler(name) {
//     console.log("Clicked", name);
//   }
// }

// App.propType = {
//   name:propTypes.string,
//   course:propTypes.string
// }

// App.defaultProps = {
//   name: "Hemlata",
//   course:"JS"
// }

export default App;
