import { jsx, Fragment } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
function Welcome({ auth, laravelVersion, phpVersion }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Head, { title: "Welcome" }) });
}
export {
  Welcome as default
};
