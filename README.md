# Multicultural Center of Marin

```
git clone git@github.com:KamesCG/multicultural.git

yarn

```

Contributors are welcome.

The Multicultural Center of Marin Code repository is an Open Source Distributed Autonomous Organization Dashboard.

It aims to solve the challenge of organizing, managing and facilitating a large distributed network of people. The Application is built with React and Firebase. As of right now, the primary objective is to refine the user experience, so non-technical people can more easily interact with a Disitrubted Autonomous Organization.

The Application Site, Dashboard, Progressisve Web Application and Browser Extension, which all share a similar codebase Javascript codebase. The Application Departments will share a unified authentication, database and storage system. Distributed Autonomous Organization participants will be able to access important information from all devices/browsers.

### How It's Built
The Frontend is primary built with React, Redux and Redux Saga.

The Backend is primary built with React, Redux and Redux Saga.


### The Data Structure
A DAO is responsible for organizing the world's entities.

An entity is at the core of the data model. People, Organizations, Events, Tasks, Resources, Projects, Tools, Vehicles, and more are all entities.

A distributed autonomous organization 

Why do we need an interface for a distributed autonomous organization?

Distributed autonomous organization is a newly discovered concept arising from the emergence of blockchain technology, and specifically Turing complete blockchain technology. However, we are in the beginning stages of understanding how to Properly construct a distributed autonomous organization at scale. 

A distributed autonomous organization is a new  way of thinking.

It is difficult to conceptualise.

 For most, the idea contradicts the current model’s operating rules.
Components
The Particles folder is a fork of the Rebass, styled components GitHub repo. The particles main objective is to provide the basic design building design blocks such as background color, shadows, border, with, height for the atomic components. The simple design API allows for easy design composition. Components can quickly add shadows, change their heights, and even add properties specific two new features such as flexbox and grid. This particular approach allows for a fluid and dynamic design approach. Allowing developers to quickly prototype new layouts using shorthand design patterns.

The components branch is comprised of the core react components. The atomic folder contains the basic building blocks, such as paragraphs, lists, images, links, containers, shapes. In addition it goes up and complexity with things such as fields public and private routes sliders and tables.
Container 
Containers are primarily responsible for fetching and managing State with Redux. That being said, there may be a few instances where containers are responsible for interacting with different application mechanisms, besides just Redux. For example the Mining container  interacts with the coin hive application by loading the Javascript mining tool asynchronously, when a user requests the feature.

The primary Application containers are Firestore and Graph.

The Firestore containers interacts with the Firebase NoSQL database, using the redux-saga-firebase module package. Currently, a forked Branch is being used to experiment with the new firestore schema features. As the project progresses will merge our findings into the primary redux-saga Firebase module package. 

The Graph container interacts with the GraphQL API hosted on Firebase’s serverless Cloud Functions. The current implementation is very basic. Providing the simple ability to query lists of data with map, filter and reduce in conjunction with the limited real-time database query mechanisms. In fact the code is still a little messy, so excuse me ;)

The code is primarily remnants of when Firebase did not have a NoSQL database, as there were attempts to overcome the somewhat challenging limits of a simple JSON data tree using GraphQL. An integrated NoSQL database was critical.

In the future realtime communications, like secure chat, be rerouted through the application GraphQL query/resolver model, so the codebase fortunately does serve a purpose.

Important to note, is application information, which communicates with outside, third-party API and is also very time sensitive to user experience, will be held in the real-time database, as opposed to the Firestore NoSQL database. The real-time database has a quicker response time then the NoSQL database therefore, when communication infrastructure features, such as phone call monitoring and rerouting, it will be more advantageous to store application data in the more readily accessible JSON data structure,  to optimize user experience.

Because of this, it will be important to run the GraphQL server when using specific communications features, such as the Communication Hotline/Call Center features. It will allow users to easily query and double check the real-time database.
