!function () { "use strict"; const e = MessagePort.prototype.postMessage; let t = null; function a(e, t, a) { console.error(`error while processing '${a}': `, t), e.postMessage({ type: "error", error: t }) } async function n(a, n, s) { const o = await s.request(new URL(a.fetch.remote), a.fetch.method, a.fetch.body, a.fetch.headers, null); if (!function () { if (null === t) { const a = new MessageChannel, n = new ReadableStream; let s; try { e.call(a.port1, n, [n]), s = !0 } catch (e) { s = !1 } return t = s, s } return t }() && o.body instanceof ReadableStream) { const e = new Response(o.body); o.body = await e.arrayBuffer() } o.body instanceof ReadableStream || o.body instanceof ArrayBuffer ? e.call(n, { type: "fetch", fetch: o }, [o.body]) : e.call(n, { type: "fetch", fetch: o }) } let s = null, o = ""; function c() { return new Error("there are no bare clients", { cause: "No BareTransport was set. Try creating a BareMuxConnection and calling setTransport() or setManualTransport() on it before using BareClient." }) } function r(t, a) { const n = s; let o = [a]; t.fetch?.body && o.push(t.fetch.body), t.websocket?.channel && o.push(t.websocket.channel), e.call(n, { message: t, port: a }, o) } function l(t) { t.onmessage = async t => { const l = t.data.port, i = t.data.message; if ("ping" === i.type) e.call(l, { type: "pong" }); else if ("set" === i.type) try { const t = async function () { }.constructor; if ("bare-mux-remote" === i.client.function) s = i.client.args[0], o = `bare-mux-remote (${i.client.args[1]})`; else { const e = new t(i.client.function), [a, n] = await e(); s = new a(...i.client.args), o = n } console.log("set transport to ", s, o), e.call(l, { type: "set" }) } catch (e) { a(l, e, "set") } else if ("get" === i.type) l.postMessage({ type: "get", name: o }); else if ("fetch" === i.type) try { if (!s) throw c(); if (s instanceof MessagePort) return void r(i, l); s.ready || await s.init(), await n(i, l, s) } catch (e) { a(l, e, "fetch") } else if ("websocket" === i.type) try { if (!s) throw c(); if (s instanceof MessagePort) return void r(i, l); s.ready || await s.init(), await async function (t, a, n) { const [s, o] = n.connect(new URL(t.websocket.url), t.websocket.protocols, t.websocket.requestHeaders, (a => { e.call(t.websocket.channel, { type: "open", args: [a] }) }), (a => { a instanceof ArrayBuffer ? e.call(t.websocket.channel, { type: "message", args: [a] }, [a]) : e.call(t.websocket.channel, { type: "message", args: [a] }) }), ((a, n) => { e.call(t.websocket.channel, { type: "close", args: [a, n] }) }), (a => { e.call(t.websocket.channel, { type: "error", args: [a] }) })); t.websocket.channel.onmessage = e => { "data" === e.data.type ? s(e.data.data) : "close" === e.data.type && o(e.data.closeCode, e.data.closeReason) }, e.call(a, { type: "websocket" }) }(i, l, s) } catch (e) { a(l, e, "websocket") } } } new BroadcastChannel("bare-mux").postMessage({ type: "refreshPort" }), self.onconnect = e => { l(e.ports[0]) }, console.debug("bare-mux: running v2.1.6 (build 4b7607b)") }();
//# sourceMappingURL=worker.js.map
