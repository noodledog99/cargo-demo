import React from "react";
import Card from "./Card";
import BodyText from "../../Typography/BodyText";
import H4Light from "../../Typography/H4Light";

export default function CardProduct({ productItem, onClick }) {
  return (
    <Card onClick={onClick}>
      <div className="product-content">
        <img src={productItem.product_image} className="product-img block" />
        <div className="mt-2 gap-2 pb-4 pl-2 pr-2 pt-0">
          <H4Light className="product-title">
            {productItem.product_name}
          </H4Light>
          <BodyText
            className={"text-blue"}
          >{`฿ ${productItem.price}`}</BodyText>
          <div className="rating-content">
            <div className="rating flex items-center">
              <div className="star mr-1">
                <i className="las la-star h-4 w-4 text-cyan"></i>
                <i className="las la-star h-4 w-4 text-cyan"></i>
                <i className="las la-star h-4 w-4 text-cyan"></i>
                <i className="las la-star-half-alt h-4 w-4 text-cyan"></i>
                <i className="lar la-star h-4 w-4 text-cyan"></i>
              </div>
              <BodyText className="rate-text text-sm text-neutral-secondary">
                {productItem.rate}
              </BodyText>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
