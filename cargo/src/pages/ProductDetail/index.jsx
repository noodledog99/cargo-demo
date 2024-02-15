import React from "react";
import ViewModel from "./ViewModel";
import Caption from "./../../components/Typography/Caption";
import BodyText from "./../../components/Typography/BodyText";
import H3 from "./../../components/Typography/H3";
import ButtonOutline from "./../../components/Common/Button/ButtonOutline";
import ButtonGradient from "./../../components/Common/Button/ButtonGradient";
import H4 from "./../../components/Typography/H4";
import TextLink from "../../components/Typography/TextLink";
import SelectedProductCard from "./components/SelectedProduct";
import CardProduct from "../../components/Common/Card/CardProduct";
import hironoV2Image from "../../assets/images/hirono-v2-image.png";

export default function ProductDetailPage() {
  const { productList, productRelateList, goProductDetail, goBack } =
    ViewModel();

  return (
    <div className="flex w-full flex-col gap-12">
      <div className="flex w-full flex-col gap-4">
        <p
          className={"flex cursor-pointer items-center gap-1"}
          onClick={goBack}
        >
          <i class="las la-arrow-left text-blue"></i>
          <Caption className={"text-blue"}>ย้อนกลับ</Caption>
        </p>
        <div className="flex w-full gap-10">
          <div className="flex w-[553px] flex-shrink-0">
            <img
              src={hironoV2Image}
              className="h-[415px] w-full rounded-lg object-cover"
              alt="image-product"
            />
          </div>
          <div className="flex flex-1 flex-col">
            <div className="flex items-center justify-between">
              <p className="flex items-center gap-1">
                <i class="las la-home"></i>
                <BodyText className={"text-sm text-neutral-secondary"}>
                  สินค้าจาก [ชื่อร้านค้า]
                </BodyText>
              </p>

              <p className="flex items-center gap-1">
                <BodyText className={"text-sm text-neutral-secondary"}>
                  ร้านนี้เปิดมาแล้ว
                </BodyText>
                <i class="lar la-clock text-[20px]"></i>
                <BodyText className={"text-sm text-neutral-secondary"}>
                  1 ปี 4 เดือน
                </BodyText>
              </p>
            </div>

            <H3 className={"mt-[6.5px]"}>Hirono V2</H3>
            <div className="mt-2 flex items-center gap-1">
              {" "}
              <i class="las la-star text-cyan"></i>
              <i class="las la-star text-cyan"></i>
              <i class="las la-star text-cyan"></i>
              <i class="las la-star-half-alt text-cyan"></i>
              <i class="lar la-star text-cyan"></i>
              <BodyText className={"text-sm text-neutral-secondary"}>
                1.2k
              </BodyText>
            </div>
            <H3 className={"mt-6 text-blue"}>฿ 380</H3>

            <div className="mt-[15.5px] flex h-[224px] flex-1 items-baseline gap-4 text-nowrap">
              <BodyText className="w-20 flex-shrink-0 text-sm text-neutral-secondary">
                ตัวเลือกสินค้า
              </BodyText>

              <div className="flex h-full flex-1 flex-wrap gap-4">
                {productList.map((v, i) => (
                  <SelectedProductCard key={i} data={v} />
                ))}
              </div>
            </div>

            <div className="mt-6 flex w-[248px] items-center justify-between">
              <BodyText className={"text-neutral-secondary"}>จำนวน</BodyText>
              <div className="flex items-center gap-2">
                <i class="las la-minus-circle text-[28px]"></i>
                <p className="w-16 rounded-lg border border-neutral-line px-2 py-3 text-center">
                  <BodyText className={"text-neutral-main"}>1</BodyText>
                </p>
                <i class="las la-plus-circle text-[28px]"></i>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-6">
              <ButtonOutline
                className={
                  "flex h-[54px] w-[240px] items-center justify-center gap-2"
                }
              >
                <i class="las la-cart-plus text-[24px] text-blue"></i>
                <H4>เพิ่มใส่ตระกร้า</H4>
              </ButtonOutline>
              <ButtonGradient
                className={
                  "flex h-[54px] w-[240px] items-center justify-center gap-2"
                }
              >
                <H4>ซื้อสินค้า</H4>
              </ButtonGradient>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <H4 className={"text-neutral-main"}>
            สินค้าพร้อมส่งจากไทยที่คุณอาจสนใจ
          </H4>
          <TextLink className={"text-blue"}>เพิ่มเติม</TextLink>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {productRelateList.map((it) => (
            <CardProduct
              productItem={it}
              key={it.id}
              onClick={() => goProductDetail(it.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
