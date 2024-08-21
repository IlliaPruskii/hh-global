export type Product = {
  productName: string
  price: number
  extraMargin: boolean
  taxFree: boolean
}

export const calculateResult = (products: Product[]) => {
  return products.reduce((sum, product) => {
    const prices = []

    if (!product.taxFree) {
      prices.push(product.price * 0.07)
    }

    if (product.extraMargin) {
      prices.push(product.price * 0.16)
    } else {
      prices.push(product.price * 0.11)
    }

    return sum + prices.reduce((a, b) => Number(a) + Number(b), product.price)
  }, 0)
}

export type ProductsPriceWithTax = {
  productName: string
  priceWithTax: number
}

export const calculatePriceWithTax = (products: Product[]) => {
  return products.reduce((productsPrices: ProductsPriceWithTax[], product) => {
    const prices = []

    if (!product.taxFree) {
      prices.push(product.price * 0.07)
    }

    return [...productsPrices, { 
      productName: product.productName, 
      priceWithTax: product.taxFree ? product.price : product.price * 1.07
    }]
  }, [])
}

export const formatNumber = (num: number) => {
  let truncatedNum = Math.trunc(num * 100) / 100;
  return truncatedNum.toFixed(2);
}