# ExpressJS-Introduction-to-RestAPI

## What are REST APIs and why do we use them?

"Representational State Transfer"

Rest APIs are used to transfer data instead of user interfaces. They are commonly used in mobile apps and single page web apps where the frontend is decoupled from the server. Rest APIs allow the frontend to fetch the data it needs and render the user interface using browser-side JavaScript.

### Highlights

📱 Mobile apps and single page web apps don't work with server-side rendered HTML code, so they use Rest APIs to fetch data and build the user interface using pre-built UI widgets.

♻️ Single page web apps can re-render parts of the page without reloading or refreshing by using browser-side JavaScript to manipulate the DOM and fetch data from a backend Rest API.

🌐 Rest APIs are also useful when you only need to fetch data without requiring a user interface, such as using the Google Maps API to retrieve coordinates.

💻 Rest APIs don't change the server-side logic for handling databases, validation, and file management. The main difference is in the response and request data.

🔄 Rest APIs and traditional web apps that render views on the server are not fundamentally different. They share most of the server-side knowledge, with the main distinction being in how the views are rendered.

## Routing

🛣️ Routing is the process of determining how an application responds to a specific request.

📡 HTTP methods, also known as verbs, specify the type of action the request wants to perform.

🌐 GET method retrieves data from a specified resource.

💾 POST method submits data to be processed by a specified resource.

🔄 PUT method updates a resource with new data.

❌ DELETE method removes a specified resource.

🔀 Understanding routing and HTTP methods is crucial for building efficient and secure web applications.
