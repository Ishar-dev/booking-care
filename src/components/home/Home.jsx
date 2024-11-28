import React from "react";
import { Banner } from "./Banner";
import { HospitalList } from "./HospitalList";
import { SpecialtyList } from "./SpecialtyList";

export function Home() {
  return (
    <>
      {/* Nội dung chính của trang chủ */}
      <div className="flex flex-col">
        {/* Banner */}
        <Banner />

        {/* Danh sách bệnh viện */}
        <div className="mt-60">
          <HospitalList />
        </div>

        {/* Danh sách chuyên khoa */}
        <div className="mt-20">
          <SpecialtyList />
        </div>
      </div>
    </>
  );
}
