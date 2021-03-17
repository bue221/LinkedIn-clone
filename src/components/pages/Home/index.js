import React, { useEffect, useState } from "react";

// import Calendar from 'react-at-to-calendar'

import { db } from "../../../firebase";

import MainLayout from "../../layouts/MainLayout";
import Post from "../../smallComponents/Post";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timesStamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  return (
    <MainLayout>
      {posts?.map((i) => (
        <Post {...i.data} key={i.id} />
      ))}
      {/* <Post /> */}
      {/* <Calendar /> */}
    </MainLayout>
  );
};

export default Home;
