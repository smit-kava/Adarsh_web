import { AnimatePresence } from "framer-motion";
import { Routes as ReactRoutes, Route, BrowserRouter as Router, useLocation } from "react-router-dom";
import PageWrapper from "../Animations/PageWrapper";
import TransitionOverlay from "../Animations/TransitionOverlay";
import Layout from "../layout/Layout";
import {
  About,
  Certificates,
  Contact,
  Experience,
  Home,
  LandingPage,
  NoFounds,
  Skills,
} from "../Pages";
import { Routes } from "./routes";

// Inner component — must be inside <Router> so useLocation works
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      {/* Line animation overlay — renders on every route change */}
      <TransitionOverlay />

      {/* Page content transitions */}
      <AnimatePresence mode="wait">
        <ReactRoutes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><LandingPage /></PageWrapper>} />
          <Route path={Routes.Home} element={<PageWrapper><Home /></PageWrapper>} />
          <Route path={Routes.About} element={<PageWrapper><About /></PageWrapper>} />
          <Route path={Routes.Skills} element={<PageWrapper><Skills /></PageWrapper>} />
          <Route path={Routes.Certificates} element={<PageWrapper><Certificates /></PageWrapper>} />
          <Route path={Routes.Contact} element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path={Routes.Experience} element={<PageWrapper><Experience /></PageWrapper>} />
          <Route path={Routes.NoFounds} element={<PageWrapper><NoFounds /></PageWrapper>} />
        </ReactRoutes>
      </AnimatePresence>
    </>
  );
}

const Routing = () => {
  return (
    <Router>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
};

export default Routing;
