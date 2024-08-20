import {Outlet} from "react-router-dom";
import Navbar from "../components/NavBar/Navbar";
import {Box} from "@chakra-ui/react";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Box p={4}>
                <Outlet />
            </Box>
        </>
    );
};

export default Layout;
