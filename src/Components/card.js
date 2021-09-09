
import React, { Component } from "react";

class UserCards extends Component {
  state = {
    data: [],
    per: 1,
    page: 1,
    total_pages: null
  };

  uppercase = word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  loadData = () => {
    const { per, page, data } = this.state;
    const endpoint = `https://randomuser.me/api/?nat=us&results=${per}&page=${page}`;
    fetch(endpoint)
      .then(response => response.json())
      .then(json => {
        this.setState({
          data: [...data, ...json.results],
          scrolling: false,
          total_pages: json.info.results
        });
      });
  };

  loadMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
        scrolling: true
      }),
      this.loadData
    );
  };

  componentDidMount() {
    this.loadData();
  }

  render() {
    return (
      <div className="clearfix">
        <div className="row">
          {this.state.data.map(data => (
            <div className="col-md-4 animated fadeIn" key={data.id.value}>
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu1x52b0zQg1dqTHNLsEQXQzxj2HdlxUdTUg&usqp=CAU"}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h5 className="card-title">
        Product Name
                  </h5>
                  <p className="card-text">
                Category
                    <br />
                    
                    <span className="phone">SKU#4547452542745</span>
                  </p>
                  <p className="card-text">
               Order# 45454
                    <br />
                    
                    <span className="phone">Request#112</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
     
      </div>
    );
  }
}

export default UserCards;
