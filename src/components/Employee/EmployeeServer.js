const API_URL = 'https://gustabin.com/varios/api-employees/';


export const listEmployees = async () => {
    return await fetch(API_URL)
}

export const deleteEmployee = async (employeeId) => {
    return await fetch(`${API_URL}${employeeId}`, {
        method: 'DELETE',
    })
}