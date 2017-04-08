import React from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

import "./index.css";

const sty = {
  cardheader: {
    height: '10px'
  }
}

const ImageCard = ({url}) => (
  <Card className="image-card">
    <CardHeader
      title="URL Avatar"
      avatar="http://placehold.it/30x30"
    />
    <CardMedia>
      <img src={url} />
    </CardMedia>
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
);

export default ImageCard;
