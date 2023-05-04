import { PageData } from "./types";
import { useLocation } from "react-router-dom";
import useSitemap from "./useSiteMap";
import { useMemo } from "react";
import { pathToRegexp } from "path-to-regexp";

const useCurrentPage = (): PageData | undefined => {
  const { pathname } = useLocation();
  const sitemap = useSitemap();

  return useMemo(
    (): PageData | undefined =>
      sitemap.find(({ url }) => pathToRegexp(url).test(pathname)),
    [pathname, sitemap]
  );
};

export default useCurrentPage;
