import * as React from 'react';
import * as style from './style.css';
import { connect } from 'react-redux';
import { RouteComponentProps, Route, Router, Redirect, Switch } from 'react-router';
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
        history: any;
        location?: any;
    }
}

@connect(mapStateToProps, mapDispatchToProps)
export class App extends React.Component<App.Props, {}> {
    constructor(props: App.Props) {
        super(props);
    }

    render() {
        return (
            <Router history={this.props.history}>
                {this.props.logged ? (

                    <div>
                            <Route exact path="/" component={Search} />
                            <Route path="/TechnicalCharacteristics/:conto" component={TechnicalCharacteristicsPage} />
                    </div>
                ) : (
                        <div>
                            <Route exact path="/" component={Login} />
                        </div>
                    )}
            </Router>
        );
    }
}

function mapStateToProps(state) {
    return {
        logged: state.login.logged
    };
}

function mapDispatchToProps(dispatch) {
    return {
        checkUserIsLogedIn: dispatch(checkUserIsLogedIn())
    };
}
