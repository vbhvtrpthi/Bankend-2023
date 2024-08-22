[React link](https://chat.openai.com/share/65d1ed96-08e6-46b0-a576-8a5aa34b938c)

# Interview Qns
    - Can you walk us through a recent project you worked on and your specific contributions to it?
    - Frontend question node.js , Html,
    -  how I would optimize the performance of a website. They were particularly interested in my strategies for reducing page load times and improving overall user experience.
    - Solve a basic leet code question with a live compiler / interpreter
    - Design a html page (basic)
    - At the first round they asked questions from my resume since i had a project on chat application they asked about difference between socket.io and an api and mongo db vs mysql.After that they asked about coding round
    - Prepare recursion type of questions
    - Basic Javascript questions ,and Basic react questions, Experience in my previous project, mainly on Javascript and ES6
    - What is responsive design? What is the difference between fixed and fluid layouts?
    - Find longest the repeating substring
    - Java concepts and java script will be mandatory
    - You must be ready to work in different platforms
    - Why you want to work here?
    - They asked basic questions on Javascript, HTML, CSS, Rest API, JSON, Filtering the content, ReactJS
    - Write a program to display Fibonacci series
    - Node Js basic questions
    - what is grid system in bootstrap?
    - Questions on string programs

# Interview with Skanda
  - What is middleware
  - Coding Questions
    - I/p - "Vaaiiibbhhhh" , O/p - "V1a2i3b2h4"
    - I/p - "What is your name", O/p - "Name Your Is What"
  - what is props

<!-- --------------------------------------------------------------- Lazy Loading------------------------------------------------ -->

<details>
<summary>Responsive design | Fixed and Fluid layouts</summary>
Responsive design is an approach to web design that aims to provide an optimal viewing and interaction experience across a wide range of devices and screen sizes, from desktop computers to smartphones and tablets. The goal of responsive design is to ensure that websites adapt and respond seamlessly to the user's device and viewport size, providing a consistent and user-friendly experience regardless of the device being used.

Key principles of responsive design include:

1. **Fluid Grids:** Using relative units like percentages instead of fixed units like pixels to size elements on the page, allowing them to adapt and scale based on the viewport size.

2. **Flexible Images and Media:** Using CSS techniques such as `max-width: 100%` to ensure that images and media elements scale proportionally and do not exceed their container's width.

3. **Media Queries:** Using CSS media queries to apply different styles based on the device's characteristics, such as screen width, orientation, and resolution. This allows designers to create breakpoints at which the layout adjusts to accommodate different screen sizes.

4. **Content Prioritization:** Prioritizing content based on its importance and relevance to the user, and adjusting its presentation and layout accordingly. This may involve hiding or repositioning certain elements on smaller screens to maintain a clear and focused user experience.

Responsive design enables websites to deliver a consistent and optimized experience across all devices, improving usability, accessibility, and user satisfaction.

Now, let's discuss the difference between fixed and fluid layouts:

1. **Fixed Layouts:**
   - In a fixed layout, the dimensions of elements on the page are set using fixed units like pixels (px).
   - Elements have a fixed width and height, regardless of the viewport size or device being used.
   - Fixed layouts are rigid and do not adapt to different screen sizes, often resulting in horizontal scrolling or content overflow on smaller devices.
   - While fixed layouts may offer precise control over the design, they are not responsive and may lead to a poor user experience on devices with varying screen sizes.

2. **Fluid Layouts:**
   - In a fluid layout, elements on the page are sized using relative units like percentages (%).
   - Elements expand or contract based on the size of the viewport, adjusting dynamically to different screen sizes and resolutions.
   - Fluid layouts are more flexible and responsive, providing a better user experience across devices.
   - However, designing fluid layouts requires careful consideration of proportions and spacing to ensure that the design remains visually appealing and functional across a range of screen sizes.

In summary, while fixed layouts offer precise control over design elements, fluid layouts are more adaptable and responsive, making them better suited for modern web design and the diverse range of devices and screen sizes used by today's users.
</details>


<!-- ---------------------------------------------------- MongoDB and MySQL------------------------------------------------ -->

<details>

<summary> MongoDB and MySQL </summary>

The difference between MongoDB and MySQL lies primarily in their data models, query languages, schema flexibility, scalability, and use cases. Here's a breakdown of the key differences:

### 1. Data Model:
- **MongoDB:**
  - MongoDB is a NoSQL database that uses a document-oriented data model.
  - Data is stored in flexible JSON-like documents, allowing nested structures and dynamic schemas.
  - Collections contain documents, and each document can have a different structure.

- **MySQL:**
  - MySQL is a relational database management system (RDBMS) that uses a tabular data model.
  - Data is organized into tables with predefined schemas, where each row represents a record and each column represents an attribute.
  - Tables must adhere to a fixed schema defined by a predefined schema.

### 2. Query Language:
- **MongoDB:**
  - MongoDB uses a query language similar to JSON called MongoDB Query Language (MQL) or MongoDB Query Operators.
  - MQL supports complex queries, filtering, aggregation, and indexing.
  - It also supports JavaScript-based server-side scripting.

- **MySQL:**
  - MySQL uses Structured Query Language (SQL) for querying and manipulating data.
  - SQL is a standardized language for relational databases and supports a wide range of operations, including SELECT, INSERT, UPDATE, DELETE, and JOIN.

### 3. Schema Flexibility:
- **MongoDB:**
  - MongoDB offers schema flexibility, allowing documents within the same collection to have different structures.
  - Documents can be modified and extended without requiring a predefined schema.

- **MySQL:**
  - MySQL enforces a fixed schema for tables, where each column must adhere to a predefined data type and length.
  - Altering the schema of a table can be complex and may require downtime for schema changes.

### 4. Scalability:
- **MongoDB:**
  - MongoDB is designed to scale horizontally by distributing data across multiple nodes in a cluster.
  - It supports sharding, replication, and automatic failover for high availability and scalability.

- **MySQL:**
  - MySQL traditionally scales vertically by adding more resources (CPU, memory, storage) to a single server.
  - While MySQL supports replication and clustering for scaling out, it may not scale as easily or seamlessly as MongoDB for large-scale deployments.

### 5. Use Cases:
- **MongoDB:**
  - MongoDB is well-suited for applications with large volumes of unstructured or semi-structured data, such as social networks, content management systems, and real-time analytics.
  - It is often used in scenarios where flexibility, scalability, and performance are critical.

- **MySQL:**
  - MySQL is commonly used for applications that require ACID (Atomicity, Consistency, Isolation, Durability) compliance, such as e-commerce platforms, financial systems, and traditional relational data models.
  - It is ideal for applications with well-defined schemas and structured data.

In summary, MongoDB and MySQL serve different purposes and are optimized for different use cases. MongoDB offers flexibility, scalability, and performance for handling unstructured data and dynamic schemas, while MySQL provides reliability, transaction support, and strict data integrity for structured data and traditional relational databases. The choice between MongoDB and MySQL depends on the specific requirements and characteristics of your application.

</details>

<details>
<summary> map, filter, reduce, foreach </summary>
Sure, I'll provide examples of `map()`, `filter()`, and `reduce()` functions in JavaScript.

### 1. `map()`

The `map()` function creates a new array by applying a provided function to each element of the original array.

Example:
```javascript
const numbers = [1, 2, 3, 4, 5];

// Double each number in the array
const doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled numbers:", doubledNumbers);
```

Output:
```
Doubled numbers: [2, 4, 6, 8, 10]
```

### 2. `filter()`

The `filter()` function creates a new array with elements that pass a test specified by a provided function.

Example:
```javascript
const numbers = [1, 2, 3, 4, 5];

// Filter out even numbers
const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log("Odd numbers:", oddNumbers);
```

Output:
```
Odd numbers: [1, 3, 5]
```

### 3. `reduce()`

The `reduce()` function applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

Example:
```javascript
const numbers = [1, 2, 3, 4, 5];

// Calculate the sum of all numbers in the array
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of numbers:", sum);
```

Output:
```
Sum of numbers: 15
```

### 4. `forEach()`

The `forEach()` function executes a provided function once for each array element.

Example:
```javascript
const colors = ['red', 'green', 'blue'];

// Log each color in the array
colors.forEach(color => console.log(color));
```

Output:
```
red
green
blue
```

These are some of the most commonly used array functions in JavaScript. They provide powerful tools for manipulating arrays and are essential for functional programming paradigms in JavaScript.
</details>