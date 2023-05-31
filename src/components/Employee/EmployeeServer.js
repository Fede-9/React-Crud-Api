const API_URL = 'https://gustabin.com/varios/api-employees/';


export const listEmployees = async () => {
    return await fetch(API_URL)
}

export const getEmployee = async (employeeId) => {
    return await fetch(`${API_URL}${employeeId}`)
}

export const deleteEmployee = async (employeeId) => {
    return await fetch(`${API_URL}${employeeId}`, {
        method: 'DELETE',
    })
}

export const registerEmployee = async (newEmployee) => {
    return await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            name: String(newEmployee.name).trim(),
            email: String(newEmployee.email).trim(),
            phone: String(newEmployee.phone).trim(),
        }),
    })
}


export const updateEmployee = async (employeeId, updateEmployee) => {
    return await fetch(`${API_URL}${employeeId}`), {
        method: 'PUT',
        headers:  {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            name: String(updateEmployee.name).trim(),
            email: String(updateEmployee.email).trim(),
            phone: String(updateEmployee.phone).trim(),
        }),
    }     
}