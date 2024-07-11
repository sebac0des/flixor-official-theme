// React cache
import { cache } from "react";

// Types
import { Settings } from "@/types";

// Fake data
import Data from '@/data/settings'


// Get settings from fake API service
export const getSettings = cache(async ():Promise<Settings> =>  Data);



