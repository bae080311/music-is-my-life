import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  background-color: #1db954;
  width: 100vw;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: white;
  font-size: 2rem;
  font-weight: 700;
  padding: 1rem;
`;

export const Expalin = styled.p`
  color: white;
  font-size: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  font-weight: 500;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Button = styled.button`
  margin-bottom: 1rem;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
`;
