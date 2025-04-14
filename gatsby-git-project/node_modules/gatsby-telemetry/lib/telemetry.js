"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.AnalyticsTracker = void 0;
var fs = _interopRequireWildcard(require("fs-extra"));
var _os = _interopRequireDefault(require("os"));
var _gatsbyCoreUtils = require("gatsby-core-utils");
var _repositoryId = require("./repository-id");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/* eslint-disable @typescript-eslint/no-unused-vars */

const finalEventRegex = /(END|STOP)$/;
class AnalyticsTracker {
  debouncer = {};
  metadataCache = {};
  defaultTags = {};
  sessionId = this.getSessionId();
  siteHash = (0, _gatsbyCoreUtils.createContentDigest)(process.cwd());
  lastEnvTagsFromFileTime = 0;
  lastEnvTagsFromFileValue = {};
  constructor(_arg = {}) {
    // no-op
  }

  // We might have two instances of this lib loaded, one from globally installed gatsby-cli and one from local gatsby.
  // Hence we need to use process level globals that are not scoped to this module.
  // Due to the forking on develop process, we also need to pass this via process.env so that child processes have the same sessionId
  getSessionId() {
    const p = process;
    if (!p.gatsbyTelemetrySessionId) {
      const inherited = process.env.INTERNAL_GATSBY_TELEMETRY_SESSION_ID;
      if (inherited) {
        p.gatsbyTelemetrySessionId = inherited;
      } else {
        p.gatsbyTelemetrySessionId = _gatsbyCoreUtils.uuid.v4();
        process.env.INTERNAL_GATSBY_TELEMETRY_SESSION_ID = p.gatsbyTelemetrySessionId;
      }
    } else if (!process.env.INTERNAL_GATSBY_TELEMETRY_SESSION_ID) {
      // in case older `gatsby-telemetry` already set `gatsbyTelemetrySessionId` property on process
      // but didn't set env var - let's make sure env var is set
      process.env.INTERNAL_GATSBY_TELEMETRY_SESSION_ID = p.gatsbyTelemetrySessionId;
    }
    return p.gatsbyTelemetrySessionId;
  }
  getRepositoryId() {
    if (!this.repositoryId) {
      this.repositoryId = (0, _repositoryId.getRepositoryId)();
    }
    return this.repositoryId;
  }
  getTagsFromEnv() {
    return {};
  }
  getGatsbyVersion() {
    try {
      const packageJson = require.resolve(`gatsby/package.json`);
      const {
        version
      } = JSON.parse(fs.readFileSync(packageJson, `utf-8`));
      return version;
    } catch (e) {
      // ignore
    }
    return `-0.0.0`;
  }
  getGatsbyCliVersion() {
    try {
      const jsonfile = require.resolve(`gatsby-cli/package.json`);
      const {
        version
      } = JSON.parse(fs.readFileSync(jsonfile, `utf-8`));
      return version;
    } catch (e) {
      // ignore
    }
    return `-0.0.0`;
  }
  trackCli(_type = ``, _tags = {}, _opts = {
    debounce: false
  }) {}
  captureEvent(_type = ``, _tags = {}, _opts = {
    debounce: false
  }) {}
  isFinalEvent(event) {
    return finalEventRegex.test(event);
  }
  captureError(_type, _tags = {}) {}
  captureBuildError(_type, _tags = {}) {}
  formatErrorAndStoreEvent(_eventType, _tags) {}
  buildAndStoreEvent(_eventType, _tags) {}
  getTagsFromPath() {
    return {};
  }
  getIsTTY() {
    var _process$stdout;
    return Boolean((_process$stdout = process.stdout) === null || _process$stdout === void 0 ? void 0 : _process$stdout.isTTY);
  }
  getMachineId() {
    return ``;
  }
  isTrackingEnabled() {
    return false;
  }
  getOsInfo() {
    if (this.osInfo) {
      return this.osInfo;
    }
    const cpus = _os.default.cpus();
    const osInfo = {
      nodeVersion: process.version,
      platform: _os.default.platform(),
      release: _os.default.release(),
      cpus: cpus && cpus.length > 0 && cpus[0].model || undefined,
      arch: _os.default.arch(),
      ci: false,
      ciName: null,
      docker: false,
      termProgram: (0, _gatsbyCoreUtils.getTermProgram)(),
      isTTY: this.getIsTTY()
    };
    this.osInfo = osInfo;
    return osInfo;
  }
  trackActivity(_source, _tags = {}) {}
  decorateNextEvent(_event, _obj) {}
  addSiteMeasurement(_event, _obj) {}
  decorateAll(_tags) {}
  setTelemetryEnabled(_enabled) {}
  aggregateStats(data) {
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
  captureMetadataEvent() {}
  async sendEvents() {
    return true;
  }
  trackFeatureIsUsed(_name) {}
}
exports.AnalyticsTracker = AnalyticsTracker;