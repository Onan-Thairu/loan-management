import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


function Login({ setCurrentUser }) {
  const [ username, setUsername ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ errors, setErrors ] = useState([])

  let navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    fetch(`/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password })
    })
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          setCurrentUser(user)
          console.log(user)
          navigate("/customer")
        })
      } else {
        res.json()
        .then((errorData) => {
          setErrors(errorData.errors)
          console.log(errors)
          e.target.reset()
        })
      }
    })
  }
  return (
    <Container>
      <Form onSubmit={ handleLogin } >
        <Title>Login</Title>
        <Input type="username" placeholder="Username" autoComplete='on' required onChange={ (e) => setUsername(e.target.value) } />
        <Input type="password" placeholder="Password" autoComplete='on' required onChange={ (e) => setPassword(e.target.value) } />
        <Button type="submit" >Login</Button>
        <br />
        <P>Don't have an account? <Link to={"/register"} id="register" >Register</Link></P>
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
  align-items: center;
  justify-content: center;
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
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: bold;
  background-color: #fff;
  color: #004c3f;
`;

const Input = styled.input`
  border: 1px solid #004c3f;
  border-radius: 3px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  width: 100%;
  outline: none;
`;

const Button = styled.button`
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

const P = styled.p`
 background-color: #fff;
`

export default Login;