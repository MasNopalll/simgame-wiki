import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MacBookAir1 from "./pages/MacBookAir1";
import LandingPage2 from "./pages/LandingPage2";
import HowToPlay3 from "./pages/HowToPlay3";
import HowToPlay from "./pages/HowToPlay";
import ImportantFact from "./pages/ImportantFact";
import ContentList from "./pages/ContentList";
import ContentList1 from "./pages/ContentList1";
import FAQ from "./pages/FAQ";
import Table from "./pages/Table";
import Calculator from "./pages/Calculator";
import Breadcrumbs from "./pages/Breadcrumbs";
import Jumbotron from "./pages/Jumbotron";
import Problem from "./pages/Problem";
import Stepper from "./pages/Stepper";
import Overview from "./pages/Overview";
import LandingPage1 from "./pages/LandingPage1";
import Paragraph from "./pages/Paragraph";
import Accordion from "./pages/Accordion";
import BottomNavigation from "./pages/BottomNavigation";
import Navbar2 from "./pages/Navbar2";
import Navbar from "./pages/Navbar";
import Glossary from "./pages/Glossary";
import HowToAttack from "./pages/HowToAttack";
import { useEffect } from "react";
import HowToPlay2 from "./pages/HowToPlay2";

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
        case "/how-to-play-3":
          title = "";
          metaDescription = "";
          break;
        case "/how-to-play-2":
          title = "";
          metaDescription = "";
          break;
        case "/how-to-play":
          title = "";
          metaDescription = "";
          break;
      case "/breadcrumbs":
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
      case "/accordion":
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
      case "/calculator":
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
      case "/jumbotron":
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
      case "/paragraph":
        title = "";
        metaDescription = "";
        break;
      case "/navbar-2":
        title = "";
        metaDescription = "";
        break;
      case "/glossary":
        title = "";
        metaDescription = "";
        break;
      case "/navbar":
        title = "";
        metaDescription = "";
        break;
      case "/how-to-attack":
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
      <Route path="/accordion" element={<Accordion />} />
      <Route path="/breadcrumbs" element={<Breadcrumbs />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/table" element={<Table />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/problem" element={<Problem />} />
      <Route path="/stepper" element={<Stepper />} />
      <Route path="/jumbotron" element={<Jumbotron />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/landing-page-1" element={<LandingPage1 />} />
      <Route path="/bottom-navigation" element={<BottomNavigation />} />
      <Route path="/paragraph" element={<Paragraph />} />
      <Route path="/navbar-2" element={<Navbar2 />} />
      <Route path="/glossary" element={<Glossary />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/how-to-attack" element={<HowToAttack />} />
      <Route path="/how-to-play-3" element={<HowToPlay3 />} />
      <Route path="/how-to-play-2" element={<HowToPlay2 />} />
      <Route path="/how-to-play" element={<HowToPlay />} />
    </Routes>
  );
}
export default App;
