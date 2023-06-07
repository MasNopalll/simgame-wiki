import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MacBookAir1 from "./pages/MacBookAir1";
import LandingPage2 from "./pages/LandingPage2";
import ImportantFact from "./pages/ImportantFact";
import ContentList from "./pages/ContentList";
import ContentList1 from "./pages/ContentList1";
import FAQ from "./pages/FAQ";
import Table from "./pages/Table";
import Troubleshooting from "./pages/Troubleshooting";
import Problem from "./pages/Problem";
import Stepper from "./pages/Stepper";
import Overview from "./pages/Overview";
import LandingPage1 from "./pages/LandingPage1";
import BottomNavigation from "./pages/BottomNavigation";
import Navbar2 from "./pages/Navbar2";
import Navbar from "./pages/Navbar";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page-2":
        title = "";
        metaDescription = "";
        break;
      case "/important-fact":
        title = "";
        metaDescription = "";
        break;
      case "/content-list1":
        title = "";
        metaDescription = "";
        break;
      case "/content-list":
        title = "";
        metaDescription = "";
        break;
      case "/faq":
        title = "";
        metaDescription = "";
        break;
      case "/table":
        title = "";
        metaDescription = "";
        break;
      case "/troubleshooting":
        title = "";
        metaDescription = "";
        break;
      case "/problem":
        title = "";
        metaDescription = "";
        break;
      case "/stepper":
        title = "";
        metaDescription = "";
        break;
      case "/overview":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page-1":
        title = "";
        metaDescription = "";
        break;
      case "/bottom-navigation":
        title = "";
        metaDescription = "";
        break;
      case "/navbar-2":
        title = "";
        metaDescription = "";
        break;
      case "/navbar":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<MacBookAir1 />} />
      <Route path="/landing-page-2" element={<LandingPage2 />} />
      <Route path="/important-fact" element={<ImportantFact />} />
      <Route path="/content-list1" element={<ContentList />} />
      <Route path="/content-list" element={<ContentList1 />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/table" element={<Table />} />
      <Route path="/troubleshooting" element={<Troubleshooting />} />
      <Route path="/problem" element={<Problem />} />
      <Route path="/stepper" element={<Stepper />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/landing-page-1" element={<LandingPage1 />} />
      <Route path="/bottom-navigation" element={<BottomNavigation />} />
      <Route path="/navbar-2" element={<Navbar2 />} />
      <Route path="/navbar" element={<Navbar />} />
    </Routes>
  );
}
export default App;
