import React from "react";
import ViewModel from "./ViewModel";

import styled from "@emotion/styled";
import Button from "../../components/Common/Button/Button";
import H1 from "../../components/Typography/H1";
import H2 from "../../components/Typography/H2";
import H3 from "../../components/Typography/H3";
import H4 from "../../components/Typography/H4";
import H4Light from "../../components/Typography/H4Light";
import H5 from "../../components/Typography/H5";
import BodyText from "../../components/Typography/BodyText";
import TextLink from "../../components/Typography/TextLink";
import SubText from "../../components/Typography/SubText";
import SubTextLight from "../../components/Typography/SubTextLight";
import SubTextLink from "../../components/Typography/SubTextLink";
import ButtonOutline from "../../components/Common/Button/ButtonOutline";
import ButtonGradient from "../../components/Common/Button/ButtonGradient";
import { Card, CardBody, CardImage } from "../../components/Common/Card/Card";
import hironoV2Image from "../../assets/images/hirono-v2-image.png";

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
  const { text, handleSetText, setText } = ViewModel();

  return (
    <Div>
      <h1 className="fig-size-h1">H1 Fig size</h1>

      <H1 className="text-cyan">Test H1 with class</H1>
      <H1 className="">Test H1 </H1>

      <H2 className="text-cyan">Test H2 with class</H2>
      <H2 className="">Test H2 </H2>

      <H3 className="text-cyan">Test H3 with class</H3>
      <H3 className="">Test H3 </H3>

      <H4 className="text-cyan">Test H4 with class</H4>
      <H4 className="">Test H4 </H4>

      <H4Light className="text-cyan">Test H4Light with class</H4Light>
      <H4Light className="">Test H4Light </H4Light>

      <H5 className="text-cyan">Test H5 with class</H5>
      <H5 className="">Test H5 </H5>

      <BodyText className="text-cyan">Test BodyText with class</BodyText>
      <BodyText className="">Test BodyText </BodyText>

      <SubText className="text-cyan">Test SubText with class</SubText>
      <SubText className="">Test SubText </SubText>

      <SubTextLight className="text-cyan">
        Test SubTextLight with class
      </SubTextLight>
      <SubTextLight className="">Test SubTextLight </SubTextLight>

      <SubTextLink className="text-cyan">
        Test SubTextLink with class
      </SubTextLink>
      <SubTextLink className="">Test SubTextLink </SubTextLink>

      <TextLink className="text-cyan">Test TextLink with class</TextLink>
      <TextLink className="">Test TextLink </TextLink>

      <div className="mb-2">
        <ButtonOutline>Default Button</ButtonOutline>
        <ButtonOutline className="custom-btn">Button with class</ButtonOutline>
        <ButtonOutline className="border-accent-warning text-accent-warning">
          Button with class tailwind
        </ButtonOutline>
      </div>

      <div className="mb-2">
        <Button>Default Button</Button>
        <Button className="custom-btn">Button with class</Button>
        <Button className="custom-btn-2">Button with class</Button>
      </div>

      <div>
        <ButtonGradient>Default Button</ButtonGradient>
        <ButtonGradient className="custom-btn-2">Button Class</ButtonGradient>
        <ButtonGradient className="bg-cyan-blue">
          Button Class Tailwind
        </ButtonGradient>
        <ButtonGradient className="bg-cyan-300">
          Button Class Tailwind Gunt
        </ButtonGradient>

        <div className="bg-cyan-300 text-accent-green">test text</div>

        <i class="lab la-accessible-icon"></i>
        <i class="las la-bell"></i>
      </div>

      <div>
        <H2 className="text-cyan">Product Card</H2>
        <div class="grid grid-cols-4 gap-4">
          <div>
            <Card>
              <CardBody>
                <div className="product-content">
                  <img src={hironoV2Image} className="product-img block" />
                  <div className="product-title">Hirono V2</div>
                  <div className="product-price">฿ 450</div>
                  <div className="product-footer">
                    <div className="rating">
                      <div className="star">
                        <i class="fa-sharp fa-thin fa-star"></i>
                        <i class="fa-sharp fa-thin fa-star"></i>
                        <i class="fa-sharp fa-thin fa-star"></i>
                        <i class="fa-sharp fa-thin fa-star"></i>
                        <i class="fa-sharp fa-thin fa-star"></i>
                      </div>
                      <div className="rate-text">1.2k</div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </Div>
  );
}
