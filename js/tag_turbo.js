﻿(function () {
  try {
    (function () {
      function nc(a, b, c, d) {
        var e = this;
        return A(window, "c.i", function () {
          function f(B) {
            (B = Gd(k, l, "", B)(k, l)) && (R(B.then) ? B.then(g) : g(B));
            return B;
          }
          function g(B) {
            B &&
              (R(B)
                ? m.push(B)
                : Sa(B) &&
                  x(function (D) {
                    var E = D[0];
                    D = D[1];
                    R(D) && ("u" === E ? m.push(D) : h(D, E));
                  }, ya(B)));
          }
          function h(B, D, E) {
            e[D] = Vf(k, l, E || p, D, B);
          }
          var k = window;
          (!k || (isNaN(a) && !a)) && Hd();
          var l = Wf(a, Id, b, c, d),
            m = [],
            p = [Jd, Gd, Kd],
            t = z(K, oc),
            u = F(l);
          l.id || Ba(Gb("Invalid Metrika id: " + l.id, !0));
          var y = Hb.l("counters", {});
          if (y[u])
            return db(k, u, "Duplicate counter " + u + " initialization"), y[u];
          y[u] = e;
          Hb.m("counters", y);
          Hb.X("counter", e);
          x(function (B) {
            B(k, l);
          }, pc);
          x(f, pb);
          f(Xf);
          h(Yf(k, l, m), "destruct", [Jd, Kd]);
          qc(k, I([k, t, f, 1, "a.i"], Zf));
          x(f, sa);
        })();
      }
      function $f(a, b) {
        var c = ag(a),
          d = [bg(a) || cg(a)];
        Ld(a) && d.push(c);
        var e = X(a);
        c = Ga(a);
        var f = c.l("synced", {});
        d = aa(function (g) {
          if (b[g]) {
            var h = (f[g] || 1) + 1440 < e(eb);
            h && delete f[g];
            return h;
          }
        }, d);
        c.m("synced", f);
        return z(function (g) {
          return { Uc: b[g], Gc: g };
        }, d);
      }
      function cg(a) {
        a = dg(a);
        return eg[a] || a;
      }
      function ag(a) {
        a = Md(a);
        return fg[a] || "ru";
      }
      function gg(a, b, c, d) {
        c = c.A;
        if (b.gd || !c) d();
        else {
          var e = Ib(a),
            f = Jb(a, "");
          c = function () {
            var u = Nd(e);
            hg(u, f);
            d();
          };
          if (3 === b.id) c();
          else {
            var g = C(a),
              h = g.l("f1");
            if (h) h(c);
            else if (
              ((h = (h = Nd(e)) ? z(w(Kb, n), h.split(",")) : []), Od(h))
            )
              c();
            else {
              var k = rc(a),
                l = Q(a);
              var m = /(^|\w+\.)yango(\.yandex)?\.com$/.test(l.hostname)
                ? {
                    url: "https://yastatic.net/s3/taxi-front/yango-gdpr-popup/",
                    Hb: "ar az be en es et fi fr he hy ka kk ky lt lv no pt ro ru sl sr tg tr uk uz zh".split(
                      " "
                    ),
                    Kb: "_inversed_buttons",
                  }
                : void 0;
              var p =
                (k = k || !!m) &&
                (-1 !== l.href.indexOf("yagdprcheck=1") || f.l("yaGdprCheck"));
              l = f.l("gdpr");
              f.l("yandex_login")
                ? (h.push("13"), f.m("gdpr", fb, 525600))
                : k
                ? N(l, Na)
                  ? l === sc
                    ? h.push("12")
                    : h.push("3")
                  : ig(a) || jg(a)
                  ? h.push("17")
                  : kg(a) && h.push("28")
                : h.push("14");
              var t = w(e, lg);
              Od(h)
                ? (x(t, h), c())
                : (Lb.push(c),
                  g.m("f1", function (u, y) {
                    var B = 0;
                    if (y) {
                      var D = Ca(a, y) || "";
                      B += D.length;
                    }
                    Lb.push(u);
                    1e6 >= B && Lb.push(u);
                  }),
                  (0, tc[0])(a)
                    .then(U("params.eu"))
                    .then(function (u) {
                      if (u || p) {
                        f.m("gdpr_popup", sc);
                        mg(a, b);
                        if (Oa(a)) return ng(a, t, b);
                        var y = Pd(a, e);
                        if (y)
                          return (
                            (u = og(a, t, y, b, m)), u.then(I([a, b], pg)), u
                          );
                      }
                      u || t("8");
                      return O.resolve({ value: fb, Ra: !0 });
                    })
                    .then(function (u) {
                      f.wa("gdpr_popup");
                      if (u) {
                        var y = u.value;
                        u = u.Ra;
                        N(y, Na) && f.m("gdpr", y, u ? void 0 : 525600);
                      }
                      y = uc(Lb, ba);
                      Qd(a, y, 20)(Ha(A(a, "gdr"), L));
                      g.m("f1", ba);
                    })
                    ["catch"](A(a, "gdp.a")));
            }
          }
        }
      }
      function pg(a, b) {
        if (rc(a)) {
          var c = Ib(a),
            d = Ta(a, b);
          d = d && d.params;
          c = z(w(qg, n), vc(c));
          d && c.length && d("gdpr", aa(Boolean, c));
        }
      }
      function ng(a, b, c) {
        var d = wc(a, c);
        return new O(function (e) {
          var f;
          if (d) {
            var g = d.I,
              h = r(w("4", b), w(null, e)),
              k = da(a, h, 2e3, "gdp.f.t");
            d.Ub(((f = {}), (f.type = "isYandex"), f))
              .then(function (l) {
                l.isYandex
                  ? (b("5"),
                    g.B(
                      ta(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], xc),
                      function (m) {
                        e({ value: Rd(m[1].type) });
                      }
                    ))
                  : (b("6"), e(null));
              })
              ["catch"](h)
              .then(I([a, k], Pa));
          } else e({ value: sc, Ra: !0 });
        });
      }
      function mg(a, b) {
        var c = wc(a, b);
        c &&
          c.I.B(["isYandex"], function () {
            var d;
            return (d = { type: "isYandex" }), (d.isYandex = rc(a)), d;
          });
        return c;
      }
      function og(a, b, c, d, e) {
        var f = void 0 === e ? rg : e;
        e = f.url;
        var g = f.Kb;
        f = sg(a, f.Hb, d.hd);
        var h = wc(a, d);
        if (!h) return O.resolve({ value: fb, Ra: !0 });
        var k = tg(a, { src: "" + e + f + g + ".js" });
        return new O(function (l, m) {
          k
            ? (b("7"),
              (k.onerror = function () {
                var p;
                b("9");
                h.Sb(((p = {}), (p.type = "GDPR-ok-view-default"), p));
                l(null);
              }),
              (k.onload = function () {
                b("10");
                c.B(
                  ta(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], xc),
                  function (p) {
                    var t;
                    p = p.type;
                    h.Sb(((t = {}), (t.type = p), t));
                    l({ value: Rd(p) });
                  }
                );
              }))
            : (b("9"), m(Da("gdp.e")));
        });
      }
      function sg(a, b, c) {
        a = c || Md(a);
        return N(a, b) ? a : "en";
      }
      function Rd(a) {
        if (N(a, ["GDPR-ok-view-default", "GDPR-ok-view-detailed"])) return fb;
        a = a.replace("GDPR-ok-view-detailed-", "");
        return N(a, Na) ? a : fb;
      }
      function Sd(a, b, c) {
        b = Jb(a, void 0, b);
        b = Td(a, b.l("phc_settings") || "");
        var d = n(b, "clientId"),
          e = n(b, "orderId"),
          f = n(b, "service_id"),
          g = n(b, "phones") || [];
        return d && e && g
          ? ug(a, c.qb, { $c: vg })
              .Nc(g)
              .then(function (h) {
                return wg(c, { ea: d, ia: e, Xb: f }, h.M, g, h.P);
              })
              ["catch"](function () {})
          : O.resolve();
      }
      function vg(a, b, c) {
        a = xg(c.$a);
        if ("href" === c.Nb) {
          var d = c.ma;
          b = d.href;
          c = b.replace(a, c.W);
          if (b !== c) return (d.href = c), !0;
        } else if (
          (a =
            null === (d = c.ma.textContent) || void 0 === d
              ? void 0
              : d.replace(a, c.W)) &&
          a !== c.ma.textContent
        )
          return (c.ma.textContent = a), !0;
        return !1;
      }
      function wg(a, b, c, d, e) {
        var f;
        b.ea &&
          b.ia &&
          ((b.ea === a.ea && b.ia === a.ia) || v(a, b, { M: {}, Ja: !0 }),
          0 < e && Mb(a.P, [e]),
          x(function (g) {
            var h,
              k,
              l = g[0];
            g = g[1];
            var m = +(a.M[l] && a.M[l][g] ? a.M[l][g] : 0);
            v(a.M, ((h = {}), (h[l] = ((k = {}), (k[g] = m), k)), h));
          }, d),
          x(function (g) {
            var h,
              k,
              l = g[0];
            g = g[1];
            var m = 1 + (a.M[l] ? a.M[l][g] : 0);
            v(a.M, ((h = {}), (h[l] = ((k = {}), (k[g] = m), k)), h));
          }, c),
          a.Eb &&
            (a.Ja || c.length) &&
            ((b = Ta(a.b, a.qb)) &&
              b.params(
                "__ym",
                "phc",
                ((f = {}),
                (f.clientId = a.ea),
                (f.orderId = a.ia),
                (f.service_id = a.Xb),
                (f.phones = a.M),
                (f.performance = a.P),
                f)
              ),
            (a.Ja = !1)));
      }
      function yg(a, b) {
        var c = a.document;
        if (N(c.readyState, ["interactive", "complete"])) qc(a, b);
        else {
          var d = Ia(a),
            e = d.B,
            f = d.qa,
            g = function () {
              f(c, ["DOMContentLoaded"], g);
              f(a, ["load"], g);
              b();
            };
          e(c, ["DOMContentLoaded"], g);
          e(a, ["load"], g);
        }
      }
      function yc(a) {
        return {
          F: function (b, c) {
            var d = b.A;
            if (d) {
              var e = C(a).l("adBlockEnabled");
              e && d.m("adb", e);
            }
            c();
          },
        };
      }
      function qb(a, b) {
        return {
          F: function (c, d) {
            Ud(c)
              ? d()
              : Ua(b, function (e) {
                  var f;
                  if ((e = n(e, "settings.hittoken")))
                    (e = ((f = {}), (f.hittoken = e), f)),
                      (c.o = v(c.o || {}, e));
                  d();
                });
          },
        };
      }
      function Nb(a) {
        return qa(a)
          ? z(Nb, a)
          : la(a) || "object" !== typeof a
          ? a
          : H(
              function (b, c) {
                var d = c[0],
                  e = c[1],
                  f = zg[d];
                Z(f) && (f = d);
                e = N(f, Ag) ? e : Nb(e);
                f ? (b[f] = e) : (b[d] = e);
                return b;
              },
              {},
              ya(a)
            );
      }
      function Bg(a, b) {
        return Ua(b, function (c) {
          var d = C(a);
          F(b);
          if (!d.l("dSync", !1))
            return (
              d.m("dSync", !0),
              Cg(a, c, {
                fa: b,
                Lc: "s",
                Jb: "ds",
                Tc: function (e, f, g) {
                  var h = e.Qb;
                  e = e.host;
                  if (n(h, "settings")) return Ba(Da("ds.e"));
                  f = f(P) - g;
                  g = e[1];
                  var k, l;
                  h = fa(((k = {}), (k.di = h), (k.dit = f), (k.dip = g), k));
                  k = ((l = {}), (l["page-url"] = Q(a).href), l);
                  return ha(
                    a,
                    "S",
                    Vd
                  )({ A: h, o: k }, Vd)["catch"](A(a, "ds.rs"));
                },
              })
            );
        });
      }
      function Cg(a, b, c) {
        var d = c.fa,
          e = X(a),
          f = Dg(a, b.userData, d),
          g = Eg(a);
        return g.length
          ? Fg(a, e, f, b, c).then(function () {
              return Gg(a, g, f, e, c);
            }, L)
          : O.resolve();
      }
      function Eg(a) {
        var b = Hg(a);
        a = r(Wd, gb(["iPhone", "iPad"]))(a);
        return b ? Ig : a ? Jg : [];
      }
      function Gg(a, b, c, d, e) {
        var f = e.Tc,
          g = void 0 === f ? L : f,
          h = e.Jb,
          k = d(P);
        return Kg(
          a,
          b,
          e
        )(
          Ha(
            function (l) {
              x(function (m) {
                m && zc(a, h + ".s", m);
              }, l);
              l = d(eb);
              c.m(h, l);
            },
            function (l) {
              c.m(h, d(eb));
              g(l, d, k);
            }
          )
        );
      }
      function Fg(a, b, c, d, e) {
        var f = e.Jb,
          g = e.fa;
        return new O(function (h, k) {
          var l = c.l(f, 0);
          l = parseInt("" + l, 10);
          return 60 >= b(eb) - l
            ? k()
            : Lg(a)
            ? h(void 0)
            : Mg(d)
            ? k()
            : h(Ng(a, g));
        });
      }
      function Kg(a, b, c) {
        var d = c.Lc,
          e = c.data,
          f = ha(a, d, c.fa);
        a = v({}, Xd);
        e && v(a.o, e);
        return Og(
          z(function (g) {
            return Pg(
              f(
                v({ G: { fd: !1, Oc: !0 } }, Xd),
                z(function (h) {
                  var k = h[1],
                    l = h[2];
                  h = M(
                    "",
                    z(function (m) {
                      return String.fromCharCode(m.charCodeAt(0) + 10);
                    }, h[0].split(""))
                  );
                  return (
                    "http" + (l ? "s" : "") + "://" + h + ":" + k + "/" + Qg[d]
                  );
                }, g)
              ).then(function (h) {
                return v({}, h, { host: g[h.cc] });
              })
            );
          }, b)
        );
      }
      function Dg(a, b, c) {
        var d = b || {},
          e = ha(a, "u", c),
          f = Ga(a);
        return {
          l: function (g, h) {
            return Z(d[g]) ? f.l(g, h) : d[g];
          },
          m: function (g, h) {
            var k,
              l = "" + h;
            d[g] = l;
            f.m(g, l);
            return e(
              { o: ((k = {}), (k.key = g), (k.value = l), k) },
              ["https://" + Va + "/user_storage_set"],
              {}
            )["catch"](A(a, "u.d.s.s"));
          },
        };
      }
      function Rg(a, b) {
        try {
          var c = b[0];
          var d = c[1];
        } catch (e) {
          return function () {
            return O.resolve();
          };
        }
        return function (e) {
          var f,
            g =
              ((f = {}),
              (f["browser-info"] = Sg),
              (f["page-url"] = a.location && "" + a.location.href),
              f);
          return d && (e = Ca(a, e))
            ? d(Tg, { Za: g, Z: [], L: "site-info=" + Ac(e) })["catch"](L)
            : O.resolve();
        };
      }
      function Ug(a, b, c) {
        b = F(b);
        a = Yd(a);
        c = c.o;
        if ((void 0 === c ? {} : c).nohit) return null;
        var d = (c = null);
        n(a, "getEntriesByType") &&
          (d = n(a.getEntriesByType("navigation"), "0")) &&
          (c = Vg);
        if (!c) {
          var e = n(a, "timing");
          e && ((c = Wg), (d = e));
        }
        if (!c) return null;
        a = Xg(a, d, c);
        b = Yg(b);
        return (b = Zg(b, a)) && M(",", b);
      }
      function Zg(a, b) {
        var c = a.length
          ? z(function (d, e) {
              var f = b[e];
              return f === d ? null : f;
            }, a)
          : b;
        a.length = 0;
        x(r(K, ua("push", a)), b);
        return aa(za(null), c).length === a.length ? null : c;
      }
      function Xg(a, b, c) {
        return z(function (d) {
          var e = d[0],
            f = d[1];
          if (R(e)) return e(a, b) || null;
          if (R(f)) return null;
          var g = !(!b[e] || !b[f]);
          !g &&
            2 === d.length &&
            (g = 0 === b[e] && 0 === b[f]) &&
            ((g = d[1]), (g = !(Zd[d[0]] || Zd[g])));
          return g
            ? ((d = Math.round(b[e]) - Math.round(b[f])),
              0 > d || 36e5 < d ? null : d)
            : 1 === d.length && b[e]
            ? Math.round(b[e])
            : null;
        }, c);
      }
      function $d(a, b) {
        var c = n(b, "__ym.turbo_uid");
        c && C(a).X("tpuid", c);
      }
      function $g(a, b) {
        Bc(a)(
          Ha(L, function () {
            var c,
              d = a.document.body,
              e =
                ((c = {}),
                (c.attributes = !0),
                (c.childList = !0),
                (c.subtree = !0),
                c);
            Ea("MutationObserver", a.MutationObserver) &&
              new MutationObserver(b.H).observe(d, e);
          })
        );
      }
      function ah(a, b) {
        var c = a.document.body;
        if (!c) return [];
        var d = ae(b);
        return H(
          function (e, f) {
            var g = n(f, "href");
            try {
              var h = decodeURI(g || "");
            } catch (p) {
              h = "";
            }
            if ("tel:" === h.slice(0, 4)) {
              var k = (d.exec(h) || [])[0],
                l = k ? Ob(k) : "",
                m = b[l];
              Z(m) ||
                (!l && "*" !== m.Fa[0]) ||
                (e.push({ Nb: "href", ma: f, $a: l, W: be(k, b[l].W), Vc: g }),
                (g = Ob(h.slice(4))),
                (l = ce()([l ? m.Fa : [g, ""]])),
                e.push.apply(e, de(a, l, f)));
            }
            return e;
          },
          [],
          Cc(c.querySelectorAll("a"))
        );
      }
      function de(a, b, c) {
        void 0 === c && (c = a.document.body);
        if (!c) return [];
        var d = [],
          e = ae(b);
        bh(
          a,
          c,
          function (f) {
            if (
              f !== c &&
              "script" !== (n(f, "parentNode.nodeName") || "").toLowerCase()
            ) {
              var g = aa(Boolean, e.exec(f.textContent || "") || []);
              x(function (h) {
                var k = Ob(h);
                Z(b[k]) ||
                  d.push({
                    Nb: "text",
                    ma: f,
                    $a: k,
                    W: be(h, b[k].W),
                    Vc: f.textContent || "",
                  });
              }, g);
            }
          },
          function (f) {
            return e.test(f.textContent || "") ? 1 : 0;
          },
          a.NodeFilter.SHOW_TEXT
        );
        return d;
      }
      function ce() {
        return ee(function (a, b) {
          var c = z(Ob, b),
            d = c[0];
          c = c[1];
          a[d] = { W: c, Fa: b };
          var e = fe(d);
          e !== d && (a[e] = { W: fe(c), Fa: b });
          return a;
        }, {});
      }
      function be(a, b) {
        for (
          var c = [], d = a.split(""), e = b.split(""), f = 0, g = 0;
          g < a.length && !(f >= e.length);
          g += 1
        ) {
          var h = d[g];
          "0" <= h && "9" >= h ? (c.push(e[f]), (f += 1)) : c.push(d[g]);
        }
        return M("", c) + b.slice(f + 1);
      }
      function fe(a) {
        var b = { 7: "8", 8: "7" };
        return 11 === a.length && b[a[0]] ? "" + b[a[0]] + a.slice(1) : a;
      }
      function ae(a) {
        return new RegExp("(?:" + M("|", z(ge, V(a))) + ")");
      }
      function bh(a, b, c, d, e) {
        function f(g) {
          return R(d)
            ? d(g)
              ? a.NodeFilter.FILTER_ACCEPT
              : a.NodeFilter.FILTER_REJECT
            : a.NodeFilter.FILTER_ACCEPT;
        }
        void 0 === e && (e = -1);
        if (R(c) && f(b) === a.NodeFilter.FILTER_ACCEPT && (c(b), !ch(b)))
          for (
            b = a.document.createTreeWalker(
              b,
              e,
              d ? { acceptNode: f } : null,
              !1
            );
            b.nextNode() && !1 !== c(b.currentNode);

          );
      }
      function he(a, b, c) {
        var d;
        a = [
          dh(a, b, function (e) {
            d = e;
            e.Va.B(c);
          }),
          function () {
            d && d.unsubscribe();
          },
        ];
        return I([eh, a], x);
      }
      function fh(a, b, c, d) {
        var e, f;
        if (c) {
          a: {
            b = n(d, "ecommerce") || {};
            var g = n(d, "event") || "";
            if (Sa(b) && Wa(g) && (g = ie[g])) {
              b = je(g, b, "items");
              break a;
            }
            b = void 0;
          }
          if (!b)
            a: {
              b = d;
              if ((g = !qa(d)))
                (g = ke(d)),
                  (g =
                    a.isFinite(g) &&
                    !a.isNaN(g) &&
                    "[object Number]" === Dc(g));
              g && (b = ia(b));
              if (
                qa(b) &&
                ((a = b[0]),
                (g = b[1]),
                (b = b[2]),
                Wa(g) && Sa(b) && ((g = ie[g]), "event" === a && g))
              ) {
                b = je(g, b, "items");
                break a;
              }
              b = void 0;
            }
          (d = b || gh(d)) &&
            c(((e = {}), (e.__ym = ((f = {}), (f.ecommerce = [d]), f)), e));
        }
      }
      function gh(a) {
        var b = n(a, "ecommerce");
        if (Sa(b))
          return (
            (a = aa(gb(hh), V(b))),
            (a = H(
              function (c, d) {
                c[d] = b[d];
                return c;
              },
              {},
              a
            )),
            0 === V(a).length ? void 0 : a
          );
      }
      function je(a, b, c) {
        var d,
          e,
          f = b.purchase || b;
        if ((b = f[c])) {
          var g =
            ((d = {}), (d[a] = ((e = {}), (e.products = z(ih, b)), e)), d);
          d = V(f);
          1 < d.length &&
            (g[a].actionField = H(
              function (h, k) {
                if (k === c) return h;
                if ("currency" === k) return (g.currencyCode = f.currency), h;
                h[Ec[k] || k] = f[k];
                return h;
              },
              {},
              d
            ));
          return g;
        }
      }
      function ih(a) {
        var b = {};
        x(function (c) {
          var d = Ec[c] || c;
          -1 !== c.indexOf("item_category")
            ? ((d = Ec.item_category),
              (b[d] = b[d] ? b[d] + ("/" + a[c]) : a[c]))
            : (b[d] = a[c]);
        }, V(a));
        return b;
      }
      function jh(a, b) {
        if (a.Zc()) {
          var c = le(b);
          if (c && !me("ym-disable-tracklink", c)) {
            var d = a.b,
              e = a.pc,
              f = a.fa,
              g = a.sender,
              h = a.rc,
              k = f.Ka,
              l = c.href;
            var m = rb(c.innerHTML && c.innerHTML.replace(/<\/?[^>]+>/gi, ""));
            m ||
              (m = (m = c.querySelector("img"))
                ? rb(m.getAttribute("title") || m.getAttribute("alt"))
                : "");
            m = l === m ? "" : m;
            if (me("ym-external-link", c))
              Pb(d, f, { url: l, ha: !0, title: m, sender: g });
            else {
              k = k ? Fc(d, k).hostname : Q(d).hostname;
              h = RegExp("\\.(" + M("|", z(kh, h)) + ")$", "i");
              var p = c.protocol + "//" + c.hostname + c.pathname;
              h = ne.test(p) || ne.test(l) || h.test(l) || h.test(p);
              c = c.hostname;
              Qb(k) === Qb(c)
                ? h
                  ? Pb(d, f, { url: l, xa: !0, title: m, sender: g })
                  : m && e.m("il", rb(m).slice(0, 100))
                : (l && lh.test(l)) ||
                  Pb(d, f, {
                    url: l,
                    Ba: !0,
                    ha: !0,
                    xa: h,
                    title: m,
                    sender: g,
                  });
            }
          }
        }
      }
      function Pb(a, b, c) {
        var d,
          e = fa();
        c.xa && e.m("dl", 1);
        c.ha && e.m("ln", 1);
        var f = c.ec || {};
        e = {
          A: e,
          C: { title: f.title || c.title, Ba: !!c.Ba, D: f.params },
          o:
            ((d = {}),
            (d["page-url"] = c.url),
            (d["page-ref"] = b.Ka || Q(a).href),
            d),
        };
        d = "Link";
        c.xa
          ? (d = c.ha ? "Ext link - File" : "File")
          : c.ha && (d = "Ext link");
        b = c
          .sender(e, b)
          .then(sb(a, b, d + ". Counter " + b.id + ". Url: " + c.url, c.ec));
        return hb(a, "cl.p.s", b, f.callback || L, f.ctx);
      }
      function mh(a, b) {
        var c,
          d,
          e =
            ((c = {}), (c.string = !0), (c.object = !0), (c["boolean"] = b), c)[
              typeof b
            ] || !1;
        a(((d = {}), (d.trackLinks = e), d));
      }
      function nh(a, b, c, d) {
        var e = Q(a),
          f = e.hostname;
        e = e.href;
        if ((b = tb(b).url)) (a = Fc(a, b)), (f = a.hostname), (e = a.href);
        return [d + "://" + f + "/" + c, e || ""];
      }
      function oe(a) {
        return (a.split(":")[1] || "")
          .replace(/^\/*/, "")
          .replace(/^www\./, "")
          .split("/")[0];
      }
      function oh(a, b, c, d) {
        var e;
        if ((a = Ta(a, c))) {
          var f = d.data;
          c = "" + c.id;
          var g = d.sended || [];
          d.sended || (d.sended = g);
          N(c, g) ||
            !a.params ||
            (d.counter && "" + d.counter !== c) ||
            (a.params(f),
            g.push(c),
            d.parent && b.Ub(((e = {}), (e.type = "params"), (e.data = f), e)));
        }
      }
      function Pd(a, b, c) {
        void 0 === c && (c = K);
        var d = Gc(a);
        c(d);
        var e = w(d, ph);
        Hc(a, b, function (f) {
          f.Va.B(e);
        });
        return d;
      }
      function ph(a, b) {
        var c = n(b, "ymetrikaEvent");
        c && a.H(n(c, "type"), c);
      }
      function Hc(a, b, c, d) {
        void 0 === c && (c = L);
        void 0 === d && (d = !1);
        var e = Rb(a);
        if (b && R(b.push)) {
          var f = b.push;
          b.push = function () {
            var g = ia(arguments),
              h = g[0];
            d && e.H(h);
            g = f.apply(b, g);
            d || e.H(h);
            return g;
          };
          a = {
            Va: e,
            unsubscribe: function () {
              b.push = f;
            },
          };
          c(a);
          x(e.H, b);
          return a;
        }
      }
      function Ib(a) {
        a = C(a);
        var b = a.l("dataLayer", []);
        a.m("dataLayer", b);
        return b;
      }
      function lg(a, b) {
        var c, d;
        a.push(((c = {}), (c.ymetrikaEvent = ((d = {}), (d.type = b), d)), c));
      }
      function pe(a, b) {
        var c = Sb(a, b),
          d = [],
          e = [];
        if (!c) return null;
        var f = I([a, c.Tb], qh),
          g = w(f, rh);
        c.I.B(["initToParent"], function (h) {
          g(d, c.children[h[1].counterId]);
        }).B(["parentConnect"], function (h) {
          g(e, c.U[h[1].counterId]);
        });
        return {
          I: c.I,
          Vd: function (h, k) {
            return new O(function (l, m) {
              c.Tb(h, k, function (p, t) {
                l([p, t]);
              });
              da(a, w(Da(), m), 5100, "is.o");
            });
          },
          Sb: function (h) {
            var k = { Wb: [], kb: [], data: h };
            d.push(k);
            return f(c.children, k, h);
          },
          Ub: function (h) {
            var k = { Wb: [], kb: [], data: h };
            e.push(k);
            return f(c.U, k, h);
          },
        };
      }
      function rh(a, b, c) {
        b = aa(function (d) {
          return !N(c.info.counterId, d.kb);
        }, b);
        x(function (d) {
          var e;
          c.info.counterId &&
            a(((e = {}), (e[c.info.counterId] = c), e), d, d.data);
        }, b);
      }
      function qh(a, b, c, d, e) {
        return new O(function (f, g) {
          var h = V(c),
            k = r(d.resolve ? d.resolve : K, Ic(f)),
            l = r(d.reject ? d.reject : K, Ic(g));
          d.resolve = k;
          d.reject = l;
          x(function (m) {
            var p;
            d.kb.push(+m);
            var t = c[m],
              u = da(a, w(Da(), l), 5100, "is.m");
            b(
              t.window,
              v(e, ((p = {}), (p.toCounter = Ja(m)), p)),
              function (y, B) {
                Pa(a, u);
                d.Wb.push(m);
                d.resolve && d.resolve(B);
              }
            );
          }, h);
        })["catch"](A(a, "if.b"));
      }
      function sh(a) {
        var b = L,
          c = null,
          d = a.length;
        if (0 !== a.length && a[0]) {
          var e = a.slice(-1)[0];
          R(e) && ((b = e), (d = a.length + -1));
          var f = a.slice(-2)[0];
          R(f) && ((b = f), (c = e), (d = a.length + -2));
          d = a.slice(0, d);
          return { qc: c, sa: b, D: 1 === d.length ? a[0] : th(d) };
        }
      }
      function hb(a, b, c, d, e) {
        var f = I([a, d, e], qe);
        return c.then(f, function (g) {
          f();
          zc(a, b, g);
        });
      }
      function re(a, b) {
        return {
          F: function (c, d) {
            var e = (c.C || {}).D,
              f = c.G;
            f = void 0 === f ? {} : f;
            if (e && (se(b, e), !f.L && c.A && c.o)) {
              var g = Ca(a, e),
                h = te(a),
                k = c.A.l("pv");
              g &&
                !c.o.nohit &&
                (k
                  ? encodeURIComponent(g).length > uh
                    ? h.push([c.A, e])
                    : (c.o["site-info"] = g)
                  : ((f.L = g), (c.G = f), c.$ || (c.$ = {}), (c.$.Hc = !0)));
            }
            d();
          },
          Y: function (c, d) {
            var e = te(a),
              f = Ta(a, b),
              g = f && f.params;
            g &&
              ((f = aa(r(Tb, za(c.A)), e)),
              x(function (h) {
                g(h[1]);
                h = Jc(a)(h, e);
                e.splice(h, 1);
              }, f));
            d();
          },
        };
      }
      function ue(a, b) {
        return function (c) {
          ve(a, b, c);
        };
      }
      function vh(a, b) {
        Kc(a)(function (c) {
          delete c[b];
        });
      }
      function ve(a, b, c) {
        Kc(a)(function (d) {
          d[b] = v(d[b] || {}, c);
        });
      }
      function Kc(a) {
        a = C(a);
        var b = a.l("dsjf") || ra({});
        a.X("dsjf", b);
        return b;
      }
      function Ta(a, b) {
        var c = C(a).l("counters", {}),
          d = F(b);
        return c[d];
      }
      function we(a, b) {
        C(a).m("dce:" + b, !0);
        var c = C(a).l("dclq:" + b);
        c &&
          (x(function (d) {
            var e = d[0];
            d = d[1];
            ba.apply(void 0, ta([Lc(a, b)[e]], d));
          }, c),
          Mc(c));
      }
      function sb(a, b, c, d) {
        return xe(b)
          ? L
          : w(I(ta([a, F(b)], d ? [c + ". Params:", d] : [c]), db), ba);
      }
      function db() {
        var a = ia(arguments),
          b = a.slice(2);
        Lc(a[0], a[1]).log.apply(db, b);
      }
      function ye(a) {
        var b = "1" === ub(a).l("debug"),
          c = -1 < Q(a).href.indexOf("_ym_debug=1");
        a = a._ym_debug;
        return { xc: b, Cc: a || c, isEnabled: Ub(Boolean, [b, a, c]) };
      }
      function Ua(a, b) {
        var c = F(a);
        return ze()(wh(c)).then(b);
      }
      function xh(a, b, c) {
        b = F(b);
        a = Ae(a);
        c = v({ tc: a(P) }, c);
        return ze()(yh(b, c));
      }
      function yh(a, b) {
        return function (c) {
          var d = c[a];
          d
            ? ((d.Mc = b), (d.Pb = !0), d.Ob ? d.Ob(b) : (d.Xa = O.resolve(b)))
            : (c[a] = { Xa: O.resolve(b), Mc: b, Pb: !0 });
        };
      }
      function vb(a) {
        return z(function (b) {
          return !b || N(b, a) ? b : 0;
        }, ib);
      }
      function Nc(a) {
        var b = Oc(a);
        return b ? I([a, b], zh) : !1;
      }
      function zh(a, b, c, d) {
        return new O(function (e, f) {
          var g = Pc(a),
            h = b("img"),
            k = r(w(h, Be), w(Da(d.Z), f)),
            l = Qc(a, k, d.hb || 3e3);
          h.onerror = k;
          h.onload = r(w(h, Be), w(null, e), I([a, l], Pa));
          l = v({}, d.Za);
          delete l.wmode;
          k = c;
          (l = Ce(l)) && (k += "?" + l);
          d.L && (k += (l ? "&" : "?") + d.L);
          h.src = k;
          De(a) &&
            (v(h.style, {
              position: "absolute",
              visibility: "hidden",
              width: "0px",
              height: "0px",
            }),
            g.appendChild(h));
        });
      }
      function wb(a) {
        var b;
        if ((b = n(a, "XMLHttpRequest")))
          if ((b = "withCredentials" in new a.XMLHttpRequest())) {
            a: {
              if (
                Ah.test(a.location.host) &&
                a.opera &&
                R(a.opera.version) &&
                ((b = a.opera.version()),
                "string" === typeof b && "12" === b.split(".")[0])
              ) {
                b = !0;
                break a;
              }
              b = !1;
            }
            b = !b;
          }
        return b ? w(a, Bh) : !1;
      }
      function Bh(a, b, c) {
        var d,
          e = new a.XMLHttpRequest(),
          f = c.L,
          g = v(c.ic ? ((d = {}), (d.wmode = "7"), d) : {}, c.Za);
        return new O(function (h, k) {
          e.open(c.hc || "GET", b + "?" + Ce(g), !0);
          e.withCredentials = !1 !== c.fd;
          c.hb && (e.timeout = c.hb);
          Ee(
            ya,
            xb(function (m) {
              e.setRequestHeader(m[0], m[1]);
            })
          )(c.ja);
          var l = I([a, e, Da(c.Z), c.ic, c.Oc, h, k], Ch);
          e.onreadystatechange = l;
          try {
            e.send(f);
          } catch (m) {}
        });
      }
      function Ch(a, b, c, d, e, f, g, h) {
        if (4 === b.readyState)
          if ((200 === b.status || e || g(c), e))
            200 === b.status
              ? f(b.responseText)
              : g(
                  Gb(
                    "http." +
                      b.status +
                      ".st." +
                      b.statusText +
                      ".rt." +
                      ("" + b.responseText).substring(0, 50)
                  )
                );
          else {
            e = null;
            if (d)
              try {
                (e = Vb(a, b.responseText)) || g(c);
              } catch (k) {
                g(c);
              }
            f(e);
          }
        return h;
      }
      function Dh(a, b, c) {
        var d = z(Tb, Xa[b] || Ya);
        x(function (e) {
          return d.unshift(e);
        }, Wb);
        return z(r(jb([a, c]), ba), d);
      }
      function Fe(a, b) {
        var c = Q(a),
          d = c.href,
          e = c.host,
          f = -1;
        if (!Wa(b) || Z(b)) return d;
        c = b.replace(Ge, "");
        if (-1 !== c.search(Eh)) return c;
        var g = c.charAt(0);
        if (
          ("?" === g && ((f = d.search(/\?/)), -1 === f)) ||
          ("#" === g && ((f = d.search(/#/)), -1 === f))
        )
          return d + c;
        if (-1 !== f) return d.substr(0, f) + c;
        if ("/" === g) {
          if (((f = d.indexOf(e)), -1 !== f))
            return d.substr(0, f + e.length) + c;
        } else return (d = d.split("/")), (d[d.length - 1] = c), M("/", d);
        return "";
      }
      function He(a, b) {
        return {
          F: function (c, d) {
            var e,
              f = c.A,
              g = c.o,
              h = c.G;
            h = void 0 === h ? {} : h;
            if (f && g) {
              var k = X(a);
              f.Yb("rqnl", 1);
              for (var l = yb(a), m = 1; l[m]; ) m += 1;
              c.C || (c.C = {});
              c.C.na = m;
              l[m] =
                ((e = {}),
                (e.protocol = "https:"),
                (e.host = Va),
                (e.resource = "watch"),
                (e.postParams = h.L),
                (e.time = k(P)),
                (e.counterType = b.K),
                (e.params = g),
                (e.browserInfo = f.b()),
                (e.counterId = b.id),
                (e.ghid = Za(a)),
                e);
              Rc(a);
            }
            d();
          },
          Y: function (c, d) {
            Ie(a, c);
            d();
          },
        };
      }
      function Ie(a, b) {
        var c = yb(a);
        b.A && !kb(c) && b.C && (delete c[b.C.na], Rc(a));
      }
      function Rc(a) {
        var b = yb(a);
        Ga(a).m("retryReqs", b);
      }
      function Xb(a, b) {
        return {
          F: function (c, d) {
            var e = Je(b);
            e = I([c, e, d], Fh);
            Gh(a, b, e);
          },
          Y: function (c, d) {
            var e = c.A,
              f = Je(b);
            if (e) {
              var g = f.N;
              f.vb === e && g && (x(ba, g), (f.N = null));
            }
            d();
          },
        };
      }
      function Fh(a, b, c) {
        var d = a.A;
        d ? (Ud(a) ? ((b.vb = d), c()) : b.N ? b.N.push(c) : c()) : c();
      }
      function Ud(a) {
        return (a = a.A) && a.l("pv") && !a.l("ar");
      }
      function Gh(a, b, c) {
        if (Sc(a) && Oa(a)) {
          var d = Hh(b);
          if (!d.Dc) {
            d.Dc = !0;
            b = Sb(a, b);
            if (!b) {
              c();
              return;
            }
            d.N = [];
            var e = function () {
              d.N && (x(ba, d.N), (d.N = null));
            };
            da(a, e, 3e3);
            b.I.B(["initToChild"], e);
          }
          d.N ? d.N.push(c) : c();
        } else c();
      }
      function Ke(a) {
        return {
          F: function (b, c) {
            var d = b.A;
            if (d) {
              var e = a.document.title;
              b.C && b.C.title && (e = b.C.title);
              var f = lb("getElementsByTagName", a.document);
              "string" !== typeof e &&
                f &&
                ((e = f("title")), (e = (e = n(e, "0.innerHtml")) ? e : ""));
              e = e.slice(0, Ih);
              d.m("t", e);
            }
            c();
          },
        };
      }
      function $a(a) {
        return function (b, c) {
          return {
            F: function (d, e) {
              var f = d.A,
                g = d.o;
              f &&
                g &&
                x(function (h) {
                  var k = Tc[h];
                  k && ((k = J("bi:" + h, k, null)(b, c, d)), f.Yb(h, k));
                }, a || Jh());
              e();
            },
          };
        };
      }
      function Kh(a, b) {
        var c = zb(a);
        b.B(["initToParent"], function (d) {
          var e = d[0];
          d = d[1];
          window.window &&
            (c.children[d.counterId] = { info: d, window: e.source });
        })
          .B(["initToChild"], function (d) {
            var e = d[0];
            d = d[1];
            e.source === a.parent && b.H("parentConnect", [e, d]);
          })
          .B(["parentConnect"], function (d) {
            var e = d[1];
            e.counterId &&
              (c.U[e.counterId] = { info: e, window: d[0].source });
          });
      }
      function Lh(a) {
        if (Ea("MutationObserver", a.MutationObserver)) {
          var b = zb(a).children,
            c = new a.MutationObserver(function () {
              x(function (d) {
                n(b[d], "window.window") || delete b[d];
              }, V(b));
            });
          Bc(a)(
            Ha(L, function () {
              c.observe(a.document.body, { subtree: !0, childList: !0 });
            })
          );
        }
      }
      function Mh(a, b) {
        return function (c, d) {
          var e,
            f = { Ha: X(a)(P), key: a.Math.random(), dir: 0 };
          c.length &&
            ((f.Ha = Ja(c[0])), (f.key = parseFloat(c[1])), (f.dir = Ja(c[2])));
          v(d, b);
          var g =
            ((e = { data: d }),
            (e.__yminfo = M(":", ["__yminfo", f.Ha, f.key, f.dir])),
            e);
          return { T: f, Zb: Ca(a, g) || "" };
        };
      }
      function Bc(a, b) {
        function c(e) {
          n(b, d) ? e() : da(a, w(e, c), 100);
        }
        void 0 === b && (b = a);
        var d = (b.nodeType ? "contentWindow." : "") + "document.body";
        return ra(function (e, f) {
          c(f);
        });
      }
      function Yb(a, b) {
        var c = b.Ta,
          d = c || "uid";
        c = c ? a.location.hostname : void 0;
        var e = ub(a),
          f = Ga(a),
          g = X(a)(Uc),
          h = Le(a, b),
          k = h[0];
        h = h[1];
        var l = e.l("d");
        Nh(a, b);
        var m = !1;
        !h && k && ((h = k), (m = !0));
        if (!h) (h = M("", [g, mb(a, 1e6, 999999999)])), (m = !0);
        else if (!l || 15768e3 < g - Ja(l)) m = !0;
        m && !b.Aa && (e.m(d, h, 525600, c), e.m("d", "" + g, 525600, c));
        f.m(d, h);
        return h;
      }
      function Le(a, b) {
        var c = Ga(a),
          d = ub(a),
          e = b.Ta || "uid";
        return [c.l(e), d.l(e)];
      }
      function Vc(a, b, c, d, e, f, g) {
        void 0 === g && (g = !1);
        if (Oh(a, Wc, b)) {
          var h = b + "=" + encodeURIComponent(c) + ";";
          if (d) {
            var k = new Date();
            k.setTime(k.getTime() + 6e4 * d);
            h += "expires=" + k.toUTCString() + ";";
          }
          e && ((d = e.replace(Ph, "")), (h += "domain=" + d + ";"));
          try {
            (a.document.cookie = h + ("path=" + (f || "/"))),
              g || (Me(a)[b] = c);
          } catch (l) {}
        }
      }
      function Wc(a, b) {
        var c = Me(a);
        return c ? c[b] || null : null;
      }
      function Ne(a) {
        try {
          var b = a.document.cookie;
          if (!la(b)) {
            var c = {};
            x(function (d) {
              var e = d.split("=");
              d = e[1];
              e = rb(e[0]);
              var f = "";
              try {
                f = decodeURIComponent(d);
              } catch (g) {}
              c[e] = rb(f);
            }, (b || "").split(";"));
            return c;
          }
        } catch (d) {}
        return null;
      }
      function Oh(a, b, c) {
        return !Xc.length || N(c, Oe)
          ? !0
          : H(
              function (d, e) {
                return d && e(a, b, c);
              },
              !0,
              Xc
            );
      }
      function Za(a) {
        var b = C(a),
          c = b.l("hitId");
        c || ((c = mb(a)), b.m("hitId", c));
        return c;
      }
      function Q(a) {
        return H(
          function (b, c) {
            var d = n(a, "location." + c);
            b[c] = d ? "" + d : "";
            return b;
          },
          {},
          Qh
        );
      }
      function Zb(a, b) {
        if (b.querySelector) return b.querySelector(a);
        var c = Yc(a, b);
        return c && c.length ? c[0] : null;
      }
      function Yc(a, b) {
        if (!b) return [];
        var c = b.querySelectorAll(a);
        return c ? Cc(c) : [];
      }
      function le(a) {
        var b = null;
        try {
          b = a.target || a.srcElement;
        } catch (c) {}
        if (b) {
          3 === b.nodeType && (b = b.parentNode);
          for (
            a = b && b.nodeName && ("" + b.nodeName).toLowerCase();
            n(b, "parentNode.nodeName") &&
            (("a" !== a && "area" !== a) ||
              (!b.href && !b.getAttribute("xlink:href")));

          )
            a =
              (b = b.parentNode) &&
              b.nodeName &&
              ("" + b.nodeName).toLowerCase();
          return b.href ? b : null;
        }
        return null;
      }
      function tg(a, b) {
        var c = a.document,
          d = v({ type: "text/javascript", charset: "utf-8", async: !0 }, b),
          e = Oc(a);
        if (e) {
          var f = e("script");
          Ee(
            ya,
            xb(function (l) {
              var m = l[0];
              l = l[1];
              "async" === m && l ? (f.async = !0) : (f[m] = l);
            })
          )(d);
          try {
            var g = lb("getElementsByTagName", c),
              h = g("head")[0];
            if (!h) {
              var k = g("html")[0];
              h = e("head");
              k && k.appendChild(h);
            }
            h.insertBefore(f, h.firstChild);
            return f;
          } catch (l) {}
        }
      }
      function rb(a, b) {
        if (a) {
          var c = Pe ? Pe.call(a) : ("" + a).replace(Ge, "");
          return b && c.length > b ? c.substring(0, b) : c;
        }
        return "";
      }
      function Zc(a, b, c) {
        if (!(b && b.Element && b.Element.prototype && b.document && c))
          return null;
        if (
          b.Element.prototype.closest &&
          Ea("closest", b.Element.prototype.closest) &&
          c.closest
        )
          return c.closest(a);
        var d = Rh(b);
        if (d) {
          for (; c && 1 === c.nodeType && !d.call(c, a); )
            c = c.parentElement || c.parentNode;
          return c && 1 === c.nodeType ? c : null;
        }
        if (Qe(b)) {
          for (
            a = Cc((b.document || b.ownerDocument).querySelectorAll(a));
            c && 1 === c.nodeType && -1 === $b(b)(c, a);

          )
            c = c.parentElement || c.parentNode;
          return c && 1 === c.nodeType ? c : null;
        }
        return null;
      }
      function Qe(a) {
        return !(
          !Ea("querySelectorAll", n(a, "Element.prototype.querySelectorAll")) ||
          !a.document.querySelectorAll
        );
      }
      function Re(a) {
        try {
          return a.getBoundingClientRect && a.getBoundingClientRect();
        } catch (b) {
          return "object" === typeof b &&
            null !== b &&
            16389 === (b.Ic && b.Ic & 65535)
            ? { top: 0, bottom: 0, left: 0, width: 0, height: 0, right: 0 }
            : null;
        }
      }
      function Se(a) {
        var b = Te(a);
        if (b) {
          var c = b[2];
          return [a.Math.round(b[0] * c), a.Math.round(b[1] * c)];
        }
        b = Pc(a);
        return [
          n(b, "clientWidth") || a.innerWidth,
          n(b, "clientHeight") || a.innerHeight,
        ];
      }
      function Te(a) {
        var b = n(a, "visualViewport.width"),
          c = n(a, "visualViewport.height");
        a = n(a, "visualViewport.scale");
        return la(b) || la(c) ? null : [Math.floor(b), Math.floor(c), a];
      }
      function Pc(a) {
        var b = n(a, "document") || {},
          c = b.documentElement;
        return "CSS1Compat" === b.compatMode ? c : Ue(a) || c;
      }
      function Ue(a) {
        a = n(a, "document");
        try {
          return a.getElementsByTagName("body")[0];
        } catch (b) {
          return null;
        }
      }
      function me(a, b) {
        try {
          return new RegExp("(?:^|\\s)" + a + "(?:\\s|$)").test(b.className);
        } catch (c) {
          return !1;
        }
      }
      function Be(a) {
        var b = a && a.parentNode;
        b && b.removeChild(a);
      }
      function ac(a) {
        return a ? a.innerText || "" : "";
      }
      function ch(a) {
        if (la(a)) return !1;
        a = a.nodeType;
        return 3 === a || 8 === a;
      }
      function Ve(a, b, c) {
        void 0 === b && (b = "");
        void 0 === c && (c = "_ym");
        var d = "" + c + b + "_";
        return {
          Bc: Sh(a),
          l: function (e, f) {
            var g = We(a, "" + d + e);
            return kb(g) && !Z(f) ? f : g;
          },
          m: function (e, f) {
            Xe(a, "" + d + e, f);
            return this;
          },
          wa: function (e) {
            Ye(a, "" + d + e);
            return this;
          },
        };
      }
      function Xe(a, b, c) {
        var d = $c(a);
        a = Ca(a, c);
        if (!kb(a))
          try {
            d.setItem(b, a);
          } catch (e) {}
      }
      function We(a, b) {
        var c = $c(a);
        try {
          return Vb(a, c.getItem(b));
        } catch (d) {}
        return null;
      }
      function Ye(a, b) {
        var c = $c(a);
        try {
          c.removeItem(b);
        } catch (d) {}
      }
      function $c(a) {
        try {
          return a.localStorage;
        } catch (b) {}
        return null;
      }
      function Ca(a, b, c) {
        try {
          return a.JSON.stringify(b, null, c);
        } catch (d) {
          return null;
        }
      }
      function ad(a) {
        return {
          F: function (b, c) {
            var d = a.document,
              e = b.A;
            if (e && Ze(a)) {
              var f = Ia(a),
                g = function (h) {
                  Ze(a) || (f.qa(d, $e, g), c());
                  return h;
                };
              f.B(d, $e, g);
              e.m("pr", "1");
            } else c();
          },
        };
      }
      function va(a, b, c) {
        return function (d, e) {
          var f = Mb(z(r(Tb, jb([a, e]), ba), af.w || []), c);
          return bd(a, b, f)(d);
        };
      }
      function bd(a, b, c) {
        var d = Ab(a, b);
        return function (e) {
          return bf(c, e, !0)
            .then(function () {
              var f = e.ba || {},
                g = f.Ad,
                h = void 0 === g ? "" : g;
              g = f.aa;
              var k = void 0 === g ? "" : g;
              f = f.yc;
              f = z(
                function (l) {
                  return "https://" + ("" + h + l || Va) + "/" + k;
                },
                void 0 === f ? [Va] : f
              );
              return d(e, f);
            })
            .then(function (f) {
              var g = f.Qb;
              f = f.cc;
              e.Td = g;
              e.Ud = f;
              return bf(c, e).then(w(g, K));
            });
        };
      }
      function Ab(a, b) {
        return function (c, d) {
          return cf(a, b, d, c);
        };
      }
      function cf(a, b, c, d, e, f) {
        var g;
        void 0 === e && (e = 0);
        void 0 === f && (f = 0);
        var h = v({ Z: [] }, d.G),
          k = b[f],
          l = k[0];
        k = k[1];
        var m = c[e];
        (h.ja && h.ja["Content-Type"]) ||
          !h.L ||
          ((h.ja = v(
            {},
            h.ja,
            ((g = {}),
            (g["Content-Type"] = "application/x-www-form-urlencoded"),
            g)
          )),
          (h.L = "site-info=" + Ac(h.L)));
        h.hc = h.L ? "POST" : "GET";
        h.Za = Th(a, d, l);
        h.Z.push(l);
        v(d.G, h);
        return k("" + m + (d.$ && d.$.Hc ? "/1" : ""), h)
          .then(function (p) {
            return { Qb: p, cc: e };
          })
          ["catch"](function (p) {
            var t = f + 1 >= b.length,
              u = e + 1 >= c.length;
            t && u && Ba(p);
            return cf(a, b, c, d, !u && t ? e + 1 : e, t ? 0 : f + 1);
          });
      }
      function Th(a, b) {
        var c = v({}, b.o),
          d = X(a);
        b.A && (c["browser-info"] = fa(b.A.b()).m("st", d(Uc)).oa());
        return c;
      }
      function Ce(a) {
        return a
          ? r(
              ya,
              ee(function (b, c) {
                var d = c[0],
                  e = c[1];
                Z(e) || la(e) || b.push(d + "=" + Ac(e));
                return b;
              }, []),
              df("&")
            )(a)
          : "";
      }
      function Ac(a) {
        try {
          return encodeURIComponent(a);
        } catch (b) {}
        a = M(
          "",
          aa(function (b) {
            return 55296 >= b.charCodeAt(0);
          }, a.split(""))
        );
        return encodeURIComponent(a);
      }
      function bf(a, b, c) {
        void 0 === c && (c = !1);
        return new O(function (d, e) {
          function f(k, l) {
            l();
            d();
          }
          var g = a.slice();
          g.push({ F: f, Y: f });
          var h = uc(g, function (k, l) {
            var m = c ? k.F : k.Y;
            if (m)
              try {
                m(b, l);
              } catch (p) {
                h(Uh), e(p);
              }
            else l();
          });
          h(ef);
        });
      }
      function qc(a, b, c) {
        var d = c || "as";
        if (a.postMessage && !a.attachEvent) {
          c = Ia(a);
          var e = "__ym__promise_" + mb(a) + "_" + mb(a),
            f = L;
          d = A(a, d, function (g) {
            try {
              var h = g.data;
            } catch (k) {
              return;
            }
            h === e && (f(), g.stopPropagation && g.stopPropagation(), b());
          });
          f = c.B(a, ["message"], d);
          a.postMessage(e, "*");
        } else da(a, b, 0, d);
      }
      function Zf(a, b, c, d, e) {
        void 0 === d && (d = 1);
        void 0 === e && (e = "itc");
        b = uc(b, c);
        Qd(a, b, d)(Ha(A(a, e), L));
      }
      function Qd(a, b, c, d) {
        void 0 === c && (c = 1);
        void 0 === d && (d = Vh);
        cd = Infinity === c;
        return ra(function (e, f) {
          function g() {
            try {
              var k = b(d(a, c));
              h = h.concat(k);
            } catch (l) {
              return e(l);
            }
            b(Wh);
            if (b(bc)) return f(h), ff(a);
            cd ? (b(d(a, 1e4)), f(h), ff(a)) : da(a, g, 100);
          }
          var h = [];
          Xh(g);
        });
      }
      function ff(a) {
        if (dd.length) {
          var b = dd.shift();
          cd ? b() : da(a, b, 100);
        } else ed = !1;
      }
      function Xh(a) {
        ed ? dd.push(a) : ((ed = !0), a());
      }
      function Yh(a) {
        return ra(function (b, c) {
          c(a);
        });
      }
      function Pg(a) {
        return ra(function (b, c) {
          a.then(c, b);
        });
      }
      function Og(a) {
        var b = [],
          c = !1;
        return ra(function (d, e) {
          function f(g) {
            b.push(g) === a.length && d(b);
          }
          x(function (g) {
            g(
              Ha(f, function (h) {
                if (!c)
                  try {
                    e(h), (c = !0);
                  } catch (k) {
                    f(k);
                  }
              })
            );
          }, a);
        });
      }
      function Ha(a, b) {
        return function (c) {
          return c(a, b);
        };
      }
      function uc(a, b) {
        void 0 === b && (b = K);
        return ra({ za: a, Gb: b, gb: !1, O: 0 });
      }
      function ef(a) {
        function b() {
          function d() {
            c = !0;
            a.O += 1;
          }
          c = !1;
          a.Gb(a.za[a.O], function () {
            d();
          });
          c || ((a.O += 1), (d = w(a, ef)));
        }
        for (var c = !0; !bc(a) && c; ) b();
      }
      function Vh(a, b) {
        return function (c) {
          var d = X(a),
            e = d(P);
          return Zh(function (f, g) {
            d(P) - e >= b && g($h);
          })(c);
        };
      }
      function ai(a) {
        bc(a) && Ba(Gb("i"));
        var b = a.Gb(a.za[a.O]);
        a.O += 1;
        return b;
      }
      function Wh(a) {
        a.gb = !1;
      }
      function $h(a) {
        a.gb = !0;
      }
      function Uh(a) {
        a.O = a.za.length;
      }
      function bc(a) {
        return a.gb || a.za.length <= a.O;
      }
      function bi(a) {
        var b = a.P,
          c = b[1];
        a = b[0] && c ? c() : P(a) - a.zc;
        return Math.round(a);
      }
      function Uc(a) {
        return Math.round(P(a) / 1e3);
      }
      function eb(a) {
        return Math.floor(P(a) / 1e3 / 60);
      }
      function P(a) {
        var b = a.lb;
        return 0 !== b ? b : fd(a.b, a.P);
      }
      function Ae(a) {
        var b = Ia(a),
          c = gf(a),
          d = { b: a, lb: 0, P: c, zc: fd(a, c) },
          e = c[1];
        (c[0] && e) ||
          b.B(a, ["beforeunload", "unload"], function () {
            0 === d.lb && (d.lb = fd(a, d.P));
          });
        return ra(d);
      }
      function ci(a) {
        return (10 > a ? "0" : "") + a;
      }
      function di(a, b, c) {
        function d() {
          f = 0;
          g && ((g = !1), (f = da(a, d, c)), e.H(h));
        }
        var e = Rb(a),
          f,
          g = !1,
          h;
        b.B(function (k) {
          g = !0;
          h = k;
          f || d();
          return L;
        });
        return e;
      }
      function da(a, b, c, d) {
        return Qc(a, A(a, "d.err." + (d || "def"), b), c);
      }
      function Gc(a) {
        var b = {};
        return {
          B: function (c, d) {
            x(function (e) {
              n(b, e) || (b[e] = Rb(a));
              b[e].B(d);
            }, c);
            return this;
          },
          Da: function (c, d) {
            x(function (e) {
              n(b, e) && b[e].Da(d);
            }, c);
            return this;
          },
          H: function (c, d) {
            return n(b, c) ? A(a, "e." + d, b[c].H)(d) : [];
          },
        };
      }
      function Rb(a) {
        var b = [],
          c = {};
        c.Ed = b;
        c.B = r(ua("push", b), w(c, K));
        c.Da = r(Ka($b(a))(b), Ka(ua("splice", b))(1), w(c, K));
        c.H = r(K, Ka(ba), ei(b));
        return c;
      }
      function hf(a, b, c, d, e) {
        var f = a.addEventListener && a.removeEventListener,
          g = !f && a.attachEvent && a.detachEvent;
        if (f || g)
          if (
            ((e = e
              ? f
                ? "removeEventListener"
                : "detachEvent"
              : f
              ? "addEventListener"
              : "attachEvent"),
            f)
          )
            a[e](b, c, d);
          else a[e]("on" + b, c);
      }
      function J(a, b, c) {
        return function () {
          return A(arguments[0], a, b, c).apply(this, arguments);
        };
      }
      function A(a, b, c, d, e) {
        var f = c || Ba;
        return function () {
          var g = d;
          try {
            g = f.apply(e || null, arguments);
          } catch (h) {
            zc(a, b, h);
          }
          return g;
        };
      }
      function fd(a, b) {
        var c = b || gf(a),
          d = c[0];
        c = c[1];
        return !isNaN(d) && R(c)
          ? Math.round(c() + d)
          : a.Date.now
          ? a.Date.now()
          : new a.Date().getTime();
      }
      function gf(a) {
        a = Yd(a);
        var b = n(a, "timing.navigationStart"),
          c = n(a, "now");
        c && (c = W(c, a));
        return [b, c];
      }
      function Yd(a) {
        return n(a, "performance") || n(a, "webkitPerformance");
      }
      function zc(a, b, c) {
        var d = "u.a.e",
          e = "";
        c &&
          ("object" === typeof c
            ? (c.unk && Ba(c),
              (d = c.message),
              (e =
                ("string" === typeof c.stack &&
                  c.stack.replace(/\n/g, "\\n")) ||
                "n.s.e.s"))
            : (d = "" + c));
        fi(d) ||
          Ub(r(ua("indexOf", d), za(-1), Bb), gi) ||
          (hi(d) && 0.1 <= a.Math.random()) ||
          x(r(K, jb(["jserrs", d, b, e]), ba), jf);
      }
      function Hd() {
        var a = ia(arguments);
        return Ba(Da(a));
      }
      function Da(a) {
        var b = "";
        qa(a) ? (b = M(".", a)) : Wa(a) && (b = a);
        return Gb("err.kn(970)" + b);
      }
      function Gb(a, b) {
        void 0 === b && (b = !1);
        var c = Error(a);
        b && (c.unk = !0);
        return c;
      }
      function kf(a, b, c) {
        for (var d = [b, c], e = -1e4, f = 0; f < a.length; f += 1) {
          var g = a[f],
            h = g[0];
          g = g[1];
          if (c === g && h === b) return;
          if (c < g && c >= e) {
            a.splice(f, 0, d);
            return;
          }
          e = g;
        }
        a.push(d);
      }
      function cc(a) {
        x(function (b) {
          var c = b[1];
          Id[b[0]] = { V: c.V, Ca: c.Ca };
        }, ya(a));
      }
      function Wf(a, b, c, d, e) {
        var f = "object" === typeof a ? a : { id: a, K: d, ua: e, D: c };
        a = H(
          function (g, h) {
            var k = h[1],
              l = k.Ca;
            k = f[k.V];
            g[h[0]] = l ? l(k) : k;
            return g;
          },
          {},
          ya(b)
        );
        se(a, a.D || {});
        return a;
      }
      function lf(a) {
        a = F(a);
        return Qa[a] && Qa[a].Xc;
      }
      function se(a, b) {
        var c = F(a),
          d = n(b, "__ym.turbo_page"),
          e = n(b, "__ym.turbo_page_id");
        Qa[c] || (Qa[c] = {});
        if (d || e) (Qa[c].Xc = d), (Qa[c].Yc = e);
      }
      function Ze(a) {
        return N(
          "prerender",
          z(w(n(a, "document"), n), [
            "webkitVisibilityState",
            "visibilityState",
          ])
        );
      }
      function mb(a, b, c) {
        var d = Z(c);
        Z(b) && d
          ? ((d = 1), (b = 1073741824))
          : d
          ? (d = 1)
          : ((d = b), (b = c));
        return a.Math.floor(a.Math.random() * (b - d)) + d;
      }
      function ii() {
        var a = ia(arguments),
          b = a[0];
        for (a = a.slice(1); a.length; ) {
          var c = a.shift(),
            d;
          for (d in c) gd(c, d) && (b[d] = c[d]);
          gd(c, "toString") && (b.toString = c.toString);
        }
        return b;
      }
      function ji(a) {
        return Z(a)
          ? []
          : dc(
              function (b, c) {
                b.push([c, a[c]]);
                return b;
              },
              [],
              mf(a)
            );
      }
      function mf(a) {
        var b = [],
          c;
        for (c in a) gd(a, c) && b.push(c);
        return b;
      }
      function Mb(a, b) {
        x(r(K, ua("push", a)), b);
        return a;
      }
      function Mc(a) {
        return a.splice(0, a.length);
      }
      function Cc(a) {
        return a
          ? qa(a)
            ? a
            : ec
            ? ec(a)
            : "number" === typeof a.length && 0 <= a.length
            ? nf(a)
            : []
          : [];
      }
      function hd(a, b, c) {
        return c ? a : b;
      }
      function ki(a, b) {
        return dc(
          function (c, d, e) {
            c.push(a(d, e));
            return c;
          },
          [],
          b
        );
      }
      function li(a, b) {
        if (!id(a)) return !0;
        try {
          b.call({ 0: !0, length: -Math.pow(2, 32) + 1 }, function () {
            throw 1;
          });
        } catch (c) {
          return !1;
        }
        return !0;
      }
      function qa(a) {
        if (Cb) return Cb(a);
        (Cb = La(Array.isArray, "isArray")) || (Cb = mi);
        return Cb(a);
      }
      function ni(a, b) {
        return 1 <= of(za(a), b).length;
      }
      function oi(a, b) {
        for (var c = 0; c < b.length; c += 1)
          if (a.call(b, b[c], c)) return b[c];
      }
      function of(a, b) {
        return dc(
          function (c, d, e) {
            a(d, e) && c.push(d);
            return c;
          },
          [],
          b
        );
      }
      function qe(a, b, c) {
        try {
          if (R(b)) {
            var d = ia(arguments).slice(3);
            la(c) ? b.apply(void 0, d) : W.apply(void 0, ta([b, c], d))();
          }
        } catch (e) {
          Qc(a, w(e, Ba), 0);
        }
      }
      function Ba(a) {
        throw a;
      }
      function Qc(a, b, c) {
        return lb("setTimeout", a)(b, c);
      }
      function Pa(a, b) {
        return lb("clearTimeout", a)(b);
      }
      function jd() {
        return [];
      }
      function fc() {
        return {};
      }
      function lb(a, b) {
        var c = n(b, a),
          d = n(b, "constructor.prototype." + a) || c;
        try {
          if (d && d.apply)
            return function () {
              return d.apply(b, arguments);
            };
        } catch (e) {
          return c;
        }
        return d;
      }
      function gc(a, b) {
        return function () {
          var c = ia(arguments),
            d = c[0];
          c = c.slice(1);
          var e = C(d),
            f = e.l("m970", {}),
            g = n(f, a);
          g || ((g = q(b)), (f[a] = g), e.m("m970", f));
          return g.apply(void 0, ta([d], c));
        };
      }
      function th(a, b) {
        void 0 === b && (b = {});
        if (!a || 1 > a.length) return b;
        H(
          function (c, d, e) {
            if (e === a.length - 1) return c;
            e === a.length - 2 ? (c[d] = a[e + 1]) : c[d] || (c[d] = {});
            return c[d];
          },
          b,
          a
        );
        return b;
      }
      function n(a, b) {
        return a
          ? H(
              function (c, d) {
                if (la(c)) return c;
                try {
                  return c[d];
                } catch (e) {}
                return null;
              },
              a,
              b.split(".")
            )
          : null;
      }
      function gd(a, b) {
        return la(a) ? !1 : kd.call(a, b);
      }
      function q(a, b) {
        var c = [],
          d = [];
        var e = b ? b : K;
        return function () {
          var f = ia(arguments),
            g = e.apply(void 0, f),
            h = pf(g, d);
          if (-1 !== h) return c[h];
          f = a.apply(void 0, f);
          c.push(f);
          d.push(g);
          return f;
        };
      }
      function $b(a) {
        if (ld) return ld;
        var b = !1;
        try {
          b = [].indexOf && 0 === [void 0].indexOf(void 0);
        } catch (d) {}
        var c =
          a.Array &&
          a.Array.prototype &&
          La(a.Array.prototype.indexOf, "indexOf");
        return (ld = a =
          b && c
            ? function (d, e) {
                return c.call(e, d);
              }
            : pi);
      }
      function pi(a, b) {
        for (var c = 0; c < b.length; c += 1) if (b[c] === a) return c;
        return -1;
      }
      function ba(a, b) {
        return b ? a(b) : a();
      }
      function r() {
        var a = ia(arguments),
          b = a.shift();
        return function () {
          var c = b.apply(void 0, arguments);
          return H(qf, c, a);
        };
      }
      function ee(a, b) {
        return I([a, b], H);
      }
      function dc(a, b, c) {
        for (var d = 0, e = c.length; d < e; ) (b = a(b, c[d], d)), (d += 1);
        return b;
      }
      function ab(a) {
        return ua("test", a);
      }
      function ua(a, b) {
        return W(b[a], b);
      }
      function w(a, b) {
        return W(b, null, a);
      }
      function I(a, b) {
        return W.apply(void 0, ta([b, null], a));
      }
      function qi() {
        var a = ia(arguments),
          b = a[0],
          c = a[1],
          d = a.slice(2);
        return function () {
          var e = ta(d, ia(arguments));
          if (Function.prototype.call)
            return Function.prototype.call.apply(b, ta([c], e));
          if (c) {
            for (var f = "_b"; c[f]; ) f += "_" + f.length;
            c[f] = b;
            e = c[f] && rf(f, e, c);
            delete c[f];
            return e;
          }
          return rf(b, e);
        };
      }
      function rf(a, b, c) {
        void 0 === b && (b = []);
        c = c || {};
        var d = b.length,
          e = a;
        R(e) && ((e = "d"), (c[e] = a));
        var f;
        d
          ? 1 === d
            ? (f = c[e](b[0]))
            : 2 === d
            ? (f = c[e](b[0], b[1]))
            : 3 === d
            ? (f = c[e](b[0], b[1], b[2]))
            : 4 === d && (f = c[e](b[0], b[1], b[2], b[3]))
          : (f = c[e]());
        return f;
      }
      function ia(a) {
        if (ec)
          try {
            return ec(a);
          } catch (b) {}
        return nf(a);
      }
      function nf(a) {
        for (var b = a.length, c = [], d = 0; d < b; d += 1) c.push(a[d]);
        return c;
      }
      function Sa(a) {
        return !kb(a) && !Z(a) && "[object Object]" === Dc(a);
      }
      function la(a) {
        return Z(a) || kb(a);
      }
      function R(a) {
        return "function" === typeof a;
      }
      function Ka(a) {
        return function (b) {
          return function (c) {
            return a(c, b);
          };
        };
      }
      function ea(a) {
        return function (b) {
          return function (c) {
            return a(b, c);
          };
        };
      }
      function qf(a, b) {
        return b(a);
      }
      function ri(a, b) {
        for (var c = "", d = 0; d < b.length; d += 1)
          c += "" + (d ? a : "") + b[d];
        return c;
      }
      function kh(a) {
        return a
          .replace(/\^/g, "\\^")
          .replace(/\$/g, "\\$")
          .replace(si, "\\.")
          .replace(/\[/g, "\\[")
          .replace(/\]/g, "\\]")
          .replace(/\|/g, "\\|")
          .replace(/\(/g, "\\(")
          .replace(/\)/g, "\\)")
          .replace(/\?/g, "\\?")
          .replace(/\*/g, "\\*")
          .replace(/\+/g, "\\+")
          .replace(/\{/g, "\\{")
          .replace(/\}/g, "\\}");
      }
      function Wa(a) {
        return "string" === typeof a;
      }
      function Dc(a) {
        return Object.prototype.toString.call(a);
      }
      function md(a, b) {
        md =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (c, d) {
              c.__proto__ = d;
            }) ||
          function (c, d) {
            for (var e in d) d.hasOwnProperty(e) && (c[e] = d[e]);
          };
        return md(a, b);
      }
      function La(a, b) {
        return Ea(b, a) && a;
      }
      function Ea(a, b) {
        var c = hc(a, b);
        b && !c && nd.push([a, b]);
        return c;
      }
      function hc(a, b) {
        if (!b || "function" !== typeof b) return !1;
        try {
          var c = "" + b;
        } catch (h) {
          return !1;
        }
        var d = c.length;
        if (d > 35 + a.length) return !1;
        for (var e = d - 13, f = 0, g = 8; g < d; g += 1) {
          f =
            "[native code]"[f] === c[g] || (7 === f && "-" === c[g])
              ? f + 1
              : 0;
          if (12 === f) return !0;
          if (!f && g > e) break;
        }
        return !1;
      }
      function L() {}
      function Bb(a) {
        return !a;
      }
      function Fa(a, b) {
        return b;
      }
      function K(a) {
        return a;
      }
      function sf(a, b) {
        function c() {
          this.constructor = a;
        }
        md(a, b);
        a.prototype =
          null === b
            ? Object.create(b)
            : ((c.prototype = b.prototype), new c());
      }
      function ta() {
        for (var a = 0, b = 0, c = arguments.length; b < c; b++)
          a += arguments[b].length;
        a = Array(a);
        var d = 0;
        for (b = 0; b < c; b++)
          for (var e = arguments[b], f = 0, g = e.length; f < g; f++, d++)
            a[d] = e[f];
        return a;
      }
      function Vb(a, b) {
        if (!b) return null;
        try {
          return a.JSON.parse(b);
        } catch (c) {
          return null;
        }
      }
      function od(a) {
        a = "" + a;
        for (var b = 2166136261, c = a.length, d = 0; d < c; d += 1)
          (b ^= a.charCodeAt(d)),
            (b += (b << 1) + (b << 4) + (b << 7) + (b << 8) + (b << 24));
        return b >>> 0;
      }
      function tf(a, b, c, d, e) {
        void 0 === e && (e = !1);
        return Vc(a, b, "", -100, c, d, e);
      }
      function Jb(a, b, c) {
        void 0 === b && (b = "_ym_");
        void 0 === c && (c = "");
        var d = ti(a),
          e = 1 === (d || "").split(".").length ? d : "." + d,
          f = c ? "_" + c : "";
        return {
          wa: function (g, h, k) {
            tf(a, "" + b + g + f, h || e, k);
            return this;
          },
          l: function (g) {
            return Wc(a, "" + b + g + f);
          },
          m: function (g, h, k, l, m) {
            Vc(a, "" + b + g + f, h, k, l || e, m);
            return this;
          },
        };
      }
      function Fc(a, b) {
        var c = ui(a);
        return c
          ? ((c.href = b),
            {
              protocol: c.protocol,
              host: c.host,
              port: c.port,
              hostname: c.hostname,
              hash: c.hash,
              search: c.search,
              query: c.search.replace(/^\?/, ""),
              pathname: c.pathname || "/",
              path: (c.pathname || "/") + c.search,
              href: c.href,
            })
          : {};
      }
      function vi(a, b, c) {
        function d() {
          Pa(a, h);
          g(!1);
        }
        function e() {
          k = !0;
          g(!1);
          b();
        }
        function f() {
          Pa(a, h);
          if (k) g(!1);
          else {
            var E = Math.max(0, c - (t ? u : u + l(P) - y));
            E ? (h = da(a, e, E, "u.t.d.c")) : e();
          }
        }
        function g(E) {
          x(function (S) {
            var ja = S[0],
              Y = S[1];
            S = S[2];
            E ? B.B(ja, Y, S) : B.qa(ja, Y, S);
          }, D);
        }
        var h = 0,
          k = !1;
        if (uf(a)) return (h = da(a, b, c, "u.t.d")), d;
        var l = X(a),
          m = !1,
          p = !1,
          t = !0,
          u = 0,
          y = l(P),
          B = Ia(a),
          D = [
            [
              a,
              ["blur"],
              function () {
                t = m = p = !0;
                u += l(P) - y;
                y = l(P);
                f();
              },
            ],
            [
              a,
              ["focus"],
              function () {
                m || p || (u = 0);
                y = l(P);
                m = p = !0;
                t = !1;
                f();
              },
            ],
            [
              a.document,
              ["click", "mousemove", "keydown", "scroll"],
              function () {
                p || ((m = !0), (t = !1), (p = !0), f());
              },
            ],
          ];
        g(!0);
        f();
        return d;
      }
      function Gd(a, b, c, d) {
        return function () {
          if (Ta(a, b)) {
            var e = ia(arguments);
            return d.apply(void 0, e);
          }
        };
      }
      function Db(a, b, c) {
        var d = b.getAttribute("itemtype");
        c = Yc('[itemprop~="' + c + '"]', b);
        return d
          ? aa(function (e) {
              return e.parentNode && Zc("[itemtype]", a, e.parentNode) === b;
            }, c)
          : c;
      }
      function ma(a, b, c) {
        return (a = Db(a, b, c)) && a.length ? a[0] : null;
      }
      function na(a) {
        if (!a) return "";
        a = qa(a) ? a : [a];
        return a.length ? a[0].getAttribute("content") || ac(a[0]) : "";
      }
      function vf(a) {
        return a
          ? a.attributes && a.getAttribute("datetime")
            ? a.getAttribute("datetime")
            : na(a)
          : "";
      }
      function Kd(a, b, c, d) {
        return function () {
          var e = ia(arguments);
          e = d.apply(void 0, e);
          return Z(e) ? Ta(a, b) : e;
        };
      }
      function Jd(a, b, c, d) {
        return A(a, "cm." + c, d);
      }
      function Vf(a, b, c, d, e) {
        return c.length && e
          ? I(
              H(
                function (f, g, h) {
                  return c[h] ? f.concat(I([a, b, d], g)) : f;
                },
                [],
                c
              ),
              r
            )()(e)
          : e;
      }
      var nb = {
          construct: "Metrika2",
          callbackPostfix: "2",
          version: "3glvv5bhlfke9hangam02",
          host: "mc.yandex.ru",
        },
        nd = [],
        si = /\./g,
        wf = La(Array.prototype.join, "join"),
        M = wf
          ? function (a, b) {
              return wf.call(b, a);
            }
          : ri,
        za = ea(function (a, b) {
          return a === b;
        }),
        Ic = ea(function (a, b) {
          a(b);
          return b;
        }),
        df = ea(M),
        ra = ea(qf),
        kb = za(null),
        Z = za(void 0),
        ec = La(Array.from, "from"),
        xf = La(Function.prototype.bind, "bind"),
        W = xf
          ? function () {
              var a = ia(arguments);
              return xf.apply(a[0], ta([a[1]], a.slice(2)));
            }
          : qi,
        jb = ea(I),
        wi = ea(ua),
        yf = La(Array.prototype.reduce, "reduce"),
        H = yf
          ? function (a, b, c) {
              return yf.call(c, a, b);
            }
          : dc,
        Ee = r,
        eh = r(K, ba),
        ld,
        pf = $b(window),
        xi = Ka(pf),
        kd = Object.prototype.hasOwnProperty,
        C = q(function (a) {
          a = a.Ya = a.Ya || {};
          var b = (a._metrika = a._metrika || {});
          return {
            X: function (c, d) {
              kd.call(b, c) || (b[c] = d);
              return this;
            },
            m: function (c, d) {
              b[c] = d;
              return this;
            },
            l: function (c, d) {
              var e = b[c];
              return kd.call(b, c) || Z(d) ? e : d;
            },
          };
        }),
        U = Ka(n),
        ke = U("length"),
        zf = La(Array.prototype.filter, "filter"),
        aa = zf
          ? function (a, b) {
              return zf.call(b, a);
            }
          : of,
        Af = ea(aa),
        pd = Ea("find", Array.prototype.find)
          ? function (a, b) {
              return Array.prototype.find.call(b, a);
            }
          : oi,
        N = Array.prototype.includes
          ? function (a, b) {
              return Array.prototype.includes.call(b, a);
            }
          : ni,
        gb = Ka(N),
        Bf = q(function (a) {
          a = n(a, "navigator") || {};
          var b = n(a, "userAgent") || "";
          return { Cb: -1 < (n(a, "vendor") || "").indexOf("Apple"), dc: b };
        }),
        bb = q(U("navigator.userAgent")),
        id = q(function (a) {
          var b = n(a, "document.documentElement.style");
          a = n(a, "InstallTrigger");
          return !(!(b && "MozAppearance" in b) || la(a));
        }),
        Cb,
        mi = r(Dc, za("[object Array]")),
        Cf = La(Array.prototype.map, "map"),
        z =
          Cf && li(window, Array.prototype.map)
            ? function (a, b) {
                return b && 0 < b.length ? Cf.call(b, a) : [];
              }
            : ki,
        x = z,
        xb = ea(z),
        ei = Ka(z),
        Ub = hd(
          function (a, b) {
            return Array.prototype.some.call(b, a);
          },
          function (a, b) {
            for (var c = 0; c < b.length; c += 1)
              if (c in b && a.call(b, b[c], c)) return !0;
            return !1;
          },
          Ea("some", Array.prototype.some)
        ),
        Jc = q($b),
        Tb = U("0"),
        Ja = Ka(parseInt)(10),
        ya = Object.entries
          ? function (a) {
              return a ? Object.entries(a) : [];
            }
          : ji,
        V = Object.keys ? Object.keys : mf,
        v = Object.assign || ii,
        yi = ea(function (a, b) {
          return v({}, a, b);
        }),
        zi = q(r(U("String.fromCharCode"), w("fromCharCode", Ea), Bb)),
        Ai = q(r(bb, ab(/ipad|iphone|ipod/i))),
        Wd = q(function (a) {
          return n(a, "navigator.platform") || "";
        }),
        De = q(function (a) {
          a = Bf(a);
          var b = a.dc;
          return a.Cb && !b.match("CriOS");
        }),
        Bi = ab(
          /Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/
        ),
        Ci = ab(/; wv\)/),
        Di = q(function (a) {
          a = bb(a);
          return Ci(a) || Bi(a);
        }),
        Hg = q(function (a) {
          var b = (bb(a) || "").toLowerCase();
          a = Wd(a);
          return !(
            -1 === b.indexOf("android") ||
            -1 === b.indexOf(b, "mobile") ||
            !/^android|linux armv/i.test(a)
          );
        }),
        Ei =
          "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(
            " "
          ),
        Fi = q(function (a) {
          var b = n(a, "navigator.connection.type");
          if (Z(b)) return null;
          a = Jc(a)(b, Ei);
          return -1 === a ? b : "" + a;
        }),
        uf = q(r(U("document.addEventListener"), Bb)),
        Df = q(function (a) {
          var b = n(a, "navigator") || {};
          return H(
            function (c, d) {
              return c || n(b, d);
            },
            "",
            ["language", "userLanguage", "browserLanguage", "systemLanguage"]
          );
        }),
        Md = q(function (a) {
          var b = n(a, "navigator") || {};
          a = Df(a);
          Wa(a) || ((a = ""), (b = n(b, "languages.0")), Wa(b) && (a = b));
          return a.toLowerCase().split("-")[0];
        }),
        Oa = q(function (a) {
          var b = !1;
          try {
            b = a.top !== a;
          } catch (c) {}
          return b;
        }),
        Gi = q(function (a) {
          var b = !1;
          try {
            b = a.top.contentWindow;
          } catch (c) {}
          return b;
        }),
        Hi = q(function (a) {
          var b = !1;
          try {
            b = a.navigator.javaEnabled();
          } catch (c) {}
          return b;
        }),
        Ii = new RegExp(
          M(
            "|",
            "yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Chrome-Lighthouse;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm".split(
              ";"
            )
          ).replace(/[./]/g, "\\$&")
        ),
        kg = q(r(U("navigator.userAgent"), ab(Ii))),
        Ef = q(function (a) {
          var b = bb(a) || "",
            c = b.match(/Mac OS X ([0-9]+)_([0-9]+)/);
          c = c ? [+c[1], +c[2]] : [0, 0];
          b = b.match(/iPhone OS ([1-9]+)_([0-9]+)/);
          return 14 <= (b ? +b[1] : 0)
            ? !0
            : (Ai(a) || 10 < c[0] || (10 === c[0] && 13 <= c[1])) && De(a);
        }),
        Ji = /Edg\/(\d+)\./,
        Ki = /Firefox\/([0-9]+)/,
        Sc = q(function (a) {
          var b;
          if (!(b = Ef(a)))
            a: {
              if (id(a) && (b = bb(a).match(Ki)) && b.length) {
                b = 68 <= +b[1];
                break a;
              }
              b = !1;
            }
          if (!b)
            a: {
              if ((a = bb(a)) && (a = a.match(Ji)) && 1 < a.length) {
                b = 79 <= Ja(a[1]);
                break a;
              }
              b = !1;
            }
          return b;
        }),
        Ff = nb.construct,
        Va = nb.host,
        qd = uf(window),
        Li = qd ? 512 : 2048,
        uh = qd ? 512 : 2048,
        Ih = qd ? 100 : 400,
        Qa = {},
        F = q(function (a) {
          return a.id + ":" + a.K;
        }),
        ic = {
          id: "id",
          fc: "ut",
          K: "type",
          Ta: "ldc",
          Aa: "nck",
          Ka: "url",
          uc: "referrer",
        },
        Mi = /^\d+$/,
        rd = {
          id: function (a) {
            a = "" + (a || "0");
            Mi.test(a) || (a = "0");
            try {
              var b = Ja(a);
            } catch (c) {
              b = 0;
            }
            return b;
          },
          K: function (a) {
            return "" + (a || 0 === a ? a : "0");
          },
          Aa: Boolean,
          fc: Boolean,
        };
      ic.ua = "defer";
      rd.ua = Boolean;
      ic.D = "params";
      rd.D = function (a) {
        return Sa(a) || qa(a) ? a : null;
      };
      ic.$b = "trackLinks";
      var Id = H(
          function (a, b) {
            var c = b[0];
            a[c] = { V: b[1], Ca: rd[c] };
            return a;
          },
          {},
          ya(ic)
        ),
        fa = ea(function (a, b) {
          var c = b || {};
          return {
            b: w(c, K),
            l: function (d, e) {
              var f = c[d];
              return Z(f) && !Z(e) ? e : f;
            },
            m: function (d, e) {
              c[d] = e;
              return this;
            },
            Yb: function (d, e) {
              return "" === e || la(e) ? this : this.m(d, e);
            },
            oa: w(c, a),
          };
        })(function (a) {
          var b = "";
          a = H(
            function (c, d) {
              var e = d[0],
                f = "" + e + ":" + d[1];
              "t" === e ? (b = f) : c.push(f);
              return c;
            },
            [],
            ya(a)
          );
          b && a.push(b);
          return M(":", a);
        }),
        sd,
        af =
          ((sd = {}),
          (sd.w = [
            [
              function (a, b) {
                return {
                  F: function (c, d) {
                    var e,
                      f = c.o;
                    f =
                      ((e = {}),
                      (e["page-url"] = (f && f["page-url"]) || ""),
                      (e.charset = "utf-8"),
                      e);
                    "0" !== b.K && (f["cnt-class"] = b.K);
                    c.A || (c.A = fa());
                    e = c.A;
                    var g = c.G;
                    f = {
                      ba: { aa: "watch/" + b.id },
                      G: v(void 0 === g ? {} : g, {
                        ic: !(!e.l("pv") || e.l("ar") || e.l("wh")),
                      }),
                      o: v(c.o || {}, f),
                    };
                    v(c, f);
                    d();
                  },
                };
              },
              1,
            ],
          ]),
          sd),
        O = window.Promise,
        Ni = gb([26812653]),
        xe = q(r(U("id"), Ni), F),
        oc = [],
        sa = [],
        pb = [],
        pc = [],
        Oi = [],
        gi = [
          "http.0.st..rt.",
          "network error occurred",
          "send beacon",
          "Content Security Policy",
          "DOM Exception 18",
        ],
        hi = ab(/^http./),
        fi = ab(/^err.kn/),
        jf = [],
        Pi = q(function (a) {
          var b = !1;
          if (!a.addEventListener) return b;
          try {
            var c = Object.defineProperty({}, "passive", {
              get: function () {
                b = !0;
                return 1;
              },
            });
            a.addEventListener("test", L, c);
          } catch (d) {}
          return b;
        }),
        Qi = ea(function (a, b) {
          return a ? v({ capture: !0, passive: !0 }, b || {}) : !!b;
        }),
        Ia = q(function (a) {
          a = Pi(a);
          var b = Qi(a),
            c = {};
          return v(c, {
            B: function (d, e, f, g) {
              x(function (h) {
                var k = b(g);
                hf(d, h, f, k, !1);
              }, e);
              return W(c.qa, c, d, e, f, g);
            },
            qa: function (d, e, f, g) {
              x(function (h) {
                var k = b(g);
                hf(d, h, f, k, !0);
              }, e);
            },
          });
        }),
        X = q(Ae),
        Zh = ea(function (a, b) {
          for (var c = []; !bc(b); ) {
            var d = ai(b);
            a(d, function (e) {
              return e(b);
            });
            c.push(d);
          }
          return c;
        }),
        dd = [],
        ed = !1,
        cd = !1,
        $e = ["webkitvisibilitychange", "visibilitychange"],
        lh = /^ *(data|javascript):/i,
        ne = new RegExp(
          M("", [
            "\\.(" +
              M(
                "|",
                "3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip".split(
                  " "
                )
              ) +
              ")$",
          ]),
          "i"
        ),
        ca,
        Ri =
          ((ca = {}),
          (ca.hit = "h"),
          (ca.params = "p"),
          (ca.reachGoal = "g"),
          (ca.userParams = "up"),
          (ca.trackHash = "th"),
          (ca.accurateTrackBounce = "atb"),
          (ca.notBounce = "nb"),
          (ca.addFileExtension = "fe"),
          (ca.extLink = "el"),
          (ca.file = "fc"),
          (ca.trackLinks = "tl"),
          (ca.destruct = "d"),
          (ca.setUserID = "ui"),
          (ca.getClientID = "ci"),
          (ca.clickmap = "cm"),
          (ca.enableAll = "ea"),
          ca),
        Gf = {},
        jc = I([1, null], hd),
        Si = I([1, 0], hd),
        Sh = q(function (a) {
          Xe(a, "_ymBRC", "1");
          var b = "1" !== We(a, "_ymBRC");
          b || Ye(a, "_ymBRC");
          return b;
        }),
        Ga = q(Ve),
        ob = q(Ve, function (a, b, c) {
          return "" + b + c;
        }),
        Ti = q(function (a) {
          a = n(a, "document") || {};
          return ("" + (a.characterSet || a.charset || "")).toLowerCase();
        }),
        Oc = q(r(U("document"), w("createElement", lb))),
        Rh = q(function (a) {
          var b = n(a, "Element.prototype");
          return b
            ? (a = pd(
                function (c) {
                  return Ea(c, b[c]);
                },
                [
                  "matches",
                  "webkitMatchesSelector",
                  "mozMatchesSelector",
                  "msMatchesSelector",
                  "oMatchesSelector",
                ]
              ))
              ? b[a]
              : null
            : null;
        }),
        Ge = /^\s+|\s+$/g,
        Pe = La(String.prototype.trim, "trim"),
        Ob = ea(function (a, b) {
          return b.replace(a, "");
        })(/\D/g),
        Qh = "hash host hostname href pathname port protocol search".split(" "),
        td =
          "ru ua by kz az kg lv md tj tm uz ee fr lt com co.il com.ge com.am com.tr com.ua com.ru".split(
            " "
          ),
        Hf = /(?:^|\.)(?:(ya\.ru)|(?:yandex)\.(\w+|com?\.\w+))$/,
        Qb = q(function (a) {
          return (a ? a.replace(/^www\./, "") : "").toLowerCase();
        }),
        Ui = q(function (a) {
          a = Q(a).hostname;
          var b = !1;
          a && (b = -1 !== a.search(Hf));
          return b;
        }),
        If = /\/$/,
        Vi = q(
          r(
            X,
            ra(function (a) {
              return -new a.b.Date().getTimezoneOffset();
            })
          )
        ),
        Wi = r(
          X,
          ra(function (a) {
            a = new a.b.Date();
            return M(
              "",
              z(ci, [
                a.getFullYear(),
                a.getMonth() + 1,
                a.getDate(),
                a.getHours(),
                a.getMinutes(),
                a.getSeconds(),
              ])
            );
          })
        ),
        Xi = r(X, ra(Uc)),
        Yi = q(
          r(
            X,
            ra(function (a) {
              return a.P[0];
            })
          )
        ),
        Zi = q(fc),
        Oe = ["metrika_enabled"],
        Xc = [],
        Me = gc("gsc", Ne),
        Ph = /:\d+$/,
        ti = q(function (a) {
          var b = (Q(a).host || "").split(".");
          return 1 === b.length
            ? b[0]
            : H(
                function (c, d, e) {
                  e += 1;
                  2 <= e &&
                    !c &&
                    ((e = M(".", b.slice(-e))),
                    Vc(a, "metrika_enabled", "1", 0, e, void 0, !0),
                    (d = (d = Ne(a)) && d.metrika_enabled) &&
                      tf(a, "metrika_enabled", e, void 0, !0),
                    d && (c = e));
                  return c;
                },
                "",
                b
              );
        }),
        ub = q(Jb),
        Nh = gc("r", function (a, b) {
          var c = Le(a, b),
            d = c[0];
          return !c[1] && d;
        }),
        zb = q(function () {
          return { U: {}, pending: {}, children: {} };
        }),
        ud = U("postMessage"),
        $i = J("s.f", function (a, b, c, d, e) {
          b = b(d);
          var f = zb(a),
            g = M(":", [b.T.Ha, b.T.key]);
          if (ud(c)) {
            f.pending[g] = e;
            try {
              c.postMessage(b.Zb, "*");
            } catch (h) {
              delete f.pending[g];
              return;
            }
            da(
              a,
              function () {
                delete f.pending[g];
              },
              5e3,
              "if.s"
            );
          }
        }),
        aj = J("s.fh", function (a, b, c, d, e, f) {
          var g = null,
            h = null,
            k = zb(a),
            l = null;
          try {
            (g = Vb(a, f.data)), (h = g.__yminfo), (l = g.data);
          } catch (m) {
            return;
          }
          if (
            !la(h) &&
            h.substring &&
            "__yminfo" === h.substring(0, 8) &&
            !la(l) &&
            ((g = h.split(":")), 4 === g.length)
          )
            if (
              ((h = b.id),
              (b = g[1]),
              (a = g[2]),
              (g = g[3]),
              !qa(l) && l.type && "0" === g && l.counterId)
            ) {
              if (!l.toCounter || l.toCounter == h) {
                k = null;
                try {
                  k = f.source;
                } catch (m) {}
                !kb(k) &&
                  ud(k) &&
                  ((f = d.H(l.type, [f, l])),
                  (e = z(r(K, yi(e)), f.concat([{}]))),
                  (l = c([b, a, l.counterId], e)),
                  k.postMessage(l.Zb, "*"));
              }
            } else
              g === "" + h &&
                qa(l) &&
                aa(function (m) {
                  return !(!m.hid || !m.counterId);
                }, l).length === l.length &&
                (c = k.pending[M(":", [b, a])]) &&
                c.apply(null, [f].concat(l));
        }),
        Sb = q(function (a, b) {
          var c,
            d = lb("getElementsByTagName", n(a, "document")),
            e = zb(a),
            f = ud(a),
            g = Gc(a),
            h = Ia(a);
          if (!d || !f) return null;
          d = d.call(a.document, "iframe");
          f = ((c = {}), (c.counterId = b.id), (c.hid = "" + Za(a)), c);
          Sc(a) && (f.duid = Yb(a, b));
          Kh(a, g);
          Lh(a);
          c = Mh(a, f);
          var k = I([a, w([], c)], $i);
          x(function (l) {
            var m = null;
            try {
              m = l.contentWindow;
            } catch (p) {}
            m &&
              k(m, { type: "initToChild" }, function (p, t) {
                g.H("initToParent", [p, t]);
              });
          }, d);
          Oa(a) &&
            k(a.parent, { type: "initToParent" }, function (l, m) {
              g.H("parentConnect", [l, m]);
            });
          h.B(a, ["message"], I([a, b, c, g, f], aj));
          return { I: g, U: e.U, children: e.children, Tb: k };
        }, r(Fa, F)),
        bj = q(
          function (a, b) {
            if (!Sc(a) || !Oa(a)) return Yb(a, b);
            var c = Sb(a, b);
            return c && c.U[b.id] ? c.U[b.id].info.duid || Yb(a, b) : Yb(a, b);
          },
          function (a, b) {
            return "{" + b.Ta + b.Aa;
          }
        ),
        cj = q(function (a) {
          a = C(a);
          var b = a.l("counterNum", 0) + 1;
          a.m("counterNum", b);
          return b;
        }, r(Fa, F)),
        G,
        Tc =
          ((G = {}),
          (G.vf = w(nb.version, K)),
          (G.nt = Fi),
          (G.fp = function (a, b, c) {
            if (c.o && c.o.nohit) return null;
            b = F(b);
            c = Zi(a);
            if (c[b]) return null;
            a: {
              var d = Yi(a),
                e = n(a, "performance.getEntriesByType");
              if (R(e)) {
                if (
                  ((a = aa(
                    r(K, U("name"), za("first-contentful-paint")),
                    e.call(a.performance, "paint")
                  )),
                  a.length)
                ) {
                  a = a[0].startTime;
                  break a;
                }
              } else {
                e = n(a, "chrome.loadTimes");
                if (
                  R(e) &&
                  ((e = e.call(a.chrome)), (e = n(e, "firstPaintTime")), d && e)
                ) {
                  a = 1e3 * e - d;
                  break a;
                }
                if ((a = n(a, "performance.timing.msFirstPaint"))) {
                  a -= d;
                  break a;
                }
              }
              a = void 0;
            }
            return a ? ((c[b] = a), Math.round(a)) : null;
          }),
          (G.fu = function (a, b, c) {
            var d = c.o;
            if (!d) return null;
            b = (n(a, "document.referrer") || "").replace(If, "");
            c = (d["page-ref"] || "").replace(If, "");
            d = d["page-url"];
            a = Q(a).href !== d;
            b = b !== c;
            c = 0;
            a && b ? (c = 3) : b ? (c = 1) : a && (c = 2);
            return c;
          }),
          (G.en = Ti),
          (G.la = Df),
          (G.ut = function (a, b, c) {
            var d = c.C;
            c = c.o;
            d = d && d.Ba;
            c && (Ui(a) || b.fc || d) && (c.ut = "noindex");
            return null;
          }),
          (G.v = w("970", K)),
          (G.cn = cj),
          (G.dp = function (a) {
            var b = C(a),
              c = b.l("bt", {});
            if (Z(b.l("bt"))) {
              var d = n(a, "navigator.getBattery");
              try {
                c.p = d && d.call(a.navigator);
              } catch (e) {}
              b.m("bt", c);
              c.p &&
                c.p.then &&
                c.p.then(
                  A(a, "bi:dp.p", function (e) {
                    c.ed = n(e, "charging") && 0 === n(e, "chargingTime");
                  })
                );
            }
            return Si(c.ed);
          }),
          (G.ls = q(function (a, b) {
            var c = ob(a, b.id),
              d = X(a),
              e = c.l("lsid");
            return +e ? e : ((d = mb(a, 0, d(P))), c.m("lsid", d), d);
          }, Fa)),
          (G.hid = Za),
          (G.phid = function (a, b) {
            if (!Oa(a)) return null;
            var c = Sb(a, b);
            if (!c) return null;
            var d = V(c.U);
            return d.length ? c.U[d[0]].info.hid : null;
          }),
          (G.z = Vi),
          (G.i = Wi),
          (G.et = Xi),
          (G.c = r(U("navigator.cookieEnabled"), jc)),
          (G.rn = r(K, mb)),
          (G.rqn = function (a, b, c) {
            c = c.o;
            if (!c || c.nohit) return null;
            b = F(b);
            a = ob(a, b);
            b = (a.l("reqNum", 0) || 0) + 1;
            a.m("reqNum", b);
            if (a.l("reqNum") === b) return b;
            a.wa("reqNum");
            return null;
          }),
          (G.u = bj),
          (G.tp = r(Fa, lf, jc)),
          (G.tpid = r(Fa, function (a) {
            a = F(a);
            return (Qa[a] && Qa[a].Yc) || null;
          })),
          (G.w = function (a) {
            a = Se(a);
            return a[0] + "x" + a[1];
          }),
          (G.s = function (a) {
            var b = n(a, "screen");
            if (b) {
              a = n(b, "width");
              var c = n(b, "height");
              b = n(b, "colorDepth") || n(b, "pixelDepth");
              return M("x", [a, c, b]);
            }
            return null;
          }),
          (G.sk = U("devicePixelRatio")),
          (G.ifr = r(Oa, jc)),
          (G.j = r(Hi, jc)),
          (G.sti = function (a) {
            return Oa(a) ? (Gi(a) ? "1" : null) : null;
          }),
          G),
        Jh = q(function () {
          return Mb(V(Tc), V(Gf));
        }),
        Hh = q(fc, F),
        Je = q(function () {
          return { vb: null, N: [] };
        }, F),
        yb = gc("retryReqs", function (a) {
          return Ga(a).l("retryReqs", {});
        }),
        dj = J("g.r", function (a) {
          var b = X(a),
            c = yb(a),
            d = b(P),
            e = Za(a);
          return H(
            function (f, g) {
              var h = g[0],
                k = g[1];
              k &&
                !k.d &&
                k.ghid &&
                k.ghid !== e &&
                k.time &&
                500 < d - k.time &&
                k.time + 864e5 > d &&
                2 >= k.browserInfo.rqnl &&
                ((k.d = 1),
                (h = {
                  protocol: k.protocol,
                  host: k.host,
                  aa: k.resource,
                  Jc: k.postParams,
                  D: k.params,
                  kc: k.browserInfo,
                  wd: k.ghid,
                  time: k.time,
                  na: Ja(h),
                  oc: k.counterId,
                  K: k.counterType,
                }),
                f.push(h));
              return f;
            },
            [],
            ya(c)
          );
        }),
        Eh = /^[a-z][\w.+-]+:/i,
        vd,
        Ya = [
          [ad, 1],
          [Xb, 2],
          [$a(), 3],
          [Ke, 4],
        ],
        Wb = [],
        Ra = w(Ya, kf);
      Ra(He, 100);
      var Xa = ((vd = {}), (vd.h = Ya), vd),
        T = w(Xa, function (a, b, c, d) {
          a[b] || (a[b] = []);
          c && !la(d) && kf(a[b], c, d);
        });
      Ra(function (a) {
        return {
          F: function (b, c) {
            var d = b.o;
            if (!b.A || !d) return c();
            var e = d["page-ref"],
              f = d["page-url"];
            e && f !== e ? (d["page-ref"] = Fe(a, e)) : delete d["page-ref"];
            d["page-url"] = Fe(a, f).slice(0, Li);
            return c();
          },
        };
      }, -100);
      T("r", Xb, 1);
      T(
        "r",
        function (a) {
          return {
            F: function (b, c) {
              var d = b.A,
                e = void 0 === d ? fa() : d,
                f = b.C.na,
                g = yb(a);
              d = e.l("rqnl", 0) + 1;
              e.m("rqnl", d);
              if ((e = n(g, M(".", [f, "browserInfo"])))) (e.rqnl = d), Rc(a);
              c();
            },
            Y: function (b, c) {
              Ie(a, b);
              c();
            },
          };
        },
        2
      );
      var Ah = /[^a-z0-9.:-]/,
        wd,
        ib = [],
        xd = {};
      ib.push(0, 0, wb, 0, Nc);
      var Jf = vb([wb]),
        Eb = vb([Nc]),
        kc = vb([0, wb, 0, Nc]),
        ka = ((wd = {}), (wd.h = Jf), wd);
      ka.r = kc;
      var yd = q(function (a, b) {
          var c = xd["*"] ? xd["*"] : b && xd[b];
          c || (c = b ? ka[b] || [] : ib);
          c = H(
            function (d, e, f) {
              (e = e && e(a)) && d.push([f, e]);
              return d;
            },
            [],
            c
          );
          c.length || Hd();
          return c;
        }, Fa),
        zd,
        ej = W(O.reject, O, Da()),
        oa = ((zd = {}), (zd.h = va), zd);
      oa.r = va;
      var ha = J(
          "g.sen",
          function (a, b, c) {
            var d = yd(a, b);
            c = c ? Dh(a, b, c) : [];
            var e = oa[b],
              f = e ? e(a, d, c) : va(a, d, c);
            return function () {
              var g = ia(arguments),
                h = g[0];
              g = g.slice(1);
              var k = h.G;
              h = v(h, { G: v(void 0 === k ? {} : k, { Z: [b] }) });
              return f.apply(void 0, ta([h], g));
            };
          },
          ej
        ),
        wh = ea(function (a, b) {
          if (!b[a]) {
            var c,
              d = new O(function (e) {
                c = e;
              });
            b[a] = { Ob: c, Xa: d, Pb: !1 };
          }
          return b[a].Xa;
        }),
        ze = q(r(fc, ra)),
        Ad = q(function (a) {
          a = n(a, "console");
          var b = n(a, "log");
          b = hc("log", b) ? W(b, a) : L;
          var c = n(a, "warn");
          c = hc("warn", c) ? W(c, a) : b;
          var d = n(a, "error");
          a = hc("error", d) ? W(d, a) : b;
          return { log: b, error: a, warn: c };
        }),
        fj = J("dc.init", function (a, b) {
          function c(k) {
            for (var l = [], m = 1; m < arguments.length; m++)
              l[m - 1] = arguments[m];
            C(a).l("dce:" + b, !1) && e[k].apply(e, l);
            C(a)
              .l("dclq:" + b)
              .push([k, l]);
          }
          var d = Q(a),
            e = Ad(a, b);
          C(a).X("dclq:" + b, []);
          var f = ub(a),
            g = ye(a),
            h = g.Cc;
          g = g.xc;
          h && !g && f.m("debug", "1", void 0, d.host);
          return h || g
            ? { log: w("log", c), warn: w("warn", c), error: w("error", c) }
            : { log: L, warn: L, error: L };
        }),
        Lc = q(fj, Fa),
        gj = J("p.dc", function (a, b) {
          var c = F(b);
          we(a, "");
          we(a, c);
        }),
        Xf = A(window, "h.p", function (a, b) {
          var c,
            d,
            e = ha(a, "h", b),
            f = b.Ka || "" + Q(a).href,
            g = b.uc || a.document.referrer,
            h = {
              A: fa(((c = {}), (c.pv = 1), c)),
              o: ((d = {}), (d["page-url"] = f), (d["page-ref"] = g), d),
              C: {},
            };
          h.C.D = b.D;
          b.ua && h.o && (h.o.nohit = "1");
          return e(h, b)
            .then(function (k) {
              k &&
                (b.ua ||
                  sb(
                    a,
                    b,
                    "PageView. Counter " +
                      b.id +
                      ". URL: " +
                      f +
                      ". Referrer: " +
                      g,
                    b.D
                  )(),
                qc(a, I([a, b, k], xh)));
            })
            ["catch"](A(a, "h.g.s"));
        }),
        Bd = [
          "yandex_metrika_callback" + nb.callbackPostfix,
          "yandex_metrika_callbacks" + nb.callbackPostfix,
        ],
        hj = J("cb.i", function (a) {
          var b = Bd[0],
            c = Bd[1];
          if (R(a[b])) a[b]();
          "object" === typeof a[c] &&
            x(function (d, e) {
              a[c][e] = null;
              qe(a, d);
            }, a[c]);
          x(function (d) {
            try {
              delete a[d];
            } catch (e) {
              a[d] = void 0;
            }
          }, Bd);
        }),
        Cd = ea(function (a, b) {
          var c = {};
          Kc(a)(function (d) {
            c = d[b] || {};
          });
          return c;
        }),
        ij = J("c.c.cc", function (a) {
          var b = C(a),
            c = r(Cd(a), function (d) {
              var e;
              return v(
                {},
                d,
                ((e = {}),
                (e.oldCode = !!a.ya_cid),
                (e.clickmap = !!d.clickmap),
                e)
              );
            });
          return A(a, "g.c.cc", r(W(b.l, b, "counters", {}), V, xb(c)));
        }),
        jj = J("gt.c.rs", function (a, b) {
          var c,
            d = F(b),
            e = b.id,
            f = b.K,
            g = b.qd,
            h = b.Yd,
            k = I([a, d], vh);
          ve(
            a,
            d,
            ((c = {}),
            (c.id = e),
            (c.type = +f),
            (c.clickmap = g),
            (c.trackHash = !!h),
            c)
          );
          return k;
        }),
        te = q(jd),
        tb = q(fc, F),
        kj = ["ecommerce", "user_id", "fpp"],
        lj = J("pa.int", function (a, b) {
          var c;
          return (
            (c = {}),
            (c.params = function () {
              var d,
                e,
                f = ia(arguments),
                g = sh(f);
              if (!g) return null;
              f = g.qc;
              var h = g.D;
              g = g.sa;
              if (!Sa(h) && !qa(h)) return null;
              var k = ha(a, "1", b),
                l = tb(b).url,
                m = n(h, "__ym.user_id"),
                p = V(h),
                t = N("__ymu", p),
                u = N("__ym", p) && m;
              p = !xe(b);
              var y = h;
              y.__ym &&
                ((y = v({}, h)),
                (y.__ym = H(
                  function (B, D) {
                    var E = n(h, "__ym." + D);
                    E && (B[D] = E);
                    return B;
                  },
                  {},
                  kj
                )),
                V(y.__ym).length || delete y.__ym,
                (p = !!V(y).length));
              m = sb(
                a,
                b,
                u
                  ? "Set user id " + m
                  : (t ? "User p" : "P") + "arams. Counter " + b.id,
                u ? void 0 : JSON.stringify(y)
              );
              k = k(
                {
                  C: { D: h },
                  A: fa(((d = {}), (d.pa = 1), (d.ar = 1), d)),
                  o: ((e = {}), (e["page-url"] = l || Q(a).href), e),
                },
                b
              ).then(p ? m : L);
              return hb(a, "p.s", k, g, f);
            }),
            c
          );
        }),
        wc = q(pe, r(Fa, F)),
        mj = J("y.p", function (a, b) {
          var c = pe(a, b);
          if (c) {
            var d = Ib(a),
              e = I([a, c, b], oh);
            Pd(a, d, function (f) {
              f.B(["params"], e);
            });
            c.I.B(["params"], r(U("1"), e));
          }
        }),
        ui = q(function (a) {
          if ((a = Oc(a))) return a("a");
        }),
        Kf = { xd: ab(/[/&=?#]/) },
        nj = J("go.in", function (a, b, c, d) {
          var e;
          void 0 === c && (c = "goal");
          return (
            (e = {}),
            (e.reachGoal = function (f, g, h, k) {
              var l, m;
              if (!f || (Kf[c] && Kf[c](f))) return null;
              var p = g,
                t = h || L;
              R(g) && ((t = g), (p = void 0), (k = h));
              var u = sb(
                  a,
                  b,
                  "Reach goal. Counter: " + b.id + ". Goal id: " + f,
                  p
                ),
                y = "goal" === c;
              g = ha(a, "g", b);
              h = nh(a, b, f, c);
              f = h[0];
              h = h[1];
              p = g(
                {
                  C: { D: p },
                  A: fa(((l = {}), (l.ar = 1), l)),
                  o: ((m = {}), (m["page-url"] = f), (m["page-ref"] = h), m),
                },
                b
              ).then(function () {
                y && u();
                d && d();
              });
              return hb(a, "g.s", p, t, k);
            }),
            e
          );
        }),
        oj = ea(function (a, b) {
          Wa(b) ? a.push(b) : x(r(K, ua("push", a)), b);
        }),
        pj = J("cl.p", function (a, b) {
          function c(p, t, u, y) {
            void 0 === y && (y = {});
            u
              ? Pb(a, b, { url: u, ha: !0, xa: p, Ba: t, sender: e, ec: y })
              : g.warn("Empty link");
          }
          var d,
            e = ha(a, "2", b),
            f = [],
            g = Ad(a, F(b)),
            h = F(b),
            k = A(a, "s.s.tr", w(ue(a, h), mh));
          h = {
            b: a,
            fa: b,
            rc: f,
            sender: e,
            globalStorage: C(a),
            pc: ob(a, b.id),
            zd: Za(a),
            Zc: w(w(h, Cd(a)), r(ba, U("trackLinks"))),
          };
          h = A(a, "cl.p.c", w(h, jh));
          h = Ia(a).B(a, ["click"], h);
          b.$b && k(b.$b);
          var l = A(a, "file.clc", I([!0, !1], c)),
            m = A(a, "e.l.l.clc", I([!1, !0], c));
          f = A(a, "add.f.e.clc", oj(f));
          return (
            (d = {}),
            (d.file = l),
            (d.extLink = m),
            (d.addFileExtension = f),
            (d.trackLinks = k),
            (d.u = h),
            d
          );
        }),
        rj = J("nb.p", function (a, b) {
          function c(D) {
            l() ||
              ((D = "number" === typeof D ? D : 15e3),
              (B = vi(a, d(!1), D)),
              m());
          }
          function d(D) {
            return function (E) {
              var S, ja, Y;
              void 0 === E &&
                (E = ((S = {}), (S.ctx = {}), (S.callback = L), S));
              if (D || (!u && !k.Bc)) {
                u = !0;
                m();
                B && B();
                var lc = p(P);
                S = (Ja(k.l("lastHit")) || 0) < lc - 18e5;
                var qj = 0.1 > Math.random();
                k.m("lastHit", lc);
                lc = fa(((ja = {}), (ja.nb = 1), (ja.cl = y), (ja.ar = 1), ja));
                ja = tb(b);
                ja = {
                  o: ((Y = {}), (Y["page-url"] = ja.url || Q(a).href), Y),
                  A: lc,
                  C: { force: D },
                };
                Y = Ad(a, F(b)).warn;
                !E.callback && E.ctx && Y('"callback" argument missing');
                (Y = D || S || qj) ||
                  ((Y = a.location.href),
                  (S = a.document.referrer),
                  (Y = !(Y && S ? oe(Y) === oe(S) : !Y && !S)));
                if (Y)
                  return (Y = g(ja, b)), hb(a, "l.o.l", Y, E.callback, E.ctx);
              }
              return null;
            };
          }
          var e,
            f,
            g = ha(a, "n", b),
            h = F(b),
            k = ob(a, b.id),
            l = w(w(h, Cd(a)), r(ba, U("accurateTrackBounce"))),
            m = w(((e = {}), (e.accurateTrackBounce = !0), e), ue(a, h)),
            p = X(a),
            t = p(P),
            u = !1,
            y = 0,
            B;
          Ua(b, function (D) {
            y = D.tc - t;
          });
          b.pb && c(b.pb);
          return (f = {}), (f.notBounce = d(!0)), (f.u = B), f;
        }),
        Aa,
        Ec =
          ((Aa = {}),
          (Aa.transaction_id = "id"),
          (Aa.item_id = "id"),
          (Aa.item_name = "name"),
          (Aa.item_brand = "brand"),
          (Aa.promotion_name = "coupon"),
          (Aa.index = "position"),
          (Aa.item_variant = "variant"),
          (Aa.value = "revenue"),
          (Aa.item_category = "category"),
          Aa),
        hh = "currencyCode add delete remove purchase checkout detail".split(
          " "
        ),
        dh = J("dl.w", function (a, b, c) {
          function d() {
            var g = n(a, b);
            (e = qa(g) && Hc(a, g, c)) || (f = da(a, d, 1e3, "ec.dl"));
          }
          var e,
            f = 0;
          d();
          return function () {
            return Pa(a, f);
          };
        }),
        cb,
        ie =
          ((cb = {}),
          (cb.view_item = "detail"),
          (cb.add_to_cart = "add"),
          (cb.remove_from_cart = "remove"),
          (cb.begin_checkout = "checkout"),
          (cb.purchase = "purchase"),
          cb),
        sj = J("p.e", function (a, b) {
          var c = Ta(a, b);
          if (c) {
            var d = C(a);
            c = c.params;
            var e = A(a, "h.ee", I([a, F(b), c], fh));
            return b.sb
              ? (d.m("ecs", 0), he(a, b.sb, e))
              : Ua(b, function (f) {
                  if ((f = n(f, "settings.ecommerce")))
                    return d.m("ecs", 1), he(a, f, e);
                });
          }
        }),
        ge = q(function (a) {
          return M("[^\\d<>]*", a.split(""));
        }),
        xg = q(function (a) {
          return new RegExp(ge(a), "g");
        }),
        tj = q(function (a) {
          return zi(a) || !Qe(a);
        }),
        uj = /[\*\.\?\(\)]/g,
        vj = q(function (a, b, c) {
          try {
            var d = c.replace("\\s", " ").replace(uj, "");
            Lc(a, "").warn(
              'Function "' +
                d +
                '" has been overridden, this may cause issues with Metrika counter'
            );
          } catch (e) {}
        }, Fa),
        wj = J("r.nn", function (a) {
          ye(a).isEnabled &&
            Hc(a, nd, function (b) {
              b.Va.B(function (c) {
                vj(a, c[1], c[0]);
                nd.splice(100);
              });
            });
        }),
        xj =
          "FB_IAB FBAV OKApp GSA/ yandex yango uber EatsKit YKeyboard iOSAppUslugi YangoEats".split(
            " "
          ),
        ig = q(function (a) {
          var b = Bf(a);
          a = b.dc;
          if (!b.Cb) return !1;
          b = ua("indexOf", a);
          b = Ub(r(b, za(-1), Bb), xj);
          var c = /CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/.test(a),
            d = /YaBrowser\/[\d.]+/.test(a),
            e = /Mobile/.test(a);
          return b || c || (d && e) || (!/Safari/.test(a) && e);
        }),
        yj = ["YangoEats"],
        jg = q(function (a) {
          var b = bb(a);
          if (!b) return !1;
          b = ua("indexOf", b);
          return Ub(r(b, za(-1), Bb), yj) || Di(a);
        }),
        Lf = ea(function (a, b) {
          return C(b).l(a, null);
        }),
        zj = q(function (a) {
          return R(n(a, "yandex.getSiteUid")) ? a.yandex.getSiteUid() : null;
        }),
        Wg = [
          ["domainLookupEnd", "domainLookupStart"],
          ["connectEnd", "connectStart"],
          ["responseStart", "requestStart"],
          ["responseEnd", "responseStart"],
          ["fetchStart", "navigationStart"],
          ["redirectEnd", "redirectStart"],
          [
            function (a, b) {
              return n(b, "redirectCount") || n(a, "navigation.redirectCount");
            },
          ],
          ["domInteractive", "domLoading"],
          ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
          ["domComplete", "navigationStart"],
          ["loadEventStart", "navigationStart"],
          ["loadEventEnd", "loadEventStart"],
          ["domContentLoadedEventStart", "navigationStart"],
        ],
        wa,
        Vg = [
          ["domainLookupEnd", "domainLookupStart"],
          ["connectEnd", "connectStart"],
          ["responseStart", "requestStart"],
          ["responseEnd", "responseStart"],
          ["fetchStart"],
          ["redirectEnd", "redirectStart"],
          ["redirectCount"],
          ["domInteractive", "responseEnd"],
          ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
          ["domComplete"],
          ["loadEventStart"],
          ["loadEventEnd", "loadEventStart"],
          ["domContentLoadedEventStart"],
        ],
        Zd =
          ((wa = {}),
          (wa.responseEnd = 1),
          (wa.domInteractive = 1),
          (wa.domContentLoadedEventStart = 1),
          (wa.domContentLoadedEventEnd = 1),
          (wa.domComplete = 1),
          (wa.loadEventStart = 1),
          (wa.loadEventEnd = 1),
          (wa.unloadEventStart = 1),
          (wa.unloadEventEnd = 1),
          (wa.secureConnectionStart = 1),
          wa),
        Yg = q(jd),
        xa,
        pa,
        eg =
          ((xa = {}),
          (xa.am = "com.am"),
          (xa.tr = "com.tr"),
          (xa.ge = "com.ge"),
          (xa.il = "co.il"),
          (xa["\u0440\u0444"] = "ru"),
          (xa["xn--p1ai"] = "ru"),
          (xa["\u0443\u043a\u0440"] = "ua"),
          (xa["xn--j1amh"] = "ua"),
          (xa["\u0431\u0435\u043b"] = "by"),
          (xa["xn--90ais"] = "by"),
          xa),
        Mf = {
          "mc.edadeal.ru": /^([^/]+\.)?edadeal\.ru$/,
          "mc.yandexsport.ru": /^([^/]+\.)?yandexsport\.ru$/,
          "mc.kinopoisk.ru": /^([^/]+\.)?kinopoisk\.ru$/,
        },
        fg =
          ((pa = {}),
          (pa.ka = "ge"),
          (pa.ro = "md"),
          (pa.tg = "tj"),
          (pa.tk = "tm"),
          (pa.et = "ee"),
          (pa.hy = "com.am"),
          (pa.he = "co.li"),
          (pa.ky = "kg"),
          (pa.uk = "ua"),
          (pa.be = "by"),
          (pa.tr = "com.tr"),
          (pa.kk = "kz"),
          pa),
        Sg = "ar:1:pv:1:v:970:vf:" + nb.version,
        Tg = "https://" + Va + "/watch/26302566",
        Nf = {},
        Aj = J("exps.int", function (a, b) {
          var c;
          return (
            (c = {}),
            (c.experiments = function (d, e, f) {
              var g, h;
              void 0 === e && (e = L);
              if (d && 0 < d.length) {
                var k = ha(a, "e", b),
                  l = tb(b).url;
                d = k(
                  {
                    A: fa(((g = {}), (g.ex = 1), (g.ar = 1), g)),
                    o:
                      ((h = {}),
                      (h["page-url"] = l || Q(a).href),
                      (h.exp = d),
                      h),
                  },
                  b
                );
                return hb(a, "exps.s", d, e, f);
              }
            }),
            c
          );
        }),
        Bj = J("p.tpg", function (a, b) {
          $d(a, b.D);
        }),
        tc = [],
        Cj = J("p.fh", function (a, b) {
          var c, d;
          void 0 === b && (b = !0);
          var e = Ga(a),
            f = X(a),
            g = e.l("wasSynced"),
            h = { id: 3, K: "0" };
          return b && g && g.time + 864e5 > f(P)
            ? O.resolve(g)
            : ha(
                a,
                "f",
                h
              )(
                {
                  A: fa(((c = {}), (c.pv = 1), c)),
                  o:
                    ((d = {}),
                    (d["page-url"] = Q(a).href),
                    (d["page-ref"] = a.document.referrer),
                    d),
                },
                h
              )
                .then(function (k) {
                  var l;
                  k =
                    ((l = {}),
                    (l.time = f(P)),
                    (l.params = n(k, "settings")),
                    (l.bkParams = n(k, "userData")),
                    l);
                  e.m("wasSynced", k);
                  return k;
                })
                ["catch"](A(a, "f.h"));
        }),
        Mg = r(U("settings.pcs"), za("1")),
        Ig = [
          [
            ["'(-$&$&$'", 30102, 0],
            ["'(-$&$&$'", 29009, 0],
          ],
          [
            ["oWdZ[nc[jh_YW$Yec", 30103, 1],
            ["oWdZ[nc[jh_YW$Yec", 29010, 1],
          ],
        ],
        Jg = [
          [["oWdZ[nc[jh_YW$Yec", 30103, 1]],
          [["oWdZ[nc[jh_YW$Yec", 29010, 1]],
        ],
        Xd = { o: { t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k' } },
        Vd = { id: 42822899, K: "0" },
        Of = Va.split("."),
        Dj = Of.pop(),
        Pf = M(".", Of),
        dg = q(function (a) {
          a = Q(a).hostname.split(".");
          return a[a.length - 1];
        }),
        Ld = q(function (a) {
          return (
            -1 !==
            Q(a).hostname.search(
              /(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/
            )
          );
        }),
        Ej =
          /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|yastatic\.net|meteum\.(ai|es|io)|.*\.yandex|turbopages\.org|turbo\.site)$/,
        rc = q(function (a) {
          a = Q(a).hostname;
          var b = !1;
          a && (b = -1 !== a.search(Ej));
          return b;
        }),
        Fj =
          /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|.*\.yandex|turbopages\.org|turbo\.site)$/,
        Lg = q(function (a) {
          a = Q(a).hostname;
          var b = !1;
          a && (b = -1 !== a.search(Fj));
          return b;
        }),
        mc,
        Qg = ((mc = {}), (mc.s = "p"), (mc["8"] = "i"), mc),
        Ng = gc("csp", function (a, b) {
          return ha(a, "s", b)({}, ["https://ymetrica1.com/watch/3/1"]);
        }),
        zg = {
          Wd: "stamp",
          ud: "frameId",
          T: "meta",
          nd: "base",
          yd: "hasBase",
          kd: "address",
          Zd: "ua",
          Sd: "prev",
          Gd: "namespace",
          Dd: "keystrokes",
          Cd: "isMeta",
          Fd: "modifier",
          Qd: "pageWidth",
          Pd: "pageHeight",
          Xd: "startNode",
          sd: "endNode",
          $d: "zoomFrom",
          ae: "zoomTo",
          level: "level",
          duration: "duration",
          Bd: "i",
          Ld: "o",
          n: "n",
          r: "r",
          rd: "ct",
          ld: "at",
          Id: "nm",
          Jd: "ns",
          Od: "pa",
          Rd: "pr",
          Kd: "nx",
          ga: "h",
          pd: "changes",
          jd: "a",
          md: "b",
          od: "c",
          Md: "op",
        },
        Ag = ["attributes", "attrs"],
        Qf = (function () {
          function a(b) {
            this.b = b;
          }
          a.prototype.oa = function (b) {
            var c = Nb(b);
            b = z(W(this.eb, this), c);
            return Yh(
              Ca(
                this.b,
                z(function (d, e) {
                  var f;
                  return v({}, c[e], ((f = {}), (f.data = d), f));
                }, b)
              )
            );
          };
          a.prototype.eb = function (b) {
            var c = b.data;
            "string" !== typeof c && (c = Ca(this.b, Nb(b.data)));
            return c;
          };
          a.prototype.Na = function (b) {
            return encodeURIComponent(b).length;
          };
          a.prototype.Qc = function (b, c) {
            for (var d = Math.ceil(b.length / c), e = [], f = 0; f < c; f += 1)
              e.push(b.slice(f * d, d * (f + 1)));
            return e;
          };
          a.prototype.isEnabled = function () {
            return !!this.b.JSON;
          };
          return a;
        })(),
        Fb,
        Dd = ((Fb = {}), (Fb[1] = 500), (Fb[2] = 500), (Fb[3] = 0), Fb),
        Ed = (function (a) {
          function b() {
            var c,
              d = (null !== a && a.apply(this, arguments)) || this;
            d.id = "s";
            d.Db = !0;
            d.ad = ua(
              "exec",
              new RegExp("schema.org\\/(" + M("|", V(d.ac)) + ")$")
            );
            d.Ia =
              ((c = {}),
              (c.id = function (e) {
                e = e.element;
                var f = ma(this.b, e, "identifier");
                return f
                  ? na(f)
                  : (f = ma(this.b, e, "mainEntityOfPage")) &&
                    f.getAttribute("itemid")
                  ? f.getAttribute("itemid")
                  : null;
              }),
              (c.chars = function (e) {
                var f = 0;
                e = e.element;
                for (
                  var g = [
                      "articleBody",
                      "reviewBody",
                      "recipeInstructions",
                      "description",
                      "text",
                    ],
                    h = 0;
                  h < g.length;
                  h += 1
                ) {
                  var k = ma(this.b, e, g[h]);
                  if (k) {
                    f = na(k).length;
                    break;
                  }
                }
                e = ac(e);
                0 === f && e && (f += e.length);
                return f;
              }),
              (c.topics = function (e) {
                var f = this,
                  g = Db(this.b, e.element, "about");
                return z(function (h) {
                  var k = { name: na(h) };
                  if ((g = ma(f.b, h, "name"))) k.name = na(g);
                  return k;
                }, g);
              }),
              (c.rubric = function (e) {
                var f = this;
                (e = Zb(
                  '[itemtype$="schema.org/BreadcrumbList"]',
                  e.element
                )) ||
                  (e = Zb(
                    '[itemtype$="schema.org/BreadcrumbList"]',
                    this.root
                  ));
                return e
                  ? z(function (g) {
                      return {
                        name: na(ma(f.b, g, "name")),
                        position: na(ma(f.b, g, "position")),
                      };
                    }, Db(this.b, e, "itemListElement"))
                  : [];
              }),
              (c.updateDate = function (e) {
                return (e = ma(this.b, e.element, "dateModified")) ? vf(e) : "";
              }),
              (c.publicationDate = function (e) {
                return (e = ma(this.b, e.element, "datePublished"))
                  ? vf(e)
                  : "";
              }),
              (c.pageUrlCanonical = function (e) {
                e = Db(this.b, e.element, "url");
                if (e.length) {
                  var f = e[0];
                  return f.href ? f.href : na(e);
                }
                return null;
              }),
              (c.pageTitle = function (e) {
                var f = "",
                  g = e.element,
                  h = ma(this.b, g, "headline");
                h && (f += na(h));
                (h = ma(this.b, g, "alternativeHeadline")) &&
                  (f += " " + na(h));
                "" === f &&
                  ((h = ma(this.b, g, "name")) ||
                    (h = ma(this.b, g, "itemReviewed")),
                  h && (f += na(h)));
                3 === e.type &&
                  (e = Zc('[itemtype$="schema.org/Question"]', this.b, g)) &&
                  (e = ma(this.b, e, "text")) &&
                  (f += na(e));
                return f;
              }),
              (c.authors = function (e) {
                var f = this;
                e = Db(this.b, e.element, "author");
                return z(function (g) {
                  var h,
                    k = ((h = {}), (h.name = ""), h);
                  /.+schema.org\/(Person|Organization)/.test(
                    g.getAttribute("itemtype") || ""
                  ) &&
                    (h = ma(f.b, g, "name")) &&
                    (k.name = na(h));
                  k.name ||
                    (k.name =
                      g.getAttribute("content") ||
                      ac(g) ||
                      g.getAttribute("href"));
                  return k;
                }, e);
              }),
              c);
            return d;
          }
          sf(b, a);
          b.prototype.Ab = function (c) {
            c = c.getAttribute("itemtype") || "";
            return (c = this.ad(c)) ? this.ac[c[1]] : 1;
          };
          b.prototype.La = function (c) {
            return c.element && ac(c.element).length
              ? a.prototype.La.call(this, c)
              : null;
          };
          b.prototype.ub = function () {
            var c = M(
              ",",
              z(function (d) {
                return '[itemtype$="schema.org/' + d + '"]';
              }, this.Pc["schema.org"])
            );
            return Yc(c, this.root);
          };
          return b;
        })(
          (function () {
            function a(b, c) {
              var d,
                e = this;
              this.id = "a";
              this.Db = !1;
              this.Ia = {};
              this.Pc = {
                "schema.org":
                  "Article NewsArticle Movie BlogPosting Review Recipe Answer".split(
                    " "
                  ),
                Nd: ["article"],
              };
              this.ac = ((d = {}), (d.Answer = 3), (d.Review = 2), d);
              this.nc = q(function (f, g) {
                db(
                  e.b,
                  e.va,
                  "Warning: content has only " +
                    g.chars +
                    " chars. Required " +
                    Dd[g.type],
                  g
                );
              });
              this.b = b;
              this.root = Pc(b);
              this.va = c;
            }
            a.prototype.yb = function (b) {
              return b.element;
            };
            a.prototype.zb = function (b, c) {
              var d = this,
                e;
              A(this.b, "P.s." + c, function () {
                e = d.Ia[c].call(d, b);
              })();
              return e;
            };
            a.prototype.Kc = function (b) {
              var c = v({}, b);
              this.Db &&
                !c.id &&
                N(b.type, [3, 2]) &&
                ((b = M(", ", z(U("name"), c.authors || []))),
                (c.pageTitle = b + ": " + c.pageTitle));
              c.pageTitle || (c.pageTitle = this.wc(c.ta));
              c.pageUrlCanonical ||
                ((b = c.id),
                (c.pageUrlCanonical = (
                  "string" !== typeof b ? 0 : /^(https?:)\/\//.test(b)
                )
                  ? c.id
                  : this.vc()));
              c.id || (c.id = c.pageTitle || c.pageUrlCanonical);
              return c;
            };
            a.prototype.La = function (b) {
              var c = this,
                d = {},
                e = this.yb(b);
              if (!e) return null;
              d.type = b.type;
              x(function (g) {
                d[g] = c.zb(b, g);
              }, V(this.Ia));
              var f = X(this.b);
              d.stamp = f(bi);
              d.element = b.element;
              d.ta = e;
              d = this.Kc(d);
              d.id = d.id ? od(d.id) : 1;
              d.update = function (g) {
                return c.yb(b) ? c.zb(b, g) : void 0;
              };
              return d;
            };
            a.prototype.wc = function (b) {
              for (var c = 1; 5 >= c; c += 1) {
                var d = na(Zb("h" + c, b));
                if (d) return d;
              }
            };
            a.prototype.vc = function () {
              var b = Zb('[rel="canonical"]', this.root);
              if (b) return b.href;
            };
            a.prototype.Ab = function () {
              return 1;
            };
            a.prototype.ub = function () {
              return [];
            };
            a.prototype.sc = function () {
              var b = this,
                c = this.ub(),
                d = 1;
              return H(
                function (e, f) {
                  var g = b.La({ element: f, type: b.Ab(f) }) || [];
                  qa(g) || (g = [g]);
                  g = H(
                    function (h, k) {
                      var l = h.values,
                        m = h.Bb;
                      k && k.chars > Dd[k.type] && !N(k.id, m)
                        ? (l.push(k), m.push(k.id))
                        : k && k.chars <= Dd[k.type] && b.nc(k.id, k);
                      return { values: l, Bb: m };
                    },
                    { values: [], Bb: z(U("id"), e) },
                    g
                  ).values;
                  return e.concat(
                    z(function (h) {
                      var k;
                      h = v(
                        ((k = { index: d, Vb: !1 }), (k.involvedTime = 0), k),
                        h
                      );
                      d += 1;
                      return h;
                    }, g)
                  );
                },
                [],
                c
              );
            };
            return a;
          })()
        ),
        Rf =
          "resize scroll mousemove mousedown click windowfocus keydown orientationchange change focus touchmove touchstart".split(
            " "
          ),
        Gj =
          "id pageTitle stamp chars authors updateDate publicationDate pageUrlCanonical topics rubric".split(
            " "
          ),
        Hj = (function () {
          function a(b, c, d, e, f) {
            var g = this;
            this.ya = !1;
            this.T = {};
            this.scroll = { x: 0, y: 0 };
            this.Qa = this.Ib = 0;
            this.Ua = this.Lb = "";
            this.J = [];
            this.cb = this.Wc = 0;
            this.ca = { ga: 0, mb: 0 };
            this.buffer = [];
            this.jc = Gj;
            this.flush = function () {
              g.cb = da(g.b, g.flush, 2500);
              var h = g.Ma();
              if (g.buffer.length || h) {
                var k = Mc(g.buffer);
                h && k.push(h);
                g.Lb = g.Ua;
                g.R.oa(k)(
                  Ha(A(g.b, "p.b.st"), function (l) {
                    l && g.bb(l);
                  })
                );
              }
            };
            this.bb = e;
            this.R = d;
            this.ra = W(this.ra, this);
            this.Ma = W(this.Ma, this);
            this.flush = W(this.flush, this);
            this.b = b;
            this.va = f;
            this.Ea = c;
            this.Sa = "pai" + c.id;
            this.Oa();
            this.tb = Ia(this.b);
            this.time = X(this.b);
            this.bc();
            this.Pa = C(this.b);
          }
          a.prototype.start = function () {
            var b = this;
            this.cb = da(this.b, this.flush, 2500);
            if (!this.ya) {
              this.Sc();
              var c = this.Pa.l(this.Sa, []),
                d = !c.length;
              c.push(W(this.Fc, this));
              this.Pa.X(this.Sa, c);
              d && this.Rb();
              var e = function (f, g) {
                return (f.ab || 0) <= (g.ab || 0) ? g : f;
              };
              Ia(this.b).B(this.b, ["click"], function (f) {
                if (b.J.length) {
                  f = le(f);
                  var g = Q(b.b).hostname,
                    h;
                  if ((h = f)) h = Qb(f.hostname) === Qb(g);
                  h &&
                    ((f = H(e, b.J[0], b.J).id),
                    (g = Za(b.b)),
                    ob(b.b, b.va.split(":")[0]).m("pai", f + "-" + g));
                }
              });
              this.ra({ type: "page", target: this.b });
            }
          };
          a.prototype.stop = function () {
            this.bd();
            this.ya = !0;
            this.flush();
            Pa(this.b, this.cb);
          };
          a.prototype.Fb = function (b) {
            return Zc("html", this.b, b) !== this.b.document.documentElement;
          };
          a.prototype.Rb = function () {
            var b = this;
            A(this.b, "p.ic" + this.Ea.id, function () {
              if (!b.ya) {
                var c = b.Pa.l(b.Sa),
                  d = b.Ea.sc();
                x(function (e) {
                  var f = z(function (g) {
                    return v({}, g);
                  }, d);
                  R(e) && e(f);
                }, c);
                b.Wc = da(b.b, W(b.Rb, b), 1e3, "p");
              }
            })();
          };
          a.prototype.Fc = function (b) {
            this.ya || (this.cd(b), this.dd(), this.mc());
          };
          a.prototype.ra = function (b) {
            var c = this;
            A(this.b, "p.ec." + this.Ea.id, function () {
              try {
                var d = b.type;
                var e = b.target;
              } catch (l) {
                return;
              }
              var f = "page" === d;
              if ("scroll" === d || f) {
                var g = [
                  c.b,
                  c.b.document,
                  c.b.document.documentElement,
                  Ue(c.b),
                ];
                N(e, g) && c.Oa();
              }
              ("resize" === d || f) && c.bc();
              d = c.time(P);
              var h = Math.min(d - c.Ib, 5e3);
              c.Qa += Math.round(h);
              c.Ib = d;
              if (c.T && c.scroll && c.ca) {
                var k = c.ca.ga * c.ca.mb;
                c.J = z(function (l) {
                  var m = v({}, l),
                    p = c.T[m.id],
                    t = Re(l.ta);
                  if (!p || c.Fb(m.element) || !t) return m;
                  l = c.b.Math;
                  p = l.max((c.scroll.y + c.ca.ga - p.y) / p.height, 0);
                  var u = t.height * t.width;
                  t = c.lc(t);
                  m.ab = t / k;
                  m.visibility = t / u;
                  if (0.9 <= m.visibility || 0.1 <= m.ab) m.involvedTime += h;
                  m.maxScrolled = l.round(1e4 * p) / 1e4;
                  return m;
                }, c.J);
              }
            })();
          };
          a.prototype.lc = function (b) {
            var c = b.top,
              d = b.bottom,
              e = b.left,
              f = this.ca,
              g = f.mb;
            f = f.ga;
            var h = this.b.Math;
            b = h.min(h.max(b.right, 0), g) - h.min(h.max(e, 0), g);
            return (h.min(h.max(d, 0), f) - h.min(h.max(c, 0), f)) * b;
          };
          a.prototype.cd = function (b) {
            var c = z(function (d) {
              return d.id;
            }, this.J);
            this.J = this.J.concat(
              aa(function (d) {
                return !N(d.id, c);
              }, b)
            );
          };
          a.prototype.bc = function () {
            var b = Te(this.b) || Se(this.b);
            this.ca = { mb: b[0], ga: b[1] };
          };
          a.prototype.dd = function () {
            var b = this;
            A(this.b, "p.um." + this.Ea.id, function () {
              var c = [];
              b.Oa();
              b.T = H(
                function (d, e) {
                  var f;
                  if (b.Fb(e.element)) c.push(e), delete d[e.id];
                  else {
                    var g =
                      ((f = {}),
                      (f.id = e.id),
                      (f.involvedTime = Math.max(e.involvedTime, 0)),
                      (f.maxScrolled = e.maxScrolled || 0),
                      (f.chars = e.update ? e.update("chars") || 0 : 0),
                      f);
                    e.ta &&
                      (f = Re(e.ta)) &&
                      ((g.x = Math.max(Math.round(f.left) + b.scroll.x, 0)),
                      (g.y = Math.max(Math.round(f.top) + b.scroll.y, 0)),
                      (g.width = Math.round(f.width)),
                      (g.height = Math.round(f.height)));
                    d[e.id] = g;
                  }
                  return d;
                },
                {},
                b.J
              );
              x(function (d) {
                d = Jc(b.b)(d, b.J);
                b.J.splice(d, 1);
              }, c);
            })();
          };
          a.prototype.Ma = function () {
            var b,
              c,
              d = z(w(this.T, n), V(this.T));
            return d.length && ((this.Ua = Ca(this.b, d)), this.Lb !== this.Ua)
              ? ((b = {}),
                (b.type = "publishersHeader"),
                (b.data =
                  ((c = {}),
                  (c.articleMeta = d || []),
                  (c.involvedTime = this.Qa),
                  c)),
                b)
              : null;
          };
          a.prototype.mc = function () {
            var b = this;
            if (this.J.length) {
              var c = z(
                function (d) {
                  var e,
                    f = H(
                      function (g, h) {
                        d[h] && (g[h] = d[h]);
                        return g;
                      },
                      {},
                      b.jc
                    );
                  d.Vb = !0;
                  return (
                    (e = {}),
                    (e.type = "articleInfo"),
                    (e.stamp = f.stamp),
                    (e.data = f),
                    e
                  );
                },
                aa(function (d) {
                  return !d.Vb;
                }, this.J)
              );
              c.length &&
                ((this.buffer = this.buffer.concat(c)),
                db(this.b, this.va, "Publisher content info found: ", c));
            }
          };
          a.prototype.Sc = function () {
            this.tb.B(this.b, Rf, this.ra);
          };
          a.prototype.bd = function () {
            this.tb.qa(this.b, Rf, this.ra);
          };
          a.prototype.Oa = function () {
            this.scroll = {
              x:
                this.b.pageXOffset ||
                n(this.b, "document.documentElement.scrollLeft") ||
                0,
              y:
                this.b.pageYOffset ||
                n(this.b, "document.documentElement.scrollLeft") ||
                0,
            };
          };
          return a;
        })(),
        Fd = {};
      Ed && ((Fd.schema = Ed), (Fd.microdata = Ed));
      var Ij = J("p.p", function (a, b) {
        function c(l) {
          var m = v({}, k);
          m.G.L = l;
          return e(m, b)["catch"](A(a, "s.ww.p"));
        }
        if (!Ea("querySelectorAll", a.document.querySelectorAll))
          return O.resolve();
        var d = [new Qf(a)],
          e = ha(a, "p", b),
          f = pd(function (l) {
            return l.isEnabled();
          }, d);
        d = fa();
        var g = ob(a, b.id),
          h = g.l("pai");
        h && (g.wa("pai"), d.m("pai", h));
        var k = { o: {}, A: d, $: { Ac: !(f instanceof Qf) }, G: {} };
        return Ua(
          b,
          A(a, "ps.s", function (l) {
            if ((l = n(l, "settings.publisher.schema"))) {
              l = lf(b) ? "microdata" : l;
              var m = Fd[l];
              if (m && f) {
                var p = F(b);
                m = new m(a, p);
                new Hj(a, m, f, c, p).start();
                db(a, p, 'Publishers analytics schema "' + l + '"');
              }
            }
          })
        );
      });
      (function (a) {
        function b(c, d, e, f) {
          void 0 === f && (f = 0);
          d = a.call(this, c, d, e) || this;
          d.jb = 0;
          d.da = 0;
          d.ib = 0;
          d.buffer = [];
          d.ob = 2e3;
          d.I = Gc(c);
          d.fb();
          d.ib = f;
          return d;
        }
        sf(b, a);
        b.prototype.xb = function (c) {
          return aa(Boolean, this.I.H("ag", c));
        };
        b.prototype.wb = function (c, d) {
          var e = this;
          c(
            Ha(A(this.b, "wv2.b.st"), function (f) {
              e.send(f, d);
            })
          );
        };
        b.prototype.Rc = function (c, d) {
          var e = this;
          Pa(this.b, this.rb);
          var f = Math.ceil(this.R.Na(d) / 63e4),
            g = this.R.Qc(d, f);
          x(function (h, k) {
            var l,
              m = v(
                {},
                c,
                ((l = {}),
                (l.data = h),
                (l.partNum = k + 1),
                (l.end = k + 1 === f),
                l)
              );
            l = e.R.oa([m], !1);
            e.wb(l, [m]);
          }, g);
          this.fb();
        };
        b.prototype.send = function (c, d) {
          var e = this;
          this.I.H("se", d);
          return a.prototype.send.call(this, c, d).then(K, function () {
            e.I.H("see", d);
          });
        };
        b.vd = function (c, d, e, f, g) {
          b.Ga["" + c + d] ||
            (this.Ga[d] = new b(g, f, e, "m" === d ? 31457280 : 0));
          return this.Ga[d];
        };
        b.prototype.Ec = function () {
          return this.ib && this.jb >= this.ib;
        };
        b.prototype.push = function (c) {
          var d = this;
          if (!this.Ec()) {
            this.I.H("p", c);
            var e = this.R.eb(c),
              f = this.R.Na(e);
            7e5 < f
              ? this.Rc(c, e)
              : ((e = this.xb(this.buffer.concat([c]))),
                (e = H(
                  function (g, h) {
                    return g + d.R.Na(d.R.eb(h));
                  },
                  0,
                  e
                )),
                this.da + e + f >= 7e5 * 0.7 && this.flush(),
                this.buffer.push(c),
                (this.da += f));
          }
        };
        b.prototype.B = function (c, d) {
          this.I.B([c], d);
        };
        b.prototype.Da = function (c, d) {
          this.I.Da([c], d);
        };
        b.prototype.flush = function () {
          var c = this.buffer.concat(this.xb(this.buffer));
          if (c.length) {
            this.buffer = [];
            this.jb += this.da;
            this.da = 0;
            var d = this.R.oa(c);
            this.wb(d, c);
          }
        };
        return b;
      })(
        (function () {
          function a(b, c, d) {
            this.rb = 0;
            this.Wa = 1;
            this.ob = 5e3;
            this.b = b;
            this.R = c;
            this.bb = d;
          }
          a.prototype.fb = function () {
            this.rb = da(
              this.b,
              r(W(this.flush, this), W(this.fb, this)),
              this.ob,
              "b.f"
            );
          };
          a.prototype.send = function (b, c) {
            var d = this.bb(b, c || [], this.Wa);
            this.Wa += 1;
            return d;
          };
          a.prototype.push = function () {};
          a.prototype.flush = function () {};
          return a;
        })()
      ).Ga = {};
      var Jj = q(
          function (a) {
            var b = C(a),
              c = b.l("isEU");
            if (Z(c)) {
              var d = Ja(Wc(a, "is_gdpr") || "");
              if (N(d, [0, 1])) b.m("isEU", d), (c = !!d);
              else if (((a = Ga(a).l("wasSynced")), (a = n(a, "params.eu"))))
                b.m("isEU", a), (c = !!a);
            }
            return c;
          },
          function (a) {
            return C(a).l("isEU");
          }
        ),
        Kj = J("i.ep", function (a) {
          Jj(a);
        }),
        Lj = w("9-d5ve+.r%7", K),
        Mj = J("ad", function (a, b) {
          if (!b.Aa) {
            var c = C(a);
            if (!c.l("adBlockEnabled")) {
              var d = function (m) {
                  N(m, ["2", "1"]) && c.m("adBlockEnabled", m);
                },
                e = ub(a),
                f = e.l("isad");
              if (f) d(f);
              else {
                var g = w("adStatus", c.m),
                  h = function (m) {
                    m = m ? "1" : "2";
                    d(m);
                    g("complete");
                    e.m("isad", m, 1200);
                    return m;
                  },
                  k = ha(a, "adb", b);
                if (!c.l("adStatus")) {
                  g("process");
                  var l = "metrika/a" + Lj().replace(/[^a-v]+/g, "") + "t.gif";
                  yg(a, function () {
                    return k({ ba: { aa: l } })
                      .then(w(!1, h))
                      ["catch"](w(!0, h));
                  });
                }
              }
            }
          }
        }),
        Sf = {
          1882689622: 1,
          2318205080: 1,
          3115871109: 1,
          3604875100: 1,
          339366994: 1,
          2890452365: 1,
          849340123: 1,
          173872646: 1,
          2343947156: 1,
          655012937: 1,
          3724710748: 1,
          3364370932: 1,
          1996539654: 1,
          2065498185: 1,
          823651274: 1,
          12282461: 1,
          1555719328: 1,
          1417229093: 1,
          138396985: 1,
        },
        Nj = q(function () {
          return H(
            function (a, b) {
              var c = od(b + "/tag_turbo.js");
              Sf[c] || (a[c] = 1);
              return a;
            },
            {},
            [
              "mc.yandex.ru",
              "mc.yandex.com",
              "cdn.jsdelivr.net/npm/yandex-metrica-watch",
            ]
          );
        });
      w(Da("ccf"), Ba);
      var ug = q(function (a, b, c) {
          function d(k) {
            var l;
            return f(a, b, k)
              ? null === (l = h[k.$a]) || void 0 === l
                ? void 0
                : l.Fa
              : null;
          }
          var e,
            f = c.$c;
          c = c.Hd;
          var g =
              void 0 === c ? ((e = {}), (e.href = !0), (e.text = !0), e) : c,
            h;
          return {
            Nc: function (k) {
              return new O(function (l, m) {
                (k && k.length) || m();
                h = ce()(k);
                Bc(a)(
                  Ha(w({ M: [], P: 0 }, l), function () {
                    var p = X(a),
                      t = p(P),
                      u = g.href ? ah(a, h) : [],
                      y = g.text ? de(a, h) : [];
                    l({
                      M: aa(qa, aa(Boolean, z(d, u.concat(y)))),
                      P: p(P) - t,
                    });
                  })
                );
              });
            },
          };
        }),
        Td = q(Vb, Fa),
        Oj = J("phc.p", function (a, b) {
          return tj(a)
            ? L
            : Ua(b, function (c) {
                var d = b.id,
                  e = Jb(a, void 0, d),
                  f = e.l("phc_settings") || "";
                if ((c = n(c, "settings.phchange"))) {
                  var g = Ca(a, c) || "";
                  g !== f && e.m("phc_settings", g);
                } else f && (c = Td(a, f));
                e = n(c, "clientId");
                f = n(c, "orderId");
                c = n(c, "phones") || [];
                e &&
                  f &&
                  c.length &&
                  ((f = {
                    ea: "",
                    ia: "",
                    Xb: 0,
                    M: {},
                    P: [],
                    Eb: !1,
                    Ja: !0,
                    b: a,
                    qb: b,
                  }),
                  v(f, { Eb: !0 }),
                  Sd(a, d, f),
                  (c = Rb(a)),
                  (e = di(a, c, 1e3)),
                  (d = W(Sd, null, a, d, f)),
                  e.B(d),
                  $g(a, c));
              });
        }),
        Na = ["0", "1", "2", "3"],
        fb = Na[0],
        sc = Na[1],
        Pj = Na[2],
        xc = z(r(K, ua("concat", "GDPR-ok-view-detailed-")), Na),
        Kb = ta(
          "GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23".split(
            " "
          ),
          xc,
          ["28", "29", "30"]
        ),
        Qj = "3 13 14 15 16 17 28".split(" "),
        vc = r(xb(U("ymetrikaEvent.type")), Af(gb(Kb))),
        rg = {
          url: "https://yastatic.net/s3/gdpr/popup/v2/",
          Hb: "ru en et fi lt lv pl fr no sr".split(" "),
          Kb: "_two_main_buttons",
        },
        Ma,
        qg =
          ((Ma = {}),
          (Ma["GDPR-ok"] = "ok"),
          (Ma["GDPR-ok-view-default"] = "ok-default"),
          (Ma["GDPR-ok-view-detailed"] = "ok-detailed"),
          (Ma["GDPR-ok-view-detailed-0"] = "ok-detailed-all"),
          (Ma["GDPR-ok-view-detailed-1"] = "ok-detailed-tech"),
          (Ma["GDPR-ok-view-detailed-2"] = "ok-detailed-tech-analytics"),
          (Ma["GDPR-ok-view-detailed-3"] = "ok-detailed-tech-other"),
          Ma),
        Lb = [],
        Nd = r(vc, xb(xi(Kb)), df(",")),
        Od = r(Af(gb(Kb)), ke, Boolean),
        hg = q(function (a, b) {
          var c = b.l("gdpr");
          return N(c, Na) ? "-" + c : "";
        });
      "function" == typeof Promise && Promise.resolve();
      var Tf = q(jd),
        Rj = q(function () {
          var a = H(
            function (b, c) {
              "ru" !== c && (b[c] = Pf + "." + c);
              return b;
            },
            {},
            td
          );
          x(function (b) {
            a[b] = b;
          }, V(Mf));
          return a;
        }),
        bg = q(function (a) {
          a = Q(a).hostname;
          return (a = pd(r(U("1"), wi("test"), Ka(ba)(a)), ya(Mf))) && a[0];
        }),
        Uf = (function (a, b) {
          return function (c, d) {
            var e = F(d);
            e = Rj(e);
            var f = $f(c, e),
              g = C(c),
              h = Oa(c);
            return Ef(c) || id(c)
              ? {}
              : {
                  F: function (k, l) {
                    var m = k.A,
                      p = Ld(c);
                    m = !(m && m.l("pv"));
                    if (!p || h || m || !f.length) return l();
                    if (g.l("startSync")) Tf(c).push(l);
                    else {
                      g.m("startSync", !0);
                      p = I([c, f, L, !1], a);
                      m = tc[0];
                      if (!m) return l();
                      m(c)
                        .then(p)
                        .then(l, r(Ic(l), A(c, b)))
                        ["catch"](L);
                    }
                  },
                };
          };
        })(function (a, b, c, d) {
          var e = X(a),
            f = C(a),
            g = Ga(a);
          c = yd(a, "c");
          var h = Ab(a, c);
          return H(
            function (k, l) {
              function m() {
                var u = g.l("synced");
                f.m("startSync", !1);
                u && ((u[l.Gc] = p), g.m("synced", u));
                u = Tf(a);
                x(ba, u);
                Mc(u);
              }
              var p,
                t = h({ G: { Z: ["sync.cook"], hb: 1500 } }, [
                  "https://" +
                    l.Uc +
                    "/sync_cookie_image_check" +
                    (d ? "_secondary" : ""),
                ])
                  .then(function () {
                    p = e(eb);
                    m();
                  })
                  ["catch"](function () {
                    p = e(eb) - 1435;
                    m();
                  });
              t = w(t, K);
              return k.then(t);
            },
            O.resolve(),
            b
          )["catch"](A(a, "ctl"));
        }, "sy.c"),
        Yf = J("destruct.e", function (a, b, c) {
          return function () {
            var d = C(a),
              e = b.id;
            x(function (f, g) {
              return R(f) && A(a, "dest.fr." + g, f)();
            }, c);
            delete d.l("counters")[F(b)];
            delete a["yaCounter" + e];
          };
        }),
        Hb = C(window);
      Hb.X("hitParam", {});
      C(window).X("getCounters", ij(window));
      pb.push(jj);
      oa["1"] = va;
      sa.push(lj);
      ka["1"] = kc;
      Ra(re, -1);
      Xa["1"] = [
        [re, -1],
        [ad, 1],
        [Xb, 2],
        [$a(), 3],
      ];
      sa.push(mj);
      sa.push(function (a, b) {
        var c,
          d = ha(a, "a", b);
        return (
          (c = {}),
          (c.hit = function (e, f, g, h, k, l) {
            var m,
              p,
              t = { o: {}, A: fa(((m = {}), (m.pv = 1), (m.ar = 1), m)) };
            if (e)
              return (
                (f = Sa(f)
                  ? {
                      title: f.title,
                      Mb: f.referer,
                      D: f.params,
                      sa: f.callback,
                      b: f.ctx,
                    }
                  : { title: f, Mb: g, D: h, sa: k, b: l }),
                (g = tb(b)),
                g.url !== e && ((g.ref = g.url), (g.url = e)),
                (e = e || Q(a).href),
                (g = f.Mb || g.ref || a.document.referrer),
                (h = sb(
                  a,
                  b,
                  "PageView. Counter " +
                    b.id +
                    ". URL: " +
                    e +
                    ". Referrer: " +
                    g,
                  f.D
                )),
                (k = v(t.C || {}, { D: f.D, title: f.title })),
                (t = d(
                  v(t, {
                    C: k,
                    o: v(
                      t.o || {},
                      ((p = {}), (p["page-url"] = e), (p["page-ref"] = g), p)
                    ),
                  }),
                  b
                ).then(h)),
                hb(a, "p.ar.s", t, f.sa || L, f.b)
              );
          }),
          c
        );
      });
      oa.a = va;
      Xa.a = Ya;
      ka.a = kc;
      sa.push(nj);
      oa.g = va;
      ka.g = kc;
      Xa.g = Ya;
      sa.push(pj);
      Xa["2"] = Ya;
      oa["2"] = va;
      ka["2"] = ib;
      oc.push(function (a, b) {
        var c = dj(a),
          d = ha(a, "r", b),
          e = A(a, "rts.p");
        return Ua(
          b,
          W(
            H,
            null,
            function (f, g) {
              var h = { id: g.oc, K: g.K };
              h = d(
                {
                  G: { L: g.Jc },
                  A: fa(g.kc),
                  o: g.D,
                  C: { na: g.na },
                  ba: { aa: g.aa },
                },
                h
              )["catch"](e);
              return f.then(w(h, K));
            },
            O.resolve(),
            c
          )
        )["catch"](e);
      });
      sa.push(rj);
      T("n", ad, 1);
      T("n", Xb, 2);
      T("n", $a(), 3);
      T("n", He, 100);
      oa.n = va;
      ka.n = ib;
      cc({ pb: { V: "accurateTrackBounce" } });
      (function () {
        sa.push(sj);
        cc({
          sb: {
            V: "ecommerce",
            Ca: function (a) {
              if (a) return !0 === a ? "dataLayer" : "" + a;
            },
          },
        });
      })();
      pc.push(gj);
      sa.push(wj);
      (function () {
        var a = {};
        a.bu = zj;
        a.ds = Ug;
        a.td = function (b) {
          return C(b).l("tpuid");
        };
        v(Tc, a);
      })();
      (function () {
        var a = {};
        a.oo = Lf("oo");
        a.ecs = Lf("ecs");
        v(Gf, a);
      })();
      ka.er = Eb;
      (function (a) {
        try {
          var b = yd(a, "er"),
            c = Rg(a, b);
          jf.push(function (d, e, f, g) {
            var h, k, l, m, p;
            c(
              ((h = {}),
              (h[d] =
                ((k = {}),
                (k["970"] =
                  ((l = {}),
                  (l[e] =
                    ((m = {}),
                    (m[f] = g
                      ? ((p = {}), (p[a.location.href] = g), p)
                      : a.location.href),
                    m)),
                  l)),
                k)),
              h)
            );
          });
        } catch (d) {}
      })(window);
      pc.push(function (a, b) {
        if (a["disableYaCounter" + b.id]) {
          var c = F(b);
          delete C(a).l("counters", {})[c];
          Ba(Da("oo.e"));
        }
      });
      Wb.unshift(function (a) {
        return {
          F: function (b, c) {
            C(a).l("oo") || c();
          },
        };
      });
      Ra(function (a, b) {
        return {
          F: function (c, d) {
            var e = c.o,
              f = c.A;
            !Nf[b.id] &&
              f.l("pv") &&
              b.exp &&
              !e.nohit &&
              ((e.exp = b.exp), (Nf[b.id] = !0));
            d();
          },
        };
      }, -99);
      sa.push(Aj);
      Xa.e = Ya;
      oa.e = va;
      ka.e = ib;
      cc({ exp: { V: "experiments" } });
      Ri.experiments = "ex";
      pb.push(Bj);
      Ra(function (a) {
        return {
          F: function (b, c) {
            b.C && b.C.D && $d(a, b.C.D);
            c();
          },
        };
      }, 2.5);
      (function () {
        var a;
        tc.push(Cj);
        oa.f = va;
        v(ka, ((a = {}), (a.f = Jf), a));
        T("f", $a(), 1);
        T("f", Ke, 2);
      })();
      (function () {
        var a,
          b,
          c = vb([wb]);
        v(ka, ((a = {}), (a.s = c), (a.S = c), (a.u = Eb), a));
        v(oa, ((b = {}), (b.s = Ab), (b.S = va), (b.u = Ab), b));
        T("s");
        T("u");
        T("S", $a(["v", "hid", "u", "vf", "rn"]), 1);
        sa.push(J("s", Bg));
      })();
      T("p", $a("et w v z i u vf".split(" ")), 1);
      oa.p = function (a, b, c) {
        return function (d, e) {
          var f,
            g = v({ A: fa() }, d);
          g.o || (g.o = {});
          var h = g.o,
            k = g.$;
          k = void 0 === k ? {} : k;
          h["wv-hit"] = h["wv-hit"] || "" + Za(a);
          h["page-url"] = h["page-url"] || a.location.href;
          h.wmode = "0";
          h["wv-part"] = "0";
          h["page-url"] = h["page-url"] || a.location.href;
          h["wv-type"] || (h["wv-type"] = k.Ac ? "5" : "4");
          h = {
            ba: { aa: "webvisor/" + e.id },
            G: v(g.G, {
              ja: ((f = {}), (f["Content-Type"] = "text/plain"), f),
              hc: "POST",
            }),
            o: h,
          };
          f = Mb(z(r(Tb, jb([a, e]), ba), af.pub || []), c);
          return bd(a, b, f)(v(g, h));
        };
      };
      ka.p = vb([0, wb]);
      oc.push(Ij);
      Ra(qb, 20);
      T("f", qb, 20);
      T("n", qb, 20);
      T("1", qb, 20);
      T("d", qb, 20);
      Ra(yc, 6);
      T("1", yc, 6);
      T("adb");
      T("n", yc, 4);
      ka.adb = Eb;
      oa.adb = bd;
      pb.push(Mj);
      oa.d = va;
      T("d", $a(["hid", "u", "v", "vf"]), 1);
      ka.d = Eb;
      T(
        "n",
        function (a, b) {
          return {
            Y: function (c, d) {
              if (!c.C || !c.C.force) {
                var e = 0.002,
                  f = 24226447 === b.id ? 1 : 0.002,
                  g,
                  h,
                  k,
                  l,
                  m;
                void 0 === e && (e = 1);
                void 0 === f && (f = 1);
                var p = a.performance;
                if (
                  p &&
                  R(p.getEntriesByType) &&
                  ((e = Math.random() > e), (f = Math.random() > f), !e || !f)
                ) {
                  p = a.performance.getEntriesByType("resource");
                  for (
                    var t = {}, u = {}, y = {}, B = Nj(a), D = 0;
                    D < p.length;
                    D += 1
                  ) {
                    var E = p[D],
                      S = E.name.replace(/^https?:\/\//, "").split("?")[0],
                      ja = od(S),
                      Y =
                        ((g = {}),
                        (g.dns = Math.round(
                          E.domainLookupEnd - E.domainLookupStart
                        )),
                        (g.tcp = Math.round(E.connectEnd - E.connectStart)),
                        (g.duration = Math.round(E.duration)),
                        (g.response = Math.round(
                          E.responseEnd - E.requestStart
                        )),
                        g);
                    "script" !== E.initiatorType ||
                      e ||
                      (u[S] = v(
                        Y,
                        ((h = {}),
                        (h.name = E.name),
                        (h.decodedBodySize = E.decodedBodySize),
                        h)
                      ));
                    (!Sf[ja] && !B[ja]) ||
                      t[S] ||
                      f ||
                      (t[S] = v(Y, ((k = {}), (k.pages = a.location.href), k)));
                  }
                  V(t).length && (y.timings8 = t);
                  V(u).length && (y.scripts = u);
                  if (V(y).length)
                    ha(
                      a,
                      "d",
                      b
                    )(
                      {
                        A: fa(((l = {}), (l.ar = 1), (l.pv = 1), l)),
                        G: { L: Ca(a, y) || void 0 },
                        o:
                          ((m = {}),
                          (m["page-url"] = a.location && "" + a.location.href),
                          m),
                      },
                      { id: 51533966, K: "0" }
                    )["catch"](A(a, "r.tim.ng2"));
                }
              }
              d();
            },
          };
        },
        7
      );
      sa.push(Oj);
      pb.push(Kj);
      cc({ gd: { V: "yaDisableGDPR" }, hd: { V: "yaGDPRLang" } });
      Wb.push(function (a, b) {
        return { F: I([a, b], gg) };
      });
      Oe.push("gdpr", "gdpr_popup");
      Xc.push(function (a, b) {
        var c = Ib(a);
        c = vc(c);
        if (aa(gb(Qj), c).length) return !0;
        c = b(a, "gdpr");
        return N(c, [fb, Pj]);
      });
      Wb.push(function (a) {
        return {
          F: function (b, c) {
            var d = b.ba || {},
              e;
            if ((e = n(a, "document.referrer"))) {
              b: {
                var f = Fc(a, e).host.match(Hf);
                if (f) {
                  e = f[1];
                  if ((f = f[2])) {
                    e = N(f, td) ? f : !1;
                    break b;
                  }
                  if (e) {
                    e = td[0];
                    break b;
                  }
                }
                e = !1;
              }
              e = Pf + "." + (e || Dj);
            } else e = Va;
            b.ba = v(d, { yc: [e] });
            c();
          },
        };
      });
      Ra(Uf, 5);
      T("1", Uf, 6);
      ka.c = Eb;
      oa.c = Ab;
      window.Ya &&
        nc &&
        ((window.Ya[Ff] = nc),
        hj(window),
        x(r(jb([window, window.Ya[Ff]]), ba), Oi));
      x(r(jb([window]), ba), []);
    })();
  } catch (nc) {}
}).call(this);
