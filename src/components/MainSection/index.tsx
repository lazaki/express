import * as React from 'react';
import * as TodoActions from '../../actions/todos';
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
  }

  export interface State {
    items: Array<any>,
    selectionDetails: string,
  }
}

let _items: any[] = [];

let _columns: IColumn[] = [
  {
    key: 'column1',
    name: 'Redni broj',
    fieldName: 'name',
    minWidth: 50,
    maxWidth: 100,
    isResizable: true,
    ariaLabel: 'Operations for name'
  },
  {
    key: 'column2',
    name: 'Godina',
    fieldName: 'value',
    minWidth: 50,
    maxWidth: 100,
    isResizable: true,
    ariaLabel: 'Operations for value'
  },
  {
    key: 'column3',
    name: 'Konto',
    fieldName: 'value',
    minWidth: 50,
    maxWidth: 100,
    isResizable: true,
    ariaLabel: 'Operations for value'
  },
  {
    key: 'column4',
    name: 'Tip vozila',
    fieldName: 'value',
    minWidth: 50,
    maxWidth: 100,
    isResizable: true,
    ariaLabel: 'Operations for value'
  },
  {
    key: 'column5',
    name: 'Gorivo',
    fieldName: 'value',
    minWidth: 50,
    maxWidth: 100,
    isResizable: true,
    ariaLabel: 'Operations for value'
  },
  {
    key: 'column6',
    name: 'Rez. delovi',
    fieldName: 'value',
    minWidth: 50,
    maxWidth: 100,
    isResizable: true,
    ariaLabel: 'Operations for value'
  },
  {
    key: 'column7',
    name: 'Gume',
    fieldName: 'value',
    minWidth: 50,
    maxWidth: 100,
    isResizable: true,
    ariaLabel: 'Operations for value'
  },
  {
    key: 'column8',
    name: 'Stakla',
    fieldName: 'value',
    minWidth: 50,
    maxWidth: 100,
    isResizable: true,
    ariaLabel: 'Operations for value'
  },
];


export class MainSection extends React.Component<MainSection.Props, MainSection.State> {
  private _selection: Selection;
  constructor(props?: MainSection.Props, context?: any) {
    super(props, context);
    
    if (_items.length === 0) {
      for (let i = 0; i < 200; i++) {
        _items.push({
          key: i,
          name: 'Item ' + i,
          value: i
        });
      }
  }
  this._selection = new Selection({
    onSelectionChanged: () => this.setState({...this.state, selectionDetails: this._getSelectionDetails()})
  });

  this.state = {
    items: _items,
    selectionDetails: this._getSelectionDetails()
  };
}


  private _getSelectionDetails(): string {
    let selectionCount = this._selection.getSelectedCount();

    switch (selectionCount) {
      case 0:
        return 'No items selected';
      case 1:
        return '1 item selected: ' + (this._selection.getSelection()[0] as any).name;
      default:
        return `${selectionCount} items selected`;
    }
  }

  render() {
    return (
        <section className={style.searchTable}>
          <DetailsList
            items={ this.state.items }
            columns={ _columns }
            setKey='set'
            layoutMode={ DetailsListLayoutMode.fixedColumns }
            onRenderDetailsHeader={
              (detailsHeaderProps: IDetailsHeaderProps, defaultRender: IRenderFunction<IDetailsHeaderProps>) => defaultRender({
                ...detailsHeaderProps,
                onRenderColumnHeaderTooltip: (tooltipHostProps: ITooltipHostProps) => <TooltipHost { ...tooltipHostProps } />
              })
            }
            selection={ this._selection }
            selectionPreservedOnEmptyClick={ true }
            ariaLabelForSelectionColumn='Toggle selection'
            ariaLabelForSelectAllCheckbox='Toggle selection for all items'
            onItemInvoked={ (item) => alert(`Item invoked: ${item.name}`)
             }
          />
        </section>
    );
  }
}
