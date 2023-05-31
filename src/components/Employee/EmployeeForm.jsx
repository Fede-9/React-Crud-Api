import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import * as EmployeeServer from './EmployeeServer'



export const EmployeeForm = () => {
  
  const navigate = useNavigate()
  const params = useParams()

  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    phone: '',
  })

  const handleChange = (event) => {
    setEmployee({...employee, [event.target.name]: event.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let res
      if (!params.id) {
          let res = await EmployeeServer.registerEmployee(employee)
          const data = await res.json()
          if (data.message === 'Success') {
            setEmployee({})
          } 
      } else {
          let res = await EmployeeServer.updateEmployee(params.id, employee)
      }
      navigate('/')

    } catch (error) {
        console.log(error)
    }
  }

  const getEmployee = async (employeeId) => {
    try {
      const res = await EmployeeServer.getEmployee(employeeId)
      const data = await res.json()
      const {name, email, phone} = data
      setEmployee({name, email, phone})
      
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    if (params.id) {
        getEmployee(params.id)
    }
  }, [])


  return (
    <div className='col-md-3 mx-auto m-5'>
      <h2 className='mb-3 text-center'>EMPLOYEE</h2>
    
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label className='form-label'>Name</label>
            <input 
              type="text"
              className='form-control'
              name='name'
              minLength={2}
              maxLength={50}
              autoFocus
              required
              value={employee.name}
              onChange={handleChange} 
              />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Email</label>
            <input 
              type="email"
              className='form-control'
              name='email'
              required
              value={employee.email}
              onChange={handleChange} 
              />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Phone</label>
            <input 
              type="text"
              className='form-control'
              name='phone'
              required
              value={employee.phone}
              onChange={handleChange}
              />
          </div>
          <div className='d-grid gap-2'>
            { params.id ? (
                <button type='submit' className='btn btn-dark btn-block'>Update</button>
              ) : (
                <button type='submit' className='btn btn-danger btn-block'>Register</button>
              )
            }
          </div>
        </form>
    </div>
  )
}
