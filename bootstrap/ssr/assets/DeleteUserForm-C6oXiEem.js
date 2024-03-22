import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { I as InputError } from "./InputError-PdXTNpsB.js";
import { useForm } from "@inertiajs/react";
import { B as Button, L as Label, I as Input } from "./label-lAt2y2JW.js";
import { D as Dialog, a as DialogTrigger, b as DialogContent, c as DialogHeader, d as DialogTitle, e as DialogDescription } from "./dialog-By_N9euJ.js";
import { a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent } from "./card-JrccEbKi.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-label";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-dialog";
import "@radix-ui/react-icons";
function DeleteUserForm({ className = "" }) {
  const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
  const passwordInput = useRef();
  const {
    data,
    setData,
    delete: destroy,
    processing,
    reset,
    errors
  } = useForm({
    password: ""
  });
  const confirmUserDeletion = () => {
    setConfirmingUserDeletion(true);
  };
  const deleteUser = (e) => {
    e.preventDefault();
    destroy(route("profile.destroy"), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onError: () => passwordInput.current.focus(),
      onFinish: () => reset()
    });
  };
  const closeModal = () => {
    setConfirmingUserDeletion(false);
    reset();
  };
  useEffect(() => {
    if (confirmingUserDeletion === false) {
      reset();
    }
  }, [confirmingUserDeletion]);
  return /* @__PURE__ */ jsxs("section", { className: `space-y-6 ${className}`, children: [
    /* @__PURE__ */ jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsx(CardTitle, { children: "Delete Account" }),
      /* @__PURE__ */ jsx(CardDescription, { children: "Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain." })
    ] }),
    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs(
      Dialog,
      {
        className: "fixed inset-0 z-10 overflow-y-auto",
        open: confirmingUserDeletion,
        onOpenChange: setConfirmingUserDeletion,
        children: [
          /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
            Button,
            {
              variant: "destructive",
              onClick: confirmUserDeletion,
              children: "Delete Account"
            }
          ) }),
          /* @__PURE__ */ jsxs(DialogContent, { children: [
            /* @__PURE__ */ jsxs(DialogHeader, { children: [
              /* @__PURE__ */ jsx(DialogTitle, { children: "Are you sure you want to delete your account?" }),
              /* @__PURE__ */ jsx(DialogDescription, { children: "Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account." })
            ] }),
            /* @__PURE__ */ jsxs("form", { onSubmit: deleteUser, className: "", children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "password", value: "Password", children: "Password" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: "password",
                  type: "password",
                  name: "password",
                  ref: passwordInput,
                  value: data.password,
                  onChange: (e) => setData("password", e.target.value),
                  required: true
                }
              ),
              /* @__PURE__ */ jsx(InputError, { message: errors.password }),
              /* @__PURE__ */ jsxs("div", { className: "mt-6 flex gap-3 justify-end", children: [
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    variant: "secondary",
                    onClick: closeModal,
                    children: "Cancel"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    variant: "destructive",
                    type: "submit",
                    disabled: processing,
                    children: "Delete Account"
                  }
                )
              ] })
            ] })
          ] })
        ]
      }
    ) })
  ] });
}
export {
  DeleteUserForm as default
};
