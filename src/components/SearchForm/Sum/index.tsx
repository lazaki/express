import * as React from 'react';
import * as style from './style.css';
import {ExpensesType} from '../../../constants/extensesTypes';

export namespace Sum {
  export interface Props {
    data: Array<any>;
    konto:any;
    periodOd:Date;
    periodDo:Date;
    filter: string;
    place:"BC"|"BT"|"UE";
  }

  export interface State {
    sum: number;
    filter: string;
  }
}


export class Sum extends React.Component<Sum.Props, Sum.State> {
  private _selection: Selection;
  constructor(props?: Sum.Props, context?: any) {
    super(props, context);
    this.state = {
      sum:0,
      filter:""
    }
  }

  private checkPlace(place) {
    switch(place) {
      case "UE":
        return "Užicu"
      case "BT":
        return "Bačkoj Topoli"
      case "BC":
        return "Bečeju"
      default:
        return "svim mestima"
    }
  }

  private numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  componentWillReceiveProps(nextProps) {
    let sum =0;
    nextProps.data&&nextProps.data.map(d=>sum+=d.Price);
    this.setState({
      filter:this.translateValue(nextProps.filter),
      sum:sum
    });

  }

  private translateValue(index):string {
    let tipPretrage = ExpensesType[index];
    switch (tipPretrage) {
      case "Nalozi":
        return "za naloge"
      case "Akumulatori":
        return "akumulatora"
      case "Gorivo":
        return "goriva"
      case "GorivoEksterno":
        return "eksternog goriva"
      case "Gume":
        return "guma"
      case "Antifriz":
        return "antifriza"
      case "Ulje":
        return "ulja"
      case "Stakla":
        return "stakala"
      case "Deo":
        return "delova"
      case "Osiguranje":
        return "osiguranja"
      case "Lizing":
        return "lizinga"
      case "Remont":
        return "remonta"
      case "Eksterni":
        return "ekterni"
      case "Sati":
        return "za sate"
    }
  }




  render() {
      return <div className={style.message}>
        Ukupni troškovi <span>{this.state.filter.toLocaleLowerCase()}</span> {this.props.konto!=="0"?<span>za konto <span>{this.props.konto}</span></span>:<span>za sve kontoe</span>} u periodu od <span>{this.props.periodOd.toLocaleDateString()}</span> do <span>{this.props.periodDo.toLocaleDateString()}</span> u <span>{this.checkPlace(this.props.place)}</span> iznose <span>{this.numberWithCommas(this.state.sum.toFixed(2))}</span> dinara.
      </div>
  }
}
