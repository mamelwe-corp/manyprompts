import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { Button } from "@/Components/ui/button";
import { managePrompt } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const ViewPrompt = ({ Prompt }) => {
    const [newPrompt, setNewPrompt] = useState(Prompt.prompt);
    const [variables, setVariables] = useState([]);
    const createdAt = new Date(Prompt.created_at);
    const updatedAt = new Date(Prompt.updated_at);

    useEffect(() => {
        const regex = /{@(.*?)}/g;
        const matches = Prompt.prompt.match(regex);
        if (matches) {
            // remove duplicates
            const unique = [...new Set(matches)];

            const variables = unique.map((variable) => {
                return { variable: variable, value: "" };
            });
            setVariables(variables);
        }
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        //copy to clipboard
        navigator.clipboard.writeText(newPrompt);
    };

    useEffect(() => {
        console.log("new", newPrompt);
    }, [newPrompt]);
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>View</Button>
            </DialogTrigger>
            <DialogContent className="max-w-[50rem] ">
                <DialogHeader>
                    <DialogTitle>{Prompt.title}</DialogTitle>
                    <p>
                        Created:{" "}
                        {createdAt.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}{" "}
                        | Updated:{" "}
                        {updatedAt.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </p>
                    <DialogDescription>{Prompt.description}</DialogDescription>
                </DialogHeader>
                <form onSubmit={onSubmit} className="flex flex-col gap-3">
                    {variables.map((variable, index) => {
                        return (
                            <div key={index} className="flex flex-col gap-2">
                                <Label htmlFor={variable.variable}>
                                    {variable.variable}
                                </Label>
                                <Input
                                    id={variable.variable}
                                    type="text"
                                    name={variable.variable}
                                    value={variable.value}
                                    onChange={(e) => {
                                        const newVariables = [...variables];
                                        newVariables[index].value =
                                            e.target.value;
                                        setVariables(newVariables);
                                        let p = Prompt.prompt;
                                        console.log("variables", variables);
                                        console.log("old", newPrompt);
                                        variables.forEach((variable) => {
                                            p = p.replaceAll(
                                                variable.variable,
                                                variable.value
                                            );
                                        });
                                        setNewPrompt(p);
                                    }}
                                />
                            </div>
                        );
                    })}

                    <div
                        className="bg-primary-foreground p-5 border-[1px] border-border rounded-md"
                        dangerouslySetInnerHTML={{
                            __html: managePrompt(Prompt),
                        }}
                    ></div>
                    <p>Result:</p>
                    <div className="relative bg-primary-foreground p-5 border-[1px] border-border rounded-md pt-9">
                        <Button
                            type="submit"
                            variant="ghost"
                            className="absolute right-0 top-0 m-2 text-sm h-7"
                        >
                            Copy
                        </Button>
                        {newPrompt}
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default ViewPrompt;
