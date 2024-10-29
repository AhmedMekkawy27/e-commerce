/* eslint-disable @typescript-eslint/no-explicit-any */
import { Grid } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import { IDummyProduct } from "../interfaces";
import { useQuery } from "react-query";
import ProductCardSkeleton from "./ProductCardSkeleton";
import axios from "axios";
const ProductsGrid = () => {
  const getProductList = async () => {
    const data: any = await axios.get("https://dummyjson.com/products");
    return data;
  };

  const { isLoading, data } = useQuery("products", () => getProductList());

  if (isLoading)
    return (
      <Grid
        margin={30}
        templateColumns={"repeat(auto-fill, minmax(300px, 1fr))"}
        gap={6}
      >
        {Array.from({ length: 10 }, (_, idx) => (
          <ProductCardSkeleton key={idx} />
        ))}
      </Grid>
    );
  return (
    <Grid
      margin={30}
      templateColumns={"repeat(auto-fill, minmax(300px, 1fr))"}
      gap={6}
    >
      {data &&
        data.data.products.map((product: IDummyProduct) => (
          <ProductCard wishlist={false} key={product.id} product={product} />
        ))}
    </Grid>
  );
};

export default ProductsGrid;
