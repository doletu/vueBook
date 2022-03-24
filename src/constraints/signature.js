import * as CryptoJS from "crypto-js";
const applicationKey =
  "543e6ee053794c0ebbce6e668e4e86cf17a96dd2e841d3a99a6bc32576d314e0";
const clientKey =
  "6c53e766837d00a8c4c7254c39c6536d1e1455aeb2dd30a0ee40ba0502375fba";

function generateSignature(url, method, timeStamp) {
  var signature = "";
  var _applicationKey = applicationKey;
  var _timestamp = timeStamp;
  var _clientKey = clientKey;

  var _method = method;
  var _url = encodeURI(url);
  var _tmp = _url.substring(_url.lastIndexOf("//") + 2);
  var _fqdn = _tmp.substring(0, _tmp.indexOf("/"));

  var _position = _url.indexOf("?");
  var _path = "";
  var _data = {};

  if (_position == -1) {
    _path = _url.substring(_url.lastIndexOf(_fqdn) + _fqdn.length);
  } else {
    var _get_parameter = _url.substring(_position + 1);
    _path = _url.substring(_url.lastIndexOf(_fqdn) + _fqdn.length, _position);
    _tmp = _get_parameter.split("&");
    for (var i = 0; i < _tmp.length; i++) {
      _position = _tmp[i].indexOf("=");
      _data[_tmp[i].substring(0, _position)] = _tmp[i].substring(_position + 1);
    }
  }
  _data["SignatureMethod"] = "HmacSHA256";
  _data["SignatureVersion"] = "2";
  _data["X-NCMB-Application-Key"] = _applicationKey;
  _data["X-NCMB-Timestamp"] = _timestamp;

  var _sorted_data = {};
  var keys = [];
  var k, len;
  for (k in _data) {
    if (Object.prototype.hasOwnProperty.call(_data, k)) {
      keys.push(k);
    }
  }
  keys.sort();
  len = keys.length;
  for (i = 0; i < len; i++) {
    k = keys[i];
    _sorted_data[k] = _data[k];
  }
  var parameterString = "";
  for (k in _sorted_data) {
    if (Object.prototype.hasOwnProperty.call(_sorted_data, k)) {
      if (parameterString != "") {
        parameterString += "&";
      }
      parameterString = parameterString + k + "=" + _sorted_data[k];
    }
  }
  var forEncodeString =
    _method + "\n" + _fqdn + "\n" + _path + "\n" + parameterString;

  var hash = CryptoJS.HmacSHA256(forEncodeString, _clientKey);
  signature = CryptoJS.enc.Base64.stringify(hash);
  return signature;
}
function generateHeader(sig, timeStamp) {
  var headers = {
    "X-NCMB-Application-Key": applicationKey,
    "X-NCMB-Signature": sig,
    "X-NCMB-Timestamp": timeStamp,
    "content-type": "application/json",
  };
  return headers;
}

export function signature() {
  return { generateSignature, generateHeader };
}
