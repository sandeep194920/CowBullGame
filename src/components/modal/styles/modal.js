import styled from "styled-components/macro";

export const Container = styled.div``;

// the black shade that falls when modal opens
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

export const Content = styled.div`
  /* width: 70%;
  height: 70%;
  background-color: #14274e;
  z-index: 1000;
  position: fixed;
  top: 10%;
  left: 15%;
  right: 20%;
  bottom: 20%;
  box-sizing: border-box;
  box-shadow: 1px 1px white;
  @media (max-width: 1100px) {
    overflow: scroll;
    width: 100%;
    height: 80%;
    top: 5%;
    left: 2%;
    right: 2%;
    bottom: 20%;
    box-shadow: 0px 0px transparent;
  } */
`;