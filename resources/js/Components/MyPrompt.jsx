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
                    (color) => !variableColors.find((vc) => vc.color === color)
                );
                variableColors[index].color = newColor;
            }
        });

        //replace the variables with spans with the color

        promptString = promptString.replace(/{@.*?}/g, (match) => {
            let color = variableColors.find((vc) => vc.variable === match).color
                .code;
            return `<span style="color:${color}">${match}</span>`;
        });

        return promptString;
    };

    useEffect(() => {
        console.log();
    }, []);

    return (
        <Card key={Key}>
            <CardHeader>
                <CardTitle className="flex">
                    <div className="flex">
                        <div>
                            {Prompt.user?.name ? (
                                <Badge className={"mr-2"}>
                                    {Prompt.user?.name}
                                </Badge>
                            ) : null}
                        </div>
                        <span>{Prompt.title}</span>
                    </div>

                    <div className="ml-auto">
                        {auth.user.id === Prompt.user_id ? (
                            <Button
                                className="ml-auto"
                                size="icon"
                                variant="destructive"
                            >
                                <TrashIcon />
                            </Button>
                        ) : null}
                    </div>
                </CardTitle>
                <span>
                    Created: {createdAtString} | Updated:{" "}
                    {updatedAt.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </span>
                <CardDescription>{Prompt.description}</CardDescription>
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
