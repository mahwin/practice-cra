import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import { useQuery } from "react-query";

function Chart() {
  const { coinId } = useParams();
  const { isLoading, data } = useQuery(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId!)
  );
  console.log(data);
  useEffect(() => {}, []);
  return <h1>Chart</h1>;
}
export default Chart;
