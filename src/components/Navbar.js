import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import { MdOutlineMovieFilter } from "react-icons/md";

const Navbar = () => {
	const activeStyle = {
		color: 'red',
		textShadow: '1px 1px 2px #fff'
	};
	return (
		<nav>
			<div className="logo">
					<Link to='/'>
						{/* <img src={process.env.PUBLIC_URL+'/logo.svg'} alt="logo" /> */}
						<MdOutlineMovieFilter />
					</Link>
				</div>
			<ul>
				<li><NavLink to='' style={({isActive})=>(isActive?activeStyle : undefined)}>Home</NavLink></li>
				<li><NavLink to='movies' style={({isActive})=>(isActive?activeStyle : undefined)}>Movies</NavLink></li>
				<li><NavLink to='events' style={({isActive})=>(isActive?activeStyle : undefined)}>Events</NavLink></li>
				<li><NavLink to='users' style={({isActive})=>(isActive?activeStyle : undefined)}>Users</NavLink></li>
				<li><NavLink to='about' style={({isActive})=>(isActive?activeStyle : undefined)}>About</NavLink></li>
			</ul>
		</nav>
	);
};

export default Navbar;