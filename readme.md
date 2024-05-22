Client Side Rendering Vs Server Side Rendering

Client Side Rendering (CSR)

In CSR, the server sends a minimal HTML document to the browser.
The browser then requests for the JavaScript file which contains the logic to render the page.
The JavaScript file is executed in the browser and it makes an API call to fetch the data.
The data is then rendered in the browser.
Server Side Rendering (SSR)

In SSR, the server sends a fully rendered HTML document to the browser.
The browser receives the fully rendered HTML document and displays it.
Advantages of SSR

Better SEO: Search engines can crawl the content of the page easily.
Faster Time to Content: The browser receives the fully rendered HTML document and displays it immediately.


server1.1:
Node JS: a runtime built on hrome's v8 JS engine

npm packages:
-built-in Modules
- fs: file system
 -http : HTTP
 -url : URL
 -path: Path
- third party modules
 -Express: web framework
 Mongoose: MongoDB object modeling
 -MongoDB: MongoDB Driver
 -Socket.io: Real-time engine
 -Axios: Http client
 -Nodemon: Auto restart
 -nodemailer: Email
 -Multer: File Upload
 -Bcrypt: Password Hashing
 -JWT: JSON web token
 -Morgan: Logger
- custom modules
 - middleware : Middleware
 -config: configuration
 -routes: routes
 -models: models
 - controllers: controllers