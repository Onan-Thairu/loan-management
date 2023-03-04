import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Logout({setCurrentUser}) {
  let navigate = useNavigate()

  useEffect(() => {
    fetch(`/logout`, {
      method: "DELETE"
    })
    .then((res) => {
      setCurrentUser(null)
      navigate("/")
    })
  }, [])

  return (
    <div>You are being logged out...</div>
  )
}

export default Logout