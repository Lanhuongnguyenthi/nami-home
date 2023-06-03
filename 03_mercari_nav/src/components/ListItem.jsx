import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: lightgray;
  padding: 10px;
  img {
    width: 100%;
    border-radius: 2px;
    position: relative;
  }
  p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    color: black;
  }
  @media screen and (max-width: 950px) {
    p {
      display: none;
    }
  }
  div {
    width: 60px;
    height: 30px;
    background-color: blue;
    border-radius: 0 20px 20px 0;
    color: wwhite;
    font-size: 20px;
    position: absolute;
    // padding: 2px 8px 2px 4px;
    bottom: 20px;
    left: 20px;
  }
`

const ListItem = (props) => {
  console.log("props=", props.imageId)
  const url = `https://picsum.photos/id/${props.imageId}/300/300`

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const price = numbers.map((number) =>
  <li>{number}</li>
);
  return (
    <Container>
      <img src={url} alt="" />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, eius sit eaque doloribus accusamus possimus cumque? Pariatur odio ducimus illum veniam perspiciatis ipsum in quisquam neque. Reiciendis recusandae repellendus aliquam?</p>
      <div>
        <span>¥</span>
        <span>{price}</span>
      </div>
    </Container>
  )
 }

export default ListItem