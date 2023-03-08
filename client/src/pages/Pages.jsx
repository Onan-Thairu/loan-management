import { useState, useEffect } from "react"
import Home from "./Home"
import Login from "./Login"
import Register from "./Register"
import LoanApplicationForm from "./LoanApplication"
import CreditOfficerLoanApplications from "./CreditOfficerLoanApplications"
import CustomerPage from "./CustomerPage"
import SupervisorLoanApprovalPage from "./Supervisor"
import DisburseLoansPage from "./DisburseLoans"
import Logout from "./Logout"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function Pages() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    fetch("/me")
      .then((res) => {
        if (res.ok) {
          res.json().then((user) => setCurrentUser(user))
        }
      })
      console.log(currentUser)
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } ></Route>
        <Route path="/register" element={ <Register /> } ></Route>
        <Route path="/login" element={ <Login setCurrentUser={setCurrentUser} /> } ></Route>
        <Route path="/customer" element={ <CustomerPage currentUser={ currentUser } />}></Route>
        <Route path="/apply" element={ <LoanApplicationForm currentUser={ currentUser } />}></Route>
        <Route path="/credit-officer-loans" element={ <CreditOfficerLoanApplications currentUser={ currentUser } />}></Route>
        <Route path="/supervisor" element={ <SupervisorLoanApprovalPage currentUser={ currentUser } />}></Route>
        <Route path="/loan_disbursement" element={ <DisburseLoansPage currentUser={ currentUser } />}></Route>

        <Route path="/logout" element={ <Logout setCurrentUser={setCurrentUser} /> } ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Pages