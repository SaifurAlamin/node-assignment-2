interface Variant {
  type: string;
  value: string;
}

export type Product = {
  // id:string;
  name: string;
  description?: string;
  price: number;
  category: string;
  tags: string[];
  variants?: Variant[];
  inventory: {
    quantity: number;
    inStock?: boolean;
  };
};
