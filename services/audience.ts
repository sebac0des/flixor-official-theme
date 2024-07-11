// React cache
import { cache } from "react";

// Types
import { AudienceItem } from "@/types";

// Static data
import data from '@/data/audience'

// Get all business audience from static data, replace with API service
export const getBusinessAudience = cache(async ():Promise<AudienceItem[]> =>  data);

