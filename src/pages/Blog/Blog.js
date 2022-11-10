import React from "react";

const Blog = () => {
  return (
    <div className="mb-16">
        <div className='text-center mb-10'>
            <h3 className='inline-block text-2xl font-bold text-muted border-b-4 border-sky-500'>Blog</h3>
            </div>
      <div className="card w-full bg-base-100 shadow-2xl mb-8">
        <div className="card-body">

          <h3 className="font-bold text-xl">1. Difference between SQL and NoSQL</h3>
          <p>Ans: SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-2xl mb-8">
        <div className="card-body">

          <h3 className="font-bold text-xl">2. What is JWT, and how does it work?</h3>
          <p>Ans: JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-2xl mb-8">
        <div className="card-body">

          <h3 className="font-bold text-xl">3. What is the difference between javascript and NodeJS?</h3>
          <p>Ans: JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-2xl mb-8">
        <div className="card-body">

          <h3 className="font-bold text-xl">4. How does NodeJS handle multiple requests at the same time?</h3>
          <p>Ans: NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
