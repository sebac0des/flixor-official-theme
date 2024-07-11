// React cache
import { cache } from "react";

// Types
import { BenefitItem } from "@/types";

// Static data
import data from '@/data/benefits'


// Get all benefits from static data, replace with API service
export const getBusinessBenefits = cache(async ():Promise<BenefitItem[]> =>  data);

