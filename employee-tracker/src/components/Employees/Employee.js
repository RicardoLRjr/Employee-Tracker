import React from "react";;

const Employee = (props) => {

    return (
        <div className="row">
        <div className="col">{props.id.value}</div>
      <div className="col">{props.name.first}{props.name.last}</div>
      <div className="col">{props.email}</div>
      <div className="col">{props.dob.age}</div>
            <div className="col">
            <img src = {props.picture.medium}
                alt = "Picture of employee"
                style = "style placeholder"
                ></img>
            </div>
        </div>
    );
};

export default Employee;