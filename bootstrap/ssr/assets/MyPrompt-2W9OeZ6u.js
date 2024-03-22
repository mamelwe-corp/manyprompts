import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "./card-JrccEbKi.js";
import * as React from "react";
import { useState, useEffect } from "react";
import { cva } from "class-variance-authority";
import { c as cn, B as Button, L as Label, I as Input, m as managePrompt } from "./label-lAt2y2JW.js";
import { D as Dialog, a as DialogTrigger, b as DialogContent, c as DialogHeader, d as DialogTitle, e as DialogDescription } from "./dialog-By_N9euJ.js";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { I as InputError } from "./InputError-PdXTNpsB.js";
import { useForm, Link } from "@inertiajs/react";
const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant,
  ...props
}) {
  return /* @__PURE__ */ jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}
const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      className: cn(
        "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ref,
      ...props
    }
  );
});
Textarea.displayName = "Textarea";
const PromptEdit = ({ Prompt }) => {
  const { data, setData, patch, processing, errors } = useForm({
    title: Prompt.title,
    description: Prompt.description,
    prompt: Prompt.prompt
  });
  const [open, setOpen] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    patch(route("prompts.update", Prompt.id), {
      onSuccess: () => setOpen(false)
    });
  };
  return /* @__PURE__ */ jsxs(Dialog, { open, onOpenChange: () => setOpen(!open), children: [
    /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { className: "flex gap-2 items-center justify-center ", children: [
      /* @__PURE__ */ jsx(Pencil1Icon, {}),
      "Edit"
    ] }) }),
    /* @__PURE__ */ jsx(DialogContent, { children: /* @__PURE__ */ jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsx(DialogTitle, { children: "Edit Prompt" }),
      /* @__PURE__ */ jsxs(DialogDescription, { children: [
        "Edit the prompt below, remember that variables are declared with ",
        "{@variable}"
      ] }),
      /* @__PURE__ */ jsx("form", { onSubmit: submit, children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "title", children: "Title" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "title",
              type: "text",
              name: "title",
              value: data.title,
              onChange: (e) => setData("title", e.target.value),
              required: true
            }
          ),
          /* @__PURE__ */ jsx(InputError, { error: errors.title })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "description", children: "Description" }),
          /* @__PURE__ */ jsx(
            Textarea,
            {
              id: "description",
              name: "description",
              value: data.description,
              onChange: (e) => setData("description", e.target.value),
              required: true
            }
          ),
          /* @__PURE__ */ jsx(InputError, { error: errors.description })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "prompt", children: "Prompt" }),
          /* @__PURE__ */ jsx(
            Textarea,
            {
              id: "prompt",
              name: "prompt",
              value: data.prompt,
              onChange: (e) => setData("prompt", e.target.value),
              required: true
            }
          ),
          /* @__PURE__ */ jsx(InputError, { error: errors.prompt })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-end space-x-2", children: /* @__PURE__ */ jsx(Button, { type: "submit", disabled: processing, children: "Save" }) })
      ] }) })
    ] }) })
  ] });
};
const RemovePrompt = ({ Prompt }) => {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
    Dialog,
    {
      open,
      onOpenChange: () => setOpen(!open),
      children: [
        /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
          Button,
          {
            variant: "destructive",
            size: "icon",
            onClick: () => setOpen(true),
            children: /* @__PURE__ */ jsx(TrashIcon, {})
          }
        ) }),
        /* @__PURE__ */ jsxs(DialogContent, { children: [
          /* @__PURE__ */ jsxs(DialogHeader, { children: [
            /* @__PURE__ */ jsx(DialogTitle, { children: "Remove Prompt" }),
            /* @__PURE__ */ jsx(DialogDescription, { children: "Are you sure you want to remove this prompt?" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-2", children: [
            /* @__PURE__ */ jsx(
              Link,
              {
                href: route("prompts.destroy", Prompt.id),
                method: "delete",
                children: /* @__PURE__ */ jsx(Button, { variant: "danger", size: "sm", children: "Remove" })
              }
            ),
            /* @__PURE__ */ jsx(
              Button,
              {
                variant: "secondary",
                size: "sm",
                onClick: () => setOpen(false),
                children: "Cancel"
              }
            )
          ] })
        ] })
      ]
    },
    Prompt.id
  ) });
};
const ViewPrompt = ({ Prompt }) => {
  const [newPrompt, setNewPrompt] = useState(Prompt.prompt);
  const [variables, setVariables] = useState([]);
  const createdAt = new Date(Prompt.created_at);
  const updatedAt = new Date(Prompt.updated_at);
  useEffect(() => {
    const regex = /{@(.*?)}/g;
    const matches = Prompt.prompt.match(regex);
    if (matches) {
      const unique = [...new Set(matches)];
      const variables2 = unique.map((variable) => {
        return { variable, value: "" };
      });
      setVariables(variables2);
    }
  }, []);
  const onSubmit = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(newPrompt);
  };
  useEffect(() => {
    console.log("new", newPrompt);
  }, [newPrompt]);
  return /* @__PURE__ */ jsxs(Dialog, { children: [
    /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { children: "View" }) }),
    /* @__PURE__ */ jsxs(DialogContent, { className: "max-w-[50rem] ", children: [
      /* @__PURE__ */ jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsx(DialogTitle, { children: Prompt.title }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Created:",
          " ",
          createdAt.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
          }),
          " ",
          "| Updated:",
          " ",
          updatedAt.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
          })
        ] }),
        /* @__PURE__ */ jsx(DialogDescription, { children: Prompt.description })
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit, className: "flex flex-col gap-3", children: [
        variables.map((variable, index) => {
          return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: variable.variable, children: variable.variable }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: variable.variable,
                type: "text",
                name: variable.variable,
                value: variable.value,
                onChange: (e) => {
                  const newVariables = [...variables];
                  newVariables[index].value = e.target.value;
                  setVariables(newVariables);
                  let p = Prompt.prompt;
                  console.log("variables", variables);
                  console.log("old", newPrompt);
                  variables.forEach((variable2) => {
                    p = p.replaceAll(
                      variable2.variable,
                      variable2.value
                    );
                  });
                  setNewPrompt(p);
                }
              }
            )
          ] }, index);
        }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "bg-primary-foreground p-5 border-[1px] border-border rounded-md",
            dangerouslySetInnerHTML: {
              __html: managePrompt(Prompt)
            }
          }
        ),
        /* @__PURE__ */ jsx("p", { children: "Result:" }),
        /* @__PURE__ */ jsxs("div", { className: "relative bg-primary-foreground p-5 border-[1px] border-border rounded-md pt-9", children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              type: "submit",
              variant: "ghost",
              className: "absolute right-0 top-0 m-2 text-sm h-7",
              children: "Copy"
            }
          ),
          newPrompt
        ] })
      ] })
    ] })
  ] });
};
const MyPrompt = ({ auth, Prompt, Key }) => {
  var _a, _b;
  const createdAt = new Date(Prompt.created_at);
  const updatedAt = new Date(Prompt.updated_at);
  const createdAtString = createdAt.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  useEffect(() => {
    console.log();
  }, []);
  return /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsxs(CardTitle, { className: "flex", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          route().current("home") ? /* @__PURE__ */ jsx("div", { children: ((_a = Prompt.user) == null ? void 0 : _a.name) ? /* @__PURE__ */ jsx(Badge, { className: "mr-2", children: (_b = Prompt.user) == null ? void 0 : _b.name }) : null }) : null,
          /* @__PURE__ */ jsx("span", { className: "text-xl", children: Prompt.title })
        ] }),
        route().current("home") ? null : /* @__PURE__ */ jsx("div", { className: "ml-auto flex gap-2", children: auth.user.id === Prompt.user_id ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(PromptEdit, { Prompt }),
          /* @__PURE__ */ jsx(RemovePrompt, { Prompt })
        ] }) : null })
      ] }),
      /* @__PURE__ */ jsxs("span", { className: "text-sm", children: [
        "Created: ",
        createdAtString,
        " | Updated:",
        " ",
        updatedAt.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric"
        })
      ] }),
      /* @__PURE__ */ jsx(CardDescription, { className: "text-md", children: Prompt.description })
    ] }),
    /* @__PURE__ */ jsxs(CardContent, { className: "whitespace-pre-line", children: [
      route().current("home") ? null : /* @__PURE__ */ jsx(
        "div",
        {
          className: "bg-primary-foreground p-5 border-[1px] border-border rounded-md",
          dangerouslySetInnerHTML: {
            __html: managePrompt(Prompt)
          }
        }
      ),
      route().current("home") ? /* @__PURE__ */ jsx(ViewPrompt, { Prompt }) : null
    ] })
  ] }, Key);
};
const MyPrompt$1 = MyPrompt;
export {
  MyPrompt$1 as M,
  Textarea as T
};
