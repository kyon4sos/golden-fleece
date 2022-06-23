import { useMemo } from 'react';
import { Route, Switch } from 'react-router-dom'
import DefaultLayout from './layouts/admin';
import routes from './routes';
import { lazyLoad } from './utils'

import { GlobalContext } from './utils/context'

// type RouteItem = Omit<RouteObject, 'element' | 'children'> & {
//   element: string
//   children?: RouteItem[]
// }
const generateRoute = (routes: any[]) => {
  console.log(import.meta.env.BASE_URL);
  const pages = import.meta.glob("./pages/**/[a-z]*.tsx");
  const layouts = import.meta.glob("./layouts/**/[a-z]*.tsx");
  console.log(pages, layouts);
  const arr: any[] = [];
  function _transform(routes: any[], path: string = "", layout: string = "") {
    routes.forEach(route => {
      route._path = path + '/' + route.path
      if (layout) {
        route._layout = layouts[`./layouts/${layout}/index.tsx`];
      }
      if (route.routes && route.routes.length) {
        route._layout = layouts[`./layouts/${route.component}/index.tsx`];
        _transform(route.routes, route.path, route.component);
      } else {
        const _component = pages[`./pages/${route.component}/index.tsx`];
        arr.push({ ...route, _component });
      }
    })
  }
  _transform(routes)
  return arr
}

// const defaultMenus = [
//   {
//     path: '/',
//     name: 'welcome',
//     icon: 'smile',
//     routes: [
//       {
//         path: '/welcome',
//         name: 'one',
//         icon: 'smile',
//         routes: [
//           {
//             path: '/welcome/welcome',
//             name: 'two',
//             icon: 'smile',
//             exact: true,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     path: '/demo',
//     name: 'demo',
//     icon: 'heart',
//   },
// ];


function App() {
  const flattenRoutes = useMemo(() => generateRoute(routes), [routes])
  console.log(flattenRoutes);
  return (
    <GlobalContext.Provider value={{ routes: flattenRoutes }}>
      <Switch>
        {/* {
          flattenRoutes.map((route, idx) => {
            console.log(route);
            return route._layout ? <Route key={idx} path={route._path} component={lazyLoad(route._layout)}></Route>
              : <Route key={idx} path={route._path} component={lazyLoad(route._component)}></Route>
          })
        } */}
        <Route path="/" component={DefaultLayout}></Route>
        <Route path="/403" component={lazyLoad(() => import('./pages/exception/403'))}></Route>
        <Route path="/*" component={lazyLoad(() => import('./pages/exception/404'))}></Route>
      </Switch>
    </GlobalContext.Provider >
  )
}


export default App
