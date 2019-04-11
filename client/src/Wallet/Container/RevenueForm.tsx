import React, { Component, FormEvent } from "react";
import { Request } from "../Infrastructure/Request";
import { Theme, WithStyles } from "@material-ui/core";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

const styles = (theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit
    },
    menu: {
      width: 200
    },
    button: {
      marginLeft: theme.spacing.unit,
      marginTop: theme.spacing.unit * 2.5
    },
    input: {
      display: "none"
    }
  });

const signs = [
  {
    value: "+",
    label: "+"
  },
  {
    value: "-",
    label: "-"
  }
];

interface Props extends WithStyles<typeof styles> {}

interface State {
  sign: string;
  amount: string;
  title: string;
}

export const RevenueForm = withStyles(styles)(
  class extends Component<Props, State> {
    private request: Request;

    constructor(props: Props) {
      super(props);

      this.state = {
        sign: "+",
        amount: "",
        title: ""
      };

      this.request = new Request();
    }

    private onChange = (name: keyof State) => (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      this.setState({
        [name]: event.target.value
      } as Pick<State, keyof State>);
    };

    private onSubmit = (event: FormEvent): void => {
      event.preventDefault();
      console.log(this.state);
    };

    render() {
      const { classes } = this.props;

      return (
        <form className={classes.container} onSubmit={this.onSubmit}>
          <TextField
            id="outlined-select-sign"
            select
            label="Sign"
            className={classes.textField}
            value={this.state.sign}
            onChange={this.onChange("sign")}
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
            helperText="Select income or outcome"
            margin="normal"
            variant="outlined"
          >
            {signs.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="outlined-amount"
            label="Amount"
            value={this.state.amount}
            onChange={this.onChange("amount")}
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-title"
            label="Title"
            className={classes.textField}
            value={this.state.title}
            onChange={this.onChange("title")}
            margin="normal"
            variant="outlined"
          />
          <input
            className={classes.input}
            id="contained-button-submit"
            type="submit"
          />
          <label htmlFor="contained-button-submit">
            <Button
              variant="contained"
              size={"large"}
              color={"primary"}
              component="span"
              className={classes.button}
            >
              Save
            </Button>
          </label>
        </form>
      );
    }
  }
);
