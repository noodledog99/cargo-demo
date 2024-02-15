import { useState } from "react";
import { useParams } from "react-router";

const MOCK_PRODUCT_LIST = [
  {
    image: "",
    text: "1 สุ่ม",
  },
  {
    image: "",
    text: "ไดโนเสาร์",
  },
  {
    image: "",
    text: "1 สุ่ม",
  },
  {
    image: "",
    text: "เครื่องบิน",
  },
  {
    image: "",
    text: "ตัวตลก",
  },
  {
    image: "",
    text: "กล่องของเล่น",
  },
  {
    image: "",
    text: "สินค้าหมด",
  },
  {
    image: "",
    text: "นกอิสระ",
  },
  {
    image: "",
    text: "อ่างอาบน้ำ",
  },
  {
    image: "",
    text: "สุ่ม 12 กล่อง",
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
  const { id } = useParams();
  const [productList, setProductList] = useState(MOCK_PRODUCT_LIST);
  const [productRelateList, setProductRelateList] = useState(
    MOCK_PRODUCT_RELATE_LIST,
  );

  return {
    productList,
    productRelateList,
  };
}
