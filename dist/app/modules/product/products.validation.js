"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const variantValidationSchema = zod_1.z.object({
    type: zod_1.z.string().min(1, "Type is required"),
    value: zod_1.z.string().min(1, "Value is required"),
});
// Define the inventory schema
const inventoryValidationSchema = zod_1.z.object({
    quantity: zod_1.z.number().nonnegative("Quantity must be a non-negative number"),
    inStock: zod_1.z.boolean().optional(),
});
// Define the main product schema
const productValidationSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Name is required"),
    description: zod_1.z.string().optional(),
    price: zod_1.z.number().min(1, "Price is required"),
    category: zod_1.z.string().min(1, "Category is required"),
    tags: zod_1.z.array(zod_1.z.string().min(1)).nonempty("Tags are required"),
    variants: zod_1.z.array(variantValidationSchema).optional(),
    inventory: inventoryValidationSchema,
});
exports.default = productValidationSchema;
