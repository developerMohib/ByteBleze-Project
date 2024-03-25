import React from "react";
const Home = () => {
  return (
    <div className="md:h-[80vh] flex justify-center items-center">
      <div className=" text-center md:w-2/5 mx-auto space-y-5">
        <h1 className="text-5xl font-bold">Welcome to <span>ByteBlaze</span> </h1>
        <p>ByteBlaze is the bridge between the complex world of technology and the curious minds eager to understand it</p>
        <button className="btn btn-primary mx-3">Read More</button>
        <button className="btn btn-primary mx-3"> BooksMarks </button>
      </div>
    </div>
  );
};

export default Home;
