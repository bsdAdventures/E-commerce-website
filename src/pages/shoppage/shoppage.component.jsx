import React from "react";
import { Route } from "react-router-dom";
import { CollectionsOverview } from "../../components";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <CollectionsOverview />
    </div>
  );
};

export default ShopPage;
