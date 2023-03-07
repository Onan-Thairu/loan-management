import styled from "styled-components";
import { useEffect, useState } from "react";
// import Header from "../components/Header";
import { Link } from "react-router-dom";
import { BsCheck } from "react-icons/bs"
import { RxCross2 } from "react-icons/rx"

function SupervisorLoanApprovalPage() {
  const [ loanApplications, setLoanApplications ] = useState([]);
  const [ displayMessage, setDisplayMessage ] = useState("")

  useEffect(() => {
    fetch("/loan_applications/pending")
      .then((res) => res.json())
      .then((data) => setLoanApplications(data));
  }, []);

  const handleApprove = (application => {
    const requestOptions = {
      method: "PUT",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ ...application, status: 1 })
    }
    fetch(`/loan_applications/${application.id}`, requestOptions)
      .then(response => response.json())
      .then(data => {
        let loan_apps = loanApplications.filter(loanApp => loanApp.id !== application.id )
        setLoanApplications(loan_apps)
        setDisplayMessage(data.message)

        setTimeout(() => {
          setDisplayMessage("")
        }, 2000);
      })
  })


  const handleRejected = (application => {
    const requestOptions = {
      method: "PUT",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ ...application, status: 2 })
    }
    fetch(`/loan_applications/${application.id}`, requestOptions)
      .then(response => response.json())
      .then(data => {
        let loan_apps = loanApplications.filter(loanApp => loanApp.id !== application.id )
        setLoanApplications(loan_apps)
        setDisplayMessage(data.message)

        setTimeout(() => {
          setDisplayMessage("")
        }, 2000);
      })
  })

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
    {
      displayMessage.length > 0 ? 
        <P>{displayMessage}</P> 
      : 
        null
    }
    <Table>
      <thead>
        <tr>
          <TableHeader>Customer Name</TableHeader>
          <TableHeader>Customer Phone</TableHeader>
          <TableHeader>Business Name</TableHeader>
          <TableHeader>Business Address</TableHeader>
          <TableHeader>Business History</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Interest</TableHeader>
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
            <TableData>{loanApplication.loan_amount}</TableData>
            <TableData>{loanApplication.interest_rate}</TableData>
            <BtnDiv>
              <BsCheck onClick={ () => handleApprove(loanApplication)} size={'1.6em'} color="#004c3f" cursor="pointer" />
              <RxCross2 onClick={ () => handleRejected(loanApplication)} size={'1.5em'} color="#ff1744" cursor="pointer" />
            </BtnDiv>
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
    font-size: 1rem;
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
  font-size: 0.6rem;
  line-height: .7rem;
  padding-left: .4rem;
  padding-right: .4rem;


  @media (min-width: 768px) {
    font-size: .6rem;
    width: 90vw;
    line-height: .8rem;
  }
`;

const P = styled.p`
position: fixed;
top: 0;
left: 50%;
transform: translate(-50%, 40%);
background-color: #dff0d8;
color: #3c763d;
border: 1px solid #d6e9c6;
padding: 10px;
border-radius: 5px;
font-size: 10px;
`

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

const BtnDiv = styled.div`
  display: flex;
  text-align: center;
  gap: .5rem;
  padding: 0.75rem;
`

const Button = styled.button`
  padding: 5px 9px;
  font-size: 7px;
  font-weight: bold;
  border-radius: 5px;
  background-color: #004c3f;
  color: #ffffff;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #007f6e;
  }

  @media (min-width: 768px) {
    font-size: .4rem;
    padding: 6px 10px;
    border-radius: 6px;
  }
`;

export default SupervisorLoanApprovalPage;
