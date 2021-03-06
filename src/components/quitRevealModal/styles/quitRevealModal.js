import styled from "styled-components/macro";

export const Container = styled.div`
  background-color: #14274e;
  position: fixed;
  z-index: 1000;
  top: 25%;
  left: 25%;
  right: 25%;
  bottom: 25%;
  padding: 1%;
  box-sizing: border-box;
  box-shadow: 1px 1px white;
  @media (max-width: 1100px) {
    width: 80%;
    height: 60%;
    margin: auto;
    top: 20%;
    left: 2%;
    right: 2%;
  }
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: row;
  /* background: orange; */
`;

export const MainText = styled.h1`
  font-size: 1.8em;
  color: white;
  margin-top: 8%;
  margin-left: 10%;

  @media (max-width: 1100px) {
    font-size: 1em;
    margin-left: 25%;
    margin-top: 15%;
  }
  @media (max-width: 700px) {
    font-size: 0.9em;
    letter-spacing: 0.3px;
    line-height: 2em;
    margin-right: 1%;
    margin-left: 20%;
    margin-top: 10%;
  }
`;

export const SubText = styled.h3`
  font-size: 1.5em;
  color: #ffa62b;
  position: absolute;
  top: 35%;
  left: 45%;
  letter-spacing: 3px;
  @media (max-width: 700px) {
    top: 25%;
    left: 35%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 5%;

  @media (max-width: 700px) {
    align-items: center;
    margin-top: 15%;
  }
`;

export const Button = styled.button`
  width: 220px;
  padding: 8px;
  border-radius: 50px;
  background-color: #394867;
  color: #fcfffc;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1px;
  border: none;

  cursor: pointer;
  outline: none;

  margin-bottom: 6%;
  margin-left: 33%;
  margin-top: 4%;

  &:hover {
    background-color: #e6a347;
    font-weight: 700;
    font-size: 22px;
    letter-spacing: 0px;
    transition: background-color 0.3s;
  }
  @media (max-width: 700px) {
    width: 170px;
    margin: auto;
    margin-bottom: 10%;
    margin-top: 8%;
    font-size: 14px;
  }
`;
