import React from "react";
import { Button } from "react-bootstrap";

function TableChild({ data }) {
  console.log(data);
  const {
    name,
    familyMembers,
    fatherName,
    cnic,
    dob,
    status,
    monthlyIncome,
    rationType,
  } = data;
  return (
    <tr>
      <th>#</th>
      <th>{name}</th>
      <th>{fatherName}</th>
      <th>{cnic}</th>
      <th>{dob}</th>
      <th>{familyMembers}</th>
      <th>{rationType}</th>
      <th>{monthlyIncome}</th>
      <td>
        <Button size="sm" variant="danger">
          Reject
        </Button>
      </td>
      <td>
        <Button size="sm" variant="success">
          Accept
        </Button>
      </td>
    </tr>
  );
}

export default TableChild;
