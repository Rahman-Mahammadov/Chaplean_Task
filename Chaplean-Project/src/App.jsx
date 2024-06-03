import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route
              path="/"
              element={<HomePage txt={"Welcome to Chaplean"} />}
            />
            <Route
              path="/ourdifference"
              element={<HomePage txt={"Our Difference"} />}
            />

            <Route path="/pricing" element={<HomePage txt={"Pricing"} />} />
            <Route path="/docs" element={<HomePage txt={"Our Docs"} />} />

            <Route path="/docs" element={<HomePage txt={"Our Docs"} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
