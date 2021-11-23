import axios from "axios";
import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import Employee from "./employee";
import {useParams} from "react-router-dom";

function EditEmployee(){
    const params = useParams();
    const [employee, setEmployee] = useState({});

    useEffect(() => {
        axios.get("https://localhost:44341/api/Employee/"+params.id).then(
            result => {
                setEmployee(result.data)
        })
    }, [])

    return (
        <div>
            <h1>Update Employee Data</h1>

            <p>
                <label>Employee ID : </label><input type="text" defaultValue={employee.id}></input>
            </p>
            <p>
                <label>Employee Name : </label><input type="text" defaultValue={employee.name}></input>
            </p>
            <p>
                <label>Employee Location : </label><input type="text" defaultValue={employee.location}></input>
            </p>
            <p>
                <label>Employee Salary : </label><input type="text" defaultValue={employee.salary}></input>
            </p>
            <p>
                <button>Update</button>
            </p>
        </div>
    )
}

export default EditEmployee