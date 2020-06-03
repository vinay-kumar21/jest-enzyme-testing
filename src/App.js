import React from "react";
import "./App.scss";

import HeadLine from "./components/Headline";
import Header from "./components/Header";
import SharedButton from "./components/Button";
import Listitem from "./components/ListItem";
import { connect } from "react-redux";
import { fetchPosts } from "./action/actionCreator";

const tempArr = [
  {
    fName: "vinay",
    lName: "kumar",
    email: "vinaykumar@gmail.com",
    age: 29,
    onlineStatus: true
  }
];

function App({ posts, fetchPosts }) {
  const fetch = () => {
    fetchPosts();
  };

  const configButton = {
    buttonText: "Get postss",
    emitEvent: fetch
  };

  return (
    <div className="App" data-test='appComponent'>
      <Header />
      <section className="main">
        <HeadLine
          header="Posts"
          desc="Click Button to get the Posts"
          tempArr={tempArr}
        />
        <SharedButton {...configButton} />

        {posts.length > 0 && (
          <div>
            {posts.map((post, index) => {
              const { title, body } = post;
              const configList = {
                title,
                desc: body
              };
              return <Listitem key={index} {...configList} />;
            })}
          </div>
        )}
      </section>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps, { fetchPosts })(App);
