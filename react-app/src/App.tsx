import { useState } from "react";
import Alert from "./components/Alert";
import { Button } from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false)
  return <div>
    <Button color="secondary" onClick={() => setAlertVisibility(false)}>Hide</Button>
    <Button onClick={() => setAlertVisibility(true)}>Show</Button>
    {alertVisible &&<Alert onClose={() => setAlertVisibility(false)}>Lel</Alert>}
  </div>;
}

export default App;
