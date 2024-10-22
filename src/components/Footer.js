import React, { useState } from 'react';
import { MdOutlineMovieFilter } from "react-icons/md";
import {Link} from 'react-router-dom';

const Footer = () => {
	const [isHovering, setIsHovering] = useState(false);

	const handleMouseOver = () => {
		setIsHovering(true);
	};
	const handleMouseOut = () => {
		setIsHovering(false);
	};

	return (
		<div className='footer'>
			<div className="innerFooter">
				<div className="f-logo">
					<Link to='/' className={isHovering ? "Color" : ""} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
						<MdOutlineMovieFilter />
					</Link>
				</div>
				<div className="copy">
					<p className={isHovering ? "addColor" : ""} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
						서울특별시 성동구 왕십리로 50, 6층 (성수동1가, 메가박스 스퀘어) ARS 1544-0070 대표이메일 m.dreamcenter@partner.megabox.co.kr<br />
						대표자명 홍정인 · 개인정보보호책임자 강병철 · 사업자등록번호 211-86-59478 · 통신판매업신고번호 2023-서울성동-0177<br />
						COPYRIGHT © MegaboxJoongAng, Inc. All rights reserved<br />
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;