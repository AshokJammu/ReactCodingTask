import React from "react";
import { Link, Route } from "react-router-dom";
import { connect } from "react-redux";
import { getQuoteList } from "../redux/action";
class Payloads extends React.Component {
  constructor(props){
    super(props)
    this.state={
      currentPage:1
    }
  }
    
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

  handleClick=(page)=>{
    console.log(page,"paf")
    this.setState({
      currentPage:page
    })
  }
  render() {
    const { listData } = this.props;
    const {currentPage} = this.state
    // console.log(this.props.listData, page, "li");
    let length = listData.length;
    let pages = Math.ceil(length / 15);
    console.log(length, pages);
    let arrPage = [];
    for (var i = 1; i <= pages; i++) {
      arrPage.push(i);
    }
    // console.log(arrPage);

    let startIndex = 15 *( currentPage-1)
    let endIndex = 15 * currentPage
    console.log(startIndex,endIndex)
    return (
      <div>
        <div>
          {arrPage.map((page) => (
            // <Link style={{ padding: 20 }} key={page} to={`/list/${page}`}>
            //    {page}
            // </Link>
            <button onClick={()=>{this.handleClick(page)}}>{page}</button>
          ))}
        </div>
        <br />
        <div class="row ">
          {listData?.
          filter((item,index)=>{
            if(index>=startIndex && index< endIndex){
              return item
            }
            return
          })
          .map((item) => (
            <div class="col-sm-4">
              <div class="card mb-3 card-cascade bg-dark text-white">
                <div class="card-body ">
                  <h5 class="card-title card-header-title">{item.payload_id}</h5>
                  <p class="card-text ">{item.payload_type}</p>
                  <button class="btn btn-primary">{item.nationality}</button>
                </div>
                <div>
                  {/* <button class="btn btn-primary text-white">
                     Manufacturer:{item.manufacturer}
                  </button> */}
                  </div>
                  <div>
                  <button  class="btn btn-primary text-white">
                    Customers: {item.customers[0]}
                  </button>
                </div>
              </div>
            </div>
          ))}  
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  listData: state.listData,
});

const mapDispatchToProps = (dispatch) => ({
  getQuoteList: (page) => dispatch(getQuoteList(page)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Payloads);
