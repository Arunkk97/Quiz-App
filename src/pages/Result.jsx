import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'



function Result() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }

  const location = useLocation();
  const { data } = location.state
  console.log(data);
  return (
    <>
      <div style={{ height: '100vh' }} className='d-flex justify-content-center align-items-center bgclr'>
        <div style={{ height: '400px', width: '700px', backgroundColor: 'white' }} className=' d-flex flex-column justify-content-center align-items-center border shadow rounded'>
        <h1 style={{ fontFamily: "sans-serif" }}>YOU HAVE SCORED</h1>
        <h1 className='py-2' style={{ fontSize: "70px", fontWeight: "800", color: "red" }}>{data}</h1>
        <button onClick={handleClick} className='btn btn-success'>Back to Home</button>
        </div>
      </div>
    </>
  )
}

export default Result