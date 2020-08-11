import React from "react";
import { connect } from "react-redux";
import { getQuoteList } from "../redux/action";
class QuoteItem extends React.Component {
  componentDidMount() {
    const page = this.props.match.params.page;
    this.props.getQuoteList(page);
  }

  componentWillReceiveProps(newProps) {
    // console.log(newProps.match, this.props.match);
    let { page: newPage } = newProps.match.params;
    let { page } = this.props.match.params;

    if (newPage !== page) {
      const page = this.props.match.params.page;
      this.props.getQuoteList(page);
    }
  }

  render() {
    const { listData, page } = this.props;
    console.log(this.props.listData, page, "li");
    return (
      <div>
        {this.props.listData?.map((item) => (
          <div key={item.id}>{item.payload_id}</div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  listData: state.listData
});

const mapDispatchToProps = (dispatch) => ({
  getQuoteList: (page) => dispatch(getQuoteList(page))
});
export default connect(mapStateToProps, mapDispatchToProps)(QuoteItem);
