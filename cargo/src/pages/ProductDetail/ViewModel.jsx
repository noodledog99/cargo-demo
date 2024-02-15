import { useState } from "react";
import { useNavigate, useParams } from "react-router";

const MOCK_PRODUCT_LIST = [
  {
    name: "1 สุ่ม",
    img: demoSelectedProduct,
  },
  {
    name: "1 สุ่ม",
    img: demoSelectedProduct,
  },
  {
    name: "ไดโนเสาร์",
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
    name: "ตัวตลก",
    img: demoSelectedProduct,
  },
  {
    name: "กล่องของเล่น",
    img: demoSelectedProduct,
  },
  {
    name: "กล่องของเล่น",
    img: demoSelectedProduct,
  },
  {
    name: "กล่องของเล่น",
    img: demoSelectedProduct,
  },
  {
    name: "กล่องของเล่น",
    img: demoSelectedProduct,
  },
  {
    name: "กล่องของเล่น",
    img: demoSelectedProduct,
  },
  {
    name: "กล่องของเล่น",
    img: demoSelectedProduct,
  },
];

const MOCK_PRODUCT_RELATE_LIST = [
  {
    image: "",
    name: "Pop MART Hirono V3",
    price: 350,
  },
  {
    image: "",
    name: "Pop MART Hirono V1",
    price: 450,
  },
  {
    image: "",
    name: "Hirono Fox",
    price: 600,
  },
  {
    image: "",
    name: "Hirono 2024",
    price: 90,
    discountFrom: 150,
  },
  {
    image: "",
    name: "Pop MART Hirono V1",
    price: 450,
  },
];

export default function ViewModel() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [demoCards, setDemoCards] = useState(MOCK_PRODUCT_LIST);
  const [productRelateList, setProductRelateList] = useState(
    MOCK_PRODUCT_RELATE_LIST,
  );

  const goBack = () => {
    navigate(-1);
  };

  return {
    demoCards,
    productRelateList,
    goBack,
  };
}
