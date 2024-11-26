import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  

export default function RegisterDialog() {

    return(
        <Dialog>
        <DialogTrigger asChild>
            <Button variant={"default"} className="text-lg px-8 py-6">
                Cadastre-se
            </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
            </DialogDescription>
            </DialogHeader>
        </DialogContent>
        </Dialog>
    )
}