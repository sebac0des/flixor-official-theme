export interface HomepageFormSchema {
  fullname: string;
  email: string;
  phone_number?: string;
  message?: string;
}

export interface VideoSliderItem {
  id: number;
  posterUrl: string;
  videoUrl: string;
  title: string;
}

export interface AudienceItem {
    id: number,
    iconImageUrl: string,
    title: string,
    desc: string,
}

export interface Settings {
  social: SocialSettings
}

export interface SocialSettings {
    username: string;
    instagram: string;
    facebook: string;
    tiktok: string;
}

export interface Testimonial {
  id: number;
  name: string;
  reviewFont: string;
  content: string;
  image: string;
}

export interface BenefitItem {
  id: number;
  title: string;
  desc?: string;
}

export interface QuestionItem {
  id: number;
  title: string;
  content: string;
}

export interface QuestionVideoItem {
  id: number;
  posterUrl: string;
  videoUrl: string;
  title: string;
}

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
  images?: string[];
  videos?: string[];
  stock: number;
  categories?: string[];
  created_at?: Date;
  updated_at?: Date;
}

export interface Reseller {
  id: string;
  name: string;
  short_desc?:string
  image:string
  email?: string;
  address?: string;
  province: string;
  phone: string;
  city: string;
  tags?:string[]
  facebook?:string
  instagram?:string
  tiktok?:string
}
