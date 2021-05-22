const path = require("path");
const express = require("express");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const cors = require("cors");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const userRouter = require("./routes/userRoutes");
const cohortRouter = require("./routes/cohortRoutes");

const app = express();
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//middlewares
//1)MIDDLE WARES
//global
//Enables cross origin resourse sharing
//Access-control-Allow-Origin
app.use(cors());
app.options("*", cors());
// app.options('/api/v1/tours/:id', cors());
//Serving static file
app.use(express.static(path.join(__dirname, "public")));
//limit requests from same api
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "To many requests from this ip please try again in an hour",
});
app.use("/api", limiter);

app.use(express.urlencoded({ extended: false, limit: "10kb" }));
app.use(cookieParser());
//app.use(express.static(`${__dirname}/public`));
//development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
//Body parser,reading data from body to req.body
app.use(
  express.json({
    limit: "10kb",
  })
);
//Data sanitization against no sql query injection
app.use(mongoSanitize());
//Data sanitixation against XSS
app.use(xss());
//prevent parameter pollution
app.use(
  hpp({
    whitelist: [
      "duration",
      "ratingsAverage",
      "ratingsQuantity",
      "maxGroupSize",
      "difficulty",
      "price",
    ],
  })
);
app.use(compression());
//test middle ware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.cookies);
  next();
});
//Routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/cohort", cohortRouter);

module.exports = app;
