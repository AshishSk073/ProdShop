import Navbar from "@/components/Navbar";

export const metadata = {
    title: "Customer",
    description: "Customer",
};

function layout({ children }) {
    return (
        <div className="flex h-screen w-screen">
            <div className="w-full h-full overflow-auto">
                <Navbar />
                <div className="m-3">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default layout