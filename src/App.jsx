import { HashRouter } from "react-router";
import AppRoutes from "./components/AppRoutes";

function App() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
}

export default App;
