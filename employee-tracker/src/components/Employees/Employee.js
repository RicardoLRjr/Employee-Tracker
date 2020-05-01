import React from "react";;

const Employee = (props) => {

    return (
        <tr scope="row">
            <td>{props.id}</td>
      <td>{props.Fname}</td>
      <td>{props.Lname}</td>
      <td>{props.email}</td>
      <td>{props.age}</td>
    </tr>
    );
};

export default Employee;