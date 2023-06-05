import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: lightgray;
  padding: 10px;
  position: relative;
  img {
    width: 100%;
    border-radius: 2px;
  }
  span {
    position: absolute;
    left: 10px;
    bottom: 50px;
    background: rgba(0,0,0,0.5);
    padding: 0 10px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    font-size: 2rem;
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
    span {
      bottom: 20px;
      font-size: 1.4rem;
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

  const num_price = Number(props.price)
  const local_price = num_price.toLocaleString()

  return (
    <Container>
      <img src={url} alt="" />
      <span>¥{local_price}</span>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, eius sit eaque doloribus accusamus possimus cumque? Pariatur odio ducimus illum veniam perspiciatis ipsum in quisquam neque. Reiciendis recusandae repellendus aliquam?</p>
    </Container>
  )
}

export default ListItem