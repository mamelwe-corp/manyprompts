import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export const managePrompt = (Prompt) => {
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

    let promptString = Prompt.prompt;
    let variables = promptString.match(/{@.*?}/g);

    if (variables) {
        variables = variables.filter((item, index) => {
            return variables.indexOf(item) === index;
        });

        let variableColors = variables.map((variable) => {
            return {
                variable: variable,
                color: colors[Math.floor(Math.random() * colors.length)],
            };
        });

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

        promptString = promptString.replace(/{@.*?}/g, (match) => {
            let color = variableColors.find((vc) => vc.variable === match).color
                .code;
            return `<span style="color:${color}; background-color: 
            ${color}20; padding: 0rem 0.15rem; border-radius: 0.25rem
            ">${match}</span>`;
        });
    }

    return promptString;
};
