import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from "./routes/Home";
import About from "./routes/About";
import Movies from "./routes/Movies";
import Users from "./routes/Users";
import User from './routes/User';
import Events from './routes/Events';
import Event from './routes/Event';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.scss'

function App() {
	/* const onSubmit = () => {
		alert('안녕')
	}; */
	return (
	<div className="App">
		{/* <input type="text" onKeyUp={(e) => {
			if(e.keyCode === 13){onSubmit()}; //Enter키 입력 시 버튼 누르는 것과 같은 효과
		}} />
		<button onClick={onSubmit}>Submit</button> */}

		<Navbar />

		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/movies' element={<Movies />} />
			<Route path='/about/:id' element={<About />} />
			<Route path='/events' element={<Events />} />
			<Route path='/events/:id' element={<Event />} />
			<Route path='/users' element={<Users />} />
			<Route path='/users/:id' element={<User />} />
		</Routes>
		<Footer />
	</div>
);
}

export default App;
