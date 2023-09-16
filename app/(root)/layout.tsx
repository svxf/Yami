import Player from "@/components/player";
import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";

const RootLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return ( 
        <div className="top-container">
            <Topbar />
            <Sidebar />
            <Player />

            <div className="bg-main rounded-[8px] flex flex-col relative w-full h-full overflow-hidden mainView">
                {children}
            </div>
        </div>
     );
}
 
export default RootLayout;