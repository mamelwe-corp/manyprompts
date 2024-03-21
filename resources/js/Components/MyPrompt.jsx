import {
    Card,
    CardHeader,
    CardContent,
    CardTitle,
    CardDescription,
} from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import { TrashIcon } from "@radix-ui/react-icons";
import { useEffect } from "react";
import PromptEdit from "@/Components/PromptEdit";
import RemovePrompt from "./RemovePrompt";
import { managePrompt } from "@/lib/utils";
import ViewPrompt from "./ViewPrompt";
const MyPrompt = ({ auth, Prompt, Key }) => {
    const createdAt = new Date(Prompt.created_at);
    const updatedAt = new Date(Prompt.updated_at);

    const createdAtString = createdAt.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    useEffect(() => {
        console.log();
    }, []);

    return (
        <Card key={Key}>
            <CardHeader>
                <CardTitle className="flex">
                    <div className="flex items-center">
                        {route().current("home") ? (
                            <div>
                                {Prompt.user?.name ? (
                                    <Badge className={"mr-2"}>
                                        {Prompt.user?.name}
                                    </Badge>
                                ) : null}
                            </div>
                        ) : null}
                        <span className="text-xl">{Prompt.title}</span>
                    </div>

                    {route().current("home") ? null : (
                        <div className="ml-auto flex gap-2">
                            {auth.user.id === Prompt.user_id ? (
                                <>
                                    <PromptEdit Prompt={Prompt} />
                                    <RemovePrompt Prompt={Prompt} />
                                </>
                            ) : null}
                        </div>
                    )}
                </CardTitle>
                <span className="text-sm">
                    Created: {createdAtString} | Updated:{" "}
                    {updatedAt.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </span>
                <CardDescription className="text-md">
                    {Prompt.description}
                </CardDescription>
            </CardHeader>
            <CardContent className="whitespace-pre-line">
                {route().current("home") ? null : (
                    <div
                        className="bg-primary-foreground p-5 border-[1px] border-border rounded-md"
                        dangerouslySetInnerHTML={{
                            __html: managePrompt(Prompt),
                        }}
                    ></div>
                )}
                {route().current("home") ? (
                    <ViewPrompt Prompt={Prompt} />
                ) : null}
            </CardContent>
        </Card>
    );
};

export default MyPrompt;
