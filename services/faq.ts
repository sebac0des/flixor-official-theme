// React cache
import { cache } from "react";

// Types
import { QuestionItem } from "@/types";

// Static data
import { homepage } from '@/data/faq'


// Get all questions (FAQ) from static data, replace with API service
export const getHomepageQuestions = cache(async ():Promise<QuestionItem[]> =>  homepage);

