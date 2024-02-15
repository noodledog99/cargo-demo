import React from "react";
import styled from "@emotion/styled";
import Card from "./Card";
import BodyText from "../../Typography/BodyText";
import H4Light from "../../Typography/H4Light"


const Div = styled.div`
  .fig-size-h1 {
    font-size: 40px;
    font-weight: bold;
  }
  .custom-btn {
    color: red;
    border: 1px solid red;
  }
  .custom-btn-2 {
    color: green;
    border: 1px solid green;
  }
`;

export default function CardProduct({productName, price, rate, image}) {
  return (
    <Div>
      <Card>
        <div className="product-content">
          <img src={image} className="product-img block" />
          <div className="mt-2 gap-2 pb-4 pl-2 pr-2 pt-0">
            <H4Light className="product-title">{productName}</H4Light>
            <BodyText className={"text-blue"}>{`฿ ${price}`}</BodyText>
            <div className="rating-content">
              <div className="rating flex items-center">
                <div className="star mr-1">
                  <i className="las la-star h-4 w-4 text-cyan"></i>
                  <i className="las la-star h-4 w-4 text-cyan"></i>
                  <i className="las la-star h-4 w-4 text-cyan"></i>
                  <i className="las la-star-half-alt h-4 w-4 text-cyan"></i>
                  <i className="lar la-star h-4 w-4 text-cyan"></i>
                </div>
                <BodyText className="rate-text text-sm text-neutral-secondary">{rate}</BodyText>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Div>
  );
}
