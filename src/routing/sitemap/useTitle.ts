import useCurrentPage from "./useCurrentPage";
import { useMemo } from "react";

function useTitle() {
  const page = useCurrentPage();

  return useMemo(() => {
    let result = "Ошибка 404";

    if (page) {
      const { title, url } = page;

      if (title) {
        result = title;
      } else {
        result = url;
      }
    }
    return result;
  }, [page]);
}

export default useTitle;
