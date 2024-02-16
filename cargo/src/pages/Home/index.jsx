import React from "react";
import ViewModel from "./ViewModel";

import styled from "@emotion/styled";
import H4 from "../../components/Typography/H4";
import BodyText from "../../components/Typography/BodyText";
import ButtonGradient from "../../components/Common/Button/ButtonGradient";
import SearchText from "../../components/Common/Input/SearchText";
import Card from "../../components/Common/Card/Card";
import CardProduct from "../../components/Common/Card/CardProduct";
import Divider from "../../components/Common/Divider";

const Div = styled.div``;

export default function HomePage() {
  const {
    productList,
    search,
    setSearch,
    searchResults,
    onSubmitSearch,
    goProductDetail,
  } = ViewModel();

  return (
    <Div>
      <Card className="mb-6 border !border-cyan-300 bg-cyan-50 px-10 py-6">
        <H4 className="mb-4 text-center text-blue">
          ใส่คำค้นหาหรือลิงค์สินค้าที่นี่
        </H4>
        <div className="flex">
          <div className="w-[95%] pr-6">
            <SearchText
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <ButtonGradient onClick={onSubmitSearch}>ค้นหา</ButtonGradient>
        </div>
      </Card>

      {searchResults.length > 0 && (
        <>
          <div className="mb-4">
            <H4>ผลการค้นหา</H4>
            <BodyText className="text-neutral-hint">1 รายการ</BodyText>
          </div>

          <div className="mb-6 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {searchResults.map((v) => (
              <CardProduct
                key={v.id}
                productItem={v}
                onClick={() => goProductDetail(v.id)}
              />
            ))}
          </div>

          <Divider className="mb-6" />
        </>
      )}

      <H4 className="mb-4">สินค้าพร้อมส่งจากไทย</H4>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {productList.map((v) => (
          <CardProduct
            key={v.id}
            productItem={v}
            onClick={() => goProductDetail(v.id)}
          />
        ))}
      </div>
    </Div>
  );
}
