import React from "react";
import Logo from "../../assets/icons/logo-web.svg";
import H4 from "./../Typography/H4";
import H4Light from "./../Typography/H4Light";
import Caption from "./../Typography/Caption";
import TextLink from "../Typography/TextLink";
import { useNavigate } from "react-router";

export default function Header() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="bg-neutral-white drop-shadow-md">
      <div className="mx-auto flex h-[72px] w-full max-w-[1440px] items-center justify-between px-10 py-3">
        <div className="flex h-12 items-center gap-6">
          <img
            className="hover:cursor-pointer"
            src={Logo}
            alt="logo"
            onClick={goHome}
          />
          <H4
            className={"px-4 py-[10.5px] text-blue hover:cursor-pointer"}
            onClick={goHome}
          >
            Home
          </H4>
          <H4Light
            className={
              "px-4 py-[10.5px] font-normal text-neutral-secondary hover:cursor-pointer"
            }
          >
            สินค้าพร้อมส่ง
          </H4Light>
          <div className="flex w-[120px] flex-col gap-1 rounded-lg bg-cyan-50 px-2 py-[6.5px]">
            <Caption className={"text-right text-blue-300"}>
              เรทเงินวันนี้
            </Caption>
            <Caption className={"text-right text-sm text-blue"}>
              {" "}
              1 CNY = 5 THB{" "}
            </Caption>
          </div>
        </div>
        <div className="flex items-center gap-2 px-4">
          <i class="las la-user text-[32px] text-blue"></i>
          <TextLink className={"text-blue"}>เข้าสู่ระบบ</TextLink>
          <span className="text-neutral-secondary">|</span>
          <TextLink className="text-blue">สมัครสมาชิก</TextLink>
        </div>
      </div>
    </div>
  );
}
