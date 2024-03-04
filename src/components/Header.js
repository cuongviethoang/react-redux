import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";
const Header = () => {
    const listUsers = useSelector((state) => state.user.listUsers);
    return (
        <>
            <Navbar
                expand="lg"
                bg="dark"
                data-bs-theme="dark"
                className="bg-body-tertiary"
            >
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown
                                title={`${listUsers.length} Users`}
                                className="ml-3"
                                id="basic-nav-dropdown"
                            >
                                {listUsers &&
                                    listUsers.length > 0 &&
                                    listUsers.map((user, index) => (
                                        <NavDropdown.Item
                                            href="#"
                                            key={`user-${index}`}
                                        >
                                            {user?.username}
                                        </NavDropdown.Item>
                                    ))}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
