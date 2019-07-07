/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "562ed67794183e20506a7425f1328fa0"
  },
  {
    "url": "assets/css/0.styles.40b5933a.css",
    "revision": "e36c74b95e44099af69e5b7d47fa383c"
  },
  {
    "url": "assets/fonts/MathJax_AMS-Regular.07173fb7.woff",
    "revision": "07173fb77d2ee655811499d40c8388e7"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Bold.bc421258.woff",
    "revision": "bc42125861bd5bfc8686deeb612dcbb3"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Regular.b80e08d5.woff",
    "revision": "b80e08d5a79acbd1fafb1ca6f3515664"
  },
  {
    "url": "assets/fonts/MathJax_Main-Bold.c9423d5d.woff",
    "revision": "c9423d5dc9d82a38ca215f74e9cdd9f2"
  },
  {
    "url": "assets/fonts/MathJax_Main-Italic.7e83626b.woff",
    "revision": "7e83626ba8bf2d20dc41565f1e6d0afc"
  },
  {
    "url": "assets/fonts/MathJax_Main-Regular.9995de47.woff",
    "revision": "9995de4787f908d8237dba7007f6c3fe"
  },
  {
    "url": "assets/fonts/MathJax_Math-BoldItalic.77dbcee3.woff",
    "revision": "77dbcee3c3d9a82a0c04a4ae7992b895"
  },
  {
    "url": "assets/fonts/MathJax_Math-Italic.5589d1a8.woff",
    "revision": "5589d1a8fc62be6613020ef2fa13e410"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Bold.07281897.woff",
    "revision": "07281897a98a61c3733e1670f82a9fd5"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Italic.3d580bd5.woff",
    "revision": "3d580bd561716bfb1f0b4fdd7063a802"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Regular.bc3af04f.woff",
    "revision": "bc3af04f9a671fcabd6498042c57478f"
  },
  {
    "url": "assets/fonts/MathJax_Script-Regular.4c74e33b.woff",
    "revision": "4c74e33b0feb1fdbda49403a5e7ed604"
  },
  {
    "url": "assets/fonts/MathJax_Typewriter-Regular.72815766.woff",
    "revision": "72815766b08ca24d4d29ad1f5d4ecb45"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.48fc399b.js",
    "revision": "efbdf07c984486a3baab1b3a09727f67"
  },
  {
    "url": "assets/js/11.91dd2ba7.js",
    "revision": "78287ffb9800e84b90a5891a84257c53"
  },
  {
    "url": "assets/js/12.f21ce532.js",
    "revision": "476d0714e785e4c52b72a5d5cf4ddc03"
  },
  {
    "url": "assets/js/13.51fd08e8.js",
    "revision": "8f3ef76d1c0128c1d4b9362c860453af"
  },
  {
    "url": "assets/js/14.a6828dbd.js",
    "revision": "03362cb074b473ebe91ade6224c49af9"
  },
  {
    "url": "assets/js/15.2da9cd34.js",
    "revision": "85738eae2c8c1a7897e0159ac59d0611"
  },
  {
    "url": "assets/js/16.f137b853.js",
    "revision": "b96fbc972402278a5c78ca709748d709"
  },
  {
    "url": "assets/js/17.003ddc03.js",
    "revision": "f7b193d7ed145971e694219cd7455728"
  },
  {
    "url": "assets/js/18.075f7a58.js",
    "revision": "b38f13882288d443182b488fb4fe3ccf"
  },
  {
    "url": "assets/js/3.12c5ed00.js",
    "revision": "91fc6ab15aae91bf55e98f77da804d60"
  },
  {
    "url": "assets/js/4.6fb8f17c.js",
    "revision": "bb7592984a4f42f54c4fd0debee9f234"
  },
  {
    "url": "assets/js/5.a6a8578e.js",
    "revision": "f1c26f5195e0630fc559389c625244bf"
  },
  {
    "url": "assets/js/6.36aae7a0.js",
    "revision": "95826c70acef7d762a41d742eebd098d"
  },
  {
    "url": "assets/js/7.6f8637cc.js",
    "revision": "1225edd8c58d8840a3ddf8ec6c0a19d6"
  },
  {
    "url": "assets/js/8.6e0dd1ec.js",
    "revision": "9632edd6a1ef54210d51dda844ba1c97"
  },
  {
    "url": "assets/js/9.d631130e.js",
    "revision": "1e880d5c6fbbd1ecdb02275f317ea9a3"
  },
  {
    "url": "assets/js/app.247b343a.js",
    "revision": "13f83422680c70b600040d9e38bdd668"
  },
  {
    "url": "assets/js/vendors~docsearch.26026c89.js",
    "revision": "2aeda1504d33d19b8a38d5594acc4c1d"
  },
  {
    "url": "en/home/index.html",
    "revision": "4c7ad2171117a217f0709c8e0b4a5037"
  },
  {
    "url": "img/logo.svg",
    "revision": "287f17ed9ff27e7002a96da440ba1c2b"
  },
  {
    "url": "img/pref/feynman.jpg",
    "revision": "268868f4c42e0f531a5edf971a85adf1"
  },
  {
    "url": "index.html",
    "revision": "9cce3ed58df64e434e07a5d4c69d5724"
  },
  {
    "url": "ru/home/index.html",
    "revision": "854cd6f2db88be6af97a4011a79ee879"
  },
  {
    "url": "ru/index.html",
    "revision": "cc8840208b4d7811a463ef85a3062bf7"
  },
  {
    "url": "ru/pref/authors.html",
    "revision": "bea52a15cc1fb713d303e49a0babb0d8"
  },
  {
    "url": "ru/vol-1/01-atoms-in-motion.html",
    "revision": "e3b50e03cb094b1464fe18d79517e49d"
  },
  {
    "url": "ru/vol-1/02-basic-physics.html",
    "revision": "d5e0a959d41b4f9a48d93c66792acdc1"
  },
  {
    "url": "ru/vol-1/03-the-relation-of-physics-to-other-sciences.html",
    "revision": "e7a7f42f1749c43c4b5efc9a2a0e4b6d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
