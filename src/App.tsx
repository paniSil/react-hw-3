import UncontrolledForm from "./components/UncontrolledForm";
import ControlledForm from "./components/ControlledForm";
import ServerDataFetch from "./components/ServerDataFetch";

const App = () => {
  return (
    <>
      <div className="container mt-5">
        <h2 className="my-5">Uncontrolled Component</h2>
        <UncontrolledForm />
      </div>

      <div className="container mt-5">
        <h2 className="my-5">Controlled Component</h2>
        <ControlledForm />
      </div>

      <div className="container mt-5">
        <ServerDataFetch />
      </div>
    </>
  );
};

export default App;
