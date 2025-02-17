import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  position: fixed;
  width: 100%;
  z-index: 100;
  top: 0;
  padding: 20px 0px;
`;

export const Logo = styled.img`
  margin-left: 1rem;
  cursor: pointer;
`;

export const Profile = styled.img`
  margin-right: 1rem;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
`;

export const Input = styled.input`
  background-color: #282828;
  border: none;
  color: white;
  padding: 10px;
  margin-left: 10px;
  border-radius: 20px;
  width: 100%;
  padding: 12px;
  font-size: 1rem;
`;
