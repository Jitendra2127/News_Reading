// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import NavBar from './Component/NavBar';
import News from './Component/News';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';



const App=()=>{
 const pagesize = 30;

const apikey=process.env.REACT_APP_NEWS_API
const[progress,setProgress]=useState(0);



  
  
    return (
      <div>
        <Router >
          <NavBar />
          <LoadingBar color='#f11946' height={3} progress={progress} />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress}    apikey={apikey} key="health" pagesize={pagesize} country="in" category="health" />}></Route >
            <Route exact path="/business" element={<News setProgress={setProgress}   apikey={apikey} key="business" pagesize={pagesize} country="in" category="business" />}></Route>
            <Route exact path="/entertainment" element={<News setProgress={setProgress}   apikey={apikey} key="entertainment" pagesize={pagesize} country="in" category="entertainment" />}></Route>
            <Route exact path="/general" element={<News setProgress={setProgress}   apikey={apikey} key="general" pagesize={pagesize} country="in" category="general" />}></Route>
            <Route exact path="/health" element={<News setProgress={setProgress}   apikey={apikey} key="health" pagesize={pagesize} country="in" category="health" />}></Route>
            <Route exact path="/science" element={<News setProgress={setProgress}   apikey={apikey} key="science" pagesize={pagesize} country="in" category="science" />}></Route >
            <Route exact path="/sports" element={<News setProgress={setProgress}   apikey={apikey} key="sports" pagesize={pagesize} country="in" category="sports" />}></Route>
            <Route exact path="/technology" element={<News setProgress={setProgress}   apikey={apikey} key="technology" pagesize={pagesize} country="in" category="technology" />}></Route>
          </Routes>


        </Router>
      </div>
    )
  
}

export default App;






// class based component 


// // import logo from './logo.svg';
// import './App.css';
// import React, { Component} from 'react'
// import NavBar from './Component/NavBar';
// import News from './Component/News';
// import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar';



// export default class App extends Component {
//   pagesize = 30;

//   apikey=process.env.REACT_APP_NEWS_API

//   state={
//     progress:0
//   }

//   Progress=(progress)=>{
//     setState({
//       progress:progress
//     })
//   }

  
//   render() {
//     return (
//       <div>
//         <Router >
//           <NavBar />
//           <LoadingBar color='#f11946' height={3} progress={state.progress} />
//           <Routes>
//             <Route exact path="/" element={<News setProgress={setProgress}    apikey={apikey} key="health" pagesize={pagesize} country="in" category="health" />}></Route >
//             <Route exact path="/business" element={<News setProgress={setProgress}   apikey={apikey} key="business" pagesize={pagesize} country="in" category="business" />}></Route>
//             <Route exact path="/entertainment" element={<News setProgress={setProgress}   apikey={apikey} key="entertainment" pagesize={pagesize} country="in" category="entertainment" />}></Route>
//             <Route exact path="/general" element={<News setProgress={setProgress}   apikey={apikey} key="general" pagesize={pagesize} country="in" category="general" />}></Route>
//             <Route exact path="/health" element={<News setProgress={setProgress}   apikey={apikey} key="health" pagesize={pagesize} country="in" category="health" />}></Route>
//             <Route exact path="/science" element={<News setProgress={setProgress}   apikey={apikey} key="science" pagesize={pagesize} country="in" category="science" />}></Route >
//             <Route exact path="/sports" element={<News setProgress={setProgress}   apikey={apikey} key="sports" pagesize={pagesize} country="in" category="sports" />}></Route>
//             <Route exact path="/technology" element={<News setProgress={setProgress}   apikey={apikey} key="technology" pagesize={pagesize} country="in" category="technology" />}></Route>
//           </Routes>


//         </Router>
//       </div>
//     )
//   }
// }




