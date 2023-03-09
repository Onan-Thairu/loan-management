import styled from 'styled-components';
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Register() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  // const [errors, setErrors] = useState([])

  let navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault()

    console.log(username, password);
    fetch(`/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password, user_role: 0 })
    })
    .then((res) => {
      if (res.ok) {
        navigate('/login')
      } else {
        res.json().then((errorData) => {
          console.log(errorData.errors)
        })
      }
    })
  }

  return (
    <Container>
      <Form onSubmit={handleRegister}>
        <Title>Create an Account</Title>
        <Input type="username" placeholder="Username" required onChange={(e) => setUsername(e.target.value)} />
        <Input type="password" placeholder="Password" autoComplete='on' required onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit" onClick={handleRegister}>Register</Button>
        <br />
        <P>Already have an account? <Link to={"/login"} id="login" >Login</Link></P>
      </Form>
      {/* {
        errors.length > 0 && (
          <ul style={{ color: "red" }}>
            {
              errors.map((error) => (
                <li key={error}>{error}</li>
              ))
            }
          </ul>
        )
      } */}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
  width: 90vw;
`;

const Title = styled.h1`
  font-size: .8rem;
  margin-bottom: 2rem;
  font-weight: bold;
  background-color: #fff;
  color: #004c3f;
`;

const Input = styled.input`
  border: 1px solid #004c3f;
  border-radius: 3px;
  padding: 0.4rem;
  margin-bottom: 1rem;
  width: 100%;
  outline: none;
  font-size: .6rem;
`;

const Button = styled.button`
  padding: 6px 18px;
  font-size: .8rem;
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

const P = styled.p`
 background-color: #fff;
 font-size: .6rem;
 `

export default Register
