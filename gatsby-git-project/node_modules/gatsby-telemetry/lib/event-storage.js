"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.EventStorage = void 0;
var _path = _interopRequireDefault(require("path"));
var _store = require("./store");
var _fsExtra = require("fs-extra");
var _inMemoryStore = require("./in-memory-store");
/* eslint-disable @typescript-eslint/no-unused-vars */

/* The events data collection is a spooled process that
 * buffers events to a local fs based buffer
 * which then is asynchronously flushed to the server.
 * This both increases the fault tolerance and allows collection
 * to continue even when working offline.
 */
class EventStorage {
  analyticsApi = process.env.GATSBY_TELEMETRY_API;
  constructor() {
    this.config = new _inMemoryStore.InMemoryConfigStore();
    const baseDir = _path.default.dirname(this.config.path);
    try {
      (0, _fsExtra.ensureDirSync)(baseDir);
    } catch (e) {
      // TODO: Log this event
    }
    this.store = new _store.Store(baseDir);
    this.verbose = false;
    this.debugEvents = false;
    this.disabled = true;
  }
  isTrackingDisabled() {
    return this.disabled;
  }
  addEvent(_event) {}
  async sendEvents() {
    return true;
  }
  async submitEvents(_events) {
    return true;
  }
  getUserAgent() {
    try {
      const {
        name,
        version
      } = require(`../package.json`);
      return `${name}:${version}`;
    } catch (e) {
      return `Gatsby Telemetry`;
    }
  }
  getConfig(key) {
    if (key) {
      return this.config.get(key);
    }
    return this.config.all();
  }
  updateConfig(key, value) {
    return this.config.set(key, value);
  }
}
exports.EventStorage = EventStorage;