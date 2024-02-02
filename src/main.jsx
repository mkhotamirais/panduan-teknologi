import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Html from "./pages/start/html/Html";
import Css from "./pages/start/css/Css";
import Javascript from "./pages/start/javascript/Javascript";
import Start from "./pages/start/Start";
import StartLayout from "./pages/start/StartLayout";
import DatabasesLayout from "./pages/databases/DatabasesLayout";
import Databases from "./pages/databases/Databases";
import Mysql from "./pages/databases/mysql/Mysql";
import Mongodb from "./pages/databases/mongodb/Mongodb";
import NodejsLayout from "./pages/nodejs/NodejsLayout";
import Nodejs from "./pages/nodejs/Nodejs";
import Nodemodules from "./pages/nodejs/nodemodules/Nodemodules";
import Npm from "./pages/nodejs/npm/Npm";
import NpmLayout from "./pages/nodejs/npm/NpmLayout";
import Express from "./pages/nodejs/npm/npmServer/express/Express";
import NpmServerLayout from "./pages/nodejs/npm/npmServer/NpmServerLayout";
import NpmServer from "./pages/nodejs/npm/npmServer/NpmServer";
import NpmClientLayout from "./pages/nodejs/npm/npmClient/NpmClientLayout";
import NpmClient from "./pages/nodejs/npm/npmClient/NpmClient";
import ReactRouterDom from "./pages/nodejs/npm/npmClient/reactRouterDom/ReactRouterDom";
import JavascriptLayout from "./pages/start/javascript/JavascriptLayout";
import JsBasic from "./pages/start/javascript/jsBasic/JsBasic";
import JsFunctions from "./pages/start/javascript/jsFunctions/JsFunctions";
import JsAdvance from "./pages/start/javascript/jsAdvance/JsAdvance";
import JsCases from "./pages/start/javascript/jsCases/JsCases";
import JsModuleLayout from "./pages/start/javascript/jsModule/JsModuleLayout";
import JsModule from "./pages/start/javascript/jsModule/JsModule";
import Es5Module1 from "./pages/start/javascript/jsModule/es5Module/Es5Module1";
import Es5Module2 from "./pages/start/javascript/jsModule/es5Module/Es5Module2";
import Es5Module3 from "./pages/start/javascript/jsModule/es5Module/Es5Module3";
import Es5ModuleIndex from "./pages/start/javascript/jsModule/es5Module/Es5ModuleIndex";
import Es6ModuleIndex from "./pages/start/javascript/jsModule/es6Module/Es6ModuleIndex";
import Es6Module1 from "./pages/start/javascript/jsModule/es6Module/es6Module1";
import NodemodulesLayout from "./pages/nodejs/nodemodules/NodemodulesLayout";
import Http from "./pages/nodejs/nodemodules/http/Http";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="start" element={<StartLayout />}>
        <Route index element={<Start />} />
        <Route path="html" element={<Html />} />
        <Route path="css" element={<Css />} />
        <Route path="javascript" element={<JavascriptLayout />}>
          <Route index element={<Javascript />} />
          <Route path="jsBasic" element={<JsBasic />} />
          <Route path="jsFunctions" element={<JsFunctions />} />
          <Route path="jsAdvance" element={<JsAdvance />} />
          <Route path="jsCases" element={<JsCases />} />
          <Route path="jsModule" element={<JsModuleLayout />}>
            <Route index element={<JsModule />} />
            <Route path="es5ModuleIndex" element={<Es5ModuleIndex />} />
            <Route path="es5Module1" element={<Es5Module1 />} />
            <Route path="es5Module2" element={<Es5Module2 />} />
            <Route path="es5Module3" element={<Es5Module3 />} />
            <Route path="es6ModuleIndex" element={<Es6ModuleIndex />} />
            <Route path="es6Module1" element={<Es6Module1 />} />
          </Route>
          <Route path="jsEs6Module" element={<JsCases />} />
        </Route>
      </Route>
      <Route path="databases" element={<DatabasesLayout />}>
        <Route index element={<Databases />} />
        <Route path="mysql" element={<Mysql />} />
        <Route path="mongodb" element={<Mongodb />} />
      </Route>
      <Route path="nodejs" element={<NodejsLayout />}>
        <Route index element={<Nodejs />} />
        <Route path="nodemodules" element={<NodemodulesLayout />}>
          <Route index element={<Nodemodules />} />
          <Route path="http" element={<Http />} />
        </Route>
        <Route path="npm" element={<NpmLayout />}>
          <Route index element={<Npm />} />
          <Route path="npmclient" element={<NpmClientLayout />}>
            <Route index element={<NpmClient />} />
            <Route path="reactRouterDom" element={<ReactRouterDom />} />
          </Route>
          <Route path="npmserver" element={<NpmServerLayout />}>
            <Route index element={<NpmServer />} />
            <Route path="express" element={<Express />} />
          </Route>
        </Route>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
