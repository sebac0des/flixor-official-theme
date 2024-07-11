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

// Get single product by slug from fake API service
export const getProductBySlug = cache(async (slug: string): Promise<Product> => {
    const findProductBySlug = Products.find(product => product.slug === slug);
    
    if (!findProductBySlug) {
        throw new Error(`Product with slug ${slug} not found`);
    }

    return findProductBySlug;
});

// Get single product by category from fake API service
export const getProductsByCategory = cache(async (category: string): Promise<Product[]> => {
    const findProductsByCategory = Products.filter(product => product.category === category);
    
    if (!findProductsByCategory) {
        throw new Error(`Product with category ${category} not found`);
    }

    return findProductsByCategory;
});
