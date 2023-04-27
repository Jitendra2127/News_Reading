import React from 'react'
import loading2 from './lo.gif'

const Spiner=()=> {
  
    return (
      <div className='text-center'>
        <img src={loading2} alt="loading" width="50px" />
      </div>
    )
  
}

export default Spiner;





// class based component

// import React, { Component } from 'react'
// import loading2 from './lo.gif'

// export default class Spiner extends Component {
//   render() {
//     return (
//       <div className='text-center'>
//         <img src={loading2} alt="loading" width="50px" />
//       </div>
//     )
//   }
// }
