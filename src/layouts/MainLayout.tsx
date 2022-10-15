import { Outlet } from "react-router"

export const MainLayout = () => {
    return (
        <div className="container mx-auto my-8 px-2 text-sm sm:text-base">
            <Outlet />
        </div>
    )
}
