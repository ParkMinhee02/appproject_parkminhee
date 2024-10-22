import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import QuickButton from '../components/QuickButton';

const Events = () => {

	/* const APIKEY = process.env.REACT_APP_API_KEY; */

   const [appMovie, setAppMovie] = useState([]);
   useEffect(()=>{
      axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=546c72b99cf64514c2c03c7ef473011b&language=ko-KR`).then(response => {
            setAppMovie(response.data.results)
            console.log(response.data.results)
	  });
   },[]);
   return (
      <>
      	<div className='eventsWrap'>
	         <h2>전체 이벤트</h2>
			 <h3>영화</h3>
			 <div className='eventListWrap'>
			 	{
					appMovie.slice(0, 3).map((item) => (
						<div className='appEvent' key={item.id}>
							<Link to={`/events/${item.id}`}>
								<div className="eventList">
									<div className='eventImg'><img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} /></div>
									<div className='eventText'>
										<div className="eventTitle">
											{item.title}
										</div>
										<div className="eventDate">
											{item.release_date}
										</div>
									</div>
								</div>
							</Link>
						</div>
					))
				 }
			 </div>
			 <h3>시사회 / 무대 인사</h3>
			 <div className='eventListWrap'>
			 	{
					appMovie.slice(3, 6).map((item) => (
						<div className='appEvent' key={item.id}>
							<Link to={`/events/${item.id}`}>
								<div className="eventList">
									<div className='eventImg'><img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} /></div>
									<div className='eventText'>
										<div className="eventTitle">
											{item.title}
										</div>
										<div className="eventDate">
											{item.release_date}
										</div>
									</div>
								</div>
							</Link>
						</div>
					))
				 }
			 </div>
			 <h3>HOT</h3>
			 <div className='eventListWrap'>
			 	{
					appMovie.slice(6, 9).map((item) => (
						<div className='appEvent' key={item.id}>
							<Link to={`/events/${item.id}`}>
								<div className="eventList">
									<div className='eventImg'><img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} /></div>
									<div className='eventText'>
										<div className="eventTitle">
											{item.title}
										</div>
										<div className="eventDate">
											{item.release_date}
										</div>
									</div>
								</div>
							</Link>
						</div>
					))
				 }
			 </div>
			 <br />
			 <img src={process.env.PUBLIC_URL+ '/banner01.jpg'} alt="eventBanner" className='bannerImg' />
	      </div>
		  <div className='bannerWrap'><img src={process.env.PUBLIC_URL+ '/banner02.png'} alt="bannerImg2" /></div>
		  <QuickButton />
      </>
   );
};

export default Events;