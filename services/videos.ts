// React cache
import { cache } from "react";

// Types
import { VideoSliderItem } from "@/types";

// Fake data
import slider_videos from '@/data/videos'


// Get all video in slider content from fake API service
export const getSliderVideos = cache(async ():Promise<VideoSliderItem[]> =>  slider_videos);

