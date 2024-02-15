import React from "react";

import Card from "../../../components/Common/Card/Card";
import BodyText from "../../../components/Typography/BodyText";

function SelectedProductCard({ data, ...props }) {
  return (
    <Card className="inline-block" {...props}>
      <img className="inline-block" src={data.img} />
      <BodyText className="mx-2">{data.name}</BodyText>
    </Card>
  );
}

export default SelectedProductCard;
