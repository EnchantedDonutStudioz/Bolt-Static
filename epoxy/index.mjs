// node_modules/.pnpm/@mercuryworkshop+epoxy-tls@2.1.14-1/node_modules/@mercuryworkshop/epoxy-tls/full/epoxy-bundled.js
import { object_get, object_set, convert_body_inner, entries_of_object_inner, define_property, ws_key, from_entries } from "data:application/javascript;base64,CmV4cG9ydCBmdW5jdGlvbiBvYmplY3RfZ2V0KG9iaiwgaykgeyAKCXRyeSB7CgkJcmV0dXJuIG9ialtrXQoJfSBjYXRjaCh4KSB7CgkJcmV0dXJuIHVuZGVmaW5lZAoJfQp9OwpleHBvcnQgZnVuY3Rpb24gb2JqZWN0X3NldChvYmosIGssIHYpIHsKCXRyeSB7IG9ialtrXSA9IHYgfSBjYXRjaCB7fQp9OwoKZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbnZlcnRfYm9keV9pbm5lcihib2R5KSB7CglsZXQgcmVxID0gbmV3IFJlcXVlc3QoIiIsIHsgbWV0aG9kOiAiUE9TVCIsIGR1cGxleDogImhhbGYiLCBib2R5IH0pOwoJbGV0IHR5cGUgPSByZXEuaGVhZGVycy5nZXQoImNvbnRlbnQtdHlwZSIpOwoJcmV0dXJuIFtuZXcgVWludDhBcnJheShhd2FpdCByZXEuYXJyYXlCdWZmZXIoKSksIHR5cGVdOwp9CgpleHBvcnQgZnVuY3Rpb24gZW50cmllc19vZl9vYmplY3RfaW5uZXIob2JqKSB7CglyZXR1cm4gT2JqZWN0LmVudHJpZXMob2JqKS5tYXAoeCA9PiB4Lm1hcChTdHJpbmcpKTsKfQoKZXhwb3J0IGZ1bmN0aW9uIGRlZmluZV9wcm9wZXJ0eShvYmosIGssIHYpIHsKCU9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGssIHsgdmFsdWU6IHYsIHdyaXRhYmxlOiBmYWxzZSB9KTsKfQoKZXhwb3J0IGZ1bmN0aW9uIHdzX2tleSgpIHsKCWxldCBrZXkgPSBuZXcgVWludDhBcnJheSgxNik7CgljcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKGtleSk7CglyZXR1cm4gYnRvYShTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIGtleSkpOwp9CgpleHBvcnQgZnVuY3Rpb24gZnJvbV9lbnRyaWVzKGVudHJpZXMpewogICAgdmFyIHJldCA9IHt9OwogICAgZm9yKHZhciBpID0gMDsgaSA8IGVudHJpZXMubGVuZ3RoOyBpKyspIHJldFtlbnRyaWVzW2ldWzBdXSA9IGVudHJpZXNbaV1bMV07CiAgICByZXR1cm4gcmV0Owp9Cg==";
var wasm;
var WASM_VECTOR_LEN = 0;
var cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
  if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
    cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
  }
  return cachedUint8ArrayMemory0;
}
var cachedTextEncoder = typeof TextEncoder !== "undefined" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} };
var encodeString = typeof cachedTextEncoder.encodeInto === "function" ? function(arg, view) {
  return cachedTextEncoder.encodeInto(arg, view);
} : function(arg, view) {
  const buf = cachedTextEncoder.encode(arg);
  view.set(buf);
  return {
    read: arg.length,
    written: buf.length
  };
};
function passStringToWasm0(arg, malloc, realloc) {
  if (realloc === void 0) {
    const buf = cachedTextEncoder.encode(arg);
    const ptr2 = malloc(buf.length, 1) >>> 0;
    getUint8ArrayMemory0().subarray(ptr2, ptr2 + buf.length).set(buf);
    WASM_VECTOR_LEN = buf.length;
    return ptr2;
  }
  let len = arg.length;
  let ptr = malloc(len, 1) >>> 0;
  const mem = getUint8ArrayMemory0();
  let offset = 0;
  for (; offset < len; offset++) {
    const code = arg.charCodeAt(offset);
    if (code > 127) break;
    mem[ptr + offset] = code;
  }
  if (offset !== len) {
    if (offset !== 0) {
      arg = arg.slice(offset);
    }
    ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
    const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
    const ret = encodeString(arg, view);
    offset += ret.written;
    ptr = realloc(ptr, len, offset, 1) >>> 0;
  }
  WASM_VECTOR_LEN = offset;
  return ptr;
}
function isLikeNone(x) {
  return x === void 0 || x === null;
}
var cachedDataViewMemory0 = null;
function getDataViewMemory0() {
  if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || cachedDataViewMemory0.buffer.detached === void 0 && cachedDataViewMemory0.buffer !== wasm.memory.buffer) {
    cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
  }
  return cachedDataViewMemory0;
}
var cachedTextDecoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }) : { decode: () => {
  throw Error("TextDecoder not available");
} };
if (typeof TextDecoder !== "undefined") {
  cachedTextDecoder.decode();
}
function getStringFromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}
function debugString(val) {
  const type = typeof val;
  if (type == "number" || type == "boolean" || val == null) {
    return `${val}`;
  }
  if (type == "string") {
    return `"${val}"`;
  }
  if (type == "symbol") {
    const description = val.description;
    if (description == null) {
      return "Symbol";
    } else {
      return `Symbol(${description})`;
    }
  }
  if (type == "function") {
    const name = val.name;
    if (typeof name == "string" && name.length > 0) {
      return `Function(${name})`;
    } else {
      return "Function";
    }
  }
  if (Array.isArray(val)) {
    const length = val.length;
    let debug = "[";
    if (length > 0) {
      debug += debugString(val[0]);
    }
    for (let i = 1; i < length; i++) {
      debug += ", " + debugString(val[i]);
    }
    debug += "]";
    return debug;
  }
  const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
  let className;
  if (builtInMatches.length > 1) {
    className = builtInMatches[1];
  } else {
    return toString.call(val);
  }
  if (className == "Object") {
    try {
      return "Object(" + JSON.stringify(val) + ")";
    } catch (_) {
      return "Object";
    }
  }
  if (val instanceof Error) {
    return `${val.name}: ${val.message}
${val.stack}`;
  }
  return className;
}
var CLOSURE_DTORS = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((state) => {
  wasm.__wbindgen_export_3.get(state.dtor)(state.a, state.b);
});
function makeClosure(arg0, arg1, dtor, f) {
  const state = { a: arg0, b: arg1, cnt: 1, dtor };
  const real = (...args) => {
    state.cnt++;
    try {
      return f(state.a, state.b, ...args);
    } finally {
      if (--state.cnt === 0) {
        wasm.__wbindgen_export_3.get(state.dtor)(state.a, state.b);
        state.a = 0;
        CLOSURE_DTORS.unregister(state);
      }
    }
  };
  real.original = state;
  CLOSURE_DTORS.register(real, state, state);
  return real;
}
function __wbg_adapter_34(arg0, arg1, arg2) {
  wasm.closure17_externref_shim(arg0, arg1, arg2);
}
function __wbg_adapter_37(arg0, arg1) {
  wasm._dyn_core__ops__function__Fn_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h9620c6e330ab9ade(arg0, arg1);
}
function makeMutClosure(arg0, arg1, dtor, f) {
  const state = { a: arg0, b: arg1, cnt: 1, dtor };
  const real = (...args) => {
    state.cnt++;
    const a = state.a;
    state.a = 0;
    try {
      return f(a, state.b, ...args);
    } finally {
      if (--state.cnt === 0) {
        wasm.__wbindgen_export_3.get(state.dtor)(a, state.b);
        CLOSURE_DTORS.unregister(state);
      } else {
        state.a = a;
      }
    }
  };
  real.original = state;
  CLOSURE_DTORS.register(real, state, state);
  return real;
}
function __wbg_adapter_40(arg0, arg1, arg2) {
  wasm.closure201_externref_shim(arg0, arg1, arg2);
}
function __wbg_adapter_43(arg0, arg1) {
  wasm._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h5b9bb78a0733b92d(arg0, arg1);
}
function addToExternrefTable0(obj) {
  const idx = wasm.__externref_table_alloc();
  wasm.__wbindgen_export_2.set(idx, obj);
  return idx;
}
function handleError(f, args) {
  try {
    return f.apply(this, args);
  } catch (e) {
    const idx = addToExternrefTable0(e);
    wasm.__wbindgen_exn_store(idx);
  }
}
function passArrayJsValueToWasm0(array, malloc) {
  const ptr = malloc(array.length * 4, 4) >>> 0;
  const mem = getDataViewMemory0();
  for (let i = 0; i < array.length; i++) {
    mem.setUint32(ptr + 4 * i, addToExternrefTable0(array[i]), true);
  }
  WASM_VECTOR_LEN = array.length;
  return ptr;
}
function getArrayJsValueFromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  const mem = getDataViewMemory0();
  const result = [];
  for (let i = ptr; i < ptr + 4 * len; i += 4) {
    result.push(wasm.__wbindgen_export_2.get(mem.getUint32(i, true)));
  }
  wasm.__externref_drop_slice(ptr, len);
  return result;
}
function _assertClass(instance, klass) {
  if (!(instance instanceof klass)) {
    throw new Error(`expected instance of ${klass.name}`);
  }
  return instance.ptr;
}
function takeFromExternrefTable0(idx) {
  const value = wasm.__wbindgen_export_2.get(idx);
  wasm.__externref_table_dealloc(idx);
  return value;
}
function notDefined(what) {
  return () => {
    throw new Error(`${what} is not defined`);
  };
}
function __wbg_adapter_171(arg0, arg1, arg2, arg3) {
  wasm.closure139_externref_shim(arg0, arg1, arg2, arg3);
}
function getArrayU8FromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}
var __wbindgen_enum_BinaryType = ["blob", "arraybuffer"];
var EpoxyClientFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_epoxyclient_free(ptr >>> 0, 1));
var EpoxyClient = class {
  toJSON() {
    return {
      redirect_limit: this.redirect_limit,
      user_agent: this.user_agent,
      buffer_size: this.buffer_size
    };
  }
  toString() {
    return JSON.stringify(this);
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    EpoxyClientFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_epoxyclient_free(ptr, 0);
  }
  /**
   * @returns {number}
   */
  get redirect_limit() {
    const ret = wasm.__wbg_get_epoxyclient_redirect_limit(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * @param {number} arg0
   */
  set redirect_limit(arg0) {
    wasm.__wbg_set_epoxyclient_redirect_limit(this.__wbg_ptr, arg0);
  }
  /**
   * @returns {string}
   */
  get user_agent() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.__wbg_get_epoxyclient_user_agent(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @param {string} arg0
   */
  set user_agent(arg0) {
    const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_epoxyclient_user_agent(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * @returns {number}
   */
  get buffer_size() {
    const ret = wasm.__wbg_get_epoxyclient_buffer_size(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * @param {number} arg0
   */
  set buffer_size(arg0) {
    wasm.__wbg_set_epoxyclient_buffer_size(this.__wbg_ptr, arg0);
  }
  /**
   * @param {EpoxyWispTransport} transport
   * @param {EpoxyClientOptions} options
   */
  constructor(transport, options) {
    _assertClass(options, EpoxyClientOptions);
    var ptr0 = options.__destroy_into_raw();
    const ret = wasm.epoxyclient_new(transport, ptr0);
    if (ret[2]) {
      throw takeFromExternrefTable0(ret[1]);
    }
    this.__wbg_ptr = ret[0] >>> 0;
    EpoxyClientFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
  /**
   * @returns {Promise<void>}
   */
  replace_stream_provider() {
    const ret = wasm.epoxyclient_replace_stream_provider(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {EpoxyHandlers} handlers
   * @param {EpoxyUrlInput} url
   * @param {(string)[]} protocols
   * @param {EpoxyWebSocketHeadersInput} headers
   * @returns {Promise<EpoxyWebSocket>}
   */
  connect_websocket(handlers, url, protocols, headers) {
    _assertClass(handlers, EpoxyHandlers);
    var ptr0 = handlers.__destroy_into_raw();
    const ptr1 = passArrayJsValueToWasm0(protocols, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.epoxyclient_connect_websocket(this.__wbg_ptr, ptr0, url, ptr1, len1, headers);
    return ret;
  }
  /**
   * @param {EpoxyUrlInput} url
   * @returns {Promise<EpoxyIoStream>}
   */
  connect_tcp(url) {
    const ret = wasm.epoxyclient_connect_tcp(this.__wbg_ptr, url);
    return ret;
  }
  /**
   * @param {EpoxyUrlInput} url
   * @returns {Promise<EpoxyIoStream>}
   */
  connect_tls(url) {
    const ret = wasm.epoxyclient_connect_tls(this.__wbg_ptr, url);
    return ret;
  }
  /**
   * @param {EpoxyUrlInput} url
   * @returns {Promise<EpoxyIoStream>}
   */
  connect_udp(url) {
    const ret = wasm.epoxyclient_connect_udp(this.__wbg_ptr, url);
    return ret;
  }
  /**
   * @param {EpoxyUrlInput} url
   * @param {object} options
   * @returns {Promise<Response>}
   */
  fetch(url, options) {
    const ret = wasm.epoxyclient_fetch(this.__wbg_ptr, url, options);
    return ret;
  }
};
var EpoxyClientOptionsFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_epoxyclientoptions_free(ptr >>> 0, 1));
var EpoxyClientOptions = class {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    EpoxyClientOptionsFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_epoxyclientoptions_free(ptr, 0);
  }
  /**
   * @returns {boolean}
   */
  get wisp_v2() {
    const ret = wasm.__wbg_get_epoxyclientoptions_wisp_v2(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * @param {boolean} arg0
   */
  set wisp_v2(arg0) {
    wasm.__wbg_set_epoxyclientoptions_wisp_v2(this.__wbg_ptr, arg0);
  }
  /**
   * @returns {boolean}
   */
  get udp_extension_required() {
    const ret = wasm.__wbg_get_epoxyclientoptions_udp_extension_required(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * @param {boolean} arg0
   */
  set udp_extension_required(arg0) {
    wasm.__wbg_set_epoxyclientoptions_udp_extension_required(this.__wbg_ptr, arg0);
  }
  /**
   * @returns {boolean}
   */
  get title_case_headers() {
    const ret = wasm.__wbg_get_epoxyclientoptions_title_case_headers(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * @param {boolean} arg0
   */
  set title_case_headers(arg0) {
    wasm.__wbg_set_epoxyclientoptions_title_case_headers(this.__wbg_ptr, arg0);
  }
  /**
   * @returns {boolean}
   */
  get ws_title_case_headers() {
    const ret = wasm.__wbg_get_epoxyclientoptions_ws_title_case_headers(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * @param {boolean} arg0
   */
  set ws_title_case_headers(arg0) {
    wasm.__wbg_set_epoxyclientoptions_ws_title_case_headers(this.__wbg_ptr, arg0);
  }
  /**
   * @returns {(string)[]}
   */
  get websocket_protocols() {
    const ret = wasm.__wbg_get_epoxyclientoptions_websocket_protocols(this.__wbg_ptr);
    var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v1;
  }
  /**
   * @param {(string)[]} arg0
   */
  set websocket_protocols(arg0) {
    const ptr0 = passArrayJsValueToWasm0(arg0, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_epoxyclientoptions_websocket_protocols(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * @returns {number}
   */
  get redirect_limit() {
    const ret = wasm.__wbg_get_epoxyclientoptions_redirect_limit(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * @param {number} arg0
   */
  set redirect_limit(arg0) {
    wasm.__wbg_set_epoxyclientoptions_redirect_limit(this.__wbg_ptr, arg0);
  }
  /**
   * @returns {number}
   */
  get header_limit() {
    const ret = wasm.__wbg_get_epoxyclientoptions_header_limit(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * @param {number} arg0
   */
  set header_limit(arg0) {
    wasm.__wbg_set_epoxyclientoptions_header_limit(this.__wbg_ptr, arg0);
  }
  /**
   * @returns {string}
   */
  get user_agent() {
    let deferred1_0;
    let deferred1_1;
    try {
      const ret = wasm.__wbg_get_epoxyclientoptions_user_agent(this.__wbg_ptr);
      deferred1_0 = ret[0];
      deferred1_1 = ret[1];
      return getStringFromWasm0(ret[0], ret[1]);
    } finally {
      wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
  }
  /**
   * @param {string} arg0
   */
  set user_agent(arg0) {
    const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_epoxyclientoptions_user_agent(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * @returns {(string)[]}
   */
  get pem_files() {
    const ret = wasm.__wbg_get_epoxyclientoptions_pem_files(this.__wbg_ptr);
    var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v1;
  }
  /**
   * @param {(string)[]} arg0
   */
  set pem_files(arg0) {
    const ptr0 = passArrayJsValueToWasm0(arg0, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.__wbg_set_epoxyclientoptions_pem_files(this.__wbg_ptr, ptr0, len0);
  }
  /**
   * @returns {boolean}
   */
  get disable_certificate_validation() {
    const ret = wasm.__wbg_get_epoxyclientoptions_disable_certificate_validation(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
   * @param {boolean} arg0
   */
  set disable_certificate_validation(arg0) {
    wasm.__wbg_set_epoxyclientoptions_disable_certificate_validation(this.__wbg_ptr, arg0);
  }
  /**
   * @returns {number}
   */
  get buffer_size() {
    const ret = wasm.__wbg_get_epoxyclientoptions_buffer_size(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
   * @param {number} arg0
   */
  set buffer_size(arg0) {
    wasm.__wbg_set_epoxyclientoptions_buffer_size(this.__wbg_ptr, arg0);
  }
  constructor() {
    const ret = wasm.epoxyclientoptions_new_default();
    this.__wbg_ptr = ret >>> 0;
    EpoxyClientOptionsFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
};
var EpoxyHandlersFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_epoxyhandlers_free(ptr >>> 0, 1));
var EpoxyHandlers = class {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    EpoxyHandlersFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_epoxyhandlers_free(ptr, 0);
  }
  /**
   * @returns {Function}
   */
  get onopen() {
    const ret = wasm.__wbg_get_epoxyhandlers_onopen(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {Function} arg0
   */
  set onopen(arg0) {
    wasm.__wbg_set_epoxyhandlers_onopen(this.__wbg_ptr, arg0);
  }
  /**
   * @returns {Function}
   */
  get onclose() {
    const ret = wasm.__wbg_get_epoxyhandlers_onclose(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {Function} arg0
   */
  set onclose(arg0) {
    wasm.__wbg_set_epoxyhandlers_onclose(this.__wbg_ptr, arg0);
  }
  /**
   * @returns {Function}
   */
  get onerror() {
    const ret = wasm.__wbg_get_epoxyhandlers_onerror(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {Function} arg0
   */
  set onerror(arg0) {
    wasm.__wbg_set_epoxyhandlers_onerror(this.__wbg_ptr, arg0);
  }
  /**
   * @returns {Function}
   */
  get onmessage() {
    const ret = wasm.__wbg_get_epoxyhandlers_onmessage(this.__wbg_ptr);
    return ret;
  }
  /**
   * @param {Function} arg0
   */
  set onmessage(arg0) {
    wasm.__wbg_set_epoxyhandlers_onmessage(this.__wbg_ptr, arg0);
  }
  /**
   * @param {Function} onopen
   * @param {Function} onclose
   * @param {Function} onerror
   * @param {Function} onmessage
   */
  constructor(onopen, onclose, onerror, onmessage) {
    const ret = wasm.epoxyhandlers_new(onopen, onclose, onerror, onmessage);
    this.__wbg_ptr = ret >>> 0;
    EpoxyHandlersFinalization.register(this, this.__wbg_ptr, this);
    return this;
  }
};
var EpoxyWebSocketFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_epoxywebsocket_free(ptr >>> 0, 1));
var EpoxyWebSocket = class _EpoxyWebSocket {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_EpoxyWebSocket.prototype);
    obj.__wbg_ptr = ptr;
    EpoxyWebSocketFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    EpoxyWebSocketFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_epoxywebsocket_free(ptr, 0);
  }
  /**
   * @param {EpoxyWebSocketInput} payload
   * @returns {Promise<void>}
   */
  send(payload) {
    const ret = wasm.epoxywebsocket_send(this.__wbg_ptr, payload);
    return ret;
  }
  /**
   * @param {number} code
   * @param {string} reason
   * @returns {Promise<void>}
   */
  close(code, reason) {
    const ptr0 = passStringToWasm0(reason, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.epoxywebsocket_close(this.__wbg_ptr, code, ptr0, len0);
    return ret;
  }
};
var IntoUnderlyingByteSourceFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_intounderlyingbytesource_free(ptr >>> 0, 1));
var IntoUnderlyingSinkFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_intounderlyingsink_free(ptr >>> 0, 1));
var IntoUnderlyingSink = class _IntoUnderlyingSink {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_IntoUnderlyingSink.prototype);
    obj.__wbg_ptr = ptr;
    IntoUnderlyingSinkFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    IntoUnderlyingSinkFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_intounderlyingsink_free(ptr, 0);
  }
  /**
   * @param {any} chunk
   * @returns {Promise<any>}
   */
  write(chunk) {
    const ret = wasm.intounderlyingsink_write(this.__wbg_ptr, chunk);
    return ret;
  }
  /**
   * @returns {Promise<any>}
   */
  close() {
    const ptr = this.__destroy_into_raw();
    const ret = wasm.intounderlyingsink_close(ptr);
    return ret;
  }
  /**
   * @param {any} reason
   * @returns {Promise<any>}
   */
  abort(reason) {
    const ptr = this.__destroy_into_raw();
    const ret = wasm.intounderlyingsink_abort(ptr, reason);
    return ret;
  }
};
var IntoUnderlyingSourceFinalization = typeof FinalizationRegistry === "undefined" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((ptr) => wasm.__wbg_intounderlyingsource_free(ptr >>> 0, 1));
var IntoUnderlyingSource = class _IntoUnderlyingSource {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_IntoUnderlyingSource.prototype);
    obj.__wbg_ptr = ptr;
    IntoUnderlyingSourceFinalization.register(obj, obj.__wbg_ptr, obj);
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    IntoUnderlyingSourceFinalization.unregister(this);
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_intounderlyingsource_free(ptr, 0);
  }
  /**
   * @param {ReadableStreamDefaultController} controller
   * @returns {Promise<any>}
   */
  pull(controller) {
    const ret = wasm.intounderlyingsource_pull(this.__wbg_ptr, controller);
    return ret;
  }
  cancel() {
    const ptr = this.__destroy_into_raw();
    wasm.intounderlyingsource_cancel(ptr);
  }
};
async function __wbg_load(module2, imports) {
  if (typeof Response === "function" && module2 instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming === "function") {
      try {
        return await WebAssembly.instantiateStreaming(module2, imports);
      } catch (e) {
        if (module2.headers.get("Content-Type") != "application/wasm") {
          console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
        } else {
          throw e;
        }
      }
    }
    const bytes = await module2.arrayBuffer();
    return await WebAssembly.instantiate(bytes, imports);
  } else {
    const instance = await WebAssembly.instantiate(module2, imports);
    if (instance instanceof WebAssembly.Instance) {
      return { instance, module: module2 };
    } else {
      return instance;
    }
  }
}
function __wbg_get_imports() {
  const imports = {};
  imports.wbg = {};
  imports.wbg.__wbg_get_5419cf6b954aa11d = function(arg0, arg1) {
    const ret = arg0[arg1 >>> 0];
    return ret;
  };
  imports.wbg.__wbg_instanceof_Promise_f3fd1bcac3157f0c = function(arg0) {
    let result;
    try {
      result = arg0 instanceof Promise;
    } catch (_) {
      result = false;
    }
    const ret = result;
    return ret;
  };
  imports.wbg.__wbg_objectget_baa1e519f9224593 = function(arg0, arg1, arg2) {
    const ret = object_get(arg0, getStringFromWasm0(arg1, arg2));
    return ret;
  };
  imports.wbg.__wbg_getReader_584431a478f1339c = function() {
    return handleError(function(arg0) {
      const ret = arg0.getReader();
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_getWriter_2fe953e01e7ca9c5 = function() {
    return handleError(function(arg0) {
      const ret = arg0.getWriter();
      return ret;
    }, arguments);
  };
  imports.wbg.__wbindgen_string_get = function(arg0, arg1) {
    const obj = arg1;
    const ret = typeof obj === "string" ? obj : void 0;
    var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
  };
  imports.wbg.__wbindgen_is_falsy = function(arg0) {
    const ret = !arg0;
    return ret;
  };
  imports.wbg.__wbindgen_string_new = function(arg0, arg1) {
    const ret = getStringFromWasm0(arg0, arg1);
    return ret;
  };
  imports.wbg.__wbg_new_034f913e7636e987 = function() {
    const ret = new Array();
    return ret;
  };
  imports.wbg.__wbg_of_7e03bb557d6a64cc = function(arg0, arg1) {
    const ret = Array.of(arg0, arg1);
    return ret;
  };
  imports.wbg.__wbg_push_36cf4d81d7da33d1 = function(arg0, arg1) {
    const ret = arg0.push(arg1);
    return ret;
  };
  imports.wbg.__wbg_new_e69b5f66fda8f13c = function() {
    const ret = new Object();
    return ret;
  };
  imports.wbg.__wbg_setheaders_d48810c9779f36b3 = function(arg0, arg1) {
    arg0.headers = arg1;
  };
  imports.wbg.__wbg_setstatus_196540ea958edeed = function(arg0, arg1) {
    arg0.status = arg1;
  };
  imports.wbg.__wbg_setstatustext_4667131a60e2d571 = function(arg0, arg1, arg2) {
    arg0.statusText = getStringFromWasm0(arg1, arg2);
  };
  imports.wbg.__wbg_newwithoptreadablestreamandinit_37705e7046d5e4ff = function() {
    return handleError(function(arg0, arg1) {
      const ret = new Response(arg0, arg1);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_defineproperty_173f51b5070e4d5f = function(arg0, arg1, arg2, arg3) {
    define_property(arg0, getStringFromWasm0(arg1, arg2), arg3);
  };
  imports.wbg.__wbindgen_is_array = function(arg0) {
    const ret = Array.isArray(arg0);
    return ret;
  };
  imports.wbg.__wbg_objectset_14f5907b23d10288 = function(arg0, arg1, arg2, arg3) {
    object_set(arg0, getStringFromWasm0(arg1, arg2), arg3);
  };
  imports.wbg.__wbg_from_91a67a5f04c98a54 = function(arg0) {
    const ret = Array.from(arg0);
    return ret;
  };
  imports.wbg.__wbg_wskey_af4561c6b887374b = function(arg0) {
    const ret = ws_key();
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
  };
  imports.wbg.__wbg_epoxywebsocket_new = function(arg0) {
    const ret = EpoxyWebSocket.__wrap(arg0);
    return ret;
  };
  imports.wbg.__wbindgen_cb_drop = function(arg0) {
    const obj = arg0.original;
    if (obj.cnt-- == 1) {
      obj.a = 0;
      return true;
    }
    const ret = false;
    return ret;
  };
  imports.wbg.__wbg_cancel_2a3c2f3c115ac7e0 = function(arg0) {
    const ret = arg0.cancel();
    return ret;
  };
  imports.wbg.__wbg_catch_8097da4375a5dd1b = function(arg0, arg1) {
    const ret = arg0.catch(arg1);
    return ret;
  };
  imports.wbg.__wbg_clearTimeout_76877dbc010e786d = typeof clearTimeout == "function" ? clearTimeout : notDefined("clearTimeout");
  imports.wbg.__wbindgen_error_new = function(arg0, arg1) {
    const ret = new Error(getStringFromWasm0(arg0, arg1));
    return ret;
  };
  imports.wbg.__wbg_instanceof_Url_f00efbf8074b8fcf = function(arg0) {
    let result;
    try {
      result = arg0 instanceof URL;
    } catch (_) {
      result = false;
    }
    const ret = result;
    return ret;
  };
  imports.wbg.__wbg_href_07ab8fba72e97d85 = function(arg0, arg1) {
    const ret = arg1.href;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
  };
  imports.wbg.__wbg_new_fec2611eb9180f95 = function(arg0) {
    const ret = new Uint8Array(arg0);
    return ret;
  };
  imports.wbg.__wbg_newwithintounderlyingsink_3ea7ceafb3e69daf = function(arg0) {
    const ret = new WritableStream(IntoUnderlyingSink.__wrap(arg0));
    return ret;
  };
  imports.wbg.__wbg_setTimeout_75cb9b6991a4031d = function() {
    return handleError(function(arg0, arg1) {
      const ret = setTimeout(arg0, arg1);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_log_60cab0f75bd86a19 = function(arg0, arg1) {
    console.log(getStringFromWasm0(arg0, arg1));
  };
  imports.wbg.__wbg_convertbodyinner_334bc64cc9df7cf6 = function() {
    return handleError(function(arg0) {
      const ret = convert_body_inner(arg0);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_at_2c39eacdcce73361 = function(arg0, arg1) {
    const ret = arg0.at(arg1);
    return ret;
  };
  imports.wbg.__wbg_entriesofobjectinner_8f1e598667d5fe25 = function(arg0, arg1) {
    const ret = entries_of_object_inner(arg1);
    const ptr1 = passArrayJsValueToWasm0(ret, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
  };
  imports.wbg.__wbg_length_f217bbbf7e8e4df4 = function(arg0) {
    const ret = arg0.length;
    return ret;
  };
  imports.wbg.__wbg_error_73be9b25805f26cb = function(arg0, arg1) {
    console.error(getStringFromWasm0(arg0, arg1));
  };
  imports.wbg.__wbg_data_134d3a704b9fca32 = function(arg0) {
    const ret = arg0.data;
    return ret;
  };
  imports.wbg.__wbg_instanceof_Error_a0af335a62107964 = function(arg0) {
    let result;
    try {
      result = arg0 instanceof Error;
    } catch (_) {
      result = false;
    }
    const ret = result;
    return ret;
  };
  imports.wbg.__wbg_toString_4b677455b9167e31 = function(arg0) {
    const ret = arg0.toString();
    return ret;
  };
  imports.wbg.__wbg_read_08d62388e7870059 = function(arg0) {
    const ret = arg0.read();
    return ret;
  };
  imports.wbg.__wbg_done_510de141aaf69a99 = function(arg0) {
    const ret = arg0.done;
    return ret;
  };
  imports.wbg.__wbg_value_3ef4965e9c7085be = function(arg0) {
    const ret = arg0.value;
    return ret;
  };
  imports.wbg.__wbg_write_8516d1ea4c89b39d = function(arg0, arg1) {
    const ret = arg0.write(arg1);
    return ret;
  };
  imports.wbg.__wbg_abort_9e2d9deeb851d8ca = function(arg0) {
    const ret = arg0.abort();
    return ret;
  };
  imports.wbg.__wbg_fromentries_2748541dd6542310 = function() {
    return handleError(function(arg0) {
      const ret = from_entries(arg0);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_new_1073970097e5a420 = function(arg0, arg1) {
    try {
      var state0 = { a: arg0, b: arg1 };
      var cb0 = (arg02, arg12) => {
        const a = state0.a;
        state0.a = 0;
        try {
          return __wbg_adapter_171(a, state0.b, arg02, arg12);
        } finally {
          state0.a = a;
        }
      };
      const ret = new Promise(cb0);
      return ret;
    } finally {
      state0.a = state0.b = 0;
    }
  };
  imports.wbg.__wbg_send_fe006eb24f5e2694 = function() {
    return handleError(function(arg0, arg1, arg2) {
      arg0.send(getArrayU8FromWasm0(arg1, arg2));
    }, arguments);
  };
  imports.wbg.__wbindgen_is_function = function(arg0) {
    const ret = typeof arg0 === "function";
    return ret;
  };
  imports.wbg.__wbg_newwithstrsequence_e105150b01b32f72 = function() {
    return handleError(function(arg0, arg1, arg2) {
      const ret = new WebSocket(getStringFromWasm0(arg0, arg1), arg2);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_new_d550f7a7120dd942 = function() {
    return handleError(function(arg0, arg1) {
      const ret = new WebSocket(getStringFromWasm0(arg0, arg1));
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_setbinaryType_2befea8ba88b61e2 = function(arg0, arg1) {
    arg0.binaryType = __wbindgen_enum_BinaryType[arg1];
  };
  imports.wbg.__wbg_setonmessage_84cd941c1df08da7 = function(arg0, arg1) {
    arg0.onmessage = arg1;
  };
  imports.wbg.__wbg_setonopen_c0e1464e3ea28727 = function(arg0, arg1) {
    arg0.onopen = arg1;
  };
  imports.wbg.__wbg_setonclose_9a28780f7d46ed03 = function(arg0, arg1) {
    arg0.onclose = arg1;
  };
  imports.wbg.__wbg_setonerror_e16deca7fd15a59c = function(arg0, arg1) {
    arg0.onerror = arg1;
  };
  imports.wbg.__wbindgen_is_object = function(arg0) {
    const val = arg0;
    const ret = typeof val === "object" && val !== null;
    return ret;
  };
  imports.wbg.__wbg_subarray_975a06f9dbd16995 = function(arg0, arg1, arg2) {
    const ret = arg0.subarray(arg1 >>> 0, arg2 >>> 0);
    return ret;
  };
  imports.wbg.__wbg_getRandomValues_3aa56aa6edec874c = function() {
    return handleError(function(arg0, arg1) {
      arg0.getRandomValues(arg1);
    }, arguments);
  };
  imports.wbg.__wbindgen_memory = function() {
    const ret = wasm.memory;
    return ret;
  };
  imports.wbg.__wbg_buffer_ccaed51a635d8a2d = function(arg0) {
    const ret = arg0.buffer;
    return ret;
  };
  imports.wbg.__wbg_newwithbyteoffsetandlength_7e3eb787208af730 = function(arg0, arg1, arg2) {
    const ret = new Uint8Array(arg0, arg1 >>> 0, arg2 >>> 0);
    return ret;
  };
  imports.wbg.__wbg_randomFillSync_5c9c955aa56b6049 = function() {
    return handleError(function(arg0, arg1) {
      arg0.randomFillSync(arg1);
    }, arguments);
  };
  imports.wbg.__wbg_crypto_1d1f22824a6a080c = function(arg0) {
    const ret = arg0.crypto;
    return ret;
  };
  imports.wbg.__wbg_process_4a72847cc503995b = function(arg0) {
    const ret = arg0.process;
    return ret;
  };
  imports.wbg.__wbg_versions_f686565e586dd935 = function(arg0) {
    const ret = arg0.versions;
    return ret;
  };
  imports.wbg.__wbg_node_104a2ff8d6ea03a2 = function(arg0) {
    const ret = arg0.node;
    return ret;
  };
  imports.wbg.__wbindgen_is_string = function(arg0) {
    const ret = typeof arg0 === "string";
    return ret;
  };
  imports.wbg.__wbg_require_cca90b1a94a0255b = function() {
    return handleError(function() {
      const ret = module.require;
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_msCrypto_eb05e62b530a1508 = function(arg0) {
    const ret = arg0.msCrypto;
    return ret;
  };
  imports.wbg.__wbg_newwithlength_76462a666eca145f = function(arg0) {
    const ret = new Uint8Array(arg0 >>> 0);
    return ret;
  };
  imports.wbg.__wbg_get_ef828680c64da212 = function() {
    return handleError(function(arg0, arg1) {
      const ret = Reflect.get(arg0, arg1);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_now_d3cbc9581625f686 = function(arg0) {
    const ret = arg0.now();
    return ret;
  };
  imports.wbg.__wbg_call_a9ef466721e824f2 = function() {
    return handleError(function(arg0, arg1) {
      const ret = arg0.call(arg1);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_self_bf91bf94d9e04084 = function() {
    return handleError(function() {
      const ret = self.self;
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_window_52dd9f07d03fd5f8 = function() {
    return handleError(function() {
      const ret = window.window;
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_globalThis_05c129bf37fcf1be = function() {
    return handleError(function() {
      const ret = globalThis.globalThis;
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_global_3eca19bb09e9c484 = function() {
    return handleError(function() {
      const ret = global.global;
      return ret;
    }, arguments);
  };
  imports.wbg.__wbindgen_is_undefined = function(arg0) {
    const ret = arg0 === void 0;
    return ret;
  };
  imports.wbg.__wbg_newnoargs_1ede4bf2ebbaaf43 = function(arg0, arg1) {
    const ret = new Function(getStringFromWasm0(arg0, arg1));
    return ret;
  };
  imports.wbg.__wbg_instanceof_ArrayBuffer_74945570b4a62ec7 = function(arg0) {
    let result;
    try {
      result = arg0 instanceof ArrayBuffer;
    } catch (_) {
      result = false;
    }
    const ret = result;
    return ret;
  };
  imports.wbg.__wbg_call_3bfa248576352471 = function() {
    return handleError(function(arg0, arg1, arg2) {
      const ret = arg0.call(arg1, arg2);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_set_ec2fcf81bc573fd9 = function(arg0, arg1, arg2) {
    arg0.set(arg1, arg2 >>> 0);
  };
  imports.wbg.__wbg_length_9254c4bd3b9f23c4 = function(arg0) {
    const ret = arg0.length;
    return ret;
  };
  imports.wbg.__wbg_now_70af4fe37a792251 = function() {
    const ret = Date.now();
    return ret;
  };
  imports.wbg.__wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
  };
  imports.wbg.__wbindgen_debug_string = function(arg0, arg1) {
    const ret = debugString(arg1);
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
  };
  imports.wbg.__wbg_then_748f75edfb032440 = function(arg0, arg1) {
    const ret = arg0.then(arg1);
    return ret;
  };
  imports.wbg.__wbg_queueMicrotask_c5419c06eab41e73 = typeof queueMicrotask == "function" ? queueMicrotask : notDefined("queueMicrotask");
  imports.wbg.__wbg_then_4866a7d9f55d8f3e = function(arg0, arg1, arg2) {
    const ret = arg0.then(arg1, arg2);
    return ret;
  };
  imports.wbg.__wbg_queueMicrotask_848aa4969108a57e = function(arg0) {
    const ret = arg0.queueMicrotask;
    return ret;
  };
  imports.wbg.__wbg_resolve_0aad7c1484731c99 = function(arg0) {
    const ret = Promise.resolve(arg0);
    return ret;
  };
  imports.wbg.__wbg_close_cfd08d9cf9f36856 = function() {
    return handleError(function(arg0) {
      arg0.close();
    }, arguments);
  };
  imports.wbg.__wbg_enqueue_e693a6fb4f3261c1 = function() {
    return handleError(function(arg0, arg1) {
      arg0.enqueue(arg1);
    }, arguments);
  };
  imports.wbg.__wbg_byobRequest_86ac467c94924d3c = function(arg0) {
    const ret = arg0.byobRequest;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
  };
  imports.wbg.__wbg_view_de0e81c5c00d2129 = function(arg0) {
    const ret = arg0.view;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
  };
  imports.wbg.__wbg_byteLength_5d623ba3d92a3a9c = function(arg0) {
    const ret = arg0.byteLength;
    return ret;
  };
  imports.wbg.__wbg_close_7cda9dd901230214 = function() {
    return handleError(function(arg0) {
      arg0.close();
    }, arguments);
  };
  imports.wbg.__wbg_new_70a2f23d1565c04c = function(arg0, arg1) {
    const ret = new Error(getStringFromWasm0(arg0, arg1));
    return ret;
  };
  imports.wbg.__wbg_buffer_95102df5554646dc = function(arg0) {
    const ret = arg0.buffer;
    return ret;
  };
  imports.wbg.__wbg_byteOffset_ec0928143c619cd7 = function(arg0) {
    const ret = arg0.byteOffset;
    return ret;
  };
  imports.wbg.__wbg_sethighWaterMark_10a9c5bcdaa54044 = function(arg0, arg1) {
    arg0.highWaterMark = arg1;
  };
  imports.wbg.__wbg_newwithintounderlyingsource_db318e6b93dffa9b = function(arg0, arg1) {
    const ret = new ReadableStream(IntoUnderlyingSource.__wrap(arg0), arg1);
    return ret;
  };
  imports.wbg.__wbg_setTimeout_2cb6c793c4aa44f8 = function() {
    return handleError(function(arg0, arg1, arg2) {
      const ret = arg0.setTimeout(arg1, arg2);
      return ret;
    }, arguments);
  };
  imports.wbg.__wbg_performance_ffc4e815dfb3449f = function(arg0) {
    const ret = arg0.performance;
    return ret;
  };
  imports.wbg.__wbg_now_8799be02ba81a22e = function(arg0) {
    const ret = arg0.now();
    return ret;
  };
  imports.wbg.__wbg_instanceof_Headers_b23ad138f4ce041e = function(arg0) {
    let result;
    try {
      result = arg0 instanceof Headers;
    } catch (_) {
      result = false;
    }
    const ret = result;
    return ret;
  };
  imports.wbg.__wbg_respond_ffb6928cd9b79c32 = function() {
    return handleError(function(arg0, arg1) {
      arg0.respond(arg1 >>> 0);
    }, arguments);
  };
  imports.wbg.__wbg_releaseLock_32c310d7be334e1c = function(arg0) {
    arg0.releaseLock();
  };
  imports.wbg.__wbg_close_9e3b743c528a8d31 = function() {
    return handleError(function(arg0) {
      arg0.close();
    }, arguments);
  };
  imports.wbg.__wbindgen_closure_wrapper421 = function(arg0, arg1, arg2) {
    const ret = makeClosure(arg0, arg1, 18, __wbg_adapter_34);
    return ret;
  };
  imports.wbg.__wbindgen_closure_wrapper423 = function(arg0, arg1, arg2) {
    const ret = makeClosure(arg0, arg1, 18, __wbg_adapter_37);
    return ret;
  };
  imports.wbg.__wbindgen_closure_wrapper1330 = function(arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 202, __wbg_adapter_40);
    return ret;
  };
  imports.wbg.__wbindgen_closure_wrapper1800 = function(arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 114, __wbg_adapter_43);
    return ret;
  };
  imports.wbg.__wbindgen_closure_wrapper4090 = function(arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 202, __wbg_adapter_43);
    return ret;
  };
  imports.wbg.__wbindgen_init_externref_table = function() {
    const table = wasm.__wbindgen_export_2;
    const offset = table.grow(4);
    table.set(0, void 0);
    table.set(offset + 0, void 0);
    table.set(offset + 1, null);
    table.set(offset + 2, true);
    table.set(offset + 3, false);
    ;
  };
  return imports;
}
function __wbg_init_memory(imports, memory) {
}
function __wbg_finalize_init(instance, module2) {
  wasm = instance.exports;
  __wbg_init.__wbindgen_wasm_module = module2;
  cachedDataViewMemory0 = null;
  cachedUint8ArrayMemory0 = null;
  wasm.__wbindgen_start();
  return wasm;
}
async function __wbg_init(module_or_path) {
  module_or_path = module_or_path || {};
  if (wasm !== void 0) return;
  if (typeof module_or_path !== "undefined") {
    if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
      ({ module_or_path } = module_or_path);
    } else {
      console.warn("using deprecated parameters for the initialization function; pass a single object instead");
    }
  }
  if (typeof module_or_path === "undefined") {
    module_or_path = new URL("epoxy.wasm", import.meta.url);
  }
  const imports = __wbg_get_imports();
  if (typeof module_or_path === "string" || typeof Request === "function" && module_or_path instanceof Request || typeof URL === "function" && module_or_path instanceof URL) {
    module_or_path = fetch(module_or_path);
  }
  __wbg_init_memory(imports);
  const { instance, module: module2 } = await __wbg_load(await module_or_path, imports);
  __wbg_finalize_init(instance, module2);
}
var epoxy_bundled_default = __wbg_init;
var info = { version: "2.1.14-1", minimal: false, release: true };

// src/main.ts
var opts = [
  "wisp_v2",
  "udp_extension_required",
  "title_case_headers",
  "ws_title_case_headers",
  "wisp_ws_protocols",
  "redirect_limit",
  "header_limit",
  "buffer_size"
];
var EpoxyTransport = class {
  canstart = true;
  ready = false;
  client_version;
  client = null;
  wisp;
  opts;
  constructor(opts2) {
    this.wisp = opts2.wisp;
    this.opts = opts2;
    this.client_version = info;
  }
  setopt(opts2, opt) {
    if (this.opts[opt] != null) opts2[opt] = this.opts[opt];
  }
  async init() {
    await epoxy_bundled_default();
    let options = new EpoxyClientOptions();
    options.user_agent = navigator.userAgent;
    opts.forEach((x) => this.setopt(options, x));
    this.client = new EpoxyClient(this.wisp, options);
    this.ready = true;
  }
  async meta() {
  }
  async request(remote, method, body, headers, signal) {
    if (body instanceof Blob)
      body = await body.arrayBuffer();
    try {
      let res = await this.client.fetch(remote.href, { method, body, headers, redirect: "manual" });
      return {
        body: res.body,
        headers: res.rawHeaders,
        status: res.status,
        statusText: res.statusText
      };
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
  connect(url, protocols, requestHeaders, onopen, onmessage, onclose, onerror) {
    let handlers = new EpoxyHandlers(
      onopen,
      onclose,
      onerror,
      (data) => data instanceof Uint8Array ? onmessage(data.buffer) : onmessage(data)
    );
    let ws = this.client.connect_websocket(
      handlers,
      url.href,
      protocols,
      Object.assign(requestHeaders)
    );
    return [
      async (data) => {
        if (data instanceof Blob) data = await data.arrayBuffer();
        (await ws).send(data);
      },
      async (code, reason) => {
        (await ws).close(code, reason || "");
      }
    ];
  }
};
export {
  EpoxyTransport as default,
  info as epoxyInfo
};