import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-CFWYGcB5.js";
import { Head } from "@inertiajs/react";
import { C as Card } from "./card-JrccEbKi.js";
import { useEffect } from "react";
import { M as MyPrompt } from "./MyPrompt-2W9OeZ6u.js";
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
import "./dialog-By_N9euJ.js";
import "@radix-ui/react-dialog";
import "./InputError-PdXTNpsB.js";
function Home({ auth, posts }) {
  useEffect(() => {
    console.log(posts);
  }, [posts]);
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl leading-tight", children: "Home" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Home" }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: [
          /* @__PURE__ */ jsx(Card, { className: "p-6", children: /* @__PURE__ */ jsx("p", { children: "You're logged in!" }) }),
          posts ? /* @__PURE__ */ jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-5", children: posts.map((prompt) => {
            return /* @__PURE__ */ jsx(
              MyPrompt,
              {
                auth,
                Prompt: prompt
              },
              prompt.id
            );
          }) }) }) : /* @__PURE__ */ jsx("p", { children: "No prompts yet" })
        ] }) })
      ]
    }
  );
}
export {
  Home as default
};
