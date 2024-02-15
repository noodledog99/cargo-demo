import React from "react";
import H5 from "./../Typography/H5";
import BodyText from "./../Typography/BodyText";
import Phone from "../../assets/icons/phone.svg";
import Line from "../../assets/icons/line.svg";
import Mail from "../../assets/icons/mail.svg";

export default function Footer() {
  return (
    <div className="bg-cyan-50">
      <div className="mx-auto flex h-[190px] w-full max-w-[1440px] items-baseline justify-between px-10 py-6">
        <div className="flex flex-col gap-4">
          <H5>ศูนย์ช่วยเหลือ</H5>
          <BodyText className={"text-blue"}>สินค้าตกค้าง</BodyText>
          <BodyText className={"text-blue"}>รายงานปัญหา</BodyText>
        </div>
        <div className="flex flex-col gap-4">
          <H5>วิธีการชำระเงิน</H5>
          <BodyText>ชำระผ่านเครดิต</BodyText>
          <BodyText>QR code</BodyText>
          <BodyText>โอนเงินผ่านธนาคาร</BodyText>
        </div>
        <div className="flex flex-col gap-4">
          <H5>ติดต่อเรา</H5>
          <TextWithIcon>
            <img src={Mail} />
            <a href="mailto:official@cargo.com">
              <BodyText className={"text-blue"}>official@cargo.com</BodyText>
            </a>
          </TextWithIcon>
          <TextWithIcon>
            <img src={Line} />
            <a href="https://lineit.line.me/share/ui?url=https%3A%2F%2Fwww.it24hrs.com%2F2020%2Fline-at-policetalks-find-police%2F">
              <BodyText className={"text-blue"}>@cargo</BodyText>
            </a>
          </TextWithIcon>
          <TextWithIcon>
            <img src={Phone} />
            <a href="tel:+085 858 5858">
              <BodyText className={"text-blue"}>085 858 5858</BodyText>
            </a>
          </TextWithIcon>
        </div>
      </div>
    </div>
  );
}

const TextWithIcon = ({ children }) => (
  <div className="flex items-center gap-2">{children}</div>
);
