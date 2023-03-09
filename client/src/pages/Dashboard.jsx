import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";

function AdminDashboard() {
  const [totalUsers, setTotalUsers] = useState(0)
  const [totalLoansDisbursed, setTotalLoansDisbursed] = useState(0)
  const [totalLoanApplications, setTotalLoanApplications] = useState(0)

  useEffect(() => {
    fetch(`/users`)
      .then(res => res.json())
      .then(data => setTotalUsers(data))

    fetch(`/loan_disbursements`)
      .then(res => res.json())
      .then(data => setTotalLoansDisbursed(data))

    fetch(`/loan_applications/all`)
      .then(res => res.json())
      .then(data => {
        setTotalLoanApplications(parseInt(data.count))
      })
  })
  return (
    <>
    <Header></Header>
    <PageContainer>
      {/* <Title>Welcome to the Loan Management System</Title>
      <Link to="login">
        <Button>Get Started</Button>
      </Link> */}
      <CardContainer>
        <Card>
          <CardTitle>Total Number of Users</CardTitle>
          <CardContent>
            { totalUsers ? totalUsers.length : 0 }
          </CardContent>
        </Card>
        <Card>
          <CardTitle>Active Loans</CardTitle>
          <CardContent>
            { totalLoansDisbursed ? totalLoansDisbursed.length : 0 }
          </CardContent>
        </Card>
        <Card>
          <CardTitle>Total Loan Applications</CardTitle>
          <CardContent>
            { totalLoanApplications ? totalLoanApplications.length : 0 }
          </CardContent>
        </Card>
        {/* <Card>
          <CardTitle>Revenue</CardTitle>
          <CardContent>$1000</CardContent>
        </Card> */}
      </CardContainer>
    </PageContainer>
    </>
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

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  width: 300px;
  height: 200px;
  margin: 1rem;
  padding: 1rem;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  text-align: center;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #004c3f;
  background-color: #fff;
`;

const CardContent = styled.p`
  font-size: 2rem;
  color: #333333;
  font-weight: bold;
  background-color: #fff;

`;

export default AdminDashboard;
