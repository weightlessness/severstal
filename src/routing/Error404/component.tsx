import type { FC } from "react";
import React from "react";
import { useHistory } from "react-router-dom";

const Component: FC = () => {
  const history = useHistory();

  return (
    <div>
      <h2>
        Страница, которую вы запрашиваете, не существует. Возможно, она
        устарела, была удалена или был введен неверный адрес в поисковой строке.
      </h2>
      <div>
        <button onClick={() => history.goBack()}>Вернуться назад</button>
      </div>
    </div>
  );
};

export default Component;
