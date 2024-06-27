import * as React from "react";
import "./QueueCard.css";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import MoreIcon from "@mui/icons-material/MoreHorizRounded";
import DateIcon from "@mui/icons-material/CalendarMonthRounded";
export default function QueueCard() {
  const MuiChipCustom = styled(Chip)(() => ({
    backgroundColor: "#272a34",
    fontFamily: "Poppins-Light",
    borderRadius: 18,
    fontSize: 10,
    color: "white",

    "& .MuiChip-label": {
      color: "white", //using the MUI chip label properties
      fontSize: 11,
      fontFamily: "Poppins",
    },

    "& .MuiChip-deleteIcon": {
      color: "blue",
      fontSize: 20,
    },
  }));

  return (
    <Stack className="card" sx={{ p: 2 }} direction="column">
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
          >
            <MuiChipCustom
              label="Website"
              sx={{ maxWidth: 200, p: 1, marginTop: 1 }}
            />
          </Stack>
        </Grid>
        <Grid item xs={1}>
          <MoreIcon sx={{ color: "white", marginRight: 2 }} />
        </Grid>
      </Grid>
      <Typography variant="h5" sx={{ marginTop: 2 }}>
        NFT WebPages Design
      </Typography>
      <Typography variant="p" sx={{ marginTop: 2 }}>
        Design web pages for given nft with moder ui tools{" "}
      </Typography>
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        <Grid item xs={6}>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
          >
            <Avatar />
          </Stack>
        </Grid>
        <Grid item xs={5} justifyContent={"center"}>
          <DateIcon sx={{ color: "white", marginRight: 2 }} />
          <Typography variant="p" sx={{ marginTop: 2 }}>
            Fri,24 May 2022
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  );
}
