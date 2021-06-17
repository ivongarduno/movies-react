import React, { Suspense } from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routing/routes";
import MenuTop from "./components/MenuTop";

export default function App() {
  const { Header, Content } = Layout;
  return (
    <Layout>
      <Suspense fallback="Cargando...">
        <Router>
          <Header>
            <MenuTop />
          </Header>
          <Content>
            <Switch>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  component={route.component}
                  exact={route.exact}
                />
              ))}
            </Switch>
          </Content>
        </Router>
      </Suspense>
    </Layout>
  );
}
