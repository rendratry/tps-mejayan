import {Container, Navbar} from "react-bootstrap";


function NavbarComponent() {
    return (
        <Navbar bg="body-tertiary" variant="dark">
            <Container className="d-flex justify-content-center align-items-center">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="/logo-ppk-panjang.png"
                        height="50"
                        className="mr-2"
                    />
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;