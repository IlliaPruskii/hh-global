import { calculatePriceWithTax, calculateResult } from "./utils"

describe('calculateResult', () => {
  it('should return correct price for products with extra-margin', () => {
    const result = calculateResult([
      {
        productName: 'product 2',
        price: 520.00,
        extraMargin: false,
        taxFree: false
      },
      {
        productName: 'product 2',
        price: 300.00,
        extraMargin: false,
        taxFree: false
      }
    ])

    expect(result).toBe(967.6)
  })

  it('should return correct price for products with taxes', () => {
    const result = calculateResult([
      {
        productName: 'product 1',
        price: 520.00,
        extraMargin: false,
        taxFree: false
      },
    ])

    expect(result).toBe(613.6)
  })

  it('should return correct price for products without taxes', () => {
    const result = calculateResult([
      {
        productName: 'product 1',
        price: 520.00,
        extraMargin: false,
        taxFree: true
      },
      {
        productName: 'product 2',
        price: 300.00,
        extraMargin: false,
        taxFree: false
      }
    ])

    expect(result).toBe(931.2)
  })

  it('should return correct price for products with extra margin', () => {
    const result = calculateResult([
      {
        productName: 'product 1',
        price: 520.00,
        extraMargin: true,
        taxFree: false
      },
      {
        productName: 'product 2',
        price: 300.00,
        extraMargin: true,
        taxFree: false
      }
    ])

    expect(result).toBe(1008.6)
  })
})

describe('calculatePriceWithTax', () => {
  it('should return array for products with taxes', () => {
    const result = calculatePriceWithTax([
      {
        productName: 'product 1',
        price: 520.00,
        extraMargin: true,
        taxFree: false
      },
      {
        productName: 'product 2',
        price: 300.00,
        extraMargin: true,
        taxFree: false
      }
    ])

    expect(result).toStrictEqual(
      [
        {priceWithTax: 556.4, productName: "product 1"}, 
        {priceWithTax: 321, productName: "product 2"}
      ]
    )
  })

  it('should return array for products without taxes', () => {
    const result = calculatePriceWithTax([
      {
        productName: 'product 1',
        price: 520.00,
        extraMargin: true,
        taxFree: true
      },
      {
        productName: 'product 2',
        price: 300.00,
        extraMargin: true,
        taxFree: true
      }
    ])

    expect(result).toStrictEqual(
      [
        {priceWithTax: 520, productName: "product 1"}, 
        {priceWithTax: 300, productName: "product 2"}
      ]
    )
  })
})