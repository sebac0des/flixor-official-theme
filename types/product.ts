export interface Product {
    id: string; 
    name: string;
    brand: string;
    size: string;
    slug:string
    tagline:string
    description?: string;
    short_desc?: string;
    audience: string;
    price: number;
    discount?: number;
    ingredients?: string[];
    cover_image: string;
    images: string[];
    videos: string[];
    stock: number;
    categories?: string[];
    created_at?: Date;
    updated_at?: Date;
  }