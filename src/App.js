// Componentes
import { EmployeeList } from "./components/Employee/EmployeeList";
import { EmployeeForm } from "./components/Employee/EmployeeForm"
import { Navbar } from "./components/Navbar/Navbar";

// Rutas
import { Route, Routes } from "react-router-dom";



function App() {
  return (
    <>
      
      <Navbar />
      
      <Routes>
        
        <Route path='/' element={<EmployeeList />}/>
        <Route path='/employeeForm' element={<EmployeeForm />}/>

      </Routes>
      

    </>
  );
}

export default App;