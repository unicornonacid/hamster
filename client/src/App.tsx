import React, { Component } from "react";
import { Wallet } from "./Wallet/Route/Wallet";
import {
  createStyles,
  Grid,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core";

const styles = ({ palette, spacing }: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    grid: {
      padding: spacing.unit * 2,
      color: palette.text.secondary
    }
  });

interface Props extends WithStyles<typeof styles> {}

export const App = withStyles(styles)(
  class extends Component<Props> {
    render() {
      const { classes } = this.props;

      return (
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item xs={3} />
            <Grid item xs={6} className={classes.grid}>
              <Wallet />
            </Grid>
            <Grid item xs={3} />
          </Grid>
        </div>
      );
    }
  }
);
