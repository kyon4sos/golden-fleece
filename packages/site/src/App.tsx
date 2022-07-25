import { useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import { IconProvider, DEFAULT_ICON_CONFIGS } from '@icon-park/react'
import BlankLayout from "./layouts/blank";
import { GlobalContext } from "./utils/context";
import "./App.less";
import Home from "./pages/custom/home";
import DefaultLayout from "./layouts/defaultLayout";
import Catalog from "./pages/catalog";

const IconConfig = { ...DEFAULT_ICON_CONFIGS, prefix: 'bd' }


function App() {

  return (
    <GlobalContext.Provider value={{}}>
      <IconProvider value={IconConfig}>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="store" element={<Home />} />
            <Route path="catalog" element={<Catalog />} />
          </Route>
        </Routes>
      </IconProvider>
    </GlobalContext.Provider>
  );
}

export default App;
