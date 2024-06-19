// React cache
import { cache } from "react";

// Types
import { QuestionItem } from "@/types";

// Fake data
import { homepage } from '@/data/faq'


// Get all questions (FAQ) from fake API service
export const getHomepageQuestions = cache(async ():Promise<QuestionItem[]> =>  homepage);

