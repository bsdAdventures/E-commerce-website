import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./directory.styles.scss";
import { MenuItem } from "../menu-item";
import { selectDirectorySections } from "../../redux";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {" "}
      {sections.map(({ id, ...props }) => {
        return <MenuItem key={id} {...props} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
