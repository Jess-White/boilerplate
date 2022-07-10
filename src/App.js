import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { PrivateRoute } from "./Components/Helpers/PrivateRoute";
import Splashpage from "./Components/Splashpage";
import ResetPassword from "./Components/Login/ResetPassword/ResetPassword";
// import ForgotPassword from "./Components/Login/ForgotPassword/ForgotPassword";
import OrgSelect from "./Components/Organizations/OrgSelect";
import Dashboard from "./Components/Dashboard";
import BoilerplatesIndex from "./Components/Boilerplates/BoilerplatesIndex";
import CategoriesIndex from "./Components/Categories/CategoriesIndex";
import GrantsIndex from "./Components/Grants/GrantsIndex";
import FundingOrgsIndex from "./Components/FundingOrgs/FundingOrgsIndex";
import BoilerplatesShow from "./Components/Boilerplates/BoilerplatesShow";
// import OrganizationsShow from "./Components/Organizations/OrganizationsShow";
import ReportsShow from "./Components/Reports/ReportsShow";
import GrantsShow from "./Components/Grants/GrantsShow";
import FundingOrgNew from "./Components/FundingOrgs/FundingOrgNew";
import BoilerplatesNew from "./Components/Boilerplates/BoilerplatesNew";
import OrganizationsNew from "./Components/Organizations/OrganizationsNew";
import GrantsNew from "./Components/Grants/GrantsNew";
import ReportsNew from "./Components/Reports/ReportsNew";
import GrantEdit from "./Components/Grants/GrantEdit";
import GrantCopy from "./Components/Grants/GrantCopy";
import OrganizationLayout from "./Components/Layouts/OrganizationLayout/OrganizationLayout";
import Spinner from "./Components/Helpers/Spinner";
import { CurrentOrganizationProvider } from "./Contexts/currentOrganizationContext";
import { CurrentUserProvider } from "./Contexts/currentUserContext";
import StayTunedPage from "./pages/StayTuned/StayTunedPage";
import { PasteBoilerplateContentPopoutProvider } from "./Components/PasteBoilerplateContentPopout/PasteBoilerplateContentPopoutContext";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <CurrentUserProvider>
          <Route exact path="/">
            <Redirect to="/splashpage" />
          </Route>
          <Route path="/splashpage" component={Splashpage} />
          <Route path="/reset_password" component={ResetPassword} />
          {/* <Route path="/forgot_password" component={ForgotPassword} /> */}
          <CurrentOrganizationProvider>
            <PrivateRoute path="/organizations/:organizationUuid/">
              <OrganizationLayout>
                <Suspense fallback={<Spinner size="md" centered />}>
                  <Switch>
                    <Route
                      path="/organizations/:organizationUuid/dashboard"
                      component={Dashboard}
                    />
                    <PrivateRoute
                      path="/organizations/:organizationUuid/grants/:grantUuid/edit"
                      component={GrantEdit}
                    />
                    <Route
                      path="/organizations/:organizationUuid/grants/:grantUuid/copy"
                      component={GrantCopy}
                    />
                    <Route
                      exact
                      path="/organizations/:organizationUuid/grants/:grantUuid"
                      component={() => (
                        <PasteBoilerplateContentPopoutProvider>
                          <GrantsShow />
                        </PasteBoilerplateContentPopoutProvider>
                      )}
                    />
                    <Route
                      path="/organizations/:organizationUuid/grants-new"
                      component={GrantsNew}
                    />
                    <Route
                      exact
                      path={
                        "/organizations/:organizationUuid/grants/:grantUuid/reports/:reportUuid"
                      }
                      component={ReportsShow}
                    />
                    <Route
                      path="/organizations/:organizationUuid/grants/:grantUuid/reports-new"
                      component={ReportsNew}
                    />
                    <Route
                      path="/organizations/:organizationUuid/grants/"
                      component={GrantsIndex}
                    />
                    <Route
                      path="/organizations/:organizationUuid/boilerplates/:boilerplateUuid"
                      component={BoilerplatesShow}
                    />
                    <Route
                      path="/organizations/:organizationUuid/boilerplates-new"
                      component={BoilerplatesNew}
                    />
                    <Route
                      path="/organizations/:organizationUuid/boilerplates"
                      component={BoilerplatesIndex}
                    />
                    <Route
                      path="/organizations/:organizationUuid/categories"
                      component={CategoriesIndex}
                    />
                    <Route
                      path="/organizations/:organizationUuid/funding_orgs-new"
                      component={FundingOrgNew}
                    />
                    <Route
                      path="/organizations/:organizationUuid/funding_orgs"
                      component={FundingOrgsIndex}
                    />
                    <Route
                      path="/organizations/:organizationUuid/users"
                      component={StayTunedPage}
                    />
                    <Redirect to="/organizations/:organizationUuid/dashboard" />
                  </Switch>
                </Suspense>
              </OrganizationLayout>
            </PrivateRoute>
            <PrivateRoute path="/org_select" component={OrgSelect} />
            <PrivateRoute
              exact
              path="/organizations-new"
              component={OrganizationsNew}
            />
          </CurrentOrganizationProvider>
        </CurrentUserProvider>
      </Switch>
    </BrowserRouter>
  );
}
