/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v4.25.1
// source: TwitchBot.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./TwitchBot_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.TwitchBotServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.TwitchBotServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CheckJoinedRequest,
 *   !proto.CheckJoinedResponse>}
 */
const methodDescriptor_TwitchBotService_checkJoined = new grpc.web.MethodDescriptor(
  '/TwitchBotService/checkJoined',
  grpc.web.MethodType.UNARY,
  proto.CheckJoinedRequest,
  proto.CheckJoinedResponse,
  /**
   * @param {!proto.CheckJoinedRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CheckJoinedResponse.deserializeBinary
);


/**
 * @param {!proto.CheckJoinedRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.CheckJoinedResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CheckJoinedResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TwitchBotServiceClient.prototype.checkJoined =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/TwitchBotService/checkJoined',
      request,
      metadata || {},
      methodDescriptor_TwitchBotService_checkJoined,
      callback);
};


/**
 * @param {!proto.CheckJoinedRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CheckJoinedResponse>}
 *     Promise that resolves to the response
 */
proto.TwitchBotServicePromiseClient.prototype.checkJoined =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/TwitchBotService/checkJoined',
      request,
      metadata || {},
      methodDescriptor_TwitchBotService_checkJoined);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.JoinChannelRequest,
 *   !proto.JoinChannelResponse>}
 */
const methodDescriptor_TwitchBotService_joinChannel = new grpc.web.MethodDescriptor(
  '/TwitchBotService/joinChannel',
  grpc.web.MethodType.UNARY,
  proto.JoinChannelRequest,
  proto.JoinChannelResponse,
  /**
   * @param {!proto.JoinChannelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.JoinChannelResponse.deserializeBinary
);


/**
 * @param {!proto.JoinChannelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.JoinChannelResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.JoinChannelResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TwitchBotServiceClient.prototype.joinChannel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/TwitchBotService/joinChannel',
      request,
      metadata || {},
      methodDescriptor_TwitchBotService_joinChannel,
      callback);
};


/**
 * @param {!proto.JoinChannelRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.JoinChannelResponse>}
 *     Promise that resolves to the response
 */
proto.TwitchBotServicePromiseClient.prototype.joinChannel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/TwitchBotService/joinChannel',
      request,
      metadata || {},
      methodDescriptor_TwitchBotService_joinChannel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.LeaveChannelRequest,
 *   !proto.LeaveChannelResponse>}
 */
const methodDescriptor_TwitchBotService_leaveChannel = new grpc.web.MethodDescriptor(
  '/TwitchBotService/leaveChannel',
  grpc.web.MethodType.UNARY,
  proto.LeaveChannelRequest,
  proto.LeaveChannelResponse,
  /**
   * @param {!proto.LeaveChannelRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.LeaveChannelResponse.deserializeBinary
);


/**
 * @param {!proto.LeaveChannelRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.LeaveChannelResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.LeaveChannelResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TwitchBotServiceClient.prototype.leaveChannel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/TwitchBotService/leaveChannel',
      request,
      metadata || {},
      methodDescriptor_TwitchBotService_leaveChannel,
      callback);
};


/**
 * @param {!proto.LeaveChannelRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.LeaveChannelResponse>}
 *     Promise that resolves to the response
 */
proto.TwitchBotServicePromiseClient.prototype.leaveChannel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/TwitchBotService/leaveChannel',
      request,
      metadata || {},
      methodDescriptor_TwitchBotService_leaveChannel);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.TwitchBotAdminServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.TwitchBotAdminServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.TmiStatusRequest,
 *   !proto.TmiStatusResponse>}
 */
const methodDescriptor_TwitchBotAdminService_tmiStatus = new grpc.web.MethodDescriptor(
  '/TwitchBotAdminService/tmiStatus',
  grpc.web.MethodType.UNARY,
  proto.TmiStatusRequest,
  proto.TmiStatusResponse,
  /**
   * @param {!proto.TmiStatusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.TmiStatusResponse.deserializeBinary
);


/**
 * @param {!proto.TmiStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.TmiStatusResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.TmiStatusResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TwitchBotAdminServiceClient.prototype.tmiStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/TwitchBotAdminService/tmiStatus',
      request,
      metadata || {},
      methodDescriptor_TwitchBotAdminService_tmiStatus,
      callback);
};


/**
 * @param {!proto.TmiStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.TmiStatusResponse>}
 *     Promise that resolves to the response
 */
proto.TwitchBotAdminServicePromiseClient.prototype.tmiStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/TwitchBotAdminService/tmiStatus',
      request,
      metadata || {},
      methodDescriptor_TwitchBotAdminService_tmiStatus);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.StartTmiRequest,
 *   !proto.StartTmiResponse>}
 */
const methodDescriptor_TwitchBotAdminService_startTmi = new grpc.web.MethodDescriptor(
  '/TwitchBotAdminService/startTmi',
  grpc.web.MethodType.UNARY,
  proto.StartTmiRequest,
  proto.StartTmiResponse,
  /**
   * @param {!proto.StartTmiRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.StartTmiResponse.deserializeBinary
);


/**
 * @param {!proto.StartTmiRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.StartTmiResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.StartTmiResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TwitchBotAdminServiceClient.prototype.startTmi =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/TwitchBotAdminService/startTmi',
      request,
      metadata || {},
      methodDescriptor_TwitchBotAdminService_startTmi,
      callback);
};


/**
 * @param {!proto.StartTmiRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.StartTmiResponse>}
 *     Promise that resolves to the response
 */
proto.TwitchBotAdminServicePromiseClient.prototype.startTmi =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/TwitchBotAdminService/startTmi',
      request,
      metadata || {},
      methodDescriptor_TwitchBotAdminService_startTmi);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.StopTmiRequest,
 *   !proto.StopTmiResponse>}
 */
const methodDescriptor_TwitchBotAdminService_stopTmi = new grpc.web.MethodDescriptor(
  '/TwitchBotAdminService/stopTmi',
  grpc.web.MethodType.UNARY,
  proto.StopTmiRequest,
  proto.StopTmiResponse,
  /**
   * @param {!proto.StopTmiRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.StopTmiResponse.deserializeBinary
);


/**
 * @param {!proto.StopTmiRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.StopTmiResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.StopTmiResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TwitchBotAdminServiceClient.prototype.stopTmi =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/TwitchBotAdminService/stopTmi',
      request,
      metadata || {},
      methodDescriptor_TwitchBotAdminService_stopTmi,
      callback);
};


/**
 * @param {!proto.StopTmiRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.StopTmiResponse>}
 *     Promise that resolves to the response
 */
proto.TwitchBotAdminServicePromiseClient.prototype.stopTmi =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/TwitchBotAdminService/stopTmi',
      request,
      metadata || {},
      methodDescriptor_TwitchBotAdminService_stopTmi);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GetJoinedChannelsRequest,
 *   !proto.GetJoinedChannelsResponse>}
 */
const methodDescriptor_TwitchBotAdminService_getJoinedChannels = new grpc.web.MethodDescriptor(
  '/TwitchBotAdminService/getJoinedChannels',
  grpc.web.MethodType.UNARY,
  proto.GetJoinedChannelsRequest,
  proto.GetJoinedChannelsResponse,
  /**
   * @param {!proto.GetJoinedChannelsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetJoinedChannelsResponse.deserializeBinary
);


/**
 * @param {!proto.GetJoinedChannelsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.GetJoinedChannelsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GetJoinedChannelsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.TwitchBotAdminServiceClient.prototype.getJoinedChannels =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/TwitchBotAdminService/getJoinedChannels',
      request,
      metadata || {},
      methodDescriptor_TwitchBotAdminService_getJoinedChannels,
      callback);
};


/**
 * @param {!proto.GetJoinedChannelsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GetJoinedChannelsResponse>}
 *     Promise that resolves to the response
 */
proto.TwitchBotAdminServicePromiseClient.prototype.getJoinedChannels =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/TwitchBotAdminService/getJoinedChannels',
      request,
      metadata || {},
      methodDescriptor_TwitchBotAdminService_getJoinedChannels);
};


module.exports = proto;

