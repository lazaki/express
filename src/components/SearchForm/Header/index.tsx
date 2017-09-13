import * as React from 'react';
import * as style from './style.css';
import { DatePicker } from 'office-ui-fabric-react/lib/DatePicker';
import { PrimaryButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { ChoiceGroup, IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { DefaultButton } from "office-ui-fabric-react/lib/components/Button";
import { Label } from "office-ui-fabric-react/lib/components/Label";
import { autobind } from "@uifabric/utilities/lib";
import { TagPicker } from 'office-ui-fabric-react/lib/components/pickers/TagPicker/TagPicker';
import {ExpensesType} from '../../../constants/extensesTypes';

export namespace Header {
  export interface Props {
    data:Array<any>;
    counts:Array<any>;
    loadDataForCount:  (startDate,endDate,count,esxtense)=>void;
    loadDataForDate: (startDate,endDate)=>void;
  }

  export interface State {
    konto: string;
    periodOd: Date;
    periodDo: Date;
    mesto: string;
    filter: string;
    pretraga: string;
  }
}

let _testTags = [];

export class Header extends React.Component<Header.Props, Header.State> {

  constructor(props?: Header.Props, context?: any) {
    super(props, context);
    this.state = {
      konto: "",
      periodOd: new Date(new Date().setMonth(new Date().getMonth()-1)),
      periodDo: new Date(),
      mesto: "SvaVozila",
      filter: "1",
      pretraga: "",
    }
  }

  componentWillReceiveProps(nextProps) {
     _testTags = nextProps.counts.map(data=>{return { key: data.Id, name: data.Title.toString() }})
  }

  
  private _onFilterChanged(filterText: string, tagList: { key: string, name: string }[]) {
    return filterText ? _testTags.filter(tag => tag.name.toLowerCase().indexOf(filterText.toLowerCase()) === 0).filter(item => !this._listContainsDocument(item, tagList)) : [];
  }

  private _listContainsDocument(tag: { key: string, name: string }, tagList: { key: string, name: string }[]) {
    if (!tagList || !tagList.length || tagList.length === 0) {
      return false;
    }
    return tagList.filter(compareTag => compareTag.key === tag.key).length > 0;
  }

  render() {

    return (
      <header className={style.searchHeader}>
        <div className={style.searchRow}>
          <DatePicker formatDate={(date)=>date.toLocaleDateString()} placeholder='Period od' value = {this.state.periodOd} onSelectDate={(value)=> this.setState({...this.state,periodOd:value}) }/>
          <DatePicker formatDate={(date)=>date.toLocaleDateString()} placeholder='Period od' value = {this.state.periodDo} onSelectDate={(value)=>this.setState({...this.state,periodDo:value}) }/>
          <PrimaryButton
            data-automation-id='test'
            text='Pretraži'
            onClick={() =>{ this.props.loadDataForCount(this.state.periodOd,this.state.periodDo,this.state.konto,this.state.filter)}}
          />
          <ChoiceGroup
            className = {style.choiseGroup}
            onChange ={(ev,option)=>this.setState({...this.state,mesto:option.key})}
            defaultSelectedKey='SvaVozila'
            selectedKey = {this.state.mesto}
            options={[
              {
                key: 'SvaVozila',
                text: 'Sva vozila'
              },
              {
                key: 'Becej',
                text: 'Bečej ',
              },
              {
                key: 'BackaTopola',
                text: 'Bačka Topola',
              },
              {
                key: 'Uzice',
                text: 'Užice ',
              }
            ]}
            label='Mesto vozila'
            required={true}
          />
          <PrimaryButton
            data-automation-id='test'
            text='Prikazi samo mala vozila'
            onClick={() => alert('Clicked')}
          />
        </div>
        <div className={style.searchRow}>
        <Label>Za konto</Label>
        <TagPicker ref='tagPicker'
        onResolveSuggestions={ this._onFilterChanged.bind(this) }
        getTextFromItem={ (item: any) => { return item.name; } }
        pickerSuggestionsProps={
          {
            suggestionsHeaderText: 'Konto broj',
            noResultsFoundText: 'Nema zadatog konta'
          }
        }
        onChange ={(items)=>{this.setState({...this.state,konto:items[0].name})}}
      />
          <PrimaryButton
            data-automation-id='test'
            text='Izlistaj sve intervencije za dati konto'
            onClick={() => this.props.loadDataForCount(this.state.periodOd,this.state.periodDo,this.state.konto,this.state.filter)}
          />
          <PrimaryButton
            data-automation-id='test'
            text='Sve'
            onClick={() => alert('Clicked')}
          />
          <DefaultButton
            data-automation-id='test'
            text='Monitoring'
            onClick={() => alert('Clicked')}
          />
          <DefaultButton
            data-automation-id='test'
            text='Tehničke karakteristike vozila'
            onClick={() => alert('Clicked')}
          />
        </div>
        <div className={style.searchRow}>
          <ChoiceGroup
            className = {style.choiseGroup}
            onChange={ (ev,option) =>{this.setState({...this.state,filter:option.key})} }
            options={Object.keys(ExpensesType).map((key,index,array) => 
              {
              return { 
                key:array[index],
                text:ExpensesType[key]
                }
              }
            ).filter(v => typeof v.text === "string")}
            label='Filtriraj:'
          />
        </div>
        <div className={style.searchRow}>
        <TextField
            label='Traži delove, eksterne troškove i troškove Remonta:' onChanged={() => console.log()} underlined/>
          <PrimaryButton
            data-automation-id='test'
            text='Tehničke karakteristike vozila'
            onClick={() => alert('Clicked')}
          />
        </div>
      </header>
    );
  }
}
