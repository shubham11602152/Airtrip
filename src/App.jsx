import "./App.css";
import Layout from "./common/components/Layout";
import FlightResultsPage from "./common/components/page/FlightResultsPage";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Layout>
        <FlightResultsPage />
      </Layout>
    </LocalizationProvider>
  );
}

export default App;
