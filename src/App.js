import "./App.css";
import Displaycard from "./displaycard";
function App() {
  return (
    <div className="maincard">
      <div className="card">
        <Displaycard
          heading="Header"
          title="Primary Card Title"
          contant="Some quick example build on the card title and makeup the bulk of the clard's contant"
          colors="#353dfe"
        />
      </div>
      <div className="card">
        <Displaycard
          heading="Header"
          title="Secondary Card Title"
          contant="Some quick example build on the card title and makeup the bulk of the clard's contant"
          colors="#677179"
        />
      </div>
      <div className="card">
        <Displaycard
          heading="Header"
          title="succes Card Title"
          contant="Some quick example build on the card title and makeup the bulk of the clard's contant"
          colors="#ef0044"
        />
      </div>
      <div className="card">
        <Displaycard
          heading="Header"
          title="Danger Card Title"
          contant="Some quick example build on the card title and makeup the bulk of the clard's contant"
          colors="#353dfe"
        />
      </div>
    </div>
  );
}

export default App;
