import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { AddProductForm, Header, ItemList, Result } from './components';
import { useState } from 'react';
import { Product, ProductsPriceWithTax, calculatePriceWithTax, calculateResult } from './utils';


function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [productPricesWithTax, setProductPricesWithTax] = useState<ProductsPriceWithTax[]>([])
  const [result, setResult] = useState<number>()

  const addNewProduct = (data: any) => {
    setProducts((productsArray) => [...productsArray, data])
  }

  const calculateResultHandler = () => {
    setResult(calculateResult(products))
    setProductPricesWithTax(calculatePriceWithTax(products))
  }

  return (
    <>
      <Header />
      <main>
      <Container maxWidth="xl">
        <Grid container spacing={2} >
          <Grid xs={4}>
            <AddProductForm addNewProduct={addNewProduct} />
          </Grid>
          <Grid xs={4}>
            <Result 
              calculateResult={calculateResultHandler}
              productPricesWithTax={productPricesWithTax} 
              result={result} 
            />
          </Grid>
          <Grid xs={4}>
            <ItemList products={products} />
          </Grid>
        </Grid>
      </Container>
     </main>
    </>
  );
}

export default App;
