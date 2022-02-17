function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Multimedia = /*#__PURE__*/function () {
  function Multimedia(url) {
    _classCallCheck(this, Multimedia);

    var _url = url;

    this.getUrl = function () {
      return _url;
    };
  }

  _createClass(Multimedia, [{
    key: "urlGet",
    get: function get() {
      return this.getUrl();
    }
  }, {
    key: "setInicio",
    value: function setInicio() {
      return "Este m\xE9todo es para realizar un cambio en la URL del video";
    }
  }]);

  return Multimedia;
}();

;
export default Multimedia;