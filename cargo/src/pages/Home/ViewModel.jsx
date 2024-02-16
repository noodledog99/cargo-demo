import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import hironoV2Image from "../../assets/images/hirono-v2-image.png";
import demoSearchedProduct from "../../assets/images/demo-searched-product.png";
import demoImg1 from "../../assets/images/demo-img-1.png";
import demoImg2 from "../../assets/images/demo-img-2.png";

export default function ViewModel() {
  // external hook
  const navigate = useNavigate();

  // initail data
  const initialProductList = [
    {
      id: 1,
      product_name: "Hirono V1",
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
      product_image: demoSearchedProduct,
    },
    {
      id: 3,
      product_name: "Hirono V3",
      price: 580,
      rate: "1.2k",
      product_image: demoImg1,
    },
    {
      id: 4,
      product_name: "Hirono V4",
      price: 580,
      rate: "1.2k",
      product_image: demoImg1,
    },
    {
      id: 5,
      product_name: "Hirono V5",
      price: 580,
      rate: "1.2k",
      product_image: hironoV2Image,
    },
    {
      id: 6,
      product_name: "Hirono V6",
      price: 580,
      rate: "1.2k",
      product_image: demoSearchedProduct,
    },
    {
      id: 7,
      product_name: "Hirono V7",
      price: 580,
      rate: "1.2k",
      product_image: demoImg2,
    },
    {
      id: 8,
      product_name: "Hirono V8",
      price: 580,
      rate: "1.2k",
      product_image: demoImg1,
    },
    {
      id: 9,
      product_name: "Hirono V9",
      price: 580,
      rate: "1.2k",
      product_image: hironoV2Image,
    },
    {
      id: 10,
      product_name: "Hirono V10",
      price: 580,
      rate: "1.2k",
      product_image: demoImg1,
    },
    {
      id: 11,
      product_name: "Hirono V11",
      price: 580,
      rate: "1.2k",
      product_image: demoImg2,
    },
    {
      id: 12,
      product_name: "Hirono V12",
      price: 580,
      rate: "1.2k",
      product_image: hironoV2Image,
    },
    {
      id: 13,
      product_name: "Hirono V13",
      price: 580,
      rate: "1.2k",
      product_image: demoImg2,
    },
  ];
  const initialKeepSearch = [
    {
      id: 1,
      product_name: "Hirono V1",
      price: 580,
      rate: "1.2k",
      product_image: demoSearchedProduct,
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
      product_name: "Hirono V3",
      price: 580,
      rate: "1.2k",
      discount: "",
      reduced_price: 0,
      product_image: demoSearchedProduct,
    },
    {
      id: 4,
      product_name: "Hirono V4",
      price: 580,
      rate: "1.2k",
      product_image: hironoV2Image,
      discount: "",
      reduced_price: 0,
    },
    {
      id: 5,
      product_name: "Hirono V5",
      price: 580,
      rate: "1.2k",
      discount: "",
      reduced_price: 0,
      product_image: demoSearchedProduct,
    },
    {
      id: 6,
      product_name: "Hirono V6",
      price: 580,
      rate: "1.2k",
      product_image: hironoV2Image,
      discount: "",
      reduced_price: 0,
    },
    {
      id: 7,
      product_name: "Hirono V7",
      price: 580,
      rate: "1.2k",
      discount: "35%",
      reduced_price: 0,
      product_image: demoSearchedProduct,
    },
    {
      id: 8,
      product_name: "Hirono V8",
      price: 580,
      rate: "1.2k",
      product_image: hironoV2Image,
      discount: "",
      reduced_price: 0,
    },
    {
      id: 9,
      product_name: "Hirono V9",
      price: 580,
      rate: "1.2k",
      discount: "",
      reduced_price: 0,
      product_image: demoSearchedProduct,
    },
    {
      id: 10,
      product_name: "Hirono V10",
      price: 580,
      rate: "1.2k",
      product_image: hironoV2Image,
      discount: "",
      reduced_price: 0,
    },
    {
      id: 11,
      product_name: "Hirono V11",
      price: 580,
      rate: "1.2k",
      discount: "",
      reduced_price: 0,
      product_image: demoSearchedProduct,
    },
    {
      id: 12,
      product_name: "Hirono V12",
      price: 580,
      rate: "1.2k",
      product_image: hironoV2Image,
      discount: "",
      reduced_price: 0,
    },
    {
      id: 13,
      product_name: "Hirono V13",
      price: 580,
      rate: "1.2k",
      product_image: hironoV2Image,
      discount: "",
      reduced_price: 0,
    },
  ];
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setProductList(initialProductList);
  }, []);

  // search
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const onSubmitSearch = () => {
    setSearch("");
    setSearchResults((prev) => {
      const existedId = prev.map((v) => v.id);
      const newSearch = initialKeepSearch.find(
        (v) => !existedId.includes(v.id),
      );

      return [...prev, newSearch];
    });

    // const newSearch = initialKeepSearch.slice(0, 3);
    // setSearchResults(newSearch);
  };

  const goProductDetail = (id) => {
    navigate(`/product-detail/${id}`);
  };

  return {
    productList,
    search,
    setSearch,
    searchResults,
    goProductDetail,
    onSubmitSearch,
  };
}
