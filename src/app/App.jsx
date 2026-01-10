import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/index.jsx";

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
