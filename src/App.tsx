import { useRoutes } from "@solidjs/router";
import { Navigation } from "./components/layout/navigation";
import { Footer } from "./components/layout/footer";
import { routes } from "./routes";

export const App = () => {
  const Routes = useRoutes(routes);

  return (
    <div class="bg-gray-100 dark:bg-[#0f0f0f] text-gray-800 dark:text-zinc-200">
      <Navigation />
      <Routes />
      <Footer />
    </div>
  );
};
