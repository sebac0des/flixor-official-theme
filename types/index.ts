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
