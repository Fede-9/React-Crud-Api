import React, { Fragment, useEffect, useState } from 'react'

// Componentes
import * as EmployeeServer from './EmployeeServer'
import {EmployeeItem} from './EmployeeItem'



export const EmployeeList = () => {

  const [employees, SetEmployees] = useState([])

  const listEmployees = async () => {
    try {
      const res = await EmployeeServer.listEmployees()
      const data = await res.json()
      SetEmployees(data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    listEmployees()

  }, [])

  return (

      <div className="container my-4">
        <div className="row ">
          {employees.map((employee) => (
            <div className='col-md-3 m-1' >
              <EmployeeItem key={employee.id} employee={employee} listEmployees={listEmployees}/>
            </div>
          ))}
        </div>
    </div>
  )
}

