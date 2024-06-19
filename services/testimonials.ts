// React cache
import { cache } from "react";

// Types
import { Testimonial } from "@/types";

// Fake data
import Data from '@/data/testimonials'


// Get all products from fake API service
export const getTestimonials = cache(async ():Promise<Testimonial[]> =>  Data);



