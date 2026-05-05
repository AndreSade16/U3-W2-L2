import "bootstrap/dist/css/bootstrap.min.css";
import BookstoreNavbar from "../components/BookstoreNavbar";
import BookstoreFooter from "../components/BookstoreFooter";
import Welcome from "../components/Welcome";
import { Container } from "react-bootstrap";
import BookList from "../components/BookList";
import horror from "../public/horror.json";
// import fantasy from "../public/fantasy.json";
// import history from "../public/history.json";
// import romance from "../public/romance.json";

function App() {
  return (
    <Container
      fluid={true}
      className="d-flex flex-column p-0 min-vh-100"
      style={{ backgroundColor: "#76583c" }}
    >
      <header>
        <BookstoreNavbar></BookstoreNavbar>
      </header>
      <main className="flex-grow-1 d-flex flex-column justify-content-center align-items-start">
        <Welcome
          alertClassName="w-75 mt-2 text-light border-white"
          alertMessage="Welcome to the Bookstore!"
        />
        <BookList array={horror.slice(0, 10)} />
        {/* <BookList array={fantasy.slice(0, 10)} />
        <BookList array={history.slice(0, 10)} />
        <BookList array={romance.slice(0, 10)} /> */}
      </main>
      <footer>
        <BookstoreFooter />
      </footer>
    </Container>
  );
}

export default App;
