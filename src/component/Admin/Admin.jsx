import React, { useEffect, useState } from "react";
import { Container, Table, Navbar, Nav } from "react-bootstrap";
import TableChild from "../Table/Table";
import firebase from "../firebase/firebase";

function Admin() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getRequests = firebase
      .firestore()
      .collection("foodRequests")
      .get()
      .then((snap) => {
        let allData = [];
        snap.forEach((doc) => {
          allData.push(doc.data());
        });
        setData(allData);
      });
  }, []);
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand>
          {/* <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav> */}
        </Container>
      </Navbar>
      <br />

      <Container>
        <h1 style={{ textAlign: "center" }}>Welcome Admin</h1>
      </Container>
      <br />
      <Container>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Father Name</th>
              <th>CNIC</th>
              <th>Date Of Birth</th>
              <th>No Family Members</th>
              <th>Monthly Ration</th>
              <th>Monthly Income</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((single) => (
              <TableChild data={single} />
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Admin;
