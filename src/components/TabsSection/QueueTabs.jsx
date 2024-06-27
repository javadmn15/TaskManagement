import React, { useState } from "react";
import { Box, Stack, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import "./QueueTabs.css";
import QueueCard from "../TaskCard/QueueCard";
export const QueueTabs = () => {
  const tabSx = {
    "& .MuiTabs-indicator": {
      backgroundColor: "#fd7269",
    },
    "& .MuiButtonBase-root.MuiTab-root": {
      color: "white",
      transition: "color 0.2s ease-in-out",
      "&:hover": {
        color: "green",
      },
      "&.Mui-selected": {
        backgroundColor: "#272a34",

        color: "#fd7269",
      },
    },
  };

  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ marginTop: 2 }}>
      <TabContext value={value}>
        <Box sx={tabSx}>
          <TabList aria-label="Tabs" onChange={handleChange}>
            <Tab label="In Queue" value="1" />
            <Tab label="In Progress" value="2" />
            <Tab label="Completed" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ p: 0, backgroundColor: "#272a34" }}>
          <Stack spacing={3} justifyContent={"center"} alignItems={"center"} sx={{paddingRight:4,paddingLeft:4,paddingTop:3}}>
            <QueueCard />
            <QueueCard />
            <QueueCard />
          </Stack>
        </TabPanel>
        <TabPanel value="2" sx={{ p: 0 }}>
          <Stack spacing={3} className="queue-tab-container" justifyContent={"center"} alignItems={"center"} sx={{paddingRight:4,paddingLeft:4,paddingTop:3}}>
            <QueueCard />
          </Stack>
        </TabPanel>
        <TabPanel value="3" sx={{ p: 0 }}>
          <Stack spacing={3} className="queue-tab-container" justifyContent={"center"} alignItems={"center"} sx={{paddingRight:4,paddingLeft:4,paddingTop:3}}>
            <QueueCard />
            <QueueCard />
          </Stack>
        </TabPanel>
      </TabContext>
    </Box>
  );
};
