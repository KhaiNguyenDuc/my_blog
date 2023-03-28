import Dashboard from "../pages/Admin/Home"
import Home from "../pages/Client/Home"
import routes from "../config/routes"
import ClientLayout from "../layouts/Client/ClientLayout"
import AdminLayout from "../layouts/Admin/AdminLayout"
import User from "../pages/Client/User"
import Users from "../pages/Admin/User"
import Category from "../pages/Client/Category"

const privateRoutes=[
    {
        path: routes.admin.home,
        page: Dashboard,
        layout: AdminLayout,
        roles: ['ADMIN']
    },
    {
        path: routes.admin.user,
        page: Users,
        layout: AdminLayout,
        roles: ['ADMIN']
    }
]

const publicRoutes = [
    {
        path: routes.client.home,
        page: Home,
        layout: ClientLayout
    },
    {
        path: routes.client.user,
        page: User,
        layout: ClientLayout
    },
    {
        path: routes.client.category,
        page: Category,
        layout: ClientLayout
    }
]

export {publicRoutes, privateRoutes};