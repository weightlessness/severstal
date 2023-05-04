import React, { FC } from "react";
import { useSitemap } from "../sitemap";
import { HashRouter, Route, Switch } from "react-router-dom";
import Layout from "../../components/Layout";
import Error404 from "../Error404";
import { useApplyBodyStyle } from "./behavior";
import { MainContext, useContextDefaultValues } from "../../context";

const Router: FC = () => {
  useApplyBodyStyle();
  const sitemap = useSitemap();
  const contextValue = useContextDefaultValues();

  return (
    <HashRouter>
      <MainContext.Provider value={contextValue}>
        <Layout>
          <Switch>
            {sitemap.map(({ url, render }) => (
              <Route exact key={url} path={url} render={render} />
            ))}
            <Route path="*" render={() => <Error404 />} />
          </Switch>
        </Layout>
      </MainContext.Provider>
    </HashRouter>
  );
};

export default Router;
