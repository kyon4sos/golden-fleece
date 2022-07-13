import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import App from "./App";

// import 'antd/lib/style/themes/default.less';
import "antd/dist/antd.variable.min.css";

ConfigProvider.config({
  theme: {
    primaryColor: "#2da19b",
  },
});
// match({ history, routes }, (error, redirectLocation, renderProps) => {
//   if (!error) {

//   } else {
//     console.error(error);
//     // todo: 错误信息收集
//   }
// });
ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>

  // </React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
