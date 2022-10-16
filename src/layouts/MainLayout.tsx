import { Outlet } from "react-router"

export const MainLayout = () => {
    return (
        <div className="container mx-auto my-4 px-4 text-sm sm:text-base max-w-5xl">
            <Outlet />
        </div>
    )
}
