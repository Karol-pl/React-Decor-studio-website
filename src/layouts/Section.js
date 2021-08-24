import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import OurWorkPage from "../pages/OurWorkPage";
import OfferListPage from "../pages/OfferListPage";
import ContactPage from "../pages/ContactPage";
import ErrorPage from "../pages/ErrorPage";
import OfferPage from "../pages/OfferPage";

const Section = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/our-work" component={OurWorkPage} />
        <Route path="/offers" component={OfferListPage} />
        <Route path="/offer/:id" component={OfferPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
};

export default Section;
