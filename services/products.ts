// React cache
import { cache } from "react";

// Types
import { Product } from "@/types/product";

// Fake data
import { FeaturedProducts, PopularProducts, Products } from '@/data/products'


// Get all products from fake API service
export const getFeaturedProducts = cache(async ():Promise<Product[]> =>  FeaturedProducts);

// Get popular products from fake API service
export const getPopularProducts = cache(async ():Promise<Product[]> =>  PopularProducts);

// Get single product by id from fake API service
export const getProductBySlug = cache(async (slug: string): Promise<Product> => {
    const findProductById = Products.find(product => product.slug === slug);
    
    if (!findProductById) {
        throw new Error(`Product with slug ${slug} not found`);
    }

    return findProductById;
});
