import { Schema, model } from 'mongoose';
import { Product } from './product.interface';

const variantSchema = new Schema({
    type: { type: String, required: true },
    value: { type: String, required: true }
});
const productSchema = new Schema<Product>({
   name:{type:String,required:true},
   description:{type:String},
   price:{type:Number,required:true},
   category:{type:String,required:true},
   tags:{
    type:[String],
    required:true
   },
   variants: [variantSchema],
   inventory: {
    quantity: {
      type: Number,
      required: true,
    },
    inStock: {
      type: Boolean,
    },
  },
  });
  export const ProductModel = model<Product>('Product', productSchema);