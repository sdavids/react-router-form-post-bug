import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("/to-uppercase", "to-uppercase.server.js"),
  route("/to-lowercase", "to-lowercase.server.js"),
];
