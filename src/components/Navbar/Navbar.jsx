"use client"

import Icon from "../Icon"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation";

function Navbar() {
    const compName = process.env.NEXT_PUBLIC_APP_NAME;
    const { push } = useRouter();

    function logout() {
        push('/');
    }

    return (
        <nav className="app_navbar">
            <h1 className="app_comp_name cursor-pointer">
                {compName}
            </h1>
            <div>
                <Button className="app_cart_btn" onClick={logout}>
                    <Icon name="LogOut" size="20" />
                </Button>
            </div>
        </nav>
    )
}

export default Navbar