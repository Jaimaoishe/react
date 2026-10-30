import { Routes, Route } from "react-router-dom";
import RootLayouts from "./layouts/RootLayouts";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Contacts from "./pages/Contacts";
import Shops from "./pages/Shops";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayouts />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="shop" element={<Shops/>} />
        <Route path="Contacts" element={<Contacts />} />
      

        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default App;
