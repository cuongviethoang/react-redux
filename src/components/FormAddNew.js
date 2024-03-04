import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewUserRedux } from "../action/actions";
const FormAddNew = () => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const dispatch = useDispatch();
    const isCreating = useSelector((state) => state.user.isCreating);
    const handleCreateNewUser = () => {
        dispatch(createNewUserRedux(email, phone, password, username));
        setEmail("");
        setPhone("");
        setPassword("");
        setUsername("");
    };
    return (
        <>
            <Container>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Enter email"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            type="phone"
                            placeholder="Enter phone"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            type="text"
                            placeholder="Username"
                        />
                    </Form.Group>

                    <Button
                        variant="primary"
                        type="button"
                        onClick={handleCreateNewUser}
                        disabled={isCreating}
                    >
                        Create
                    </Button>
                </Form>
            </Container>
        </>
    );
};

export default FormAddNew;
