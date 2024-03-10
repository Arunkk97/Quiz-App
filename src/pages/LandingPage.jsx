import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function LandingPage() {
  const navigate=useNavigate()

  const handleNavigate=()=>{
    navigate('/home')
  }
  
  return (
    <>
      <div style={{ height: '100vh' }} className='d-flex justify-content-center align-items-center bgclr'>
        <div style={{ height: '500px', width: '700px',backgroundColor:'white' }} className='border shadow rounded'>
          <div className='d-flex justify-content-center'>
            <img className='w-50 ' src="https://play-lh.googleusercontent.com/uSToE4XBuIz5T3vhwBmhDxIbYsrpA9JYNmFAd7peQpS0U7AS-0L_sZ6F3nXNPkx8PESI" alt="" />
          </div>

          <h1 className='text-center fw-bolder py-2'>Quiz App</h1>

          <div className='d-flex justify-content-center'>
            <Button onClick={handleNavigate} className='rounded' variant="outline-success">Start Quiz</Button>{' '}
          </div>


        </div>
      </div>
    </>
  )
}

export default LandingPage