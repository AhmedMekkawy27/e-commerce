import { Grid, GridItem } from "@chakra-ui/react";
import { IDummyProduct, wishlistProduct } from "../../interfaces";
import ProductCard from "../../components/ProductCard";

interface IProps {
  products: IDummyProduct[] | wishlistProduct[];
  wishlist: boolean;
}

const ItemsGrid = ({ products, wishlist }: IProps) => {
  return (
    <Grid templateColumns={"repeat(auto-fill, minmax(290px, 1fr))"} gap={6}>
      {products &&
        products.map((product) => (
          <GridItem key={product.id} display={"flex"} justifyContent={"center"}>
            <ProductCard product={product} wishlist={wishlist} />
          </GridItem>
        ))}
    </Grid>
  );
};

export default ItemsGrid;
