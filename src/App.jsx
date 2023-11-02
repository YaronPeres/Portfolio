import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./components/AppLayout";

function App() {
  return (
    <div>
      <AppLayout />
    </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<AppLayout />}>
    //       <Route index element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
