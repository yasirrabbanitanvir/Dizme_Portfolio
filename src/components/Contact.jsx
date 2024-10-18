import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useStyles } from '../Style'
import { RenderInputText } from "./RenderInputText ";

const Contact = () => {
  const classes = useStyles();

  const [contactinfo, setContactInfo] = useState({
    data: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    errors: {},
  });

  const handleSubject = (e) => {
    e.preventDefault();
    console.log("submit ,", contactinfo.data);
  }

  const handleOnChange = ({ target }) => {
    const { data, errors } = contactinfo;

    //setting errors
    target.value.length <= 3
      ? (errors[target.name] = `${target.name} at last 3 letters`)
      : (errors[target.name] = "");

    data[target.name] = target.value;
    setContactInfo({ data, errors });
  };

  return (
    <Box className={classes.contact} id="contact">
      <Container maxWidth="lg">
        <Box className={`${classes.common_text_area} ${classes.contact_text_area}`}>
          <Typography variant="h5" component="h5" className={classes.common_text_area_subtitle}>
            Contact Me
          </Typography>
          <Typography variant="h2" component="h2" className={classes.common_text_area_title}>
            I Want To Hear From You
          </Typography>
          <Typography variant="h5" component="p" className={classes.common_text_area_description}>
            Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
          </Typography>
        </Box>
        <Box className={classes.contact_info_section}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} sm={5}>
              <Box className={classes.contact_information}>
                <Box className={classes.contact_info_left}>
                  <span className={classes.contact_info_icon} style={{ color: "#f75023", backgroundColor: "#fedfd7" }} aria-label="Address">
                    <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
                  </span>
                </Box>
                <Box className={classes.contact_ingo_right}>
                  <Typography variant="h2" component="h2" className={classes.contact_ingo_right_title}>
                    Address
                  </Typography>
                  <Typography variant="h5" component="p" className={classes.contact_ingo_right_description}>
                    20, Somewhere in world
                  </Typography>
                </Box>
              </Box>
              <Box className={classes.contact_information}>
                <Box className={classes.contact_info_left}>
                  <span className={classes.contact_info_icon} style={{ color: "#1cbe59", backgroundColor: "#ddf5e6" }} aria-label="Address">
                    <i class="fas fa-envelope" aria-hidden="true"></i>
                  </span>
                </Box>
                <Box className={classes.contact_ingo_right}>
                  <Typography variant="h2" component="h2" className={classes.contact_ingo_right_title}>
                    Email
                  </Typography>
                  <Typography variant="h5" component="a" href='#' className={classes.contact_ingo_right_description}>
                    hello@dizme.com
                  </Typography>
                </Box>
              </Box>
              <Box className={classes.contact_information}>
                <Box className={classes.contact_info_left}>
                  <span className={classes.contact_info_icon} style={{ color: "#8067f0", backgroundColor: "#ece8fd" }} aria-label="Address">
                    <i class="fas fa-envelope" aria-hidden="true"></i>
                  </span>
                </Box>
                <Box className={classes.contact_ingo_right}>
                  <Typography variant="h2" component="h2" className={classes.contact_ingo_right_title}>
                    Phone
                  </Typography>
                  <Typography variant="h5" component="a" href='#' className={classes.contact_ingo_right_description}>
                    +8801924691725
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sm={7}>
              <Box className={classes.contact_form}>
                <form onSubmit={handleSubject}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sm={6}>
                      {RenderInputText({
                        lablel: "Name",
                        name: "name",
                        contactinfo: contactinfo,
                        onChange: handleOnChange,
                      })}
                    </Grid>
                    <Grid item xs={12} md={6} sm={6}>
                      {RenderInputText({
                        lablel: "Email",
                        name: "email",
                        contactinfo: contactinfo,
                        onChange: handleOnChange,
                      })}
                    </Grid>
                    <Grid item xs={12} md={6} sm={6}>
                      {RenderInputText({
                        lablel: "Phone",
                        name: "phone",
                        contactinfo: contactinfo,
                        onChange: handleOnChange,
                      })}
                    </Grid>
                    <Grid item xs={12} md={6} sm={6}>
                      {RenderInputText({
                        lablel: "Subject",
                        name: "subject",
                        contactinfo: contactinfo,
                        onChange: handleOnChange,
                      })}
                    </Grid>
                    <Grid item xs={12} md={12}>
                      {RenderInputText({
                        lablel: "Message",
                        name: "messgae",
                        contactinfo: contactinfo,
                        onChange: handleOnChange,
                        multiline: true,
                        rows: 5,
                      })}
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <Button 
                      type='submit'
                      className={classes.hero_about_button}
                      >
                        Submit Now
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default Contact
