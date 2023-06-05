import React from 'react'
import styled from 'styled-components'
import ListItem from './ListItem'

const ListSection = styled.section`
	width: 100%;
	padding: 20px;
	display: grid;
	grid-template-columns: repeat(5,1fr);
	background: red;
	gap: 10px;
	@media screen and (max-width: 950px) {
		grid-template-columns: repeat(3,1fr);
	}
`

const ListItems = () => {
  return (
	<ListSection>
		<ListItem imageId="1" price='5800'>1</ListItem>
		<ListItem imageId="10" price='5800'>1</ListItem>
		<ListItem imageId="20" price='5800'>1</ListItem>
		<ListItem imageId="30" price='5800'>1</ListItem>
		<ListItem imageId="40" price='5800'>1</ListItem>
		<ListItem imageId="50" price='5800'>1</ListItem>
		<ListItem imageId="60" price='5800'>1</ListItem>
		<ListItem imageId="70" price='5800'>1</ListItem>
		<ListItem imageId="80" price='5800'>1</ListItem>
	</ListSection>
  )
}


export default ListItems