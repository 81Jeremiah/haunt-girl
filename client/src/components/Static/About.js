import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components

import Header from "../Header/Header.js"
// import Footer from "../Footer/Footer.js";
import Button from "../CustomButtons/Button.js";
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";

import Parallax from "../Parallax/Parallax.js";


import christineHg from '../../img/Christine_HG.png';


import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import NewsletterSection from "../../components/NewsletterSection";


import styles from "../../assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (

    <div>
      <Navbar />

      <Header
        color="transparent"
        // brand="Material Kit React"
        // rightLinks={<HeaderLinks />}

        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("../../img/UNADJUSTEDNONRAW_thumb_3.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={christineHg} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Christine Barger</h3>
                    <h6>Welcome To My Blog</h6>
                    <Button justIcon link className={classes.margin5}>
                       <a href="https://www.youtube.com/channel/UCYxmZvq8qVQyq28g5W1EFlQ" target="blank"><i class="fa fa-youtube"></i></a>
                    </Button>

                    <Button justIcon link className={classes.margin5}>
                      <a href="https://www.instagram.com/thehauntgirl" target="blank"><i class="fa fa-instagram"></i></a>
                    </Button>

                    <Button justIcon link className={classes.margin5}>
                      <a href="https://twitter.com/christinebarger" targer="blank"><i class="fa fa-twitter"></i></a>
                    </Button>


                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>

              <p>I’m Christine, a gal obsessed with haunts, escape rooms and other oddities.
              <br/>
              <br/>
                 This blog is a passion project of mine. The fact that I personally do all of the reviews here and on my YouTube channel is what really makes TheHauntGirl.com stand out from other review sites. There is no team, just me. Most of my entries are about the west coast since that is where I live, however I also love to travel. In 2018 I was approached by USA Today to be one of their Ten Best List experts for haunted attractions & escape rooms. Please subscribe to my YouTube channel & sign up for my newsletter for updates & discount codes.
              <br/>
                  Thanks for stopping by!
              </p>
            </div>
          </div>
        </div>
      </div>
      <NewsletterSection />
      <Footer />
    </div>

    );
  }      
