import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home, { AboutPage, AutomotiveFilmPage, BusinessPage, CapabilityPage, ContactPage, GroupProfilePage, PhilosophyPage, SubCapabilityPage, SystemPage, type CapabilityKey } from "./pages/Home";

function Router() {
  const githubPagesExport = import.meta.env.VITE_EXPORT_MODE === "github-pages";
  return (
    <WouterRouter hook={githubPagesExport ? useHashLocation : undefined}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/aos">{() => <SystemPage type="aos" />}</Route>
        <Route path="/fuel-bar">{() => <SystemPage type="fuel" />}</Route>
        <Route path="/automotive-film" component={AutomotiveFilmPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/philosophy" component={PhilosophyPage} />
        <Route path="/business/energy-systems">{() => <CapabilityPage capability="energy-systems" />}</Route>
        <Route path="/business/film-coating">{() => <CapabilityPage capability="film-coating" />}</Route>
        <Route path="/business/filling-packaging">{() => <CapabilityPage capability="filling-packaging" />}</Route>
        <Route path="/business/robot-ai-semiconductor">{() => <CapabilityPage capability="robot-ai-semiconductor" />}</Route>
        <Route path="/business/global-rnd-service">{() => <CapabilityPage capability="global-rnd-service" />}</Route>
        <Route path="/business/:capability/:chapter">{(params) => <SubCapabilityPage capability={params.capability as CapabilityKey} chapter={params.chapter} />}</Route>
        <Route path="/business" component={BusinessPage} />
        <Route path="/pactive-korea">{() => <GroupProfilePage group="pactive-korea" />}</Route>
        <Route path="/neipclova">{() => <GroupProfilePage group="neipclova" />}</Route>
        <Route path="/flowsophia">{() => <GroupProfilePage group="flowsophia" />}</Route>
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
