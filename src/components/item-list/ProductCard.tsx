import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { Product } from '../../utils';

export const ProductCard: FC<Product> = ({ productName, price, extraMargin, taxFree }) => {
  return (
    <Card variant="outlined" sx={{ minWidth: 275, mb: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {productName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Price: {price}$
        </Typography>
        <Typography variant="body2">
          extraMargin: {extraMargin?.toString() || 'false'}
          <br />
          taxFree: {taxFree?.toString() || 'false'}
        </Typography>
      </CardContent>
    </Card>
  )
}