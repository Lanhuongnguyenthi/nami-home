import React from 'react'
import logo from '../assets/mercari.svg'
import styled from 'styled-components'

const NavContainer = styled.nav`
	display: flex;
	justify-content: space-between;
	height: 64px;
	background: blue;
`
const LeftNav = styled.div`
	display: flex;
	height: 100%;
	background: green;
	padding: 10px 20px;
	align-items: center;
	img {
		height: 100%;
	}
	input {
		margin-left: 10px;
		height: 30px;
	}
`
const RightNav = styled.div`
	display: flex;
	height: 100%;
	background: pink;
	align-items: center;
	padding: 10px 20px;

	ul {
		display: flex;
		li {
			padding: 10px;
		}
		li:last-of-type {
			background: red;
			border-radius: 4px;
		}
	}
`

const Nav = () => {
  return (
	<NavContainer>
		<LeftNav>
			<img src={logo} alt=""/>
			<input type="text"></input>
		</LeftNav>
		<RightNav>
			<ul>
				<li><a href="">お知らせ</a></li>
				<li><a href="">ログイン</a></li>
				<li><a href="">会員登録</a></li>
				<li><a href="">出品</a></li>
			</ul>
		</RightNav>
	</NavContainer>
  )
}

export default Nav