import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import firebase from "../../component/firebase/firebase";
function Logn() {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ email, password });
    firebase
      .firestore()
      .collection("users")
      .where("email", "==", email)
      .get()
      .then((snap) => {
        if (snap.empty) {
          return alert("No Email Found");
        }
        const currentUser = snap.docs[0].data();
        if (currentUser.role !== "admin") {
          return alert("You are not authorized to this web");
        }
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => {
            history.push("/admin");
          })
          .catch((err) => {
            if (err) {
              alert(err.message);
            }
          });
      });
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <h1>Admin Login</h1>
        {/* <Image
              source={item.image}
              style={{
                width: 50,
                height: 40,
                resizeMode: "contain",
              }}
            /> */}
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button size="md" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Logn;
