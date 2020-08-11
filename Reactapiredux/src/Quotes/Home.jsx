import React from "react";
// import axios from "axios";
import { getRandomQuote } from "../redux/action";
import { connect } from "react-redux";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoading: false
    };
  }

  componentDidMount() {
    this.props.getQuote();
  }

  // With out thunks

  // getQuote = async () => {
  //   try {
  //     this.setState({ isLoading: true });
  //     const { data } = await axios.get(
  //       "https://programming-quotes-api.herokuapp.com/quotes/random"
  //     );
  //     this.setState({ data, isLoading: false });
  //   } catch (err) {
  //     this.setState({
  //       isLoading: true
  //     });
  //   }
  // };

  render() {
    const { data } = this.props;
    const { isLoading } = this.state;
    // console.log(data.data, "ash");
    let obj = data.data;
    console.log(obj);
    return (
      <div>
        {isLoading && "loading"}
        {/* {!isLoading && data && data} */}
        {/* {isLoad && "loading"}
        {!isLoad && data && data.en} */}
        <br />
        {/* <button onClick={this.props.getQuote}>RANDOM QUOTE</button> */}
        {obj &&
          obj.map((item) => (
            <div key={item.id}>
              <h1>{item.title} </h1>
              <p>{item.details}</p>
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.randomData,
  isLoad: state.isLoad
});

const mapDispatchTOProps = (dispatch) => ({
  getQuote: () => dispatch(getRandomQuote())
});
export default connect(mapStateToProps, mapDispatchTOProps)(Home);
