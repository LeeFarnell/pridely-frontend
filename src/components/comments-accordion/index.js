import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import NewsFeedComment from "../newsfeed-comments";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#eff7f6",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const SimpleAccordion = (props) => {
  const classes = useStyles();
  const { comments, postId } = props;

  console.log(comments, postId);

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>View Comments</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {comments ? (
              comments.map((comment) => {
                if (comment.postId === postId) {
                  return (
                    <div>
                      <NewsFeedComment
                        username={comment.commentPostedBy.username}
                        comment={comment.commentText}
                      />
                    </div>
                  );
                }
              })
            ) : (
              <div>No comments to display</div>
            )}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default SimpleAccordion;
