import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-CFWYGcB5.js";
import { useForm, Head } from "@inertiajs/react";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "./card-JrccEbKi.js";
import { I as InputError } from "./InputError-PdXTNpsB.js";
import "react";
import { L as Label, I as Input, B as Button } from "./label-lAt2y2JW.js";
import { T as Textarea, M as MyPrompt } from "./MyPrompt-2W9OeZ6u.js";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-icons";
import "lucide-react";
import "../app.js";
import "axios";
import "react-dom/client";
import "prop-types";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-label";
import "clsx";
import "tailwind-merge";
import "./dialog-By_N9euJ.js";
import "@radix-ui/react-dialog";
function Index({ auth, posts }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    title: "",
    description: "",
    prompt: ""
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("prompts.store"), { onSuccess: () => reset() });
  };
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl leading-tight", children: "Prompt Maker" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "My Prompts" }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-col gap-5", children: [
          /* @__PURE__ */ jsxs(Card, { className: "", children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsx(CardTitle, { children: "Create a Prompt" }),
              /* @__PURE__ */ jsxs(CardDescription, { children: [
                "While creating a prompt use ",
                "{@variable}",
                " to declare a variable."
              ] })
            ] }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "title", value: "Title", children: "Title" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    id: "title",
                    name: "title",
                    value: data.title,
                    className: "mt-1 block w-full",
                    autoComplete: "title",
                    onChange: (e) => setData("title", e.target.value),
                    required: true
                  }
                ),
                /* @__PURE__ */ jsx(
                  InputError,
                  {
                    message: errors.title,
                    className: "mt-2"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
                /* @__PURE__ */ jsx(
                  Label,
                  {
                    htmlFor: "description",
                    value: "Description",
                    children: "Description"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Textarea,
                  {
                    id: "description",
                    name: "description",
                    value: data.description,
                    className: "mt-1 block w-full",
                    autoComplete: "description",
                    onChange: (e) => setData(
                      "description",
                      e.target.value
                    ),
                    required: true
                  }
                ),
                /* @__PURE__ */ jsx(
                  InputError,
                  {
                    message: errors.description,
                    className: "mt-2"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "prompt", children: "Prompts" }),
                /* @__PURE__ */ jsx(
                  Textarea,
                  {
                    id: "prompt",
                    name: "prompt",
                    value: data.prompt,
                    className: "mt-1 block w-full",
                    autoComplete: "prompt",
                    onChange: (e) => setData("prompt", e.target.value),
                    required: true
                  }
                ),
                /* @__PURE__ */ jsx(
                  InputError,
                  {
                    message: errors.prompt,
                    className: "mt-2"
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx(
                Button,
                {
                  className: "w-full",
                  disabled: processing,
                  children: "Create"
                }
              ) })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 ", children: [
            /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl leading-tight mb-5", children: "My Prompts" }),
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
          ] })
        ] }) })
      ]
    }
  );
}
export {
  Index as default
};
