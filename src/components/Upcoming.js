import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { TiStar } from "react-icons/ti";
import { FaMedal } from "react-icons/fa";

const Upcoming = () => {

	/* const APIKEY=process.env.REACT_APP_API_KEY; */

	const [upcomingMovies, setUpcomingMovies] = useState([]);
	const [isLoading, setLoading] = useState(true);

	const getMovies = async () => {
		try {
			const response= await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=546c72b99cf64514c2c03c7ef473011b&language=ko-KR`);
			setUpcomingMovies(response.data.results);
			console.log(response.data);
			setLoading(false);
		} catch (error) {
			console.error('Error:', error);
			setLoading(false);
		}
	};

	useEffect(() => {
		getMovies();
	},[]);
	
	return (
		<div className='mainSlider'>
			<Swiper modules={[Navigation, Pagination, Autoplay]} className='sliders'
				spaceBetween={50}
				slidesPerView={1}
				loop={true}
				/* autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}} */
				pagination={{ clickable: true }}
				navigation={true}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
			>
			{
				isLoading? (<div>Loading...</div>) : (
					upcomingMovies.slice(0, 5).map((item) => (
						<SwiperSlide key={item.id}>
							<div className='list'>
								<div className='upMovie'>
									<div className="upBackImg">
										<img src={`http://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt={item.title} />
									</div>
									<div className='upInfoWrap'>
										<div className="upInfo">
										<img src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} />
										</div>
										<div className="upInfoText">
											<p className="upTitle">{item.title}</p>
											<p className='upOverview'>{item.overview}</p>
											<div>
												<p className='upVote'>
													<span><div className='upIcon'><TiStar /></div> {item.vote_average}</span>
													<span><div className='upIcon'><FaMedal /></div> {item.vote_count}</span>
												</p>
												<p className="upRelease">{item.release_date}</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
				)))
			}
			</Swiper>
		</div>
	);
};

export default Upcoming;