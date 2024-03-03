import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import axios from "axios";
import { useEffect, useState } from "react";
const TableUser = () => {
    const [listUser, setListUser] = useState([]);
    const fetchAllUser = async () => {
        const res = await axios.get("http://localhost:8080/api/v1/user/read");
        const data = res && res.data ? res.data.DT : [];
        setListUser(data);
    };

    useEffect(() => {
        fetchAllUser();
    }, []);

    const handleDeleteUser = (user) => {};
    return (
        <>
            <Container>
                <hr />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUser &&
                            listUser.length > 0 &&
                            listUser.map((user, index) => (
                                <tr key={`user-${index + 1}`}>
                                    <td>{index + 1}</td>
                                    <td>{user.email}</td>
                                    <td>{user.username}</td>
                                    <td>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() =>
                                                handleDeleteUser(user)
                                            }
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </Table>
            </Container>
        </>
    );
};

export default TableUser;
