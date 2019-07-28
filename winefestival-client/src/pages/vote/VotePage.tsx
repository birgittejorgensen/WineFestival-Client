import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none'
  }
}));

export default function NativeSelects() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai'
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  //   React.useEffect(() => {
  //     setLabelWidth(inputLabel.current.offsetWidth);
  //   }, []);

  //   const handleChange = name => event => {
  //     setState({
  //       ...state,
  //       [name]: event.target.value,
  //     });
  //   };

  return (
    <div className={classes.root}>
      <FormControl required className={classes.formControl}>
        <InputLabel htmlFor="appearance-native-required">Appearance</InputLabel>
        <Select
          native
          value={state.age}
          // onChange={handleChange('age')}
          name="appearance"
          inputProps={{
            id: 'appearance-native-required'
          }}
        >
          <option value="" />
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
          <option value={4}>Four</option>
          <option value={5}>Five</option>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      <FormControl required className={classes.formControl}>
        <InputLabel htmlFor="aroma-native-required">Aroma</InputLabel>
        <Select
          native
          value={state.age}
          // onChange={handleChange('age')}
          name="aroma"
          inputProps={{
            id: 'aroma-native-required'
          }}
        >
          <option value="" />
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
          <option value={4}>Four</option>
          <option value={5}>Five</option>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      <FormControl required className={classes.formControl}>
        <InputLabel htmlFor="presentation-native-required">
          Presentation
        </InputLabel>
        <Select
          native
          value={state.age}
          // onChange={handleChange('age')}
          name="presentation"
          inputProps={{
            id: 'presentation-native-required'
          }}
        >
          <option value="" />
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
          <option value={4}>Four</option>
          <option value={5}>Five</option>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      <FormControl required className={classes.formControl}>
        <InputLabel htmlFor="flavour-native-required">Flavour</InputLabel>
        <Select
          native
          value={state.age}
          // onChange={handleChange('age')}
          name="flavour"
          inputProps={{
            id: 'flavour-native-required'
          }}
        >
          <option value="" />
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
          <option value={4}>Four</option>
          <option value={5}>Five</option>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      <FormControl required className={classes.formControl}>
        <InputLabel htmlFor="character-native-required">Character</InputLabel>
        <Select
          native
          value={state.age}
          // onChange={handleChange('age')}
          name="character"
          inputProps={{
            id: 'character-native-required'
          }}
        >
          <option value="" />
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
          <option value={4}>Four</option>
          <option value={5}>Five</option>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      <FormControl required className={classes.formControl}>
        <InputLabel htmlFor="aftertaste-native-required">Aftertaste</InputLabel>
        <Select
          native
          value={state.age}
          // onChange={handleChange('age')}
          name="aftertaste"
          inputProps={{
            id: 'aftertaste-native-required'
          }}
        >
          <option value="" />
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
          <option value={4}>Four</option>
          <option value={5}>Five</option>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        component={props => <Link to="event" {...props} />}
      >
        Submit
      </Button>
    </div>
  );
}
