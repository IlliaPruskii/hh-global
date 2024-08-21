import { Box, Button, Typography } from "@mui/material";
import { FC } from "react"
import { formatNumber } from "../../utils";

interface ResultProps {
  result?: number;
  calculateResult: () => void;
  productPricesWithTax: any[]
}

export const Result: FC<ResultProps> = ({ 
  calculateResult, 
  result, 
  productPricesWithTax
}) => {
  if (!result) {
    return (
      <Box>
        <Typography variant="h4" color="text.secondary" gutterBottom>
          Press the button
        </Typography>
        <Button onClick={calculateResult} variant="contained">Calculate Result</Button>
      </Box>
    )
  }

  return (
    <Box>
      {productPricesWithTax.map(({ productName, priceWithTax }) => (
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {productName}: {formatNumber(priceWithTax)}$
        </Typography>
      ))}
      <Typography variant="h4" color="text.secondary" gutterBottom>
        Result: {formatNumber(result || 0)}
      </Typography>
    </Box>
  )
}