import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Chart() {
  const { coinId } = useParams();
  useEffect(() => {}, []);
  return <h1>Chart</h1>;
}
export default Chart;
