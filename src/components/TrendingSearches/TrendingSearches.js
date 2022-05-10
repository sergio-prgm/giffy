import { useState, useEffect } from "react";
import getTrending from "services/getTrendingTermsService";
import Category from "components/Category";

export default function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(function () {
    getTrending().then(setTrends);
  }, []);

  return <Category categoryName="trending" options={trends} />;
}
