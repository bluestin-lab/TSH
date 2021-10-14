import { useState, useEffect } from "react";

import { RequestResponse } from "../Products.types";

import axios from "axios";

import { useWindowWidth } from "@react-hook/window-size";

const baseURL = process.env.REACT_APP_API_URL;
const url = "/products";

const useRequestProducts = () => {
  const [responseData, setResponseData] = useState<RequestResponse | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [filters, setFilters] = useState({
    search: "",
    active: false,
    promo: false,
    page: 0,
  });

  const windowWidth = useWindowWidth();
  const mobileWidth = 575;
  const productsPerPage = windowWidth <= mobileWidth ? 4 : 8;

  useEffect(() => {
    setLoading(true);

    axios
      .request({
        baseURL,
        url,
        params: {
          search: filters.search || null,
          active: filters.active || null,
          promo: filters.promo || null,
          page: filters.page || null,
          limit: productsPerPage,
        },
      })
      .then((response) => {
        setResponseData(response.data);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      })
      .catch((error) => {
        setLoading(false);
        setIsError(true);
      });
  }, [filters, productsPerPage]);

  return {
    responseData,
    loading,
    isError,
    filters,
    setFilters,
  };
};

export default useRequestProducts;
