const Cohort = require("../models/CohortModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const factory = require("./handlerFactory");

exports.getAllCohorts = factory.getAll(Cohort);

exports.getCohort = factory.getOne(Cohort, { path: "cohort-lead" });

exports.createCohort = factory.createOne(Cohort);
exports.updateCohort = factory.updateOne(Cohort);
exports.deleteCohort = factory.deleteOne(Cohort);
