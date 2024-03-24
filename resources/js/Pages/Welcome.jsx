import { Link, Head } from "@inertiajs/react";
import { useState } from "react";
import ModeToggle from "@/Components/mode-toggle";
import { Button } from "@/Components/ui/button";
import ApplicationLogo from "@/Components/ApplicationLogo";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import MyPrompt from "@/Components/MyPrompt";
import { Separator } from "@/Components/ui/separator";
export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    const fakePrompt = [
        {
            id: 26,
            user_id: 3,
            title: "Post Ideas",
            description:
                "This prompt will generate post ideas for social media",
            prompt: "Create {@ideas} for {@socialMedia} post about {@topic}",
            created_at: "2024-03-24T20:15:54.000000Z",
            updated_at: "2024-03-24T20:15:54.000000Z",
            user: {
                id: 3,
                name: "Andersson",
            },
        },
    ];

    return (
        <>
            <Head title="Welcome" />
            <div className="sticky top-0 bg-background">
                <nav className=" border-b">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                <div className="shrink-0 flex items-center">
                                    <Link href="/">
                                        <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
                                    </Link>
                                </div>

                                <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                    {/* <NavLink
                                        href={route("home")}
                                        active={route().current("home")}
                                    >
                                        Home
                                    </NavLink>
                                    <NavLink
                                        href={route("prompts.index")}
                                        active={route().current(
                                            "prompts.index"
                                        )}
                                    >
                                        My Prompts
                                    </NavLink> */}
                                </div>
                            </div>
                            <div className="items-center justify-center hidden sm:flex gap-3">
                                <ModeToggle />
                                <div className="flex gap-3 ">
                                    <Link
                                        href={route("login")}
                                        className="flex items-center"
                                    >
                                        <Button variant="ghost">Login</Button>
                                    </Link>
                                    <Link
                                        href={route("register")}
                                        className="flex items-center"
                                    >
                                        <Button>Register</Button>
                                    </Link>
                                </div>
                            </div>

                            <div className="-me-2 flex items-center sm:hidden">
                                <Button
                                    onClick={() =>
                                        setShowingNavigationDropdown(
                                            (previousState) => !previousState
                                        )
                                    }
                                    size="icon"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            className={
                                                !showingNavigationDropdown
                                                    ? "inline-flex"
                                                    : "hidden"
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                        <path
                                            className={
                                                showingNavigationDropdown
                                                    ? "inline-flex"
                                                    : "hidden"
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div
                        className={
                            (showingNavigationDropdown ? "block" : "hidden") +
                            " sm:hidden"
                        }
                    >
                        <div className="pt-2 pb-3 space-y-1">
                            <ResponsiveNavLink href={route("login")}>
                                Login
                            </ResponsiveNavLink>
                            <ResponsiveNavLink href={route("register")}>
                                Register
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="w-full p-5">
                <main
                    div
                    className="max-w-4xl mx-auto sm:px-6 lg:px-8 flex flex-col justify-center items-center"
                >
                    <div className="w-full flex flex-col items-center justify-center mt-4 py-[3rem]">
                        <h1 className="text-3xl font-bold text-center">
                            Welcome to{" "}
                            <span className="italic">@MANYPROMPTS</span>
                        </h1>

                        <p className="mt-3 text-lg text-center">
                            Create and share prompts with variables.
                        </p>
                        <div className="max-w-[35rem] pt-10">
                            {fakePrompt.map((prompt) => (
                                <MyPrompt key={prompt.id} Prompt={prompt} />
                            ))}
                        </div>
                    </div>
                    <Separator />
                    <div className="py-5 flex flex-col gap-3 ">
                        <h1 className="text-2xl font-bold w-full">
                            # About the proyect
                        </h1>
                        <p>
                            This project is a simple prompt generator. You can
                            create prompts with variables and share them with
                            others. The base of the project is built with
                            Laravel and React with Inertia.js.
                        </p>
                        <p>
                            For the backend, we are using latest Laravel 11 with
                            Laravel Breeze which provides a simple way to
                            scaffold authentication for the dashboard. We are
                            also using de database migration system that Laravel
                            provides, so you can easily migrate the database. In
                            this case we are using MYSQL.
                        </p>
                    </div>

                    <div className="py-5 flex flex-col gap-3 w-full">
                        <h1 className="text-2xl font-bold w-full">
                            # Participants
                        </h1>
                        <ul
                            className="
                        list-disc ml-12
                        "
                        >
                            <li>Andersson Hadad 30065693</li>
                            <li>Wilder Vara 30581660</li>
                            <li>Steven Paucar 30612529</li>
                            <li>José Pacheco 30581667</li>
                            <li>Daniel Maury 30644530</li>
                        </ul>
                    </div>

                    <div className="py-5 flex flex-col gap-3 w-full">
                        <h1 className="text-2xl font-bold w-full">
                            # Basic Requirements
                        </h1>
                        <ul className="list-disc ml-12">
                            <li>PHP 8.2</li>
                            <li>NodeJS 20</li>
                            <li>Composer</li>
                            <li>XAMPP</li>
                            <li>
                                Add extension=zip in your php.ini file in your
                                php folder. If you are using XAMPP it might be
                                located in XAMPP/PHP/php.ini
                            </li>
                        </ul>
                    </div>

                    <div className="py-5 flex flex-col gap-3 w-full">
                        <h1 className="text-2xl font-bold w-full">
                            # Installation
                        </h1>
                        <p>
                            Please follow the instructions in the README.md file
                        </p>
                    </div>
                </main>
            </div>
            <footer className="border-t">
                <div className="flex flex-col justify-center items-center p-5">
                    <p className="">© 2024 ManyPrompts</p>
                    <a
                        href="https://github.com/mamelwe-corp/manyprompts"
                        target="_blank"
                    >
                        <Button variant="link" className="">
                            Github repository
                        </Button>
                    </a>
                </div>
            </footer>
        </>
    );
}
