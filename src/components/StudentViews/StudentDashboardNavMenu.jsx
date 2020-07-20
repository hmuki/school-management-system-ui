import React, { useState } from "react";
import { makeStyles, Grid, IconButton, Typography } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { MdMenu, MdExpandMore } from "react-icons/md";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Link } from "react-router-dom";
import { purple } from "@material-ui/core/colors";

const StudentDashboardNavMenu = () => {
  const isXSWidth = useMediaQuery("(max-width: 600px)");

  const useStyles = makeStyles((theme) => ({
    menuStyles: {
      height: 50,
    },
    menuItemsStyles: {
      height: "auto",
      backgroundColor: "grey",
    },
    summaryStyles: {
      backgroundColor: purple[300],
    },
    summaryTextStyles: {
      color: theme.palette.common.white,
      fontWeight: "bold",
    },
    titleStyles: {
      color: theme.palette.grey[600],
      fontWeight: "bold",
    },
    textStyles: {
      color: theme.palette.common.black,
    },
    buttonStyles: {
      "&:focus": {
        outline: 0,
        boxShadow: "none!important",
      },
    },
  }));

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleMenuToggle = () => {
    setOpen(!open);
  };

  return (
    <Grid container direction="column">
      <Grid
        item
        container
        alignItems="center"
        justify="flex-start"
        className={classes.menuStyles}
      >
        <IconButton
          color="inherit"
          onClick={handleMenuToggle}
          className={classes.buttonStyles}
        >
          <MdMenu />
        </IconButton>
      </Grid>
      {open && (
        <Grid
          item
          container
          alignItems="center"
          justify="center"
          className={classes.menuItemsStyles}
        >
          <div style={{ width: "100%" }}>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<MdExpandMore color="#ffffff" />}
                className={classes.summaryStyles}
              >
                <Typography className={classes.summaryTextStyles}>
                  Studies
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container direction={isXSWidth ? "column" : "row"}>
                  <Grid
                    item
                    container
                    direction="column"
                    alignItems={isXSWidth ? "flex-start" : "center"}
                    justify="flex-start"
                    sm={2}
                  >
                    <Typography className={classes.titleStyles}>
                      Courses
                    </Typography>
                    <Link to="/" className={classes.textStyles}>
                      My Courses
                    </Link>
                  </Grid>

                  <Grid
                    item
                    container
                    direction="column"
                    alignItems={isXSWidth ? "flex-start" : "center"}
                    justify="flex-start"
                    sm={5}
                  >
                    <Typography className={classes.titleStyles}>
                      Learning Support
                    </Typography>
                    <Link to="/" className={classes.textStyles}>
                      Class Tutor
                    </Link>
                    <Link to="/" className={classes.textStyles}>
                      Additional Study Resources
                    </Link>
                  </Grid>

                  <Grid
                    item
                    container
                    direction="column"
                    alignItems={isXSWidth ? "flex-start" : "center"}
                    justify="flex-start"
                    sm={2}
                  >
                    <Typography className={classes.titleStyles}>
                      Calendar
                    </Typography>
                    <Link to="/" className={classes.textStyles}>
                      Timetables
                    </Link>
                  </Grid>

                  <Grid
                    item
                    container
                    direction="column"
                    alignItems={isXSWidth ? "flex-start" : "center"}
                    justify="flex-start"
                    sm={3}
                  >
                    <Typography className={classes.titleStyles}>
                      My Finance
                    </Typography>
                    <Link to="/" className={classes.textStyles}>
                      Tuition
                    </Link>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<MdExpandMore color="#ffffff" />}
                className={classes.summaryStyles}
              >
                <Typography className={classes.summaryTextStyles}>
                  Extracurriculars
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container direction={isXSWidth ? "column" : "row"}>
                  <Grid
                    item
                    container
                    direction="column"
                    alignItems={isXSWidth ? "flex-start" : "center"}
                    justify="flex-start"
                    sm={6}
                  >
                    <Typography className={classes.titleStyles}>
                      Socials
                    </Typography>
                    <Link to="/" className={classes.textStyles}>
                      Clubs and Societies
                    </Link>
                  </Grid>

                  <Grid
                    item
                    container
                    direction="column"
                    alignItems={isXSWidth ? "flex-start" : "center"}
                    justify="flex-start"
                    sm={6}
                  >
                    <Typography className={classes.titleStyles}>
                      Accomodation
                    </Typography>
                    <Link to="/" className={classes.textStyles}>
                      Accomodation Lettings
                    </Link>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<MdExpandMore color="#ffffff" />}
                className={classes.summaryStyles}
              >
                <Typography className={classes.summaryTextStyles}>
                  Student Achievements
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container direction={isXSWidth ? "column" : "row"}>
                  <Grid
                    item
                    container
                    direction="column"
                    alignItems={isXSWidth ? "flex-start" : "center"}
                    justify="flex-start"
                    sm={6}
                  >
                    <Typography className={classes.titleStyles}>
                      Academic Records
                    </Typography>
                    <Link to="/" className={classes.textStyles}>
                      Transcripts
                    </Link>
                    <Link to="/" className={classes.textStyles}>
                      Certificates
                    </Link>
                  </Grid>
                  <Grid
                    item
                    container
                    direction="column"
                    alignItems={isXSWidth ? "flex-start" : "center"}
                    justify="flex-start"
                    sm={6}
                  >
                    <Typography className={classes.titleStyles}>
                      Awards
                    </Typography>
                    <Link to="/" className={classes.textStyles}>
                      My Awards
                    </Link>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={<MdExpandMore color="#ffffff" />}
                className={classes.summaryStyles}
              >
                <Typography className={classes.summaryTextStyles}>
                  Opportunities
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container direction={isXSWidth ? "column" : "row"}>
                  <Grid
                    item
                    container
                    direction="column"
                    alignItems={isXSWidth ? "flex-start" : "center"}
                    justify="flex-start"
                    sm={6}
                  >
                    <Typography className={classes.titleStyles}>
                      Opportunities
                    </Typography>
                    <Link to="/" className={classes.textStyles}>
                      School Competitions
                    </Link>
                    <Link to="/" className={classes.textStyles}>
                      Scholarships
                    </Link>
                  </Grid>
                  <Grid
                    item
                    container
                    direction="column"
                    alignItems={isXSWidth ? "flex-start" : "center"}
                    justify="flex-start"
                    sm={6}
                  >
                    <Typography className={classes.titleStyles}>
                      Careers
                    </Typography>
                    <Link to="/" className={classes.textStyles}>
                      Jobs
                    </Link>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </div>
        </Grid>
      )}
    </Grid>
  );
};

export default StudentDashboardNavMenu;
