import axios from "axios";
import React, { useEffect, useState } from "react";

function Employee() {
    const [employees,setEmployees] = useState([]);


    useEffect(() => {
        axios.get('https://localhost:44341/api/Employee')
          .then((response) => {
            setEmployees(response.data);
            console.log(response.data);
          })
      }, [])

    return <div>
        <h1>Employee List...</h1>
        <table className="employeeTable">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Salary</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((emp, index) => (
                 <tr key={index}>
                     <td>{emp.id}</td>
                     <td>{emp.name}</td>
                     <td>{emp.location}</td>
                     <td>{emp.salary}</td>
                     <td><a href={'/editEmployee/'+emp.id}>Edit</a></td>
                 </tr>
                ))}
            </tbody>
        </table>
    </div>
}

export default Employee