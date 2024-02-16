import { useState, useEffect } from "react";

import hironoV2Image from "../../assets/images/hirono-v2-image.png";
import { useNavigate } from "react-router";

export default function ViewModel() {
  const initialProductList = [
    {
      id: 1,
      product_name: "Hirono V2",
      price: 580,
      rate: "1.2k",
      product_image: hironoV2Image,
      discount: "40%",
      reduced_price: 250,
    },
    {
      id: 2,
      product_name: "Hirono V2",
      price: 580,
      rate: "1.2k",
      product_image: hironoV2Image,
      discount: "",
      reduced_price: 0,
    },
    {
      id: 3,
      product_name: "Hirono V2",
      price: 580,
      rate: "1.2k",
      product_image: hironoV2Image,
      discount: "",
      reduced_price: 0,
    },
    {
      id: 4,
      product_name: "Hirono V2",
      price: 580,
      rate: "1.2k",
      product_image: hironoV2Image,
      discount: "",
      reduced_price: 0,
    },
    {
      id: 5,
      product_name: "Hirono V2",
      price: 580,
      rate: "1.2k",
      product_image: hironoV2Image,
      discount: "",
      reduced_price: 0,
    },
    {
      id: 6,
      product_name: "Hirono V2",
      price: 580,
      rate: "1.2k",
      product_image: hironoV2Image,
      discount: "",
      reduced_price: 0,
    },
    {
      id: 7,
      product_name: "Hirono V2",
      price: 580,
      rate: "1.2k",
      product_image: hironoV2Image,
      discount: "35%",
      reduced_price: 0,
    },
    {
      id: 8,
      product_name: "Hirono V2",
      price: 580,
      rate: "1.2k",
      product_image: hironoV2Image,
      discount: "",
      reduced_price: 0,
    },
    {
      id: 9,
      product_name: "Hirono V2",
      price: 580,
      rate: "1.2k",
      product_image: hironoV2Image,
      discount: "",
      reduced_price: 0,
    },
    {
      id: 10,
      product_name: "Hirono V2",
      price: 580,
      rate: "1.2k",
      product_image: hironoV2Image,
      discount: "",
      reduced_price: 0,
    },
    {
      id: 11,
      product_name: "Hirono V2",
      price: 580,
      rate: "1.2k",
      product_image: hironoV2Image,
      discount: "",
      reduced_price: 0,
    },
    {
      id: 12,
      product_name: "Hirono V2",
      price: 580,
      rate: "1.2k",
      product_image: hironoV2Image,
      discount: "",
      reduced_price: 0,
    },
    {
      id: 13,
      product_name: "Hirono V2",
      price: 580,
      rate: "1.2k",
      product_image: hironoV2Image,
      discount: "",
      reduced_price: 0,
    },
  ];
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setProductList(initialProductList);
  }, []);

  const goProductDetail = (id) => {
    navigate(`/product-detail/${id}`);
  };

  return {
    productList,
    goProductDetail,
  };
}
