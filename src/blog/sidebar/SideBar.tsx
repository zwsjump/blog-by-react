import React from "react";
import styled from "styled-components";

let SideNav = styled.div`
  height: 100%;
  width: 150px;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 10px;
/*   background-color: lightblue; */
  background:rgba(255,0,0,0.5);
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;


  @media screen and (max-height: 450px) {
    {padding-top: 15px;}
    a {font-size: 18px;}
  }

  width: ${props => props.show ? "150px" : "0"};
`;

let ItemA = styled.a`
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: black;
    display: block;
    transition: 0.3s;
    &:hover {
      color: #f1f1f1;
    }
`;

let CloseBtn = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 32px;
  margin-left: 50px;
  cursor:pointer;
`;

let OpenBtn = styled.div`
  position: fixed;
	font-size:24px;
  cursor:pointer;
  right: 16px;
  top: 18px;
  &:hover {
	  box-shadow: 5px 5px #aaa;
  }
  visibility: ${props => props.show ? "hidden" : ""};
  transition-delay:${props => props.show ? "0" : "0.5s"};
`;

function SideBar() {
  const [show, setShow] = React.useState(false);
  function handleClick(flag) {
    setShow(flag);
  }
  return (
    <div>
      <OpenBtn show={show} onClick={() => setShow(true)}>&#9776;</OpenBtn>
      <SideNav show={show}>
        <CloseBtn onClick={() => setShow(false)}>&times;</CloseBtn>
        <ItemA href="#">关于我</ItemA>
        <ItemA href="#">主页</ItemA>
        <ItemA href="#">Clients</ItemA>
        <ItemA href="#">Contact</ItemA>
      </SideNav>
    </div>
  );
}

export default SideBar;