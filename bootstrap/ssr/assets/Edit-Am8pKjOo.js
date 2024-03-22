import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-CFWYGcB5.js";
import DeleteUserForm from "./DeleteUserForm-C6oXiEem.js";
import UpdatePasswordForm from "./UpdatePasswordForm-CfwmvYYR.js";
import UpdateProfileInformation from "./UpdateProfileInformationForm-Cn69wv4f.js";
import { Head } from "@inertiajs/react";
import { C as Card } from "./card-JrccEbKi.js";
import "react";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-icons";
import "./label-lAt2y2JW.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-label";
import "clsx";
import "tailwind-merge";
import "lucide-react";
import "../app.js";
import "axios";
import "react-dom/client";
import "prop-types";
import "./InputError-PdXTNpsB.js";
import "./dialog-By_N9euJ.js";
import "@radix-ui/react-dialog";
import "./TextInput-BT-8yndA.js";
import "@headlessui/react";
function Edit({ auth, mustVerifyEmail, status }) {
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl leading-tight", children: "Profile" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Profile" }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-col gap-5", children: [
          /* @__PURE__ */ jsx(Card, { className: "p-6", children: /* @__PURE__ */ jsx(
            UpdateProfileInformation,
            {
              mustVerifyEmail,
              status,
              className: "max-w-xl"
            }
          ) }),
          /* @__PURE__ */ jsx(Card, { className: "p-6", children: /* @__PURE__ */ jsx(UpdatePasswordForm, { className: "max-w-xl" }) }),
          /* @__PURE__ */ jsx(Card, { className: "p-6", children: /* @__PURE__ */ jsx(DeleteUserForm, { className: "max-w-xl" }) })
        ] }) })
      ]
    }
  );
}
export {
  Edit as default
};
