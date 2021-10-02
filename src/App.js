import React, { useCallback, useRef } from "react";
import QuickPinchZoom, { make3dTransformValue } from "react-quick-pinch-zoom";
import image1 from "./base_bw.png"; // with import

function App() {
  const imgRef = useRef();
  const onUpdate = useCallback(({ x, y, scale }) => {
    const { current: img } = imgRef;

    if (img) {
      const value = make3dTransformValue({ x, y, scale });

      img.style.setProperty("transform", value);
    }
  }, []);

  return (
    <QuickPinchZoom onUpdate={onUpdate}>
      <img ref={imgRef} src={image1} />
    </QuickPinchZoom>
  );
}
export default App;
