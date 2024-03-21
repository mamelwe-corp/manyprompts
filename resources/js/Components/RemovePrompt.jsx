import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { Button } from "@/Components/ui/button";
import { TrashIcon } from "@radix-ui/react-icons";
import { useForm } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
import { useState } from "react";
const RemovePrompt = ({ Prompt }) => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Dialog
                key={Prompt.id}
                open={open}
                onOpenChange={() => setOpen(!open)}
            >
                <DialogTrigger asChild>
                    <Button
                        variant="destructive"
                        size="icon"
                        onClick={() => setOpen(true)}
                    >
                        <TrashIcon />
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Remove Prompt</DialogTitle>
                        <DialogDescription>
                            Are you sure you want to remove this prompt?
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex items-center justify-end gap-2">
                        <Link
                            href={route("prompts.destroy", Prompt.id)}
                            method="delete"
                        >
                            <Button variant="danger" size="sm">
                                Remove
                            </Button>
                        </Link>
                        <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => setOpen(false)}
                        >
                            Cancel
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default RemovePrompt;
