import { useRef, useState, useEffect } from "react";
import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/react";

import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import {
    CardHeader,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/Components/ui/card";
export default function DeleteUserForm({ className = "" }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: "",
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route("profile.destroy"), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);
        reset();
    };

    useEffect(() => {
        if (confirmingUserDeletion === false) {
            reset();
        }
    }, [confirmingUserDeletion]);
    return (
        <section className={`space-y-6 ${className}`}>
            <CardHeader>
                <CardTitle>Delete Account</CardTitle>
                <CardDescription>
                    Once your account is deleted, all of its resources and data
                    will be permanently deleted. Before deleting your account,
                    please download any data or information that you wish to
                    retain.
                </CardDescription>
            </CardHeader>

            <CardContent>
                <Dialog
                    className="fixed inset-0 z-10 overflow-y-auto"
                    open={confirmingUserDeletion}
                    onOpenChange={setConfirmingUserDeletion}
                >
                    <DialogTrigger asChild>
                        <Button
                            variant="destructive"
                            onClick={confirmUserDeletion}
                        >
                            Delete Account
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>
                                Are you sure you want to delete your account?
                            </DialogTitle>
                            <DialogDescription>
                                Once your account is deleted, all of its
                                resources and data will be permanently deleted.
                                Please enter your password to confirm you would
                                like to permanently delete your account.
                            </DialogDescription>
                        </DialogHeader>

                        <form onSubmit={deleteUser} className="">
                            <Label htmlFor="password" value="Password">
                                Password
                            </Label>

                            <Input
                                id="password"
                                type="password"
                                name="password"
                                ref={passwordInput}
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                required
                            />

                            <InputError message={errors.password} />

                            <div className="mt-6 flex gap-3 justify-end">
                                <Button
                                    variant="secondary"
                                    onClick={closeModal}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    variant="destructive"
                                    type="submit"
                                    disabled={processing}
                                >
                                    Delete Account
                                </Button>
                            </div>
                        </form>
                    </DialogContent>
                </Dialog>
            </CardContent>
        </section>
    );
}
