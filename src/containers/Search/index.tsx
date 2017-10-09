import * as React from 'react';
import * as style from './style.css';
import * as searchFormActions from '../../actions/searchFormActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Header, MainSection, Sum } from '../../components/SearchForm';

export namespace Search {
  export interface Props extends RouteComponentProps<void> {
    data:Array<any>;
    counts:Array<any>;
    ajaxStatus: any;
    place:"BC"|"BT"|"UE",
    loadSearchData: (startDate,endDate)=>void;
    filterDataByPlace: (place:string)=>void;
  }

  export interface State {
    /* empty */
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export class Search extends React.Component<Search.Props, Search.State> {

  render() {
    return (
      <div className={style.searchContainer}>
        <Header place = {this.props.place} counts= {this.props.counts} data = {this.props.data} filterDataByPlace={this.props.filterDataByPlace} loadSearchData = {this.props.loadSearchData} />
        <MainSection ajaxStatus = {this.props.ajaxStatus} data = {this.props.data}/>
      </div>
    );
  }
}

const filterData = (data,place) => {
 if(place==="SV") return data;
  return data.filter(d=>d.Place===place);
}

function mapStateToProps(state) {
  return {
    data: filterData(state.data,state.place),
    counts: state.counts,
    ajaxStatus: state.ajaxStatus,
    place: state.place
  };
}

function mapDispatchToProps(dispatch) {
  return {
    filterDataByPlace:(place)=>dispatch(searchFormActions.filterDataByPlace(place)),
    loadSearchData:(startDate,endDate,count,criteria)=> dispatch(searchFormActions.loadSearchData(startDate,endDate,count,criteria))
  };
}
