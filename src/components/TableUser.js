import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUser } from "../action/actions";
const TableUser = () => {
    const dispatch = useDispatch();
    const listUsers = useSelector((state) => state.user.listUsers);

    // const [listUser, setListUser] = useState([]);
    // const fetchAllUser = async () => {
    //     const res = await axios.get("http://localhost:8080/api/v1/user/read");
    //     const data = res && res.data ? res.data.DT : [];
    //     setListUser(data);
    // };

    useEffect(() => {
        // fetchAllUser();
        dispatch(fetchAllUser());
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
                        {listUsers &&
                            listUsers.length > 0 &&
                            listUsers.map((user, index) => (
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
