import React from "react";
import { Link, Route } from "react-router-dom";
import { connect } from "react-redux";
import QuoteItem from "./QuoteItem";
class QuoteList extends React.Component {
  render() {
    // console.log(this.props.listData, "list1");
    const { listData } = this.props;
    let len = listData.length;
    let perPage = 10;
    let pages = Math.ceil(len / perPage);
    // console.log(len, pages);
    let arrPage = [];
    for (var i = 1; i <= pages; i++) {
      arrPage.push(i);
    }

    return (
      <div>
        <br />
        {arrPage.map((page) => (
          <Link style={{ padding: 20 }} key={page} to={`/list/${page}`}>
            {page}
          </Link>
        ))}

        {/* <Route
          path="/list/:page"
          render={({ match }) => <div>{match.params.page}</div>}
        /> */}

        <Route
          path="/list/:page"
          render={(props) => <QuoteItem {...props} />}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  listData: state.listData
});

export default connect(mapStateToProps, null)(QuoteList);
