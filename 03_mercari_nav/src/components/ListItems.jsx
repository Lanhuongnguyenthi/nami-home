import React from 'react'
import styled from 'styled-components'
import ListItem from './ListItem'

const ListSection = styled.section`
	width: 100%;
	padding: 20px;
	display: grid;
	grid-template-columns: repeat(4,01fr);
	background: red;
	gap: 10px;
	@media screen and (max-width: 950px) {
		ListSection {
		  display: grid;
		  grid-template-columns: repeat(3,1fr);
		} 
	}
`

const ListItems = () => {
  return (
	<ListSection>
		<ListItem imageId="1">1</ListItem>
		<ListItem imageId="10">1</ListItem>
		<ListItem imageId="11">1</ListItem>
		<ListItem imageId="21">1</ListItem>
		<ListItem imageId="31">1</ListItem>
		<ListItem imageId="41">1</ListItem>
		<ListItem imageId="51">1</ListItem>
		<ListItem imageId="61">1</ListItem>
		<ListItem imageId="71">1</ListItem>
	</ListSection>
  )
}


export default ListItems