import { AdminSidebar } from "./components/index.js";

function AdminLayout({ children }) {
    return (
        <>
            <AdminSidebar />
            <div>{children}</div>
        </>
    );
}

export { AdminLayout };

