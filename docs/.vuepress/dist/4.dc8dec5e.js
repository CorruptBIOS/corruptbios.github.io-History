(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    382: function (t, e, n) {
      'use strict';
      n.d(e, 'd', function () {
        return i;
      }),
        n.d(e, 'a', function () {
          return r;
        }),
        n.d(e, 'i', function () {
          return s;
        }),
        n.d(e, 'f', function () {
          return l;
        }),
        n.d(e, 'g', function () {
          return c;
        }),
        n.d(e, 'h', function () {
          return u;
        }),
        n.d(e, 'b', function () {
          return h;
        }),
        n.d(e, 'e', function () {
          return p;
        }),
        n.d(e, 'k', function () {
          return d;
        }),
        n.d(e, 'l', function () {
          return f;
        }),
        n.d(e, 'c', function () {
          return g;
        }),
        n.d(e, 'j', function () {
          return m;
        });
      n(54),
        n(80),
        n(383),
        n(385),
        n(217),
        n(79),
        n(127),
        n(128),
        n(33),
        n(117),
        n(209);
      var i = /#.*$/,
        a = /\.(md|html)$/,
        r = /\/$/,
        s = /^[a-z]+:/i;
      function o(t) {
        return decodeURI(t).replace(i, '').replace(a, '');
      }
      function l(t) {
        return s.test(t);
      }
      function c(t) {
        return /^mailto:/.test(t);
      }
      function u(t) {
        return /^tel:/.test(t);
      }
      function h(t) {
        if (l(t)) return t;
        var e = t.match(i),
          n = e ? e[0] : '',
          a = o(t);
        return r.test(a) ? t : a + '.html' + n;
      }
      function p(t, e) {
        var n = t.hash,
          a = (function (t) {
            var e = t.match(i);
            if (e) return e[0];
          })(e);
        return (!a || n === a) && o(t.path) === o(e);
      }
      function d(t, e, n) {
        if (l(e)) return { type: 'external', path: e };
        n &&
          (e = (function (t, e, n) {
            var i = t.charAt(0);
            if ('/' === i) return t;
            if ('?' === i || '#' === i) return e + t;
            var a = e.split('/');
            (n && a[a.length - 1]) || a.pop();
            for (
              var r = t.replace(/^\//, '').split('/'), s = 0;
              s < r.length;
              s++
            ) {
              var o = r[s];
              '..' === o ? a.pop() : '.' !== o && a.push(o);
            }
            '' !== a[0] && a.unshift('');
            return a.join('/');
          })(e, n));
        for (var i = o(e), a = 0; a < t.length; a++)
          if (o(t[a].regularPath) === i)
            return Object.assign({}, t[a], {
              type: 'page',
              path: h(t[a].path),
            });
        return (
          console.error(
            '[vuepress] No matching page found for sidebar item "'.concat(
              e,
              '"'
            )
          ),
          {}
        );
      }
      function f(t, e, n, i) {
        var a = n.pages,
          r = n.themeConfig,
          s = (i && r.locales && r.locales[i]) || r;
        if ('auto' === (t.frontmatter.sidebar || s.sidebar || r.sidebar))
          return (function (t) {
            var e = g(t.headers || []);
            return [
              {
                type: 'group',
                collapsable: !1,
                title: t.title,
                path: null,
                children: e.map(function (e) {
                  return {
                    type: 'auto',
                    title: e.title,
                    basePath: t.path,
                    path: t.path + '#' + e.slug,
                    children: e.children || [],
                  };
                }),
              },
            ];
          })(t);
        var o = s.sidebar || r.sidebar;
        if (o) {
          var l = (function (t, e) {
              if (Array.isArray(e)) return { base: '/', config: e };
              for (var n in e)
                if (
                  0 ===
                  ((i = t), /(\.html|\/)$/.test(i) ? i : i + '/').indexOf(
                    encodeURI(n)
                  )
                )
                  return { base: n, config: e[n] };
              var i;
              return {};
            })(e, o),
            c = l.base,
            u = l.config;
          return u
            ? u.map(function (t) {
                return (function t(e, n, i) {
                  var a =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : 1;
                  if ('string' == typeof e) return d(n, e, i);
                  if (Array.isArray(e))
                    return Object.assign(d(n, e[0], i), { title: e[1] });
                  a > 3 &&
                    console.error(
                      '[vuepress] detected a too deep nested sidebar group.'
                    );
                  var r = e.children || [];
                  return 0 === r.length && e.path
                    ? Object.assign(d(n, e.path, i), { title: e.title })
                    : {
                        type: 'group',
                        path: e.path,
                        title: e.title,
                        sidebarDepth: e.sidebarDepth,
                        children: r.map(function (e) {
                          return t(e, n, i, a + 1);
                        }),
                        collapsable: !1 !== e.collapsable,
                      };
                })(t, a, c);
              })
            : [];
        }
        return [];
      }
      function g(t) {
        var e;
        return (
          (t = t.map(function (t) {
            return Object.assign({}, t);
          })).forEach(function (t) {
            2 === t.level
              ? (e = t)
              : e && (e.children || (e.children = [])).push(t);
          }),
          t.filter(function (t) {
            return 2 === t.level;
          })
        );
      }
      function m(t) {
        return Object.assign(t, {
          type: t.items && t.items.length ? 'links' : 'link',
        });
      }
    },
    386: function (t, e, n) {},
    390: function (t, e, n) {},
    395: function (t, e, n) {},
    396: function (t, e, n) {},
    397: function (t, e, n) {},
    398: function (t, e, n) {},
    399: function (t, e, n) {},
    401: function (t, e, n) {},
    402: function (t, e, n) {},
    403: function (t, e, n) {},
    404: function (t, e, n) {},
    405: function (t, e, n) {},
    406: function (t, e, n) {},
    408: function (t, e, n) {
      'use strict';
      n.r(e);
      n(115);
      var i = n(382),
        a = {
          name: 'SidebarGroup',
          props: ['item', 'open', 'collapsable', 'depth'],
          components: { DropdownTransition: n(409).a },
          beforeCreate: function () {
            this.$options.components.SidebarLinks = n(408).default;
          },
          methods: { isActive: i.e },
        },
        r = (n(438), n(53)),
        s = Object(r.a)(
          a,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              'section',
              {
                staticClass: 'sidebar-group',
                class: [
                  { collapsable: t.collapsable, 'is-sub-group': 0 !== t.depth },
                  'depth-' + t.depth,
                ],
              },
              [
                t.item.path
                  ? n(
                      'router-link',
                      {
                        staticClass: 'sidebar-heading clickable',
                        class: {
                          open: t.open,
                          active: t.isActive(t.$route, t.item.path),
                        },
                        attrs: { to: t.item.path },
                        nativeOn: {
                          click: function (e) {
                            return t.$emit('toggle');
                          },
                        },
                      },
                      [
                        n('span', [t._v(t._s(t.item.title))]),
                        t._v(' '),
                        t.collapsable
                          ? n('span', {
                              staticClass: 'arrow',
                              class: t.open ? 'down' : 'right',
                            })
                          : t._e(),
                      ]
                    )
                  : n(
                      'p',
                      {
                        staticClass: 'sidebar-heading',
                        class: { open: t.open },
                        on: {
                          click: function (e) {
                            return t.$emit('toggle');
                          },
                        },
                      },
                      [
                        n('span', [t._v(t._s(t.item.title))]),
                        t._v(' '),
                        t.collapsable
                          ? n('span', {
                              staticClass: 'arrow',
                              class: t.open ? 'down' : 'right',
                            })
                          : t._e(),
                      ]
                    ),
                t._v(' '),
                n(
                  'DropdownTransition',
                  [
                    t.open || !t.collapsable
                      ? n('SidebarLinks', {
                          staticClass: 'sidebar-group-items',
                          attrs: {
                            items: t.item.children,
                            sidebarDepth: t.item.sidebarDepth,
                            depth: t.depth + 1,
                          },
                        })
                      : t._e(),
                  ],
                  1
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports;
      n(439), n(79);
      function o(t, e, n, i) {
        return t(
          'router-link',
          {
            props: { to: e, activeClass: '', exactActiveClass: '' },
            class: { active: i, 'sidebar-link': !0 },
          },
          n
        );
      }
      function l(t, e, n, a, r) {
        var s =
          arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
        return !e || s > r
          ? null
          : t(
              'ul',
              { class: 'sidebar-sub-headers' },
              e.map(function (e) {
                var c = Object(i.e)(a, n + '#' + e.slug);
                return t('li', { class: 'sidebar-sub-header' }, [
                  o(t, n + '#' + e.slug, e.title, c),
                  l(t, e.children, n, a, r, s + 1),
                ]);
              })
            );
      }
      var c = {
        functional: !0,
        props: ['item', 'sidebarDepth'],
        render: function (t, e) {
          var n = e.parent,
            a = n.$page,
            r = (n.$site, n.$route),
            s = n.$themeConfig,
            c = n.$themeLocaleConfig,
            u = e.props,
            h = u.item,
            p = u.sidebarDepth,
            d = Object(i.e)(r, h.path),
            f =
              'auto' === h.type
                ? d ||
                  h.children.some(function (t) {
                    return Object(i.e)(r, h.basePath + '#' + t.slug);
                  })
                : d,
            g =
              'external' === h.type
                ? (function (t, e, n) {
                    return t(
                      'a',
                      {
                        attrs: {
                          href: e,
                          target: '_blank',
                          rel: 'noopener noreferrer',
                        },
                        class: { 'sidebar-link': !0 },
                      },
                      [n, t('OutboundLink')]
                    );
                  })(t, h.path, h.title || h.path)
                : o(t, h.path, h.title || h.path, f),
            m = [
              a.frontmatter.sidebarDepth,
              p,
              c.sidebarDepth,
              s.sidebarDepth,
              1,
            ].find(function (t) {
              return void 0 !== t;
            }),
            v = c.displayAllHeaders || s.displayAllHeaders;
          return 'auto' === h.type
            ? [g, l(t, h.children, h.basePath, r, m)]
            : (f || v) && h.headers && !i.d.test(h.path)
            ? [g, l(t, Object(i.c)(h.headers), h.path, r, m)]
            : g;
        },
      };
      n(440);
      function u(t, e) {
        return (
          'group' === e.type &&
          e.children.some(function (e) {
            return 'group' === e.type
              ? u(t, e)
              : 'page' === e.type && Object(i.e)(t, e.path);
          })
        );
      }
      var h = {
          name: 'SidebarLinks',
          components: {
            SidebarGroup: s,
            SidebarLink: Object(r.a)(c, void 0, void 0, !1, null, null, null)
              .exports,
          },
          props: ['items', 'depth', 'sidebarDepth'],
          data: function () {
            return { openGroupIndex: 0 };
          },
          created: function () {
            this.refreshIndex();
          },
          watch: {
            $route: function () {
              this.refreshIndex();
            },
          },
          methods: {
            refreshIndex: function () {
              var t = (function (t, e) {
                for (var n = 0; n < e.length; n++) {
                  var i = e[n];
                  if (u(t, i)) return n;
                }
                return -1;
              })(this.$route, this.items);
              t > -1 && (this.openGroupIndex = t);
            },
            toggleGroup: function (t) {
              this.openGroupIndex = t === this.openGroupIndex ? -1 : t;
            },
            isActive: function (t) {
              return Object(i.e)(this.$route, t.regularPath);
            },
          },
        },
        p = Object(r.a)(
          h,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return t.items.length
              ? n(
                  'ul',
                  { staticClass: 'sidebar-links' },
                  t._l(t.items, function (e, i) {
                    return n(
                      'li',
                      { key: i },
                      [
                        'group' === e.type
                          ? n('SidebarGroup', {
                              attrs: {
                                item: e,
                                open: i === t.openGroupIndex,
                                collapsable: e.collapsable || e.collapsible,
                                depth: t.depth,
                              },
                              on: {
                                toggle: function (e) {
                                  return t.toggleGroup(i);
                                },
                              },
                            })
                          : n('SidebarLink', {
                              attrs: { sidebarDepth: t.sidebarDepth, item: e },
                            }),
                      ],
                      1
                    );
                  }),
                  0
                )
              : t._e();
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = p.exports;
    },
    409: function (t, e, n) {
      'use strict';
      var i = {
          name: 'DropdownTransition',
          methods: {
            setHeight: function (t) {
              t.style.height = t.scrollHeight + 'px';
            },
            unsetHeight: function (t) {
              t.style.height = '';
            },
          },
        },
        a = (n(430), n(53)),
        r = Object(a.a)(
          i,
          function () {
            var t = this.$createElement;
            return (this._self._c || t)(
              'transition',
              {
                attrs: { name: 'dropdown' },
                on: {
                  enter: this.setHeight,
                  'after-enter': this.unsetHeight,
                  'before-leave': this.setHeight,
                },
              },
              [this._t('default')],
              2
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.a = r.exports;
    },
    414: function (t, e, n) {
      'use strict';
      n(386);
    },
    423: function (t, e, n) {
      'use strict';
      n(390);
    },
    429: function (t, e, n) {
      'use strict';
      n(395);
    },
    430: function (t, e, n) {
      'use strict';
      n(396);
    },
    431: function (t, e, n) {
      'use strict';
      n(397);
    },
    432: function (t, e, n) {
      'use strict';
      n(398);
    },
    433: function (t, e, n) {
      'use strict';
      n(399);
    },
    434: function (t, e, n) {
      'use strict';
      n(401);
    },
    436: function (t, e, n) {
      'use strict';
      n(402);
    },
    437: function (t, e, n) {
      'use strict';
      n(403);
    },
    438: function (t, e, n) {
      'use strict';
      n(404);
    },
    440: function (t, e, n) {
      'use strict';
      n(405);
    },
    441: function (t, e, n) {
      'use strict';
      n(406);
    },
    446: function (t, e, n) {
      'use strict';
      n.r(e);
      n(410), n(115), n(116);
      var i = n(382),
        a = {
          props: { item: { required: !0 } },
          computed: {
            link: function () {
              return Object(i.b)(this.item.link);
            },
            exact: function () {
              var t = this;
              return this.$site.locales
                ? Object.keys(this.$site.locales).some(function (e) {
                    return e === t.link;
                  })
                : '/' === this.link;
            },
          },
          methods: {
            isExternal: i.f,
            isMailto: i.g,
            isTel: i.h,
            focusoutAction: function () {
              this.$emit('focusout');
            },
          },
        },
        r = n(53),
        s = Object(r.a)(
          a,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return t.isExternal(t.link)
              ? n(
                  'a',
                  {
                    staticClass: 'nav-link external',
                    attrs: {
                      href: t.link,
                      target:
                        t.isMailto(t.link) || t.isTel(t.link) ? null : '_blank',
                      rel:
                        t.isMailto(t.link) || t.isTel(t.link)
                          ? null
                          : 'noopener noreferrer',
                    },
                    on: { focusout: t.focusoutAction },
                  },
                  [
                    t._v('\n  ' + t._s(t.item.text) + '\n  '),
                    n('OutboundLink'),
                  ],
                  1
                )
              : n(
                  'router-link',
                  {
                    staticClass: 'nav-link',
                    attrs: { to: t.link, exact: t.exact },
                    nativeOn: {
                      focusout: function (e) {
                        return t.focusoutAction(e);
                      },
                    },
                  },
                  [t._v(t._s(t.item.text))]
                );
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        o = {
          components: { NavLink: s },
          computed: {
            data: function () {
              return this.$page.frontmatter;
            },
            actionLink: function () {
              return { link: this.data.actionLink, text: this.data.actionText };
            },
          },
        },
        l =
          (n(414),
          Object(r.a)(
            o,
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                'main',
                {
                  staticClass: 'home',
                  attrs: { 'aria-labelledby': 'main-title' },
                },
                [
                  n('header', { staticClass: 'hero' }, [
                    t.data.heroImage
                      ? n('img', {
                          attrs: {
                            src: t.$withBase(t.data.heroImage),
                            alt: t.data.heroAlt || 'hero',
                          },
                        })
                      : t._e(),
                    t._v(' '),
                    null !== t.data.heroText
                      ? n(
                          'h1',
                          {
                            staticStyle: { color: '#fff' },
                            attrs: { id: 'main-title' },
                          },
                          [t._v(t._s(t.data.heroText || t.$title || 'Hello'))]
                        )
                      : t._e(),
                    t._v(' '),
                    n(
                      'p',
                      {
                        staticClass: 'description',
                        staticStyle: { color: '#fff' },
                      },
                      [
                        t._v(
                          '\n      ' +
                            t._s(
                              t.data.tagline ||
                                t.$description ||
                                'Welcome to your VuePress site'
                            ) +
                            '\n    '
                        ),
                      ]
                    ),
                    t._v(' '),
                    t.data.actionText && t.data.actionLink
                      ? n(
                          'p',
                          { staticClass: 'action' },
                          [
                            n('NavLink', {
                              staticClass: 'action-button',
                              attrs: { item: t.actionLink },
                            }),
                          ],
                          1
                        )
                      : t._e(),
                  ]),
                  t._v(' '),
                  t.data.features && t.data.features.length
                    ? n(
                        'div',
                        { staticClass: 'features' },
                        t._l(t.data.features, function (e, i) {
                          return n('div', { key: i, staticClass: 'feature' }, [
                            n('h2', [t._v(t._s(e.title))]),
                            t._v(' '),
                            n('p', [t._v(t._s(e.details))]),
                          ]);
                        }),
                        0
                      )
                    : t._e(),
                  t._v(' '),
                  n('Content', { staticClass: 'theme-default-content custom' }),
                  t._v(' '),
                  t.data.footer
                    ? n('div', { staticClass: 'footer' }, [
                        t._v('\n    ' + t._s(t.data.footer) + '\n  '),
                      ])
                    : t._e(),
                ],
                1
              );
            },
            [],
            !1,
            null,
            null,
            null
          ).exports),
        c = (n(415), n(114)),
        u =
          (n(11),
          n(12),
          n(16),
          n(218),
          n(417),
          {
            props: ['options'],
            data: function () {
              return { placeholder: void 0 };
            },
            mounted: function () {
              this.initialize(this.options, this.$lang),
                (this.placeholder =
                  this.$site.themeConfig.searchPlaceholder || '');
            },
            methods: {
              initialize: function (t, e) {
                var i = this;
                Promise.all([
                  Promise.all([n.e(0), n.e(2)]).then(n.t.bind(null, 444, 7)),
                  Promise.all([n.e(0), n.e(2)]).then(n.t.bind(null, 445, 7)),
                ]).then(function (n) {
                  var a = Object(c.a)(n, 1)[0];
                  a = a.default;
                  var r = t.algoliaOptions,
                    s = void 0 === r ? {} : r;
                  a(
                    Object.assign({}, t, {
                      inputSelector: '#algolia-search-input',
                      algoliaOptions: Object.assign(
                        {
                          facetFilters: ['lang:'.concat(e)].concat(
                            s.facetFilters || []
                          ),
                        },
                        s
                      ),
                      handleSelected: function (t, e, n) {
                        var a = new URL(n.url),
                          r = a.pathname,
                          s = a.hash;
                        i.$router.push(''.concat(r).concat(s));
                      },
                    })
                  );
                });
              },
              update: function (t, e) {
                (this.$el.innerHTML =
                  '<input id="algolia-search-input" class="search-query">'),
                  this.initialize(t, e);
              },
            },
            watch: {
              $lang: function (t) {
                this.update(this.options, t);
              },
              options: function (t) {
                this.update(t, this.$lang);
              },
            },
          }),
        h =
          (n(423),
          Object(r.a)(
            u,
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e(
                'form',
                {
                  staticClass: 'algolia-search-wrapper search-box',
                  attrs: { id: 'search-form', role: 'search' },
                },
                [
                  e('input', {
                    staticClass: 'search-query',
                    attrs: {
                      id: 'algolia-search-input',
                      placeholder: this.placeholder,
                    },
                  }),
                ]
              );
            },
            [],
            !1,
            null,
            null,
            null
          ).exports),
        p = n(443),
        d =
          (n(429),
          Object(r.a)(
            {},
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                'div',
                {
                  staticClass: 'sidebar-button',
                  on: {
                    click: function (e) {
                      return t.$emit('toggle-sidebar');
                    },
                  },
                },
                [
                  n(
                    'svg',
                    {
                      staticClass: 'icon',
                      attrs: {
                        xmlns: 'http://www.w3.org/2000/svg',
                        'aria-hidden': 'true',
                        role: 'img',
                        viewBox: '0 0 448 512',
                      },
                    },
                    [
                      n('path', {
                        attrs: {
                          fill: 'currentColor',
                          d: 'M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z',
                        },
                      }),
                    ]
                  ),
                ]
              );
            },
            [],
            !1,
            null,
            null,
            null
          ).exports),
        f = n(51),
        g = (n(79), n(54), n(80), n(383), n(392), n(393), n(409)),
        m = n(227),
        v = n.n(m),
        b = {
          components: { NavLink: s, DropdownTransition: g.a },
          data: function () {
            return { open: !1 };
          },
          props: { item: { required: !0 } },
          computed: {
            dropdownAriaLabel: function () {
              return this.item.ariaLabel || this.item.text;
            },
          },
          methods: {
            toggle: function () {
              this.open = !this.open;
            },
            isLastItemOfArray: function (t, e) {
              return v()(e) === t;
            },
          },
          watch: {
            $route: function () {
              this.open = !1;
            },
          },
        },
        _ =
          (n(431),
          {
            components: {
              NavLink: s,
              DropdownLink: Object(r.a)(
                b,
                function () {
                  var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                  return n(
                    'div',
                    {
                      staticClass: 'dropdown-wrapper',
                      class: { open: t.open },
                    },
                    [
                      n(
                        'button',
                        {
                          staticClass: 'dropdown-title',
                          attrs: {
                            type: 'button',
                            'aria-label': t.dropdownAriaLabel,
                          },
                          on: { click: t.toggle },
                        },
                        [
                          n('span', { staticClass: 'title' }, [
                            t._v(t._s(t.item.text)),
                          ]),
                          t._v(' '),
                          n('span', {
                            staticClass: 'arrow',
                            class: t.open ? 'down' : 'right',
                          }),
                        ]
                      ),
                      t._v(' '),
                      n('DropdownTransition', [
                        n(
                          'ul',
                          {
                            directives: [
                              {
                                name: 'show',
                                rawName: 'v-show',
                                value: t.open,
                                expression: 'open',
                              },
                            ],
                            staticClass: 'nav-dropdown',
                          },
                          t._l(t.item.items, function (e, i) {
                            return n(
                              'li',
                              {
                                key: e.link || i,
                                staticClass: 'dropdown-item',
                              },
                              [
                                'links' === e.type
                                  ? n('h4', [t._v(t._s(e.text))])
                                  : t._e(),
                                t._v(' '),
                                'links' === e.type
                                  ? n(
                                      'ul',
                                      {
                                        staticClass: 'dropdown-subitem-wrapper',
                                      },
                                      t._l(e.items, function (i) {
                                        return n(
                                          'li',
                                          {
                                            key: i.link,
                                            staticClass: 'dropdown-subitem',
                                          },
                                          [
                                            n('NavLink', {
                                              attrs: { item: i },
                                              on: {
                                                focusout: function (n) {
                                                  t.isLastItemOfArray(
                                                    i,
                                                    e.items
                                                  ) &&
                                                    t.isLastItemOfArray(
                                                      e,
                                                      t.item.items
                                                    ) &&
                                                    t.toggle();
                                                },
                                              },
                                            }),
                                          ],
                                          1
                                        );
                                      }),
                                      0
                                    )
                                  : n('NavLink', {
                                      attrs: { item: e },
                                      on: {
                                        focusout: function (n) {
                                          t.isLastItemOfArray(
                                            e,
                                            t.item.items
                                          ) && t.toggle();
                                        },
                                      },
                                    }),
                              ],
                              1
                            );
                          }),
                          0
                        ),
                      ]),
                    ],
                    1
                  );
                },
                [],
                !1,
                null,
                null,
                null
              ).exports,
            },
            computed: {
              userNav: function () {
                return (
                  this.$themeLocaleConfig.nav ||
                  this.$site.themeConfig.nav ||
                  []
                );
              },
              nav: function () {
                var t = this,
                  e = this.$site.locales;
                if (e && Object.keys(e).length > 1) {
                  var n = this.$page.path,
                    i = this.$router.options.routes,
                    a = this.$site.themeConfig.locales || {},
                    r = {
                      text: this.$themeLocaleConfig.selectText || 'Languages',
                      ariaLabel:
                        this.$themeLocaleConfig.ariaLabel || 'Select language',
                      items: Object.keys(e).map(function (r) {
                        var s,
                          o = e[r],
                          l = (a[r] && a[r].label) || o.lang;
                        return (
                          o.lang === t.$lang
                            ? (s = n)
                            : ((s = n.replace(t.$localeConfig.path, r)),
                              i.some(function (t) {
                                return t.path === s;
                              }) || (s = r)),
                          { text: l, link: s }
                        );
                      }),
                    };
                  return [].concat(Object(f.a)(this.userNav), [r]);
                }
                return this.userNav;
              },
              userLinks: function () {
                return (this.nav || []).map(function (t) {
                  return Object.assign(Object(i.j)(t), {
                    items: (t.items || []).map(i.j),
                  });
                });
              },
              repoLink: function () {
                var t = this.$site.themeConfig.repo;
                return t
                  ? /^https?:/.test(t)
                    ? t
                    : 'https://github.com/'.concat(t)
                  : null;
              },
              repoLabel: function () {
                if (this.repoLink) {
                  if (this.$site.themeConfig.repoLabel)
                    return this.$site.themeConfig.repoLabel;
                  for (
                    var t = this.repoLink.match(/^https?:\/\/[^/]+/)[0],
                      e = ['GitHub', 'GitLab', 'Bitbucket'],
                      n = 0;
                    n < e.length;
                    n++
                  ) {
                    var i = e[n];
                    if (new RegExp(i, 'i').test(t)) return i;
                  }
                  return 'Source';
                }
              },
            },
          }),
        k =
          (n(432),
          Object(r.a)(
            _,
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return t.userLinks.length || t.repoLink
                ? n(
                    'nav',
                    { staticClass: 'nav-links' },
                    [
                      t._l(t.userLinks, function (t) {
                        return n(
                          'div',
                          { key: t.link, staticClass: 'nav-item' },
                          [
                            'links' === t.type
                              ? n('DropdownLink', { attrs: { item: t } })
                              : n('NavLink', { attrs: { item: t } }),
                          ],
                          1
                        );
                      }),
                      t._v(' '),
                      t.repoLink
                        ? n(
                            'a',
                            {
                              staticClass: 'repo-link',
                              attrs: {
                                href: t.repoLink,
                                target: '_blank',
                                rel: 'noopener noreferrer',
                              },
                            },
                            [
                              t._v('\n    ' + t._s(t.repoLabel) + '\n    '),
                              n('OutboundLink'),
                            ],
                            1
                          )
                        : t._e(),
                    ],
                    2
                  )
                : t._e();
            },
            [],
            !1,
            null,
            null,
            null
          ).exports);
      function $(t, e) {
        return t.ownerDocument.defaultView.getComputedStyle(t, null)[e];
      }
      var C = {
          components: {
            SidebarButton: d,
            NavLinks: k,
            SearchBox: p.a,
            AlgoliaSearchBox: h,
          },
          data: function () {
            return { linksWrapMaxWidth: null };
          },
          mounted: function () {
            var t = this,
              e =
                parseInt($(this.$el, 'paddingLeft')) +
                parseInt($(this.$el, 'paddingRight')),
              n = function () {
                document.documentElement.clientWidth < 719
                  ? (t.linksWrapMaxWidth = null)
                  : (t.linksWrapMaxWidth =
                      t.$el.offsetWidth -
                      e -
                      ((t.$refs.siteName && t.$refs.siteName.offsetWidth) ||
                        0));
              };
            n(), window.addEventListener('resize', n, !1);
          },
          computed: {
            algolia: function () {
              return (
                this.$themeLocaleConfig.algolia ||
                this.$site.themeConfig.algolia ||
                {}
              );
            },
            isAlgoliaSearch: function () {
              return (
                this.algolia && this.algolia.apiKey && this.algolia.indexName
              );
            },
          },
        },
        L =
          (n(433),
          Object(r.a)(
            C,
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                'header',
                { staticClass: 'navbar' },
                [
                  n('SidebarButton', {
                    on: {
                      'toggle-sidebar': function (e) {
                        return t.$emit('toggle-sidebar');
                      },
                    },
                  }),
                  t._v(' '),
                  n(
                    'router-link',
                    { staticClass: 'home-link', attrs: { to: t.$localePath } },
                    [
                      t.$site.themeConfig.logo
                        ? n('img', {
                            staticClass: 'logo circular--square',
                            attrs: {
                              src: t.$withBase(t.$site.themeConfig.logo),
                              alt: t.$siteTitle,
                            },
                          })
                        : t._e(),
                      t._v(' '),
                      t.$siteTitle
                        ? n(
                            'span',
                            {
                              ref: 'siteName',
                              staticClass: 'site-name',
                              class: { 'can-hide': t.$site.themeConfig.logo },
                            },
                            [t._v(t._s(t.$siteTitle))]
                          )
                        : t._e(),
                    ]
                  ),
                  t._v(' '),
                  n(
                    'div',
                    {
                      staticClass: 'links',
                      style: t.linksWrapMaxWidth
                        ? { 'max-width': t.linksWrapMaxWidth + 'px' }
                        : {},
                    },
                    [
                      t.isAlgoliaSearch
                        ? n('AlgoliaSearchBox', {
                            attrs: { options: t.algolia },
                          })
                        : !1 !== t.$site.themeConfig.search &&
                          !1 !== t.$page.frontmatter.search
                        ? n('SearchBox')
                        : t._e(),
                      t._v(' '),
                      n('NavLinks', { staticClass: 'can-hide' }),
                    ],
                    1
                  ),
                ],
                1
              );
            },
            [],
            !1,
            null,
            null,
            null
          ).exports),
        x = n(400),
        w = n.n(x),
        O = {
          name: 'PageEdit',
          computed: {
            lastUpdated: function () {
              return this.$page.lastUpdated;
            },
            lastUpdatedText: function () {
              return 'string' == typeof this.$themeLocaleConfig.lastUpdated
                ? this.$themeLocaleConfig.lastUpdated
                : 'string' == typeof this.$site.themeConfig.lastUpdated
                ? this.$site.themeConfig.lastUpdated
                : 'Last Updated';
            },
            editLink: function () {
              var t = w()(this.$page.frontmatter.editLink)
                  ? this.$site.themeConfig.editLinks
                  : this.$page.frontmatter.editLink,
                e = this.$site.themeConfig,
                n = e.repo,
                i = e.docsDir,
                a = void 0 === i ? '' : i,
                r = e.docsBranch,
                s = void 0 === r ? 'master' : r,
                o = e.docsRepo,
                l = void 0 === o ? n : o;
              return t && l && this.$page.relativePath
                ? this.createEditLink(n, l, a, s, this.$page.relativePath)
                : null;
            },
            editLinkText: function () {
              return (
                this.$themeLocaleConfig.editLinkText ||
                this.$site.themeConfig.editLinkText ||
                'Edit this page'
              );
            },
          },
          methods: {
            createEditLink: function (t, e, n, a, r) {
              return /bitbucket.org/.test(t)
                ? (i.i.test(e) ? e : t).replace(i.a, '') +
                    '/src' +
                    '/'.concat(a, '/') +
                    (n ? n.replace(i.a, '') + '/' : '') +
                    r +
                    '?mode=edit&spa=0&at='.concat(
                      a,
                      '&fileviewer=file-view-default'
                    )
                : (i.i.test(e) ? e : 'https://github.com/'.concat(e)).replace(
                    i.a,
                    ''
                  ) +
                    '/edit' +
                    '/'.concat(a, '/') +
                    (n ? n.replace(i.a, '') + '/' : '') +
                    r;
            },
          },
        },
        y =
          (n(434),
          Object(r.a)(
            O,
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n('footer', { staticClass: 'page-edit' }, [
                t.editLink
                  ? n(
                      'div',
                      { staticClass: 'edit-link' },
                      [
                        n(
                          'a',
                          {
                            attrs: {
                              href: t.editLink,
                              target: '_blank',
                              rel: 'noopener noreferrer',
                            },
                          },
                          [t._v(t._s(t.editLinkText))]
                        ),
                        t._v(' '),
                        n('OutboundLink'),
                      ],
                      1
                    )
                  : t._e(),
                t._v(' '),
                t.lastUpdated
                  ? n('div', { staticClass: 'last-updated' }, [
                      n('span', { staticClass: 'prefix' }, [
                        t._v(t._s(t.lastUpdatedText) + ':'),
                      ]),
                      t._v(' '),
                      n('span', { staticClass: 'time' }, [
                        t._v(t._s(t.lastUpdated)),
                      ]),
                    ])
                  : t._e(),
              ]);
            },
            [],
            !1,
            null,
            null,
            null
          ).exports),
        S = n(435),
        j = n.n(S),
        T = {
          name: 'PageNav',
          props: ['sidebarItems'],
          computed: {
            prev: function () {
              return N(E.PREV, this);
            },
            next: function () {
              return N(E.NEXT, this);
            },
          },
        };
      var E = {
        NEXT: {
          resolveLink: function (t, e) {
            return P(t, e, 1);
          },
          getThemeLinkConfig: function (t) {
            return t.nextLinks;
          },
          getPageLinkConfig: function (t) {
            return t.frontmatter.next;
          },
        },
        PREV: {
          resolveLink: function (t, e) {
            return P(t, e, -1);
          },
          getThemeLinkConfig: function (t) {
            return t.prevLinks;
          },
          getPageLinkConfig: function (t) {
            return t.frontmatter.prev;
          },
        },
      };
      function N(t, e) {
        var n = e.$themeConfig,
          a = e.$page,
          r = e.$route,
          s = e.$site,
          o = e.sidebarItems,
          l = t.resolveLink,
          c = t.getThemeLinkConfig,
          u = t.getPageLinkConfig,
          h = c(n),
          p = u(a),
          d = w()(p) ? h : p;
        return !1 === d
          ? void 0
          : j()(d)
          ? Object(i.k)(s.pages, d, r.path)
          : l(a, o);
      }
      function P(t, e, n) {
        var i = [];
        !(function t(e, n) {
          for (var i = 0, a = e.length; i < a; i++)
            'group' === e[i].type ? t(e[i].children || [], n) : n.push(e[i]);
        })(e, i);
        for (var a = 0; a < i.length; a++) {
          var r = i[a];
          if ('page' === r.type && r.path === decodeURIComponent(t.path))
            return i[a + n];
        }
      }
      var I = T,
        A =
          (n(436),
          {
            components: {
              PageEdit: y,
              PageNav: Object(r.a)(
                I,
                function () {
                  var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                  return t.prev || t.next
                    ? n('div', { staticClass: 'page-nav' }, [
                        n('p', { staticClass: 'inner' }, [
                          t.prev
                            ? n(
                                'span',
                                { staticClass: 'prev' },
                                [
                                  t._v('\n      ←\n      '),
                                  t.prev
                                    ? n(
                                        'router-link',
                                        {
                                          staticClass: 'prev',
                                          attrs: { to: t.prev.path },
                                        },
                                        [
                                          t._v(
                                            t._s(t.prev.title || t.prev.path)
                                          ),
                                        ]
                                      )
                                    : t._e(),
                                ],
                                1
                              )
                            : t._e(),
                          t._v(' '),
                          t.next
                            ? n(
                                'span',
                                { staticClass: 'next' },
                                [
                                  t.next
                                    ? n(
                                        'router-link',
                                        { attrs: { to: t.next.path } },
                                        [
                                          t._v(
                                            t._s(t.next.title || t.next.path)
                                          ),
                                        ]
                                      )
                                    : t._e(),
                                  t._v('\n      →\n    '),
                                ],
                                1
                              )
                            : t._e(),
                        ]),
                      ])
                    : t._e();
                },
                [],
                !1,
                null,
                null,
                null
              ).exports,
            },
            props: ['sidebarItems'],
          }),
        D =
          (n(437),
          Object(r.a)(
            A,
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                'main',
                { staticClass: 'page' },
                [
                  t._t('top'),
                  t._v(' '),
                  n('Content', { staticClass: 'theme-default-content' }),
                  t._v(' '),
                  n('PageEdit'),
                  t._v(' '),
                  n(
                    'PageNav',
                    t._b({}, 'PageNav', { sidebarItems: t.sidebarItems }, !1)
                  ),
                  t._v(' '),
                  t._t('bottom'),
                ],
                2
              );
            },
            [],
            !1,
            null,
            null,
            null
          ).exports),
        H = {
          name: 'Sidebar',
          components: { SidebarLinks: n(408).default, NavLinks: k },
          props: ['items'],
        },
        U =
          (n(441),
          {
            components: {
              Home: l,
              Page: D,
              Sidebar: Object(r.a)(
                H,
                function () {
                  var t = this.$createElement,
                    e = this._self._c || t;
                  return e(
                    'aside',
                    { staticClass: 'sidebar' },
                    [
                      e('NavLinks'),
                      this._v(' '),
                      this._t('top'),
                      this._v(' '),
                      e('SidebarLinks', {
                        attrs: { depth: 0, items: this.items },
                      }),
                      this._v(' '),
                      this._t('bottom'),
                    ],
                    2
                  );
                },
                [],
                !1,
                null,
                null,
                null
              ).exports,
              Navbar: L,
            },
            data: function () {
              return { isSidebarOpen: !1 };
            },
            computed: {
              shouldShowNavbar: function () {
                var t = this.$site.themeConfig;
                return (
                  !1 !== this.$page.frontmatter.navbar &&
                  !1 !== t.navbar &&
                  (this.$title ||
                    t.logo ||
                    t.repo ||
                    t.nav ||
                    this.$themeLocaleConfig.nav)
                );
              },
              shouldShowSidebar: function () {
                var t = this.$page.frontmatter;
                return !t.home && !1 !== t.sidebar && this.sidebarItems.length;
              },
              sidebarItems: function () {
                return Object(i.l)(
                  this.$page,
                  this.$page.regularPath,
                  this.$site,
                  this.$localePath
                );
              },
              pageClasses: function () {
                var t = this.$page.frontmatter.pageClass;
                return [
                  {
                    'no-navbar': !this.shouldShowNavbar,
                    'sidebar-open': this.isSidebarOpen,
                    'no-sidebar': !this.shouldShowSidebar,
                  },
                  t,
                ];
              },
            },
            mounted: function () {
              var t = this;
              this.$router.afterEach(function () {
                t.isSidebarOpen = !1;
              });
            },
            methods: {
              toggleSidebar: function (t) {
                (this.isSidebarOpen =
                  'boolean' == typeof t ? t : !this.isSidebarOpen),
                  this.$emit('toggle-sidebar', this.isSidebarOpen);
              },
              onTouchStart: function (t) {
                this.touchStart = {
                  x: t.changedTouches[0].clientX,
                  y: t.changedTouches[0].clientY,
                };
              },
              onTouchEnd: function (t) {
                var e = t.changedTouches[0].clientX - this.touchStart.x,
                  n = t.changedTouches[0].clientY - this.touchStart.y;
                Math.abs(e) > Math.abs(n) &&
                  Math.abs(e) > 40 &&
                  (e > 0 && this.touchStart.x <= 80
                    ? this.toggleSidebar(!0)
                    : this.toggleSidebar(!1));
              },
            },
          }),
        W = Object(r.a)(
          U,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              'div',
              {
                staticClass: 'theme-container',
                class: t.pageClasses,
                on: { touchstart: t.onTouchStart, touchend: t.onTouchEnd },
              },
              [
                t.shouldShowNavbar
                  ? n('Navbar', { on: { 'toggle-sidebar': t.toggleSidebar } })
                  : t._e(),
                t._v(' '),
                n('div', {
                  staticClass: 'sidebar-mask',
                  on: {
                    click: function (e) {
                      return t.toggleSidebar(!1);
                    },
                  },
                }),
                t._v(' '),
                n(
                  'Sidebar',
                  {
                    attrs: { items: t.sidebarItems },
                    on: { 'toggle-sidebar': t.toggleSidebar },
                  },
                  [t._t('sidebar-top'), t._v(' '), t._t('sidebar-bottom')],
                  2
                ),
                t._v(' '),
                t.$page.frontmatter.home
                  ? n('Home')
                  : n(
                      'Page',
                      { attrs: { 'sidebar-items': t.sidebarItems } },
                      [t._t('page-top'), t._v(' '), t._t('page-bottom')],
                      2
                    ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = W.exports;
    },
  },
]);
