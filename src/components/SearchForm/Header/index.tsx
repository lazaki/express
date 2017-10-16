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
import { ExpensesType } from '../../../constants/extensesTypes';
import { Sum } from '../index';
import { Route } from 'react-router-dom'
import { Places } from '../../../constants/places';

export namespace Header {
  export interface Props {
    data: Array<any>;
    counts: Array<any>;
    place: "BC" | "BT" | "UE";
    loadSearchData: (startDate, endDate, count, esxtense) => void;
    filterDataByPlace: (place: string) => void;
    logOut: () => void;
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

  constructor(props: Header.Props) {
    super(props);
    this.state = {
      konto: "Svi",
      periodOd: new Date(new Date().setMonth(new Date().getMonth() - 1)),
      periodDo: new Date(),
      mesto: "SvaVozila",
      filter: "1",
      pretraga: ""
    }
  }

  componentWillReceiveProps(nextProps) {
    _testTags = nextProps.counts.map(data => { return { key: data.Id, name: data } })
  }



  private renderButtons() {
    return Object.keys(ExpensesType).map((key, index, array) => {
      return {
        key: array[index],
        text: ExpensesType[key]
      }
    }).filter((item) => {
      return item.text.length > 1;
    }
      ).map(i => {
        return <PrimaryButton checked={i.key === this.state.filter} text={i.text} onClick={() => (this.setState({ ...this.state, filter: i.key }),
          this.props.loadSearchData(this.state.periodOd, this.state.periodDo, this.state.konto !== "Svi" ? this.state.konto : 0, i.key))} />
      })
  }

  render() {
    return (
      <header className={style.searchHeader}>
        <div className={style.searchControlRow}>
          <img className={style.searchHeaderImage} src="http://vicont.rs/images/vicont_vektor_logo.png" alt="Vicont" />
          <DefaultButton onClick={() => this.props.logOut()}>Izloguj se</DefaultButton>
        </div>
        <div className={style.searchRow}>
          <DatePicker formatDate={(date) => date.toLocaleDateString()} placeholder='Period od' value={this.state.periodOd} onSelectDate={(value) => this.setState({ ...this.state, periodOd: value })} />
          <DatePicker formatDate={(date) => date.toLocaleDateString()} placeholder='Period od' value={this.state.periodDo} onSelectDate={(value) => this.setState({ ...this.state, periodDo: value })} />
          <PrimaryButton
            data-automation-id='test'
            text='Pretraži'
            onClick={() => { alert("Rade, napravi servis!") }}
          />
          <ChoiceGroup
            disabled={this.state.konto !== "Svi"}
            className={style.choiseGroup}
            onChange={(ev, option) => this.props.filterDataByPlace(option.key)}
            selectedKey={this.props.place}
            options={[
              {
                key: 'SV',
                text: 'Sva mesta'
              },
              {
                key: 'BC',
                text: 'Bečej ',
              },
              {
                key: 'BT',
                text: 'Bačka Topola',
              },
              {
                key: 'UE',
                text: 'Užice ',
              }
            ]}
            label='Mesto vozila'
          />
          <PrimaryButton
            data-automation-id='test'
            text='Prikazi samo mala vozila'
            onClick={() => alert('Clicked')}
          />
        </div>
        <div className={style.searchRow}>
          <Label>Za konto</Label>
          <TextField value={this.state.konto} errorMessage={!(this.props.counts.indexOf(this.state.konto) !== -1 || this.state.konto === "Svi") && "Pogrešan konto"} onChanged={newValue => { if (newValue !== "SVI") { this.props.filterDataByPlace("SV") } this.setState({ ...this.state, konto: newValue }) }} />
          <PrimaryButton
            disabled={this.props.counts.indexOf(this.state.konto) === -1}
            data-automation-id='test'
            text='Izlistaj sve intervencije za dati konto'
            onClick={() => (this.props.loadSearchData(this.state.periodOd, this.state.periodDo, this.state.konto !== "Svi" ? this.state.konto : 0, 111), this.setState({ filter: "111" }))}
          />
          <DefaultButton
            data-automation-id='test'
            text='Monitoring'
            onClick={() => alert('Clicked')}
          />
          {/* <a target="_blank" href={`${location.origin}/TechnicalCharacteristics/${this.state.konto}`}>Tehnicke karakteristike</a> */}
          <DefaultButton
            disabled={this.props.counts.indexOf(this.state.konto) === -1}
            data-automation-id='test'
            text='Tehničke karakteristike vozila'
            onClick={() => { window.open(`${location.origin}/TechnicalCharacteristics/${this.state.konto}`, '_blank'); }}
          />
        </div>
        <div className={style.searchRow}>
          <Label>Filtriraj</Label>
          {this.renderButtons()}
        </div>
        <div className={style.searchRow}>
          <TextField
            label='Traži delove, eksterne troškove i troškove Remonta:' onChanged={() => console.log()} underlined />
          <PrimaryButton
            data-automation-id='test'
            text='Tehničke karakteristike vozila'
            onClick={() => alert('Clicked')}
          />
        </div>{(this.props.counts.indexOf(this.state.konto) !== -1 || this.state.konto === "Svi") ?
          <Sum place={this.props.place} data={this.props.data} konto={this.state.konto} periodOd={this.state.periodOd} periodDo={this.state.periodDo} filter={this.state.filter}></Sum>
          : ""}
      </header>
    );
  }
}
