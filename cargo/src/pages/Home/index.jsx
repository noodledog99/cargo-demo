import React from "react";
import ViewModel from "./ViewModel";

import styled from "@emotion/styled";
import H4 from "../../components/Typography/H4";
import BodyText from "../../components/Typography/BodyText";
import ButtonGradient from "../../components/Common/Button/ButtonGradient";
import { Card, CardBody } from "../../components/Common/Card/Card";
import hironoV2Image from "../../assets/images/hirono-v2-image.png";
import SearchText from "../../components/Common/Input/SearchText";

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

export default function HomePage() {
  const { productList } = ViewModel();

  return (
    <Div>
      <Card className="mb-6 border border-cyan-300 px-10 py-6">
        <H4 className="mb-4 text-center text-blue">
          ใส่คำค้นหาหรือลิงค์สินค้าที่นี่
        </H4>
        <div className="flex">
          <div className="w-[95%] pr-6">
            <SearchText />
          </div>
          <ButtonGradient>ค้นหา</ButtonGradient>
        </div>
      </Card>

      <H4 className="mb-4">สินค้าพร้อมส่งจากไทย</H4>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {productList.map((v) => (
          <Card>
            <CardBody>
              <div className="product-content">
                <img src={hironoV2Image} className="product-img block" />
                <div className="product-title">Hirono V2</div>
                <div className="product-price">฿ 450</div>
                <div className="product-footer">
                  <div className="rating flex items-center">
                    <div className="star">
                      <i class="las la-star text-cyan"></i>
                      <i class="las la-star text-cyan"></i>
                      <i class="las la-star text-cyan"></i>
                      <i class="las la-star-half-alt text-cyan"></i>
                      <i class="lar la-star text-cyan"></i>
                    </div>
                    <BodyText className="rate-text text-sm">1.2k</BodyText>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </Div>
  );
}
