import type { RouteDefinition } from "@solidjs/router";
import LandingPage from "./pages/landing";
import NotFound from "./pages/notfound";

export const routes: RouteDefinition[] = [
  {
    path: "/",
    component: LandingPage,
  },
  {
    path: "*",
    component: NotFound,
  },
];
