import { ToastContainer } from "react-toastify";
import Router from "./Router";
import { Container } from "./styles/app";

function App() {
  return (
    <Container>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        toastStyle={{ backgroundColor: "black", color: "white" }}
      />
      <Router />
    </Container>
  );
}

export default App;
