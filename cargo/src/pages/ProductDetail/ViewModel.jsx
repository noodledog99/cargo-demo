import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import demoSelectedProduct from "../../assets/images/demo-selected-product.png";
import hironoV2Image from "../../assets/images/hirono-v2-image.png";

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

export default function ViewModel() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [productList, setProductList] = useState(MOCK_PRODUCT_LIST);
  const [productRelateList, setProductRelateList] = useState(
    MOCK_PRODUCT_RELATE_LIST,
  );

  const goBack = () => {
    navigate(-1);
  };

  return {
    productList,
    productRelateList,
    goBack,
  };
}
