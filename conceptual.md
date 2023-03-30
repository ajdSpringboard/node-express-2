### Conceptual Exercise

Answer the following questions below:

- What is a JWT?

```It is a type of token used in web applications for authorization```

- What is the signature portion of the JWT?  What does it do?

```It's the part used to verify the authenticity of the token (i.e. makes sure the information being passed is coming from the correct source).```

- If a JWT is intercepted, can the attacker see what's inside the payload?

```Yes, the attacker can see the contents of the JWT payload as it is base64-encoded, not encrypted.```

- How can you implement authentication with a JWT?  Describe how it works at a high level.

```User goes to log in. If username and password match, it generates a JWT with user information like 'username' and 'admin'. The JWT is then stored on the client side so that it can be resent with every subsequent request to the server. Server receives the token and uses to verify that the source of the request is valid, and so are the credentials.```

- Compare and contrast unit, integration and end-to-end tests.

```Unit tests are small tests that check individual pieces of code, integration tests check how different pieces of code work together, and end-to-end tests check the entire application as a user would experience it.```

- What is a mock? What are some things you would mock?

```A mock is a simulated object used in unit testing to mimic the behavior of real objects, and can be used to simulate external resources like databases, APIs, network connections, or user input.```

- What is continuous integration?

```Continuous Integration (CI) is a software development practice that involves regularly integrating code changes from multiple developers into a shared code repository and running automated tests to ensure that the changes do not break the build.```

- What is an environment variable and what are they used for?

```An environment variable is a variable that is part of the operating system environment and can be accessed by applications running on the system. They are used to store configuration settings, system paths, and other information that applications need to run, and can be set, modified, and read by applications as needed.```

- What is TDD? What are some benefits and drawbacks?

```TDD (test-driven development) is writing automated tests before writing code. Pros: better code quality, improved design, faster feedback, increased confidence, easier refactoring. Cons: initial setup time, test maintenance, over-reliance on tests.```

- What is the value of using JSONSchema for validation?

```JSONSchema is useful for validating the structure and data types of JSON data to ensure that it conforms to a specific schema or format. It helps catch errors early, improve data quality, and ensure consistency and interoperability between different systems.```

- What are some ways to decide which code to test?

```Code that is important to the functionality, critical to user experience, prone to errors, complex, or frequently changing should be prioritized for testing.```

- What does `RETURNING` do in SQL? When would you use it?

```RETURNING in SQL is used to return the data that was modified or inserted in a query. It is useful when you want to retrieve the data that was affected by an INSERT, UPDATE, or DELETE statement.```

- What are some differences between Web Sockets and HTTP?

```Web Sockets allow for real-time, bidirectional communication between a client and server, while HTTP is a request-response protocol that is stateless and unidirectional. Web Sockets have lower latency and overhead, but may not be supported by all browsers and require a persistent connection. HTTP is more widely supported but has higher overhead and is less suitable for real-time communication.```

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?

  ```At first I was more excited to use Express, but after going through both, I miss the simplicity of Flask and how much easier it was to get started. If flask had more documentation, I would pick it as my favorite. Express seems more widely used and has documentation for everything, and is way more customizable, so I think I will grow to love that more in the long run.```
