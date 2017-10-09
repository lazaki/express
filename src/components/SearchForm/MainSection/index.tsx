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
import {
  Spinner,
  SpinnerSize
} from 'office-ui-fabric-react/lib/Spinner';
import { Sum } from '../index';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';


export namespace MainSection {
  export interface Props {
    data: Array<any>;
    ajaxStatus: any;
  }

  export interface State {
    items: Array<any>;
    columns: Array<IColumn>;
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
      case "Vehicle":
        return "Vozilo"
      case "WorkOrderNumber":
        return "Broj radnog naloga"
      case "Description":
        return "Opis"
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
      case "Time":
        return "Vreme"
      default:
        return key
    }
  }

  private formatDate(date) {
    var dd = date.getDate();
    var mm = date.getMonth() + 1; //January is 0!

    var yyyy = date.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    return dd + '.' + mm + '.' + yyyy;
  }

  private createColumns(nextProps): Array<IColumn> {
    return nextProps.data[0] && Object.keys(nextProps.data[0]).map(key => {
      let fieldName = this.setFieldName(key);
      if(fieldName==="Opis") {
        return {
          key: key,
          name: fieldName,
          fieldName: key,
          minWidth: 100,
          isResizable: true,
          className: style.descriptionTableCell,
          onColumnClick: this.onColumnClick.bind(this)
        }
      }
      return {
        key: key,
        name: fieldName,
        fieldName: key,
        minWidth: 100,
        isResizable: true,      
        className: style.tableCell,
        onColumnClick: this.onColumnClick.bind(this)
      }
    }).filter(column => { if(column.key !== "Id" && column.key !== "EndDate") {
      return true;
    }
    return false;
   });
  }


  render() {
    let element;
    switch(this.props.ajaxStatus.status) {
      case "ERROR":
        element = <div className={`${style.infoMessageContainer} ${style.errorMessage}`}>
                  Greška prilikom učitavanja podataka, proverite da li su sva potrebna polja popunjena
                  </div>
        break;
      case "LOADING": 
        element = <div className={style.infoMessageContainer}> <Spinner size={SpinnerSize.large} label='Učitavanje podataka....' ariaLive='assertive' /></div>
        break;
      case "SUCCESS":
        if(this.props.data.length===0) {
          element = <div className={style.infoMessageContainer}>
          Nema podataka za zadatu pretragu!
          </div>
          break;
        }
        element = <div>
        <DetailsList
          items={this.state.items.map(item => { return { ...item, Date: this.formatDate(new Date(item.Date)) } })}
          columns={this.state.columns}
          setKey='set'
          layoutMode={DetailsListLayoutMode.fixedColumns}
          selection={this._selection}
          selectionPreservedOnEmptyClick={true}
          onItemInvoked={(item) => alert(`Item invoked: ${item.Title}`)}/>
        </div>        
        break;
    }
      return <section className={style.searchTable}>
        {element}
      </section>
  }

  @autobind
  private onColumnClick(ev: React.MouseEvent<HTMLElement>, column: IColumn) {
    const { columns, items } = this.state;
    let newItems: any[] = items.slice();
    let newColumns: IColumn[] = columns.slice();
    let currColumn: IColumn = newColumns.filter((currCol: IColumn, idx: number) => {
      return column.key === currCol.key;
    })[0];
    newColumns.forEach((newCol: IColumn) => {
      if (newCol === currColumn) {
        currColumn.isSortedDescending = !currColumn.isSortedDescending;
        currColumn.isSorted = true;
      } else {
        newCol.isSorted = false;
        newCol.isSortedDescending = true;
      }
    });
    newItems = this.sortItems(newItems, currColumn.fieldName, currColumn.isSortedDescending);
    this.setState({
      columns: newColumns,
      items: newItems
    });
  }

  @autobind
  private sortItems(items: any, sortBy: string, descending = false): any[] {
    if (descending) {
      return items.sort((a: any, b: any) => {
        if (a[sortBy] < b[sortBy]) {
          return 1;
        }
        if (a[sortBy] > b[sortBy]) {
          return -1;
        }
        return 0;
      });
    } else {
      return items.sort((a: any, b: any) => {
        if (a[sortBy] < b[sortBy]) {
          return -1;
        }
        if (a[sortBy] > b[sortBy]) {
          return 1;
        }
        return 0;
      });
    }
}
}
