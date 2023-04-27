import React, {useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spiner from './Spiner';
import PropTypes from 'prop-types'


const News=(props)=>{

  
  

  const capitalTitle=(str)=>{ return str.charAt(0).toUpperCase()+str.slice(1);}


  const[articles,setArticles]=useState([]);
  const[loading,setLoading]=useState(false);
  const[page,setPage]=useState(1);
  const[disc,setDisc]=useState(1);
  const [totalResults, setTotalResults] = useState(0);

  
    document.title=`${capitalTitle(props.category)}-NewsMonkey`;
  

   const update=async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&pageSize=${props.pagesize}`;
    props.setProgress(20);
    setLoading(true);
    props.setProgress(30);
    let data = await fetch(url);
    let parseData = await data.json();
    props.setProgress(70);
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(parseData.loading);
    props.setProgress(100);
    
  }

  useEffect(()=>{
    update();
  },[])

  

  const next = async () => {

    if(page+1>Math.ceil( totalResults/props.pagesize))
    {
        
        setDisc(disc+1);
    }
   else
   {

    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${this.state.page + 1}&pageSize=${props.pagesize}`;
    // this.setState({loading:true})
    // let data = await fetch(url);
    // let parseData = await data.json();
    // this.setState({
    //   page: this.state.page + 1,
    //   articles: parseData.articles,
    //   loading:false,
    //   dis:1
    // })
    update();
    setPage(page+1);
   
    
   }
    
  }
  const previous = async () => {

    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${this.state.page - 1}&pageSize=${props.pagesize}`;
    // this.setState({loading:true})
    // let data = await fetch(url);
    // let parseData = await data.json();
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parseData.articles,
    //   loading:false,
    //   dis:1
    // })
   update();
   setPage(page-1);
    
  };



  
    return (
      <>
        <div className="container my-3">
          <h1 className="text-center " style={{marginTop:"90px"}}>NewsMonkey-Top</h1>
          {loading&& <Spiner/>}
          <div className="row">
            {!loading&& articles.map((element) => {
              return <div className="col-md-3" key={element.url}>
                <NewsItem title={element.title.slice(0, 30)} imageUrl={element.urlToImage ? element.urlToImage : "https://images.moneycontrol.com/static-mcnews/2022/12/markets-bloomberg-andy-770x433.jpg"} 
                description={element.description ? element.description.slice(0, 90) : ""} url={element.url} Author={element.author} date={element.publishedAt} />
              </div>
            })}
          </div>

        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" className="btn btn-danger" disabled={page <= 1} onClick={previous}>&larr;Previous</button>
          <button type="button" className="btn btn-danger" disabled={disc!==1} onClick={next}>Next &rarr;</button>
        </div>
      </>
    )
  }

News.defaultProps={
  country:'in',
  pagesize:8,
  // category:"sports"
  
  
}

News.propTypes={
  country:PropTypes.string,
  pagesize:PropTypes.number,
  // category:PropTypes.string
  
  
}
export default News





// class based component



// import React, { Component } from 'react'
// import NewsItem from './NewsItem'
// import Spiner from './Spiner';
// import PropTypes from 'prop-types'


// export default class News extends Component {

//   // articles=[
//   //     {
//   //       "source": {
//   //         "id": "the-times-of-india",
//   //         "name": "The Times of India"
//   //       },
//   //       "author": "Sahil Kukreja",
//   //       "title": "Ather 450X Pro Pack top five features explained: Worth the upgrade? - Indiatimes.com",
//   //       "description": "Electric Bike News: We have put together a list of the top five features that the Pro Pack brings along for the Ather 450X that make it worth considering.",
//   //       "url": "https://timesofindia.indiatimes.com/auto/electric-bikes/ather-450x-pro-pack-top-five-features-explained-worth-the-upgrade/articleshow/99531350.cms",
//   //       "urlToImage": "https://static.toiimg.com/thumb/msid-99532112,width-1070,height-580,imgsize-321524,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
//   //       "publishedAt": "2023-04-16T08:32:00Z",
//   //       "content": "Ather 450X becomes more affordable: New prices, features explainedBengaluru-based EV manufacturer Ather Energy has rejigged the 450X electric scooter line-up, also bringing its price down in the proc… [+44 chars]"
//   //     },
//   //     {
//   //       "source": {
//   //         "id": null,
//   //         "name": "Livemint"
//   //       },
//   //       "author": "Livemint",
//   //       "title": "Tata Steel CEO T V Narendran confirms ongoing talks with UK govt for financial package | Mint - Mint",
//   //       "description": "Narendran noted that there has been no conclusion to the request made for a financial package.",
//   //       "url": "https://www.livemint.com/news/india/tata-steel-ceo-t-v-narendran-confirms-ongoing-talks-with-uk-govt-for-financial-package-11681630466016.html",
//   //       "urlToImage": "https://www.livemint.com/lm-img/img/2023/04/16/600x338/2-0-293223860-TV_1681630994810_1681630995021_1681630995021.JPG",
//   //       "publishedAt": "2023-04-16T07:48:15Z",
//   //       "content": "Tata Steel's CEO, T V Narendran, stated that the company is continuing its pursuit of a financial package from the UK government, in response to a question about their stance on exiting the UK busine… [+1143 chars]"
//   //     },
//   //     {
//   //       "source": {
//   //         "id": null,
//   //         "name": "News18"
//   //       },
//   //       "author": "Bharat Upadhyay",
//   //       "title": "Amazon, Google CEOs 'Hint' At More Layoffs Amid Economic Meltdown - News18",
//   //       "description": "Google had in January laid off 12,000 employees in its first round of layoffs.",
//   //       "url": "https://www.news18.com/tech/amazon-google-ceos-hint-at-more-layoffs-amid-economic-meltdown-7561423.html",
//   //       "urlToImage": "https://images.news18.com/ibnlive/uploads/2023/04/untitled-design-12-168072163716x9.png",
//   //       "publishedAt": "2023-04-16T07:34:42Z",
//   //       "content": "As tech layoffs continue unabated in 2023, Amazon and Google CEOs have hinted at more layoffs as the companies continue to evaluate the business.\r\nIn a letter to company shareholders, Amazon CEO Andy… [+2070 chars]"
//   //     },
//   //     {
//   //         "source": {
//   //           "id": "the-times-of-india",
//   //           "name": "The Times of India"
//   //         },
//   //         "author": "ETMarkets.com",
//   //         "title": "Midcaps for long-term play; 5 stocks with high ROE & net profit margin - Economic Times",
//   //         "description": "Many investors, especially the ones sitting on cash were confused about what they should do in the market which is being bombarded with bad news. Should they – buy the dip or not, probably have entered the market in a few  weeks of rally which the market has …",
//   //         "url": "https://economictimes.indiatimes.com/markets/stocks/news/midcaps-for-long-term-play-5-stocks-with-high-roe-net-profit-margin/articleshow/99531682.cms",
//   //         "urlToImage": "https://img.etimg.com/thumb/msid-99531728,width-1070,height-580/photo.jpg",
//   //         "publishedAt": "2023-04-16T07:22:00Z",
//   //         "content": "SynopsisMany investors, especially the ones sitting on cash were confused about what they should do in the market which is being bombarded with bad news. Should they – buy the dip or not, probably ha… [+400 chars]"
//   //       },
//   //       {
//   //         "source": {
//   //           "id": null,
//   //           "name": "CNBCTV18"
//   //         },
//   //         "author": "Nigel D'Souza",
//   //         "title": "Nifty zooms 1,000 points in a month — 4 reasons that led the rally - CNBCTV18",
//   //         "description": "Valuations are back around 18.6x which is not as cheap as a year back and FII short positioning has also come down considerably as we have witnessed massive short covering.",
//   //         "url": "https://www.cnbctv18.com/market/nifty-zooms-1000-points-in-a-month-key-reasons-that-led-rally-what-lies-ahead-16411341.htm",
//   //         "urlToImage": "https://images.cnbctv18.com/wp-content/uploads/2023/04/NIFTY-NSE-1019x573.jpg",
//   //         "publishedAt": "2023-04-16T07:06:15Z",
//   //         "content": "Next Article\r\nHDFC Bank Q4 Results: Net profit up 20% on lower provisions, misses estimates"
//   //       },
//   //       {
//   //         "source": {
//   //           "id": null,
//   //           "name": "Livemint"
//   //         },
//   //         "author": "Livemint",
//   //         "title": "Vodafone Idea places ₹200 crore network order with Chinese company ZTE | Mint - Mint",
//   //         "description": "The government provides a list of trusted sources and products that can be used for installation in the country's telecom network.",
//   //         "url": "https://www.livemint.com/news/india/vodafone-idea-places-rs-200-crore-network-order-with-chinese-company-zte-11681627394042.html",
//   //         "urlToImage": "https://www.livemint.com/lm-img/img/2023/04/16/600x338/3-0-138376245-DSC-2502-0035-0_1679829433534_1681628602152_1681628602152.jpg",
//   //         "publishedAt": "2023-04-16T07:04:58Z",
//   //         "content": "Vodafone Idea has reportedly placed an order of approximately 200 crore with Chinese company ZTE for network gear, according to three sources familiar with the matter. The order pertains to broadband… [+2001 chars]"
//   //       },
//   //       {
//   //         "source": {
//   //           "id": null,
//   //           "name": "CarToq.com"
//   //         },
//   //         "author": "Ajeesh Kuttan",
//   //         "title": "This modified Hindustan Ambassador sedan can do 150 Kmph! [Video] - CarToq.com",
//   //         "description": "The Hindustan Ambassador is one of the most iconic cars in India’s automotive history. It was once considered a status symbol in society and has also served as the official vehicle for many politicians and government officials. The car was not loved for its p…",
//   //         "url": "https://www.cartoq.com/this-modified-hindustan-ambassador-sedan-can-do-150-kmph-video/",
//   //         "urlToImage": "https://www.cartoq.com/wp-content/uploads/2023/04/ambassador-modified-featured.jpg",
//   //         "publishedAt": "2023-04-16T07:04:36Z",
//   //         "content": "The Hindustan Ambassador is one of the most iconic cars in India’s automotive history. It was once considered a status symbol in society and has also served as the official vehicle for many politicia… [+3115 chars]"
//   //       },
//   //       {
//   //         "source": {
//   //           "id": "google-news",
//   //           "name": "Google News"
//   //         },
//   //         "author": "India Today",
//   //         "title": "Sam Altman reacts to Elon Musk and other tech experts' letter calling for a pause on AI development - India Today",
//   //         "description":"The Hindustan Ambassador is one of the most iconic cars in India’s automotive history. It was once considered a status symbol in society and has also served as the official vehicle for many politicians and government officials. The car was not loved for its p…",
//   //         "url": "https://news.google.com/rss/articles/CBMipQFodHRwczovL3d3dy5pbmRpYXRvZGF5LmluL3RlY2hub2xvZ3kvbmV3cy9zdG9yeS9zYW0tYWx0bWFuLXJlYWN0cy10by1lbG9uLW11c2stYW5kLW90aGVyLXRlY2gtZXhwZXJ0cy1sZXR0ZXItY2FsbGluZy1mb3ItYS1wYXVzZS1vbi1haS1kZXZlbG9wbWVudC0yMzYwNjc0LTIwMjMtMDQtMTbSAakBaHR0cHM6Ly93d3cuaW5kaWF0b2RheS5pbi9hbXAvdGVjaG5vbG9neS9uZXdzL3N0b3J5L3NhbS1hbHRtYW4tcmVhY3RzLXRvLWVsb24tbXVzay1hbmQtb3RoZXItdGVjaC1leHBlcnRzLWxldHRlci1jYWxsaW5nLWZvci1hLXBhdXNlLW9uLWFpLWRldmVsb3BtZW50LTIzNjA2NzQtMjAyMy0wNC0xNg?oc=5",
//   //         "urlToImage": "https://www.cartoq.com/wp-content/uploads/2023/04/ambassador-modified-featured.jpg",
//   //         "publishedAt": "2023-04-16T06:17:29Z",
//   //         "content": null
//   //       },
//   //       {
//   //         "source": {
//   //           "id": null,
//   //           "name": "CarToq.com"
//   //         },
//   //         "author": "Utkarsh Deshmukh",
//   //         "title": "Just-launched all new 2023 Hyundai Verna compared with the Skoda Slavia sedan [Video] - CarToq.com",
//   //         "description": "After a period of quietness, the mid-size sedan segment in India has once again started to make some noise in the Indian car market, thanks to the launch of the all-new Hyundai Verna. This newest sedan in the segment has been launched by the South Korean auto…",
//   //         "url": "https://www.cartoq.com/just-launched-all-new-2023-hyundai-verna-compared-with-the-skoda-slavia-sedan-video/",
//   //         "urlToImage": "https://www.cartoq.com/wp-content/uploads/2023/04/Skoda-Slavia-Vs-Hyundai-Verna.jpg",
//   //         "publishedAt": "2023-04-16T05:57:36Z",
//   //         "content": "After a period of quietness, the mid-size sedan segment in India has once again started to make some noise in the Indian car market, thanks to the launch of the all-new Hyundai Verna. This newest sed… [+3650 chars]"
//   //       }
//   //       ,
//   //       {
//   //         "source": {
//   //           "id": null,
//   //           "name": "CarToq.com"
//   //         },
//   //         "author": "Ajeesh Kuttan",
//   //         "title": "This modified Hindustan Ambassador sedan can do 150 Kmph! [Video] - CarToq.com",
//   //         "description": "The Hindustan Ambassador is one of the most iconic cars in India’s automotive history. It was once considered a status symbol in society and has also served as the official vehicle for many politicians and government officials. The car was not loved for its p…",
//   //         "url": "https://www.cartoq.com/this-modified-hindustan-ambassador-sedan-can-do-150-kmph-video/",
//   //         "urlToImage": "https://www.cartoq.com/wp-content/uploads/2023/04/ambassador-modified-featured.jpg",
//   //         "publishedAt": "2023-04-16T07:04:36Z",
//   //         "content": "The Hindustan Ambassador is one of the most iconic cars in India’s automotive history. It was once considered a status symbol in society and has also served as the official vehicle for many politicia… [+3115 chars]"
//   //       },
//   //       {
//   //         "source": {
//   //           "id": "google-news",
//   //           "name": "Google News"
//   //         },
//   //         "author": "India Today",
//   //         "title": "Sam Altman reacts to Elon Musk and other tech experts' letter calling for a pause on AI development - India Today",
//   //         "description":"The Hindustan Ambassador is one of the most iconic cars in India’s automotive history. It was once considered a status symbol in society and has also served as the official vehicle for many politicians and government officials. The car was not loved for its p…",
//   //         "url": "https://news.google.com/rss/articles/CBMipQFodHRwczovL3d3dy5pbmRpYXRvZGF5LmluL3RlY2hub2xvZ3kvbmV3cy9zdG9yeS9zYW0tYWx0bWFuLXJlYWN0cy10by1lbG9uLW11c2stYW5kLW90aGVyLXRlY2gtZXhwZXJ0cy1sZXR0ZXItY2FsbGluZy1mb3ItYS1wYXVzZS1vbi1haS1kZXZlbG9wbWVudC0yMzYwNjc0LTIwMjMtMDQtMTbSAakBaHR0cHM6Ly93d3cuaW5kaWF0b2RheS5pbi9hbXAvdGVjaG5vbG9neS9uZXdzL3N0b3J5L3NhbS1hbHRtYW4tcmVhY3RzLXRvLWVsb24tbXVzay1hbmQtb3RoZXItdGVjaC1leHBlcnRzLWxldHRlci1jYWxsaW5nLWZvci1hLXBhdXNlLW9uLWFpLWRldmVsb3BtZW50LTIzNjA2NzQtMjAyMy0wNC0xNg?oc=5",
//   //         "urlToImage": "https://www.cartoq.com/wp-content/uploads/2023/04/ambassador-modified-featured.jpg",
//   //         "publishedAt": "2023-04-16T06:17:29Z",
//   //         "content": null
//   //       },
//   //       {
//   //         "source": {
//   //           "id": null,
//   //           "name": "CarToq.com"
//   //         },
//   //         "author": "Utkarsh Deshmukh",
//   //         "title": "Just-launched all new 2023 Hyundai Verna compared with the Skoda Slavia sedan [Video] - CarToq.com",
//   //         "description": "After a period of quietness, the mid-size sedan segment in India has once again started to make some noise in the Indian car market, thanks to the launch of the all-new Hyundai Verna. This newest sedan in the segment has been launched by the South Korean auto…",
//   //         "url": "https://www.cartoq.com/just-launched-all-new-2023-hyundai-verna-compared-with-the-skoda-slavia-sedan-video/",
//   //         "urlToImage": "https://www.cartoq.com/wp-content/uploads/2023/04/Skoda-Slavia-Vs-Hyundai-Verna.jpg",
//   //         "publishedAt": "2023-04-16T05:57:36Z",
//   //         "content": "After a period of quietness, the mid-size sedan segment in India has once again started to make some noise in the Indian car market, thanks to the launch of the all-new Hyundai Verna. This newest sed… [+3650 chars]"
//   //       }
//   // ]

//   static defaultProps={
//     country:'in',
//     pagesize:8,
//     // category:"sports"
    
    
//   }

//   static propTypes={
//     country:PropTypes.string,
//     pagesize:PropTypes.number,
//     // category:PropTypes.string
    
    
//   }

//   capitalTitle=(str)=>{
//     return str.charAt(0).toUpperCase()+str.slice(1);
//   }

//   constructor(props) {

//     super(props);
//     this.state = {
//       articles: [],
//       loading: false,
//       page: 1,
//       dis:1

//     }
//     document.title=`${this.capitalTitle(props.category)}-NewsMonkey`;
//   }

//    async update(){
//     props.setProgress(10);
//     props.setProgress(20);
//     // 66052457dc1542a7bbf0f1033758dd1b
//     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&pageSize=${props.pagesize}`;
//     this.setState({loading:true})
//     props.setProgress(30);
//     let data = await fetch(url);
//     let parseData = await data.json();
//     props.setProgress(70); 
//     this.setState({
//       articles: parseData.articles,
//       totalResults:parseData.totalResults,
//       loading:false
//     }) 
//     props.setProgress(100);
    
//   }

//   async componentDidMount() {
//     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&pageSize=${props.pagesize}`;
//     // this.setState({loading:true})
//     // let data = await fetch(url);
//     // let parseData = await data.json();
//     // this.setState({
//     //   articles: parseData.articles,
//     //   totalResults:parseData.totalResults,
//     //   loading:false
//     // }) 

//     this.update();
    
//   }

//   next = async () => {

//     if(this.state.page+1>Math.ceil(this.state.totalResults/props.pagesize))
//     {
//         this.setState({
//           dis:this.state.dis+1
//         })
//     }
//    else
//    {

//     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${this.state.page + 1}&pageSize=${props.pagesize}`;
//     // this.setState({loading:true})
//     // let data = await fetch(url);
//     // let parseData = await data.json();
//     // this.setState({
//     //   page: this.state.page + 1,
//     //   articles: parseData.articles,
//     //   loading:false,
//     //   dis:1
//     // })
//     this.update();
//     this.setState({
//       page:this.state.page+1
//     })
   
    
//    }
    
//   }
//   previous = async () => {

//     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${this.state.page - 1}&pageSize=${props.pagesize}`;
//     // this.setState({loading:true})
//     // let data = await fetch(url);
//     // let parseData = await data.json();
//     // this.setState({
//     //   page: this.state.page - 1,
//     //   articles: parseData.articles,
//     //   loading:false,
//     //   dis:1
//     // })
//    this.update();
//     this.setState({
//       page:this.state.page-1
//     })
//   }



//   render() {
//     return (
//       <>
//         <div className="container my-3">
//           <h1 className="text-center " style={{marginTop:"90px"}}>NewsMonkey-Top</h1>
//           {this.state.loading&& <Spiner/>}
//           <div className="row">
//             {!this.state.loading&& this.state.articles.map((element) => {
//               return <div className="col-md-3" key={element.url}>
//                 <NewsItem title={element.title.slice(0, 30)} imageUrl={element.urlToImage ? element.urlToImage : "https://images.moneycontrol.com/static-mcnews/2022/12/markets-bloomberg-andy-770x433.jpg"} 
//                 description={element.description ? element.description.slice(0, 90) : ""} url={element.url} Author={element.author} date={element.publishedAt} />
//               </div>
//             })}
//           </div>

//         </div>
//         <div className="container d-flex justify-content-between">
//           <button type="button" className="btn btn-danger" disabled={this.state.page <= 1} onClick={this.previous}>&larr;Previous</button>
//           <button type="button" className="btn btn-danger" disabled={this.state.dis!==1} onClick={this.next}>Next &rarr;</button>
//         </div>
//       </>
//     )


//   }
// }

