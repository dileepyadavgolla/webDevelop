import { Component } from "react";
import EachItem from "./components/EachItem";
import "./App.css";

class App extends Component {
  state = { list: [], page: 1 };

  componentDidMount() {
    this.getDetails();
  }

  getDetails = async () => {
    try {
      const options = { method: "GET" };
      const url = "http://www.mocky.io/v2/59b3f0b0100000e30b236b7e";
      const response = await fetch(url, options);

      const data = await response.json();
      console.log(data);
      const { posts } = data;

      const updated = posts.map((each) => ({
        id: each.id,
        eventName: each.event_name,
        eventDate: each.event_date,
        likes: each.likes,
        shares: each.shares,
        thumbNailImage: each.thumbnail_image,
        views: each.views,
      }));
      console.log(updated);

      this.setState({ list: updated });
    } catch (e) {
      console.log("error");
    }
  };

  button3 = async () => {
    const options = { method: "GET" };
    const url = "http://www.mocky.io/v2/59ac293b100000d60bf9c239 ";
    const response = await fetch(url, options);

    const data = await response.json();
    console.log(data);
    const { posts } = data;

    const updated = posts.map((each) => ({
      id: each.id,
      eventName: each.event_name,
      eventDate: each.event_date,
      likes: each.likes,
      shares: each.shares,
      thumbNailImage: each.thumbnail_image,
      views: each.views,
    }));
    console.log(updated);

    this.setState({ list: updated });
  };

  button2 = async () => {
    const options = { method: "GET" };
    const url = "http://www.mocky.io/v2/59ac28a9100000ce0bf9c236 ";
    const response = await fetch(url, options);

    const data = await response.json();
    console.log(data);
    const { posts } = data;

    const updated = posts.map((each) => ({
      id: each.id,
      eventName: each.event_name,
      eventDate: each.event_date,
      likes: each.likes,
      shares: each.shares,
      thumbNailImage: each.thumbnail_image,
      views: each.views,
    }));
    console.log(updated);

    this.setState({ list: updated });
  };

  button1 = async () => {
    const options = { method: "GET" };
    const url = "http://www.mocky.io/v2/59b3f0b0100000e30b236b7e ";
    const response = await fetch(url, options);

    const data = await response.json();
    console.log(data);
    const { posts } = data;

    const updated = posts.map((each) => ({
      id: each.id,
      eventName: each.event_name,
      eventDate: each.event_date,
      likes: each.likes,
      shares: each.shares,
      thumbNailImage: each.thumbnail_image,
      views: each.views,
    }));
    console.log(updated);
    this.setState({ list: updated });
  };

  renderItems = () => {
    const { list } = this.state;
    return (
      <ul>
        {list.map((each) => (
          <EachItem key={each.name} each={each} />
        ))}
      </ul>
    );
  };

  render() {
    const { page } = this.state;
    return (
      <>
        {page === 1 && this.renderItems()}

        <button onClick={this.button1} className="button">
          1
        </button>
        <button onClick={this.button2} className="button">
          2
        </button>
        <button onClick={this.button3} className="button">
          3
        </button>
      </>
    );
  }
}

export default App;
