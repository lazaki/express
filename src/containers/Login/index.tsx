import * as React from 'react';
import * as style from './style.css';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { PrimaryButton } from 'office-ui-fabric-react/lib/components/Button';
import * as loginActions from '../../actions/loginACtions';

export namespace Login {
  export interface Props extends RouteComponentProps<void> {
    login:(user)=>void;
    error: string;
  }

  export interface State {
    /* empty */
    user:{
      username:string;
      password:string;
    }
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export class Login extends React.Component<Login.Props, Login.State> {
  constructor(props: Login.Props) {
    super(props);
    this.state = {
      user: {
        username:"",
        password:""
      }
    }
  }

  render() {
    return (
      <div className={style.formContainer}>
        <div className={style.form}>
          <div>
            <h2 className="ms-font-xl ms-fontWeight-light">Logovanje</h2>
          </div>
          <div className={style.inputConatainer}>
            <TextField errorMessage={this.props.error==="UserName"&&"Pogresno korisničko ime"} value={this.state.user.username} onChanged={(value)=>this.setState({...this.state,user:{...this.state.user,username: value}})} label='Korisničko ime' underlined />
            <TextField errorMessage={this.props.error==="Password"&&"Pogresna šifra"} value={this.state.user.password}  onChanged={(value)=>this.setState({...this.state,user:{...this.state.user,password: value}})} type="password" label='Šifra' underlined />
            <PrimaryButton onClick = {()=>this.props.login(this.state.user)} text="Uloguj se"/> 
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    error: state.login.error
  };
}

function mapDispatchToProps(dispatch) {
  return {   
    login:(user)=>dispatch(loginActions.login(user))
  };
}
