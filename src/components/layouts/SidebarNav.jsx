import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";

import { tokens } from "../../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { Alarm, ChevronLeftTwoTone, ChevronRightTwoTone, NoteAdd, Star, Task } from "@mui/icons-material";
import { Link } from "react-router-dom";



function SidebarNav() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");
    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`,
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important",
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important",
                },
            }}
        >
            <Sidebar collapsed={isCollapsed}
                collapsedWidth="70px"
                style={{ height: "100vh" }}
            >
                <Menu iconShape="square">
                    {/* LOGO AND MENU ICON */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <ChevronRightTwoTone style={{ fontSize: 35 }} /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography variant="h5" color={colors.grey[100]}>
                                    TODO BOARD
                                </Typography> <ChevronLeftTwoTone style={{ fontSize: 35 }} />
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <ChevronLeftTwoTone style={{ fontSize: 35 }} />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    <Divider />

                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        <MenuItem
                            component={<Link to={"/"} />}
                            icon={<HomeOutlinedIcon />}

                        >
                            Dashboard

                        </MenuItem>

                        <SubMenu
                            prefix="Notes"
                            icon={<NoteAdd />}
                        >
                            <MenuItem

                                icon={<Star />}
                                component={<Link to="/importantNotes" />}

                            >
                                Important
                            </MenuItem>
                            <MenuItem
                                icon={<Alarm />}
                                component={<Link to="/reminders" />}
                            >Reminders</MenuItem>
                            <MenuItem
                                icon={<Task />}
                                component={<Link to="/todoList" />}
                            >
                                Todos
                            </MenuItem>
                        </SubMenu>
                        <divider />



                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Charts
                        </Typography>
                        <MenuItem


                            icon={<BarChartOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        >
                            Bar Chart
                        </MenuItem>                        <MenuItem
                            prefix="Pie Chart"

                            icon={<PieChartOutlineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <MenuItem
                            prefix="Line Chart"

                            icon={<TimelineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <MenuItem
                            prefix="Geography Chart"

                            icon={<MapOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </Sidebar>
        </Box>
    )
}

export default SidebarNav
