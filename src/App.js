// import React, { useCallback, useRef } from "react";
// import QuickPinchZoom, { make3dTransformValue } from "react-quick-pinch-zoom";
// import image1 from "./base_bw.png"; // with import

// function App() {
//   const imgRef = useRef();
//   const onUpdate = useCallback(({ x, y, scale }) => {
//     const { current: img } = imgRef;

//     if (img) {
//       const value = make3dTransformValue({ x, y, scale });

//       img.style.setProperty("transform", value);
//     }
//   }, []);

//   return (
//     <QuickPinchZoom onUpdate={onUpdate}>
//       <img ref={imgRef} src={image1} />
//     </QuickPinchZoom>
//   );
// }
// export default App;

import React, { Component } from "react";

import Base from "./components/Base";
import image1 from "./base_bw.png"; // with import
const containerProps = {
  className: "border-container",
};

export default class WithMixedContent extends Component {
  renderChild = ({ innerRef, ...props }) => (
    <div ref={innerRef} {...props}>
      <h3>Food & Drink</h3>
      <p>
        🍏 🍎 🍐 🍊 🍋 🍌 🍉 🍇 🍓 🍈 🍒 🍑 🍍 🍅 🍆 🌶 🌽 🍠 🍯 🍞 🧀 🍗 🍖 🍤
        🍳 🍔 🍟 🌭 🍕 🍝 🌮 🌯 🍜 🍲 🍥 🍣 🍱 🍛 🍙 🍚 🍘 🍢 🍡 🍧 🍨 🍦 🍰 🎂
        🍮 🍬 🍭 🍫 🍿 🍩 🍪 🍺 🍻 🍷 🍸 🍹 🍾 🍶 🍵 ☕️ 🍼 🍴 🍽
      </p>

      <p>
        <a href="https://eosrei.github.io/emojione-color-font/full-demo.html">
          Other unicode emoji..
        </a>
      </p>

      <table>
        <tbody>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>94</td>
          </tr>
        </tbody>
      </table>

      <img
        ref={innerRef}
        alt="flow"
        // Photo by Pascal Habermann on Unsplash
        src={image1}
      />
    </div>
  );

  render() {
    return <Base containerProps={containerProps} Child={this.renderChild} />;
  }
}
