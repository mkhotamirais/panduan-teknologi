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
        </Route>
      </Route>
      <Route path="databases" element={<DatabasesLayout />}>
        <Route index element={<Databases />} />
        <Route path="mysql" element={<Mysql />} />
        <Route path="mongodb" element={<Mongodb />} />
      </Route>
      <Route path="nodejs" element={<NodejsLayout />}>
        <Route index element={<Nodejs />} />
        <Route path="nodemodules" element={<Nodemodules />} />
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
