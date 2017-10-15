import * as React from 'react';
import * as style from './style.css';
import { connect } from 'react-redux';
import { RouteComponentProps, Route, Router, Redirect } from 'react-router';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { PrimaryButton } from 'office-ui-fabric-react/lib/components/Button';
import { TechnicalCharacteristicsPage } from './TechnicalCharacteristicsPage/index';
import { Search } from './Search/index';
import { Login } from './Login/index';
import { checkUserIsLogedIn } from './../actions/loginActions';

export namespace App {
    export interface Props {
        state: {};
        path: string;
        logged?: boolean;
        history:any;
    }
}

@connect(mapStateToProps, mapDispatchToProps)
export class App extends React.Component<App.Props, {}> {
    constructor(props: App.Props) {
        super(props);
    }

    render() {
        return (
            this.props.logged ? (
                <Router history={this.props.history}>
                    <div>
                        <Redirect to="/" />
                        <Route path="/" exact component={Search} />
                        <Route path="/TechnicalCharacteristics/:conto" component={TechnicalCharacteristicsPage} />
                    </div>
                </Router>
            ) : (
                    <div>
                        <Redirect to="/Login" />
                        <Route path="/Login" component={Login} />
                    </div>
                )
        );
    }
}

function mapStateToProps(state) {
    return {
        logged:state.login.logged
    };
}

function mapDispatchToProps(dispatch) {
    return {
        checkUserIsLogedIn:dispatch(checkUserIsLogedIn())
    };
}
