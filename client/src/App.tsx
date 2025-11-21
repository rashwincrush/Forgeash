import { Switch, Route } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ensureOrganizationJsonLd, ensureServicesJsonLd } from "@/lib/seo";

import Home from "@/pages/home";
import WorkPage from "@/pages/work";
import ContactPage from "@/pages/contact";
import AboutPage from "@/pages/about";
import ServicesPage from "@/pages/services";
import WebsitePlansPage from "@/pages/website-plans";
import AiAutomationPage from "@/pages/ai-automation";
import SaasMvpBuildPage from "@/pages/saas-mvp-build";
import DataDashboardsPage from "@/pages/data-dashboards";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/work" component={WorkPage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/services/websites" component={WebsitePlansPage} />
      <Route path="/services/ai-automation" component={AiAutomationPage} />
      <Route path="/services/saas-mvp-build" component={SaasMvpBuildPage} />
      <Route path="/services/data-dashboards" component={DataDashboardsPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/about" component={AboutPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    ensureOrganizationJsonLd();
    ensureServicesJsonLd();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Subtle Frequency Enhancement Layer */}
        <div className="frequency-enhancement"></div>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
