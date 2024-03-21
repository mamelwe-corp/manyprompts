import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/Components/ui/card";
import InputError from "@/Components/InputError";
import { useRef, useEffect } from "react";

import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
import { Textarea } from "@/Components/ui/textarea";

import MyPrompt from "@/Components/MyPrompt";

export default function Index({ auth, posts }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        description: "",
        prompt: "",
    });

    const submit = (e) => {
        e.preventDefault();
        //console.log(data)
        post(route("prompts.store"), { onSuccess: () => reset() });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl leading-tight">
                    Prompt Maker
                </h2>
            }
        >
            <Head title="My Prompts" />

            <div>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-col gap-5">
                    <Card className="">
                        <CardHeader>
                            <CardTitle>Create a Prompt</CardTitle>
                            <CardDescription>
                                While creating a prompt use {"{@variable}"} to
                                declare a variable.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={submit}>
                                <div>
                                    <Label htmlFor="title" value="Title">
                                        Title
                                    </Label>

                                    <Input
                                        id="title"
                                        name="title"
                                        value={data.title}
                                        className="mt-1 block w-full"
                                        autoComplete="title"
                                        onChange={(e) =>
                                            setData("title", e.target.value)
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.title}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4">
                                    <Label
                                        htmlFor="description"
                                        value="Description"
                                    >
                                        Description
                                    </Label>

                                    <Textarea
                                        id="description"
                                        name="description"
                                        value={data.description}
                                        className="mt-1 block w-full"
                                        autoComplete="description"
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.description}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4">
                                    <Label htmlFor="prompt">Prompts</Label>

                                    <Textarea
                                        id="prompt"
                                        name="prompt"
                                        value={data.prompt}
                                        className="mt-1 block w-full"
                                        autoComplete="prompt"
                                        onChange={(e) =>
                                            setData("prompt", e.target.value)
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.prompt}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4">
                                    <Button
                                        className="w-full"
                                        disabled={processing}
                                    >
                                        Create
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>

                    <div className="mt-4 ">
                        <h2 className="font-semibold text-xl leading-tight mb-5">
                            My Prompts
                        </h2>
                        {posts ? (
                            <div className="mt-5">
                                <div className="flex flex-col gap-5">
                                    {posts.map((prompt) => {
                                        return (
                                            <MyPrompt
                                                auth={auth}
                                                key={prompt.id}
                                                Prompt={prompt}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        ) : (
                            <p>No prompts yet</p>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
