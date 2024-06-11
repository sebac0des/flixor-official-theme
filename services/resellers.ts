"use server";

// Clients
import supabase from "@/clients/supabase";

// React
import { cache } from "react";

// Utils
import { formatTsQueryForPartialSearch } from "@/utils/TsQueryFormatter";
import { Reseller } from "@/types";

export const getResellersByLocation = cache(async (query: string) => {
  const formatQuery = formatTsQueryForPartialSearch(query);

  const { data, error } = await supabase
    .from("resellers")
    .select()
    .textSearch("province_city", formatQuery);

  if (error) console.log(error);

  return data as Reseller[];
});
