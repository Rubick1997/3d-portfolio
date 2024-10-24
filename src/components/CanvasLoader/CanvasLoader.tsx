import { Html, useProgress } from "@react-three/drei";

function CanvasLoader() {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className="canvas-loader" />
      <p className="text-[14px] text-[#F1F1F1] font-[800] mt-20">
        {progress !== 0 ? `${progress.toFixed()}%` : "Loading..."}
      </p>
    </Html>
  );
}

export default CanvasLoader;
