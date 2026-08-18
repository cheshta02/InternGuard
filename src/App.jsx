import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import PageContainer from "./components/layout/PageContainer";

import Home from "./pages/Home";
import About from "./pages/About";
import Analyze from "./pages/Analyze";
import Auth from "./pages/Auth";
import ContactUs from "./pages/ContactUs";
import Directory from "./pages/Directory";
import Opportunity from "./pages/opportunity";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <PageContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/analyze" element={<Analyze />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/opportunity" element={<Opportunity />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </PageContainer>

      <Footer />
    </BrowserRouter>
  );
}

export default App;