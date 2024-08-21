import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { FC } from 'react';
import { Product } from '../../utils';

interface AddProductFormProps {
  addNewProduct: (data: Product) => void; 
}

export const AddProductForm: FC<AddProductFormProps> = ({ addNewProduct }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<Product>()

  const onSubmit: SubmitHandler<Product> = (data) => {
    addNewProduct(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <TextField 
          {...register("productName", { required: "Product name is required" })} 
          label="Product name" 
          variant="standard"
          error={!!errors.productName} 
          helperText={errors.productName?.message}
          sx={{ width: 400 }}/>
      </Box>
      <Box>
        <TextField 
          type="number" 
          InputProps={{ inputProps: { step: "0.01" }}}
          {...register("price", { required: "Price is required" })} 
          label="Price" 
          variant="standard"
          error={!!errors.price} 
          helperText={errors.price?.message}
          sx={{ width: 400 }}/>
      </Box>
      <FormGroup>
        <FormControlLabel
          control={
            <Controller
              control={control}
              {...register("extraMargin")} 
              render={({ field }) => <Checkbox {...field} checked={field['value'] ?? false} /> }
            />
          }
          label="extra-margin" 
          />
      </FormGroup>
      <FormGroup>
        <FormControlLabel 
          control={
            <Controller
              control={control}
              {...register("taxFree")} 
              render={({ field }) => <Checkbox {...field} checked={field['value'] ?? false} /> }
            />
          }
          label="exempt" />
      </FormGroup>
      <Button type="submit" variant="contained">Add Product</Button>
    </form>
  )
}