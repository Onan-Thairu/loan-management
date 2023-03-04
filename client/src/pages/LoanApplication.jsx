import styled from "styled-components";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function LoanApplicationForm({ currentUser }) {
  const [customer_name, setCustomerName] = useState("")
  const [customer_phone, setCustomerPhone] = useState("")
  const [business_name, setBusinessName] = useState("")
  const [business_address, setBusinessAddress] = useState("")
  const [business_history, setBusinessHistory] = useState("")
  const [errors, setErrors] = useState([])

  let navigate = useNavigate()

  const handleLoanApplication = (e) => {
    e.preventDefault()

    fetch(`/loan_applications`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ customer_name, customer_phone, business_name, business_address, business_history, field_credit_officer_id: currentUser.id  })
    })
    .then((res) => {
      if (res.ok) {
        navigate('/customer')
      } else {
        res.json().then((errorData) => {
          setErrors(errorData.errors)
        })
      }
    })
  }
  return (
    <>
    <Header></Header>
    <Container>
      <Form>
        <Title>Loan Application Form</Title>
        <FormField>
          <Label htmlFor="customer_name">Customer Name</Label>
          <Input type="text" id="customer_name" name="customer_name" onChange={(e) => setCustomerName(e.target.value)} />
        </FormField>
        <FormField>
          <Label htmlFor="customer_phone">Customer Phone</Label>
          <Input type="tel" id="customer_phone" name="customer_phone" onChange={(e) => setCustomerPhone(e.target.value)} />
        </FormField>
        <FormField>
          <Label htmlFor="business_name">Business Name</Label>
          <Input type="text" id="business_name" name="business_name" onChange={(e) => setBusinessName(e.target.value)} />
        </FormField>
        <FormField>
          <Label htmlFor="business_address">Business Address</Label>
          <TextArea id="business_address" name="business_address" onChange={(e) => setBusinessAddress(e.target.value)} ></TextArea>
        </FormField>
        <FormField>
          <Label htmlFor="business_history">Business History</Label>
          <TextArea id="business_history" name="business_history" onChange={(e) => setBusinessHistory(e.target.value)} ></TextArea>
        </FormField>
        <FormButton type="submit" onClick={ handleLoanApplication } >Submit</FormButton>
      </Form>
    </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-top: 5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: bold;
  background-color: #fff;
  color: #004c3f;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 1.5rem;
  background-color: #fff;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  background-color: #fff;
`;

const Input = styled.input`
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
  width: 100%;
  font-size: 1rem;
  background-color: #DCDCDC;
  outline: none;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
  width: 100%;
  font-size: 1rem;
  background-color: #DCDCDC;
  outline: none;
`;

const FormButton = styled.button`
  padding: 12px 24px;
  font-size: 1.1rem;
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

export default LoanApplicationForm;