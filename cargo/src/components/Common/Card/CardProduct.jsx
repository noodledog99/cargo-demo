import React from "react";
import Card from "./Card";
import BodyText from "../../Typography/BodyText";
import H4Light from "../../Typography/H4Light";
import styled from "@emotion/styled";

import ThialandIcon from "../../../assets/icons/thailand.svg";
import Caption from "../../Typography/Caption";

const Div = styled.div`
  .tag-round {
    border-radius: 0px 20px 20px 0px;
  }
`;

export default function CardProduct({ productItem, ...props }) {
  return (
    <Div {...props}>
      <Card className={"hover:border-2 hover:border-cyan"}>
        <div className="product-content">
          {/*  */}
          <div className="img-content relative w-full">
            <div className="tag tag-round absolute top-1 z-10 flex bg-cyan-blue pb-2 pl-1 pr-2 pt-2 opacity-80">
              <Caption className={"mr-1 font-bold text-neutral-white"}>
                พร้อมส่งจากไทย
              </Caption>
              <img src={ThialandIcon} alt="thailand_icon" className="w-4" />
            </div>
            <img src={productItem.product_image} className="product-img " />
          </div>
          {/*  */}
          <div className="gap-2 px-1 pb-4 pl-2 pr-2 pt-2 hover:bg-cyan-50 ">
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
    </Div>
  );
}
