import React from "react";
import ViewModel from "./ViewModel";
import styled from "@emotion/styled";
import H4 from "../../components/Typography/H4";
import ButtonGradient from "../../components/Common/Button/ButtonGradient";
import SearchText from "../../components/Common/Input/SearchText";
import Card from "../../components/Common/Card/Card";
import CardProduct from "../../components/Common/Card/CardProduct";

const Div = styled.div``;

export default function HomePage() {
  const { productList, goProductDetail } = ViewModel();

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
          <CardProduct key={v.id} productItem={v} onClick={goProductDetail} />
        ))}
      </div>
    </Div>
  );
}
