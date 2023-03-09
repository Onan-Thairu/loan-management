import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const CustomerPage = ({ currentUser }) => {
  return (
    <>
      <Header></Header>
      <Container>
      <WelcomeMessage>Welcome back, { currentUser.username }!</WelcomeMessage>
      <Navigation>
        <RoleNavigation>
          <RoleLinks>
            
            {currentUser.user_role === "loan_applicant" ? <NavLink to="#">My Loans</NavLink> : null }
            {currentUser.user_role === "loan_applicant" ? <NavLink to="#">Make Payment</NavLink> : null }

            {currentUser.user_role === "field_credit_officer" ? <NavLink to="/credit-officer-loans">Loan Applications</NavLink> : null }
            {currentUser.user_role === "field_credit_officer" ? <NavLink to="/apply">Create Loan Application</NavLink> : null }

            {currentUser.user_role === "supervisor" ? <NavLink to="/supervisor">Approve/Reject Loans</NavLink> : null }

            {currentUser.user_role === "office_admin" ? <NavLink to="/disbursed_loans">Disbursed Loans</NavLink> : null }
            {currentUser.user_role === "office_admin" ? <NavLink to="/loan_disbursements">Disburse Approved Loans</NavLink> : null }
            {currentUser.user_role === "office_admin" ? <NavLink to="/admin-dashboard">Admin Dashboard</NavLink> : null }


          </RoleLinks>
        </RoleNavigation>
      </Navigation>
    </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const WelcomeMessage = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #004c3f;
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RoleNavigation = styled.div`
  margin-bottom: 2rem;
`;


const RoleLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > * {
    margin: 1rem 0;
    padding: 0.5rem 1rem;
    border: 1px solid #004c3f;
    border-radius: 3px;
    font-size: .8rem;
    text-align: center;
    width: 100%;
    max-width: 20rem;
    text-decoration: none;
    color: #004c3f;
    font-weight: bold;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #007f6e;
      color: #ffffff;
    }
  }
`;

const NavLink = styled(Link)`
  cursor: pointer;
`;

export default CustomerPage;
