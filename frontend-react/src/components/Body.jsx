import React from 'react'
import { Button } from 'react-bootstrap'

function Body() {
  return (
    <div bg="dark" className="d-flex justify-content-center">
        <Button className='btn-light'>Course</Button>
        <Button className='btn-light'>Lessons</Button>
    </div>
  )
}

export default Body