import { useState } from "react";
import { useNavigate, useParams } from "react-router";

import demoSelectedProduct from "../../assets/images/demo-selected-product.png";
import demoSearchedProduct from "../../assets/images/demo-searched-product.png";
import hironoV2Image from "../../assets/images/hirono-v2-image.png";
import demo1 from "../../assets/images/demo-img-1.png";
import demo2 from "../../assets/images/demo-img-2.png";
import demo3 from "../../assets/images/demo-img-3.png";
import demo4 from "../../assets/images/demo-img-4.png";

const MOCK_PRODUCT_LIST = [
  {
    name: "1 สุ่ม",
    img: demoSelectedProduct,
  },

  {
    name: "ไดโนเสาร์",
    img: demoSelectedProduct,
  },
  {
    name: "เครื่องบิน",
    img: demoSelectedProduct,
  },
  {
    name: "ตัวตลก",
    img: demoSelectedProduct,
  },
  {
    name: "กล่องของเล่น",
    img: demoSelectedProduct,
  },
  {
    name: "สินค้าหมด",
    img: demoSelectedProduct,
  },
  {
    name: "นกอิสระ",
    img: demoSelectedProduct,
  },
  {
    name: "อ่างอาบน้ำ",
    img: demoSelectedProduct,
  },
  {
    name: "สุ่ม 12 กล่อง",
    img: demoSelectedProduct,
  },
];

const MOCK_PRODUCT_RELATE_LIST = [
  {
    id: 1,
    product_name: "Hirono V2",
    price: 580,
    rate: "1.2k",
    product_image: hironoV2Image,
  },
  {
    id: 2,
    product_name: "Hirono V2",
    price: 580,
    rate: "1.2k",
    product_image: hironoV2Image,
  },
  {
    id: 3,
    product_name: "Hirono V2",
    price: 580,
    rate: "1.2k",
    product_image: hironoV2Image,
  },
  {
    id: 4,
    product_name: "Hirono V2",
    price: 580,
    rate: "1.2k",
    product_image: hironoV2Image,
  },
  {
    id: 5,
    product_name: "Hirono V2",
    price: 580,
    rate: "1.2k",
    product_image: hironoV2Image,
  },
];

const MOCK_IMAGES_CAROUSEL = [
  {
    id: 1,
    image: hironoV2Image,
  },
  {
    id: 2,
    image: demoSelectedProduct,
  },
  {
    id: 3,
    image: demoSearchedProduct,
  },
  {
    id: 4,
    image: demo1,
  },
  {
    id: 5,
    image: demo2,
  },
  {
    id: 6,
    image: demo3,
  },
  {
    id: 7,
    image: demo4,
  },
];

export default function ViewModel() {
  // external hook
  const navigate = useNavigate();

  const [productList] = useState(MOCK_PRODUCT_LIST);
  const [productRelateList] = useState(MOCK_PRODUCT_RELATE_LIST);
  const [imageCarousels] = useState(MOCK_IMAGES_CAROUSEL);

  const goProductDetail = (id) => {
    navigate(`/product-detail/${id}`);
  };

  const goBack = () => {
    navigate(-1);
  };

  return {
    productList,
    productRelateList,
    imageCarousels,
    goProductDetail,
    goBack,
  };
}
