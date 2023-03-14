import styled from "styled-components";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Payment({ currentUser }) {
  const [receipt_amount, setReceiptAmount] = useState(0)
  
  // const [errors, setErrors] = useState([])

  let navigate = useNavigate()

  const handleLoanPayment = (e) => {
    e.preventDefault()

    fetch(`/receipts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        loan_application_id: 6, 
        receipt_date: new Date().toLocaleDateString(), 
        receipt_amount: parseInt(receipt_amount)
      })
    })
    .then((res) => {
      if (res.ok) {
        navigate('/customer')
      } else {
        res.json().then((errorData) => {
          console.log(errorData.errors)
        })
      }
    })
  }
  return (
    <>
    <Header></Header>
    <Container>
      <Form>
        <Title>Make Payment</Title>
        <FormField>
          <Label htmlFor="customer_name">Customer Name</Label>
          <Input type="text" id="customer_name" name="customer_name" />
        </FormField>
        <FormField>
          <Label htmlFor="receipt_amount">Amount</Label>
          <Input type="text" id="receipt_amount" name="receipt_amount" onChange={(e) => setReceiptAmount(e.target.value)} />
        </FormField>

        <FormButton type="submit" onClick={ handleLoanPayment } >Submit</FormButton>
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
  margin-top: 4rem;
  margin-bottom: 2rem;
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
  width: 80vw;
`;

const Title = styled.h1`
  font-size: 1rem;
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
  margin-bottom: .8rem;
  background-color: #fff;
`;

const Label = styled.label`
  font-size: .6rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  background-color: #fff;
`;

const Input = styled.input`
  padding: 0.4rem;
  border-radius: 5px;
  border: none;
  width: 100%;
  font-size: .6rem;
  background-color: #DCDCDC;
  outline: none;
`;

const TextArea = styled.textarea`
  padding: 0.3rem;
  border-radius: 5px;
  border: none;
  width: 100%;
  font-size: .6rem;
  background-color: #DCDCDC;
  outline: none;
`;

const FormButton = styled.button`
  padding: 6px 18px;
  font-size: .8rem;
  font-weight: bold;
  border-radius: 6px;
  background-color: #004c3f;
  color: #ffffff;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: #007f6e;
  }
`;

export default Payment;