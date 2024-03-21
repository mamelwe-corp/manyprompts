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
const ViewPrompt = ({ Prompt }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>View</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{Prompt.title}</DialogTitle>
                    <DialogDescription>{Prompt.description}</DialogDescription>
                </DialogHeader>
                <div
                    className="bg-primary-foreground p-5 border-[1px] border-border rounded-md"
                    dangerouslySetInnerHTML={{
                        __html: managePrompt(Prompt),
                    }}
                ></div>
            </DialogContent>
        </Dialog>
    );
};

export default ViewPrompt;
