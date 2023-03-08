import styled from "styled-components";
import { useEffect, useState } from "react";
// import Header from "../components/Header";
import { Link } from "react-router-dom";

function Disbursed() {
  const [disbursedLoans, setDisbursedLoans] = useState([]);

  useEffect(() => {
    fetch("/loan_disbursements")
      .then((res) => res.json())
      .then((data) => setDisbursedLoans(data));
  }, []);

  return (
    <>
    {/* <Header/> */}
    <Hero>
      <div>
        <h2>Disbursed Loans</h2>
      </div>
      <div>
        <NavLink to={"/customer"}>Back</NavLink>
      </div>
    </Hero>
    <Table>
      <thead>
        <tr>
          <TableHeader>Disbursement Date</TableHeader>
          <TableHeader>Disbursement Amount</TableHeader>
          <TableHeader>Interest Rate(%)</TableHeader>
          <TableHeader>Approved By</TableHeader>
          <TableHeader>Due Date</TableHeader>
        </tr>
      </thead>
      <tbody>
        {disbursedLoans.map((disbursedLoan) => (
          <TableRow key={disbursedLoan.id}>
            <TableData>{disbursedLoan.disbursement_date}</TableData>
            <TableData>{disbursedLoan.disbursement_amount}</TableData>
            <TableData>{disbursedLoan.loan.interest_rate}</TableData>
            <TableData>{disbursedLoan.loan.approved_by}</TableData>
            <TableData>{disbursedLoan.due_date}</TableData>
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
    font-size: .8rem;
  }
`

const NavLink = styled(Link)`
font-size: .6rem;
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
  width: 90vw;
  font-size: 0.5rem;
  line-height: .6rem;

  @media (min-width: 768px) {
    font-size: .6rem;
    width: 90vw;
    line-height: .1rem;
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
  padding: 0.6rem;
  text-align: left;
  color: #333;
  border-bottom: 1px solid #ddd;
`;

export default Disbursed;
