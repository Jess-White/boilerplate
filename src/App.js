import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { client } from "./ApolloClient/client";
import { ApolloProvider } from "@apollo/client";

import { PrivateRoute } from "./Components/Helpers/PrivateRoute";
import LandingPage from "./Components/LandingPage";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import ResetPassword from "./Components/ResetPassword";
import ForgotPassword from "./Components/ForgotPassword";
import OrgSelect from "./Components/OrgSelect";
import Dashboard from "./Components/Dashboard";
import Navigation from "./Components/Navigation";
import Boilerplates from "./Components/Boilerplates";
import Categories from "./Components/Categories";
import Organizations from "./Components/Organizations";
import Grants from "./Components/Grants";
import FundingOrgs from "./Components/FundingOrgs";
import BoilerplatesShow from "./Components/BoilerplatesShow";
import FundingOrgsShow from "./Components/FundingOrgsShow";
import OrganizationsShow from "./Components/OrganizationsShow";
import ReportsShow from "./Components/ReportsShow";
import GrantsShow from "./Components/GrantsShow";
import ReportsFinalizeShow from "./Components/ReportsFinalizeShow";
import BoilerplatesNew from "./Components/BoilerplatesNew";
import CategoriesNew from "./Components/CategoriesNew";
import FundingOrgsNew from "./Components/FundingOrgs/FundingOrgsNew";
import OrganizationsNew from "./Components/OrganizationsNew";
import GrantsNew from "./Components/Grants/GrantsNew";
import SectionsNew from "./Components/SectionsNew";
import ReportsNew from "./Components/ReportsNew";
import BoilerplatesEdit from "./Components/BoilerplatesEdit";
import GrantEdit from "./Components/Grants/GrantEdit";
import GrantCopy from "./Components/Grants/GrantCopy";
import OrganizationLayout from "./Components/Layouts/OrganizationLayout/OrganizationLayout";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Redirect to="/landing_page" />
            </Route>
            <Route
              path="/landing_page"
              component={() => (
                <>
                  <Navigation />
                  <LandingPage />
                </>
              )}
            />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/reset_password" component={ResetPassword} />
            <Route path="/forgot_password" component={ForgotPassword} />
            <Route path="/organizations/:org_id/">
              <OrganizationLayout>
                <Switch>
                  <PrivateRoute
                    path="/organizations/:org_id/edit"
                    component={OrganizationsShow}
                  />
                  <PrivateRoute
                    path="/organizations/:org_id/dashboard"
                    component={Dashboard}
                  />
                  <PrivateRoute
                    path="/organizations/:org_id/grants/:grant_id"
                    component={GrantsShow}
                  />
                  <PrivateRoute
                    path="/organizations/:org_id/grants/:grant_id/edit"
                    component={GrantEdit}
                  />
                  <PrivateRoute
                    path="/organizations/:org_id/grants/:grant_id/copy"
                    component={GrantCopy}
                  />
                  <PrivateRoute
                    path="/organizations/:org_id/grants-new"
                    component={GrantsNew}
                  />
                  <PrivateRoute
                    path="/organizations/:org_id/grants/:grant_id/sections-new"
                    component={SectionsNew}
                  />
                  <PrivateRoute
                    path={
                      "/organizations/:org_id/grants/:grant_id/reports/:report_id"
                    }
                    component={ReportsShow}
                  />
                  <PrivateRoute
                    path={
                      "/organizations/:org_id/grants/:grant_id/reports-finalize/:report_id"
                    }
                    component={ReportsFinalizeShow}
                  />
                  <PrivateRoute
                    path="/organizations/:org_id/grants/:grant_id/reports-new"
                    component={ReportsNew}
                  />
                  <PrivateRoute
                    path="/organizations/:org_id/grants/"
                    component={Grants}
                  />
                  <PrivateRoute
                    path="/organizations/:org_id/boilerplates/:boilerplate_id"
                    component={BoilerplatesShow}
                  />
                  <PrivateRoute
                    path={
                      "/organizations/:org_id/boilerplates-edit/:boilerplate_id"
                    }
                    component={BoilerplatesEdit}
                  />
                  <PrivateRoute
                    path="/organizations/:org_id/funding_orgs/:funding_org_id"
                    component={FundingOrgsShow}
                  />
                  <PrivateRoute
                    path="/organizations/:org_id/boilerplates-new"
                    component={BoilerplatesNew}
                  />
                  <PrivateRoute
                    path="/organizations/:org_id/boilerplates"
                    component={Boilerplates}
                  />
                  <PrivateRoute
                    path="/organizations/:org_id/categories-new"
                    component={CategoriesNew}
                  />
                  <PrivateRoute
                    path="/organizations/:org_id/categories"
                    component={Categories}
                  />
                  <PrivateRoute
                    path="/organizations/:org_id/funding_orgs-new"
                    component={FundingOrgsNew}
                  />
                  <PrivateRoute
                    path="/organizations/:org_id/funding_orgs"
                    component={FundingOrgs}
                  />
                  <Redirect to="/organizations/:org_id/dashboard" />
                </Switch>
              </OrganizationLayout>
            </Route>
            <PrivateRoute path="/org_select" component={OrgSelect} />
            <PrivateRoute
              exact
              path="/organizations"
              component={Organizations}
            />
            <PrivateRoute
              exact
              path="/organizations-new"
              component={OrganizationsNew}
            />
          </Switch>
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
}
