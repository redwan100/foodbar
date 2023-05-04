import React from 'react'
import SectionTitle from '../Shared/SectionTitle';

const blogs = [
  {
    id: 1,
    question:
      "What is differences between uncontrolled and controlled components?",
    answer:
      "differences between uncontrolled and controlled components. Uncontrolled components may be unpredictable in their behavior, while controlled components are generally more predictable because they are managed according to predetermined rules or guidelines.",
  },
  {
    id: 2,
    question: "How to validate React props using PropTypes?",
    answer: `
PropTypes is a built-in feature in React that allows you to specify the type and shape of data that should be passed to a React component as props. It is a way to validate the props that are passed to a component and to ensure that they conform to the expected format`,
  },
  {
    id: 3,
    question: "What is difference between nodejs and express js?",
    answer: `Node.js and Express.js are both JavaScript-based technologies used in building web applications, but they serve different purposes:

Node.js is a server-side runtime environment for JavaScript that allows developers to build server-side applications in JavaScript. It provides a JavaScript runtime environment outside of the web browser, allowing developers to write server-side code in JavaScript. Node.js provides a number of built-in modules that enable developers to build scalable, high-performance applications.

Express.js, on the other hand, is a web application framework that is built on top of Node.js. It provides a set of features and tools for building web applications and APIs, such as routing, middleware, and templating. Express.js allows developers to easily handle HTTP requests and responses, as well as implement RESTful APIs.`,
  },
  {
    id: 4,
    question: "What is a custom hook, and why will you create a custom hook?",
    answer: `A custom hook is a function that allows you to encapsulate reusable logic that can be shared across multiple React components. Custom hooks follow the same rules as React's built-in hooks, but are defined by the developer and can be used to abstract away complex logic or functionality.`,
  },
];
const Blog = () => {
  return (
    <div className='section'>
        <div className='my-8'>
            <SectionTitle title={"FAQ"}/>
        </div>
      <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {blogs.map((blog) => (
          <div className="card bg-base-100 shadow-xl" key={blog.id}>
            <div className="card-body">
              <h2 className="card-title">{blog.question}</h2>
              <p>{blog.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog