import Dashboard from "../pages/Admin/Home"
import Home from "../pages/Client/Home"
import routes from "../config/routes"
import ClientLayout from "../layouts/Client/ClientLayout"
import AdminLayout from "../layouts/Admin/AdminLayout"
import User from "../pages/Client/User"
import Users from "../pages/Admin/User"
import Category from "../pages/Client/Category"
import Login from "../pages/Client/Login"
import Register from "../pages/Client/Register"
import Blog from "../pages/Client/Blog"

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
        path: routes.client.category + '/:id',
        page: Category,
        layout: ClientLayout
    },
    {
        path: routes.client.login,
        page: Login,
        layout: ClientLayout
    },
    {
        path: routes.client.register,
        page: Register,
        layout: ClientLayout
    },
    {
        path: routes.client.blog,
        page: Blog,
        layout: ClientLayout
    }
]

export {publicRoutes, privateRoutes};