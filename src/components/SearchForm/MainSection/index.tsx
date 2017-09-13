import * as React from 'react';
import * as style from './style.css';
import {
  DetailsList,
  DetailsListLayoutMode,
  IDetailsHeaderProps,
  Selection,
  IColumn
} from 'office-ui-fabric-react/lib/DetailsList';
import { IRenderFunction } from "@uifabric/utilities/lib";
import { ITooltipHostProps } from "office-ui-fabric-react/lib/Tooltip";
import { TooltipHost } from "office-ui-fabric-react/lib/components/Tooltip";


export namespace MainSection {
  export interface Props {
    data: Array<any>;
  }

  export interface State {
    items: Array<any>,
    columns: Array<IColumn>
  }
}


export class MainSection extends React.Component<MainSection.Props, MainSection.State> {
  private _selection: Selection;
  constructor(props?: MainSection.Props, context?: any) {
    super(props, context);
    this._selection = new Selection({
    });
    this.state = {
      items: [],
      columns: []
    };
    this.setFieldName = this.setFieldName.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, items: nextProps.data, columns: this.createColumns(nextProps) })
  }

  public setFieldName(key) {
    switch (key) {
      case "ExpensesType":
        return "Tip pretrage"
      case "Count":
        return "Konto"
      case "Count":
        return "Konto"
      case "Title":
        return "Naslov"
      case "Quantaty":
        return "Količina"
      case "Price":
        return "Cena"
      case "Date":
        return "Datum"
      case "TachographState":
        return "Stanje tahografa"
      case "Place":
        return "Mesto"
      default:
        return key
    }
  }

  private createColumns(nextProps): Array<IColumn> {
    return nextProps.data[0] && Object.keys(nextProps.data[0]).map(key=>{
      let fieldName = this.setFieldName(key);
      return {
        key: key,
        name: fieldName,
        fieldName: key,
        minWidth: 100,
        isResizable: true
      }
    }).filter(column=>{return column.key!=="Id"});
  }


  render() {
    return (
      <section className={style.searchTable}>
        <DetailsList
          items={this.state.items}
          columns={this.state.columns}
          setKey='set'
          layoutMode={DetailsListLayoutMode.fixedColumns}
          selection={this._selection}
          selectionPreservedOnEmptyClick={true}
          onItemInvoked={(item) => alert(`Item invoked: ${item.Title}`)
          }
        />
      </section>
    );
  }
}
