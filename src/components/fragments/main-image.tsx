import Image from "next/image";
import React from "react";

const MainImage = () => {
  return (
    <>
      <Image
        alt="main-image"
        src={"/images/wutwut.jpeg"}
        width={80}
        height={80}
        quality={100}
        className="w-120 h-120 object-cover"
      />
    </>
  );
};

export default MainImage;
