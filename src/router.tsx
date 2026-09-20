import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    // Always jump to top on forward navigations so short pages aren't left
    // scrolled past their content after leaving a long page like Gallery.
    defaultViewTransition: false,
  });

  return router;
};
