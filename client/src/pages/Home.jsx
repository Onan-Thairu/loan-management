import styled from "styled-components";
import { Link } from "react-router-dom"

function Home() {
  return (
    <PageContainer>
      <Title>Welcome to the Loan Management System</Title>
      <Link to="login"><Button>Get Started</Button></Link>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f2f2f2;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #004c3f;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 8px;
  background-color: #004c3f;
  color: #ffffff;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #007f6e;
  }
`;

export default Home