import React from 'react'
import "../ProjectSection/ProjectSection.css";
import { Stack, Typography } from "@mui/material";


function ProjectSection() {
  return (
    <Stack spacing={1} sx={{marginTop:3}}>
        <Typography variant="h4">All Projects</Typography>
        <Typography variant="p">Managing all your tasks at ease with task manager</Typography>
    </Stack>
  )
}

export default ProjectSection