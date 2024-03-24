import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Card, CardContent, CardHeader } from "@/Components/ui/card";
import { useEffect } from "react";
import MyPrompt from "@/Components/MyPrompt";
export default function Home({ auth, posts }) {
    // useEffect(() => {
    //     console.log(posts);
    // }, [posts]);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl leading-tight">Home</h2>
            }
        >
            <Head title="Home" />

            <div>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <Card className="p-6">
                        <p>You're logged in!</p>
                    </Card>
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
        </AuthenticatedLayout>
    );
}
