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
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Textarea } from "@/Components/ui/textarea";
import { Pencil1Icon } from "@radix-ui/react-icons";
import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/react";
const PromptEdit = ({ Prompt }) => {
    const { data, setData, patch, processing, errors } = useForm({
        title: Prompt.title,
        description: Prompt.description,
        prompt: Prompt.prompt,
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route("myprompts.update", Prompt.id));
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="flex gap-2 items-center justify-center ">
                    <Pencil1Icon />
                    Edit
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Prompt</DialogTitle>
                    <DialogDescription>
                        Edit the prompt below, remember that variables are
                        declared with {"{@variable}"}
                    </DialogDescription>

                    <form onSubmit={submit}>
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="title">Title</Label>

                                <Input
                                    id="title"
                                    type="text"
                                    name="title"
                                    value={data.title}
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                    required
                                />
                                <InputError error={errors.title} />
                            </div>

                            <div>
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    name="description"
                                    value={data.description}
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                    required
                                />

                                <InputError error={errors.description} />
                            </div>

                            <div>
                                <Label htmlFor="prompt">Prompt</Label>
                                <Textarea
                                    id="prompt"
                                    name="prompt"
                                    value={data.prompt}
                                    onChange={(e) =>
                                        setData("prompt", e.target.value)
                                    }
                                    required
                                />

                                <InputError error={errors.prompt} />
                            </div>

                            <div className="flex justify-end space-x-2">
                                <Button type="submit" processing={processing}>
                                    Save
                                </Button>
                            </div>
                        </div>
                    </form>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default PromptEdit;
