import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import * as EmployeeServer from './EmployeeServer'

import Swal from 'sweetalert2'


export const EmployeeItem = ({ employee, listEmployees }) => {

  const navigate = useNavigate()

  const handleDelete = async (employeeId) => {
    const result = await Swal.fire({
      title: 'Delete record',
      text: 'Are you sure you want to delete this record?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#d33',
      reverseButtons: true,
    })

    if (result.isConfirmed) {
      await EmployeeServer.deleteEmployee(employeeId)
      await listEmployees()
      Swal.fire('Deleted!!', 'The record has been deleted.', 'success')
    }
  }

  return (
   
        <div className='row '>
        <div className='card card-body'>
          <div className='row '>
            <div className='card-content'>
              <h3 className='card-title'>
                {employee.name}
                <p className='card-text photo-container'>
                  <img src={employee.photo} alt="Employee" className='photo m-2 rounded-circle' />
                </p>
              </h3>
            </div>
          </div>
          <div className='row mb-4 '>
            <div className='card-content mb-4'>
              <p className='card-button'>
                <button 
                  className=''
                  onClick={() => navigate(`/updateEmployee/${employee.id}`)}>Update</button>
              </p>
            </div>
          </div>
          <p className='card-text'>
            Phone: <strong>{employee.phone}</strong>
          </p>
          <p className='card-text mb-4'>
            Email: <strong>{employee.email}</strong>
          </p>
          <Link
            to={`mailto:${employee.email}`}
            target='_blank'
            rel='noopener noreferer'
            className='btn btn-warning'
            >
              Send Email
          </Link>
          <button
            className='btn btn-danger my-2'
            onClick={() => employee.id && handleDelete(employee.id)}
          >
            Delete record
          </button>
        </div>
      </div>
  
   

  )
}

