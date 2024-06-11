// React
import { cache } from "react";

// Clients
import supabase from "@/clients/supabase";

// Types
import { VideoSliderItem } from "@/types";

export const getAllVideos = cache(async () => {
  let { data: videos, error } = await supabase.from("videos").select("*");

  if (error) throw new Error("Algo no ha salido bien, vuelve a intentarlo");

  return videos as VideoSliderItem[];
});
