import { Outlet } from "react-router-dom";
//Outlet jelölőhely 
import MainNavigation from "../component/MainNavigator";
import classes from './Root.module.css'

function RootLayout() {
    return (<>
        <main className={classes.content}>
            <Outlet />
        </main>
        <MainNavigation />
    </>);
}
export default RootLayout;
