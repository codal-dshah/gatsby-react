"use strict";

exports.__esModule = true;
exports.addSiteMeasurement = addSiteMeasurement;
exports.aggregateStats = aggregateStats;
exports.captureEvent = captureEvent;
exports.decorateEvent = decorateEvent;
exports.expressMiddleware = expressMiddleware;
exports.flush = void 0;
exports.isTrackingEnabled = isTrackingEnabled;
exports.setDefaultComponentId = setDefaultComponentId;
exports.setDefaultTags = setDefaultTags;
exports.setGatsbyCliVersion = setGatsbyCliVersion;
exports.setTelemetryEnabled = setTelemetryEnabled;
exports.startBackgroundUpdate = startBackgroundUpdate;
exports.trackBuildError = trackBuildError;
exports.trackCli = trackCli;
exports.trackError = trackError;
exports.trackFeatureIsUsed = trackFeatureIsUsed;
/* eslint-disable @typescript-eslint/no-unused-vars */

const flush = () => Promise.resolve();
exports.flush = flush;
function trackFeatureIsUsed(_name) {
  // no_op
}
function trackCli(_input, _tags, _opts) {
  // no_op
}
function captureEvent(_input, _tags, _opts) {
  // no_op
}
function trackError(_input, _tags) {
  // no_op
}
function trackBuildError(_input, _tags) {
  // no_op
}
function setDefaultTags(_tags) {
  // no_op
}
function decorateEvent(_event, _tags) {
  // no_op
}
function setTelemetryEnabled(_enabled) {
  // no_op
}
function startBackgroundUpdate() {
  // no_op
}
function isTrackingEnabled() {
  return false;
}
function aggregateStats(data) {
  const sum = data.reduce((acc, x) => acc + x, 0);
  const mean = sum / data.length || 0;
  const median = data.sort()[Math.floor((data.length - 1) / 2)] || 0;
  const stdDev = Math.sqrt(data.reduce((acc, x) => acc + Math.pow(x - mean, 2), 0) / (data.length - 1)) || 0;
  const skewness = data.reduce((acc, x) => acc + Math.pow(x - mean, 3), 0) / data.length / Math.pow(stdDev, 3);
  return {
    count: data.length,
    min: data.reduce((acc, x) => x < acc ? x : acc, data[0] || 0),
    max: data.reduce((acc, x) => x > acc ? x : acc, 0),
    sum: sum,
    mean: mean,
    median: median,
    stdDev: stdDev,
    skewness: !Number.isNaN(skewness) ? skewness : 0
  };
}
function addSiteMeasurement(_event, _obj) {
  // no_op
}
function expressMiddleware(_source) {
  return function (_req, _res, next) {
    // no_op
    next();
  };
}

// Internal
function setDefaultComponentId(_componentId) {
  // no_op
}
function setGatsbyCliVersion(_version) {
  // no_op
}
module.exports = {
  addSiteMeasurement,
  aggregateStats,
  captureEvent,
  decorateEvent,
  expressMiddleware,
  flush,
  isTrackingEnabled,
  setDefaultComponentId,
  setDefaultTags,
  setGatsbyCliVersion,
  setTelemetryEnabled,
  startBackgroundUpdate,
  trackBuildError,
  trackCli,
  trackError,
  trackFeatureIsUsed
};