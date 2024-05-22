import { z } from "zod";

const variantValidationSchema = z.object({
    type: z.string().min(1, "Type is required"),
    value: z.string().min(1, "Value is required"),
  });
 
  
  // Define the inventory schema
  const inventoryValidationSchema = z.object({
    quantity: z.number().nonnegative("Quantity must be a non-negative number"),
    inStock: z.boolean().optional(),
  });
  
  // Define the main product schema
  const productValidationSchema = z.object({
    name: z.string().min(1, "Name is required"),
    description: z.string().optional(),
    price: z.number().min(1, "Price is required"),
    category: z.string().min(1, "Category is required"),
    tags: z.array(z.string().min(1)).nonempty("Tags are required"),
    variants: z.array(variantValidationSchema).optional(),
    inventory: inventoryValidationSchema,
  });

  export default productValidationSchema;