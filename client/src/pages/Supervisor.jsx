import styled from "styled-components";
import { useEffect, useState } from "react";
// import Header from "../components/Header";
import { Link } from "react-router-dom";

function SupervisorLoanApprovalPage() {
  const [loanApplications, setLoanApplications] = useState([]);

  useEffect(() => {
    fetch("/loan_applications/all")
      .then((res) => res.json())
      .then((data) => setLoanApplications(data));
  }, []);

  return (
    <>
    {/* <Header/> */}
    <Hero>
      <div>
        <h2>Loan Applications</h2>
      </div>
      <div>
        <NavLink to={"/customer"}>Back</NavLink>
      </div>
    </Hero>
    <Table>
      <thead>
        <tr>
          <TableHeader>Customer Name</TableHeader>
          <TableHeader>Customer Phone</TableHeader>
          <TableHeader>Business Name</TableHeader>
          <TableHeader>Business Address</TableHeader>
          <TableHeader>Business History</TableHeader>
          {/* <TableHeader>Credit Officer</TableHeader> */}
        </tr>
      </thead>
      <tbody>
        {loanApplications.map((loanApplication) => (
          <TableRow key={loanApplication.id}>
            <TableData>{loanApplication.customer_name}</TableData>
            <TableData>{loanApplication.customer_phone}</TableData>
            <TableData>{loanApplication.business_name}</TableData>
            <TableData>{loanApplication.business_address}</TableData>
            <TableData>{loanApplication.business_history}</TableData>
            <button>Approve</button>
            <button>Reject</button>
            {/* <TableData>{loanApplication.field_credit_officer_id}</TableData> */}
          </TableRow>
        ))}
      </tbody>
    </Table>
    </>
  );
}

const Hero = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .6rem 2rem;
  border-bottom: 1px solid #004c3f;
  
  h2{
    color: #004c3f;
  }
`

const NavLink = styled(Link)`
font-size: 1rem;
color: #004c3f;
margin-left: 2rem;
text-decoration: none;
cursor: pointer;

&:hover {
  text-decoration: underline;
}
`

const Table = styled.table`
  border-collapse: collapse;
  margin: 2rem auto;
  width: 100%;
  max-width: 800px;
  font-size: 0.8rem;
  line-height: 1.5;
  padding-left: .5rem;
  padding-right: .5rem;


  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const TableHeader = styled.th`
  padding: 0.75rem;
  text-align: left;
  background-color: #004c3f;
  color: #fff;
  border-bottom: 1px solid #ddd;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableData = styled.td`
  padding: 0.75rem;
  text-align: left;
  color: #333;
  border-bottom: 1px solid #ddd;
`;

export default SupervisorLoanApprovalPage;
