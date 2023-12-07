"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) =>
	__defProp(target, "name", { value, configurable: true });
var __commonJS = (cb, mod) =>
	function __require() {
		return (
			mod ||
				(0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod),
			mod.exports
		);
	};
var __export = (target, all) => {
	for (var name in all)
		__defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
	if ((from && typeof from === "object") || typeof from === "function") {
		for (let key of __getOwnPropNames(from))
			if (!__hasOwnProp.call(to, key) && key !== except)
				__defProp(to, key, {
					get: () => from[key],
					enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
				});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (
	(target = mod != null ? __create(__getProtoOf(mod)) : {}),
	__copyProps(
		// If the importer is in node compatibility mode or this is not an ESM
		// file that has been converted to a CommonJS file using a Babel-
		// compatible transform (i.e. "__esModule" has not been set), then set
		// "default" to the CommonJS "module.exports" for node compatibility.
		isNodeMode || !mod || !mod.__esModule
			? __defProp(target, "default", { value: mod, enumerable: true })
			: target,
		mod,
	)
);
var __toCommonJS = (mod) =>
	__copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __decorateClass = (decorators, target, key, kind) => {
	var result =
		kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
	for (var i = decorators.length - 1, decorator; i >= 0; i--)
		if ((decorator = decorators[i]))
			result =
				(kind ? decorator(target, key, result) : decorator(result)) || result;
	if (kind && result) __defProp(target, key, result);
	return result;
};

// node_modules/.pnpm/hono@3.11.2/node_modules/hono/dist/cjs/utils/url.js
var require_url = __commonJS({
	"node_modules/.pnpm/hono@3.11.2/node_modules/hono/dist/cjs/utils/url.js"(
		exports,
		module2,
	) {
		"use strict";
		var __defProp2 = Object.defineProperty;
		var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
		var __getOwnPropNames2 = Object.getOwnPropertyNames;
		var __hasOwnProp2 = Object.prototype.hasOwnProperty;
		var __export2 = /* @__PURE__ */ __name((target, all) => {
			for (var name in all)
				__defProp2(target, name, { get: all[name], enumerable: true });
		}, "__export");
		var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
			if ((from && typeof from === "object") || typeof from === "function") {
				for (let key of __getOwnPropNames2(from))
					if (!__hasOwnProp2.call(to, key) && key !== except)
						__defProp2(to, key, {
							get: () => from[key],
							enumerable:
								!(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
						});
			}
			return to;
		}, "__copyProps");
		var __toCommonJS2 = /* @__PURE__ */ __name(
			(mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod),
			"__toCommonJS",
		);
		var url_exports = {};
		__export2(url_exports, {
			checkOptionalParameter: () => checkOptionalParameter2,
			decodeURIComponent_: () => decodeURIComponent_2,
			getPath: () => getPath2,
			getPathNoStrict: () => getPathNoStrict2,
			getPattern: () => getPattern2,
			getQueryParam: () => getQueryParam2,
			getQueryParams: () => getQueryParams2,
			getQueryStrings: () => getQueryStrings2,
			mergePath: () => mergePath2,
			splitPath: () => splitPath2,
			splitRoutingPath: () => splitRoutingPath2,
		});
		module2.exports = __toCommonJS2(url_exports);
		var splitPath2 = /* @__PURE__ */ __name((path) => {
			const paths = path.split("/");
			if (paths[0] === "") {
				paths.shift();
			}
			return paths;
		}, "splitPath");
		var splitRoutingPath2 = /* @__PURE__ */ __name((path) => {
			const groups = [];
			for (let i = 0; ; ) {
				let replaced = false;
				path = path.replace(/\{[^}]+\}/g, (m) => {
					const mark = `@\\${i}`;
					groups[i] = [mark, m];
					i++;
					replaced = true;
					return mark;
				});
				if (!replaced) {
					break;
				}
			}
			const paths = path.split("/");
			if (paths[0] === "") {
				paths.shift();
			}
			for (let i = groups.length - 1; i >= 0; i--) {
				const [mark] = groups[i];
				for (let j = paths.length - 1; j >= 0; j--) {
					if (paths[j].indexOf(mark) !== -1) {
						paths[j] = paths[j].replace(mark, groups[i][1]);
						break;
					}
				}
			}
			return paths;
		}, "splitRoutingPath");
		var patternCache2 = {};
		var getPattern2 = /* @__PURE__ */ __name((label) => {
			if (label === "*") {
				return "*";
			}
			const match = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
			if (match) {
				if (!patternCache2[label]) {
					if (match[2]) {
						patternCache2[label] = [
							label,
							match[1],
							new RegExp("^" + match[2] + "$"),
						];
					} else {
						patternCache2[label] = [label, match[1], true];
					}
				}
				return patternCache2[label];
			}
			return null;
		}, "getPattern");
		var getPath2 = /* @__PURE__ */ __name((request) => {
			const match = request.url.match(/^https?:\/\/[^/]+(\/[^?]*)/);
			return match ? match[1] : "";
		}, "getPath");
		var getQueryStrings2 = /* @__PURE__ */ __name((url) => {
			const queryIndex = url.indexOf("?", 8);
			return queryIndex === -1 ? "" : "?" + url.slice(queryIndex + 1);
		}, "getQueryStrings");
		var getPathNoStrict2 = /* @__PURE__ */ __name((request) => {
			const result = getPath2(request);
			return result.length > 1 && result[result.length - 1] === "/"
				? result.slice(0, -1)
				: result;
		}, "getPathNoStrict");
		var mergePath2 = /* @__PURE__ */ __name((...paths) => {
			let p = "";
			let endsWithSlash = false;
			for (let path of paths) {
				if (p[p.length - 1] === "/") {
					p = p.slice(0, -1);
					endsWithSlash = true;
				}
				if (path[0] !== "/") {
					path = `/${path}`;
				}
				if (path === "/" && endsWithSlash) {
					p = `${p}/`;
				} else if (path !== "/") {
					p = `${p}${path}`;
				}
				if (path === "/" && p === "") {
					p = "/";
				}
			}
			return p;
		}, "mergePath");
		var checkOptionalParameter2 = /* @__PURE__ */ __name((path) => {
			const match = path.match(/^(.+|)(\/\:[^\/]+)\?$/);
			if (!match) return null;
			const base = match[1];
			const optional = base + match[2];
			return [base === "" ? "/" : base.replace(/\/$/, ""), optional];
		}, "checkOptionalParameter");
		var _decodeURI2 = /* @__PURE__ */ __name((value) => {
			if (!/[%+]/.test(value)) {
				return value;
			}
			if (value.indexOf("+") !== -1) {
				value = value.replace(/\+/g, " ");
			}
			return /%/.test(value) ? decodeURIComponent_2(value) : value;
		}, "_decodeURI");
		var _getQueryParam2 = /* @__PURE__ */ __name((url, key, multiple) => {
			let encoded;
			if (!multiple && key && !/[%+]/.test(key)) {
				let keyIndex2 = url.indexOf(`?${key}`, 8);
				if (keyIndex2 === -1) {
					keyIndex2 = url.indexOf(`&${key}`, 8);
				}
				while (keyIndex2 !== -1) {
					const trailingKeyCode = url.charCodeAt(keyIndex2 + key.length + 1);
					if (trailingKeyCode === 61) {
						const valueIndex = keyIndex2 + key.length + 2;
						const endIndex = url.indexOf("&", valueIndex);
						return _decodeURI2(
							url.slice(valueIndex, endIndex === -1 ? void 0 : endIndex),
						);
					} else if (trailingKeyCode == 38 || isNaN(trailingKeyCode)) {
						return "";
					}
					keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
				}
				encoded = /[%+]/.test(url);
				if (!encoded) {
					return void 0;
				}
			}
			const results = {};
			encoded ?? (encoded = /[%+]/.test(url));
			let keyIndex = url.indexOf("?", 8);
			while (keyIndex !== -1) {
				const nextKeyIndex = url.indexOf("&", keyIndex + 1);
				let valueIndex = url.indexOf("=", keyIndex);
				if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) {
					valueIndex = -1;
				}
				let name = url.slice(
					keyIndex + 1,
					valueIndex === -1
						? nextKeyIndex === -1
							? void 0
							: nextKeyIndex
						: valueIndex,
				);
				if (encoded) {
					name = _decodeURI2(name);
				}
				keyIndex = nextKeyIndex;
				if (name === "") {
					continue;
				}
				let value;
				if (valueIndex === -1) {
					value = "";
				} else {
					value = url.slice(
						valueIndex + 1,
						nextKeyIndex === -1 ? void 0 : nextKeyIndex,
					);
					if (encoded) {
						value = _decodeURI2(value);
					}
				}
				if (multiple) {
					(results[name] ?? (results[name] = [])).push(value);
				} else {
					results[name] ?? (results[name] = value);
				}
			}
			return key ? results[key] : results;
		}, "_getQueryParam");
		var getQueryParam2 = _getQueryParam2;
		var getQueryParams2 = /* @__PURE__ */ __name((url, key) => {
			return _getQueryParam2(url, key, true);
		}, "getQueryParams");
		var decodeURIComponent_2 = decodeURIComponent;
	},
});

// node_modules/.pnpm/hono@3.11.2/node_modules/hono/dist/cjs/utils/cookie.js
var require_cookie = __commonJS({
	"node_modules/.pnpm/hono@3.11.2/node_modules/hono/dist/cjs/utils/cookie.js"(
		exports,
		module2,
	) {
		"use strict";
		var __defProp2 = Object.defineProperty;
		var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
		var __getOwnPropNames2 = Object.getOwnPropertyNames;
		var __hasOwnProp2 = Object.prototype.hasOwnProperty;
		var __export2 = /* @__PURE__ */ __name((target, all) => {
			for (var name in all)
				__defProp2(target, name, { get: all[name], enumerable: true });
		}, "__export");
		var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
			if ((from && typeof from === "object") || typeof from === "function") {
				for (let key of __getOwnPropNames2(from))
					if (!__hasOwnProp2.call(to, key) && key !== except)
						__defProp2(to, key, {
							get: () => from[key],
							enumerable:
								!(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
						});
			}
			return to;
		}, "__copyProps");
		var __toCommonJS2 = /* @__PURE__ */ __name(
			(mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod),
			"__toCommonJS",
		);
		var cookie_exports = {};
		__export2(cookie_exports, {
			parse: () => parse2,
			parseSigned: () => parseSigned,
			serialize: () => serialize2,
			serializeSigned: () => serializeSigned,
		});
		module2.exports = __toCommonJS2(cookie_exports);
		var import_url7 = require_url();
		var algorithm = { name: "HMAC", hash: "SHA-256" };
		var getCryptoKey = /* @__PURE__ */ __name(async (secret) => {
			const secretBuf =
				typeof secret === "string" ? new TextEncoder().encode(secret) : secret;
			return await crypto.subtle.importKey("raw", secretBuf, algorithm, false, [
				"sign",
				"verify",
			]);
		}, "getCryptoKey");
		var makeSignature = /* @__PURE__ */ __name(async (value, secret) => {
			const key = await getCryptoKey(secret);
			const signature = await crypto.subtle.sign(
				algorithm.name,
				key,
				new TextEncoder().encode(value),
			);
			return btoa(String.fromCharCode(...new Uint8Array(signature)));
		}, "makeSignature");
		var verifySignature = /* @__PURE__ */ __name(
			async (base64Signature, value, secret) => {
				try {
					const signatureBinStr = atob(base64Signature);
					const signature = new Uint8Array(signatureBinStr.length);
					for (let i = 0; i < signatureBinStr.length; i++)
						signature[i] = signatureBinStr.charCodeAt(i);
					return await crypto.subtle.verify(
						algorithm,
						secret,
						signature,
						new TextEncoder().encode(value),
					);
				} catch (e) {
					return false;
				}
			},
			"verifySignature",
		);
		var validCookieNameRegEx2 = /^[\w!#$%&'*.^`|~+-]+$/;
		var validCookieValueRegEx2 = /^[ !#-:<-[\]-~]*$/;
		var parse2 = /* @__PURE__ */ __name((cookie, name) => {
			const pairs = cookie.trim().split(";");
			return pairs.reduce((parsedCookie, pairStr) => {
				pairStr = pairStr.trim();
				const valueStartPos = pairStr.indexOf("=");
				if (valueStartPos === -1) return parsedCookie;
				const cookieName = pairStr.substring(0, valueStartPos).trim();
				if (
					(name && name !== cookieName) ||
					!validCookieNameRegEx2.test(cookieName)
				)
					return parsedCookie;
				let cookieValue = pairStr.substring(valueStartPos + 1).trim();
				if (cookieValue.startsWith('"') && cookieValue.endsWith('"'))
					cookieValue = cookieValue.slice(1, -1);
				if (validCookieValueRegEx2.test(cookieValue))
					parsedCookie[cookieName] = (0, import_url7.decodeURIComponent_)(
						cookieValue,
					);
				return parsedCookie;
			}, {});
		}, "parse");
		var parseSigned = /* @__PURE__ */ __name(async (cookie, secret, name) => {
			const parsedCookie = {};
			const secretKey = await getCryptoKey(secret);
			for (const [key, value] of Object.entries(parse2(cookie, name))) {
				const signatureStartPos = value.lastIndexOf(".");
				if (signatureStartPos < 1) continue;
				const signedValue = value.substring(0, signatureStartPos);
				const signature = value.substring(signatureStartPos + 1);
				if (signature.length !== 44 || !signature.endsWith("=")) continue;
				const isVerified = await verifySignature(
					signature,
					signedValue,
					secretKey,
				);
				parsedCookie[key] = isVerified ? signedValue : false;
			}
			return parsedCookie;
		}, "parseSigned");
		var _serialize2 = /* @__PURE__ */ __name((name, value, opt = {}) => {
			let cookie = `${name}=${value}`;
			if (opt && typeof opt.maxAge === "number" && opt.maxAge >= 0) {
				cookie += `; Max-Age=${Math.floor(opt.maxAge)}`;
			}
			if (opt.domain) {
				cookie += `; Domain=${opt.domain}`;
			}
			if (opt.path) {
				cookie += `; Path=${opt.path}`;
			}
			if (opt.expires) {
				cookie += `; Expires=${opt.expires.toUTCString()}`;
			}
			if (opt.httpOnly) {
				cookie += "; HttpOnly";
			}
			if (opt.secure) {
				cookie += "; Secure";
			}
			if (opt.sameSite) {
				cookie += `; SameSite=${opt.sameSite}`;
			}
			if (opt.partitioned) {
				cookie += "; Partitioned";
			}
			return cookie;
		}, "_serialize");
		var serialize2 = /* @__PURE__ */ __name((name, value, opt = {}) => {
			value = encodeURIComponent(value);
			return _serialize2(name, value, opt);
		}, "serialize");
		var serializeSigned = /* @__PURE__ */ __name(
			async (name, value, secret, opt = {}) => {
				const signature = await makeSignature(value, secret);
				value = `${value}.${signature}`;
				value = encodeURIComponent(value);
				return _serialize2(name, value, opt);
			},
			"serializeSigned",
		);
	},
});

// node_modules/.pnpm/hono@3.11.2/node_modules/hono/dist/cjs/helper/cookie/index.js
var require_cookie2 = __commonJS({
	"node_modules/.pnpm/hono@3.11.2/node_modules/hono/dist/cjs/helper/cookie/index.js"(
		exports,
		module2,
	) {
		"use strict";
		var __defProp2 = Object.defineProperty;
		var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
		var __getOwnPropNames2 = Object.getOwnPropertyNames;
		var __hasOwnProp2 = Object.prototype.hasOwnProperty;
		var __export2 = /* @__PURE__ */ __name((target, all) => {
			for (var name in all)
				__defProp2(target, name, { get: all[name], enumerable: true });
		}, "__export");
		var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
			if ((from && typeof from === "object") || typeof from === "function") {
				for (let key of __getOwnPropNames2(from))
					if (!__hasOwnProp2.call(to, key) && key !== except)
						__defProp2(to, key, {
							get: () => from[key],
							enumerable:
								!(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
						});
			}
			return to;
		}, "__copyProps");
		var __toCommonJS2 = /* @__PURE__ */ __name(
			(mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod),
			"__toCommonJS",
		);
		var cookie_exports = {};
		__export2(cookie_exports, {
			deleteCookie: () => deleteCookie,
			getCookie: () => getCookie,
			getSignedCookie: () => getSignedCookie,
			setCookie: () => setCookie,
			setSignedCookie: () => setSignedCookie,
		});
		module2.exports = __toCommonJS2(cookie_exports);
		var import_cookie3 = require_cookie();
		var getCookie = /* @__PURE__ */ __name((c, key) => {
			const cookie = c.req.raw.headers.get("Cookie");
			if (typeof key === "string") {
				if (!cookie) return void 0;
				const obj2 = (0, import_cookie3.parse)(cookie, key);
				return obj2[key];
			}
			if (!cookie) return {};
			const obj = (0, import_cookie3.parse)(cookie);
			return obj;
		}, "getCookie");
		var getSignedCookie = /* @__PURE__ */ __name(async (c, secret, key) => {
			const cookie = c.req.raw.headers.get("Cookie");
			if (typeof key === "string") {
				if (!cookie) return void 0;
				const obj2 = await (0, import_cookie3.parseSigned)(cookie, secret, key);
				return obj2[key];
			}
			if (!cookie) return {};
			const obj = await (0, import_cookie3.parseSigned)(cookie, secret);
			return obj;
		}, "getSignedCookie");
		var setCookie = /* @__PURE__ */ __name((c, name, value, opt) => {
			const cookie = (0, import_cookie3.serialize)(name, value, {
				path: "/",
				...opt,
			});
			c.header("set-cookie", cookie, { append: true });
		}, "setCookie");
		var setSignedCookie = /* @__PURE__ */ __name(
			async (c, name, value, secret, opt) => {
				const cookie = await (0, import_cookie3.serializeSigned)(
					name,
					value,
					secret,
					{ path: "/", ...opt },
				);
				c.header("set-cookie", cookie, { append: true });
			},
			"setSignedCookie",
		);
		var deleteCookie = /* @__PURE__ */ __name((c, name, opt) => {
			setCookie(c, name, "", { ...opt, maxAge: 0 });
		}, "deleteCookie");
	},
});

// node_modules/.pnpm/hono@3.11.2/node_modules/hono/dist/cjs/utils/crypto.js
var require_crypto = __commonJS({
	"node_modules/.pnpm/hono@3.11.2/node_modules/hono/dist/cjs/utils/crypto.js"(
		exports,
		module2,
	) {
		"use strict";
		var __defProp2 = Object.defineProperty;
		var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
		var __getOwnPropNames2 = Object.getOwnPropertyNames;
		var __hasOwnProp2 = Object.prototype.hasOwnProperty;
		var __export2 = /* @__PURE__ */ __name((target, all) => {
			for (var name in all)
				__defProp2(target, name, { get: all[name], enumerable: true });
		}, "__export");
		var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
			if ((from && typeof from === "object") || typeof from === "function") {
				for (let key of __getOwnPropNames2(from))
					if (!__hasOwnProp2.call(to, key) && key !== except)
						__defProp2(to, key, {
							get: () => from[key],
							enumerable:
								!(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
						});
			}
			return to;
		}, "__copyProps");
		var __toCommonJS2 = /* @__PURE__ */ __name(
			(mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod),
			"__toCommonJS",
		);
		var crypto_exports = {};
		__export2(crypto_exports, {
			createHash: () => createHash,
			md5: () => md5,
			sha1: () => sha1,
			sha256: () => sha256,
		});
		module2.exports = __toCommonJS2(crypto_exports);
		var sha256 = /* @__PURE__ */ __name(async (data) => {
			const algorithm = { name: "SHA-256", alias: "sha256" };
			const hash = await createHash(data, algorithm);
			return hash;
		}, "sha256");
		var sha1 = /* @__PURE__ */ __name(async (data) => {
			const algorithm = { name: "SHA-1", alias: "sha1" };
			const hash = await createHash(data, algorithm);
			return hash;
		}, "sha1");
		var md5 = /* @__PURE__ */ __name(async (data) => {
			const algorithm = { name: "MD5", alias: "md5" };
			const hash = await createHash(data, algorithm);
			return hash;
		}, "md5");
		var createHash = /* @__PURE__ */ __name(async (data, algorithm) => {
			let sourceBuffer;
			if (data instanceof ReadableStream) {
				let body = "";
				const reader = data.getReader();
				await reader?.read().then(async (chuck) => {
					const value = await createHash(chuck.value || "", algorithm);
					body += value;
				});
				return body;
			}
			if (ArrayBuffer.isView(data) || data instanceof ArrayBuffer) {
				sourceBuffer = data;
			} else {
				if (typeof data === "object") {
					data = JSON.stringify(data);
				}
				sourceBuffer = new TextEncoder().encode(String(data));
			}
			if (crypto && crypto.subtle) {
				const buffer = await crypto.subtle.digest(
					{
						name: algorithm.name,
					},
					sourceBuffer,
				);
				const hash = Array.prototype.map
					.call(new Uint8Array(buffer), (x) =>
						("00" + x.toString(16)).slice(-2),
					)
					.join("");
				return hash;
			}
			return null;
		}, "createHash");
	},
});

// node_modules/.pnpm/hono@3.11.2/node_modules/hono/dist/cjs/utils/buffer.js
var require_buffer = __commonJS({
	"node_modules/.pnpm/hono@3.11.2/node_modules/hono/dist/cjs/utils/buffer.js"(
		exports,
		module2,
	) {
		"use strict";
		var __defProp2 = Object.defineProperty;
		var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
		var __getOwnPropNames2 = Object.getOwnPropertyNames;
		var __hasOwnProp2 = Object.prototype.hasOwnProperty;
		var __export2 = /* @__PURE__ */ __name((target, all) => {
			for (var name in all)
				__defProp2(target, name, { get: all[name], enumerable: true });
		}, "__export");
		var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
			if ((from && typeof from === "object") || typeof from === "function") {
				for (let key of __getOwnPropNames2(from))
					if (!__hasOwnProp2.call(to, key) && key !== except)
						__defProp2(to, key, {
							get: () => from[key],
							enumerable:
								!(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
						});
			}
			return to;
		}, "__copyProps");
		var __toCommonJS2 = /* @__PURE__ */ __name(
			(mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod),
			"__toCommonJS",
		);
		var buffer_exports = {};
		__export2(buffer_exports, {
			bufferToFormData: () => bufferToFormData,
			bufferToString: () => bufferToString,
			equal: () => equal,
			timingSafeEqual: () => timingSafeEqual,
		});
		module2.exports = __toCommonJS2(buffer_exports);
		var import_crypto2 = require_crypto();
		var equal = /* @__PURE__ */ __name((a, b) => {
			if (a === b) {
				return true;
			}
			if (a.byteLength !== b.byteLength) {
				return false;
			}
			const va = new DataView(a);
			const vb = new DataView(b);
			let i = va.byteLength;
			while (i--) {
				if (va.getUint8(i) !== vb.getUint8(i)) {
					return false;
				}
			}
			return true;
		}, "equal");
		var timingSafeEqual = /* @__PURE__ */ __name(async (a, b, hashFunction) => {
			if (!hashFunction) {
				hashFunction = import_crypto2.sha256;
			}
			const sa = await hashFunction(a);
			const sb = await hashFunction(b);
			if (!sa || !sb) {
				return false;
			}
			return sa === sb && a === b;
		}, "timingSafeEqual");
		var bufferToString = /* @__PURE__ */ __name((buffer) => {
			if (buffer instanceof ArrayBuffer) {
				const enc = new TextDecoder("utf-8");
				return enc.decode(buffer);
			}
			return buffer;
		}, "bufferToString");
		var bufferToFormData = /* @__PURE__ */ __name(
			(arrayBuffer, contentType) => {
				const response = new Response(arrayBuffer, {
					headers: {
						"Content-Type": contentType,
					},
				});
				return response.formData();
			},
			"bufferToFormData",
		);
	},
});

// node_modules/.pnpm/hono@3.11.2/node_modules/hono/dist/cjs/validator/validator.js
var require_validator = __commonJS({
	"node_modules/.pnpm/hono@3.11.2/node_modules/hono/dist/cjs/validator/validator.js"(
		exports,
		module2,
	) {
		"use strict";
		var __defProp2 = Object.defineProperty;
		var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
		var __getOwnPropNames2 = Object.getOwnPropertyNames;
		var __hasOwnProp2 = Object.prototype.hasOwnProperty;
		var __export2 = /* @__PURE__ */ __name((target, all) => {
			for (var name in all)
				__defProp2(target, name, { get: all[name], enumerable: true });
		}, "__export");
		var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
			if ((from && typeof from === "object") || typeof from === "function") {
				for (let key of __getOwnPropNames2(from))
					if (!__hasOwnProp2.call(to, key) && key !== except)
						__defProp2(to, key, {
							get: () => from[key],
							enumerable:
								!(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
						});
			}
			return to;
		}, "__copyProps");
		var __toCommonJS2 = /* @__PURE__ */ __name(
			(mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod),
			"__toCommonJS",
		);
		var validator_exports = {};
		__export2(validator_exports, {
			validator: () => validator2,
		});
		module2.exports = __toCommonJS2(validator_exports);
		var import_cookie3 = require_cookie2();
		var import_buffer = require_buffer();
		var validator2 = /* @__PURE__ */ __name((target, validationFunc) => {
			return async (c, next) => {
				let value = {};
				const contentType = c.req.header("Content-Type");
				switch (target) {
					case "json":
						if (!contentType || !contentType.startsWith("application/json")) {
							const message = `Invalid HTTP header: Content-Type=${contentType}`;
							console.error(message);
							return c.json(
								{
									success: false,
									message,
								},
								400,
							);
						}
						try {
							const arrayBuffer =
								c.req.bodyCache.arrayBuffer ?? (await c.req.raw.arrayBuffer());
							value = await new Response(arrayBuffer).json();
							c.req.bodyCache.json = value;
							c.req.bodyCache.arrayBuffer = arrayBuffer;
						} catch {
							console.error("Error: Malformed JSON in request body");
							return c.json(
								{
									success: false,
									message: "Malformed JSON in request body",
								},
								400,
							);
						}
						break;
					case "form": {
						try {
							const contentType2 = c.req.header("Content-Type");
							if (contentType2) {
								const arrayBuffer =
									c.req.bodyCache.arrayBuffer ??
									(await c.req.raw.arrayBuffer());
								const formData = await (0, import_buffer.bufferToFormData)(
									arrayBuffer,
									contentType2,
								);
								const form = {};
								formData.forEach((value2, key) => {
									form[key] = value2;
								});
								value = form;
								c.req.bodyCache.formData = formData;
								c.req.bodyCache.arrayBuffer = arrayBuffer;
							}
						} catch (e) {
							let message = "Malformed FormData request.";
							message += e instanceof Error ? ` ${e.message}` : ` ${String(e)}`;
							return c.json(
								{
									success: false,
									message,
								},
								400,
							);
						}
						break;
					}
					case "query":
						value = Object.fromEntries(
							Object.entries(c.req.queries()).map(([k, v]) => {
								return v.length === 1 ? [k, v[0]] : [k, v];
							}),
						);
						break;
					case "queries":
						value = c.req.queries();
						console.log(
							"Warnings: Validate type `queries` is deprecated. Use `query` instead.",
						);
						break;
					case "param":
						value = c.req.param();
						break;
					case "header":
						value = c.req.header();
						break;
					case "cookie":
						value = (0, import_cookie3.getCookie)(c);
						break;
				}
				const res = await validationFunc(value, c);
				if (res instanceof Response) {
					return res;
				}
				c.req.addValidatedData(target, res);
				await next();
			};
		}, "validator");
	},
});

// node_modules/.pnpm/hono@3.11.2/node_modules/hono/dist/cjs/validator/index.js
var require_validator2 = __commonJS({
	"node_modules/.pnpm/hono@3.11.2/node_modules/hono/dist/cjs/validator/index.js"(
		exports,
		module2,
	) {
		"use strict";
		var __defProp2 = Object.defineProperty;
		var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
		var __getOwnPropNames2 = Object.getOwnPropertyNames;
		var __hasOwnProp2 = Object.prototype.hasOwnProperty;
		var __export2 = /* @__PURE__ */ __name((target, all) => {
			for (var name in all)
				__defProp2(target, name, { get: all[name], enumerable: true });
		}, "__export");
		var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
			if ((from && typeof from === "object") || typeof from === "function") {
				for (let key of __getOwnPropNames2(from))
					if (!__hasOwnProp2.call(to, key) && key !== except)
						__defProp2(to, key, {
							get: () => from[key],
							enumerable:
								!(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
						});
			}
			return to;
		}, "__copyProps");
		var __toCommonJS2 = /* @__PURE__ */ __name(
			(mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod),
			"__toCommonJS",
		);
		var validator_exports = {};
		__export2(validator_exports, {
			validator: () => import_validator.validator,
		});
		module2.exports = __toCommonJS2(validator_exports);
		var import_validator = require_validator();
	},
});

// node_modules/.pnpm/@hono+zod-validator@0.1.11_hono@3.11.2_zod@3.22.4/node_modules/@hono/zod-validator/dist/cjs/index.js
var require_cjs = __commonJS({
	"node_modules/.pnpm/@hono+zod-validator@0.1.11_hono@3.11.2_zod@3.22.4/node_modules/@hono/zod-validator/dist/cjs/index.js"(
		exports,
	) {
		"use strict";
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.zValidator = void 0;
		var validator_1 = require_validator2();
		var zValidator2 = /* @__PURE__ */ __name(
			(target, schema, hook) =>
				(0, validator_1.validator)(target, async (value, c) => {
					const result = await schema.safeParseAsync(value);
					if (hook) {
						const hookResult = hook({ data: value, ...result }, c);
						if (hookResult) {
							if (
								hookResult instanceof Response ||
								hookResult instanceof Promise
							) {
								return hookResult;
							}
							if ("response" in hookResult) {
								return hookResult.response;
							}
						}
					}
					if (!result.success) {
						return c.json(result, 400);
					}
					const data = result.data;
					return data;
				}),
			"zValidator",
		);
		exports.zValidator = zValidator2;
	},
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
	handler: () => handler,
	server: () => server,
});
module.exports = __toCommonJS(src_exports);

// node_modules/.pnpm/hono@3.11.2/node_modules/hono/dist/adapter/aws-lambda/handler.js
var import_crypto = __toESM(require("crypto"), 1);

// node_modules/.pnpm/hono@3.11.2/node_modules/hono/dist/utils/encode.js
var encodeBase64 = /* @__PURE__ */ __name((buf) => {
	let binary = "";
	const bytes = new Uint8Array(buf);
	for (let i = 0; i < bytes.length; i++) {
		binary += String.fromCharCode(bytes[i]);
	}
	return btoa(binary);
}, "encodeBase64");

// node_modules/.pnpm/hono@3.11.2/node_modules/hono/dist/adapter/aws-lambda/handler.js
globalThis.crypto ?? (globalThis.crypto = import_crypto.default);
var getRequestContext = /* @__PURE__ */ __name((event) => {
	return event.requestContext;
}, "getRequestContext");
var handle = /* @__PURE__ */ __name((app2) => {
	return async (event, lambdaContext) => {
		const req = createRequest(event);
		const requestContext = getRequestContext(event);
		const res = await app2.fetch(req, {
			event,
			requestContext,
			lambdaContext,
		});
		return createResult(event, res);
	};
}, "handle");
var createResult = /* @__PURE__ */ __name(async (event, res) => {
	const contentType = res.headers.get("content-type");
	let isBase64Encoded =
		contentType && isContentTypeBinary(contentType) ? true : false;
	if (!isBase64Encoded) {
		const contentEncoding = res.headers.get("content-encoding");
		isBase64Encoded = isContentEncodingBinary(contentEncoding);
	}
	let body;
	if (isBase64Encoded) {
		const buffer = await res.arrayBuffer();
		body = encodeBase64(buffer);
	} else {
		body = await res.text();
	}
	const result = {
		body,
		headers: {},
		statusCode: res.status,
		isBase64Encoded,
	};
	setCookies(event, res, result);
	res.headers.forEach((value, key) => {
		result.headers[key] = value;
	});
	return result;
}, "createResult");
var createRequest = /* @__PURE__ */ __name((event) => {
	const queryString = extractQueryString(event);
	const domainName =
		event.requestContext && "domainName" in event.requestContext
			? event.requestContext.domainName
			: event.headers["host"];
	const path = isProxyEventV2(event) ? event.rawPath : event.path;
	const urlPath = `https://${domainName}${path}`;
	const url = queryString ? `${urlPath}?${queryString}` : urlPath;
	const headers = new Headers();
	getCookies(event, headers);
	for (const [k, v] of Object.entries(event.headers)) {
		if (v) headers.set(k, v);
	}
	const method = isProxyEventV2(event)
		? event.requestContext.http.method
		: event.httpMethod;
	const requestInit = {
		headers,
		method,
	};
	if (event.body) {
		requestInit.body = event.isBase64Encoded
			? Buffer.from(event.body, "base64")
			: event.body;
	}
	return new Request(url, requestInit);
}, "createRequest");
var extractQueryString = /* @__PURE__ */ __name((event) => {
	return isProxyEventV2(event)
		? event.rawQueryString
		: Object.entries(event.queryStringParameters || {})
				.filter(([, value]) => value)
				.map(([key, value]) => `${key}=${value}`)
				.join("&");
}, "extractQueryString");
var getCookies = /* @__PURE__ */ __name((event, headers) => {
	if (isProxyEventV2(event) && Array.isArray(event.cookies)) {
		headers.set("Cookie", event.cookies.join("; "));
	}
}, "getCookies");
var setCookies = /* @__PURE__ */ __name((event, res, result) => {
	if (res.headers.has("set-cookie")) {
		const cookies = res.headers.get("set-cookie")?.split(", ");
		if (Array.isArray(cookies)) {
			if (isProxyEventV2(event)) {
				result.cookies = cookies;
			} else {
				result.multiValueHeaders = {
					"set-cookie": cookies,
				};
			}
			res.headers.delete("set-cookie");
		}
	}
}, "setCookies");
var isProxyEventV2 = /* @__PURE__ */ __name((event) => {
	return Object.prototype.hasOwnProperty.call(event, "rawPath");
}, "isProxyEventV2");
var isContentTypeBinary = /* @__PURE__ */ __name((contentType) => {
	return !/^(text\/(plain|html|css|javascript|csv).*|application\/(.*json|.*xml).*|image\/svg\+xml)$/.test(
		contentType,
	);
}, "isContentTypeBinary");
var isContentEncodingBinary = /* @__PURE__ */ __name((contentEncoding) => {
	if (contentEncoding === null) {
		return false;
	}
	return /^(gzip|deflate|compress|br)/.test(contentEncoding);
}, "isContentEncodingBinary");

// node_modules/.pnpm/reflect-metadata@0.1.13/node_modules/reflect-metadata/Reflect.js
var Reflect2;
(function (Reflect3) {
	(function (factory) {
		var root =
			typeof global === "object"
				? global
				: typeof self === "object"
				  ? self
				  : typeof this === "object"
					  ? this
					  : Function("return this;")();
		var exporter = makeExporter(Reflect3);
		if (typeof root.Reflect === "undefined") {
			root.Reflect = Reflect3;
		} else {
			exporter = makeExporter(root.Reflect, exporter);
		}
		factory(exporter);
		function makeExporter(target, previous) {
			return function (key, value) {
				if (typeof target[key] !== "function") {
					Object.defineProperty(target, key, {
						configurable: true,
						writable: true,
						value,
					});
				}
				if (previous) previous(key, value);
			};
		}
		__name(makeExporter, "makeExporter");
	})(function (exporter) {
		var hasOwn = Object.prototype.hasOwnProperty;
		var supportsSymbol = typeof Symbol === "function";
		var toPrimitiveSymbol =
			supportsSymbol && typeof Symbol.toPrimitive !== "undefined"
				? Symbol.toPrimitive
				: "@@toPrimitive";
		var iteratorSymbol =
			supportsSymbol && typeof Symbol.iterator !== "undefined"
				? Symbol.iterator
				: "@@iterator";
		var supportsCreate = typeof Object.create === "function";
		var supportsProto = { __proto__: [] } instanceof Array;
		var downLevel = !supportsCreate && !supportsProto;
		var HashMap = {
			// create an object in dictionary mode (a.k.a. "slow" mode in v8)
			create: supportsCreate
				? function () {
						return MakeDictionary(/* @__PURE__ */ Object.create(null));
				  }
				: supportsProto
				  ? function () {
							return MakeDictionary({ __proto__: null });
					  }
				  : function () {
							return MakeDictionary({});
					  },
			has: downLevel
				? function (map, key) {
						return hasOwn.call(map, key);
				  }
				: function (map, key) {
						return key in map;
				  },
			get: downLevel
				? function (map, key) {
						return hasOwn.call(map, key) ? map[key] : void 0;
				  }
				: function (map, key) {
						return map[key];
				  },
		};
		var functionPrototype = Object.getPrototypeOf(Function);
		var usePolyfill =
			typeof process === "object" &&
			process.env &&
			process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
		var _Map =
			!usePolyfill &&
			typeof Map === "function" &&
			typeof Map.prototype.entries === "function"
				? Map
				: CreateMapPolyfill();
		var _Set =
			!usePolyfill &&
			typeof Set === "function" &&
			typeof Set.prototype.entries === "function"
				? Set
				: CreateSetPolyfill();
		var _WeakMap =
			!usePolyfill && typeof WeakMap === "function"
				? WeakMap
				: CreateWeakMapPolyfill();
		var Metadata = new _WeakMap();
		function decorate(decorators, target, propertyKey, attributes) {
			if (!IsUndefined(propertyKey)) {
				if (!IsArray(decorators)) throw new TypeError();
				if (!IsObject(target)) throw new TypeError();
				if (
					!IsObject(attributes) &&
					!IsUndefined(attributes) &&
					!IsNull(attributes)
				)
					throw new TypeError();
				if (IsNull(attributes)) attributes = void 0;
				propertyKey = ToPropertyKey(propertyKey);
				return DecorateProperty(decorators, target, propertyKey, attributes);
			} else {
				if (!IsArray(decorators)) throw new TypeError();
				if (!IsConstructor(target)) throw new TypeError();
				return DecorateConstructor(decorators, target);
			}
		}
		__name(decorate, "decorate");
		exporter("decorate", decorate);
		function metadata(metadataKey, metadataValue) {
			function decorator(target, propertyKey) {
				if (!IsObject(target)) throw new TypeError();
				if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
					throw new TypeError();
				OrdinaryDefineOwnMetadata(
					metadataKey,
					metadataValue,
					target,
					propertyKey,
				);
			}
			__name(decorator, "decorator");
			return decorator;
		}
		__name(metadata, "metadata");
		exporter("metadata", metadata);
		function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
			if (!IsObject(target)) throw new TypeError();
			if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
			return OrdinaryDefineOwnMetadata(
				metadataKey,
				metadataValue,
				target,
				propertyKey,
			);
		}
		__name(defineMetadata, "defineMetadata");
		exporter("defineMetadata", defineMetadata);
		function hasMetadata(metadataKey, target, propertyKey) {
			if (!IsObject(target)) throw new TypeError();
			if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
			return OrdinaryHasMetadata(metadataKey, target, propertyKey);
		}
		__name(hasMetadata, "hasMetadata");
		exporter("hasMetadata", hasMetadata);
		function hasOwnMetadata(metadataKey, target, propertyKey) {
			if (!IsObject(target)) throw new TypeError();
			if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
			return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
		}
		__name(hasOwnMetadata, "hasOwnMetadata");
		exporter("hasOwnMetadata", hasOwnMetadata);
		function getMetadata(metadataKey, target, propertyKey) {
			if (!IsObject(target)) throw new TypeError();
			if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
			return OrdinaryGetMetadata(metadataKey, target, propertyKey);
		}
		__name(getMetadata, "getMetadata");
		exporter("getMetadata", getMetadata);
		function getOwnMetadata(metadataKey, target, propertyKey) {
			if (!IsObject(target)) throw new TypeError();
			if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
			return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
		}
		__name(getOwnMetadata, "getOwnMetadata");
		exporter("getOwnMetadata", getOwnMetadata);
		function getMetadataKeys(target, propertyKey) {
			if (!IsObject(target)) throw new TypeError();
			if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
			return OrdinaryMetadataKeys(target, propertyKey);
		}
		__name(getMetadataKeys, "getMetadataKeys");
		exporter("getMetadataKeys", getMetadataKeys);
		function getOwnMetadataKeys(target, propertyKey) {
			if (!IsObject(target)) throw new TypeError();
			if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
			return OrdinaryOwnMetadataKeys(target, propertyKey);
		}
		__name(getOwnMetadataKeys, "getOwnMetadataKeys");
		exporter("getOwnMetadataKeys", getOwnMetadataKeys);
		function deleteMetadata(metadataKey, target, propertyKey) {
			if (!IsObject(target)) throw new TypeError();
			if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
			var metadataMap = GetOrCreateMetadataMap(
				target,
				propertyKey,
				/*Create*/
				false,
			);
			if (IsUndefined(metadataMap)) return false;
			if (!metadataMap.delete(metadataKey)) return false;
			if (metadataMap.size > 0) return true;
			var targetMetadata = Metadata.get(target);
			targetMetadata.delete(propertyKey);
			if (targetMetadata.size > 0) return true;
			Metadata.delete(target);
			return true;
		}
		__name(deleteMetadata, "deleteMetadata");
		exporter("deleteMetadata", deleteMetadata);
		function DecorateConstructor(decorators, target) {
			for (var i = decorators.length - 1; i >= 0; --i) {
				var decorator = decorators[i];
				var decorated = decorator(target);
				if (!IsUndefined(decorated) && !IsNull(decorated)) {
					if (!IsConstructor(decorated)) throw new TypeError();
					target = decorated;
				}
			}
			return target;
		}
		__name(DecorateConstructor, "DecorateConstructor");
		function DecorateProperty(decorators, target, propertyKey, descriptor) {
			for (var i = decorators.length - 1; i >= 0; --i) {
				var decorator = decorators[i];
				var decorated = decorator(target, propertyKey, descriptor);
				if (!IsUndefined(decorated) && !IsNull(decorated)) {
					if (!IsObject(decorated)) throw new TypeError();
					descriptor = decorated;
				}
			}
			return descriptor;
		}
		__name(DecorateProperty, "DecorateProperty");
		function GetOrCreateMetadataMap(O, P, Create) {
			var targetMetadata = Metadata.get(O);
			if (IsUndefined(targetMetadata)) {
				if (!Create) return void 0;
				targetMetadata = new _Map();
				Metadata.set(O, targetMetadata);
			}
			var metadataMap = targetMetadata.get(P);
			if (IsUndefined(metadataMap)) {
				if (!Create) return void 0;
				metadataMap = new _Map();
				targetMetadata.set(P, metadataMap);
			}
			return metadataMap;
		}
		__name(GetOrCreateMetadataMap, "GetOrCreateMetadataMap");
		function OrdinaryHasMetadata(MetadataKey, O, P) {
			var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
			if (hasOwn2) return true;
			var parent = OrdinaryGetPrototypeOf(O);
			if (!IsNull(parent)) return OrdinaryHasMetadata(MetadataKey, parent, P);
			return false;
		}
		__name(OrdinaryHasMetadata, "OrdinaryHasMetadata");
		function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
			var metadataMap = GetOrCreateMetadataMap(
				O,
				P,
				/*Create*/
				false,
			);
			if (IsUndefined(metadataMap)) return false;
			return ToBoolean(metadataMap.has(MetadataKey));
		}
		__name(OrdinaryHasOwnMetadata, "OrdinaryHasOwnMetadata");
		function OrdinaryGetMetadata(MetadataKey, O, P) {
			var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
			if (hasOwn2) return OrdinaryGetOwnMetadata(MetadataKey, O, P);
			var parent = OrdinaryGetPrototypeOf(O);
			if (!IsNull(parent)) return OrdinaryGetMetadata(MetadataKey, parent, P);
			return void 0;
		}
		__name(OrdinaryGetMetadata, "OrdinaryGetMetadata");
		function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
			var metadataMap = GetOrCreateMetadataMap(
				O,
				P,
				/*Create*/
				false,
			);
			if (IsUndefined(metadataMap)) return void 0;
			return metadataMap.get(MetadataKey);
		}
		__name(OrdinaryGetOwnMetadata, "OrdinaryGetOwnMetadata");
		function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
			var metadataMap = GetOrCreateMetadataMap(
				O,
				P,
				/*Create*/
				true,
			);
			metadataMap.set(MetadataKey, MetadataValue);
		}
		__name(OrdinaryDefineOwnMetadata, "OrdinaryDefineOwnMetadata");
		function OrdinaryMetadataKeys(O, P) {
			var ownKeys = OrdinaryOwnMetadataKeys(O, P);
			var parent = OrdinaryGetPrototypeOf(O);
			if (parent === null) return ownKeys;
			var parentKeys = OrdinaryMetadataKeys(parent, P);
			if (parentKeys.length <= 0) return ownKeys;
			if (ownKeys.length <= 0) return parentKeys;
			var set = new _Set();
			var keys = [];
			for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
				var key = ownKeys_1[_i];
				var hasKey = set.has(key);
				if (!hasKey) {
					set.add(key);
					keys.push(key);
				}
			}
			for (
				var _a = 0, parentKeys_1 = parentKeys;
				_a < parentKeys_1.length;
				_a++
			) {
				var key = parentKeys_1[_a];
				var hasKey = set.has(key);
				if (!hasKey) {
					set.add(key);
					keys.push(key);
				}
			}
			return keys;
		}
		__name(OrdinaryMetadataKeys, "OrdinaryMetadataKeys");
		function OrdinaryOwnMetadataKeys(O, P) {
			var keys = [];
			var metadataMap = GetOrCreateMetadataMap(
				O,
				P,
				/*Create*/
				false,
			);
			if (IsUndefined(metadataMap)) return keys;
			var keysObj = metadataMap.keys();
			var iterator = GetIterator(keysObj);
			var k = 0;
			while (true) {
				var next = IteratorStep(iterator);
				if (!next) {
					keys.length = k;
					return keys;
				}
				var nextValue = IteratorValue(next);
				try {
					keys[k] = nextValue;
				} catch (e) {
					try {
						IteratorClose(iterator);
					} finally {
						throw e;
					}
				}
				k++;
			}
		}
		__name(OrdinaryOwnMetadataKeys, "OrdinaryOwnMetadataKeys");
		function Type(x) {
			if (x === null) return 1;
			switch (typeof x) {
				case "undefined":
					return 0;
				case "boolean":
					return 2;
				case "string":
					return 3;
				case "symbol":
					return 4;
				case "number":
					return 5;
				case "object":
					return x === null ? 1 : 6;
				default:
					return 6;
			}
		}
		__name(Type, "Type");
		function IsUndefined(x) {
			return x === void 0;
		}
		__name(IsUndefined, "IsUndefined");
		function IsNull(x) {
			return x === null;
		}
		__name(IsNull, "IsNull");
		function IsSymbol(x) {
			return typeof x === "symbol";
		}
		__name(IsSymbol, "IsSymbol");
		function IsObject(x) {
			return typeof x === "object" ? x !== null : typeof x === "function";
		}
		__name(IsObject, "IsObject");
		function ToPrimitive(input, PreferredType) {
			switch (Type(input)) {
				case 0:
					return input;
				case 1:
					return input;
				case 2:
					return input;
				case 3:
					return input;
				case 4:
					return input;
				case 5:
					return input;
			}
			var hint =
				PreferredType === 3
					? "string"
					: PreferredType === 5
					  ? "number"
					  : "default";
			var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
			if (exoticToPrim !== void 0) {
				var result = exoticToPrim.call(input, hint);
				if (IsObject(result)) throw new TypeError();
				return result;
			}
			return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
		}
		__name(ToPrimitive, "ToPrimitive");
		function OrdinaryToPrimitive(O, hint) {
			if (hint === "string") {
				var toString_1 = O.toString;
				if (IsCallable(toString_1)) {
					var result = toString_1.call(O);
					if (!IsObject(result)) return result;
				}
				var valueOf = O.valueOf;
				if (IsCallable(valueOf)) {
					var result = valueOf.call(O);
					if (!IsObject(result)) return result;
				}
			} else {
				var valueOf = O.valueOf;
				if (IsCallable(valueOf)) {
					var result = valueOf.call(O);
					if (!IsObject(result)) return result;
				}
				var toString_2 = O.toString;
				if (IsCallable(toString_2)) {
					var result = toString_2.call(O);
					if (!IsObject(result)) return result;
				}
			}
			throw new TypeError();
		}
		__name(OrdinaryToPrimitive, "OrdinaryToPrimitive");
		function ToBoolean(argument) {
			return !!argument;
		}
		__name(ToBoolean, "ToBoolean");
		function ToString(argument) {
			return "" + argument;
		}
		__name(ToString, "ToString");
		function ToPropertyKey(argument) {
			var key = ToPrimitive(
				argument,
				3,
				/* String */
			);
			if (IsSymbol(key)) return key;
			return ToString(key);
		}
		__name(ToPropertyKey, "ToPropertyKey");
		function IsArray(argument) {
			return Array.isArray
				? Array.isArray(argument)
				: argument instanceof Object
				  ? argument instanceof Array
				  : Object.prototype.toString.call(argument) === "[object Array]";
		}
		__name(IsArray, "IsArray");
		function IsCallable(argument) {
			return typeof argument === "function";
		}
		__name(IsCallable, "IsCallable");
		function IsConstructor(argument) {
			return typeof argument === "function";
		}
		__name(IsConstructor, "IsConstructor");
		function IsPropertyKey(argument) {
			switch (Type(argument)) {
				case 3:
					return true;
				case 4:
					return true;
				default:
					return false;
			}
		}
		__name(IsPropertyKey, "IsPropertyKey");
		function GetMethod(V, P) {
			var func = V[P];
			if (func === void 0 || func === null) return void 0;
			if (!IsCallable(func)) throw new TypeError();
			return func;
		}
		__name(GetMethod, "GetMethod");
		function GetIterator(obj) {
			var method = GetMethod(obj, iteratorSymbol);
			if (!IsCallable(method)) throw new TypeError();
			var iterator = method.call(obj);
			if (!IsObject(iterator)) throw new TypeError();
			return iterator;
		}
		__name(GetIterator, "GetIterator");
		function IteratorValue(iterResult) {
			return iterResult.value;
		}
		__name(IteratorValue, "IteratorValue");
		function IteratorStep(iterator) {
			var result = iterator.next();
			return result.done ? false : result;
		}
		__name(IteratorStep, "IteratorStep");
		function IteratorClose(iterator) {
			var f = iterator["return"];
			if (f) f.call(iterator);
		}
		__name(IteratorClose, "IteratorClose");
		function OrdinaryGetPrototypeOf(O) {
			var proto = Object.getPrototypeOf(O);
			if (typeof O !== "function" || O === functionPrototype) return proto;
			if (proto !== functionPrototype) return proto;
			var prototype = O.prototype;
			var prototypeProto = prototype && Object.getPrototypeOf(prototype);
			if (prototypeProto == null || prototypeProto === Object.prototype)
				return proto;
			var constructor = prototypeProto.constructor;
			if (typeof constructor !== "function") return proto;
			if (constructor === O) return proto;
			return constructor;
		}
		__name(OrdinaryGetPrototypeOf, "OrdinaryGetPrototypeOf");
		function CreateMapPolyfill() {
			var cacheSentinel = {};
			var arraySentinel = [];
			var MapIterator =
				/** @class */
				(function () {
					function MapIterator2(keys, values, selector) {
						this._index = 0;
						this._keys = keys;
						this._values = values;
						this._selector = selector;
					}
					__name(MapIterator2, "MapIterator");
					MapIterator2.prototype["@@iterator"] = function () {
						return this;
					};
					MapIterator2.prototype[iteratorSymbol] = function () {
						return this;
					};
					MapIterator2.prototype.next = function () {
						var index = this._index;
						if (index >= 0 && index < this._keys.length) {
							var result = this._selector(
								this._keys[index],
								this._values[index],
							);
							if (index + 1 >= this._keys.length) {
								this._index = -1;
								this._keys = arraySentinel;
								this._values = arraySentinel;
							} else {
								this._index++;
							}
							return { value: result, done: false };
						}
						return { value: void 0, done: true };
					};
					MapIterator2.prototype.throw = function (error) {
						if (this._index >= 0) {
							this._index = -1;
							this._keys = arraySentinel;
							this._values = arraySentinel;
						}
						throw error;
					};
					MapIterator2.prototype.return = function (value) {
						if (this._index >= 0) {
							this._index = -1;
							this._keys = arraySentinel;
							this._values = arraySentinel;
						}
						return { value, done: true };
					};
					return MapIterator2;
				})();
			return (
				/** @class */
				(function () {
					function Map2() {
						this._keys = [];
						this._values = [];
						this._cacheKey = cacheSentinel;
						this._cacheIndex = -2;
					}
					__name(Map2, "Map");
					Object.defineProperty(Map2.prototype, "size", {
						get: function () {
							return this._keys.length;
						},
						enumerable: true,
						configurable: true,
					});
					Map2.prototype.has = function (key) {
						return (
							this._find(
								key,
								/*insert*/
								false,
							) >= 0
						);
					};
					Map2.prototype.get = function (key) {
						var index = this._find(
							key,
							/*insert*/
							false,
						);
						return index >= 0 ? this._values[index] : void 0;
					};
					Map2.prototype.set = function (key, value) {
						var index = this._find(
							key,
							/*insert*/
							true,
						);
						this._values[index] = value;
						return this;
					};
					Map2.prototype.delete = function (key) {
						var index = this._find(
							key,
							/*insert*/
							false,
						);
						if (index >= 0) {
							var size = this._keys.length;
							for (var i = index + 1; i < size; i++) {
								this._keys[i - 1] = this._keys[i];
								this._values[i - 1] = this._values[i];
							}
							this._keys.length--;
							this._values.length--;
							if (key === this._cacheKey) {
								this._cacheKey = cacheSentinel;
								this._cacheIndex = -2;
							}
							return true;
						}
						return false;
					};
					Map2.prototype.clear = function () {
						this._keys.length = 0;
						this._values.length = 0;
						this._cacheKey = cacheSentinel;
						this._cacheIndex = -2;
					};
					Map2.prototype.keys = function () {
						return new MapIterator(this._keys, this._values, getKey);
					};
					Map2.prototype.values = function () {
						return new MapIterator(this._keys, this._values, getValue);
					};
					Map2.prototype.entries = function () {
						return new MapIterator(this._keys, this._values, getEntry);
					};
					Map2.prototype["@@iterator"] = function () {
						return this.entries();
					};
					Map2.prototype[iteratorSymbol] = function () {
						return this.entries();
					};
					Map2.prototype._find = function (key, insert) {
						if (this._cacheKey !== key) {
							this._cacheIndex = this._keys.indexOf((this._cacheKey = key));
						}
						if (this._cacheIndex < 0 && insert) {
							this._cacheIndex = this._keys.length;
							this._keys.push(key);
							this._values.push(void 0);
						}
						return this._cacheIndex;
					};
					return Map2;
				})()
			);
			function getKey(key, _) {
				return key;
			}
			__name(getKey, "getKey");
			function getValue(_, value) {
				return value;
			}
			__name(getValue, "getValue");
			function getEntry(key, value) {
				return [key, value];
			}
			__name(getEntry, "getEntry");
		}
		__name(CreateMapPolyfill, "CreateMapPolyfill");
		function CreateSetPolyfill() {
			return (
				/** @class */
				(function () {
					function Set2() {
						this._map = new _Map();
					}
					__name(Set2, "Set");
					Object.defineProperty(Set2.prototype, "size", {
						get: function () {
							return this._map.size;
						},
						enumerable: true,
						configurable: true,
					});
					Set2.prototype.has = function (value) {
						return this._map.has(value);
					};
					Set2.prototype.add = function (value) {
						return this._map.set(value, value), this;
					};
					Set2.prototype.delete = function (value) {
						return this._map.delete(value);
					};
					Set2.prototype.clear = function () {
						this._map.clear();
					};
					Set2.prototype.keys = function () {
						return this._map.keys();
					};
					Set2.prototype.values = function () {
						return this._map.values();
					};
					Set2.prototype.entries = function () {
						return this._map.entries();
					};
					Set2.prototype["@@iterator"] = function () {
						return this.keys();
					};
					Set2.prototype[iteratorSymbol] = function () {
						return this.keys();
					};
					return Set2;
				})()
			);
		}
		__name(CreateSetPolyfill, "CreateSetPolyfill");
		function CreateWeakMapPolyfill() {
			var UUID_SIZE = 16;
			var keys = HashMap.create();
			var rootKey = CreateUniqueKey();
			return (
				/** @class */
				(function () {
					function WeakMap2() {
						this._key = CreateUniqueKey();
					}
					__name(WeakMap2, "WeakMap");
					WeakMap2.prototype.has = function (target) {
						var table = GetOrCreateWeakMapTable(
							target,
							/*create*/
							false,
						);
						return table !== void 0 ? HashMap.has(table, this._key) : false;
					};
					WeakMap2.prototype.get = function (target) {
						var table = GetOrCreateWeakMapTable(
							target,
							/*create*/
							false,
						);
						return table !== void 0 ? HashMap.get(table, this._key) : void 0;
					};
					WeakMap2.prototype.set = function (target, value) {
						var table = GetOrCreateWeakMapTable(
							target,
							/*create*/
							true,
						);
						table[this._key] = value;
						return this;
					};
					WeakMap2.prototype.delete = function (target) {
						var table = GetOrCreateWeakMapTable(
							target,
							/*create*/
							false,
						);
						return table !== void 0 ? delete table[this._key] : false;
					};
					WeakMap2.prototype.clear = function () {
						this._key = CreateUniqueKey();
					};
					return WeakMap2;
				})()
			);
			function CreateUniqueKey() {
				var key;
				do key = "@@WeakMap@@" + CreateUUID();
				while (HashMap.has(keys, key));
				keys[key] = true;
				return key;
			}
			__name(CreateUniqueKey, "CreateUniqueKey");
			function GetOrCreateWeakMapTable(target, create) {
				if (!hasOwn.call(target, rootKey)) {
					if (!create) return void 0;
					Object.defineProperty(target, rootKey, { value: HashMap.create() });
				}
				return target[rootKey];
			}
			__name(GetOrCreateWeakMapTable, "GetOrCreateWeakMapTable");
			function FillRandomBytes(buffer, size) {
				for (var i = 0; i < size; ++i) buffer[i] = (Math.random() * 255) | 0;
				return buffer;
			}
			__name(FillRandomBytes, "FillRandomBytes");
			function GenRandomBytes(size) {
				if (typeof Uint8Array === "function") {
					if (typeof crypto !== "undefined")
						return crypto.getRandomValues(new Uint8Array(size));
					if (typeof msCrypto !== "undefined")
						return msCrypto.getRandomValues(new Uint8Array(size));
					return FillRandomBytes(new Uint8Array(size), size);
				}
				return FillRandomBytes(new Array(size), size);
			}
			__name(GenRandomBytes, "GenRandomBytes");
			function CreateUUID() {
				var data = GenRandomBytes(UUID_SIZE);
				data[6] = (data[6] & 79) | 64;
				data[8] = (data[8] & 191) | 128;
				var result = "";
				for (var offset = 0; offset < UUID_SIZE; ++offset) {
					var byte = data[offset];
					if (offset === 4 || offset === 6 || offset === 8) result += "-";
					if (byte < 16) result += "0";
					result += byte.toString(16).toLowerCase();
				}
				return result;
			}
			__name(CreateUUID, "CreateUUID");
		}
		__name(CreateWeakMapPolyfill, "CreateWeakMapPolyfill");
		function MakeDictionary(obj) {
			obj.__ = void 0;
			delete obj.__;
			return obj;
		}
		__name(MakeDictionary, "MakeDictionary");
	});
})(Reflect2 || (Reflect2 = {}));

// node_modules/.pnpm/hono@3.11.2/node_modules/hono/dist/utils/url.js
var splitPath = /* @__PURE__ */ __name((path) => {
	const paths = path.split("/");
	if (paths[0] === "") {
		paths.shift();
	}
	return paths;
}, "splitPath");
var splitRoutingPath = /* @__PURE__ */ __name((path) => {
	const groups = [];
	for (let i = 0; ; ) {
		let replaced = false;
		path = path.replace(/\{[^}]+\}/g, (m) => {
			const mark = `@\\${i}`;
			groups[i] = [mark, m];
			i++;
			replaced = true;
			return mark;
		});
		if (!replaced) {
			break;
		}
	}
	const paths = path.split("/");
	if (paths[0] === "") {
		paths.shift();
	}
	for (let i = groups.length - 1; i >= 0; i--) {
		const [mark] = groups[i];
		for (let j = paths.length - 1; j >= 0; j--) {
			if (paths[j].indexOf(mark) !== -1) {
				paths[j] = paths[j].replace(mark, groups[i][1]);
				break;
			}
		}
	}
	return paths;
}, "splitRoutingPath");
var patternCache = {};
var getPattern = /* @__PURE__ */ __name((label) => {
	if (label === "*") {
		return "*";
	}
	const match = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
	if (match) {
		if (!patternCache[label]) {
			if (match[2]) {
				patternCache[label] = [
					label,
					match[1],
					new RegExp("^" + match[2] + "$"),
				];
			} else {
				patternCache[label] = [label, match[1], true];
			}
		}
		return patternCache[label];
	}
	return null;
}, "getPattern");
var getPath = /* @__PURE__ */ __name((request) => {
	const match = request.url.match(/^https?:\/\/[^/]+(\/[^?]*)/);
	return match ? match[1] : "";
}, "getPath");
var getQueryStrings = /* @__PURE__ */ __name((url) => {
	const queryIndex = url.indexOf("?", 8);
	return queryIndex === -1 ? "" : "?" + url.slice(queryIndex + 1);
}, "getQueryStrings");
var getPathNoStrict = /* @__PURE__ */ __name((request) => {
	const result = getPath(request);
	return result.length > 1 && result[result.length - 1] === "/"
		? result.slice(0, -1)
		: result;
}, "getPathNoStrict");
var mergePath = /* @__PURE__ */ __name((...paths) => {
	let p = "";
	let endsWithSlash = false;
	for (let path of paths) {
		if (p[p.length - 1] === "/") {
			p = p.slice(0, -1);
			endsWithSlash = true;
		}
		if (path[0] !== "/") {
			path = `/${path}`;
		}
		if (path === "/" && endsWithSlash) {
			p = `${p}/`;
		} else if (path !== "/") {
			p = `${p}${path}`;
		}
		if (path === "/" && p === "") {
			p = "/";
		}
	}
	return p;
}, "mergePath");
var checkOptionalParameter = /* @__PURE__ */ __name((path) => {
	const match = path.match(/^(.+|)(\/\:[^\/]+)\?$/);
	if (!match) return null;
	const base = match[1];
	const optional = base + match[2];
	return [base === "" ? "/" : base.replace(/\/$/, ""), optional];
}, "checkOptionalParameter");
var _decodeURI = /* @__PURE__ */ __name((value) => {
	if (!/[%+]/.test(value)) {
		return value;
	}
	if (value.indexOf("+") !== -1) {
		value = value.replace(/\+/g, " ");
	}
	return /%/.test(value) ? decodeURIComponent_(value) : value;
}, "_decodeURI");
var _getQueryParam = /* @__PURE__ */ __name((url, key, multiple) => {
	let encoded;
	if (!multiple && key && !/[%+]/.test(key)) {
		let keyIndex2 = url.indexOf(`?${key}`, 8);
		if (keyIndex2 === -1) {
			keyIndex2 = url.indexOf(`&${key}`, 8);
		}
		while (keyIndex2 !== -1) {
			const trailingKeyCode = url.charCodeAt(keyIndex2 + key.length + 1);
			if (trailingKeyCode === 61) {
				const valueIndex = keyIndex2 + key.length + 2;
				const endIndex = url.indexOf("&", valueIndex);
				return _decodeURI(
					url.slice(valueIndex, endIndex === -1 ? void 0 : endIndex),
				);
			} else if (trailingKeyCode == 38 || isNaN(trailingKeyCode)) {
				return "";
			}
			keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
		}
		encoded = /[%+]/.test(url);
		if (!encoded) {
			return void 0;
		}
	}
	const results = {};
	encoded ?? (encoded = /[%+]/.test(url));
	let keyIndex = url.indexOf("?", 8);
	while (keyIndex !== -1) {
		const nextKeyIndex = url.indexOf("&", keyIndex + 1);
		let valueIndex = url.indexOf("=", keyIndex);
		if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) {
			valueIndex = -1;
		}
		let name = url.slice(
			keyIndex + 1,
			valueIndex === -1
				? nextKeyIndex === -1
					? void 0
					: nextKeyIndex
				: valueIndex,
		);
		if (encoded) {
			name = _decodeURI(name);
		}
		keyIndex = nextKeyIndex;
		if (name === "") {
			continue;
		}
		let value;
		if (valueIndex === -1) {
			value = "";
		} else {
			value = url.slice(
				valueIndex + 1,
				nextKeyIndex === -1 ? void 0 : nextKeyIndex,
			);
			if (encoded) {
				value = _decodeURI(value);
			}
		}
		if (multiple) {
			(results[name] ?? (results[name] = [])).push(value);
		} else {
			results[name] ?? (results[name] = value);
		}
	}
	return key ? results[key] : results;
}, "_getQueryParam");
var getQueryParam = _getQueryParam;
var getQueryParams = /* @__PURE__ */ __name((url, key) => {
	return _getQueryParam(url, key, true);
}, "getQueryParams");
var decodeURIComponent_ = decodeURIComponent;

// node_modules/.pnpm/hono@3.11.2/node_modules/hono/dist/utils/cookie.js
var validCookieNameRegEx = /^[\w!#$%&'*.^`|~+-]+$/;
var validCookieValueRegEx = /^[ !#-:<-[\]-~]*$/;
var parse = /* @__PURE__ */ __name((cookie, name) => {
	const pairs = cookie.trim().split(";");
	return pairs.reduce((parsedCookie, pairStr) => {
		pairStr = pairStr.trim();
		const valueStartPos = pairStr.indexOf("=");
		if (valueStartPos === -1) return parsedCookie;
		const cookieName = pairStr.substring(0, valueStartPos).trim();
		if ((name && name !== cookieName) || !validCookieNameRegEx.test(cookieName))
			return parsedCookie;
		let cookieValue = pairStr.substring(valueStartPos + 1).trim();
		if (cookieValue.startsWith('"') && cookieValue.endsWith('"'))
			cookieValue = cookieValue.slice(1, -1);
		if (validCookieValueRegEx.test(cookieValue))
			parsedCookie[cookieName] = decodeURIComponent_(cookieValue);
		return parsedCookie;
	}, {});
}, "parse");
var _serialize = /* @__PURE__ */ __name((name, value, opt = {}) => {
	let cookie = `${name}=${value}`;
	if (opt && typeof opt.maxAge === "number" && opt.maxAge >= 0) {
		cookie += `; Max-Age=${Math.floor(opt.maxAge)}`;
	}
	if (opt.domain) {
		cookie += `; Domain=${opt.domain}`;
	}
	if (opt.path) {
		cookie += `; Path=${opt.path}`;
	}
	if (opt.expires) {
		cookie += `; Expires=${opt.expires.toUTCString()}`;
	}
	if (opt.httpOnly) {
		cookie += "; HttpOnly";
	}
	if (opt.secure) {
		cookie += "; Secure";
	}
	if (opt.sameSite) {
		cookie += `; SameSite=${opt.sameSite}`;
	}
	if (opt.partitioned) {
		cookie += "; Partitioned";
	}
	return cookie;
}, "_serialize");
var serialize = /* @__PURE__ */ __name((name, value, opt = {}) => {
	value = encodeURIComponent(value);
	return _serialize(name, value, opt);
}, "serialize");

// node_modules/.pnpm/hono@3.11.2/node_modules/hono/dist/utils/html.js
var resolveStream = /* @__PURE__ */ __name((str, buffer) => {
	if (!str.callbacks?.length) {
		return Promise.resolve(str);
	}
	const callbacks = str.callbacks;
	if (buffer) {
		buffer[0] += str;
	} else {
		buffer = [str];
	}
	return Promise.all(callbacks.map((c) => c({ buffer }))).then((res) =>
		Promise.all(res.map((str2) => resolveStream(str2, buffer))).then(
			() => buffer[0],
		),
	);
}, "resolveStream");

// node_modules/.pnpm/hono@3.11.2/node_modules/hono/dist/utils/stream.js
var StreamingApi = /* @__PURE__ */ __name(
	class {
		constructor(writable) {
			this.writable = writable;
			this.writer = writable.getWriter();
			this.encoder = new TextEncoder();
		}
		async write(input) {
			try {
				if (typeof input === "string") {
					input = this.encoder.encode(input);
				}
				await this.writer.write(input);
			} catch (e) {}
			return this;
		}
		async writeln(input) {
			await this.write(input + "\n");
			return this;
		}
		sleep(ms) {
			return new Promise((res) => setTimeout(res, ms));
		}
		async close() {
			try {
				await this.writer.close();
			} catch (e) {}
		}
		async pipe(body) {
			this.writer.releaseLock();
			await body.pipeTo(this.writable, { preventClose: true });
			this.writer = this.writable.getWriter();
		}
	},
	"StreamingApi",
);

// node_modules/.pnpm/hono@3.11.2/node_modules/hono/dist/context.js
var __accessCheck = /* @__PURE__ */ __name((obj, member, msg) => {
	if (!member.has(obj)) throw TypeError("Cannot " + msg);
}, "__accessCheck");
var __privateGet = /* @__PURE__ */ __name((obj, member, getter) => {
	__accessCheck(obj, member, "read from private field");
	return getter ? getter.call(obj) : member.get(obj);
}, "__privateGet");
var __privateAdd = /* @__PURE__ */ __name((obj, member, value) => {
	if (member.has(obj))
		throw TypeError("Cannot add the same private member more than once");
	member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
}, "__privateAdd");
var __privateSet = /* @__PURE__ */ __name((obj, member, value, setter) => {
	__accessCheck(obj, member, "write to private field");
	setter ? setter.call(obj, value) : member.set(obj, value);
	return value;
}, "__privateSet");
var TEXT_PLAIN = "text/plain; charset=UTF-8";
var _status;
var _executionCtx;
var _headers;
var _preparedHeaders;
var _res;
var _isFresh;
var Context = /* @__PURE__ */ __name(
	class {
		constructor(req, options) {
			this.env = {};
			this._var = {};
			this.finalized = false;
			this.error = void 0;
			__privateAdd(this, _status, 200);
			__privateAdd(this, _executionCtx, void 0);
			__privateAdd(this, _headers, void 0);
			__privateAdd(this, _preparedHeaders, void 0);
			__privateAdd(this, _res, void 0);
			__privateAdd(this, _isFresh, true);
			this.renderer = (content) => this.html(content);
			this.notFoundHandler = () => new Response();
			this.render = (...args) => this.renderer(...args);
			this.setRenderer = (renderer) => {
				this.renderer = renderer;
			};
			this.header = (name, value, options2) => {
				if (value === void 0) {
					if (__privateGet(this, _headers)) {
						__privateGet(this, _headers).delete(name);
					} else if (__privateGet(this, _preparedHeaders)) {
						delete __privateGet(this, _preparedHeaders)[
							name.toLocaleLowerCase()
						];
					}
					if (this.finalized) {
						this.res.headers.delete(name);
					}
					return;
				}
				if (options2?.append) {
					if (!__privateGet(this, _headers)) {
						__privateSet(this, _isFresh, false);
						__privateSet(
							this,
							_headers,
							new Headers(__privateGet(this, _preparedHeaders)),
						);
						__privateSet(this, _preparedHeaders, {});
					}
					__privateGet(this, _headers).append(name, value);
				} else {
					if (__privateGet(this, _headers)) {
						__privateGet(this, _headers).set(name, value);
					} else {
						__privateGet(this, _preparedHeaders) ??
							__privateSet(this, _preparedHeaders, {});
						__privateGet(this, _preparedHeaders)[name.toLowerCase()] = value;
					}
				}
				if (this.finalized) {
					if (options2?.append) {
						this.res.headers.append(name, value);
					} else {
						this.res.headers.set(name, value);
					}
				}
			};
			this.status = (status) => {
				__privateSet(this, _isFresh, false);
				__privateSet(this, _status, status);
			};
			this.set = (key, value) => {
				this._var ?? (this._var = {});
				this._var[key] = value;
			};
			this.get = (key) => {
				return this._var ? this._var[key] : void 0;
			};
			this.newResponse = (data, arg, headers) => {
				if (
					__privateGet(this, _isFresh) &&
					!headers &&
					!arg &&
					__privateGet(this, _status) === 200
				) {
					return new Response(data, {
						headers: __privateGet(this, _preparedHeaders),
					});
				}
				if (arg && typeof arg !== "number") {
					const res = new Response(data, arg);
					const contentType = __privateGet(this, _preparedHeaders)?.[
						"content-type"
					];
					if (contentType) {
						res.headers.set("content-type", contentType);
					}
					return res;
				}
				const status = arg ?? __privateGet(this, _status);
				__privateGet(this, _preparedHeaders) ??
					__privateSet(this, _preparedHeaders, {});
				__privateGet(this, _headers) ??
					__privateSet(this, _headers, new Headers());
				for (const [k, v] of Object.entries(
					__privateGet(this, _preparedHeaders),
				)) {
					__privateGet(this, _headers).set(k, v);
				}
				if (__privateGet(this, _res)) {
					__privateGet(this, _res).headers.forEach((v, k) => {
						__privateGet(this, _headers)?.set(k, v);
					});
					for (const [k, v] of Object.entries(
						__privateGet(this, _preparedHeaders),
					)) {
						__privateGet(this, _headers).set(k, v);
					}
				}
				headers ?? (headers = {});
				for (const [k, v] of Object.entries(headers)) {
					if (typeof v === "string") {
						__privateGet(this, _headers).set(k, v);
					} else {
						__privateGet(this, _headers).delete(k);
						for (const v2 of v) {
							__privateGet(this, _headers).append(k, v2);
						}
					}
				}
				return new Response(data, {
					status,
					headers: __privateGet(this, _headers),
				});
			};
			this.body = (data, arg, headers) => {
				return typeof arg === "number"
					? this.newResponse(data, arg, headers)
					: this.newResponse(data, arg);
			};
			this.text = (text, arg, headers) => {
				if (!__privateGet(this, _preparedHeaders)) {
					if (__privateGet(this, _isFresh) && !headers && !arg) {
						return new Response(text);
					}
					__privateSet(this, _preparedHeaders, {});
				}
				__privateGet(this, _preparedHeaders)["content-type"] = TEXT_PLAIN;
				return typeof arg === "number"
					? this.newResponse(text, arg, headers)
					: this.newResponse(text, arg);
			};
			this.json = (object, arg, headers) => {
				const body = JSON.stringify(object);
				__privateGet(this, _preparedHeaders) ??
					__privateSet(this, _preparedHeaders, {});
				__privateGet(this, _preparedHeaders)["content-type"] =
					"application/json; charset=UTF-8";
				return typeof arg === "number"
					? this.newResponse(body, arg, headers)
					: this.newResponse(body, arg);
			};
			this.jsonT = (object, arg, headers) => {
				return this.json(object, arg, headers);
			};
			this.html = (html, arg, headers) => {
				__privateGet(this, _preparedHeaders) ??
					__privateSet(this, _preparedHeaders, {});
				__privateGet(this, _preparedHeaders)["content-type"] =
					"text/html; charset=UTF-8";
				if (typeof html === "object") {
					if (!(html instanceof Promise)) {
						html = html.toString();
					}
					if (html instanceof Promise) {
						return html
							.then((html2) => resolveStream(html2))
							.then((html2) => {
								return typeof arg === "number"
									? this.newResponse(html2, arg, headers)
									: this.newResponse(html2, arg);
							});
					}
				}
				return typeof arg === "number"
					? this.newResponse(html, arg, headers)
					: this.newResponse(html, arg);
			};
			this.redirect = (location, status = 302) => {
				__privateGet(this, _headers) ??
					__privateSet(this, _headers, new Headers());
				__privateGet(this, _headers).set("Location", location);
				return this.newResponse(null, status);
			};
			this.streamText = (cb, arg, headers) => {
				headers ?? (headers = {});
				this.header("content-type", TEXT_PLAIN);
				this.header("x-content-type-options", "nosniff");
				this.header("transfer-encoding", "chunked");
				return this.stream(cb, arg, headers);
			};
			this.stream = (cb, arg, headers) => {
				const { readable, writable } = new TransformStream();
				const stream = new StreamingApi(writable);
				cb(stream).finally(() => stream.close());
				return typeof arg === "number"
					? this.newResponse(readable, arg, headers)
					: this.newResponse(readable, arg);
			};
			this.cookie = (name, value, opt) => {
				const cookie = serialize(name, value, opt);
				this.header("set-cookie", cookie, { append: true });
			};
			this.notFound = () => {
				return this.notFoundHandler(this);
			};
			this.req = req;
			if (options) {
				__privateSet(this, _executionCtx, options.executionCtx);
				this.env = options.env;
				if (options.notFoundHandler) {
					this.notFoundHandler = options.notFoundHandler;
				}
			}
		}
		get event() {
			if (
				__privateGet(this, _executionCtx) &&
				"respondWith" in __privateGet(this, _executionCtx)
			) {
				return __privateGet(this, _executionCtx);
			} else {
				throw Error("This context has no FetchEvent");
			}
		}
		get executionCtx() {
			if (__privateGet(this, _executionCtx)) {
				return __privateGet(this, _executionCtx);
			} else {
				throw Error("This context has no ExecutionContext");
			}
		}
		get res() {
			__privateSet(this, _isFresh, false);
			return (
				__privateGet(this, _res) ||
				__privateSet(this, _res, new Response("404 Not Found", { status: 404 }))
			);
		}
		set res(_res2) {
			__privateSet(this, _isFresh, false);
			if (__privateGet(this, _res) && _res2) {
				__privateGet(this, _res).headers.delete("content-type");
				__privateGet(this, _res).headers.forEach((v, k) => {
					_res2.headers.set(k, v);
				});
			}
			__privateSet(this, _res, _res2);
			this.finalized = true;
		}
		get var() {
			return { ...this._var };
		}
		get runtime() {
			const global2 = globalThis;
			if (global2?.Deno !== void 0) {
				return "deno";
			}
			if (global2?.Bun !== void 0) {
				return "bun";
			}
			if (typeof global2?.WebSocketPair === "function") {
				return "workerd";
			}
			if (typeof global2?.EdgeRuntime === "string") {
				return "edge-light";
			}
			if (global2?.fastly !== void 0) {
				return "fastly";
			}
			if (global2?.__lagon__ !== void 0) {
				return "lagon";
			}
			if (global2?.process?.release?.name === "node") {
				return "node";
			}
			return "other";
		}
	},
	"Context",
);
_status = /* @__PURE__ */ new WeakMap();
_executionCtx = /* @__PURE__ */ new WeakMap();
_headers = /* @__PURE__ */ new WeakMap();
_preparedHeaders = /* @__PURE__ */ new WeakMap();
_res = /* @__PURE__ */ new WeakMap();
_isFresh = /* @__PURE__ */ new WeakMap();

// node_modules/.pnpm/hono@3.11.2/node_modules/hono/dist/compose.js
var compose = /* @__PURE__ */ __name((middleware, onError, onNotFound) => {
	return (context, next) => {
		let index = -1;
		return dispatch(0);
		async function dispatch(i) {
			if (i <= index) {
				throw new Error("next() called multiple times");
			}
			index = i;
			let res;
			let isError = false;
			let handler2;
			if (middleware[i]) {
				handler2 = middleware[i][0][0];
				if (context instanceof Context) {
					context.req.routeIndex = i;
				}
			} else {
				handler2 = (i === middleware.length && next) || void 0;
			}
			if (!handler2) {
				if (
					context instanceof Context &&
					context.finalized === false &&
					onNotFound
				) {
					res = await onNotFound(context);
				}
			} else {
				try {
					res = await handler2(context, () => {
						return dispatch(i + 1);
					});
				} catch (err) {
					if (err instanceof Error && context instanceof Context && onError) {
						context.error = err;
						res = await onError(err, context);
						isError = true;
					} else {
						throw err;
					}
				}
			}
			if (res && (context.finalized === false || isError)) {
				context.res = res;
			}
			return context;
		}
		__name(dispatch, "dispatch");
	};
}, "compose");

// node_modules/.pnpm/hono@3.11.2/node_modules/hono/dist/http-exception.js
var HTTPException = /* @__PURE__ */ __name(
	class extends Error {
		constructor(status = 500, options) {
			super(options?.message);
			this.res = options?.res;
			this.status = status;
		}
		getResponse() {
			if (this.res) {
				return this.res;
			}
			return new Response(this.message, {
				status: this.status,
			});
		}
	},
	"HTTPException",
);

// node_modules/.pnpm/hono@3.11.2/node_modules/hono/dist/utils/body.js
var isArrayField = /* @__PURE__ */ __name((value) => {
	return Array.isArray(value);
}, "isArrayField");
var parseBody = /* @__PURE__ */ __name(
	async (
		request,
		options = {
			all: false,
		},
	) => {
		let body = {};
		const contentType = request.headers.get("Content-Type");
		if (
			contentType &&
			(contentType.startsWith("multipart/form-data") ||
				contentType.startsWith("application/x-www-form-urlencoded"))
		) {
			const formData = await request.formData();
			if (formData) {
				const form = {};
				formData.forEach((value, key) => {
					const shouldParseAllValues = options.all || key.slice(-2) === "[]";
					if (!shouldParseAllValues) {
						form[key] = value;
						return;
					}
					if (form[key] && isArrayField(form[key])) {
						form[key].push(value);
						return;
					}
					if (form[key]) {
						form[key] = [form[key], value];
						return;
					}
					form[key] = value;
				});
				body = form;
			}
		}
		return body;
	},
	"parseBody",
);

// node_modules/.pnpm/hono@3.11.2/node_modules/hono/dist/request.js
var __accessCheck2 = /* @__PURE__ */ __name((obj, member, msg) => {
	if (!member.has(obj)) throw TypeError("Cannot " + msg);
}, "__accessCheck");
var __privateGet2 = /* @__PURE__ */ __name((obj, member, getter) => {
	__accessCheck2(obj, member, "read from private field");
	return getter ? getter.call(obj) : member.get(obj);
}, "__privateGet");
var __privateAdd2 = /* @__PURE__ */ __name((obj, member, value) => {
	if (member.has(obj))
		throw TypeError("Cannot add the same private member more than once");
	member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
}, "__privateAdd");
var __privateSet2 = /* @__PURE__ */ __name((obj, member, value, setter) => {
	__accessCheck2(obj, member, "write to private field");
	setter ? setter.call(obj, value) : member.set(obj, value);
	return value;
}, "__privateSet");
var _validatedData;
var _matchResult;
var HonoRequest = /* @__PURE__ */ __name(
	class {
		constructor(request, path = "/", matchResult = [[]]) {
			__privateAdd2(this, _validatedData, void 0);
			__privateAdd2(this, _matchResult, void 0);
			this.routeIndex = 0;
			this.bodyCache = {};
			this.cachedBody = (key) => {
				const { bodyCache, raw: raw2 } = this;
				const cachedBody = bodyCache[key];
				if (cachedBody) return cachedBody;
				if (bodyCache.arrayBuffer) {
					return (async () => {
						return await new Response(bodyCache.arrayBuffer)[key]();
					})();
				}
				return (bodyCache[key] = raw2[key]());
			};
			this.raw = request;
			this.path = path;
			__privateSet2(this, _matchResult, matchResult);
			__privateSet2(this, _validatedData, {});
		}
		param(key) {
			if (key) {
				const param = __privateGet2(this, _matchResult)[1]
					? __privateGet2(this, _matchResult)[1][
							__privateGet2(this, _matchResult)[0][this.routeIndex][1][key]
					  ]
					: __privateGet2(this, _matchResult)[0][this.routeIndex][1][key];
				return param
					? /\%/.test(param)
						? decodeURIComponent_(param)
						: param
					: void 0;
			} else {
				const decoded = {};
				const keys = Object.keys(
					__privateGet2(this, _matchResult)[0][this.routeIndex][1],
				);
				for (let i = 0, len = keys.length; i < len; i++) {
					const key2 = keys[i];
					const value = __privateGet2(this, _matchResult)[1]
						? __privateGet2(this, _matchResult)[1][
								__privateGet2(this, _matchResult)[0][this.routeIndex][1][key2]
						  ]
						: __privateGet2(this, _matchResult)[0][this.routeIndex][1][key2];
					if (value && typeof value === "string") {
						decoded[key2] = /\%/.test(value)
							? decodeURIComponent_(value)
							: value;
					}
				}
				return decoded;
			}
		}
		query(key) {
			return getQueryParam(this.url, key);
		}
		queries(key) {
			return getQueryParams(this.url, key);
		}
		header(name) {
			if (name) return this.raw.headers.get(name.toLowerCase()) ?? void 0;
			const headerData = {};
			this.raw.headers.forEach((value, key) => {
				headerData[key] = value;
			});
			return headerData;
		}
		cookie(key) {
			const cookie = this.raw.headers.get("Cookie");
			if (!cookie) return;
			const obj = parse(cookie);
			if (key) {
				const value = obj[key];
				return value;
			} else {
				return obj;
			}
		}
		async parseBody(options) {
			if (this.bodyCache.parsedBody) return this.bodyCache.parsedBody;
			const parsedBody = await parseBody(this, options);
			this.bodyCache.parsedBody = parsedBody;
			return parsedBody;
		}
		json() {
			return this.cachedBody("json");
		}
		text() {
			return this.cachedBody("text");
		}
		arrayBuffer() {
			return this.cachedBody("arrayBuffer");
		}
		blob() {
			return this.cachedBody("blob");
		}
		formData() {
			return this.cachedBody("formData");
		}
		addValidatedData(target, data) {
			__privateGet2(this, _validatedData)[target] = data;
		}
		valid(target) {
			return __privateGet2(this, _validatedData)[target];
		}
		get url() {
			return this.raw.url;
		}
		get method() {
			return this.raw.method;
		}
		get matchedRoutes() {
			return __privateGet2(this, _matchResult)[0].map(([[, route]]) => route);
		}
		get routePath() {
			return __privateGet2(this, _matchResult)[0].map(([[, route]]) => route)[
				this.routeIndex
			].path;
		}
		get headers() {
			return this.raw.headers;
		}
		get body() {
			return this.raw.body;
		}
		get bodyUsed() {
			return this.raw.bodyUsed;
		}
		get integrity() {
			return this.raw.integrity;
		}
		get keepalive() {
			return this.raw.keepalive;
		}
		get referrer() {
			return this.raw.referrer;
		}
		get signal() {
			return this.raw.signal;
		}
	},
	"HonoRequest",
);
_validatedData = /* @__PURE__ */ new WeakMap();
_matchResult = /* @__PURE__ */ new WeakMap();

// node_modules/.pnpm/hono@3.11.2/node_modules/hono/dist/router.js
var METHOD_NAME_ALL = "ALL";
var METHOD_NAME_ALL_LOWERCASE = "all";
var METHODS = ["get", "post", "put", "delete", "options", "patch"];
var MESSAGE_MATCHER_IS_ALREADY_BUILT =
	"Can not add a route since the matcher is already built.";
var UnsupportedPathError = /* @__PURE__ */ __name(
	class extends Error {},
	"UnsupportedPathError",
);

// node_modules/.pnpm/hono@3.11.2/node_modules/hono/dist/hono-base.js
var __accessCheck3 = /* @__PURE__ */ __name((obj, member, msg) => {
	if (!member.has(obj)) throw TypeError("Cannot " + msg);
}, "__accessCheck");
var __privateGet3 = /* @__PURE__ */ __name((obj, member, getter) => {
	__accessCheck3(obj, member, "read from private field");
	return getter ? getter.call(obj) : member.get(obj);
}, "__privateGet");
var __privateAdd3 = /* @__PURE__ */ __name((obj, member, value) => {
	if (member.has(obj))
		throw TypeError("Cannot add the same private member more than once");
	member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
}, "__privateAdd");
var __privateSet3 = /* @__PURE__ */ __name((obj, member, value, setter) => {
	__accessCheck3(obj, member, "write to private field");
	setter ? setter.call(obj, value) : member.set(obj, value);
	return value;
}, "__privateSet");
function defineDynamicClass() {
	return class {};
}
__name(defineDynamicClass, "defineDynamicClass");
var notFoundHandler = /* @__PURE__ */ __name((c) => {
	return c.text("404 Not Found", 404);
}, "notFoundHandler");
var errorHandler = /* @__PURE__ */ __name((err, c) => {
	if (err instanceof HTTPException) {
		return err.getResponse();
	}
	console.error(err);
	const message = "Internal Server Error";
	return c.text(message, 500);
}, "errorHandler");
var _basePath;
var _path;
var _Hono = /* @__PURE__ */ __name(
	class extends defineDynamicClass() {
		constructor(options = {}) {
			super();
			__privateAdd3(this, _basePath, "/");
			__privateAdd3(this, _path, "/");
			this.routes = [];
			this.notFoundHandler = notFoundHandler;
			this.errorHandler = errorHandler;
			this.head = () => {
				console.warn(
					"`app.head()` is no longer used. `app.get()` implicitly handles the HEAD method.",
				);
				return this;
			};
			this.handleEvent = (event) => {
				return this.dispatch(
					event.request,
					event,
					void 0,
					event.request.method,
				);
			};
			this.fetch = (request, Env, executionCtx) => {
				return this.dispatch(request, executionCtx, Env, request.method);
			};
			this.request = (input, requestInit, Env, executionCtx) => {
				if (input instanceof Request) {
					if (requestInit !== void 0) {
						input = new Request(input, requestInit);
					}
					return this.fetch(input, Env, executionCtx);
				}
				input = input.toString();
				const path = /^https?:\/\//.test(input)
					? input
					: `http://localhost${mergePath("/", input)}`;
				const req = new Request(path, requestInit);
				return this.fetch(req, Env, executionCtx);
			};
			this.fire = () => {
				addEventListener("fetch", (event) => {
					event.respondWith(
						this.dispatch(event.request, event, void 0, event.request.method),
					);
				});
			};
			const allMethods = [...METHODS, METHOD_NAME_ALL_LOWERCASE];
			allMethods.map((method) => {
				this[method] = (args1, ...args) => {
					if (typeof args1 === "string") {
						__privateSet3(this, _path, args1);
					} else {
						this.addRoute(method, __privateGet3(this, _path), args1);
					}
					args.map((handler2) => {
						if (typeof handler2 !== "string") {
							this.addRoute(method, __privateGet3(this, _path), handler2);
						}
					});
					return this;
				};
			});
			this.on = (method, path, ...handlers) => {
				if (!method) return this;
				__privateSet3(this, _path, path);
				for (const m of [method].flat()) {
					handlers.map((handler2) => {
						this.addRoute(
							m.toUpperCase(),
							__privateGet3(this, _path),
							handler2,
						);
					});
				}
				return this;
			};
			this.use = (arg1, ...handlers) => {
				if (typeof arg1 === "string") {
					__privateSet3(this, _path, arg1);
				} else {
					handlers.unshift(arg1);
				}
				handlers.map((handler2) => {
					this.addRoute(METHOD_NAME_ALL, __privateGet3(this, _path), handler2);
				});
				return this;
			};
			const strict = options.strict ?? true;
			delete options.strict;
			Object.assign(this, options);
			this.getPath = strict ? options.getPath ?? getPath : getPathNoStrict;
		}
		clone() {
			const clone = new _Hono({
				router: this.router,
				getPath: this.getPath,
			});
			clone.routes = this.routes;
			return clone;
		}
		route(path, app2) {
			const subApp = this.basePath(path);
			if (!app2) {
				return subApp;
			}
			app2.routes.map((r) => {
				const handler2 =
					app2.errorHandler === errorHandler
						? r.handler
						: async (c, next) =>
								(
									await compose([], app2.errorHandler)(c, () =>
										r.handler(c, next),
									)
								).res;
				subApp.addRoute(r.method, r.path, handler2);
			});
			return this;
		}
		basePath(path) {
			const subApp = this.clone();
			__privateSet3(
				subApp,
				_basePath,
				mergePath(__privateGet3(this, _basePath), path),
			);
			return subApp;
		}
		onError(handler2) {
			this.errorHandler = handler2;
			return this;
		}
		notFound(handler2) {
			this.notFoundHandler = handler2;
			return this;
		}
		showRoutes() {
			const length = 8;
			this.routes.map((route) => {
				console.log(
					`\x1B[32m${route.method}\x1B[0m ${" ".repeat(
						length - route.method.length,
					)} ${route.path}`,
				);
			});
		}
		mount(path, applicationHandler, optionHandler) {
			const mergedPath = mergePath(__privateGet3(this, _basePath), path);
			const pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
			const handler2 = /* @__PURE__ */ __name(async (c, next) => {
				let executionContext = void 0;
				try {
					executionContext = c.executionCtx;
				} catch {}
				const options = optionHandler
					? optionHandler(c)
					: [c.env, executionContext];
				const optionsArray = Array.isArray(options) ? options : [options];
				const queryStrings = getQueryStrings(c.req.url);
				const res = await applicationHandler(
					new Request(
						new URL(
							(c.req.path.slice(pathPrefixLength) || "/") + queryStrings,
							c.req.url,
						),
						c.req.raw,
					),
					...optionsArray,
				);
				if (res) return res;
				await next();
			}, "handler");
			this.addRoute(METHOD_NAME_ALL, mergePath(path, "*"), handler2);
			return this;
		}
		get routerName() {
			this.matchRoute("GET", "/");
			return this.router.name;
		}
		addRoute(method, path, handler2) {
			method = method.toUpperCase();
			path = mergePath(__privateGet3(this, _basePath), path);
			const r = { path, method, handler: handler2 };
			this.router.add(method, path, [handler2, r]);
			this.routes.push(r);
		}
		matchRoute(method, path) {
			return this.router.match(method, path);
		}
		handleError(err, c) {
			if (err instanceof Error) {
				return this.errorHandler(err, c);
			}
			throw err;
		}
		dispatch(request, executionCtx, env, method) {
			if (method === "HEAD") {
				return (async () =>
					new Response(
						null,
						await this.dispatch(request, executionCtx, env, "GET"),
					))();
			}
			const path = this.getPath(request, { env });
			const matchResult = this.matchRoute(method, path);
			const c = new Context(new HonoRequest(request, path, matchResult), {
				env,
				executionCtx,
				notFoundHandler: this.notFoundHandler,
			});
			if (matchResult[0].length === 1) {
				let res;
				try {
					res = matchResult[0][0][0][0](c, async () => {});
					if (!res) {
						return this.notFoundHandler(c);
					}
				} catch (err) {
					return this.handleError(err, c);
				}
				if (res instanceof Response) return res;
				return (async () => {
					let awaited;
					try {
						awaited = await res;
						if (!awaited) {
							return this.notFoundHandler(c);
						}
					} catch (err) {
						return this.handleError(err, c);
					}
					return awaited;
				})();
			}
			const composed = compose(
				matchResult[0],
				this.errorHandler,
				this.notFoundHandler,
			);
			return (async () => {
				try {
					const context = await composed(c);
					if (!context.finalized) {
						throw new Error(
							"Context is not finalized. You may forget returning Response object or `await next()`",
						);
					}
					return context.res;
				} catch (err) {
					return this.handleError(err, c);
				}
			})();
		}
	},
	"_Hono",
);
var Hono = _Hono;
_basePath = /* @__PURE__ */ new WeakMap();
_path = /* @__PURE__ */ new WeakMap();

// node_modules/.pnpm/hono@3.11.2/node_modules/hono/dist/router/reg-exp-router/node.js
var LABEL_REG_EXP_STR = "[^/]+";
var ONLY_WILDCARD_REG_EXP_STR = ".*";
var TAIL_WILDCARD_REG_EXP_STR = "(?:|/.*)";
var PATH_ERROR = Symbol();
function compareKey(a, b) {
	if (a.length === 1) {
		return b.length === 1 ? (a < b ? -1 : 1) : -1;
	}
	if (b.length === 1) {
		return 1;
	}
	if (a === ONLY_WILDCARD_REG_EXP_STR || a === TAIL_WILDCARD_REG_EXP_STR) {
		return 1;
	} else if (
		b === ONLY_WILDCARD_REG_EXP_STR ||
		b === TAIL_WILDCARD_REG_EXP_STR
	) {
		return -1;
	}
	if (a === LABEL_REG_EXP_STR) {
		return 1;
	} else if (b === LABEL_REG_EXP_STR) {
		return -1;
	}
	return a.length === b.length ? (a < b ? -1 : 1) : b.length - a.length;
}
__name(compareKey, "compareKey");
var Node = /* @__PURE__ */ __name(
	class {
		constructor() {
			this.children = {};
		}
		insert(tokens, index, paramMap, context, pathErrorCheckOnly) {
			if (tokens.length === 0) {
				if (this.index !== void 0) {
					throw PATH_ERROR;
				}
				if (pathErrorCheckOnly) {
					return;
				}
				this.index = index;
				return;
			}
			const [token, ...restTokens] = tokens;
			const pattern =
				token === "*"
					? restTokens.length === 0
						? ["", "", ONLY_WILDCARD_REG_EXP_STR]
						: ["", "", LABEL_REG_EXP_STR]
					: token === "/*"
					  ? ["", "", TAIL_WILDCARD_REG_EXP_STR]
					  : token.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
			let node;
			if (pattern) {
				const name = pattern[1];
				let regexpStr = pattern[2] || LABEL_REG_EXP_STR;
				if (name && pattern[2]) {
					regexpStr = regexpStr.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:");
					if (/\((?!\?:)/.test(regexpStr)) {
						throw PATH_ERROR;
					}
				}
				node = this.children[regexpStr];
				if (!node) {
					if (
						Object.keys(this.children).some(
							(k) =>
								k !== ONLY_WILDCARD_REG_EXP_STR &&
								k !== TAIL_WILDCARD_REG_EXP_STR,
						)
					) {
						throw PATH_ERROR;
					}
					if (pathErrorCheckOnly) {
						return;
					}
					node = this.children[regexpStr] = new Node();
					if (name !== "") {
						node.varIndex = context.varIndex++;
					}
				}
				if (!pathErrorCheckOnly && name !== "") {
					paramMap.push([name, node.varIndex]);
				}
			} else {
				node = this.children[token];
				if (!node) {
					if (
						Object.keys(this.children).some(
							(k) =>
								k.length > 1 &&
								k !== ONLY_WILDCARD_REG_EXP_STR &&
								k !== TAIL_WILDCARD_REG_EXP_STR,
						)
					) {
						throw PATH_ERROR;
					}
					if (pathErrorCheckOnly) {
						return;
					}
					node = this.children[token] = new Node();
				}
			}
			node.insert(restTokens, index, paramMap, context, pathErrorCheckOnly);
		}
		buildRegExpStr() {
			const childKeys = Object.keys(this.children).sort(compareKey);
			const strList = childKeys.map((k) => {
				const c = this.children[k];
				return (
					(typeof c.varIndex === "number" ? `(${k})@${c.varIndex}` : k) +
					c.buildRegExpStr()
				);
			});
			if (typeof this.index === "number") {
				strList.unshift(`#${this.index}`);
			}
			if (strList.length === 0) {
				return "";
			}
			if (strList.length === 1) {
				return strList[0];
			}
			return "(?:" + strList.join("|") + ")";
		}
	},
	"Node",
);

// node_modules/.pnpm/hono@3.11.2/node_modules/hono/dist/router/reg-exp-router/trie.js
var Trie = /* @__PURE__ */ __name(
	class {
		constructor() {
			this.context = { varIndex: 0 };
			this.root = new Node();
		}
		insert(path, index, pathErrorCheckOnly) {
			const paramAssoc = [];
			const groups = [];
			for (let i = 0; ; ) {
				let replaced = false;
				path = path.replace(/\{[^}]+\}/g, (m) => {
					const mark = `@\\${i}`;
					groups[i] = [mark, m];
					i++;
					replaced = true;
					return mark;
				});
				if (!replaced) {
					break;
				}
			}
			const tokens = path.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
			for (let i = groups.length - 1; i >= 0; i--) {
				const [mark] = groups[i];
				for (let j = tokens.length - 1; j >= 0; j--) {
					if (tokens[j].indexOf(mark) !== -1) {
						tokens[j] = tokens[j].replace(mark, groups[i][1]);
						break;
					}
				}
			}
			this.root.insert(
				tokens,
				index,
				paramAssoc,
				this.context,
				pathErrorCheckOnly,
			);
			return paramAssoc;
		}
		buildRegExp() {
			let regexp = this.root.buildRegExpStr();
			if (regexp === "") {
				return [/^$/, [], []];
			}
			let captureIndex = 0;
			const indexReplacementMap = [];
			const paramReplacementMap = [];
			regexp = regexp.replace(
				/#(\d+)|@(\d+)|\.\*\$/g,
				(_, handlerIndex, paramIndex) => {
					if (typeof handlerIndex !== "undefined") {
						indexReplacementMap[++captureIndex] = Number(handlerIndex);
						return "$()";
					}
					if (typeof paramIndex !== "undefined") {
						paramReplacementMap[Number(paramIndex)] = ++captureIndex;
						return "";
					}
					return "";
				},
			);
			return [
				new RegExp(`^${regexp}`),
				indexReplacementMap,
				paramReplacementMap,
			];
		}
	},
	"Trie",
);

// node_modules/.pnpm/hono@3.11.2/node_modules/hono/dist/router/reg-exp-router/router.js
var methodNames = [METHOD_NAME_ALL, ...METHODS].map((method) =>
	method.toUpperCase(),
);
var emptyParam = [];
var nullMatcher = [/^$/, [], {}];
var wildcardRegExpCache = {};
function buildWildcardRegExp(path) {
	return (
		wildcardRegExpCache[path] ??
		(wildcardRegExpCache[path] = new RegExp(
			path === "*" ? "" : `^${path.replace(/\/\*/, "(?:|/.*)")}$`,
		))
	);
}
__name(buildWildcardRegExp, "buildWildcardRegExp");
function clearWildcardRegExpCache() {
	wildcardRegExpCache = {};
}
__name(clearWildcardRegExpCache, "clearWildcardRegExpCache");
function buildMatcherFromPreprocessedRoutes(routes) {
	const trie = new Trie();
	const handlerData = [];
	if (routes.length === 0) {
		return nullMatcher;
	}
	const routesWithStaticPathFlag = routes
		.map((route) => [!/\*|\/:/.test(route[0]), ...route])
		.sort(([isStaticA, pathA], [isStaticB, pathB]) =>
			isStaticA ? 1 : isStaticB ? -1 : pathA.length - pathB.length,
		);
	const staticMap = {};
	for (let i = 0, j = -1, len = routesWithStaticPathFlag.length; i < len; i++) {
		const [pathErrorCheckOnly, path, handlers] = routesWithStaticPathFlag[i];
		if (pathErrorCheckOnly) {
			staticMap[path] = [handlers.map(([h]) => [h, {}]), emptyParam];
		} else {
			j++;
		}
		let paramAssoc;
		try {
			paramAssoc = trie.insert(path, j, pathErrorCheckOnly);
		} catch (e) {
			throw e === PATH_ERROR ? new UnsupportedPathError(path) : e;
		}
		if (pathErrorCheckOnly) {
			continue;
		}
		handlerData[j] = handlers.map(([h, paramCount]) => {
			const paramIndexMap = {};
			paramCount -= 1;
			for (; paramCount >= 0; paramCount--) {
				const [key, value] = paramAssoc[paramCount];
				paramIndexMap[key] = value;
			}
			return [h, paramIndexMap];
		});
	}
	const [regexp, indexReplacementMap, paramReplacementMap] = trie.buildRegExp();
	for (let i = 0, len = handlerData.length; i < len; i++) {
		for (let j = 0, len2 = handlerData[i].length; j < len2; j++) {
			const map = handlerData[i][j]?.[1];
			if (!map) {
				continue;
			}
			const keys = Object.keys(map);
			for (let k = 0, len3 = keys.length; k < len3; k++) {
				map[keys[k]] = paramReplacementMap[map[keys[k]]];
			}
		}
	}
	const handlerMap = [];
	for (const i in indexReplacementMap) {
		handlerMap[i] = handlerData[indexReplacementMap[i]];
	}
	return [regexp, handlerMap, staticMap];
}
__name(
	buildMatcherFromPreprocessedRoutes,
	"buildMatcherFromPreprocessedRoutes",
);
function findMiddleware(middleware, path) {
	if (!middleware) {
		return void 0;
	}
	for (const k of Object.keys(middleware).sort((a, b) => b.length - a.length)) {
		if (buildWildcardRegExp(k).test(path)) {
			return [...middleware[k]];
		}
	}
	return void 0;
}
__name(findMiddleware, "findMiddleware");
var RegExpRouter = /* @__PURE__ */ __name(
	class {
		constructor() {
			this.name = "RegExpRouter";
			this.middleware = { [METHOD_NAME_ALL]: {} };
			this.routes = { [METHOD_NAME_ALL]: {} };
		}
		add(method, path, handler2) {
			var _a;
			const { middleware, routes } = this;
			if (!middleware || !routes) {
				throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
			}
			if (methodNames.indexOf(method) === -1) methodNames.push(method);
			if (!middleware[method]) {
				[middleware, routes].forEach((handlerMap) => {
					handlerMap[method] = {};
					Object.keys(handlerMap[METHOD_NAME_ALL]).forEach((p) => {
						handlerMap[method][p] = [...handlerMap[METHOD_NAME_ALL][p]];
					});
				});
			}
			if (path === "/*") {
				path = "*";
			}
			const paramCount = (path.match(/\/:/g) || []).length;
			if (/\*$/.test(path)) {
				const re = buildWildcardRegExp(path);
				if (method === METHOD_NAME_ALL) {
					Object.keys(middleware).forEach((m) => {
						var _a2;
						(_a2 = middleware[m])[path] ||
							(_a2[path] =
								findMiddleware(middleware[m], path) ||
								findMiddleware(middleware[METHOD_NAME_ALL], path) ||
								[]);
					});
				} else {
					(_a = middleware[method])[path] ||
						(_a[path] =
							findMiddleware(middleware[method], path) ||
							findMiddleware(middleware[METHOD_NAME_ALL], path) ||
							[]);
				}
				Object.keys(middleware).forEach((m) => {
					if (method === METHOD_NAME_ALL || method === m) {
						Object.keys(middleware[m]).forEach((p) => {
							re.test(p) && middleware[m][p].push([handler2, paramCount]);
						});
					}
				});
				Object.keys(routes).forEach((m) => {
					if (method === METHOD_NAME_ALL || method === m) {
						Object.keys(routes[m]).forEach(
							(p) => re.test(p) && routes[m][p].push([handler2, paramCount]),
						);
					}
				});
				return;
			}
			const paths = checkOptionalParameter(path) || [path];
			for (let i = 0, len = paths.length; i < len; i++) {
				const path2 = paths[i];
				Object.keys(routes).forEach((m) => {
					var _a2;
					if (method === METHOD_NAME_ALL || method === m) {
						(_a2 = routes[m])[path2] ||
							(_a2[path2] = [
								...(findMiddleware(middleware[m], path2) ||
									findMiddleware(middleware[METHOD_NAME_ALL], path2) ||
									[]),
							]);
						routes[m][path2].push([
							handler2,
							paths.length === 2 && i === 0 ? paramCount - 1 : paramCount,
						]);
					}
				});
			}
		}
		match(method, path) {
			clearWildcardRegExpCache();
			const matchers = this.buildAllMatchers();
			this.match = (method2, path2) => {
				const matcher = matchers[method2];
				const staticMatch = matcher[2][path2];
				if (staticMatch) {
					return staticMatch;
				}
				const match = path2.match(matcher[0]);
				if (!match) {
					return [[], emptyParam];
				}
				const index = match.indexOf("", 1);
				return [matcher[1][index], match];
			};
			return this.match(method, path);
		}
		buildAllMatchers() {
			const matchers = {};
			methodNames.forEach((method) => {
				matchers[method] =
					this.buildMatcher(method) || matchers[METHOD_NAME_ALL];
			});
			this.middleware = this.routes = void 0;
			return matchers;
		}
		buildMatcher(method) {
			const routes = [];
			let hasOwnRoute = method === METHOD_NAME_ALL;
			[this.middleware, this.routes].forEach((r) => {
				const ownRoute = r[method]
					? Object.keys(r[method]).map((path) => [path, r[method][path]])
					: [];
				if (ownRoute.length !== 0) {
					hasOwnRoute || (hasOwnRoute = true);
					routes.push(...ownRoute);
				} else if (method !== METHOD_NAME_ALL) {
					routes.push(
						...Object.keys(r[METHOD_NAME_ALL]).map((path) => [
							path,
							r[METHOD_NAME_ALL][path],
						]),
					);
				}
			});
			if (!hasOwnRoute) {
				return null;
			} else {
				return buildMatcherFromPreprocessedRoutes(routes);
			}
		}
	},
	"RegExpRouter",
);

// node_modules/.pnpm/hono@3.11.2/node_modules/hono/dist/router/smart-router/router.js
var SmartRouter = /* @__PURE__ */ __name(
	class {
		constructor(init) {
			this.name = "SmartRouter";
			this.routers = [];
			this.routes = [];
			Object.assign(this, init);
		}
		add(method, path, handler2) {
			if (!this.routes) {
				throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
			}
			this.routes.push([method, path, handler2]);
		}
		match(method, path) {
			if (!this.routes) {
				throw new Error("Fatal error");
			}
			const { routers, routes } = this;
			const len = routers.length;
			let i = 0;
			let res;
			for (; i < len; i++) {
				const router = routers[i];
				try {
					routes.forEach((args) => {
						router.add(...args);
					});
					res = router.match(method, path);
				} catch (e) {
					if (e instanceof UnsupportedPathError) {
						continue;
					}
					throw e;
				}
				this.match = router.match.bind(router);
				this.routers = [router];
				this.routes = void 0;
				break;
			}
			if (i === len) {
				throw new Error("Fatal error");
			}
			this.name = `SmartRouter + ${this.activeRouter.name}`;
			return res;
		}
		get activeRouter() {
			if (this.routes || this.routers.length !== 1) {
				throw new Error("No active router has been determined yet.");
			}
			return this.routers[0];
		}
	},
	"SmartRouter",
);

// node_modules/.pnpm/hono@3.11.2/node_modules/hono/dist/router/trie-router/node.js
var Node2 = /* @__PURE__ */ __name(
	class {
		constructor(method, handler2, children) {
			this.order = 0;
			this.params = {};
			this.children = children || {};
			this.methods = [];
			this.name = "";
			if (method && handler2) {
				const m = {};
				m[method] = {
					handler: handler2,
					params: {},
					possibleKeys: [],
					score: 0,
					name: this.name,
				};
				this.methods = [m];
			}
			this.patterns = [];
		}
		insert(method, path, handler2) {
			this.name = `${method} ${path}`;
			this.order = ++this.order;
			let curNode = this;
			const parts = splitRoutingPath(path);
			const possibleKeys = [];
			const parentPatterns = [];
			for (let i = 0, len = parts.length; i < len; i++) {
				const p = parts[i];
				if (Object.keys(curNode.children).includes(p)) {
					parentPatterns.push(...curNode.patterns);
					curNode = curNode.children[p];
					const pattern2 = getPattern(p);
					if (pattern2) possibleKeys.push(pattern2[1]);
					continue;
				}
				curNode.children[p] = new Node2();
				const pattern = getPattern(p);
				if (pattern) {
					curNode.patterns.push(pattern);
					parentPatterns.push(...curNode.patterns);
					possibleKeys.push(pattern[1]);
				}
				parentPatterns.push(...curNode.patterns);
				curNode = curNode.children[p];
			}
			if (!curNode.methods.length) {
				curNode.methods = [];
			}
			const m = {};
			const handlerSet = {
				handler: handler2,
				params: {},
				possibleKeys,
				name: this.name,
				score: this.order,
			};
			m[method] = handlerSet;
			curNode.methods.push(m);
			return curNode;
		}
		gHSets(node, method, params) {
			const handlerSets = [];
			for (let i = 0, len = node.methods.length; i < len; i++) {
				const m = node.methods[i];
				const handlerSet = m[method] || m[METHOD_NAME_ALL];
				if (handlerSet !== void 0) {
					handlerSet.possibleKeys.map((key) => {
						handlerSet.params[key] = params[key];
					});
					handlerSets.push(handlerSet);
				}
			}
			return handlerSets;
		}
		search(method, path) {
			const handlerSets = [];
			const params = {};
			this.params = {};
			const curNode = this;
			let curNodes = [curNode];
			const parts = splitPath(path);
			for (let i = 0, len = parts.length; i < len; i++) {
				const part = parts[i];
				const isLast = i === len - 1;
				const tempNodes = [];
				for (let j = 0, len2 = curNodes.length; j < len2; j++) {
					const node = curNodes[j];
					const nextNode = node.children[part];
					if (nextNode) {
						if (isLast === true) {
							if (nextNode.children["*"]) {
								handlerSets.push(
									...this.gHSets(nextNode.children["*"], method, {
										...params,
										...node.params,
									}),
								);
							}
							handlerSets.push(
								...this.gHSets(nextNode, method, { ...params, ...node.params }),
							);
						} else {
							tempNodes.push(nextNode);
						}
					}
					for (let k = 0, len3 = node.patterns.length; k < len3; k++) {
						const pattern = node.patterns[k];
						if (pattern === "*") {
							const astNode = node.children["*"];
							if (astNode) {
								handlerSets.push(
									...this.gHSets(astNode, method, {
										...params,
										...node.params,
									}),
								);
								tempNodes.push(astNode);
							}
							continue;
						}
						if (part === "") continue;
						const [key, name, matcher] = pattern;
						const child = node.children[key];
						const restPathString = parts.slice(i).join("/");
						if (matcher instanceof RegExp && matcher.test(restPathString)) {
							params[name] = restPathString;
							handlerSets.push(
								...this.gHSets(child, method, { ...params, ...node.params }),
							);
							continue;
						}
						if (
							matcher === true ||
							(matcher instanceof RegExp && matcher.test(part))
						) {
							if (typeof key === "string") {
								params[name] = part;
								if (isLast === true) {
									handlerSets.push(
										...this.gHSets(child, method, {
											...params,
											...node.params,
										}),
									);
									if (child.children["*"]) {
										handlerSets.push(
											...this.gHSets(child.children["*"], method, {
												...params,
												...node.params,
											}),
										);
									}
								} else {
									child.params = { ...params };
									tempNodes.push(child);
								}
							}
						}
					}
				}
				curNodes = tempNodes;
			}
			const results = handlerSets.sort((a, b) => {
				return a.score - b.score;
			});
			return [
				results.map(({ handler: handler2, params: params2 }) => [
					handler2,
					params2,
				]),
			];
		}
	},
	"Node",
);

// node_modules/.pnpm/hono@3.11.2/node_modules/hono/dist/router/trie-router/router.js
var TrieRouter = /* @__PURE__ */ __name(
	class {
		constructor() {
			this.name = "TrieRouter";
			this.node = new Node2();
		}
		add(method, path, handler2) {
			const results = checkOptionalParameter(path);
			if (results) {
				for (const p of results) {
					this.node.insert(method, p, handler2);
				}
				return;
			}
			this.node.insert(method, path, handler2);
		}
		match(method, path) {
			return this.node.search(method, path);
		}
	},
	"TrieRouter",
);

// node_modules/.pnpm/hono@3.11.2/node_modules/hono/dist/hono.js
var Hono2 = /* @__PURE__ */ __name(
	class extends Hono {
		constructor(options = {}) {
			super(options);
			this.router =
				options.router ??
				new SmartRouter({
					routers: [new RegExpRouter(), new TrieRouter()],
				});
		}
	},
	"Hono",
);

// infra/routing/server.ts
var app = new Hono2();

// node_modules/.pnpm/@freshgum+typedi@0.7.0/node_modules/@freshgum/typedi/build/esm5/constants/minification/native-error.const.mjs
var NativeError = Error;

// node_modules/.pnpm/@freshgum+typedi@0.7.0/node_modules/@freshgum/typedi/build/esm5/constants/minification/strings.const.mjs
var __A_CONTAINER_WITH_THE_SPECIFIED_NAME =
	"A container with the specified name";
var __NO_CONTAINER_IS_REGISTERED_WITH_THE_GIVEN_ID =
	"No container is registered with the given ID.";
var __CANNOT_USE_CONTAINER_AFTER_IT_HAS_BEEN_DISPOSED =
	"Cannot use container after it has been disposed.";

// node_modules/.pnpm/@freshgum+typedi@0.7.0/node_modules/@freshgum/typedi/build/esm5/error/container-registry-error.error.mjs
var ContainerRegistryError = class extends NativeError {
	constructor(message) {
		super(message);
		this.name = "ContainerRegistryError";
	}
};
__name(ContainerRegistryError, "ContainerRegistryError");

// node_modules/.pnpm/@freshgum+typedi@0.7.0/node_modules/@freshgum/typedi/build/esm5/container-registry.class.mjs
var ContainerRegistry = class {
	/**
	 * Registers the given container instance or throws an error.
	 *
	 * _Note: This function is auto-called when a Container instance is created,
	 * it doesn't need to be called manually!_
	 *
	 * @param container the container to add to the registry
	 *
	 * @throws {@link ContainerRegistryError}
	 * This exception is thrown in the following scenarios:
	 *   - If the item being registered is not a container.
	 *   - A container with the same ID already exists in the registry.
	 */
	static registerContainer(container) {
		if (container instanceof ContainerInstance === false) {
			throw new ContainerRegistryError(
				"Only ContainerInstance instances can be registered.",
			);
		}
		if (ContainerRegistry.containerMap.has(container.id)) {
			throw new ContainerRegistryError(
				"Cannot register container with same ID.",
			);
		}
		ContainerRegistry.containerMap.set(container.id, container);
	}
	/**
	 * Returns true if a container exists with the given ID or false otherwise.
	 *
	 * @param container the ID of the container
	 *
	 * @returns Whether a container with the specified ID could be
	 * found in the registry.
	 */
	static hasContainer(id) {
		return ContainerRegistry.containerMap.has(id);
	}
	/**
	 * Returns the container for requested ID or throws an error if no container
	 * is registered with the given ID.
	 *
	 * @param container the ID of the container
	 *
	 * @throws {@link ContainerRegistryError}
	 * This exception is thrown when a container with
	 * the given ID does not exist in the registry.
	 */
	static getContainer(id) {
		const registeredContainer = ContainerRegistry.containerMap.get(id);
		if (registeredContainer === void 0) {
			throw new ContainerRegistryError(
				__NO_CONTAINER_IS_REGISTERED_WITH_THE_GIVEN_ID,
			);
		}
		return registeredContainer;
	}
	/**
	 * Removes the given container from the registry and disposes all services
	 * registered only in this container.
	 *
	 * This function throws an error if no
	 *   - container exists with the given ID
	 *   - any of the registered services threw an error during it's disposal
	 *
	 * @param container the container to remove from the registry
	 *
	 * @throws {@link ContainerRegistryError}
	 * This exception is thrown when a container with
	 * the specified ID does not exist in the registry.
	 *
	 * @throws Error
	 * This error may be thrown as a result of disposing the container.
	 * It can be caught asynchronously.
	 */
	static async removeContainer(container) {
		const registeredContainer = ContainerRegistry.containerMap.get(
			container.id,
		);
		if (registeredContainer === void 0) {
			throw new ContainerRegistryError(
				__NO_CONTAINER_IS_REGISTERED_WITH_THE_GIVEN_ID,
			);
		}
		ContainerRegistry.containerMap.delete(container.id);
		if (!registeredContainer.disposed) {
			await registeredContainer.dispose();
		}
	}
};
__name(ContainerRegistry, "ContainerRegistry");
ContainerRegistry.containerMap = /* @__PURE__ */ new Map();

// node_modules/.pnpm/@freshgum+typedi@0.7.0/node_modules/@freshgum/typedi/build/esm5/token.class.mjs
var Token = class {
	/**
	 * @param name Token name, optional and only used for debugging purposes.
	 */
	constructor(name) {
		this.name = name;
	}
};
__name(Token, "Token");

// node_modules/.pnpm/@freshgum+typedi@0.7.0/node_modules/@freshgum/typedi/build/esm5/utils/normalize-identifier.util.mjs
function normalizeIdentifier(identifier) {
	let name;
	return typeof identifier === "string"
		? identifier
		: identifier instanceof Token
		  ? `Token<${identifier.name ?? "UNSET_NAME"}>`
		  : ((name = identifier?.name ?? identifier.prototype?.name) &&
					`MaybeConstructable<${name}>`) ??
			  "<UNKNOWN_IDENTIFIER>";
}
__name(normalizeIdentifier, "normalizeIdentifier");

// node_modules/.pnpm/@freshgum+typedi@0.7.0/node_modules/@freshgum/typedi/build/esm5/error/service-not-found.error.mjs
var ServiceNotFoundError = class extends NativeError {
	constructor(identifier) {
		super();
		this.name = "ServiceNotFoundError";
		this.normalizedIdentifier = normalizeIdentifier(identifier);
		this.message = `Service with "${this.normalizedIdentifier}" identifier was not found in the container. Register it before usage via "Container.set" or the "@Service()" decorator.`;
	}
};
__name(ServiceNotFoundError, "ServiceNotFoundError");

// node_modules/.pnpm/@freshgum+typedi@0.7.0/node_modules/@freshgum/typedi/build/esm5/error/cannot-instantiate-value.error.mjs
var CannotInstantiateValueError = class extends NativeError {
	constructor(identifier, footer = "") {
		super();
		this.footer = footer;
		this.name = "CannotInstantiateValueError";
		this.normalizedIdentifier = normalizeIdentifier(identifier);
		this.message =
			`Cannot instantiate the requested value for the "${this.normalizedIdentifier}" identifier. The related metadata doesn't contain a factory or a type to instantiate. ` +
			this.footer;
	}
};
__name(CannotInstantiateValueError, "CannotInstantiateValueError");

// node_modules/.pnpm/@freshgum+typedi@0.7.0/node_modules/@freshgum/typedi/build/esm5/constants/empty.const.mjs
var EMPTY_VALUE = Symbol("EMPTY_VALUE");

// node_modules/.pnpm/@freshgum+typedi@0.7.0/node_modules/@freshgum/typedi/build/esm5/constants/builtins.const.mjs
var BUILT_INS = [String, Object, Boolean, Symbol, Array, Number];

// node_modules/.pnpm/@freshgum+typedi@0.7.0/node_modules/@freshgum/typedi/build/esm5/error/cannot-instantiate-builtin-error.mjs
var CannotInstantiateBuiltInError = class extends CannotInstantiateValueError {
	constructor(identifier, footer) {
		super(identifier, footer);
		this.message =
			super.message +
			` If your service requires built-in or unresolvable types, please use a factory.`;
	}
};
__name(CannotInstantiateBuiltInError, "CannotInstantiateBuiltInError");

// node_modules/.pnpm/@freshgum+typedi@0.7.0/node_modules/@freshgum/typedi/build/esm5/constants/service-defaults.const.mjs
var SERVICE_METADATA_DEFAULTS = {
	multiple: false,
	eager: false,
	scope: "container",
	value: EMPTY_VALUE,
	factory: void 0,
};

// node_modules/.pnpm/@freshgum+typedi@0.7.0/node_modules/@freshgum/typedi/build/esm5/constants/minification/native-null.const.mjs
var NativeNull = null;

// node_modules/.pnpm/@freshgum+typedi@0.7.0/node_modules/@freshgum/typedi/build/esm5/utils/is-array.util.mjs
var { isArray } = Array;

// node_modules/.pnpm/@freshgum+typedi@0.7.0/node_modules/@freshgum/typedi/build/esm5/constants/type-wrapper.const.mjs
var TYPE_WRAPPER = Symbol("type-wrapper");

// node_modules/.pnpm/@freshgum+typedi@0.7.0/node_modules/@freshgum/typedi/build/esm5/utils/is-type-wrapper.util.mjs
function isTypeWrapper(x) {
	return x[TYPE_WRAPPER] === 0;
}
__name(isTypeWrapper, "isTypeWrapper");

// node_modules/.pnpm/@freshgum+typedi@0.7.0/node_modules/@freshgum/typedi/build/esm5/utils/resolve-to-type-wrapper.util.mjs
function resolveToTypeWrapper(typeOrIdentifier) {
	let typeWrapper;
	const inputType = typeof typeOrIdentifier;
	if (
		typeOrIdentifier &&
		(inputType === "string" ||
			typeOrIdentifier instanceof Token ||
			inputType === "function")
	) {
		typeWrapper = {
			[TYPE_WRAPPER]: 0,
			/** We have to use 'as any' casts here due to moving the "typeof" checks to a constant. */
			eagerType: typeOrIdentifier,
			lazyType: () => typeOrIdentifier,
		};
	} else if (inputType === "object" && isTypeWrapper(typeOrIdentifier)) {
		return typeOrIdentifier;
	}
	return typeWrapper;
}
__name(resolveToTypeWrapper, "resolveToTypeWrapper");

// node_modules/.pnpm/@freshgum+typedi@0.7.0/node_modules/@freshgum/typedi/build/esm5/utils/wrap-resolvable-dependency.mjs
function wrapDependencyAsResolvable(dependency, serviceOptions, index) {
	let constraints;
	let typeWrapper;
	if (isArray(dependency)) {
		const [id, options] = dependency;
		if (id == NativeNull || options == NativeNull) {
			throw NativeError("The dependency pair was not instantiated correctly.");
		}
		if (typeof options === "number") {
			constraints = options;
		}
		typeWrapper = resolveToTypeWrapper(id);
	} else {
		typeWrapper = resolveToTypeWrapper(dependency);
	}
	const { eagerType } = typeWrapper;
	if (eagerType !== NativeNull) {
		const type = typeof typeWrapper;
		const errorFooter = `Occurred from dependency ${index} of service ${serviceOptions.type?.name}.`;
		if (type !== "function" && type !== "object" && type !== "string") {
			throw new CannotInstantiateValueError(eagerType, errorFooter);
		} else if (
			serviceOptions.factory == NativeNull &&
			BUILT_INS.includes(eagerType)
		) {
			throw new CannotInstantiateBuiltInError(
				eagerType?.name ?? eagerType,
				errorFooter,
			);
		}
	}
	return {
		constraints,
		typeWrapper,
	};
}
__name(wrapDependencyAsResolvable, "wrapDependencyAsResolvable");

// node_modules/.pnpm/@freshgum+typedi@0.7.0/node_modules/@freshgum/typedi/build/esm5/constants/host-container.const.mjs
var HOST_CONTAINER = new Token("Host Container");

// node_modules/.pnpm/@freshgum+typedi@0.7.0/node_modules/@freshgum/typedi/build/esm5/visitor-collection.class.mjs
var VisitorCollection = class {
	constructor() {
		this.disposed = false;
		this.visitors = [];
		this.anyVisitorsPresent = false;
	}
	/**
	 * A flag which states whether any visitors should be notified.
	 * If the collection has been disposed or no visitors are present,
	 * this evaluates to `false`.
	 */
	get notifyVisitors() {
		return !this.disposed && this.anyVisitorsPresent;
	}
	/**
	 * Iterate the list of visitors, excluding any which have been disposed.
	 * Does not perform any iteration if no visitors are present.
	 *
	 * @param callback A function to call for each visitor in the collection.
	 */
	forEachVisitor(callback) {
		if (this.notifyVisitors) {
			this.visitors.forEach((visitor) => {
				if (visitor.disposed) {
					this.removeVisitorFromCollection(visitor);
					return;
				}
				callback(visitor);
			});
		}
	}
	/**
	 * Notify all attached visitors of a newly-created child container.
	 * @internal
	 *
	 * @see {@link ContainerTreeVisitor.visitChildContainer}
	 */
	notifyChildContainerVisited(child) {
		this.forEachVisitor((visitor) => visitor.visitChildContainer?.(child));
	}
	/**
	 * Notify all attached visitors of a newly-created orphaned container.
	 * @internal
	 *
	 * @see {@link ContainerTreeVisitor.visitOrphanedContainer}
	 */
	notifyOrphanedContainerVisited(container) {
		this.forEachVisitor((visitor) =>
			visitor.visitOrphanedContainer?.(container),
		);
	}
	/**
	 * Notify all attached visitors of a newly-created service.
	 * @internal
	 *
	 * @see {@link ContainerTreeVisitor.visitNewService}
	 */
	notifyNewServiceVisited(serviceOptions) {
		this.forEachVisitor((visitor) => visitor.visitNewService?.(serviceOptions));
	}
	/**
	 * Notify all attached visitors of a retrieval.
	 * @internal
	 *
	 * @see {@link ContainerTreeVisitor.visitRetrieval}
	 */
	notifyRetrievalVisited(identifier, options) {
		this.forEachVisitor((visitor) =>
			visitor.visitRetrieval?.(identifier, options),
		);
	}
	/**
	 * Add a visitor to the collection.
	 * @experimental
	 *
	 * @param visitor The visitor to append to the collection.
	 * @param container The container to initialise the container on.
	 */
	addVisitorToCollection(visitor, container) {
		if (this.visitors.includes(visitor)) {
			return false;
		}
		if ("visitOrphanedContainer" in visitor && container !== defaultContainer) {
			VisitorCollection.forwardOrphanedContainerEvents(visitor);
		}
		this.visitors.push(visitor);
		if (!this.anyVisitorsPresent) {
			this.anyVisitorsPresent = true;
		}
		let isAllowedToAttachVisitor;
		try {
			isAllowedToAttachVisitor = visitor.visitContainer?.(container);
		} finally {
			if (!isAllowedToAttachVisitor) {
				this.removeVisitorFromCollection(visitor);
			}
		}
		return isAllowedToAttachVisitor;
	}
	/**
	 * Remove a visitor from the collection,
	 * if it was already present.
	 * @experimental
	 *
	 * @param visitor The visitor to remove from the collection.
	 */
	removeVisitorFromCollection(visitor) {
		const indexOfVisitor = this.visitors.indexOf(visitor);
		if (indexOfVisitor === -1) {
			return false;
		}
		this.visitors.splice(indexOfVisitor, 1);
		if (this.visitors.length === 0) {
			this.anyVisitorsPresent = false;
		}
		return true;
	}
	/**
	 * Forward any orphaned container events to the visitor
	 * through a proxy visitor attached to the default container.
	 *
	 * This is used when a visitor implements the {@link ContainerTreeVisitor.visitOrphanedContainer}
	 * handler, but the visitor was attached to a non-default container instance.
	 */
	static forwardOrphanedContainerEvents(upstreamVisitor) {
		const proxyVisitor = {
			get disposed() {
				return upstreamVisitor.disposed;
			},
			dispose() {
				this.disposed = true;
			},
			visitOrphanedContainer(container) {
				if (!this.disposed) {
					upstreamVisitor.visitOrphanedContainer(container);
				}
			},
			visitContainer(container) {
				return container === defaultContainer;
			},
		};
		return defaultContainer.acceptTreeVisitor(proxyVisitor);
	}
	async dispose() {
		if (this.disposed) {
			return;
		}
		this.disposed = true;
		await Promise.all(this.visitors.map((visitor) => visitor.dispose()));
	}
};
__name(VisitorCollection, "VisitorCollection");

// node_modules/.pnpm/@freshgum+typedi@0.7.0/node_modules/@freshgum/typedi/build/esm5/constants/virtual-ids.const.mjs
var VIRTUAL_IDENTIFIERS = [
	/**
	 * Provide compatibility with the `HostContainer()` API.
	 */
	HOST_CONTAINER,
];

// node_modules/.pnpm/@freshgum+typedi@0.7.0/node_modules/@freshgum/typedi/build/esm5/container-instance.class.mjs
var defaultContainer;
var ContainerInstance = class {
	/**
	 * Create a {@link ContainerInstance}.
	 *
	 * @param id The ID of the container to create.
	 * @param parent The parent of the container to create.
	 * The parent is used for resolving identifiers which are
	 * not present in this container.
	 */
	constructor(id, parent) {
		this.parent = parent;
		this.metadataMap = /* @__PURE__ */ new Map();
		this.multiServiceIds = /* @__PURE__ */ new Map();
		this.disposed = false;
		this.visitor = new VisitorCollection();
		this.isRetrievingPrivateToken = false;
		this.id = id;
	}
	/**
	 * Checks if the service with given name or type is registered service container.
	 * Optionally, parameters can be passed in case if instance is initialized in the container for the first time.
	 *
	 * If recursive mode is enabled, the symbol is not available locally, and we have a parent,
	 * we tell the parent to search its tree recursively too.
	 * If the container tree is substantial, this operation may affect performance.
	 *
	 * @param identifier The identifier of the service to look up.
	 * @param [recursive=true] Whether the operation will be recursive.
	 *
	 * @returns Whether the identifier is present in the current container, or its parent.
	 *
	 * @throws Error
	 * This exception is thrown if the container has been disposed.
	 */
	has(identifier, recursive = true) {
		this.throwIfDisposed();
		if (VIRTUAL_IDENTIFIERS.includes(identifier)) {
			return true;
		}
		const location = this.getIdentifierLocation(identifier, recursive);
		if (recursive && location === 1) {
			return true;
		}
		return location === 0;
	}
	/**
	 * Return the location of the given identifier.
	 * If recursive mode is enabled, the symbol is not available locally, and we have a parent,
	 * we tell the parent to search its tree recursively too.
	 * If the container tree is substantial, this operation may affect performance.
	 *
	 * @param identifier The identifier of the service to look up.
	 *
	 * @returns A {@link ServiceIdentifierLocation}.
	 *  - If the identifier cannot be found, {@link ServiceIdentifierLocation.None | None}.
	 *  - If the identifier is found locally, {@link ServiceIdentifierLocation.Local | Local}.
	 *  - If the identifier is found upstream, {@link ServiceIdentifierLocation.Parent | Parent}.
	 *
	 * @throws Error
	 * This exception is thrown if the container has been disposed.
	 */
	getIdentifierLocation(identifier, recursive = true) {
		this.throwIfDisposed();
		if (
			this.metadataMap.has(identifier) ||
			this.multiServiceIds.has(identifier)
		) {
			return 0;
		}
		if (recursive && this.parent?.has(identifier, true)) {
			return 1;
		}
		return 2;
	}
	/**
	 * Get the value for the identifier in the current container.
	 * If the identifier cannot be resolved locally, the parent tree
	 * (if present) is recursively searched until a match is found
	 * (or the tree is exhausted).
	 *
	 * @param identifier The identifier to get the value of.
	 *
	 * @returns The value of the identifier in the current scope.
	 *
	 * @throws ServiceNotFoundError
	 * This exception is thrown if the identifier cannot be found in the tree.
	 *
	 * @throws Error
	 * This exception is thrown if the container has been disposed.
	 */
	get(identifier, recursive) {
		const response = this.getOrDefault(identifier, EMPTY_VALUE, recursive);
		if (response === EMPTY_VALUE) {
			throw new ServiceNotFoundError(identifier);
		}
		return response;
	}
	/**
	 * Resolve the metadata for the given identifier.  Returns null if no metadata could be found.
	 *
	 * @param identifier The identifier to resolve metadata for.
	 * @param recursive Whether the lookup operation is recursive.
	 *
	 * @returns
	 * If the identifier is found, a tuple is returned consisting of the following:
	 *   1. The metadata for the given identifier, if found.
	 *   2. The location from where the metadata was returned.
	 *   {@link ServiceIdentifierLocation.Parent} is returned if the identifier was found upstream.
	 *
	 * If an identifier cannot be found, `null` is returned.
	 *
	 * @throws Error
	 * This exception is thrown if the container has been disposed.
	 */
	resolveMetadata(identifier, recursive) {
		this.throwIfDisposed();
		const location = this.getIdentifierLocation(identifier, recursive);
		switch (location) {
			case 2:
				return NativeNull;
			case 0:
				return [this.metadataMap.get(identifier), location];
			case 1:
				const possibleResolution = this.parent?.resolveMetadata(
					identifier,
					true,
				);
				return possibleResolution
					? [
							possibleResolution[0],
							1,
							/* ServiceIdentifierLocation.Parent */
					  ]
					: NativeNull;
		}
	}
	/**
	 * Retrieves the service with given name or type from the service container.
	 * Optionally, parameters can be passed in case if instance is initialized in the container for the first time.
	 *
	 * @param identifier The identifier to get the value of.
	 *
	 * @returns The resolved value for the given metadata, or `null` if it could not be found.
	 *
	 * @throws Error
	 * This exception is thrown if the container has been disposed.
	 */
	getOrNull(identifier, recursive = true) {
		return this.getOrDefault(identifier, NativeNull, recursive);
	}
	/**
	 * Retrieves the service with given name or type from the service container.
	 * If the identifier cannot be found, return the provided default value.
	 *
	 * @typeParam U The type of the provided default value.
	 *
	 * @see {@link ContainerInstance.getOrNull}
	 *
	 * @param identifier The identifier to get the value of.
	 *
	 * @returns The resolved value for the given metadata, or the default value if it could not be found.
	 *
	 * @throws Error
	 * This exception is thrown if the container has been disposed.
	 */
	getOrDefault(identifier, defaultValue, recursive = true) {
		this.throwIfDisposed();
		const notifyVisitors = !this.isRetrievingPrivateToken;
		const partialVisitRetrievalOptions = { recursive, many: false };
		if (identifier === HOST_CONTAINER) {
			if (notifyVisitors) {
				this.visitor.notifyRetrievalVisited(identifier, {
					...partialVisitRetrievalOptions,
					location: 0,
				});
			}
			return this;
		}
		const maybeResolvedMetadata = this.resolveMetadata(identifier, recursive);
		if (maybeResolvedMetadata === NativeNull) {
			if (notifyVisitors) {
				this.visitor.notifyRetrievalVisited(identifier, {
					...partialVisitRetrievalOptions,
					location: 2,
				});
			}
			return defaultValue;
		}
		const [baseMetadata, location] = maybeResolvedMetadata;
		const isUpstreamMetadata = location === 1;
		if (isUpstreamMetadata) {
			if (baseMetadata.scope === "singleton") {
				return defaultContainer.getOrDefault(
					identifier,
					defaultValue,
					recursive,
				);
			}
			let value;
			const isReconstructable =
				baseMetadata.factory != NativeNull || baseMetadata.type != NativeNull;
			if (!isReconstructable) {
				value = baseMetadata.value;
			} else {
				value = EMPTY_VALUE;
			}
			const newServiceMetadata = {
				...baseMetadata,
				/**
				 * If the service is a singleton, we'll import its value directly into this container.
				 * Otherwise, we set the value to the well-known placeholder.
				 */
				value,
			};
			const newServiceID = this.set(newServiceMetadata, [
				...baseMetadata.dependencies,
			]);
			this.isRetrievingPrivateToken = true;
			const resolvedValue = this.getOrDefault(
				newServiceID,
				defaultValue,
				recursive,
			);
			this.isRetrievingPrivateToken = false;
			this.visitor.notifyRetrievalVisited(identifier, {
				...partialVisitRetrievalOptions,
				location: 1,
			});
			return resolvedValue;
		}
		if (notifyVisitors) {
			this.visitor.notifyRetrievalVisited(identifier, {
				...partialVisitRetrievalOptions,
				location,
			});
		}
		let metadata = baseMetadata;
		if (baseMetadata?.scope === "singleton") {
			metadata = defaultContainer.metadataMap.get(identifier);
		}
		if (metadata?.multiple) {
			throw NativeError(
				`Cannot resolve multiple values for ${identifier} service!`,
			);
		}
		if (metadata) {
			return this.getServiceValue(metadata);
		}
		return defaultValue;
	}
	/**
	 * Gets all instances registered in the container of the given service identifier.
	 * Used when service are defined with the `{ multiple: true }` option.
	 *
	 * @example
	 * ```ts
	 * Container.set({ id: 'key', value: 1, multiple: true });
	 * Container.set({ id: 'key', value: 2, multiple: true });
	 * Container.set({ id: 'key', value: 3, multiple: true });
	 *
	 * const [one, two, three] = Container.getMany('key');
	 * ```
	 *
	 * @param identifier The identifier to resolve.
	 *
	 * @returns An array containing the service instances for the given
	 * identifier.
	 *
	 * @throws ServiceNotFoundError
	 * This exception is thrown if a value could not be found for the given identifier.
	 *
	 * @throws Error
	 * This exception is thrown if the container has been disposed.
	 */
	getMany(identifier, recursive) {
		const response = this.getManyOrDefault(identifier, EMPTY_VALUE, recursive);
		if (response === EMPTY_VALUE) {
			throw new ServiceNotFoundError(identifier);
		}
		return response;
	}
	/**
	 * Gets all instances registered in the container of the given service identifier.
	 * Used when service are defined with the `{ multiple: true }` option.
	 *
	 * @example
	 * Here's an example:
	 * ```ts
	 * assert(container.getManyOrNull(UNKNOWN_TOKEN) === null);
	 * assert(Array.isArray(container.getManyOrNull(KNOWN_TOKEN)));
	 * ```
	 *
	 * @param identifier The identifier to resolve.
	 *
	 * @see {@link ContainerInstance.getMany}
	 *
	 * @returns An array containing the service instances for the given identifier.
	 * If none can be found, `null` is returned.
	 *
	 * @throws Error
	 * This exception is thrown if the container has been disposed.
	 */
	getManyOrNull(identifier, recursive = true) {
		return this.getManyOrDefault(identifier, NativeNull, recursive);
	}
	/**
	 * Gets all instances registered in the container of the given service identifier,
	 * or the default value if no instances could be found.
	 * Used when service are defined with the `{ multiple: true }` option.
	 *
	 * @typeParam U The type of the provided default value.
	 *
	 * @see {@link ContainerInstance.getManyOrNull}
	 * @see {@link ContainerInstance.getMany}
	 *
	 * @param identifier The identifier to resolve.
	 *
	 * @returns An array containing the service instances for the given identifier.
	 * If none can be found, the default value is returned.
	 *
	 * @throws Error
	 * This exception is thrown if the container has been disposed.
	 */
	getManyOrDefault(identifier, defaultValue, recursive = true) {
		this.throwIfDisposed();
		const [location, idMap] = this.resolveMultiID(identifier, recursive);
		this.visitor.notifyRetrievalVisited(identifier, {
			recursive,
			many: true,
			location,
		});
		if (!idMap) {
			return defaultValue;
		}
		this.isRetrievingPrivateToken = true;
		const mapped = idMap.tokens.map((generatedId) =>
			this.get(generatedId, recursive),
		);
		this.isRetrievingPrivateToken = false;
		return mapped;
	}
	/**
	 * Recursively check the presence of a multi-service identifier in the container hierarchy.
	 *
	 * @param id The ID to lookup in the container hierarchy.
	 * @param recursive Whether the operation will be performed recursively.
	 * If this is set to `false`, the identifier will only be looked up in the context
	 * of this container, regardless of whether the parent has the identifier.
	 *
	 * @returns A tuple, with the first element specifying the location of the identifier
	 * (or {@link ServiceIdentifierLocation.None | None} if it wasn't found), with the
	 * second element being the value associated with the specified identifier.
	 *
	 * @example
	 * ```ts
	 * // Create a new container, as a child of a child of the default container.
	 * const myContainer = Container.ofChild(Symbol()).ofChild(Symbol());
	 * const MY_SERVICE = new Token<MyService>();
	 *
	 * // Add a service to the default container, as a value of the MY_SERVICE group.
	 * @Service({ container: myContainer, id: MY_SERVICE, multiple: true }, [ ])
	 * class MyService { }
	 *
	 * // Add another service to the default container, as a value of the MY_SERVICE group.
	 * Container.set({ id: MY_SERVICE, multiple: true, value: Symbol() });
	 *
	 * // Get the multi-IDs from the child container.
	 * const [myService, mySymbol] = myContainer.getMany(MY_SERVICE);
	 * ```
	 *
	 * @remarks
	 * This replaces the previous implementation, which did not implement proper recursion,
	 * as it only inherited from the direct container of a parent.
	 */
	resolveMultiID(id, recursive = true) {
		if (this.multiServiceIds.has(id)) {
			return [0, this.multiServiceIds.get(id)];
		}
		if (recursive && this.parent) {
			const [location, value] = this.parent.resolveMultiID(id);
			if (location !== 2) {
				return [1, value];
			}
		}
		return [2, NativeNull];
	}
	set(serviceOptions, precompiledDependencies) {
		this.throwIfDisposed();
		if (VIRTUAL_IDENTIFIERS.includes(serviceOptions.id)) {
			throw NativeError("Virtual identifiers can not be overridden.");
		}
		if (serviceOptions["scope"] === "singleton" && defaultContainer !== this) {
			return defaultContainer.set(serviceOptions, precompiledDependencies);
		}
		const dependencies =
			precompiledDependencies ??
			serviceOptions.dependencies?.map((dependency, index) =>
				// eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- This is completely wrong.
				wrapDependencyAsResolvable(dependency, serviceOptions, index),
			) ??
			[];
		const newMetadata = {
			/**
			 * Typescript cannot understand that if ID doesn't exists then type must exists based on the
			 * typing so we need to explicitly cast this to a `ServiceIdentifier`
			 */
			id: serviceOptions.id ?? serviceOptions.type,
			type: NativeNull,
			...SERVICE_METADATA_DEFAULTS,
			/** We allow overriding the above options via the received config object. */
			...serviceOptions,
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			/**
			 * We override the service options with the provided dependencies here, as if we have type wrapped
			 * dependencies only, we'll obviously want to overwrite anything in the options with those.
			 * Additionally, this fixes test cases such as #151.
			 */
			/** @ts-ignore TypeScript is actually broken here. We've told it dependencies is of type TypeWrapper[], but it still doesn't like it? */
			dependencies,
		};
		this.visitor.notifyNewServiceVisited(newMetadata);
		if (newMetadata.multiple) {
			const maskedToken = new Token(`MultiMaskToken-${newMetadata.id}`);
			const existingMultiGroup = this.multiServiceIds.get(newMetadata.id);
			if (existingMultiGroup) {
				existingMultiGroup.tokens.push(maskedToken);
			} else {
				this.multiServiceIds.set(newMetadata.id, { tokens: [maskedToken] });
			}
			newMetadata.id = maskedToken;
			newMetadata.multiple = false;
		}
		this.metadataMap.set(newMetadata.id, newMetadata);
		if (newMetadata.eager && newMetadata.scope !== "transient") {
			this.get(newMetadata.id);
		}
		return newMetadata.id;
	}
	/**
	 * Add a value to the container.
	 *
	 * @example
	 * ```ts
	 * // We can simplify this:
	 * Container.set({ id: 'key', value: 'test', dependencies: [ ] });
	 * // To this:
	 * Container.setValue('key', 'test');
	 * ```
	 *
	 * @param id The ID of the new value to set inside the container.
	 * Must be either a string or a Token.
	 *
	 * @param value The value to set the ID to.
	 *
	 * @returns The identifier of the given service in the container.
	 * This can then be passed to {@link ContainerInstance.get | .get} to resolve the identifier.
	 *
	 * @throws Error
	 * This exception is thrown if the container has been disposed.
	 */
	setValue(id, value) {
		if (typeof id !== "string" && !(id instanceof Token)) {
			throw NativeError(
				"The ID passed to setValue must either be a string or a Token.",
			);
		}
		return this.set({ id, value }, []);
	}
	/**
	 * Removes services with the given list of service identifiers.
	 *
	 * @param identifierOrIdentifierArray The list of service identifiers to remove from the container.
	 *
	 * @example
	 * Here's an example:
	 * ```ts
	 * const NAME = new Token<string>();
	 *
	 * // Set a new identifier in the container:
	 * defaultContainer.setValue(NAME, 'Joanna');
	 * assert(defaultContainer.get(NAME) === 'Joanna');
	 *
	 * // Now remove it, making the container forget it ever existed:
	 * defaultContainer.remove(NAME);
	 * assert(defaultContainer.getOrNull(NAME) === null);
	 * ```
	 *
	 * @returns The current {@link ContainerInstance} instance.
	 *
	 * @throws Error
	 * This exception is thrown if the container has been disposed.
	 */
	remove(identifierOrIdentifierArray) {
		this.throwIfDisposed();
		if (isArray(identifierOrIdentifierArray)) {
			identifierOrIdentifierArray.forEach((id) => this.remove(id));
		} else {
			const serviceMetadata = this.metadataMap.get(identifierOrIdentifierArray);
			if (serviceMetadata) {
				this.disposeServiceInstance(serviceMetadata);
				this.metadataMap.delete(identifierOrIdentifierArray);
			}
		}
		return this;
	}
	/**
	 * Gets a separate container instance for the given instance id.
	 * Optionally, a parent can be passed, which will act as an upstream resolver for the container.
	 *
	 * @remarks This is functionally equivalent to {@link ContainerInstance.of}.
	 * However, it allows container creation from a static interface.
	 *
	 * @example
	 * ```ts
	 * // Create a container which has the default container as its parent:
	 * ContainerInstance.of('my-new-container');
	 *
	 * // Create a container without a parent:
	 * ContainerInstance.of('my-new-container-without-a-parent', null);
	 *
	 * // Create a container with a separate container:
	 * ContainerInstance.of('my-new-special-container', myOtherContainer);
	 * ```
	 *
	 * @param containerId The ID of the container to resolve or create.  Defaults to "default".
	 * @param parent The parent of the container, or null to explicitly signal that one should not be provided.
	 * Defaults to the default container.
	 * @param options The options to supplement how the container is created.
	 *
	 * @see {@link CreateContainerOptions}
	 *
	 * @returns The newly-created {@link ContainerInstance}, or the pre-existing container with the same name
	 * if one already exists.
	 */
	static of(containerId = "default", parent = defaultContainer, options) {
		if (containerId === "default") {
			return defaultContainer;
		}
		let container;
		const conflictDefinition = options?.conflictDefinition ?? "rejectAll";
		const onConflict =
			options?.onConflict ??
			(options?.conflictDefinition ? "throw" : "returnExisting");
		const onFree = options?.onFree ?? "returnNew";
		if (ContainerRegistry.hasContainer(containerId)) {
			container = ContainerRegistry.getContainer(containerId);
			const containerMatches =
				conflictDefinition === "allowSameParent"
					? container.parent === parent
					: /**
						 * To shave a few bytes off the output, we emit false here, as that should
						 * always happen if the value is 'rejectAll' (and we've narrowed it to that).
						 */
					  false;
			if (!containerMatches) {
				if (onConflict === "null") {
					return NativeNull;
				} else if (onConflict === "throw") {
					throw NativeError(
						`${__A_CONTAINER_WITH_THE_SPECIFIED_NAME} ("${containerId}") already exists.`,
					);
				}
			}
		} else {
			if (onFree === "null") {
				return NativeNull;
			} else if (onFree === "throw") {
				throw NativeError(
					`${__A_CONTAINER_WITH_THE_SPECIFIED_NAME} ("${containerId}") does not already exist.`,
				);
			}
			container = new ContainerInstance(containerId, parent ?? void 0);
			if (parent === NativeNull) {
				defaultContainer.visitor.notifyOrphanedContainerVisited(container);
			}
			ContainerRegistry.registerContainer(container);
		}
		return container;
	}
	/**
	 * Gets a separate container instance for the given instance id.
	 *
	 * @param containerId The ID of the container to resolve or create.  Defaults to "default".
	 *
	 * @example
	 * ```
	 * const newContainer = Container.of('foo');
	 *
	 * @Service({ container: newContainer }, [])
	 * class MyService {}
	 * ```
	 *
	 * @returns The newly-created {@link ContainerInstance}, or the pre-existing container
	 * with the same name if one already exists.
	 */
	of(containerId, options) {
		return ContainerInstance.of(containerId, defaultContainer, options);
	}
	/**
	 * Create a registry with the specified ID, with this instance as its parent.
	 *
	 * @param containerId The ID of the container to resolve or create.  Defaults to "default".
	 *
	 * @returns The newly-created {@link ContainerInstance}, or the pre-existing container
	 * with the same name if one already exists.
	 *
	 * @throws Error
	 * This exception is thrown if the container has been disposed.
	 */
	ofChild(containerId, options) {
		this.throwIfDisposed();
		const newContainer = ContainerInstance.of(containerId, this, options);
		if (newContainer) {
			this.visitor.notifyChildContainerVisited(newContainer);
		}
		return newContainer;
	}
	/**
	 * Completely resets the container by removing all previously registered services from it.
	 *
	 * @throws Error
	 * This exception is thrown if the container has been disposed.
	 */
	reset(
		options = {
			strategy: "resetValue",
		},
	) {
		this.throwIfDisposed();
		switch (options.strategy) {
			case "resetValue":
				this.metadataMap.forEach((service) =>
					this.disposeServiceInstance(service),
				);
				break;
			case "resetServices":
				this.metadataMap.forEach((service) =>
					this.disposeServiceInstance(service),
				);
				this.metadataMap.clear();
				this.multiServiceIds.clear();
				break;
			default:
				throw NativeError("Received invalid reset strategy.");
		}
		return this;
	}
	/**
	 * Dispose the container, rendering it unable to perform any further injection or storage.
	 * @async
	 *
	 * @remarks
	 * It is currently not advised to dispose of the default container.
	 * This would result in resolution issues in your application.
	 *
	 * @example
	 * ```ts
	 * const appContainer = Container.of('app');
	 *
	 * appContainer.dispose().then(
	 *   () => console.log('The container has been disposed.')
	 * );
	 *
	 * appContainer.disposed === true;
	 *
	 * // This will throw an error:
	 * appContainer.get(
	 *   new Token<unknown>('test')
	 * );
	 * ```
	 *
	 * @returns A promise that resolves when the disposal process is complete.
	 *
	 * @throws Error
	 * This exception is thrown if the container has been disposed.
	 */
	dispose() {
		if (this.disposed) {
			return Promise.reject(
				new NativeError(__CANNOT_USE_CONTAINER_AFTER_IT_HAS_BEEN_DISPOSED),
			);
		}
		const promise = Promise.all([
			this.visitor.dispose(),
			this.reset({ strategy: "resetServices" }),
		]);
		this.disposed = true;
		return promise.then(() => {});
	}
	/**
	 * Throw if the instance has been disposed.
	 * @internal
	 *
	 * @remarks
	 * This is used to prevent operations from being performed on the container
	 * once it has entered a disposed state.
	 *
	 * @remarks
	 * Due to its extensive usage throughout container methods, this method name
	 * is mangled in minified builds.  As such, the existence of this method should
	 * not be assumed by consumers of the private interface.
	 */
	throwIfDisposed() {
		if (this.disposed) {
			throw NativeError(__CANNOT_USE_CONTAINER_AFTER_IT_HAS_BEEN_DISPOSED);
		}
	}
	/**
	 * Gets the value belonging to passed in {@link ServiceMetadata} instance.
	 *
	 * @remarks
	 * - If {@link ServiceMetadata.value | serviceMetadata.value} is present, it is immediately returned.
	 * - Alternatively, the requested type is resolved to the appropriate value,
	 * which is then saved to {@link ServiceMetadata.value | serviceMetadata.value} and returned.
	 */
	getServiceValue(serviceMetadata) {
		let value = EMPTY_VALUE;
		const { factory: factoryMeta } = serviceMetadata;
		if (serviceMetadata.value !== EMPTY_VALUE) {
			return serviceMetadata.value;
		}
		if (!factoryMeta && !serviceMetadata.type) {
			throw new CannotInstantiateValueError(serviceMetadata.id);
		}
		if (factoryMeta) {
			const parameters = serviceMetadata.dependencies.map((resolvable) => ({
				id: this.resolveTypeWrapper(resolvable.typeWrapper),
				constraints: resolvable.constraints,
			}));
			if (isArray(factoryMeta)) {
				const [factoryServiceId, factoryServiceMethod] = factoryMeta;
				const factoryInstance =
					this.getOrNull(factoryServiceId) ?? new factoryServiceId();
				value = factoryInstance[factoryServiceMethod](
					this,
					serviceMetadata.id,
					parameters,
				);
			} else {
				value = factoryMeta(this, serviceMetadata.id, parameters);
			}
		}
		if (!factoryMeta && serviceMetadata.type) {
			const constructableTargetType = serviceMetadata.type;
			const parameters = this.getConstructorParameters(serviceMetadata, true);
			value = new constructableTargetType(...parameters);
		}
		if (serviceMetadata.scope !== "transient" && value !== EMPTY_VALUE) {
			serviceMetadata.value = value;
		}
		if (value === EMPTY_VALUE) {
			throw new CannotInstantiateValueError(serviceMetadata.id);
		}
		return value;
	}
	getConstructorParameters({ dependencies }, guardBuiltIns) {
		return dependencies.map((resolvable) =>
			this.resolveResolvable(resolvable, guardBuiltIns),
		);
	}
	/**
	 * Resolve a {@link Resolvable} object in the current container.
	 *
	 * @param resolvable The {@link Resolvable} to resolve.
	 *
	 * @returns The resolved value of the item.
	 */
	resolveResolvable(resolvable, guardBuiltIns) {
		const { typeWrapper } = resolvable;
		const identifier = this.resolveTypeWrapper(resolvable.typeWrapper);
		if (BUILT_INS.includes(identifier)) {
			if (guardBuiltIns) {
				throw new CannotInstantiateBuiltInError(identifier.name);
			}
			return identifier;
		}
		const { constraints } = resolvable;
		const isTypeWrapperExtractable = "extract" in typeWrapper;
		if (isTypeWrapperExtractable) {
			return typeWrapper.extract(
				this,
				constraints ?? 0,
				/* ResolutionConstraintFlag.None */
			);
		}
		if (constraints) {
			return this.resolveConstrainedIdentifier(identifier, constraints);
		}
		return this.get(identifier);
	}
	/**
	 * Resolve an identifier within the context of the current container,
	 * alongside a specific set of resolution constraints specified by the end-user.
	 *
	 * @param identifier The identifier to resolve.
	 *
	 * @param constraints The constraints to take into consideration
	 * while resolving the specified identifier.
	 *
	 * @remarks
	 * If {@link SkipSelf} is specified, the parent of this container is used to resolve the identifier.
	 *
	 * @remarks
	 * In the case of {@link Optional}, if the identifier cannot be found,
	 * "null" is returned instead.  This is in-line with the specification.
	 *
	 * @returns The result of resolving the value within the current container.
	 *
	 * @see {@link ResolutionConstraintFlag}
	 *
	 * @throws {@link ServiceNotFoundError}
	 * This exception is thrown if an invalid identifier is provided, and the
	 * {@link Optional} flag has not been provided.
	 *
	 * @throws Error
	 * This exception is thrown if the {@link SkipSelf} constraint has been specified,
	 * but the current container does not have a parent.
	 *
	 * @throws Error
	 * This exception is thrown if {@link SkipSelf} and {@link Self} are used at the same time.
	 */
	resolveConstrainedIdentifier(identifier, constraints) {
		const isOptional = constraints & 2;
		const isSkipSelf = constraints & 4;
		const isSelf = constraints & 8;
		const isMany = constraints & 1;
		if (isSkipSelf && isSelf) {
			throw NativeError(
				"SkipSelf() and Self() cannot be used at the same time.",
			);
		}
		if (isSkipSelf && !this.parent) {
			throw NativeError(
				`The SkipSelf() flag was enabled, but the subject container does not have a parent.`,
			);
		}
		const targetContainer = isSkipSelf ? this.parent : this;
		const recursive = !isSelf;
		const identifierIsPresent = targetContainer.has(identifier, recursive);
		if (!identifierIsPresent) {
			if (isOptional) {
				return NativeNull;
			}
			throw new ServiceNotFoundError(identifier);
		}
		if (isMany) {
			return targetContainer.getMany(identifier, recursive);
		} else {
			return targetContainer.get(identifier, recursive);
		}
	}
	resolveTypeWrapper(wrapper) {
		const resolved = wrapper.eagerType ?? wrapper.lazyType?.();
		if (resolved == NativeNull) {
			throw NativeError(`The wrapped value could not be resolved.`);
		}
		return resolved;
	}
	/**
	 * Check if the given service is able to be destroyed and, if so, destroys it in-place.
	 * @deprecated
	 *
	 * @remarks
	 * If the service contains a method named `destroy`, it is called.
	 * However, the value it returns is ignored.
	 *
	 * @param serviceMetadata the service metadata containing the instance to destroy
	 * @param force when true the service will be always destroyed even if it's cannot be re-created
	 */
	disposeServiceInstance(serviceMetadata, force = false) {
		this.throwIfDisposed();
		const { value, type, factory } = serviceMetadata;
		const shouldResetValue = force || !!type || !!factory;
		if (shouldResetValue) {
			if (typeof value?.["dispose"] === "function") {
				try {
					value.dispose();
				} catch (error) {}
			}
			serviceMetadata.value = EMPTY_VALUE;
		}
	}
	/**
	 * Add a visitor to the container.
	 * @experimental
	 *
	 * @param visitor The visitor to add to this container.
	 *
	 * @see {@link ContainerTreeVisitor}
	 *
	 * @returns Whether the operation was successful.
	 */
	acceptTreeVisitor(visitor) {
		this.throwIfDisposed();
		return this.visitor.addVisitorToCollection(visitor, this);
	}
	/**
	 * Remove a visitor from the container.
	 * No-op if the visitor was never attached to the container.
	 * @experimental
	 *
	 * @param visitor The visitor to remove from the container.
	 *
	 * @see {@link ContainerTreeVisitor}
	 *
	 * @returns Whether the operation was successful.
	 */
	detachTreeVisitor(visitor) {
		this.throwIfDisposed();
		return this.visitor.removeVisitorFromCollection(visitor);
	}
	/** Iterate over each service in the container. */
	[Symbol.iterator]() {
		return this.metadataMap.entries();
	}
};
__name(ContainerInstance, "ContainerInstance");
ContainerInstance.defaultContainer = defaultContainer = new ContainerInstance(
	"default",
);
ContainerRegistry.registerContainer(defaultContainer);

// node_modules/.pnpm/@freshgum+typedi@0.7.0/node_modules/@freshgum/typedi/build/esm5/decorators/service.decorator.mjs
function Service(optionsOrDependencies, maybeDependencies) {
	return (targetConstructor) => {
		if (
			optionsOrDependencies == NativeNull ||
			targetConstructor == NativeNull
		) {
			throw NativeError("The @Service decorator was not used correctly.");
		}
		let resolvedDependencies;
		const optionsOrDependenciesIsArray = isArray(optionsOrDependencies);
		if (optionsOrDependenciesIsArray) {
			resolvedDependencies = optionsOrDependencies;
		} else if (isArray(maybeDependencies)) {
			resolvedDependencies = maybeDependencies;
		} else if ("dependencies" in optionsOrDependencies) {
			resolvedDependencies = optionsOrDependencies.dependencies;
		}
		if (!resolvedDependencies) {
			throw NativeError(
				"The dependencies provided were not able to be resolved.",
			);
		}
		const metadata = {
			id: targetConstructor,
			type: targetConstructor,
			...SERVICE_METADATA_DEFAULTS,
			container: defaultContainer,
		};
		if (!optionsOrDependenciesIsArray) {
			Object.assign(metadata, optionsOrDependencies);
		}
		const wrappedDependencies = resolvedDependencies.map((dependency, index) =>
			wrapDependencyAsResolvable(dependency, metadata, index),
		);
		const { id, container } = metadata;
		if (container.has(id, false) && !metadata.multiple) {
			throw NativeError(
				`@Service() has been called twice upon ${targetConstructor.name}, or you have used an ID twice.`,
			);
		}
		container.set(metadata, wrappedDependencies);
	};
}
__name(Service, "Service");

// node_modules/.pnpm/zod@3.22.4/node_modules/zod/lib/index.mjs
var util;
(function (util2) {
	util2.assertEqual = (val) => val;
	function assertIs(_arg) {}
	__name(assertIs, "assertIs");
	util2.assertIs = assertIs;
	function assertNever(_x) {
		throw new Error();
	}
	__name(assertNever, "assertNever");
	util2.assertNever = assertNever;
	util2.arrayToEnum = (items) => {
		const obj = {};
		for (const item of items) {
			obj[item] = item;
		}
		return obj;
	};
	util2.getValidEnumValues = (obj) => {
		const validKeys = util2
			.objectKeys(obj)
			.filter((k) => typeof obj[obj[k]] !== "number");
		const filtered = {};
		for (const k of validKeys) {
			filtered[k] = obj[k];
		}
		return util2.objectValues(filtered);
	};
	util2.objectValues = (obj) => {
		return util2.objectKeys(obj).map(function (e) {
			return obj[e];
		});
	};
	util2.objectKeys =
		typeof Object.keys === "function"
			? (obj) => Object.keys(obj)
			: (object) => {
					const keys = [];
					for (const key in object) {
						if (Object.prototype.hasOwnProperty.call(object, key)) {
							keys.push(key);
						}
					}
					return keys;
			  };
	util2.find = (arr, checker) => {
		for (const item of arr) {
			if (checker(item)) return item;
		}
		return void 0;
	};
	util2.isInteger =
		typeof Number.isInteger === "function"
			? (val) => Number.isInteger(val)
			: (val) =>
					typeof val === "number" && isFinite(val) && Math.floor(val) === val;
	function joinValues(array, separator = " | ") {
		return array
			.map((val) => (typeof val === "string" ? `'${val}'` : val))
			.join(separator);
	}
	__name(joinValues, "joinValues");
	util2.joinValues = joinValues;
	util2.jsonStringifyReplacer = (_, value) => {
		if (typeof value === "bigint") {
			return value.toString();
		}
		return value;
	};
})(util || (util = {}));
var objectUtil;
(function (objectUtil2) {
	objectUtil2.mergeShapes = (first, second) => {
		return {
			...first,
			...second,
			// second overwrites first
		};
	};
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
	"string",
	"nan",
	"number",
	"integer",
	"float",
	"boolean",
	"date",
	"bigint",
	"symbol",
	"function",
	"undefined",
	"null",
	"array",
	"object",
	"unknown",
	"promise",
	"void",
	"never",
	"map",
	"set",
]);
var getParsedType = /* @__PURE__ */ __name((data) => {
	const t = typeof data;
	switch (t) {
		case "undefined":
			return ZodParsedType.undefined;
		case "string":
			return ZodParsedType.string;
		case "number":
			return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
		case "boolean":
			return ZodParsedType.boolean;
		case "function":
			return ZodParsedType.function;
		case "bigint":
			return ZodParsedType.bigint;
		case "symbol":
			return ZodParsedType.symbol;
		case "object":
			if (Array.isArray(data)) {
				return ZodParsedType.array;
			}
			if (data === null) {
				return ZodParsedType.null;
			}
			if (
				data.then &&
				typeof data.then === "function" &&
				data.catch &&
				typeof data.catch === "function"
			) {
				return ZodParsedType.promise;
			}
			if (typeof Map !== "undefined" && data instanceof Map) {
				return ZodParsedType.map;
			}
			if (typeof Set !== "undefined" && data instanceof Set) {
				return ZodParsedType.set;
			}
			if (typeof Date !== "undefined" && data instanceof Date) {
				return ZodParsedType.date;
			}
			return ZodParsedType.object;
		default:
			return ZodParsedType.unknown;
	}
}, "getParsedType");
var ZodIssueCode = util.arrayToEnum([
	"invalid_type",
	"invalid_literal",
	"custom",
	"invalid_union",
	"invalid_union_discriminator",
	"invalid_enum_value",
	"unrecognized_keys",
	"invalid_arguments",
	"invalid_return_type",
	"invalid_date",
	"invalid_string",
	"too_small",
	"too_big",
	"invalid_intersection_types",
	"not_multiple_of",
	"not_finite",
]);
var quotelessJson = /* @__PURE__ */ __name((obj) => {
	const json = JSON.stringify(obj, null, 2);
	return json.replace(/"([^"]+)":/g, "$1:");
}, "quotelessJson");
var ZodError = class extends Error {
	constructor(issues) {
		super();
		this.issues = [];
		this.addIssue = (sub) => {
			this.issues = [...this.issues, sub];
		};
		this.addIssues = (subs = []) => {
			this.issues = [...this.issues, ...subs];
		};
		const actualProto = new.target.prototype;
		if (Object.setPrototypeOf) {
			Object.setPrototypeOf(this, actualProto);
		} else {
			this.__proto__ = actualProto;
		}
		this.name = "ZodError";
		this.issues = issues;
	}
	get errors() {
		return this.issues;
	}
	format(_mapper) {
		const mapper =
			_mapper ||
			function (issue) {
				return issue.message;
			};
		const fieldErrors = { _errors: [] };
		const processError = /* @__PURE__ */ __name((error) => {
			for (const issue of error.issues) {
				if (issue.code === "invalid_union") {
					issue.unionErrors.map(processError);
				} else if (issue.code === "invalid_return_type") {
					processError(issue.returnTypeError);
				} else if (issue.code === "invalid_arguments") {
					processError(issue.argumentsError);
				} else if (issue.path.length === 0) {
					fieldErrors._errors.push(mapper(issue));
				} else {
					let curr = fieldErrors;
					let i = 0;
					while (i < issue.path.length) {
						const el = issue.path[i];
						const terminal = i === issue.path.length - 1;
						if (!terminal) {
							curr[el] = curr[el] || { _errors: [] };
						} else {
							curr[el] = curr[el] || { _errors: [] };
							curr[el]._errors.push(mapper(issue));
						}
						curr = curr[el];
						i++;
					}
				}
			}
		}, "processError");
		processError(this);
		return fieldErrors;
	}
	toString() {
		return this.message;
	}
	get message() {
		return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
	}
	get isEmpty() {
		return this.issues.length === 0;
	}
	flatten(mapper = (issue) => issue.message) {
		const fieldErrors = {};
		const formErrors = [];
		for (const sub of this.issues) {
			if (sub.path.length > 0) {
				fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
				fieldErrors[sub.path[0]].push(mapper(sub));
			} else {
				formErrors.push(mapper(sub));
			}
		}
		return { formErrors, fieldErrors };
	}
	get formErrors() {
		return this.flatten();
	}
};
__name(ZodError, "ZodError");
ZodError.create = (issues) => {
	const error = new ZodError(issues);
	return error;
};
var errorMap = /* @__PURE__ */ __name((issue, _ctx) => {
	let message;
	switch (issue.code) {
		case ZodIssueCode.invalid_type:
			if (issue.received === ZodParsedType.undefined) {
				message = "Required";
			} else {
				message = `Expected ${issue.expected}, received ${issue.received}`;
			}
			break;
		case ZodIssueCode.invalid_literal:
			message = `Invalid literal value, expected ${JSON.stringify(
				issue.expected,
				util.jsonStringifyReplacer,
			)}`;
			break;
		case ZodIssueCode.unrecognized_keys:
			message = `Unrecognized key(s) in object: ${util.joinValues(
				issue.keys,
				", ",
			)}`;
			break;
		case ZodIssueCode.invalid_union:
			message = `Invalid input`;
			break;
		case ZodIssueCode.invalid_union_discriminator:
			message = `Invalid discriminator value. Expected ${util.joinValues(
				issue.options,
			)}`;
			break;
		case ZodIssueCode.invalid_enum_value:
			message = `Invalid enum value. Expected ${util.joinValues(
				issue.options,
			)}, received '${issue.received}'`;
			break;
		case ZodIssueCode.invalid_arguments:
			message = `Invalid function arguments`;
			break;
		case ZodIssueCode.invalid_return_type:
			message = `Invalid function return type`;
			break;
		case ZodIssueCode.invalid_date:
			message = `Invalid date`;
			break;
		case ZodIssueCode.invalid_string:
			if (typeof issue.validation === "object") {
				if ("includes" in issue.validation) {
					message = `Invalid input: must include "${issue.validation.includes}"`;
					if (typeof issue.validation.position === "number") {
						message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
					}
				} else if ("startsWith" in issue.validation) {
					message = `Invalid input: must start with "${issue.validation.startsWith}"`;
				} else if ("endsWith" in issue.validation) {
					message = `Invalid input: must end with "${issue.validation.endsWith}"`;
				} else {
					util.assertNever(issue.validation);
				}
			} else if (issue.validation !== "regex") {
				message = `Invalid ${issue.validation}`;
			} else {
				message = "Invalid";
			}
			break;
		case ZodIssueCode.too_small:
			if (issue.type === "array")
				message = `Array must contain ${
					issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`
				} ${issue.minimum} element(s)`;
			else if (issue.type === "string")
				message = `String must contain ${
					issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`
				} ${issue.minimum} character(s)`;
			else if (issue.type === "number")
				message = `Number must be ${
					issue.exact
						? `exactly equal to `
						: issue.inclusive
						  ? `greater than or equal to `
						  : `greater than `
				}${issue.minimum}`;
			else if (issue.type === "date")
				message = `Date must be ${
					issue.exact
						? `exactly equal to `
						: issue.inclusive
						  ? `greater than or equal to `
						  : `greater than `
				}${new Date(Number(issue.minimum))}`;
			else message = "Invalid input";
			break;
		case ZodIssueCode.too_big:
			if (issue.type === "array")
				message = `Array must contain ${
					issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`
				} ${issue.maximum} element(s)`;
			else if (issue.type === "string")
				message = `String must contain ${
					issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`
				} ${issue.maximum} character(s)`;
			else if (issue.type === "number")
				message = `Number must be ${
					issue.exact
						? `exactly`
						: issue.inclusive
						  ? `less than or equal to`
						  : `less than`
				} ${issue.maximum}`;
			else if (issue.type === "bigint")
				message = `BigInt must be ${
					issue.exact
						? `exactly`
						: issue.inclusive
						  ? `less than or equal to`
						  : `less than`
				} ${issue.maximum}`;
			else if (issue.type === "date")
				message = `Date must be ${
					issue.exact
						? `exactly`
						: issue.inclusive
						  ? `smaller than or equal to`
						  : `smaller than`
				} ${new Date(Number(issue.maximum))}`;
			else message = "Invalid input";
			break;
		case ZodIssueCode.custom:
			message = `Invalid input`;
			break;
		case ZodIssueCode.invalid_intersection_types:
			message = `Intersection results could not be merged`;
			break;
		case ZodIssueCode.not_multiple_of:
			message = `Number must be a multiple of ${issue.multipleOf}`;
			break;
		case ZodIssueCode.not_finite:
			message = "Number must be finite";
			break;
		default:
			message = _ctx.defaultError;
			util.assertNever(issue);
	}
	return { message };
}, "errorMap");
var overrideErrorMap = errorMap;
function setErrorMap(map) {
	overrideErrorMap = map;
}
__name(setErrorMap, "setErrorMap");
function getErrorMap() {
	return overrideErrorMap;
}
__name(getErrorMap, "getErrorMap");
var makeIssue = /* @__PURE__ */ __name((params) => {
	const { data, path, errorMaps, issueData } = params;
	const fullPath = [...path, ...(issueData.path || [])];
	const fullIssue = {
		...issueData,
		path: fullPath,
	};
	let errorMessage = "";
	const maps = errorMaps
		.filter((m) => !!m)
		.slice()
		.reverse();
	for (const map of maps) {
		errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
	}
	return {
		...issueData,
		path: fullPath,
		message: issueData.message || errorMessage,
	};
}, "makeIssue");
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
	const issue = makeIssue({
		issueData,
		data: ctx.data,
		path: ctx.path,
		errorMaps: [
			ctx.common.contextualErrorMap,
			ctx.schemaErrorMap,
			getErrorMap(),
			errorMap,
			// then global default map
		].filter((x) => !!x),
	});
	ctx.common.issues.push(issue);
}
__name(addIssueToContext, "addIssueToContext");
var ParseStatus = class {
	constructor() {
		this.value = "valid";
	}
	dirty() {
		if (this.value === "valid") this.value = "dirty";
	}
	abort() {
		if (this.value !== "aborted") this.value = "aborted";
	}
	static mergeArray(status, results) {
		const arrayValue = [];
		for (const s of results) {
			if (s.status === "aborted") return INVALID;
			if (s.status === "dirty") status.dirty();
			arrayValue.push(s.value);
		}
		return { status: status.value, value: arrayValue };
	}
	static async mergeObjectAsync(status, pairs) {
		const syncPairs = [];
		for (const pair of pairs) {
			syncPairs.push({
				key: await pair.key,
				value: await pair.value,
			});
		}
		return ParseStatus.mergeObjectSync(status, syncPairs);
	}
	static mergeObjectSync(status, pairs) {
		const finalObject = {};
		for (const pair of pairs) {
			const { key, value } = pair;
			if (key.status === "aborted") return INVALID;
			if (value.status === "aborted") return INVALID;
			if (key.status === "dirty") status.dirty();
			if (value.status === "dirty") status.dirty();
			if (
				key.value !== "__proto__" &&
				(typeof value.value !== "undefined" || pair.alwaysSet)
			) {
				finalObject[key.value] = value.value;
			}
		}
		return { status: status.value, value: finalObject };
	}
};
__name(ParseStatus, "ParseStatus");
var INVALID = Object.freeze({
	status: "aborted",
});
var DIRTY = /* @__PURE__ */ __name(
	(value) => ({ status: "dirty", value }),
	"DIRTY",
);
var OK = /* @__PURE__ */ __name((value) => ({ status: "valid", value }), "OK");
var isAborted = /* @__PURE__ */ __name(
	(x) => x.status === "aborted",
	"isAborted",
);
var isDirty = /* @__PURE__ */ __name((x) => x.status === "dirty", "isDirty");
var isValid = /* @__PURE__ */ __name((x) => x.status === "valid", "isValid");
var isAsync = /* @__PURE__ */ __name(
	(x) => typeof Promise !== "undefined" && x instanceof Promise,
	"isAsync",
);
var errorUtil;
(function (errorUtil2) {
	errorUtil2.errToObj = (message) =>
		typeof message === "string" ? { message } : message || {};
	errorUtil2.toString = (message) =>
		typeof message === "string"
			? message
			: message === null || message === void 0
			  ? void 0
			  : message.message;
})(errorUtil || (errorUtil = {}));
var ParseInputLazyPath = class {
	constructor(parent, value, path, key) {
		this._cachedPath = [];
		this.parent = parent;
		this.data = value;
		this._path = path;
		this._key = key;
	}
	get path() {
		if (!this._cachedPath.length) {
			if (this._key instanceof Array) {
				this._cachedPath.push(...this._path, ...this._key);
			} else {
				this._cachedPath.push(...this._path, this._key);
			}
		}
		return this._cachedPath;
	}
};
__name(ParseInputLazyPath, "ParseInputLazyPath");
var handleResult = /* @__PURE__ */ __name((ctx, result) => {
	if (isValid(result)) {
		return { success: true, data: result.value };
	} else {
		if (!ctx.common.issues.length) {
			throw new Error("Validation failed but no issues detected.");
		}
		return {
			success: false,
			get error() {
				if (this._error) return this._error;
				const error = new ZodError(ctx.common.issues);
				this._error = error;
				return this._error;
			},
		};
	}
}, "handleResult");
function processCreateParams(params) {
	if (!params) return {};
	const {
		errorMap: errorMap2,
		invalid_type_error,
		required_error,
		description,
	} = params;
	if (errorMap2 && (invalid_type_error || required_error)) {
		throw new Error(
			`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`,
		);
	}
	if (errorMap2) return { errorMap: errorMap2, description };
	const customMap = /* @__PURE__ */ __name((iss, ctx) => {
		if (iss.code !== "invalid_type") return { message: ctx.defaultError };
		if (typeof ctx.data === "undefined") {
			return {
				message:
					required_error !== null && required_error !== void 0
						? required_error
						: ctx.defaultError,
			};
		}
		return {
			message:
				invalid_type_error !== null && invalid_type_error !== void 0
					? invalid_type_error
					: ctx.defaultError,
		};
	}, "customMap");
	return { errorMap: customMap, description };
}
__name(processCreateParams, "processCreateParams");
var ZodType = class {
	constructor(def) {
		this.spa = this.safeParseAsync;
		this._def = def;
		this.parse = this.parse.bind(this);
		this.safeParse = this.safeParse.bind(this);
		this.parseAsync = this.parseAsync.bind(this);
		this.safeParseAsync = this.safeParseAsync.bind(this);
		this.spa = this.spa.bind(this);
		this.refine = this.refine.bind(this);
		this.refinement = this.refinement.bind(this);
		this.superRefine = this.superRefine.bind(this);
		this.optional = this.optional.bind(this);
		this.nullable = this.nullable.bind(this);
		this.nullish = this.nullish.bind(this);
		this.array = this.array.bind(this);
		this.promise = this.promise.bind(this);
		this.or = this.or.bind(this);
		this.and = this.and.bind(this);
		this.transform = this.transform.bind(this);
		this.brand = this.brand.bind(this);
		this.default = this.default.bind(this);
		this.catch = this.catch.bind(this);
		this.describe = this.describe.bind(this);
		this.pipe = this.pipe.bind(this);
		this.readonly = this.readonly.bind(this);
		this.isNullable = this.isNullable.bind(this);
		this.isOptional = this.isOptional.bind(this);
	}
	get description() {
		return this._def.description;
	}
	_getType(input) {
		return getParsedType(input.data);
	}
	_getOrReturnCtx(input, ctx) {
		return (
			ctx || {
				common: input.parent.common,
				data: input.data,
				parsedType: getParsedType(input.data),
				schemaErrorMap: this._def.errorMap,
				path: input.path,
				parent: input.parent,
			}
		);
	}
	_processInputParams(input) {
		return {
			status: new ParseStatus(),
			ctx: {
				common: input.parent.common,
				data: input.data,
				parsedType: getParsedType(input.data),
				schemaErrorMap: this._def.errorMap,
				path: input.path,
				parent: input.parent,
			},
		};
	}
	_parseSync(input) {
		const result = this._parse(input);
		if (isAsync(result)) {
			throw new Error("Synchronous parse encountered promise.");
		}
		return result;
	}
	_parseAsync(input) {
		const result = this._parse(input);
		return Promise.resolve(result);
	}
	parse(data, params) {
		const result = this.safeParse(data, params);
		if (result.success) return result.data;
		throw result.error;
	}
	safeParse(data, params) {
		var _a;
		const ctx = {
			common: {
				issues: [],
				async:
					(_a =
						params === null || params === void 0 ? void 0 : params.async) !==
						null && _a !== void 0
						? _a
						: false,
				contextualErrorMap:
					params === null || params === void 0 ? void 0 : params.errorMap,
			},
			path: (params === null || params === void 0 ? void 0 : params.path) || [],
			schemaErrorMap: this._def.errorMap,
			parent: null,
			data,
			parsedType: getParsedType(data),
		};
		const result = this._parseSync({ data, path: ctx.path, parent: ctx });
		return handleResult(ctx, result);
	}
	async parseAsync(data, params) {
		const result = await this.safeParseAsync(data, params);
		if (result.success) return result.data;
		throw result.error;
	}
	async safeParseAsync(data, params) {
		const ctx = {
			common: {
				issues: [],
				contextualErrorMap:
					params === null || params === void 0 ? void 0 : params.errorMap,
				async: true,
			},
			path: (params === null || params === void 0 ? void 0 : params.path) || [],
			schemaErrorMap: this._def.errorMap,
			parent: null,
			data,
			parsedType: getParsedType(data),
		};
		const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
		const result = await (isAsync(maybeAsyncResult)
			? maybeAsyncResult
			: Promise.resolve(maybeAsyncResult));
		return handleResult(ctx, result);
	}
	refine(check, message) {
		const getIssueProperties = /* @__PURE__ */ __name((val) => {
			if (typeof message === "string" || typeof message === "undefined") {
				return { message };
			} else if (typeof message === "function") {
				return message(val);
			} else {
				return message;
			}
		}, "getIssueProperties");
		return this._refinement((val, ctx) => {
			const result = check(val);
			const setError = /* @__PURE__ */ __name(
				() =>
					ctx.addIssue({
						code: ZodIssueCode.custom,
						...getIssueProperties(val),
					}),
				"setError",
			);
			if (typeof Promise !== "undefined" && result instanceof Promise) {
				return result.then((data) => {
					if (!data) {
						setError();
						return false;
					} else {
						return true;
					}
				});
			}
			if (!result) {
				setError();
				return false;
			} else {
				return true;
			}
		});
	}
	refinement(check, refinementData) {
		return this._refinement((val, ctx) => {
			if (!check(val)) {
				ctx.addIssue(
					typeof refinementData === "function"
						? refinementData(val, ctx)
						: refinementData,
				);
				return false;
			} else {
				return true;
			}
		});
	}
	_refinement(refinement) {
		return new ZodEffects({
			schema: this,
			typeName: ZodFirstPartyTypeKind.ZodEffects,
			effect: { type: "refinement", refinement },
		});
	}
	superRefine(refinement) {
		return this._refinement(refinement);
	}
	optional() {
		return ZodOptional.create(this, this._def);
	}
	nullable() {
		return ZodNullable.create(this, this._def);
	}
	nullish() {
		return this.nullable().optional();
	}
	array() {
		return ZodArray.create(this, this._def);
	}
	promise() {
		return ZodPromise.create(this, this._def);
	}
	or(option) {
		return ZodUnion.create([this, option], this._def);
	}
	and(incoming) {
		return ZodIntersection.create(this, incoming, this._def);
	}
	transform(transform) {
		return new ZodEffects({
			...processCreateParams(this._def),
			schema: this,
			typeName: ZodFirstPartyTypeKind.ZodEffects,
			effect: { type: "transform", transform },
		});
	}
	default(def) {
		const defaultValueFunc = typeof def === "function" ? def : () => def;
		return new ZodDefault({
			...processCreateParams(this._def),
			innerType: this,
			defaultValue: defaultValueFunc,
			typeName: ZodFirstPartyTypeKind.ZodDefault,
		});
	}
	brand() {
		return new ZodBranded({
			typeName: ZodFirstPartyTypeKind.ZodBranded,
			type: this,
			...processCreateParams(this._def),
		});
	}
	catch(def) {
		const catchValueFunc = typeof def === "function" ? def : () => def;
		return new ZodCatch({
			...processCreateParams(this._def),
			innerType: this,
			catchValue: catchValueFunc,
			typeName: ZodFirstPartyTypeKind.ZodCatch,
		});
	}
	describe(description) {
		const This = this.constructor;
		return new This({
			...this._def,
			description,
		});
	}
	pipe(target) {
		return ZodPipeline.create(this, target);
	}
	readonly() {
		return ZodReadonly.create(this);
	}
	isOptional() {
		return this.safeParse(void 0).success;
	}
	isNullable() {
		return this.safeParse(null).success;
	}
};
__name(ZodType, "ZodType");
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[a-z][a-z0-9]*$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/;
var uuidRegex =
	/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var emailRegex =
	/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex =
	/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/;
var ipv6Regex =
	/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
var datetimeRegex = /* @__PURE__ */ __name((args) => {
	if (args.precision) {
		if (args.offset) {
			return new RegExp(
				`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`,
			);
		} else {
			return new RegExp(
				`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}Z$`,
			);
		}
	} else if (args.precision === 0) {
		if (args.offset) {
			return new RegExp(
				`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$`,
			);
		} else {
			return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$`);
		}
	} else {
		if (args.offset) {
			return new RegExp(
				`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$`,
			);
		} else {
			return new RegExp(
				`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$`,
			);
		}
	}
}, "datetimeRegex");
function isValidIP(ip, version) {
	if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
		return true;
	}
	if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
		return true;
	}
	return false;
}
__name(isValidIP, "isValidIP");
var ZodString = class extends ZodType {
	_parse(input) {
		if (this._def.coerce) {
			input.data = String(input.data);
		}
		const parsedType = this._getType(input);
		if (parsedType !== ZodParsedType.string) {
			const ctx2 = this._getOrReturnCtx(input);
			addIssueToContext(
				ctx2,
				{
					code: ZodIssueCode.invalid_type,
					expected: ZodParsedType.string,
					received: ctx2.parsedType,
				},
				//
			);
			return INVALID;
		}
		const status = new ParseStatus();
		let ctx = void 0;
		for (const check of this._def.checks) {
			if (check.kind === "min") {
				if (input.data.length < check.value) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode.too_small,
						minimum: check.value,
						type: "string",
						inclusive: true,
						exact: false,
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === "max") {
				if (input.data.length > check.value) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode.too_big,
						maximum: check.value,
						type: "string",
						inclusive: true,
						exact: false,
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === "length") {
				const tooBig = input.data.length > check.value;
				const tooSmall = input.data.length < check.value;
				if (tooBig || tooSmall) {
					ctx = this._getOrReturnCtx(input, ctx);
					if (tooBig) {
						addIssueToContext(ctx, {
							code: ZodIssueCode.too_big,
							maximum: check.value,
							type: "string",
							inclusive: true,
							exact: true,
							message: check.message,
						});
					} else if (tooSmall) {
						addIssueToContext(ctx, {
							code: ZodIssueCode.too_small,
							minimum: check.value,
							type: "string",
							inclusive: true,
							exact: true,
							message: check.message,
						});
					}
					status.dirty();
				}
			} else if (check.kind === "email") {
				if (!emailRegex.test(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						validation: "email",
						code: ZodIssueCode.invalid_string,
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === "emoji") {
				if (!emojiRegex) {
					emojiRegex = new RegExp(_emojiRegex, "u");
				}
				if (!emojiRegex.test(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						validation: "emoji",
						code: ZodIssueCode.invalid_string,
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === "uuid") {
				if (!uuidRegex.test(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						validation: "uuid",
						code: ZodIssueCode.invalid_string,
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === "cuid") {
				if (!cuidRegex.test(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						validation: "cuid",
						code: ZodIssueCode.invalid_string,
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === "cuid2") {
				if (!cuid2Regex.test(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						validation: "cuid2",
						code: ZodIssueCode.invalid_string,
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === "ulid") {
				if (!ulidRegex.test(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						validation: "ulid",
						code: ZodIssueCode.invalid_string,
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === "url") {
				try {
					new URL(input.data);
				} catch (_a) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						validation: "url",
						code: ZodIssueCode.invalid_string,
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === "regex") {
				check.regex.lastIndex = 0;
				const testResult = check.regex.test(input.data);
				if (!testResult) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						validation: "regex",
						code: ZodIssueCode.invalid_string,
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === "trim") {
				input.data = input.data.trim();
			} else if (check.kind === "includes") {
				if (!input.data.includes(check.value, check.position)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode.invalid_string,
						validation: { includes: check.value, position: check.position },
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === "toLowerCase") {
				input.data = input.data.toLowerCase();
			} else if (check.kind === "toUpperCase") {
				input.data = input.data.toUpperCase();
			} else if (check.kind === "startsWith") {
				if (!input.data.startsWith(check.value)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode.invalid_string,
						validation: { startsWith: check.value },
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === "endsWith") {
				if (!input.data.endsWith(check.value)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode.invalid_string,
						validation: { endsWith: check.value },
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === "datetime") {
				const regex = datetimeRegex(check);
				if (!regex.test(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode.invalid_string,
						validation: "datetime",
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === "ip") {
				if (!isValidIP(input.data, check.version)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						validation: "ip",
						code: ZodIssueCode.invalid_string,
						message: check.message,
					});
					status.dirty();
				}
			} else {
				util.assertNever(check);
			}
		}
		return { status: status.value, value: input.data };
	}
	_regex(regex, validation, message) {
		return this.refinement((data) => regex.test(data), {
			validation,
			code: ZodIssueCode.invalid_string,
			...errorUtil.errToObj(message),
		});
	}
	_addCheck(check) {
		return new ZodString({
			...this._def,
			checks: [...this._def.checks, check],
		});
	}
	email(message) {
		return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
	}
	url(message) {
		return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
	}
	emoji(message) {
		return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
	}
	uuid(message) {
		return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
	}
	cuid(message) {
		return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
	}
	cuid2(message) {
		return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
	}
	ulid(message) {
		return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
	}
	ip(options) {
		return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
	}
	datetime(options) {
		var _a;
		if (typeof options === "string") {
			return this._addCheck({
				kind: "datetime",
				precision: null,
				offset: false,
				message: options,
			});
		}
		return this._addCheck({
			kind: "datetime",
			precision:
				typeof (options === null || options === void 0
					? void 0
					: options.precision) === "undefined"
					? null
					: options === null || options === void 0
					  ? void 0
					  : options.precision,
			offset:
				(_a =
					options === null || options === void 0 ? void 0 : options.offset) !==
					null && _a !== void 0
					? _a
					: false,
			...errorUtil.errToObj(
				options === null || options === void 0 ? void 0 : options.message,
			),
		});
	}
	regex(regex, message) {
		return this._addCheck({
			kind: "regex",
			regex,
			...errorUtil.errToObj(message),
		});
	}
	includes(value, options) {
		return this._addCheck({
			kind: "includes",
			value,
			position:
				options === null || options === void 0 ? void 0 : options.position,
			...errorUtil.errToObj(
				options === null || options === void 0 ? void 0 : options.message,
			),
		});
	}
	startsWith(value, message) {
		return this._addCheck({
			kind: "startsWith",
			value,
			...errorUtil.errToObj(message),
		});
	}
	endsWith(value, message) {
		return this._addCheck({
			kind: "endsWith",
			value,
			...errorUtil.errToObj(message),
		});
	}
	min(minLength, message) {
		return this._addCheck({
			kind: "min",
			value: minLength,
			...errorUtil.errToObj(message),
		});
	}
	max(maxLength, message) {
		return this._addCheck({
			kind: "max",
			value: maxLength,
			...errorUtil.errToObj(message),
		});
	}
	length(len, message) {
		return this._addCheck({
			kind: "length",
			value: len,
			...errorUtil.errToObj(message),
		});
	}
	/**
	 * @deprecated Use z.string().min(1) instead.
	 * @see {@link ZodString.min}
	 */
	nonempty(message) {
		return this.min(1, errorUtil.errToObj(message));
	}
	trim() {
		return new ZodString({
			...this._def,
			checks: [...this._def.checks, { kind: "trim" }],
		});
	}
	toLowerCase() {
		return new ZodString({
			...this._def,
			checks: [...this._def.checks, { kind: "toLowerCase" }],
		});
	}
	toUpperCase() {
		return new ZodString({
			...this._def,
			checks: [...this._def.checks, { kind: "toUpperCase" }],
		});
	}
	get isDatetime() {
		return !!this._def.checks.find((ch) => ch.kind === "datetime");
	}
	get isEmail() {
		return !!this._def.checks.find((ch) => ch.kind === "email");
	}
	get isURL() {
		return !!this._def.checks.find((ch) => ch.kind === "url");
	}
	get isEmoji() {
		return !!this._def.checks.find((ch) => ch.kind === "emoji");
	}
	get isUUID() {
		return !!this._def.checks.find((ch) => ch.kind === "uuid");
	}
	get isCUID() {
		return !!this._def.checks.find((ch) => ch.kind === "cuid");
	}
	get isCUID2() {
		return !!this._def.checks.find((ch) => ch.kind === "cuid2");
	}
	get isULID() {
		return !!this._def.checks.find((ch) => ch.kind === "ulid");
	}
	get isIP() {
		return !!this._def.checks.find((ch) => ch.kind === "ip");
	}
	get minLength() {
		let min = null;
		for (const ch of this._def.checks) {
			if (ch.kind === "min") {
				if (min === null || ch.value > min) min = ch.value;
			}
		}
		return min;
	}
	get maxLength() {
		let max = null;
		for (const ch of this._def.checks) {
			if (ch.kind === "max") {
				if (max === null || ch.value < max) max = ch.value;
			}
		}
		return max;
	}
};
__name(ZodString, "ZodString");
ZodString.create = (params) => {
	var _a;
	return new ZodString({
		checks: [],
		typeName: ZodFirstPartyTypeKind.ZodString,
		coerce:
			(_a = params === null || params === void 0 ? void 0 : params.coerce) !==
				null && _a !== void 0
				? _a
				: false,
		...processCreateParams(params),
	});
};
function floatSafeRemainder(val, step) {
	const valDecCount = (val.toString().split(".")[1] || "").length;
	const stepDecCount = (step.toString().split(".")[1] || "").length;
	const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
	const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
	const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
	return (valInt % stepInt) / Math.pow(10, decCount);
}
__name(floatSafeRemainder, "floatSafeRemainder");
var ZodNumber = class extends ZodType {
	constructor() {
		super(...arguments);
		this.min = this.gte;
		this.max = this.lte;
		this.step = this.multipleOf;
	}
	_parse(input) {
		if (this._def.coerce) {
			input.data = Number(input.data);
		}
		const parsedType = this._getType(input);
		if (parsedType !== ZodParsedType.number) {
			const ctx2 = this._getOrReturnCtx(input);
			addIssueToContext(ctx2, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.number,
				received: ctx2.parsedType,
			});
			return INVALID;
		}
		let ctx = void 0;
		const status = new ParseStatus();
		for (const check of this._def.checks) {
			if (check.kind === "int") {
				if (!util.isInteger(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode.invalid_type,
						expected: "integer",
						received: "float",
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === "min") {
				const tooSmall = check.inclusive
					? input.data < check.value
					: input.data <= check.value;
				if (tooSmall) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode.too_small,
						minimum: check.value,
						type: "number",
						inclusive: check.inclusive,
						exact: false,
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === "max") {
				const tooBig = check.inclusive
					? input.data > check.value
					: input.data >= check.value;
				if (tooBig) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode.too_big,
						maximum: check.value,
						type: "number",
						inclusive: check.inclusive,
						exact: false,
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === "multipleOf") {
				if (floatSafeRemainder(input.data, check.value) !== 0) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode.not_multiple_of,
						multipleOf: check.value,
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === "finite") {
				if (!Number.isFinite(input.data)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode.not_finite,
						message: check.message,
					});
					status.dirty();
				}
			} else {
				util.assertNever(check);
			}
		}
		return { status: status.value, value: input.data };
	}
	gte(value, message) {
		return this.setLimit("min", value, true, errorUtil.toString(message));
	}
	gt(value, message) {
		return this.setLimit("min", value, false, errorUtil.toString(message));
	}
	lte(value, message) {
		return this.setLimit("max", value, true, errorUtil.toString(message));
	}
	lt(value, message) {
		return this.setLimit("max", value, false, errorUtil.toString(message));
	}
	setLimit(kind, value, inclusive, message) {
		return new ZodNumber({
			...this._def,
			checks: [
				...this._def.checks,
				{
					kind,
					value,
					inclusive,
					message: errorUtil.toString(message),
				},
			],
		});
	}
	_addCheck(check) {
		return new ZodNumber({
			...this._def,
			checks: [...this._def.checks, check],
		});
	}
	int(message) {
		return this._addCheck({
			kind: "int",
			message: errorUtil.toString(message),
		});
	}
	positive(message) {
		return this._addCheck({
			kind: "min",
			value: 0,
			inclusive: false,
			message: errorUtil.toString(message),
		});
	}
	negative(message) {
		return this._addCheck({
			kind: "max",
			value: 0,
			inclusive: false,
			message: errorUtil.toString(message),
		});
	}
	nonpositive(message) {
		return this._addCheck({
			kind: "max",
			value: 0,
			inclusive: true,
			message: errorUtil.toString(message),
		});
	}
	nonnegative(message) {
		return this._addCheck({
			kind: "min",
			value: 0,
			inclusive: true,
			message: errorUtil.toString(message),
		});
	}
	multipleOf(value, message) {
		return this._addCheck({
			kind: "multipleOf",
			value,
			message: errorUtil.toString(message),
		});
	}
	finite(message) {
		return this._addCheck({
			kind: "finite",
			message: errorUtil.toString(message),
		});
	}
	safe(message) {
		return this._addCheck({
			kind: "min",
			inclusive: true,
			value: Number.MIN_SAFE_INTEGER,
			message: errorUtil.toString(message),
		})._addCheck({
			kind: "max",
			inclusive: true,
			value: Number.MAX_SAFE_INTEGER,
			message: errorUtil.toString(message),
		});
	}
	get minValue() {
		let min = null;
		for (const ch of this._def.checks) {
			if (ch.kind === "min") {
				if (min === null || ch.value > min) min = ch.value;
			}
		}
		return min;
	}
	get maxValue() {
		let max = null;
		for (const ch of this._def.checks) {
			if (ch.kind === "max") {
				if (max === null || ch.value < max) max = ch.value;
			}
		}
		return max;
	}
	get isInt() {
		return !!this._def.checks.find(
			(ch) =>
				ch.kind === "int" ||
				(ch.kind === "multipleOf" && util.isInteger(ch.value)),
		);
	}
	get isFinite() {
		let max = null,
			min = null;
		for (const ch of this._def.checks) {
			if (
				ch.kind === "finite" ||
				ch.kind === "int" ||
				ch.kind === "multipleOf"
			) {
				return true;
			} else if (ch.kind === "min") {
				if (min === null || ch.value > min) min = ch.value;
			} else if (ch.kind === "max") {
				if (max === null || ch.value < max) max = ch.value;
			}
		}
		return Number.isFinite(min) && Number.isFinite(max);
	}
};
__name(ZodNumber, "ZodNumber");
ZodNumber.create = (params) => {
	return new ZodNumber({
		checks: [],
		typeName: ZodFirstPartyTypeKind.ZodNumber,
		coerce:
			(params === null || params === void 0 ? void 0 : params.coerce) || false,
		...processCreateParams(params),
	});
};
var ZodBigInt = class extends ZodType {
	constructor() {
		super(...arguments);
		this.min = this.gte;
		this.max = this.lte;
	}
	_parse(input) {
		if (this._def.coerce) {
			input.data = BigInt(input.data);
		}
		const parsedType = this._getType(input);
		if (parsedType !== ZodParsedType.bigint) {
			const ctx2 = this._getOrReturnCtx(input);
			addIssueToContext(ctx2, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.bigint,
				received: ctx2.parsedType,
			});
			return INVALID;
		}
		let ctx = void 0;
		const status = new ParseStatus();
		for (const check of this._def.checks) {
			if (check.kind === "min") {
				const tooSmall = check.inclusive
					? input.data < check.value
					: input.data <= check.value;
				if (tooSmall) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode.too_small,
						type: "bigint",
						minimum: check.value,
						inclusive: check.inclusive,
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === "max") {
				const tooBig = check.inclusive
					? input.data > check.value
					: input.data >= check.value;
				if (tooBig) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode.too_big,
						type: "bigint",
						maximum: check.value,
						inclusive: check.inclusive,
						message: check.message,
					});
					status.dirty();
				}
			} else if (check.kind === "multipleOf") {
				if (input.data % check.value !== BigInt(0)) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode.not_multiple_of,
						multipleOf: check.value,
						message: check.message,
					});
					status.dirty();
				}
			} else {
				util.assertNever(check);
			}
		}
		return { status: status.value, value: input.data };
	}
	gte(value, message) {
		return this.setLimit("min", value, true, errorUtil.toString(message));
	}
	gt(value, message) {
		return this.setLimit("min", value, false, errorUtil.toString(message));
	}
	lte(value, message) {
		return this.setLimit("max", value, true, errorUtil.toString(message));
	}
	lt(value, message) {
		return this.setLimit("max", value, false, errorUtil.toString(message));
	}
	setLimit(kind, value, inclusive, message) {
		return new ZodBigInt({
			...this._def,
			checks: [
				...this._def.checks,
				{
					kind,
					value,
					inclusive,
					message: errorUtil.toString(message),
				},
			],
		});
	}
	_addCheck(check) {
		return new ZodBigInt({
			...this._def,
			checks: [...this._def.checks, check],
		});
	}
	positive(message) {
		return this._addCheck({
			kind: "min",
			value: BigInt(0),
			inclusive: false,
			message: errorUtil.toString(message),
		});
	}
	negative(message) {
		return this._addCheck({
			kind: "max",
			value: BigInt(0),
			inclusive: false,
			message: errorUtil.toString(message),
		});
	}
	nonpositive(message) {
		return this._addCheck({
			kind: "max",
			value: BigInt(0),
			inclusive: true,
			message: errorUtil.toString(message),
		});
	}
	nonnegative(message) {
		return this._addCheck({
			kind: "min",
			value: BigInt(0),
			inclusive: true,
			message: errorUtil.toString(message),
		});
	}
	multipleOf(value, message) {
		return this._addCheck({
			kind: "multipleOf",
			value,
			message: errorUtil.toString(message),
		});
	}
	get minValue() {
		let min = null;
		for (const ch of this._def.checks) {
			if (ch.kind === "min") {
				if (min === null || ch.value > min) min = ch.value;
			}
		}
		return min;
	}
	get maxValue() {
		let max = null;
		for (const ch of this._def.checks) {
			if (ch.kind === "max") {
				if (max === null || ch.value < max) max = ch.value;
			}
		}
		return max;
	}
};
__name(ZodBigInt, "ZodBigInt");
ZodBigInt.create = (params) => {
	var _a;
	return new ZodBigInt({
		checks: [],
		typeName: ZodFirstPartyTypeKind.ZodBigInt,
		coerce:
			(_a = params === null || params === void 0 ? void 0 : params.coerce) !==
				null && _a !== void 0
				? _a
				: false,
		...processCreateParams(params),
	});
};
var ZodBoolean = class extends ZodType {
	_parse(input) {
		if (this._def.coerce) {
			input.data = Boolean(input.data);
		}
		const parsedType = this._getType(input);
		if (parsedType !== ZodParsedType.boolean) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.boolean,
				received: ctx.parsedType,
			});
			return INVALID;
		}
		return OK(input.data);
	}
};
__name(ZodBoolean, "ZodBoolean");
ZodBoolean.create = (params) => {
	return new ZodBoolean({
		typeName: ZodFirstPartyTypeKind.ZodBoolean,
		coerce:
			(params === null || params === void 0 ? void 0 : params.coerce) || false,
		...processCreateParams(params),
	});
};
var ZodDate = class extends ZodType {
	_parse(input) {
		if (this._def.coerce) {
			input.data = new Date(input.data);
		}
		const parsedType = this._getType(input);
		if (parsedType !== ZodParsedType.date) {
			const ctx2 = this._getOrReturnCtx(input);
			addIssueToContext(ctx2, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.date,
				received: ctx2.parsedType,
			});
			return INVALID;
		}
		if (isNaN(input.data.getTime())) {
			const ctx2 = this._getOrReturnCtx(input);
			addIssueToContext(ctx2, {
				code: ZodIssueCode.invalid_date,
			});
			return INVALID;
		}
		const status = new ParseStatus();
		let ctx = void 0;
		for (const check of this._def.checks) {
			if (check.kind === "min") {
				if (input.data.getTime() < check.value) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode.too_small,
						message: check.message,
						inclusive: true,
						exact: false,
						minimum: check.value,
						type: "date",
					});
					status.dirty();
				}
			} else if (check.kind === "max") {
				if (input.data.getTime() > check.value) {
					ctx = this._getOrReturnCtx(input, ctx);
					addIssueToContext(ctx, {
						code: ZodIssueCode.too_big,
						message: check.message,
						inclusive: true,
						exact: false,
						maximum: check.value,
						type: "date",
					});
					status.dirty();
				}
			} else {
				util.assertNever(check);
			}
		}
		return {
			status: status.value,
			value: new Date(input.data.getTime()),
		};
	}
	_addCheck(check) {
		return new ZodDate({
			...this._def,
			checks: [...this._def.checks, check],
		});
	}
	min(minDate, message) {
		return this._addCheck({
			kind: "min",
			value: minDate.getTime(),
			message: errorUtil.toString(message),
		});
	}
	max(maxDate, message) {
		return this._addCheck({
			kind: "max",
			value: maxDate.getTime(),
			message: errorUtil.toString(message),
		});
	}
	get minDate() {
		let min = null;
		for (const ch of this._def.checks) {
			if (ch.kind === "min") {
				if (min === null || ch.value > min) min = ch.value;
			}
		}
		return min != null ? new Date(min) : null;
	}
	get maxDate() {
		let max = null;
		for (const ch of this._def.checks) {
			if (ch.kind === "max") {
				if (max === null || ch.value < max) max = ch.value;
			}
		}
		return max != null ? new Date(max) : null;
	}
};
__name(ZodDate, "ZodDate");
ZodDate.create = (params) => {
	return new ZodDate({
		checks: [],
		coerce:
			(params === null || params === void 0 ? void 0 : params.coerce) || false,
		typeName: ZodFirstPartyTypeKind.ZodDate,
		...processCreateParams(params),
	});
};
var ZodSymbol = class extends ZodType {
	_parse(input) {
		const parsedType = this._getType(input);
		if (parsedType !== ZodParsedType.symbol) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.symbol,
				received: ctx.parsedType,
			});
			return INVALID;
		}
		return OK(input.data);
	}
};
__name(ZodSymbol, "ZodSymbol");
ZodSymbol.create = (params) => {
	return new ZodSymbol({
		typeName: ZodFirstPartyTypeKind.ZodSymbol,
		...processCreateParams(params),
	});
};
var ZodUndefined = class extends ZodType {
	_parse(input) {
		const parsedType = this._getType(input);
		if (parsedType !== ZodParsedType.undefined) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.undefined,
				received: ctx.parsedType,
			});
			return INVALID;
		}
		return OK(input.data);
	}
};
__name(ZodUndefined, "ZodUndefined");
ZodUndefined.create = (params) => {
	return new ZodUndefined({
		typeName: ZodFirstPartyTypeKind.ZodUndefined,
		...processCreateParams(params),
	});
};
var ZodNull = class extends ZodType {
	_parse(input) {
		const parsedType = this._getType(input);
		if (parsedType !== ZodParsedType.null) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.null,
				received: ctx.parsedType,
			});
			return INVALID;
		}
		return OK(input.data);
	}
};
__name(ZodNull, "ZodNull");
ZodNull.create = (params) => {
	return new ZodNull({
		typeName: ZodFirstPartyTypeKind.ZodNull,
		...processCreateParams(params),
	});
};
var ZodAny = class extends ZodType {
	constructor() {
		super(...arguments);
		this._any = true;
	}
	_parse(input) {
		return OK(input.data);
	}
};
__name(ZodAny, "ZodAny");
ZodAny.create = (params) => {
	return new ZodAny({
		typeName: ZodFirstPartyTypeKind.ZodAny,
		...processCreateParams(params),
	});
};
var ZodUnknown = class extends ZodType {
	constructor() {
		super(...arguments);
		this._unknown = true;
	}
	_parse(input) {
		return OK(input.data);
	}
};
__name(ZodUnknown, "ZodUnknown");
ZodUnknown.create = (params) => {
	return new ZodUnknown({
		typeName: ZodFirstPartyTypeKind.ZodUnknown,
		...processCreateParams(params),
	});
};
var ZodNever = class extends ZodType {
	_parse(input) {
		const ctx = this._getOrReturnCtx(input);
		addIssueToContext(ctx, {
			code: ZodIssueCode.invalid_type,
			expected: ZodParsedType.never,
			received: ctx.parsedType,
		});
		return INVALID;
	}
};
__name(ZodNever, "ZodNever");
ZodNever.create = (params) => {
	return new ZodNever({
		typeName: ZodFirstPartyTypeKind.ZodNever,
		...processCreateParams(params),
	});
};
var ZodVoid = class extends ZodType {
	_parse(input) {
		const parsedType = this._getType(input);
		if (parsedType !== ZodParsedType.undefined) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.void,
				received: ctx.parsedType,
			});
			return INVALID;
		}
		return OK(input.data);
	}
};
__name(ZodVoid, "ZodVoid");
ZodVoid.create = (params) => {
	return new ZodVoid({
		typeName: ZodFirstPartyTypeKind.ZodVoid,
		...processCreateParams(params),
	});
};
var ZodArray = class extends ZodType {
	_parse(input) {
		const { ctx, status } = this._processInputParams(input);
		const def = this._def;
		if (ctx.parsedType !== ZodParsedType.array) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.array,
				received: ctx.parsedType,
			});
			return INVALID;
		}
		if (def.exactLength !== null) {
			const tooBig = ctx.data.length > def.exactLength.value;
			const tooSmall = ctx.data.length < def.exactLength.value;
			if (tooBig || tooSmall) {
				addIssueToContext(ctx, {
					code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
					minimum: tooSmall ? def.exactLength.value : void 0,
					maximum: tooBig ? def.exactLength.value : void 0,
					type: "array",
					inclusive: true,
					exact: true,
					message: def.exactLength.message,
				});
				status.dirty();
			}
		}
		if (def.minLength !== null) {
			if (ctx.data.length < def.minLength.value) {
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_small,
					minimum: def.minLength.value,
					type: "array",
					inclusive: true,
					exact: false,
					message: def.minLength.message,
				});
				status.dirty();
			}
		}
		if (def.maxLength !== null) {
			if (ctx.data.length > def.maxLength.value) {
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_big,
					maximum: def.maxLength.value,
					type: "array",
					inclusive: true,
					exact: false,
					message: def.maxLength.message,
				});
				status.dirty();
			}
		}
		if (ctx.common.async) {
			return Promise.all(
				[...ctx.data].map((item, i) => {
					return def.type._parseAsync(
						new ParseInputLazyPath(ctx, item, ctx.path, i),
					);
				}),
			).then((result2) => {
				return ParseStatus.mergeArray(status, result2);
			});
		}
		const result = [...ctx.data].map((item, i) => {
			return def.type._parseSync(
				new ParseInputLazyPath(ctx, item, ctx.path, i),
			);
		});
		return ParseStatus.mergeArray(status, result);
	}
	get element() {
		return this._def.type;
	}
	min(minLength, message) {
		return new ZodArray({
			...this._def,
			minLength: { value: minLength, message: errorUtil.toString(message) },
		});
	}
	max(maxLength, message) {
		return new ZodArray({
			...this._def,
			maxLength: { value: maxLength, message: errorUtil.toString(message) },
		});
	}
	length(len, message) {
		return new ZodArray({
			...this._def,
			exactLength: { value: len, message: errorUtil.toString(message) },
		});
	}
	nonempty(message) {
		return this.min(1, message);
	}
};
__name(ZodArray, "ZodArray");
ZodArray.create = (schema, params) => {
	return new ZodArray({
		type: schema,
		minLength: null,
		maxLength: null,
		exactLength: null,
		typeName: ZodFirstPartyTypeKind.ZodArray,
		...processCreateParams(params),
	});
};
function deepPartialify(schema) {
	if (schema instanceof ZodObject) {
		const newShape = {};
		for (const key in schema.shape) {
			const fieldSchema = schema.shape[key];
			newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
		}
		return new ZodObject({
			...schema._def,
			shape: () => newShape,
		});
	} else if (schema instanceof ZodArray) {
		return new ZodArray({
			...schema._def,
			type: deepPartialify(schema.element),
		});
	} else if (schema instanceof ZodOptional) {
		return ZodOptional.create(deepPartialify(schema.unwrap()));
	} else if (schema instanceof ZodNullable) {
		return ZodNullable.create(deepPartialify(schema.unwrap()));
	} else if (schema instanceof ZodTuple) {
		return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
	} else {
		return schema;
	}
}
__name(deepPartialify, "deepPartialify");
var ZodObject = class extends ZodType {
	constructor() {
		super(...arguments);
		this._cached = null;
		this.nonstrict = this.passthrough;
		this.augment = this.extend;
	}
	_getCached() {
		if (this._cached !== null) return this._cached;
		const shape = this._def.shape();
		const keys = util.objectKeys(shape);
		return (this._cached = { shape, keys });
	}
	_parse(input) {
		const parsedType = this._getType(input);
		if (parsedType !== ZodParsedType.object) {
			const ctx2 = this._getOrReturnCtx(input);
			addIssueToContext(ctx2, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.object,
				received: ctx2.parsedType,
			});
			return INVALID;
		}
		const { status, ctx } = this._processInputParams(input);
		const { shape, keys: shapeKeys } = this._getCached();
		const extraKeys = [];
		if (
			!(
				this._def.catchall instanceof ZodNever &&
				this._def.unknownKeys === "strip"
			)
		) {
			for (const key in ctx.data) {
				if (!shapeKeys.includes(key)) {
					extraKeys.push(key);
				}
			}
		}
		const pairs = [];
		for (const key of shapeKeys) {
			const keyValidator = shape[key];
			const value = ctx.data[key];
			pairs.push({
				key: { status: "valid", value: key },
				value: keyValidator._parse(
					new ParseInputLazyPath(ctx, value, ctx.path, key),
				),
				alwaysSet: key in ctx.data,
			});
		}
		if (this._def.catchall instanceof ZodNever) {
			const unknownKeys = this._def.unknownKeys;
			if (unknownKeys === "passthrough") {
				for (const key of extraKeys) {
					pairs.push({
						key: { status: "valid", value: key },
						value: { status: "valid", value: ctx.data[key] },
					});
				}
			} else if (unknownKeys === "strict") {
				if (extraKeys.length > 0) {
					addIssueToContext(ctx, {
						code: ZodIssueCode.unrecognized_keys,
						keys: extraKeys,
					});
					status.dirty();
				}
			} else if (unknownKeys === "strip");
			else {
				throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
			}
		} else {
			const catchall = this._def.catchall;
			for (const key of extraKeys) {
				const value = ctx.data[key];
				pairs.push({
					key: { status: "valid", value: key },
					value: catchall._parse(
						new ParseInputLazyPath(ctx, value, ctx.path, key),
						//, ctx.child(key), value, getParsedType(value)
					),
					alwaysSet: key in ctx.data,
				});
			}
		}
		if (ctx.common.async) {
			return Promise.resolve()
				.then(async () => {
					const syncPairs = [];
					for (const pair of pairs) {
						const key = await pair.key;
						syncPairs.push({
							key,
							value: await pair.value,
							alwaysSet: pair.alwaysSet,
						});
					}
					return syncPairs;
				})
				.then((syncPairs) => {
					return ParseStatus.mergeObjectSync(status, syncPairs);
				});
		} else {
			return ParseStatus.mergeObjectSync(status, pairs);
		}
	}
	get shape() {
		return this._def.shape();
	}
	strict(message) {
		errorUtil.errToObj;
		return new ZodObject({
			...this._def,
			unknownKeys: "strict",
			...(message !== void 0
				? {
						errorMap: (issue, ctx) => {
							var _a, _b, _c, _d;
							const defaultError =
								(_c =
									(_b = (_a = this._def).errorMap) === null || _b === void 0
										? void 0
										: _b.call(_a, issue, ctx).message) !== null && _c !== void 0
									? _c
									: ctx.defaultError;
							if (issue.code === "unrecognized_keys")
								return {
									message:
										(_d = errorUtil.errToObj(message).message) !== null &&
										_d !== void 0
											? _d
											: defaultError,
								};
							return {
								message: defaultError,
							};
						},
				  }
				: {}),
		});
	}
	strip() {
		return new ZodObject({
			...this._def,
			unknownKeys: "strip",
		});
	}
	passthrough() {
		return new ZodObject({
			...this._def,
			unknownKeys: "passthrough",
		});
	}
	// const AugmentFactory =
	//   <Def extends ZodObjectDef>(def: Def) =>
	//   <Augmentation extends ZodRawShape>(
	//     augmentation: Augmentation
	//   ): ZodObject<
	//     extendShape<ReturnType<Def["shape"]>, Augmentation>,
	//     Def["unknownKeys"],
	//     Def["catchall"]
	//   > => {
	//     return new ZodObject({
	//       ...def,
	//       shape: () => ({
	//         ...def.shape(),
	//         ...augmentation,
	//       }),
	//     }) as any;
	//   };
	extend(augmentation) {
		return new ZodObject({
			...this._def,
			shape: () => ({
				...this._def.shape(),
				...augmentation,
			}),
		});
	}
	/**
	 * Prior to zod@1.0.12 there was a bug in the
	 * inferred type of merged objects. Please
	 * upgrade if you are experiencing issues.
	 */
	merge(merging) {
		const merged = new ZodObject({
			unknownKeys: merging._def.unknownKeys,
			catchall: merging._def.catchall,
			shape: () => ({
				...this._def.shape(),
				...merging._def.shape(),
			}),
			typeName: ZodFirstPartyTypeKind.ZodObject,
		});
		return merged;
	}
	// merge<
	//   Incoming extends AnyZodObject,
	//   Augmentation extends Incoming["shape"],
	//   NewOutput extends {
	//     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
	//       ? Augmentation[k]["_output"]
	//       : k extends keyof Output
	//       ? Output[k]
	//       : never;
	//   },
	//   NewInput extends {
	//     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
	//       ? Augmentation[k]["_input"]
	//       : k extends keyof Input
	//       ? Input[k]
	//       : never;
	//   }
	// >(
	//   merging: Incoming
	// ): ZodObject<
	//   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
	//   Incoming["_def"]["unknownKeys"],
	//   Incoming["_def"]["catchall"],
	//   NewOutput,
	//   NewInput
	// > {
	//   const merged: any = new ZodObject({
	//     unknownKeys: merging._def.unknownKeys,
	//     catchall: merging._def.catchall,
	//     shape: () =>
	//       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
	//     typeName: ZodFirstPartyTypeKind.ZodObject,
	//   }) as any;
	//   return merged;
	// }
	setKey(key, schema) {
		return this.augment({ [key]: schema });
	}
	// merge<Incoming extends AnyZodObject>(
	//   merging: Incoming
	// ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
	// ZodObject<
	//   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
	//   Incoming["_def"]["unknownKeys"],
	//   Incoming["_def"]["catchall"]
	// > {
	//   // const mergedShape = objectUtil.mergeShapes(
	//   //   this._def.shape(),
	//   //   merging._def.shape()
	//   // );
	//   const merged: any = new ZodObject({
	//     unknownKeys: merging._def.unknownKeys,
	//     catchall: merging._def.catchall,
	//     shape: () =>
	//       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
	//     typeName: ZodFirstPartyTypeKind.ZodObject,
	//   }) as any;
	//   return merged;
	// }
	catchall(index) {
		return new ZodObject({
			...this._def,
			catchall: index,
		});
	}
	pick(mask) {
		const shape = {};
		util.objectKeys(mask).forEach((key) => {
			if (mask[key] && this.shape[key]) {
				shape[key] = this.shape[key];
			}
		});
		return new ZodObject({
			...this._def,
			shape: () => shape,
		});
	}
	omit(mask) {
		const shape = {};
		util.objectKeys(this.shape).forEach((key) => {
			if (!mask[key]) {
				shape[key] = this.shape[key];
			}
		});
		return new ZodObject({
			...this._def,
			shape: () => shape,
		});
	}
	/**
	 * @deprecated
	 */
	deepPartial() {
		return deepPartialify(this);
	}
	partial(mask) {
		const newShape = {};
		util.objectKeys(this.shape).forEach((key) => {
			const fieldSchema = this.shape[key];
			if (mask && !mask[key]) {
				newShape[key] = fieldSchema;
			} else {
				newShape[key] = fieldSchema.optional();
			}
		});
		return new ZodObject({
			...this._def,
			shape: () => newShape,
		});
	}
	required(mask) {
		const newShape = {};
		util.objectKeys(this.shape).forEach((key) => {
			if (mask && !mask[key]) {
				newShape[key] = this.shape[key];
			} else {
				const fieldSchema = this.shape[key];
				let newField = fieldSchema;
				while (newField instanceof ZodOptional) {
					newField = newField._def.innerType;
				}
				newShape[key] = newField;
			}
		});
		return new ZodObject({
			...this._def,
			shape: () => newShape,
		});
	}
	keyof() {
		return createZodEnum(util.objectKeys(this.shape));
	}
};
__name(ZodObject, "ZodObject");
ZodObject.create = (shape, params) => {
	return new ZodObject({
		shape: () => shape,
		unknownKeys: "strip",
		catchall: ZodNever.create(),
		typeName: ZodFirstPartyTypeKind.ZodObject,
		...processCreateParams(params),
	});
};
ZodObject.strictCreate = (shape, params) => {
	return new ZodObject({
		shape: () => shape,
		unknownKeys: "strict",
		catchall: ZodNever.create(),
		typeName: ZodFirstPartyTypeKind.ZodObject,
		...processCreateParams(params),
	});
};
ZodObject.lazycreate = (shape, params) => {
	return new ZodObject({
		shape,
		unknownKeys: "strip",
		catchall: ZodNever.create(),
		typeName: ZodFirstPartyTypeKind.ZodObject,
		...processCreateParams(params),
	});
};
var ZodUnion = class extends ZodType {
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		const options = this._def.options;
		function handleResults(results) {
			for (const result of results) {
				if (result.result.status === "valid") {
					return result.result;
				}
			}
			for (const result of results) {
				if (result.result.status === "dirty") {
					ctx.common.issues.push(...result.ctx.common.issues);
					return result.result;
				}
			}
			const unionErrors = results.map(
				(result) => new ZodError(result.ctx.common.issues),
			);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_union,
				unionErrors,
			});
			return INVALID;
		}
		__name(handleResults, "handleResults");
		if (ctx.common.async) {
			return Promise.all(
				options.map(async (option) => {
					const childCtx = {
						...ctx,
						common: {
							...ctx.common,
							issues: [],
						},
						parent: null,
					};
					return {
						result: await option._parseAsync({
							data: ctx.data,
							path: ctx.path,
							parent: childCtx,
						}),
						ctx: childCtx,
					};
				}),
			).then(handleResults);
		} else {
			let dirty = void 0;
			const issues = [];
			for (const option of options) {
				const childCtx = {
					...ctx,
					common: {
						...ctx.common,
						issues: [],
					},
					parent: null,
				};
				const result = option._parseSync({
					data: ctx.data,
					path: ctx.path,
					parent: childCtx,
				});
				if (result.status === "valid") {
					return result;
				} else if (result.status === "dirty" && !dirty) {
					dirty = { result, ctx: childCtx };
				}
				if (childCtx.common.issues.length) {
					issues.push(childCtx.common.issues);
				}
			}
			if (dirty) {
				ctx.common.issues.push(...dirty.ctx.common.issues);
				return dirty.result;
			}
			const unionErrors = issues.map((issues2) => new ZodError(issues2));
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_union,
				unionErrors,
			});
			return INVALID;
		}
	}
	get options() {
		return this._def.options;
	}
};
__name(ZodUnion, "ZodUnion");
ZodUnion.create = (types, params) => {
	return new ZodUnion({
		options: types,
		typeName: ZodFirstPartyTypeKind.ZodUnion,
		...processCreateParams(params),
	});
};
var getDiscriminator = /* @__PURE__ */ __name((type) => {
	if (type instanceof ZodLazy) {
		return getDiscriminator(type.schema);
	} else if (type instanceof ZodEffects) {
		return getDiscriminator(type.innerType());
	} else if (type instanceof ZodLiteral) {
		return [type.value];
	} else if (type instanceof ZodEnum) {
		return type.options;
	} else if (type instanceof ZodNativeEnum) {
		return Object.keys(type.enum);
	} else if (type instanceof ZodDefault) {
		return getDiscriminator(type._def.innerType);
	} else if (type instanceof ZodUndefined) {
		return [void 0];
	} else if (type instanceof ZodNull) {
		return [null];
	} else {
		return null;
	}
}, "getDiscriminator");
var ZodDiscriminatedUnion = class extends ZodType {
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.object) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.object,
				received: ctx.parsedType,
			});
			return INVALID;
		}
		const discriminator = this.discriminator;
		const discriminatorValue = ctx.data[discriminator];
		const option = this.optionsMap.get(discriminatorValue);
		if (!option) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_union_discriminator,
				options: Array.from(this.optionsMap.keys()),
				path: [discriminator],
			});
			return INVALID;
		}
		if (ctx.common.async) {
			return option._parseAsync({
				data: ctx.data,
				path: ctx.path,
				parent: ctx,
			});
		} else {
			return option._parseSync({
				data: ctx.data,
				path: ctx.path,
				parent: ctx,
			});
		}
	}
	get discriminator() {
		return this._def.discriminator;
	}
	get options() {
		return this._def.options;
	}
	get optionsMap() {
		return this._def.optionsMap;
	}
	/**
	 * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
	 * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
	 * have a different value for each object in the union.
	 * @param discriminator the name of the discriminator property
	 * @param types an array of object schemas
	 * @param params
	 */
	static create(discriminator, options, params) {
		const optionsMap = /* @__PURE__ */ new Map();
		for (const type of options) {
			const discriminatorValues = getDiscriminator(type.shape[discriminator]);
			if (!discriminatorValues) {
				throw new Error(
					`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`,
				);
			}
			for (const value of discriminatorValues) {
				if (optionsMap.has(value)) {
					throw new Error(
						`Discriminator property ${String(
							discriminator,
						)} has duplicate value ${String(value)}`,
					);
				}
				optionsMap.set(value, type);
			}
		}
		return new ZodDiscriminatedUnion({
			typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
			discriminator,
			options,
			optionsMap,
			...processCreateParams(params),
		});
	}
};
__name(ZodDiscriminatedUnion, "ZodDiscriminatedUnion");
function mergeValues(a, b) {
	const aType = getParsedType(a);
	const bType = getParsedType(b);
	if (a === b) {
		return { valid: true, data: a };
	} else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
		const bKeys = util.objectKeys(b);
		const sharedKeys = util
			.objectKeys(a)
			.filter((key) => bKeys.indexOf(key) !== -1);
		const newObj = { ...a, ...b };
		for (const key of sharedKeys) {
			const sharedValue = mergeValues(a[key], b[key]);
			if (!sharedValue.valid) {
				return { valid: false };
			}
			newObj[key] = sharedValue.data;
		}
		return { valid: true, data: newObj };
	} else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
		if (a.length !== b.length) {
			return { valid: false };
		}
		const newArray = [];
		for (let index = 0; index < a.length; index++) {
			const itemA = a[index];
			const itemB = b[index];
			const sharedValue = mergeValues(itemA, itemB);
			if (!sharedValue.valid) {
				return { valid: false };
			}
			newArray.push(sharedValue.data);
		}
		return { valid: true, data: newArray };
	} else if (
		aType === ZodParsedType.date &&
		bType === ZodParsedType.date &&
		+a === +b
	) {
		return { valid: true, data: a };
	} else {
		return { valid: false };
	}
}
__name(mergeValues, "mergeValues");
var ZodIntersection = class extends ZodType {
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		const handleParsed = /* @__PURE__ */ __name((parsedLeft, parsedRight) => {
			if (isAborted(parsedLeft) || isAborted(parsedRight)) {
				return INVALID;
			}
			const merged = mergeValues(parsedLeft.value, parsedRight.value);
			if (!merged.valid) {
				addIssueToContext(ctx, {
					code: ZodIssueCode.invalid_intersection_types,
				});
				return INVALID;
			}
			if (isDirty(parsedLeft) || isDirty(parsedRight)) {
				status.dirty();
			}
			return { status: status.value, value: merged.data };
		}, "handleParsed");
		if (ctx.common.async) {
			return Promise.all([
				this._def.left._parseAsync({
					data: ctx.data,
					path: ctx.path,
					parent: ctx,
				}),
				this._def.right._parseAsync({
					data: ctx.data,
					path: ctx.path,
					parent: ctx,
				}),
			]).then(([left, right]) => handleParsed(left, right));
		} else {
			return handleParsed(
				this._def.left._parseSync({
					data: ctx.data,
					path: ctx.path,
					parent: ctx,
				}),
				this._def.right._parseSync({
					data: ctx.data,
					path: ctx.path,
					parent: ctx,
				}),
			);
		}
	}
};
__name(ZodIntersection, "ZodIntersection");
ZodIntersection.create = (left, right, params) => {
	return new ZodIntersection({
		left,
		right,
		typeName: ZodFirstPartyTypeKind.ZodIntersection,
		...processCreateParams(params),
	});
};
var ZodTuple = class extends ZodType {
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.array) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.array,
				received: ctx.parsedType,
			});
			return INVALID;
		}
		if (ctx.data.length < this._def.items.length) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.too_small,
				minimum: this._def.items.length,
				inclusive: true,
				exact: false,
				type: "array",
			});
			return INVALID;
		}
		const rest = this._def.rest;
		if (!rest && ctx.data.length > this._def.items.length) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.too_big,
				maximum: this._def.items.length,
				inclusive: true,
				exact: false,
				type: "array",
			});
			status.dirty();
		}
		const items = [...ctx.data]
			.map((item, itemIndex) => {
				const schema = this._def.items[itemIndex] || this._def.rest;
				if (!schema) return null;
				return schema._parse(
					new ParseInputLazyPath(ctx, item, ctx.path, itemIndex),
				);
			})
			.filter((x) => !!x);
		if (ctx.common.async) {
			return Promise.all(items).then((results) => {
				return ParseStatus.mergeArray(status, results);
			});
		} else {
			return ParseStatus.mergeArray(status, items);
		}
	}
	get items() {
		return this._def.items;
	}
	rest(rest) {
		return new ZodTuple({
			...this._def,
			rest,
		});
	}
};
__name(ZodTuple, "ZodTuple");
ZodTuple.create = (schemas, params) => {
	if (!Array.isArray(schemas)) {
		throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
	}
	return new ZodTuple({
		items: schemas,
		typeName: ZodFirstPartyTypeKind.ZodTuple,
		rest: null,
		...processCreateParams(params),
	});
};
var ZodRecord = class extends ZodType {
	get keySchema() {
		return this._def.keyType;
	}
	get valueSchema() {
		return this._def.valueType;
	}
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.object) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.object,
				received: ctx.parsedType,
			});
			return INVALID;
		}
		const pairs = [];
		const keyType = this._def.keyType;
		const valueType = this._def.valueType;
		for (const key in ctx.data) {
			pairs.push({
				key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
				value: valueType._parse(
					new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key),
				),
			});
		}
		if (ctx.common.async) {
			return ParseStatus.mergeObjectAsync(status, pairs);
		} else {
			return ParseStatus.mergeObjectSync(status, pairs);
		}
	}
	get element() {
		return this._def.valueType;
	}
	static create(first, second, third) {
		if (second instanceof ZodType) {
			return new ZodRecord({
				keyType: first,
				valueType: second,
				typeName: ZodFirstPartyTypeKind.ZodRecord,
				...processCreateParams(third),
			});
		}
		return new ZodRecord({
			keyType: ZodString.create(),
			valueType: first,
			typeName: ZodFirstPartyTypeKind.ZodRecord,
			...processCreateParams(second),
		});
	}
};
__name(ZodRecord, "ZodRecord");
var ZodMap = class extends ZodType {
	get keySchema() {
		return this._def.keyType;
	}
	get valueSchema() {
		return this._def.valueType;
	}
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.map) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.map,
				received: ctx.parsedType,
			});
			return INVALID;
		}
		const keyType = this._def.keyType;
		const valueType = this._def.valueType;
		const pairs = [...ctx.data.entries()].map(([key, value], index) => {
			return {
				key: keyType._parse(
					new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"]),
				),
				value: valueType._parse(
					new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]),
				),
			};
		});
		if (ctx.common.async) {
			const finalMap = /* @__PURE__ */ new Map();
			return Promise.resolve().then(async () => {
				for (const pair of pairs) {
					const key = await pair.key;
					const value = await pair.value;
					if (key.status === "aborted" || value.status === "aborted") {
						return INVALID;
					}
					if (key.status === "dirty" || value.status === "dirty") {
						status.dirty();
					}
					finalMap.set(key.value, value.value);
				}
				return { status: status.value, value: finalMap };
			});
		} else {
			const finalMap = /* @__PURE__ */ new Map();
			for (const pair of pairs) {
				const key = pair.key;
				const value = pair.value;
				if (key.status === "aborted" || value.status === "aborted") {
					return INVALID;
				}
				if (key.status === "dirty" || value.status === "dirty") {
					status.dirty();
				}
				finalMap.set(key.value, value.value);
			}
			return { status: status.value, value: finalMap };
		}
	}
};
__name(ZodMap, "ZodMap");
ZodMap.create = (keyType, valueType, params) => {
	return new ZodMap({
		valueType,
		keyType,
		typeName: ZodFirstPartyTypeKind.ZodMap,
		...processCreateParams(params),
	});
};
var ZodSet = class extends ZodType {
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.set) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.set,
				received: ctx.parsedType,
			});
			return INVALID;
		}
		const def = this._def;
		if (def.minSize !== null) {
			if (ctx.data.size < def.minSize.value) {
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_small,
					minimum: def.minSize.value,
					type: "set",
					inclusive: true,
					exact: false,
					message: def.minSize.message,
				});
				status.dirty();
			}
		}
		if (def.maxSize !== null) {
			if (ctx.data.size > def.maxSize.value) {
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_big,
					maximum: def.maxSize.value,
					type: "set",
					inclusive: true,
					exact: false,
					message: def.maxSize.message,
				});
				status.dirty();
			}
		}
		const valueType = this._def.valueType;
		function finalizeSet(elements2) {
			const parsedSet = /* @__PURE__ */ new Set();
			for (const element of elements2) {
				if (element.status === "aborted") return INVALID;
				if (element.status === "dirty") status.dirty();
				parsedSet.add(element.value);
			}
			return { status: status.value, value: parsedSet };
		}
		__name(finalizeSet, "finalizeSet");
		const elements = [...ctx.data.values()].map((item, i) =>
			valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)),
		);
		if (ctx.common.async) {
			return Promise.all(elements).then((elements2) => finalizeSet(elements2));
		} else {
			return finalizeSet(elements);
		}
	}
	min(minSize, message) {
		return new ZodSet({
			...this._def,
			minSize: { value: minSize, message: errorUtil.toString(message) },
		});
	}
	max(maxSize, message) {
		return new ZodSet({
			...this._def,
			maxSize: { value: maxSize, message: errorUtil.toString(message) },
		});
	}
	size(size, message) {
		return this.min(size, message).max(size, message);
	}
	nonempty(message) {
		return this.min(1, message);
	}
};
__name(ZodSet, "ZodSet");
ZodSet.create = (valueType, params) => {
	return new ZodSet({
		valueType,
		minSize: null,
		maxSize: null,
		typeName: ZodFirstPartyTypeKind.ZodSet,
		...processCreateParams(params),
	});
};
var ZodFunction = class extends ZodType {
	constructor() {
		super(...arguments);
		this.validate = this.implement;
	}
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.function) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.function,
				received: ctx.parsedType,
			});
			return INVALID;
		}
		function makeArgsIssue(args, error) {
			return makeIssue({
				data: args,
				path: ctx.path,
				errorMaps: [
					ctx.common.contextualErrorMap,
					ctx.schemaErrorMap,
					getErrorMap(),
					errorMap,
				].filter((x) => !!x),
				issueData: {
					code: ZodIssueCode.invalid_arguments,
					argumentsError: error,
				},
			});
		}
		__name(makeArgsIssue, "makeArgsIssue");
		function makeReturnsIssue(returns, error) {
			return makeIssue({
				data: returns,
				path: ctx.path,
				errorMaps: [
					ctx.common.contextualErrorMap,
					ctx.schemaErrorMap,
					getErrorMap(),
					errorMap,
				].filter((x) => !!x),
				issueData: {
					code: ZodIssueCode.invalid_return_type,
					returnTypeError: error,
				},
			});
		}
		__name(makeReturnsIssue, "makeReturnsIssue");
		const params = { errorMap: ctx.common.contextualErrorMap };
		const fn = ctx.data;
		if (this._def.returns instanceof ZodPromise) {
			const me = this;
			return OK(async function (...args) {
				const error = new ZodError([]);
				const parsedArgs = await me._def.args
					.parseAsync(args, params)
					.catch((e) => {
						error.addIssue(makeArgsIssue(args, e));
						throw error;
					});
				const result = await Reflect.apply(fn, this, parsedArgs);
				const parsedReturns = await me._def.returns._def.type
					.parseAsync(result, params)
					.catch((e) => {
						error.addIssue(makeReturnsIssue(result, e));
						throw error;
					});
				return parsedReturns;
			});
		} else {
			const me = this;
			return OK(function (...args) {
				const parsedArgs = me._def.args.safeParse(args, params);
				if (!parsedArgs.success) {
					throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
				}
				const result = Reflect.apply(fn, this, parsedArgs.data);
				const parsedReturns = me._def.returns.safeParse(result, params);
				if (!parsedReturns.success) {
					throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
				}
				return parsedReturns.data;
			});
		}
	}
	parameters() {
		return this._def.args;
	}
	returnType() {
		return this._def.returns;
	}
	args(...items) {
		return new ZodFunction({
			...this._def,
			args: ZodTuple.create(items).rest(ZodUnknown.create()),
		});
	}
	returns(returnType) {
		return new ZodFunction({
			...this._def,
			returns: returnType,
		});
	}
	implement(func) {
		const validatedFunc = this.parse(func);
		return validatedFunc;
	}
	strictImplement(func) {
		const validatedFunc = this.parse(func);
		return validatedFunc;
	}
	static create(args, returns, params) {
		return new ZodFunction({
			args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
			returns: returns || ZodUnknown.create(),
			typeName: ZodFirstPartyTypeKind.ZodFunction,
			...processCreateParams(params),
		});
	}
};
__name(ZodFunction, "ZodFunction");
var ZodLazy = class extends ZodType {
	get schema() {
		return this._def.getter();
	}
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		const lazySchema = this._def.getter();
		return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
	}
};
__name(ZodLazy, "ZodLazy");
ZodLazy.create = (getter, params) => {
	return new ZodLazy({
		getter,
		typeName: ZodFirstPartyTypeKind.ZodLazy,
		...processCreateParams(params),
	});
};
var ZodLiteral = class extends ZodType {
	_parse(input) {
		if (input.data !== this._def.value) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				received: ctx.data,
				code: ZodIssueCode.invalid_literal,
				expected: this._def.value,
			});
			return INVALID;
		}
		return { status: "valid", value: input.data };
	}
	get value() {
		return this._def.value;
	}
};
__name(ZodLiteral, "ZodLiteral");
ZodLiteral.create = (value, params) => {
	return new ZodLiteral({
		value,
		typeName: ZodFirstPartyTypeKind.ZodLiteral,
		...processCreateParams(params),
	});
};
function createZodEnum(values, params) {
	return new ZodEnum({
		values,
		typeName: ZodFirstPartyTypeKind.ZodEnum,
		...processCreateParams(params),
	});
}
__name(createZodEnum, "createZodEnum");
var ZodEnum = class extends ZodType {
	_parse(input) {
		if (typeof input.data !== "string") {
			const ctx = this._getOrReturnCtx(input);
			const expectedValues = this._def.values;
			addIssueToContext(ctx, {
				expected: util.joinValues(expectedValues),
				received: ctx.parsedType,
				code: ZodIssueCode.invalid_type,
			});
			return INVALID;
		}
		if (this._def.values.indexOf(input.data) === -1) {
			const ctx = this._getOrReturnCtx(input);
			const expectedValues = this._def.values;
			addIssueToContext(ctx, {
				received: ctx.data,
				code: ZodIssueCode.invalid_enum_value,
				options: expectedValues,
			});
			return INVALID;
		}
		return OK(input.data);
	}
	get options() {
		return this._def.values;
	}
	get enum() {
		const enumValues = {};
		for (const val of this._def.values) {
			enumValues[val] = val;
		}
		return enumValues;
	}
	get Values() {
		const enumValues = {};
		for (const val of this._def.values) {
			enumValues[val] = val;
		}
		return enumValues;
	}
	get Enum() {
		const enumValues = {};
		for (const val of this._def.values) {
			enumValues[val] = val;
		}
		return enumValues;
	}
	extract(values) {
		return ZodEnum.create(values);
	}
	exclude(values) {
		return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)));
	}
};
__name(ZodEnum, "ZodEnum");
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
	_parse(input) {
		const nativeEnumValues = util.getValidEnumValues(this._def.values);
		const ctx = this._getOrReturnCtx(input);
		if (
			ctx.parsedType !== ZodParsedType.string &&
			ctx.parsedType !== ZodParsedType.number
		) {
			const expectedValues = util.objectValues(nativeEnumValues);
			addIssueToContext(ctx, {
				expected: util.joinValues(expectedValues),
				received: ctx.parsedType,
				code: ZodIssueCode.invalid_type,
			});
			return INVALID;
		}
		if (nativeEnumValues.indexOf(input.data) === -1) {
			const expectedValues = util.objectValues(nativeEnumValues);
			addIssueToContext(ctx, {
				received: ctx.data,
				code: ZodIssueCode.invalid_enum_value,
				options: expectedValues,
			});
			return INVALID;
		}
		return OK(input.data);
	}
	get enum() {
		return this._def.values;
	}
};
__name(ZodNativeEnum, "ZodNativeEnum");
ZodNativeEnum.create = (values, params) => {
	return new ZodNativeEnum({
		values,
		typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
		...processCreateParams(params),
	});
};
var ZodPromise = class extends ZodType {
	unwrap() {
		return this._def.type;
	}
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		if (
			ctx.parsedType !== ZodParsedType.promise &&
			ctx.common.async === false
		) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.promise,
				received: ctx.parsedType,
			});
			return INVALID;
		}
		const promisified =
			ctx.parsedType === ZodParsedType.promise
				? ctx.data
				: Promise.resolve(ctx.data);
		return OK(
			promisified.then((data) => {
				return this._def.type.parseAsync(data, {
					path: ctx.path,
					errorMap: ctx.common.contextualErrorMap,
				});
			}),
		);
	}
};
__name(ZodPromise, "ZodPromise");
ZodPromise.create = (schema, params) => {
	return new ZodPromise({
		type: schema,
		typeName: ZodFirstPartyTypeKind.ZodPromise,
		...processCreateParams(params),
	});
};
var ZodEffects = class extends ZodType {
	innerType() {
		return this._def.schema;
	}
	sourceType() {
		return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects
			? this._def.schema.sourceType()
			: this._def.schema;
	}
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		const effect = this._def.effect || null;
		const checkCtx = {
			addIssue: (arg) => {
				addIssueToContext(ctx, arg);
				if (arg.fatal) {
					status.abort();
				} else {
					status.dirty();
				}
			},
			get path() {
				return ctx.path;
			},
		};
		checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
		if (effect.type === "preprocess") {
			const processed = effect.transform(ctx.data, checkCtx);
			if (ctx.common.issues.length) {
				return {
					status: "dirty",
					value: ctx.data,
				};
			}
			if (ctx.common.async) {
				return Promise.resolve(processed).then((processed2) => {
					return this._def.schema._parseAsync({
						data: processed2,
						path: ctx.path,
						parent: ctx,
					});
				});
			} else {
				return this._def.schema._parseSync({
					data: processed,
					path: ctx.path,
					parent: ctx,
				});
			}
		}
		if (effect.type === "refinement") {
			const executeRefinement = /* @__PURE__ */ __name((acc) => {
				const result = effect.refinement(acc, checkCtx);
				if (ctx.common.async) {
					return Promise.resolve(result);
				}
				if (result instanceof Promise) {
					throw new Error(
						"Async refinement encountered during synchronous parse operation. Use .parseAsync instead.",
					);
				}
				return acc;
			}, "executeRefinement");
			if (ctx.common.async === false) {
				const inner = this._def.schema._parseSync({
					data: ctx.data,
					path: ctx.path,
					parent: ctx,
				});
				if (inner.status === "aborted") return INVALID;
				if (inner.status === "dirty") status.dirty();
				executeRefinement(inner.value);
				return { status: status.value, value: inner.value };
			} else {
				return this._def.schema
					._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx })
					.then((inner) => {
						if (inner.status === "aborted") return INVALID;
						if (inner.status === "dirty") status.dirty();
						return executeRefinement(inner.value).then(() => {
							return { status: status.value, value: inner.value };
						});
					});
			}
		}
		if (effect.type === "transform") {
			if (ctx.common.async === false) {
				const base = this._def.schema._parseSync({
					data: ctx.data,
					path: ctx.path,
					parent: ctx,
				});
				if (!isValid(base)) return base;
				const result = effect.transform(base.value, checkCtx);
				if (result instanceof Promise) {
					throw new Error(
						`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`,
					);
				}
				return { status: status.value, value: result };
			} else {
				return this._def.schema
					._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx })
					.then((base) => {
						if (!isValid(base)) return base;
						return Promise.resolve(effect.transform(base.value, checkCtx)).then(
							(result) => ({ status: status.value, value: result }),
						);
					});
			}
		}
		util.assertNever(effect);
	}
};
__name(ZodEffects, "ZodEffects");
ZodEffects.create = (schema, effect, params) => {
	return new ZodEffects({
		schema,
		typeName: ZodFirstPartyTypeKind.ZodEffects,
		effect,
		...processCreateParams(params),
	});
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
	return new ZodEffects({
		schema,
		effect: { type: "preprocess", transform: preprocess },
		typeName: ZodFirstPartyTypeKind.ZodEffects,
		...processCreateParams(params),
	});
};
var ZodOptional = class extends ZodType {
	_parse(input) {
		const parsedType = this._getType(input);
		if (parsedType === ZodParsedType.undefined) {
			return OK(void 0);
		}
		return this._def.innerType._parse(input);
	}
	unwrap() {
		return this._def.innerType;
	}
};
__name(ZodOptional, "ZodOptional");
ZodOptional.create = (type, params) => {
	return new ZodOptional({
		innerType: type,
		typeName: ZodFirstPartyTypeKind.ZodOptional,
		...processCreateParams(params),
	});
};
var ZodNullable = class extends ZodType {
	_parse(input) {
		const parsedType = this._getType(input);
		if (parsedType === ZodParsedType.null) {
			return OK(null);
		}
		return this._def.innerType._parse(input);
	}
	unwrap() {
		return this._def.innerType;
	}
};
__name(ZodNullable, "ZodNullable");
ZodNullable.create = (type, params) => {
	return new ZodNullable({
		innerType: type,
		typeName: ZodFirstPartyTypeKind.ZodNullable,
		...processCreateParams(params),
	});
};
var ZodDefault = class extends ZodType {
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		let data = ctx.data;
		if (ctx.parsedType === ZodParsedType.undefined) {
			data = this._def.defaultValue();
		}
		return this._def.innerType._parse({
			data,
			path: ctx.path,
			parent: ctx,
		});
	}
	removeDefault() {
		return this._def.innerType;
	}
};
__name(ZodDefault, "ZodDefault");
ZodDefault.create = (type, params) => {
	return new ZodDefault({
		innerType: type,
		typeName: ZodFirstPartyTypeKind.ZodDefault,
		defaultValue:
			typeof params.default === "function"
				? params.default
				: () => params.default,
		...processCreateParams(params),
	});
};
var ZodCatch = class extends ZodType {
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		const newCtx = {
			...ctx,
			common: {
				...ctx.common,
				issues: [],
			},
		};
		const result = this._def.innerType._parse({
			data: newCtx.data,
			path: newCtx.path,
			parent: {
				...newCtx,
			},
		});
		if (isAsync(result)) {
			return result.then((result2) => {
				return {
					status: "valid",
					value:
						result2.status === "valid"
							? result2.value
							: this._def.catchValue({
									get error() {
										return new ZodError(newCtx.common.issues);
									},
									input: newCtx.data,
							  }),
				};
			});
		} else {
			return {
				status: "valid",
				value:
					result.status === "valid"
						? result.value
						: this._def.catchValue({
								get error() {
									return new ZodError(newCtx.common.issues);
								},
								input: newCtx.data,
						  }),
			};
		}
	}
	removeCatch() {
		return this._def.innerType;
	}
};
__name(ZodCatch, "ZodCatch");
ZodCatch.create = (type, params) => {
	return new ZodCatch({
		innerType: type,
		typeName: ZodFirstPartyTypeKind.ZodCatch,
		catchValue:
			typeof params.catch === "function" ? params.catch : () => params.catch,
		...processCreateParams(params),
	});
};
var ZodNaN = class extends ZodType {
	_parse(input) {
		const parsedType = this._getType(input);
		if (parsedType !== ZodParsedType.nan) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.nan,
				received: ctx.parsedType,
			});
			return INVALID;
		}
		return { status: "valid", value: input.data };
	}
};
__name(ZodNaN, "ZodNaN");
ZodNaN.create = (params) => {
	return new ZodNaN({
		typeName: ZodFirstPartyTypeKind.ZodNaN,
		...processCreateParams(params),
	});
};
var BRAND = Symbol("zod_brand");
var ZodBranded = class extends ZodType {
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		const data = ctx.data;
		return this._def.type._parse({
			data,
			path: ctx.path,
			parent: ctx,
		});
	}
	unwrap() {
		return this._def.type;
	}
};
__name(ZodBranded, "ZodBranded");
var ZodPipeline = class extends ZodType {
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		if (ctx.common.async) {
			const handleAsync = /* @__PURE__ */ __name(async () => {
				const inResult = await this._def.in._parseAsync({
					data: ctx.data,
					path: ctx.path,
					parent: ctx,
				});
				if (inResult.status === "aborted") return INVALID;
				if (inResult.status === "dirty") {
					status.dirty();
					return DIRTY(inResult.value);
				} else {
					return this._def.out._parseAsync({
						data: inResult.value,
						path: ctx.path,
						parent: ctx,
					});
				}
			}, "handleAsync");
			return handleAsync();
		} else {
			const inResult = this._def.in._parseSync({
				data: ctx.data,
				path: ctx.path,
				parent: ctx,
			});
			if (inResult.status === "aborted") return INVALID;
			if (inResult.status === "dirty") {
				status.dirty();
				return {
					status: "dirty",
					value: inResult.value,
				};
			} else {
				return this._def.out._parseSync({
					data: inResult.value,
					path: ctx.path,
					parent: ctx,
				});
			}
		}
	}
	static create(a, b) {
		return new ZodPipeline({
			in: a,
			out: b,
			typeName: ZodFirstPartyTypeKind.ZodPipeline,
		});
	}
};
__name(ZodPipeline, "ZodPipeline");
var ZodReadonly = class extends ZodType {
	_parse(input) {
		const result = this._def.innerType._parse(input);
		if (isValid(result)) {
			result.value = Object.freeze(result.value);
		}
		return result;
	}
};
__name(ZodReadonly, "ZodReadonly");
ZodReadonly.create = (type, params) => {
	return new ZodReadonly({
		innerType: type,
		typeName: ZodFirstPartyTypeKind.ZodReadonly,
		...processCreateParams(params),
	});
};
var custom = /* @__PURE__ */ __name((check, params = {}, fatal) => {
	if (check)
		return ZodAny.create().superRefine((data, ctx) => {
			var _a, _b;
			if (!check(data)) {
				const p =
					typeof params === "function"
						? params(data)
						: typeof params === "string"
						  ? { message: params }
						  : params;
				const _fatal =
					(_b = (_a = p.fatal) !== null && _a !== void 0 ? _a : fatal) !==
						null && _b !== void 0
						? _b
						: true;
				const p2 = typeof p === "string" ? { message: p } : p;
				ctx.addIssue({ code: "custom", ...p2, fatal: _fatal });
			}
		});
	return ZodAny.create();
}, "custom");
var late = {
	object: ZodObject.lazycreate,
};
var ZodFirstPartyTypeKind;
(function (ZodFirstPartyTypeKind2) {
	ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
	ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
	ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
	ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
	ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
	ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
	ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
	ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
	ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
	ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
	ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
	ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
	ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
	ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
	ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
	ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
	ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
	ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
	ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
	ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
	ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
	ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
	ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
	ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
	ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
	ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
	ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
	ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
	ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
	ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
	ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
	ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
	ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
	ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
	ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
	ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = /* @__PURE__ */ __name(
	(
		cls,
		params = {
			message: `Input not instance of ${cls.name}`,
		},
	) => custom((data) => data instanceof cls, params),
	"instanceOfType",
);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = /* @__PURE__ */ __name(() => stringType().optional(), "ostring");
var onumber = /* @__PURE__ */ __name(() => numberType().optional(), "onumber");
var oboolean = /* @__PURE__ */ __name(
	() => booleanType().optional(),
	"oboolean",
);
var coerce = {
	string: (arg) => ZodString.create({ ...arg, coerce: true }),
	number: (arg) => ZodNumber.create({ ...arg, coerce: true }),
	boolean: (arg) =>
		ZodBoolean.create({
			...arg,
			coerce: true,
		}),
	bigint: (arg) => ZodBigInt.create({ ...arg, coerce: true }),
	date: (arg) => ZodDate.create({ ...arg, coerce: true }),
};
var NEVER = INVALID;
var z = /* @__PURE__ */ Object.freeze({
	__proto__: null,
	defaultErrorMap: errorMap,
	setErrorMap,
	getErrorMap,
	makeIssue,
	EMPTY_PATH,
	addIssueToContext,
	ParseStatus,
	INVALID,
	DIRTY,
	OK,
	isAborted,
	isDirty,
	isValid,
	isAsync,
	get util() {
		return util;
	},
	get objectUtil() {
		return objectUtil;
	},
	ZodParsedType,
	getParsedType,
	ZodType,
	ZodString,
	ZodNumber,
	ZodBigInt,
	ZodBoolean,
	ZodDate,
	ZodSymbol,
	ZodUndefined,
	ZodNull,
	ZodAny,
	ZodUnknown,
	ZodNever,
	ZodVoid,
	ZodArray,
	ZodObject,
	ZodUnion,
	ZodDiscriminatedUnion,
	ZodIntersection,
	ZodTuple,
	ZodRecord,
	ZodMap,
	ZodSet,
	ZodFunction,
	ZodLazy,
	ZodLiteral,
	ZodEnum,
	ZodNativeEnum,
	ZodPromise,
	ZodEffects,
	ZodTransformer: ZodEffects,
	ZodOptional,
	ZodNullable,
	ZodDefault,
	ZodCatch,
	ZodNaN,
	BRAND,
	ZodBranded,
	ZodPipeline,
	ZodReadonly,
	custom,
	Schema: ZodType,
	ZodSchema: ZodType,
	late,
	get ZodFirstPartyTypeKind() {
		return ZodFirstPartyTypeKind;
	},
	coerce,
	any: anyType,
	array: arrayType,
	bigint: bigIntType,
	boolean: booleanType,
	date: dateType,
	discriminatedUnion: discriminatedUnionType,
	effect: effectsType,
	enum: enumType,
	function: functionType,
	instanceof: instanceOfType,
	intersection: intersectionType,
	lazy: lazyType,
	literal: literalType,
	map: mapType,
	nan: nanType,
	nativeEnum: nativeEnumType,
	never: neverType,
	null: nullType,
	nullable: nullableType,
	number: numberType,
	object: objectType,
	oboolean,
	onumber,
	optional: optionalType,
	ostring,
	pipeline: pipelineType,
	preprocess: preprocessType,
	promise: promiseType,
	record: recordType,
	set: setType,
	strictObject: strictObjectType,
	string: stringType,
	symbol: symbolType,
	transformer: effectsType,
	tuple: tupleType,
	undefined: undefinedType,
	union: unionType,
	unknown: unknownType,
	void: voidType,
	NEVER,
	ZodIssueCode,
	quotelessJson,
	ZodError,
});

// infra/routing/container.ts
var routerContainer = defaultContainer.ofChild(Symbol("routers"));
var pathsContainer = defaultContainer.ofChild(Symbol("routers:path"));
var ROUTE_PREFIXES = new Token("ROUTE_PREFIXES");
var ROUTE_PATHS = new Token("ROUTE_PATHS");

// infra/routing/validation-middleware.ts
var import_zod_validator = __toESM(require_cjs());
var existsOptions = /* @__PURE__ */ __name((options) => {
	return options !== void 0;
}, "existsOptions");
function validatorMiddleware(optionsConfig, parentHandler) {
	const handler2 = /* @__PURE__ */ __name(async (c, next) => {
		let response = await next();
		if (existsOptions(optionsConfig)) {
			const options = Object.entries(optionsConfig);
			for await (const [key, schema] of options) {
				return await (0, import_zod_validator.zValidator)(
					key,
					schema,
					(result, c2) => {
						if (!result.success) {
							return c2.json({
								errors: result.error.flatten().fieldErrors,
							});
						}
						return parentHandler(c2, next);
					},
				)(c, next);
			}
		}
		return response;
	}, "handler");
	return handler2;
}
__name(validatorMiddleware, "validatorMiddleware");

// infra/routing/decorators.ts
function Route(prefix) {
	return (targetConstructor) => {
		const routes = pathsContainer
			.getMany(ROUTE_PATHS)
			.filter((item) => item.parent === targetConstructor.name);
		routerContainer.set({
			id: ROUTE_PREFIXES,
			value: {
				prefix,
				name: targetConstructor.name,
				value: targetConstructor,
			},
			multiple: true,
		});
		const hono = new Hono2();
		for (const route of routes) {
			const middle = validatorMiddleware(route.options?.validate, async (c) => {
				const controller = routerContainer.get(targetConstructor);
				if (!controller) {
					throw new Error("Controller not found");
				}
				const method = Reflect.get(controller, route.methodName);
				if (typeof method !== "function") {
					throw new Error(`Method ${route.methodName} not found on controller`);
				}
				return Reflect.apply(method, controller, [c]);
			});
			if (typeof hono[route.method] !== "function") {
				throw new Error(`Method ${route.method} not found on hono`);
			}
			hono[route.method](route.path, middle);
		}
		app.route(prefix, hono);
	};
}
__name(Route, "Route");
function MethodDecoratorFactory(method) {
	return (path, options = {}) => {
		return (targetConstructor, methodName) => {
			pathsContainer.set({
				id: ROUTE_PATHS,
				value: {
					path,
					methodName,
					method: method.toLowerCase(),
					parent: targetConstructor.constructor.name,
					options,
				},
				multiple: true,
			});
		};
	};
}
__name(MethodDecoratorFactory, "MethodDecoratorFactory");
var Get = MethodDecoratorFactory("GET");
var Post = MethodDecoratorFactory("POST");
var Put = MethodDecoratorFactory("PUT");
var Delete = MethodDecoratorFactory("DELETE");

// src/log.ts
var LogService = class {
	log(message) {
		console.log(message);
	}
};
__name(LogService, "LogService");
LogService = __decorateClass([Service([])], LogService);

// src/users/controller.ts
var HomeController = class {
	constructor(logger) {
		this.logger = logger;
	}
	index(c) {
		this.logger.log("Hello Hono!");
		return c.text("Hello Hono!");
	}
};
__name(HomeController, "HomeController");
__decorateClass(
	[
		Post("hello/:id", {
			validate: {
				query: z.object({
					name: z.string().min(3).max(10),
				}),
			},
		}),
	],
	HomeController.prototype,
	"index",
	1,
);
HomeController = __decorateClass(
	[Route("/"), Service([LogService])],
	HomeController,
);

// src/index.ts
var handler = handle(app);
var server = app;
// Annotate the CommonJS export names for ESM import in node:
0 &&
	(module.exports = {
		handler,
		server,
	});
/*! Bundled license information:

reflect-metadata/Reflect.js:
  (*! *****************************************************************************
  Copyright (C) Microsoft. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0
  
  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.
  
  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** *)
*/
