import * as React from 'react';
import * as style from './style.css';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

export namespace Login {
  export interface Props extends RouteComponentProps<void> {

  }

  export interface State {
    /* empty */
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export class Login extends React.Component<Login.Props, Login.State> {

  render() {
    return (
      <div className={style.formContainer}>
        <div className={style.form}>
          <div>
            <h2 className="ms-font-xl ms-fontWeight-light">Logovanje</h2>
          </div>
          <div className={style.inputConatainer}>
            <TextField label='Korisničko ime' underlined />
            <TextField label='Šifra' underlined />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {   
  };
}
