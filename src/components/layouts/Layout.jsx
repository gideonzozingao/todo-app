import React from 'react'
import { Outlet } from "react-router-dom";
import AppHeader from './AppHeader';
import SidebarNav from './SidebarNav';
import { Box } from '@mui/material';
function Layout() {
    return (
        <>
            <AppHeader />
            <Box sx={{ display: 'flex', height: 'calc(100vh - 64px)' }}> {/* Adjust height based on AppHeader's height if it's 64px */}
                <Box sx={{ width: 250, p: 2 }}>
                    <SidebarNav />
                </Box>
                <Box sx={{ flexGrow: 1, bgcolor: '#f4f4f4', p: 2 }}>
                    <Outlet />
                </Box>
            </Box>
        </>
    )
}

export default Layout
