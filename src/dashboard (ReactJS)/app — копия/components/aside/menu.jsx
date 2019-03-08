import React, { Component, PropTypes } from 'react';

import { Link, IndexLink } from 'react-router-dom'

export default class Menu extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		
		const menuArrList = [
			{iconPath:'M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z', href: '/', title: 'dashboard'},
			{iconPath:'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z', href: '/customers', title: 'customers'},
			{iconPath: 'M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z', href: '/segments', title: 'segments'},
		];


		const menuList = menuArrList.map((item, i) =>
			<li className='aside__menu-item' key={i}>
				<Link to={item.href} className='aside__menu-link'>
					<svg focusable="false" width='24' height='24' viewBox="0 0 24 24" aria-hidden="false"><path d={item.iconPath}></path></svg>
					<span>{item.title}</span>
				</Link>
			</li>

		);
		
		return(
			<nav>
				<ul className='aside__menu-list'>
					{menuList}
				</ul>
			</nav>
		)
	
	}
}