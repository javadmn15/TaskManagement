import React from "react";
import "../InfoSection/InfoSection.css";
import { Stack, Typography } from "@mui/material";
function InfoSection() {
  return (
    <Stack>
      <Typography variant="h4" sx={{marginTop:2}}>Information</Typography>
      <Stack direction="row" className="queue-container"  sx={{marginTop:1}}>
        <Stack className="queue-box todo">
          <Typography variant="span">In Queue</Typography>
          <Typography variant="h2" sx={{marginTop:1}}>3</Typography>
          <Typography variant="span">Tasks</Typography>
        </Stack>
        <Stack className="queue-box in-progress">
          <Typography variant="span">In Progress</Typography>
          <Typography variant="h2" sx={{marginTop:1}}>8</Typography>
          <Typography variant="span">Tasks</Typography>
        </Stack>
        <Stack className="queue-box completed">
          <Typography variant="span">Completed</Typography>
          <Typography variant="h2" sx={{marginTop:1}}>12</Typography>
          <Typography variant="span">Tasks</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default InfoSection;
