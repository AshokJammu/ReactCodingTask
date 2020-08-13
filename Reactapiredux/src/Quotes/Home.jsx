import React from "react";
// import axios from "axios";
import { getRandomQuote } from "../redux/action";
import { connect } from "react-redux";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoading: false,
    };
  }

  componentDidMount() {
    this.props.getQuote();
  }

  render() {
    const { data } = this.props;
    const { isLoading } = this.state;
    // console.log(data.data, "ash");
    let obj = data.data;
    console.log(obj);
    return (
      <>
        {/* <!-- Card --> */}
        <div
          class="card card-image bg-dark"
          // style={{
          //   "background-image":
          //     "url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)",
          // }}
        >
          {/* <!-- Conte/nt --> */}
          <div class="rgba-black-strong py-5 px-5">
            <div class="row d-flex justify-content-center">
              <div class="col-md-10 col-xl-8">
                {/* <!--Accordion wrapper--> */}
                <div
                  class="accordion md-accordion accordion-5"
                  id="accordionEx5"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  {/* <!-- Accordion card --> */}
                  <div class="card mb-0">
                    {obj &&
                      obj.map((item) => (
                        <>
                          <div
                            class="card-header p-0 z-depth-1"
                            role="tab"
                            id={item.id}
                          >
                            <a
                              data-toggle="collapse"
                              data-parent="#accordionEx5"
                              href="#collapse30"
                              aria-expanded="true"
                              aria-controls="collapse30"
                            >
                              <i
                                class="fas fa-cloud fa-2x p-3 mr-4 float-left black-text"
                                aria-hidden="true"
                              ></i>
                              <h6 class="text white-text mb-0 py-3 mt-1">
                                {item.event_date_utc}
                              </h6>
                            </a>
                          </div>

                          {/* <!-- Card body --> */}
                          <div
                            id="collapse30"
                            class="collapse show"
                            role="tabpanel"
                            aria-labelledby={item.id}
                            data-parent="#accordionEx5"
                          >
                            <div class="card-body rgba-black-light white-text z-depth-1 bg-dark text-white">
                              <p class="p-md-2 mb-0">{`Rocket:`} {item.title}</p>
                              <p class="p-md-2 mb-0">{item.details}</p>
                            </div>
                          </div>
                        </>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Content --> */}
        </div>
        {/* <!-- Card --> */}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.randomData,
  isLoad: state.isLoad,
});

const mapDispatchTOProps = (dispatch) => ({
  getQuote: () => dispatch(getRandomQuote()),
});
export default connect(mapStateToProps, mapDispatchTOProps)(Home);
