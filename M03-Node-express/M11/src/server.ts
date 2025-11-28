import http, { IncomingMessage, Server, ServerResponse } from "http";
import config from "./config";

const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    console.log("server is running...");

    // root route
    if (req.url === "/" && req.method === "GET") {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(
        JSON.stringify({ message: "Hello from node js with ts", path: req.url })
      );
    }
    // health route
    if (req.url === "/api" && req.method === "GET") {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(
        JSON.stringify({ message: "Health status is Okay", path: req.url })
      );
    }
    if (req.url === "/api/user" && req.method === "POST") {
      // const body = {
      //   id: 12,
      //   name: "Boivob",
      // };
      // res.writeHead(200, { "content-type": "application/json" });
      // res.end(JSON.stringify({ data: body, path: req.url }));
      let body = "";

      req.on("data", (chunk) => {
        body += chunk.toString();
      });

      req.on("end", () => {
        try {
          const parseBody = JSON.parse(body);
          console.log(parseBody);
          res.end(JSON.stringify(parseBody));
        } catch (error) {
          console.log(error);
        }
      });
    }
  }
);

server.listen(config.port, () => {
  console.log(`server is running on port ${config.port}`);
});
