import React from 'react'

const NewsItem=(props)=> {

  
  
    const{title, description,imageUrl, url,Author,date}=props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: '20rem'}}>
          <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}....</p>
              <p className="card-text text-success">By {Author?Author:"Unknow"} On {new Date(date).toGMTString()}</p>
              <a href={url} rel="noreferrer" target="_blank" className="btn btn-sm btn-danger">Read More</a>
            </div>
        </div>

      </div>
    )
  
}

export default NewsItem;


// class based component

// import React, { Component } from 'react'

// export default class NewsItem extends Component {

  
//   render() {
//     let {title, description,imageUrl, url,Author,date}=this.props;
//     return (
//       <div className='my-3'>
//         <div className="card" style={{width: '20rem'}}>
//           <img src={imageUrl} className="card-img-top" alt="..."/>
//             <div className="card-body">
//               <h5 className="card-title">{title}...</h5>
//               <p className="card-text">{description}....</p>
//               <p className="card-text text-success">By {Author?Author:"Unknow"} On {new Date(date).toGMTString()}</p>
//               <a href={url} rel="noreferrer" target="_blank" className="btn btn-sm btn-danger">Read More</a>
//             </div>
//         </div>

//       </div>
//     )
//   }
// }

