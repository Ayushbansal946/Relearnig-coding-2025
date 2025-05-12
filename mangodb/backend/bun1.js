import{serve} from "bun";
import { createServer } from "http";
import { parse } from "url";

serve({
  port: 3000,
  fetch(request) {
    const { pathname } = parse(request.url, true);
    if (pathname === "/") {
      return new Response("Hello you are in bun main page\n", {
        status: 200,
        headers: { "Content-Type": "text/plain" },
      });
    } else if (pathname === "/about") {
      return new Response("Hello you are in about page\n", {
        status: 200,
        headers: { "Content-Type": "text/plain" },
      });
    } else {
      return new Response("404 Not Found\n", {
        status: 404,
        headers: { "Content-Type": "text/plain" },
      });
    }
  },
});