import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5)
    }
  }
}));
export default function Chips({ Expance, handleDelete, handleEdit }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Chip
        avatar={<Avatar>${Expance.values}</Avatar>}
        label={Expance.name}
        onClick={() => handleEdit(Expance.index)}
        onDelete={() => handleDelete(Expance.index)}
      />
    </div>
  );
}
