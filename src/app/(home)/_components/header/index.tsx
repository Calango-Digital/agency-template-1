import Link from "next/link"
import LoginDialog from "./loginDialog"
import RegisterDialog from "./registerDialog"
import HeaderDrawer from "./headerDrawer"


const navItems = [
    {
        title: "Inicio",
        link: "#incio"
    },
    {
        title: "Serviços",
        link: "#serviços"
    },
    {
        title: "Sobre Nós",
        link: "#sobre"
    },
    {
        title: "Projetos",
        link: "#projetos"
    },
    {
        title: "Ajuda",
        link: "#ajuda"
    },
]

export default function Header() {
    
    return (
        <div className="w-full sticky">
            <div className="mx-auto max-w-screen-xl flex items-center justify-between py-4">
                <div className="flex items-center gap-2">
                    <div className="size-10 bg-gray-300 rounded-full"></div>
                    <span className="font-bold text-xl lg:text-2xl">Logo</span>
                </div>

                {/* LARGE */}
                <div className="items-center gap-24 hidden lg:flex">
                    <nav className="flex items-center gap-8 text-lg tracking-wider transition-all">
                        {
                            navItems.map(item => 
                                <Link key={item.title} href={item.link} className="transition-all hover:tracking-widest">
                                    {item.title}
                                </Link>
                        )
                        }
                    </nav>

                    <div className="flex items-center gap-2">
                        <LoginDialog />
                        <RegisterDialog />
                    </div>
                </div>

                {/* SMALL */}

                <HeaderDrawer />
            </div>
        </div>
    )
}