import React from 'react';
import './Blog.css'
import useTitle from './../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog');

    return (
        <div className='blog'>            
            <h3> Difference between SQL and NoSQL:</h3>
            <p>SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database.</p>
            <p>SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores. This makes relational SQL databases a better option for applications that require multi-row transactions such as an accounting system or for legacy systems that were built for a relational structure.</p>

            
            <h3>What is JWT, and how does it work?</h3>
            <p>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.</p>
            <p>It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.</p>
            <p>The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. </p>
            <p>JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.</p>                        
            

            <h3>What is the difference between javascript and NodeJS?</h3>
            <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
            
            <h3>How does NodeJS handle multiple requests at the same time?</h3>
            <p> NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>

        </div>
    );
};

export default Blog;