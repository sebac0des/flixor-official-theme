// React cache
import { cache } from "react";

// Types
import { Product } from "@/types";

// Fake data
import { Products, PopularProducts } from '@/data/products'


// Get all products from fake API service
export const getAllProducts = cache(async ():Promise<Product[]> =>  Products);

// Get popular products from fake API service
export const getPopularProducts = cache(async ():Promise<Product[]> =>  PopularProducts);

