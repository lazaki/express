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

  componentWillReceiveProps(nextProps) {
    let sum =0;
    console.log(nextProps.data);
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
    }
  }




  render() {
    console.log(this.props.konto);
      return <div className={style.message}>
        Ukupni troškovi <span>{this.state.filter.toLocaleLowerCase()}</span> {this.props.konto!=="0"?<span>za konto <span>{this.props.konto}</span></span>:<span>za sve kontoe</span>} u periodu od <span>{this.props.periodOd.toLocaleDateString()}</span> do <span>{this.props.periodDo.toLocaleDateString()}</span> iznose <span>{this.state.sum.toFixed(2)}</span> dinara.
      </div>
  }
}
