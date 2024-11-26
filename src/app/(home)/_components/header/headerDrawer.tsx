import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

export default function HeaderDrawer() {
    
    return(
        <Drawer direction="right">
        <DrawerTrigger className="lg:hidden">Open</DrawerTrigger>
        <DrawerContent className="lg:hidden">
            <DrawerHeader>
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription>This action cannot be undone.</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                </DrawerClose>
            </DrawerFooter>
        </DrawerContent>
        </Drawer>

    )
}