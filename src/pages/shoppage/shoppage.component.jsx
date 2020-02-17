import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { CollectionPreview } from "../../components";
import { selectCollections } from "../../redux";

const ShopPage = ({ collections }) => {
  console.log(collections, "collections");

  return (
    <div className="shop-page">
      <h1>Collections</h1>
      {collections.map(({ id, ...props }) => (
        <CollectionPreview key={id} {...props} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(ShopPage);
