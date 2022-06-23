import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import 'antd/lib/style/themes/default.less';


// match({ history, routes }, (error, redirectLocation, renderProps) => {
//   if (!error) {


//   } else {
//     console.error(error);
//     // todo: 错误信息收集
//   }
// });
ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>

  // </React.StrictMode>
  <BrowserRouter><App /></BrowserRouter>
)