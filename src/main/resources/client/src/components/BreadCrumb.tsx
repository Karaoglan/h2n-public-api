import React from "react";
import {NavLink} from "react-router-dom";
import {DashboardPage} from "../pages/Dashboard";
import {NewsPage} from "../pages/News";
import {AboutUsPage} from "../pages/AboutUs";
import useReactRouterBreadcrumbs from "use-react-router-breadcrumbs";
import {useTranslation} from "react-i18next";

export const BreadCrumb: React.FC = () => {
  const {t} = useTranslation();

  const routes = [
    {
      path: "/",
      element: DashboardPage,
      breadcrumb: "",
    },
    {path: "/news", element: NewsPage, breadcrumb: t('news')},
    {path: "/bulletin", element: <></>, breadcrumb: t('bulletin')},
    {path: "/corporate", breadcrumb: t('corporate')},
    {path: "/corporate/about-us", element: AboutUsPage, breadcrumb: t('aboutUs')},
    {path: "/corporate/services", breadcrumb: t('services')},
    {path: "/corporate/team", breadcrumb: t('team')},
    {path: "/corporate/quality", breadcrumb: t('quality')},
  ];

  const breadcrumbs = useReactRouterBreadcrumbs(routes);

  return (<>
      {breadcrumbs.map(({
                          match,
                          breadcrumb
                        }) => (
        <span key={match.pathname}>
                          <NavLink to={match.pathname}>{breadcrumb}</NavLink>
                        </span>
      ))}
    </>
  );
}
