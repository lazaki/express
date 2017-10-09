import * as React from 'react';
import * as style from './style.css';
import * as searchFormActions from '../../actions/searchFormActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps, Route } from 'react-router';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { TechnicalCharacteristics } from '../../components/TechnicalCharacteristics/index';

export namespace TechnicalCharacteristicsPage {
  export interface Props extends RouteComponentProps<void> {
    data: Array<any>;
    ajaxStatus: any;
    match: any;
    characteristic:any;
    loadSearchData: (startDate, endDate) => void;
    loadTechnicalCharacteristics:(count) =>void;
  }

  export interface State {
    /* empty */
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export class TechnicalCharacteristicsPage extends React.Component<TechnicalCharacteristicsPage.Props, TechnicalCharacteristicsPage.State> {

  render() {
    return (
      this.props.match.params.conto == 0 ?
        <div className = {style.characteristicContainer}>Niste izabrali konto
          <Route render={({ history }) => (
            <DefaultButton
              data-automation-id='test'
              text='Nazad na pretragu'
              onClick={() => { history.push("/") }}
            />
          )} 
        />
        </div>
       :
        <div className = {style.characteristicContainer}>
        <h1>Tehničke karakteristike vozila</h1>
            <TechnicalCharacteristics loadTechnicalCharacteristics={this.props.loadTechnicalCharacteristics} characteristic={this.props.characteristic} konto = {this.props.match.params.conto}/>
        </div>
          )
  }
}

function mapStateToProps(state) {
  return {
    characteristic: state.technicalCharacteristic,
    ajaxStatus: state.ajaxStatus
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadTechnicalCharacteristics: (count) => dispatch(searchFormActions.loadTechnicalCharacteristics(count))
  };
}
