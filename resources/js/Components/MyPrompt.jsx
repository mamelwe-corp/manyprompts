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
const MyPrompt = ({ auth, Prompt, Key }) => {
    const colors = [
        {
            name: "Red",
            code: "#EF4444",
        },
        {
            name: "Yellow",
            code: "#F59E0B",
        },
        {
            name: "Green",
            code: "#10B981",
        },
        {
            name: "Blue",
            code: "#3B82F6",
        },
        {
            name: "Indigo",
            code: "#6366F1",
        },
        {
            name: "Purple",
            code: "#8B5CF6",
        },
        {
            name: "Pink",
            code: "#EC4899",
        },
        {
            name: "Cyan",
            code: "#06B6D4",
        },
        {
            name: "Lime",
            code: "#84CC16",
        },
        {
            name: "Rose",
            code: "#F43F5E",
        },
        {
            name: "Amber",
            code: "#F59E0B",
        },
        {
            name: "Violet",
            code: "#7C3AED",
        },
        {
            name: "Emerald",
            code: "#10B981",
        },
        {
            name: "Sky",
            code: "#0EA5E9",
        },
        {
            name: "Fuchsia",
            code: "#D946EF",
        },
        {
            name: "Cyan",
            code: "#06B6D4",
        },
        {
            name: "LightBlue",
            code: "#93C5FD",
        },
        {
            name: "LightGreen",
            code: "#6EE7B7",
        },
        {
            name: "LightPink",
            code: "#F9A8D4",
        },
        {
            name: "LightRed",
            code: "#FCA5A5",
        },
        {
            name: "LightYellow",
            code: "#FDE68A",
        },
        {
            name: "LightIndigo",
            code: "#A5B4FC",
        },
        {
            name: "LightPurple",
            code: "#D4A8F9",
        },
    ];

    const createdAt = new Date(Prompt.created_at);
    const updatedAt = new Date(Prompt.updated_at);

    const createdAtString = createdAt.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const managePrompt = (Prompt) => {
        // i want to parse the prompt and get the variables. variables are declared like this: {@variable}
        // i want to replace the variables with span tags and give them a random color

        let promptString = Prompt.prompt;
        // make an array of variables
        let variables = promptString.match(/{@.*?}/g);

        //remove duplicates from the array
        if (variables) {
            variables = variables.filter((item, index) => {
                return variables.indexOf(item) === index;
            });

            //create an array of objects with the variable and a random color and do not repeat colors

            let variableColors = variables.map((variable) => {
                return {
                    variable: variable,
                    color: colors[Math.floor(Math.random() * colors.length)],
                };
            });

            // check if the variables have duplicate colors and change the color if they do have the same color

            variableColors.forEach((vc, index) => {
                let duplicate = variableColors.find(
                    (vcc, vccIndex) =>
                        vcc.color.code === vc.color.code && index !== vccIndex
                );
                if (duplicate) {
                    let newColor = colors.find(
                        (color) =>
                            !variableColors.find((vc) => vc.color === color)
                    );
                    variableColors[index].color = newColor;
                }
            });

            //replace the variables with spans with the color

            promptString = promptString.replace(/{@.*?}/g, (match) => {
                let color = variableColors.find((vc) => vc.variable === match)
                    .color.code;
                return `<span style="color:${color};" class="bg-accent px-2 rounded-md">${match}</span>`;
            });
        }

        return promptString;
    };

    useEffect(() => {
        console.log();
    }, []);

    return (
        <Card key={Key}>
            <CardHeader>
                <CardTitle className="flex">
                    <div className="flex items-center">
                        {
                            //if current route is "myprompts" dont show the user name

                            route().current("home") ? (
                                <div>
                                    {Prompt.user?.name ? (
                                        <Badge className={"mr-2"}>
                                            {Prompt.user?.name}
                                        </Badge>
                                    ) : null}
                                </div>
                            ) : null
                        }
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
                <div
                    className="bg-primary-foreground p-5 border-[1px] border-border rounded-md"
                    dangerouslySetInnerHTML={{
                        __html: managePrompt(Prompt),
                    }}
                ></div>
            </CardContent>
        </Card>
    );
};

export default MyPrompt;
