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
    loadSearchData: (startDate,endDate)=>void;
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
        <Header counts= {this.props.counts} data = {this.props.data} loadSearchData = {this.props.loadSearchData} />
        <MainSection ajaxStatus = {this.props.ajaxStatus} data = {this.props.data}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data,
    counts: state.counts,
    ajaxStatus: state.ajaxStatus
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadSearchData:(startDate,endDate,count,criteria)=> dispatch(searchFormActions.loadSearchData(startDate,endDate,count,criteria))
  };
}
