import { FC } from "react"
import { ProductCard } from "./ProductCard"
import { Box, Typography } from "@mui/material"
import { Product } from "../../utils"

interface ItemListProps {
  products: Product[]
}

export const ItemList: FC<ItemListProps> = ({ products }) => {
  if (products.length === 0) {
    return (
      <Typography variant="h4" color="text.secondary" gutterBottom>
        You don't have products
      </Typography>
    )
  }

  return (
    <Box>
      {products.map(product => <ProductCard key={product.productName} {...product} />)}
    </Box>
  )
}