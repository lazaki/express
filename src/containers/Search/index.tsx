import * as React from 'react';
import * as style from './style.css';
import * as searchFormActions from '../../actions/searchFormActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Header, MainSection } from '../../components/SearchForm';

export namespace Search {
  export interface Props extends RouteComponentProps<void> {
    data:Array<any>;
    counts:Array<any>;
    ajaxStatus: any;
    loadDataForDate: (startDate,endDate)=>void;
    loadDataForCount:  (startDate,endDate,count,esxtense)=>void;
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
        <Header counts= {this.props.counts} data = {this.props.data} loadDataForDate = {this.props.loadDataForDate} loadDataForCount = {this.props.loadDataForCount}/>
        <MainSection ajaxStatus = {this.props.ajaxStatus} data = {this.props.data}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    data: state.data,
    counts: state.counts,
    ajaxStatus: state.ajaxStatus
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadDataForCount:(startDate,endDate,count,extense)=> dispatch(searchFormActions.loadDataForCount(startDate,endDate,count,extense)),
    loadDataForDate:(startDate,endDate)=> dispatch(searchFormActions.loadDataForDate(startDate,endDate))
  };
}
