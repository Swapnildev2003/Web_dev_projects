import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { PieChart } from "@mui/x-charts";
import Grid from "./Grid";
import BarChart from "./PositiveNegativeBarChart";
import StackChart from "./StackedBarChart";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Generate random data for the pie chart
  const generateRandomData = () => {
    const data = [];
    for (let i = 0; i < 5; i++) {
      data.push({
        name: `Category ${i + 1}`,
        value: Math.floor(Math.random() * 100) + 1, // Random value between 1 and 100
      });
    }
    return data;
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main
        open={open}
        sx={{ justifyContent: "center", width: "100% !important" }}
      >
        <DrawerHeader />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "200px",
            alignItems: "center",
          }}
        >
          <PieChart
            series={[
              {
                data: generateRandomData(),
                innerRadius: 30,
                outerRadius: 100,
                paddingAngle: 5,
                cornerRadius: 5,
                startAngle: -90,
                endAngle: 180,
                cx: 150,
                cy: 150,
              },
            ]}
            width={300} // Set the width here
            height={300} // Set the height here
          />

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "200px",
            }}
          >
            <Grid />
            <Grid />
            <Grid />
            <Grid />
            <Grid />
          </div>
        </div>



        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "250px",
          }}
        >
          <BarChart />
          <StackChart />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)", // Set the number of columns to 2
              gap: "20px",
              rowGap: "20px",// Add gap between columns
              width: "100%",
              height: "200px",
            }}
          >
            <Grid
              container
              spacing={5}
              sx={{
                height: 200,
                backgroundColor: "lightgray",
              }}
            />
            <Grid
              container
              spacing={2}
              sx={{
                height: 200,
                backgroundColor: "lightgray",
              }}
            />
            <Grid
              container
              spacing={2}
              sx={{
                height: 200,
                backgroundColor: "lightgray",
              }}
            />
            <Grid
              container
              spacing={2}
              sx={{
                height: 200,
                backgroundColor: "lightgray",
              }}
            />

          </div>
        </div>


      </Main>
    </Box>
  );
}
