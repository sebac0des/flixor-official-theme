// React cache
import { cache } from "react";

// Types
import { Product } from "@/types";

// Fake data
import { FeaturedProducts, PopularProducts } from '@/data/products'


// Get all products from fake API service
export const getFeaturedProducts = cache(async ():Promise<Product[]> =>  FeaturedProducts);

// Get popular products from fake API service
export const getPopularProducts = cache(async ():Promise<Product[]> =>  PopularProducts);

