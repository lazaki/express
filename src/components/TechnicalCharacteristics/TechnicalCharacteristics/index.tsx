import * as React from 'react';
import * as style from './style.css';
import {ExpensesType} from '../../../constants/extensesTypes';
import { Characteristic } from '../../../../types/models';

export namespace TechnicalCharacteristics {
  export interface Props {
    konto:number;
    loadTechnicalCharacteristics: (count)=>void;
    characteristic: Characteristic;
  }

  export interface State {

  }
}


export class TechnicalCharacteristics extends React.Component<TechnicalCharacteristics.Props, TechnicalCharacteristics.State> {
  constructor(props: TechnicalCharacteristics.Props) {
    super(props);
    this.props.loadTechnicalCharacteristics(props.konto);
  }

  private renderPlace(place) {
    switch (place) {
      case "BC":
        return "Bečej"
      case "UZ":
        return "Užice"
      case "BT":
        return "Bačka Topola"
      default:
        return "Nije definisano"
    }
  }


  render() {
      return <div className={style.container}>
          <div><span>Tip vozila</span><p>{this.props.characteristic.Type}</p></div>
          <div><span>Registarska oznaka</span><p>{this.props.characteristic.RegNumber}</p></div>
          <div><span>Godina</span><p>{this.props.characteristic.Year}</p></div>
          <div><span>Tip motora</span><p>{this.props.characteristic.EngineType}</p></div>
          <div><span>Broj motora</span><p>{this.props.characteristic.EngineNumber}</p></div>
          <div><span>Broj šasije</span><p>{this.props.characteristic.VIN}</p></div>
          <div><span>Menjač</span><p>{this.props.characteristic.Transmission}</p></div>
          <div><span>Tip kočnica</span><p>{this.props.characteristic.Axle}</p></div>
          <div><span>Trenutna kilometraža</span><p>{this.props.characteristic.CurrentKM}</p></div>
          <div><span>Klima</span><p>{this.props.characteristic.Clima}</p></div>
          <div><span>Kupovna cena</span><p>{this.props.characteristic.BuyPrice}</p></div>
          <div><span>Trenutna cena</span><p>{this.props.characteristic.Price}</p></div>
          <div><span>Rashodovan</span><p>{this.props.characteristic.Used?"Da":"Ne"}</p></div>
          <div><span>Mesto</span><p>{this.renderPlace(this.props.characteristic.Place)}</p></div>
      </div>
  }
}
