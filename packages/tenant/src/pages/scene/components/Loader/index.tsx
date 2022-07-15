import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(2)}% loaded</Html>;
};
export default Loader;
