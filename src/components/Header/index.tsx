import * as React from 'react';
import * as style from './style.css';
import { DatePicker } from 'office-ui-fabric-react/lib/DatePicker';
import { PrimaryButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { ChoiceGroup, IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { DefaultButton } from "office-ui-fabric-react/lib/components/Button";

export namespace Header {
  export interface Props {

  }

  export interface State {
    /* empty */
  }
}

export class Header extends React.Component<Header.Props, Header.State> {

  constructor(props?: Header.Props, context?: any) {
    super(props, context);
  }


  render() {
    return (
      <header className={style.searchHeader}>
        <div className={style.searchRow}>
          <DatePicker placeholder='Period od' />
          <DatePicker placeholder='Period od' />
          <PrimaryButton
            data-automation-id='test'
            text='Pretraži'
            onClick={() => alert('Clicked')}
          />
          <ChoiceGroup
            defaultSelectedKey='B'
            className = {style.choiseGroup}
            options={[
              {
                key: 'A',
                text: 'Sva vozila'
              },
              {
                key: 'B',
                text: 'Bečej ',
              },
              {
                key: 'C',
                text: 'Bačka Topola ',
              },
              {
                key: 'D',
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
          <TextField
            label='Za konto' onChanged={() => console.log()} underlined />
          <PrimaryButton
            data-automation-id='test'
            text='Izlistaj sve intervencije za dati konto'
            onClick={() => alert('Clicked')}
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
            defaultSelectedKey='B'
            className = {style.choiseGroup}
            options={[
              {
                key: 'A',
                text: 'Nalog'
              },
              {
                key: 'B',
                text: 'Akumulatori ',
              },
              {
                key: 'C',
                text: 'Deo',
              },
              {
                key: 'D',
                text: 'Gorivo ',
              },
              {
                key: 'E',
                text: 'Ulje ',
              },
              {
                key: 'F',
                text: 'Gume ',
              },
              {
                key: 'G',
                text: 'Remont ',
              },
              {
                key: 'H',
                text: 'Eksterno ',
              },
              {
                key: 'J',
                text: 'Lizing ',
              }
              ,
              {
                key: 'Q',
                text: 'Osiguranje ',
              },
              {
                key: 'K',
                text: 'Satnica ',
              },
              {
                key: 'L',
                text: 'Kilometraža ',
              }
              ,
              {
                key: 'Z',
                text: 'Trošak po km ',
              },
              {
                key: 'X',
                text: 'Trošak po km bez goriva',
              }
              ,
              {
                key: 'M',
                text: 'Stakla',
              }
            ]}
            label='Filtriraj:'
          />
        </div>
        <div className={style.searchRow}>
        <TextField
            label='Traži delove, eksterne troškove i troškove Remonta:' onChanged={() => console.log()} underlined />
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
