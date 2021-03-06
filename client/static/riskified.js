/* eslint-disable */
(function () {
  function riskifiedBeaconLoad() {
    function getCookie(a) {
      var d = [],
        e = document.cookie.split(";");
      a = RegExp("^\\s*" + a + "=\\s*(.*?)\\s*$");
      for (var b = 0; b < e.length; b++) {
        var f = e[b].match(a);
        f && d.push(f[1])
      }
      return d[0]
    };

    var store_domain = 'https://www.rapido.com';
    var session_id = getCookie('RiskifiedSessionId');

    var url = ('https:' == document.location.protocol ? 'https://' : 'http://') + "beacon.riskified.com?shop=" + store_domain + "&sid=" + session_id;
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = url;
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
  }

  if (window.attachEvent) window.attachEvent('onload', riskifiedBeaconLoad)
  else window.addEventListener('load', riskifiedBeaconLoad, false);
})();

