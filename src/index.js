import { render } from "@testing-library/react";
import React from "react";
import reactDom from "react-dom";
import ReactDOM from "react-dom";
import './index.css';

// //---Practice Code 1---//
// const element = <h1 className="testClass">Welcome to Zarif's World.....</h1>;

// ReactDOM.render(element, document.getElementById("root"))

// const newElement = <h1 className="testClass">Welcome to the World of Zarif's Wife.....</h1>;

// ReactDOM.render(newElement, document.getElementById("app"))

// //---Practice Code 2---//
// const element = (
//   <div className="testClass">
//       <h1>Welcome to Zarif's World.....</h1>
//       <h1>Welcome to the World of Zarif's Wife.....</h1>
//   </div>
// )
// ReactDOM.render(element, document.getElementById("root"))

// //---Practice Code 3---//
// const element = React.createElement("h1",null, "Welcome to Zarif's Worlds.....");

// ReactDOM.render(element, document.getElementById("root"))

// //---Practice Code 4---//
// const element = 
//   React.createElement("div",{className: "testClass"}, 
//     React.createElement("h1",null,"Welcome to Zarif's World....."), 
//     React.createElement("h1",null,"Welcome to the World of Zarif's Wife....."));

// ReactDOM.render(element, document.getElementById("root"))


// //---Practice Code 5---//
// var  EmployeeInfo = (employee) => {
//     return <div className="testClass">
//       <h1>Employee Details..</h1>
//         <p>Employee ID : <b>{employee.Id}</b></p>

//         <p>Employee Name : <b>{employee.Name}</b></p>

//         <p>Employee Location : <b>{employee.Location}</b></p>

//         <p>Employee Salary : <b>{employee.Salary}</b></p>
//         <DepartmentInfo DeptName={employee.DeptName} DeptHead={employee.DeptHead}></DepartmentInfo>
//     </div>;
// }

// var DepartmentInfo = (dept) => {
//     return <div>
//       <p>Department Name : <b>{dept.DeptName}</b></p>
//       <p>Department Head : <b>{dept.DeptHead}</b></p>
//     </div>
// }

// const element = <EmployeeInfo Id="10299" Name="Saima Hoque" Location="Dhanmondi" Salary="55000" DeptName="Financial Services" DeptHead="Roni Kumar Saha"></EmployeeInfo>;

// ReactDOM.render(element, document.getElementById("root"));


// //---Practice Code 6---//
// class Employee extends React.Component{
//   // constructor(props){
//   //   super(props);
//   //   console.log(this.props);
//   // }
//     render(){
//       return <div>
//         <h1>Employee Details..</h1>
//         <p>Employee ID : <b>{this.props.Id}</b></p>

//         <p>Employee Name : <b>{this.props.Name}</b></p>

//         <p>Employee Location : <b>{this.props.Location}</b></p>

//         <p>Employee Salary : <b>{this.props.Salary}</b></p>
//         <Department DeptName={this.props.DeptName} DeptHead={this.props.DeptHead}></Department>
//       </div>
//     }
// }

// class Department extends React.Component{
//   render(){
//     return <div>
//       <h1>Department Details..</h1>
//       <p>Department Name : <b>{this.props.DeptName}</b></p>

//       <p>Department Head : <b>{this.props.DeptHead}</b></p>
//     </div>
//   }
// }

// const element = <Employee Id="1203" Name="Ramisa Islam" Location="Poribag" Salary="74000" DeptName="Managed Service" DeptHead="Moinul Hasan"></Employee>;

// ReactDOM.render(element, document.getElementById("root"))


// //---Practice Code 7---//
// class Employee extends React.Component{
//   state = {counter: 0};
//   addEmployee = () =>{
//    this.setState({ counter : this.state.counter +1})
//   }

//   render(){
//     return <div className="addEmployee">
//       <h2>Welcome to Employee Component..</h2>
//       <p>
//         <button onClick={this.addEmployee}>Add Employee</button>
//       </p>
//       <p>
//         Add Employee Button is Clicked : {this.state.counter} times.
//       </p>
//     </div>
//   }
// }

// class CountCharacters extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       message : ''
//     };
//   }

//   onMessageChange(text){
//     this.setState({message : 'Message has '+text.length+ ' number of characters.'})
//   }

//   render(){
//     return <div className="addEmployee">
//       <h2>Welcome to CountCharacters Component...</h2>
//       <label>Enter Message : </label><input type="text" onChange={e => this.onMessageChange(e.target.value)}></input>
//       <p>  
//         <label>{this.state.message}</label>
//       </p>
//     </div>
//   }
// }

// const element = <CountCharacters></CountCharacters>
// ReactDOM.render(element, document.getElementById("root"))


// //---Practice Code 8---//
// class Employee extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       updatedSalary : null
//     }
//   }

//   getUpdatedSalary=(salary)=>{
//     this.setState({updatedSalary : salary})
//   }

//   render(){
//     return <div className="addEmployee">
//       <h1>Employee Details</h1>
//       <p>
//         <label>Employee ID : <b>{this.props.Id}</b></label>
//       </p>
//       <p>
//         <label>Employee Name : <b>{this.props.Name}</b></label>
//       </p>
//       <p>
//         <label>Employee Location : <b>{this.props.Location}</b></label>
//       </p>
//       <p>
//         <label>Employee Salary : <b>{this.props.Salary}</b></label>
//       </p>
//       <p>
//         <label>Udpated Salary : <b>{this.state.updatedSalary}</b></label>
//       </p>
//       <Salary BasicSalary={this.props.BasicSalary} HRA={this.props.HRA} SpecAllowance={this.props.SpecAllowance} onSalaryChange={this.getUpdatedSalary}></Salary>
//     </div>
//   }
// }

// class Salary extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       basic: this.props.BasicSalary,
//       hra: this.props.HRA,
//       spa: this.props.SpecAllowance
//     }
//   }

//   updateSalary = () => {
//     let salary = parseInt(this.refs.basic.value) + parseInt(this.refs.hra.value) + parseInt(this.refs.spa.value);
//     this.props.onSalaryChange(salary);
//   }

//   render(){
//     return <div>
//       <h2>Salary Details</h2>
//       <p>
//         <label>Basic Salary : <input type="text" ref="basic" defaultValue={this.state.basic}></input></label>
//       </p>
//       <p>
//         <label>HRA : <input type="text" ref="hra" defaultValue={this.state.hra}></input></label>
//       </p>
//       <p>
//         <label>Special Allowance : <input type="text" ref="spa" defaultValue={this.state.spa}></input></label>
//       </p>
//       <p>
//         <button onClick={this.updateSalary}>Update Salary</button>
//       </p>
//     </div>
//   }
// }

// const element = <Employee Id="1132" Name="Faria Jaman" Location="Banani" Salary="80000" BasicSalary="40000" HRA="20000" SpecAllowance="20000"></Employee>;

// ReactDOM.render(element, document.getElementById("root"))


// //---Practice Code 9---//

// const employeeContext = React.createContext();

// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//         Id : 245,
//         Name : "Fahima Jaman",
//         Location : "Banani",
//         Salary : 85000
//     }
//   }

//   changeEmployeeData = () =>{
//     this.setState({Id : 140})
//   }

//   render(){
//     return <div className="addEmployee">
//       <h1>Welcome to App Compnent...</h1>
//       <p>
//         <label>Employee Id : </label><b>{this.state.Id}</b>
//       </p>
//       <employeeContext.Provider value={this.state}>
//         <Employee></Employee>
//       </employeeContext.Provider>
//       <p>
//         <button onClick={this.changeEmployeeData}>Update</button>
//       </p>
//     </div>
//   }
// }

// class Employee extends React.Component{
//   static contextType = employeeContext;
//   render(){
//     return <div>
//       <h1>Welcome to Employee Component...</h1>
//       <p>
//         <label>Employee ID : </label><b>{this.context.Id}</b>
//       </p>
//       <Salary></Salary>
//     </div>
//   }
// }

// class Salary extends React.Component{
//   static contextType =  employeeContext;
//   render(){
//     return <div>
//       <h1>Welcome to Salary Compnent...</h1>
//       <p>
//         <label>Employee Id : </label><b>{this.context.Id}</b>
//       </p>
//     </div>
//   }
// }

// const element = <App></App>

// ReactDOM.render(element, document.getElementById("root"))


// //---Practice Code 10---//
// const employeeContext = React.createContext({
//   data : '',
//   changeEmployeeData : () => {}
// });

// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       data : {
//         Id : 103,
//         Name : "Fahima Jaman",
//         Location : "Banani",
//         Salary : 120000
//       },
//       changeEmployeeData : this.updateEmployeeData
//     }
//   }

//   updateEmployeeData = () =>{
//     this.setState({data : {Id: 1132}})
//   }

//   render(){
//     return <div>
//       <h1>Welcome to App Component...</h1>
//       <p>
//         <label>Employee ID : </label><b>{this.state.data.Id}</b>
//       </p>
//       <employeeContext.Provider value={this.state}>
//         <Employee></Employee>
//       </employeeContext.Provider>
//     </div>
//   }
// }

// class Employee extends React.Component{
//   static contextType = employeeContext;
//   render(){
//     return <div>
//       <h1>Welcome to Employee Component...</h1>
//       <p>
//         <label>Employee ID : </label><b>{this.context.data.Id}</b>
//       </p>
//       <Salary></Salary>
//     </div>
//   }
// }

// class Salary extends React.Component{
//   static contextType = employeeContext;
//   render(){
//     return <div>
//       <h1>Welcome to Salary Component...</h1>
//       <p>
//         <label>Employee ID : </label><b>{this.context.data.Id}</b>
//       </p>
//       <p>
//         <button onClick={this.context.changeEmployeeData}>Update</button>
//       </p>
//     </div>
//   }
// }

// const element = <App></App>;

// ReactDOM.render(element, document.getElementById("root"));


// //---Practice Code 11---//
// const employees = [
//   {Id: 230, Name: "Amimul Ihasan", Location: "Panthapath", Salary: 50000},
//   {Id: 283, Name: "Faria Jaman", Location: "Banani", Salary: 45000},
//   {Id: 238, Name: "Ramisa Islam", Location: "Dhanmondi", Salary: 55000}
// ];

// function Employee(props){
//   return <div className="addEmployee">
//     <p>
//       <label>Employee ID: </label><b>{props.data.Id}</b>
//     </p>
//     <p>
//       <label>Employee Name: </label><b>{props.data.Name}</b>
//     </p>
//     <p>
//       <label>Employee Location: </label><b>{props.data.Location}</b>
//     </p>
//     <p>
//       <label>Employee Salary: </label><b>{props.data.Salary}</b>
//     </p>
//   </div>
// }

// function DisplayEmployees(props){
//   const  employeeList = props.empList;
//   const listElements = employeeList.map((emp) => 
//     <Employee key={emp.Id} data={emp}></Employee>
//   );

//   return (
//     <div>
//       {listElements}
//     </div>
//   )
// }

// const element = <DisplayEmployees empList={employees}></DisplayEmployees>;

// ReactDOM.render(element, document.getElementById("root"));


// //---Practice Code 12---//

