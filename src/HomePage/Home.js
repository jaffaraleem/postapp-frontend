// src/components/Home.js

import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [postText, setPostText] = useState("");
  const [posts, setPosts] = useState([]);
  const [initialDataLoaded, setInitialDataLoaded] = useState(false);

  useEffect(() => {
    // Load initial data when the component is first mounted
    if (!initialDataLoaded) {
      fetchSendData();
      setInitialDataLoaded(true);
    }
  }, [initialDataLoaded]);

  const fetchSendData = () => {
    axios
      .get("http://3.144.31.134:5000/send_data") // Replace with your Flask API URL
      .then((response) => {
        if (response.status === 200) {
          const responseData = response.data;
          const keys = Object.keys(responseData);

          // Convert responseData object into an array of posts
          const newPosts = Object.keys(responseData).map(
            (postId) => responseData[postId]
          );

          // Update the state with the new posts
          setPosts([...posts, ...newPosts]);
          console.log(posts);

          // Handle the received data, e.g., update state
        } else {
          console.error("Failed to fetch data.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handlePost = () => {
    // Prepare the data to send in the request body

    const data = {
      text: postText,
      author: "Jaffar",
      date: new Date().toLocaleString(),
    };

    fetch("http://3.144.31.134:5000/post_data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Include the following header for CORS
        Origin: "http://3.144.31.134",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          return response.json(); // Assuming the Flask API returns JSON
        } else {
          throw new Error("Failed to post data.");
        }
      })
      .then((responseData) => {
        console.log(responseData); // Log the response from the Flask API
      })
      .catch((error) => {
        console.error(error);
      });
    if (postText) {
      const newPost = data;
      setPosts([...posts, newPost]);
      setPostText("");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column", // Stack items vertically
        background: "#f0f0f0", // Set the background color
      }}
    >
      <div
        style={{
          padding: "20px",
          borderRadius: "5px",
          width: "400px",
          background: "white", // Set a white background for the post container
          border: "1px solid black", // Add a black border
        }}
      >
        <textarea
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
          placeholder="Write your post..."
          rows="4"
          cols="50"
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center", // Center the button horizontally
            marginTop: "10px", // Add spacing above the button
          }}
        >
          <button
            onClick={handlePost}
            style={{
              backgroundColor: "green",
              color: "white",
              padding: "10px 20px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Post
          </button>
        </div>
      </div>

      <div style={{ marginTop: "20px", width: "400px" }}>
        {posts.map((post, index) => (
          <div
            key={index}
            style={{
              padding: "10px",
              borderRadius: "5px",
              marginBottom: "10px",
              fontSize: "14px", // Smaller font
              background: "white", // Set a white background for the post box
              border: "1px solid black", // Add a black border
            }}
          >
            <p>{post.text}</p>
            <p style={{ fontSize: "12px" }}>
              {post.author} - {post.date}{" "}
              {/* Display author, date, and time in one line */}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
