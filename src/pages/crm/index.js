import {
  r as Re,
  C as M,
  j as e,
  W as Le,
  a as _e,
  A as Ae,
  b as Ee,
  N as Ie,
  c as Pe,
  R as Se,
  d as Oe,
  e as Te,
  P as Be,
  M as I,
  I as A,
  U as $,
  f as P,
  S as Ue,
  L as K,
  O as T,
  B,
  T as D,
  g as qe,
  h as de,
  i as Fe,
  k as J,
  l as ue,
  m as H,
  n as G,
  o as Y,
  p as V,
  K as pe,
  q as ze,
  V as me,
  s as $e,
  t as De,
  u as S,
  v as Q,
  w as He,
  H as Ve,
  x as We,
  y as Ke,
  z as Ze,
  D as Je,
  E as Ge,
  F as ne,
  G as Ye,
  J as Qe,
  Q as L,
  X as Xe,
  Y as X,
  Z as ee,
  _ as es,
  $ as F,
  a0 as ss,
  a1 as se,
  a2 as U,
  a3 as ts,
  a4 as as,
  a5 as ns,
  a6 as rs,
  a7 as os,
  a8 as he,
  a9 as is,
  aa as xe,
  ab as ls,
  ac as fe,
  ad as cs,
  ae as ds,
  af as be,
  ag as us,
  ah as ge,
  ai as ps,
  aj as ms,
  ak as hs,
  al as xs,
  am as z,
  an as fs,
  ao as bs,
  ap as gs,
  aq as js,
  ar as vs,
  as as Cs,
  at as ws,
  au as Ns,
  av as ys,
  aw as ks,
  ax as Ms,
  ay as Rs,
  az as Ls,
  aA as _s,
  aB as Z,
  aC as te,
  aD as As,
  aE as Es,
  aF as Is,
  aG as Ps,
  aH as Ss,
  aI as Os,
  aJ as Ts,
  aK as Bs,
  aL as Us,
  aM as qs,
  aN as Fs,
  aO as zs,
} from "../../../assets/js/perfilContato.cnd0_Ckc.js"
import { r as p, u as ae } from "../../../assets/js/initSystem.jzqRHtp_.js"
;(function () {
  const t = document.createElement("link").relList
  if (t && t.supports && t.supports("modulepreload")) return
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) i(n)
  new MutationObserver((n) => {
    for (const r of n)
      if (r.type === "childList")
        for (const l of r.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && i(l)
  }).observe(document, { childList: !0, subtree: !0 })
  function a(n) {
    const r = {}
    return (
      n.integrity && (r.integrity = n.integrity),
      n.referrerPolicy && (r.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : n.crossOrigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    )
  }
  function i(n) {
    if (n.ep) return
    n.ep = !0
    const r = a(n)
    fetch(n.href, r)
  }
})()
var je,
  re = Re
;(je = re.createRoot), re.hydrateRoot
const ve = p.createContext(void 0)
function E() {
  const s = p.useContext(ve)
  if (!s) throw new Error("Crm Provider Error")
  return s
}
const oe = { crm: !0 }
function $s({ children: s }) {
  const { ativeCRM: t, setAtiveCRM: a, isBusiness: i, language: n } = M(),
    [r, l] = p.useState([])
  p.useEffect(() => {
    const c = async () => {
      await Le("crm", r), _e("update-crm", "", !1)
    }
    oe.crm
      ? chrome.storage.local.get("crm", (h) => {
          l(h.crm), (oe.crm = !1)
        })
      : c()
  }, [r])
  const b = (c) => {
    if (c.altKey)
      switch (c.keyCode) {
        case 49:
          a("Abas")
          break
        case 50:
          i && a("Etiquetas")
          break
        case 51:
          r.length >= 1 && a(r[0].id)
          break
        case 52:
          r.length >= 2 && a(r[1].id)
          break
        case 53:
          r.length >= 3 && a(r[2].id)
          break
        case 54:
          r.length >= 4 && a(r[3].id)
          break
        case 55:
          r.length >= 5 && a(r[4].id)
          break
        case 56:
          r.length >= 6 && a(r[5].id)
          break
        case 57:
          r.length >= 7 && a(r[6].id)
          break
      }
  }
  p.useEffect(
    () => (
      document.addEventListener("keydown", b),
      () => {
        document.removeEventListener("keydown", b)
      }
    ),
    [t, r, i]
  ),
    p.useEffect(
      () => (
        chrome.runtime.onMessage.addListener(u),
        () => {
          chrome.runtime.onMessage.removeListener(u)
        }
      ),
      [r]
    )
  const u = function (c, h, o) {
    switch (c.action) {
      case "post-crm":
        chrome.storage.local.get("crm", (m) => {
          l(m.crm)
        })
        break
    }
  }
  return e.jsx(ve.Provider, { value: { crm: r, setCrm: l }, children: s })
}
function Ds({ children: s }) {
  return e.jsx(Ae, {
    children: e.jsx(Ee, {
      children: e.jsx(Ie, {
        children: e.jsx(Pe, {
          children: e.jsx(Se, {
            children: e.jsx(Oe, {
              children: e.jsx(Te, {
                children: e.jsx(Be, { children: e.jsx($s, { children: s }) }),
              }),
            }),
          }),
        }),
      }),
    }),
  })
}
function Hs() {
  const { idioma: s, setIdioma: t } = M(),
    a = (n) => {
      t(n), chrome.runtime.sendMessage({ action: "languageReload", lang: n })
    }
  return e.jsxs("select", {
    className: "select pt-0 select-bordered select-sm w-fit max-w-xs shadow-sm",
    value: s,
    onChange: (n) => {
      a(n.target.value)
    },
    children: [
      e.jsx("option", { value: "pt", children: "Português" }),
      e.jsx("option", { value: "es", children: "Español" }),
      e.jsx("option", { value: "en", children: "English" }),
    ],
  })
}
function Vs() {
  I(), A(), $()
  const { language: s, theme: t, setTheme: a } = M()
  return (
    P(),
    e.jsxs("div", {
      className: "w-[25rem] p-3 grid gap-2",
      children: [
        e.jsxs("div", {
          className:
            "flex justify-between cursor-pointer items-center hover:bg-[var(--dropdown-background-hover)] h-9 px-1 py-2 rounded pulse",
          children: [e.jsx("span", { children: s.idioma }), e.jsx(Hs, {})],
        }),
        e.jsxs("div", {
          className:
            "flex justify-between cursor-pointer items-center hover:bg-[var(--dropdown-background-hover)] h-9 px-1 py-2 rounded pulse",
          children: [
            e.jsx("span", { children: s.tema }),
            e.jsx(Ue, {
              estado: t,
              switchUpdade: () => a(!t),
              id: "handleTheme",
            }),
          ],
        }),
        e.jsx("div", {
          className: "flex justify-end",
          children: e.jsxs("span", {
            className: "absolute bottom-2",
            children: [s.version, " ", K.version],
          }),
        }),
      ],
    })
  )
}
function Ws() {
  const { modalOptions: s, setModalOptions: t } = P(),
    { setMenu: a, language: i } = M(),
    n = (l) => {
      t({ ...s, isOpen: !1, children: null }), a(l)
    }
  return e.jsx("div", {
    style: { position: "initial" },
    children: e.jsx("ul", {
      className: "_3bcLp overflow-hidden flex",
      children: e.jsx("div", {
        className: "ocd2b0bc aa0kojfi",
        children: e.jsxs("div", {
          className: "bugiwsl0 fooq7fky px-2",
          children: [
            e.jsx(T, {
              content: i.CRM_position_Top,
              icon: e.jsx(B, { className: "h-5 w-5 text-[var(--icon)]" }),
              setFunction: () => n("Top"),
              stroke: "1",
            }),
            e.jsx(T, {
              content: i.CRM_position_Right,
              icon: e.jsx(B, {
                className: "h-5 w-5 text-[var(--icon)] rotate-90",
              }),
              setFunction: () => n("Right"),
              stroke: "1",
            }),
            e.jsx(T, {
              content: i.CRM_position_Bottom,
              icon: e.jsx(B, {
                className: "h-5 w-5 text-[var(--icon)] rotate-180",
              }),
              setFunction: () => n("Bottom"),
              stroke: "1",
            }),
            e.jsx(T, {
              content: i.CRM_position_Left,
              icon: e.jsx(B, {
                className: "h-5 w-5 text-[var(--icon)] -rotate-90",
              }),
              setFunction: () => n("Left"),
              stroke: "1",
            }),
          ],
        }),
      }),
    }),
  })
}
function Ks() {
  const { language: s } = M()
  return e.jsxs("div", {
    className: "p-2",
    children: [
      e.jsx(D, { children: s.CRM_atalhosTeclado }),
      e.jsxs("div", {
        className: "w-[25rem] pt-2",
        children: [
          e.jsxs("div", {
            className:
              "flex justify-between cursor-pointer items-center hover:bg-[var(--dropdown-background-hover)] h-9 px-1 py-2 rounded pulse",
            children: [
              e.jsx("span", { children: s.CRM_openAndCloseMenu }),
              e.jsxs("div", {
                children: [
                  e.jsx("kbd", {
                    className: "kbd kbd-sm border-base-300 border border-solid",
                    children: "Tab",
                  }),
                  e.jsx("span", {
                    className: "px-1",
                    children: s.CRM_alterKey,
                  }),
                  e.jsx("kbd", {
                    className: "kbd kbd-sm border-base-300 border border-solid",
                    children: "alt",
                  }),
                  "+",
                  e.jsx("kbd", {
                    className: "kbd kbd-sm border-base-300 border border-solid",
                    children: "m",
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "flex justify-between cursor-pointer items-center hover:bg-[var(--dropdown-background-hover)] h-9 px-1 py-2 rounded pulse",
            children: [
              e.jsx("span", { children: s.CRM_closeModal }),
              e.jsx("div", {
                children: e.jsx("kbd", {
                  className: "kbd kbd-sm border-base-300 border border-solid",
                  children: "Esc",
                }),
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "flex justify-between cursor-pointer items-center hover:bg-[var(--dropdown-background-hover)] h-9 px-1 py-2 rounded pulse",
            children: [
              e.jsx("span", { children: s.CRM_keyAddAbas }),
              e.jsxs("div", {
                children: [
                  e.jsx("kbd", {
                    className: "kbd kbd-sm border-base-300 border border-solid",
                    children: "alt",
                  }),
                  "+",
                  e.jsx("kbd", {
                    className: "kbd kbd-sm border-base-300 border border-solid",
                    children: "a",
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "flex justify-between cursor-pointer items-center hover:bg-[var(--dropdown-background-hover)] h-9 px-1 py-2 rounded pulse",
            children: [
              e.jsx("span", { children: s.userTabs }),
              e.jsxs("div", {
                children: [
                  e.jsx("kbd", {
                    className: "kbd kbd-sm border-base-300 border border-solid",
                    children: "alt",
                  }),
                  "+",
                  e.jsx("kbd", {
                    className: "kbd kbd-sm border-base-300 border border-solid",
                    children: "1",
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "flex justify-between cursor-pointer items-center hover:bg-[var(--dropdown-background-hover)] h-9 px-1 py-2 rounded pulse",
            children: [
              e.jsx("span", { children: s.CRM_Etiquetas }),
              e.jsxs("div", {
                children: [
                  e.jsx("kbd", {
                    className: "kbd kbd-sm border-base-300 border border-solid",
                    children: "alt",
                  }),
                  "+",
                  e.jsx("kbd", {
                    className: "kbd kbd-sm border-base-300 border border-solid",
                    children: "2",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  })
}
function Ce({ plugin_page: s, colorInicial: t, onChange: a }) {
  const { language: i } = s ? M() : p.useContext(qe),
    [n, r] = p.useState(!1),
    [l, b] = p.useState(() => {
      const o = t || de()
      return a(o), o
    }),
    u = p.useRef(null),
    c = p.useRef(null)
  return (
    p.useEffect(() => {
      const o = (m) => {
        var x
        u.current &&
          !u.current.contains(m.target) &&
          !c.current.contains(m.target) &&
          !(
            (x = document.querySelector("#pane-side ._21S-L span")) != null &&
            x.contains(m.target)
          ) &&
          r(!1)
      }
      return (
        document.addEventListener("click", o),
        () => {
          document.removeEventListener("click", o)
        }
      )
    }, [n]),
    e.jsxs("div", {
      children: [
        e.jsxs("div", {
          className: "flex",
          children: [
            e.jsx("h2", { className: "w-full", children: i.pickColor }),
            e.jsx("div", {
              className: "dropdown dropdown-bottom text-end w-full",
              children: e.jsx("div", {
                tabIndex: 0,
                role: "button",
                className:
                  "btn btn-sm px-4 pulse border border-black border-solid",
                style: { backgroundColor: l },
                ref: c,
                onClick: () => r(!n),
              }),
            }),
          ],
        }),
        n &&
          e.jsx("div", {
            ref: u,
            className: "flex justify-center",
            children: e.jsx(Fe, {
              disableAlpha: !0,
              color: l,
              onChange: (o) => {
                b(o.hex), a(o.hex)
              },
              className: "p-2 rounded",
            }),
          }),
      ],
    })
  )
}
function ie({ editar: s }) {
  const { language: t } = M(),
    { setIzi: a } = A(),
    { crm: i, setCrm: n } = E(),
    { close: r } = I(),
    [l, b] = p.useState(
      s || { id: "", name: "", desc: "", hexColor: "", list: [] }
    ),
    u = (o, m) => {
      b({ ...l, [o]: m })
    },
    c = () => {
      if (l.name.length < 2) {
        a({
          type: "Error",
          title: t.error,
          message: t.CRM_preencherNome,
          position: "topRight",
        })
        return
      }
      s
        ? (n((o) => o.map((m) => (m.id === l.id ? l : m))),
          a({
            type: "Success",
            title: t.success,
            message: t.CRM_editado,
            position: "topRight",
          }),
          r())
        : ((l.id = ue()),
          n((o) => [...o, l]),
          a({
            type: "Success",
            title: t.success,
            message: t.CRM_criado,
            position: "topRight",
          }),
          r())
    }
  return e.jsxs("div", {
    className: "flex flex-col gap-4 w-96",
    children: [
      e.jsxs(D, { children: [s ? t.edit : t.create, " CRM"] }),
      e.jsxs("label", {
        className: "form-control w-full",
        children: [
          e.jsxs("div", {
            children: [
              e.jsx("div", {
                className: "label pb-0",
                children: e.jsx("span", {
                  className: "label-text",
                  children: t.CRM_nome,
                }),
              }),
              e.jsx("input", {
                type: "text",
                placeholder: t.CRM_nome,
                className: "input input-bordered input-sm w-full",
                maxLength: 25,
                value: l.name,
                onChange: (o) => u("name", o.target.value),
              }),
              e.jsx("div", {
                className: "relative",
                children: e.jsxs("div", {
                  className:
                    "absolute right-1 bottom-1 text-[var(--icon)] text-xs",
                  children: [25 - l.name.length, "/25"],
                }),
              }),
            ],
          }),
          e.jsxs("div", {
            children: [
              e.jsx("div", {
                className: "label pb-0",
                children: e.jsx("span", {
                  className: "label-text",
                  children: t.CRM_descricao,
                }),
              }),
              e.jsx("textarea", {
                placeholder: t.CRM_descricao,
                className:
                  "textarea textarea-bordered textarea-sm w-full resize-none",
                maxLength: 60,
                value: l.desc,
                onChange: (o) => u("desc", o.target.value),
              }),
              e.jsx("div", {
                className: "relative",
                children: e.jsxs("div", {
                  className:
                    "absolute right-1 bottom-1 text-[var(--icon)] text-xs",
                  children: [60 - l.desc.length, "/60"],
                }),
              }),
            ],
          }),
        ],
      }),
      e.jsx(Ce, {
        plugin_page: !0,
        colorInicial: s && s.hexColor,
        onChange: (o) => u("hexColor", o),
      }),
      e.jsx(J, { name: s ? t.edit : t.create, funcao: c }),
    ],
  })
}
function Zs() {
  const { language: s } = M(),
    { setIzi: t } = A(),
    { crm: a, setCrm: i } = E()
  return (r, l) => {
    r.stopPropagation()
    const b = a.find((u) => u.id === l)
    H.question({
      timeout: 2e4,
      close: !1,
      overlay: !0,
      zindex: 9999,
      message: `${s.CRM_rm_CRM} <strong style="color:${b.hexColor}">${b.name}</strong>?`,
      position: "topRight",
      buttons: [
        [
          `<span style="margin-right: 1rem !important" class="btn btn-outline btn-error btn-xs hover:!text-[var(--letra)]">${s.cancel}</span>`,
          function (u, c) {
            u.hide({ transitionOut: "fadeOut" }, c, "button")
          },
          !0,
        ],
        [
          `<span class="btn btn-accent btn-xs text-[var(--letra)]">${s.confirm}</span>`,
          function (u, c) {
            u.hide({ transitionOut: "fadeOut" }, c, "button"),
              i((h) => h.filter((o) => o.id !== l)),
              t({
                type: "Success",
                title: s.success,
                message: s.CRM_removido,
                position: "topRight",
              })
          },
          !0,
        ],
      ],
    })
  }
}
function we() {
  return (t, a = []) => {
    p.useEffect(
      () => (
        document.addEventListener("keydown", t),
        () => {
          document.removeEventListener("keydown", t)
        }
      ),
      [...a]
    )
  }
}
const le = ({ index: s, item: t, submit: a, editar: i }) => {
  const { isBusiness: n } = M(),
    [r, l] = p.useState(!1),
    b = () => {
      l(!0)
    },
    u = () => {
      l(!1)
    },
    c = Zs()
  return (
    t.hexColor && t.hexColor,
    e.jsxs(
      "div",
      {
        onClick: a,
        className:
          "card w-40 bg-base-100 shadow-lg py-2 pulse hover:border hover:border-[var(--primaria)] hover:border-solid cursor-pointer border-base-300 border border-solid max-h-[240px]",
        style: r && t.hexColor ? { borderColor: t.hexColor } : {},
        onMouseEnter: b,
        onMouseLeave: u,
        children: [
          t.id !== "Abas" &&
            t.id !== "Etiquetas" &&
            e.jsx("div", {
              className: "relative",
              children: e.jsxs("div", {
                className: "absolute grid gap-1 right-[2px] top-0",
                children: [
                  e.jsx("span", {
                    className: "pulse",
                    onClick: (o) => c(o, t.id),
                    children: e.jsx(me, {
                      className: "h-5 w-5 text-[var(--icon)]",
                    }),
                  }),
                  e.jsx("span", {
                    className: "pulse",
                    onClick: i,
                    children: e.jsx($e, {
                      className: "h-5 w-5 text-[var(--icon)]",
                    }),
                  }),
                ],
              }),
            }),
          e.jsx("figure", { children: t.ico }),
          !n &&
            t.id === "Etiquetas" &&
            e.jsx("div", {
              className: "relative",
              children: e.jsx("div", {
                className: "absolute right-3",
                children: e.jsx("span", {
                  children: e.jsx(De, { className: "h-6 w-6 text-red-500" }),
                }),
              }),
            }),
          e.jsxs("div", {
            className: "card-body p-2 min-h-[122px]",
            children: [
              e.jsx("h2", {
                className: "card-title block",
                style: { overflowWrap: "break-word" },
                children: t.title,
              }),
              e.jsx("p", {
                style: { overflowWrap: "break-word" },
                className: "block",
                children: t.descricao,
              }),
              s <= 8 &&
                e.jsx("div", {
                  className: "card-actions justify-end",
                  children: e.jsxs("div", {
                    className: "badge badge-outline",
                    children: [
                      e.jsx("kbd", {
                        className: "kbd border-base-300 border border-solid",
                        children: "alt",
                      }),
                      e.jsx("span", { className: "px-1", children: "+" }),
                      e.jsx("kbd", {
                        className: "kbd border-base-300 border border-solid",
                        children: s + 1,
                      }),
                    ],
                  }),
                }),
            ],
          }),
        ],
      },
      s
    )
  )
}
function ce() {
  const { setIzi: s } = A(),
    { isBusiness: t, language: a, setAtiveCRM: i } = M(),
    { close: n } = G(),
    { open: r } = I(),
    { crm: l } = E()
  we()((x) => {
    x.stopPropagation(),
      (x.keyCode === 27 || x.keyCode === 9 || (x.altKey && x.keyCode === 77)) &&
        n()
  })
  const u = (x) => {
      if (!t && x === "Etiquetas") {
        s({
          type: "Error",
          title: a.error,
          message: a.CRM_notBusiness,
          position: "topRight",
        }),
          n()
        return
      }
      i(x), n()
    },
    c = (x, f) => {
      x.stopPropagation()
      const j = l.find((C) => C.id === f)
      r(e.jsx(ie, { editar: j }))
    },
    o = [
      {
        id: "Abas",
        ico: e.jsx(Y, { className: "h-10 w-10 text-[var(--primaria)]" }),
        title: a.userTabs,
        descricao: a.CRM_abasCreate,
      },
      {
        id: "Etiquetas",
        ico: e.jsx(V, { className: "h-10 w-10 text-[var(--primaria)]" }),
        title: a.CRM_Etiquetas,
        descricao: a.CRM_etiquetasBusiness,
      },
    ].map((x, f) => e.jsx(le, { index: f, item: x, submit: () => u(x.id) })),
    m = l.map((x, f) => {
      const j = {
        id: l[f].id,
        ico: e.jsx(pe, {
          className: "h-10 w-10",
          style: { color: x.hexColor },
        }),
        title: x.name,
        descricao: x.desc,
        hexColor: x.hexColor,
      }
      return e.jsx(le, {
        index: f + 2,
        item: j,
        submit: () => u(j.id),
        editar: (C) => c(C, j.id),
      })
    })
  return e.jsxs("div", {
    className:
      "flex gap-4 flex-wrap justify-center p-4 overflow-x-auto overflow-y-hidden max-h-[100vh]",
    children: [
      o,
      m,
      e.jsx("div", {
        className: "my-auto",
        children: e.jsx("span", {
          className: "pulse cursor-pointer lg:tooltip lg:tooltip-left",
          "data-tip": a.CRM_modelAdd,
          onClick: () => {
            r(e.jsx(ie, {}))
          },
          children: e.jsx(ze, {
            className: "text-[var(--primaria)] w-10 h-10",
          }),
        }),
      }),
    ],
  })
}
function Ne() {
  const { language: s, ativeCRM: t } = M(),
    { setCrm: a } = E(),
    { setIzi: i } = A()
  return () => {
    H.question({
      timeout: 2e4,
      overlay: !0,
      zindex: 9999,
      title: s.menuTab_CreateNameTab,
      message: `<div class="bottom-1 relative">
          <input type="text" id="iziInput" placeholder="${s.menuTab_EditAba_Place}" class="!input !input-bordered !input-sm !w-full !max-w-xs !bg-transparent" />
        </div>`,
      position: "topRight",
      drag: !1,
      buttons: [
        [
          `<span class="btn btn-accent btn-sm text-[var(--letra)]">${s.confirm}</span>`,
          function (r, l) {
            r.hide({ transitionOut: "fadeOut" }, l, "button")
            const b = document.querySelector("#iziInput"),
              u = { id: ue(), name: b.value, chats: [], hexColor: de() }
            a(
              (c) => (
                c.forEach((h, o) => {
                  h.id === t && (c[o] = { ...h, list: [...h.list, u] })
                }),
                [...c]
              )
            ),
              i({
                type: "Success",
                title: s.success,
                message: s.newTab_success,
                position: "topRight",
              })
          },
          !0,
        ],
      ],
    })
  }
}
function Js() {
  var _
  const { language: s, menu: t, zoom: a, setZoom: i, ativeCRM: n } = M(),
    { crm: r } = E(),
    { setIzi: l } = A(),
    { userTabs: b } = S(),
    { setModalOptions: u, modalOptions: c } = P(),
    { open: h } = G(),
    o = Q({ plugin_page: !0 }),
    m = Ne()
  we()(
    (R) => {
      ;((R.altKey && R.keyCode === 77) || R.keyCode === 9) && h(e.jsx(ce, {})),
        R.altKey && R.keyCode === 65 && k()
    },
    [n, b]
  )
  const f = p.useRef(null),
    j = p.useRef(null),
    C = p.useRef(null),
    d = (R, O) => {
      u({
        isOpen: !c.isOpen,
        placement: t === "Top" || t === "Bottom" ? "bottom" : "left",
        offset: [10, 15],
        children: R,
        fatherElement: O,
        icoElement: null,
      })
    },
    g = () => {
      let R = " "
      switch (t) {
        case "Right":
          R = "rotate-90"
          break
        case "Left":
          R = "-rotate-90"
          break
        case "Bottom":
          R = "rotate-180"
          break
      }
      return R
    },
    v = (R) => {
      const O = a + R
      if (O >= 170 || O <= 30) {
        l({
          type: "Info",
          title: s.Atencao,
          message: O >= 170 ? s.CRM_zoomMax : s.CRM_zoomMin,
          position: "topRight",
        })
        return
      }
      i(O),
        l({
          type: "Success",
          title: s.success,
          message: `${s.CRM_zoomUp} ${O}%`,
          position: "topRight",
        })
    },
    y = () => {
      let R = ""
      switch (t) {
        case "Right":
          R = "left"
          break
        case "Left":
          R = "right"
          break
        case "Bottom":
          R = "top"
          break
        case "Top":
          R = "bottom"
          break
      }
      return R
    },
    k = () => {
      switch (n) {
        case "Abas":
          o()
          break
        case "Etiquetas":
          l({
            type: "Info",
            title: s.Atencao,
            message:
              "A função adicionar etiqueta só está disponivel pelo seu app do whatsapp. Pegue o seu celular e crie a etiqueta desejada para ser exibida no whatsapp web",
            position: "topRight",
          })
          break
        default:
          m()
          break
      }
    },
    N = [
      {
        id: 1,
        name: "Config",
        ref: f,
        ico: e.jsx(He, {
          className: "h-5 w-5 text-[var(--icon)]",
          strokeWidth: 0.4,
        }),
        tooltip: s.CRM_config,
        funcao: () => d(e.jsx(Vs, {}), f),
      },
      {
        id: 2,
        name: "Menu",
        ico: e.jsx(Ve, { className: "h-6 w-6 text-[var(--icon)]" }),
        tooltip: "Menu",
        funcao: () => h(e.jsx(ce, {})),
      },
      {
        id: 3,
        name: "Add_aba",
        ico: e.jsx(We, {
          className: "h-5 w-5 text-[var(--icon)]",
          strokeWidth: 0.4,
        }),
        tooltip: s.CRM_addAba,
        funcao: () => k(),
      },
      {
        id: 4,
        name: "Menu Position",
        ref: j,
        ico: e.jsx(B, { className: "h-5 w-5 text-[var(--icon)] " + g() }),
        tooltip: s.CRM_positionMenu,
        funcao: () => d(e.jsx(Ws, {}), j),
      },
      {
        id: 5,
        name: "Zoom_in",
        ico: e.jsx(Ke, { className: "h-6 w-6 text-[var(--icon)]" }),
        tooltip: s.CRM_zoomUP,
        funcao: () => v(5),
      },
      {
        id: 6,
        name: "Zoom_out",
        ico: e.jsx(Ze, { className: "h-6 w-6 text-[var(--icon)]" }),
        tooltip: s.CRM_zoomDown,
        funcao: () => v(-5),
      },
      {
        id: 7,
        name: "Atalho_key",
        ref: C,
        ico: e.jsx("svg", {
          viewBox: "0 0 24 24",
          height: "24",
          width: "24",
          className: "text-[var(--icon)]",
          preserveAspectRatio: "xMidYMid meet",
          version: "1.1",
          children: e.jsx("path", {
            fill: "currentColor",
            d: "M 10.851562 12.648438 L 13.148438 12.648438 L 12 9 Z M 20 8.691406 L 20 6 C 20 4.898438 19.101562 4 18 4 L 15.308594 4 L 13.410156 2.101562 C 12.628906 1.320312 11.359375 1.320312 10.582031 2.101562 L 8.691406 4 L 6 4 C 4.898438 4 4 4.898438 4 6 L 4 8.691406 L 2.101562 10.589844 C 1.320312 11.371094 1.320312 12.640625 2.101562 13.421875 L 4 15.320312 L 4 18 C 4 19.101562 4.898438 20 6 20 L 8.691406 20 L 10.589844 21.898438 C 11.371094 22.679688 12.640625 22.679688 13.421875 21.898438 L 15.320312 20 L 18 20 C 19.101562 20 20 19.101562 20 18 L 20 15.308594 L 21.898438 13.410156 C 22.679688 12.628906 22.679688 11.359375 21.898438 10.578125 Z M 14.089844 15.398438 L 13.601562 14 L 10.398438 14 L 9.910156 15.398438 C 9.78125 15.761719 9.449219 16 9.070312 16 C 8.449219 16 8.019531 15.390625 8.230469 14.808594 L 10.671875 7.949219 C 10.871094 7.378906 11.398438 7 12 7 C 12.601562 7 13.128906 7.378906 13.339844 7.941406 L 15.78125 14.800781 C 15.988281 15.378906 15.558594 15.988281 14.941406 15.988281 C 14.550781 16 14.21875 15.761719 14.089844 15.398438 Z M 14.089844 15.398438 ",
          }),
        }),
        tooltip: s.CRM_keyAtalho,
        funcao: () => d(e.jsx(Ks, {}), C),
      },
    ]
  return e.jsxs("div", {
    "data-id": "Menu",
    className:
      "flex  items-center bg-[var(--panel-header-background)] shadow-sm gap-2 " +
      (t === "Top" || t === "Bottom"
        ? "h-12 w-full px-1"
        : "flex-col h-[100vh] w-12 py-1"),
    style:
      t === "Left"
        ? { borderRight: "1px solid var(--conversation-header-border)" }
        : t === "Right"
        ? { borderLeft: "1px solid var(--conversation-header-border)" }
        : t === "Top"
        ? { borderBottom: "1px solid var(--conversation-header-border)" }
        : t === "Bottom"
        ? { borderTop: "1px solid var(--conversation-header-border)" }
        : null,
    children: [
      e.jsx("div", {
        className:
          "pulse cursor-pointer bg-[var(--dropdown-background)] rounded-full w-10 h-10 shadow-lg flex items-center justify-center",
        children: e.jsx("span", {
          children: e.jsx("img", {
            src: chrome.runtime.getURL("label/icons/icon.png"),
            className: "w-10 rounded-full",
          }),
        }),
      }),
      e.jsx("div", {
        className:
          "flex gap-2 items-center " +
          (t === "Top" || t === "Bottom" ? "" : "flex-col"),
        children: N.map((R) =>
          e.jsx("div", {
            ref: R.ref,
            onClick: R.funcao,
            className: `pulse cursor-pointer lg:tooltip lg:tooltip-${y()}`,
            "data-tip": R.tooltip,
            children: e.jsx("span", { children: R.ico }),
          })
        ),
      }),
      e.jsx("div", {
        className:
          "w-full h-full flex " +
          (t === "Top" || t === "Bottom"
            ? "justify-end items-center"
            : "justify-center items-end"),
        children: e.jsxs("span", {
          className: "px-1",
          children: [
            n === "Abas" &&
              e.jsx(Y, { className: "h-5 w-5 text-[var(--primaria)]" }),
            n === "Etiquetas" &&
              e.jsx(V, { className: "h-5 w-5 text-[var(--primaria)]" }),
            r.length !== 0 &&
              n !== "Abas" &&
              n !== "Etiquetas" &&
              e.jsx(pe, {
                className: "h-5 w-5",
                style: {
                  color:
                    (_ = r.find((R) => R.id === n)) == null
                      ? void 0
                      : _.hexColor,
                },
              }),
          ],
        }),
      }),
    ],
  })
}
function Gs({ id: s, color: t }) {
  const { ativeCRM: a, language: i } = M(),
    { close: n } = I(),
    { setCrm: r } = E(),
    { setIzi: l } = A(),
    [b, u] = p.useState(t),
    c = () => {
      r(
        (o) => (
          o.forEach((m, x) => {
            m.id === a &&
              (o[x] = {
                ...m,
                list: o[x].list.map((f) => (f.id === s && (f.hexColor = b), f)),
              })
          }),
          [...o]
        )
      ),
        l({
          type: "Success",
          title: i.success,
          message: i.CRM_corAlterada,
          position: "topRight",
        }),
        n()
    }
  return e.jsxs("div", {
    className: "w-80 grid gap-4",
    children: [
      e.jsx(D, { children: i.CRM_corEdit }),
      e.jsx(Ce, { plugin_page: !0, colorInicial: t, onChange: (o) => u(o) }),
      e.jsx(J, { name: i.save, funcao: c }),
    ],
  })
}
function Ys() {
  const { language: s, ativeCRM: t } = M(),
    { crm: a, setCrm: i } = E(),
    { setIzi: n } = A()
  return (l) => {
    const b = a.find((u) => u.id === t).list.find((u) => u.id === l)
    H.question({
      timeout: 2e4,
      close: !1,
      overlay: !0,
      zindex: 9999,
      message: `${s.menuTab_RemoveAlert} <strong>${b.name}</strong>?`,
      position: "topRight",
      buttons: [
        [
          `<span style="margin-right: 1rem !important" class="btn btn-outline btn-error btn-xs hover:!text-[var(--letra)]">${s.cancel}</span>`,
          function (u, c) {
            u.hide({ transitionOut: "fadeOut" }, c, "button")
          },
          !0,
        ],
        [
          `<span class="btn btn-accent btn-xs text-[var(--letra)]">${s.confirm}</span>`,
          function (u, c) {
            u.hide({ transitionOut: "fadeOut" }, c, "button")
            const h = a.find((o) => o.id === t).list.filter((o) => o.id !== l)
            i(
              (o) => (
                o.forEach((m, x) => {
                  m.id === t && (o[x] = { ...m, list: h })
                }),
                [...o]
              )
            ),
              n({
                type: "Success",
                title: s.success,
                message: s.menuTab_RemoveTab,
                position: "topRight",
              })
          },
          !0,
        ],
      ],
    })
  }
}
function Qs() {
  const { language: s, ativeCRM: t } = M(),
    { crm: a, setCrm: i } = E(),
    { setIzi: n } = A()
  return (l) => {
    const b = a.find((u) => u.id === t).list.find((u) => u.id === l)
    H.question({
      timeout: 2e4,
      overlay: !0,
      class: "edit-aba",
      zindex: 9999,
      title: `${s.renomeie} <strong>${b.name}</strong>`,
      message: `<div class="bottom-1 relative">   <input type="text" id="iziInput" placeholder="${s.menuTab_EditAba_Place}" class="input input-bordered input-sm w-full max-w-xs !bg-transparent" value="${b.name}"/></div>`,
      position: "topRight",
      drag: !1,
      buttons: [
        [
          `<span class="btn btn-accent btn-xs text-[var(--letra)]">${s.confirm}</span>`,
          function (u, c) {
            u.hide({ transitionOut: "fadeOut" }, c, "button")
            const o = document.querySelector("#iziInput").value
            if (o.length <= 2) {
              n({
                type: "Error",
                title: s.error,
                message: s.newTab_error,
                position: "topRight",
              })
              return
            }
            i(
              (m) => (
                m.forEach((x, f) => {
                  x.id === t &&
                    (m[f] = {
                      ...x,
                      list: m[f].list.map(
                        (j) => (j.id === l && (j.name = o), j)
                      ),
                    })
                }),
                [...m]
              )
            ),
              n({
                type: "Success",
                title: s.success,
                message: s.menuTab_EditAba_success,
                position: "topRight",
              })
          },
          !0,
        ],
      ],
    })
  }
}
function Xs({ id: s, color: t }) {
  const { ativeCRM: a, language: i } = M(),
    { close: n } = P(),
    { open: r } = I(),
    l = Je({ plugin_page: !0 }),
    b = Ge({ plugin_page: !0 }),
    u = Ys(),
    c = Qs(),
    h = () => {
      n(), a === "Abas" ? l(s) : u(s)
    },
    o = () => {
      n(), a === "Abas" ? b(s) : c(s)
    }
  return e.jsxs("div", {
    className: "px-2 min-w-[255px]",
    children: [
      e.jsx("li", {
        className: "hoverShadown pulse cursor-pointer px-1 py-2",
        onClick: o,
        children: i.CRM_renomearAba,
      }),
      e.jsx("li", {
        className: "hoverShadown pulse cursor-pointer px-1 py-2",
        onClick: h,
        children: i.CRM_deletarAba,
      }),
      a !== "Abas" &&
        e.jsx("li", {
          className: "hoverShadown pulse cursor-pointer px-1 py-2",
          onClick: () => r(e.jsx(Gs, { id: s, color: t })),
          children: i.CRM_alterCorAba,
        }),
    ],
  })
}
function et({
  id: s,
  is_inbox: t,
  name: a,
  cards: i,
  cardsOriginal: n,
  setCardsList: r,
  color: l,
}) {
  const { ativeCRM: b } = M(),
    { open: u } = P(),
    [c, h] = p.useState(!1),
    [o, m] = p.useState(""),
    x = p.useRef(null)
  p.useEffect(() => {
    if (o.length === 0) r(n)
    else {
      let d = []
      i.forEach((g) => {
        var v
        ;(g.id.includes(o) ||
          ((v = g.name) != null &&
            v.toUpperCase().includes(o.toUpperCase()))) &&
          d.push(g)
      }),
        r(d)
    }
  }, [o])
  const f = () => {
      r(n), h(!1), m("")
    },
    j = e.jsxs(e.Fragment, {
      children: [
        e.jsxs("div", {
          className: "flex items-center gap-1",
          children: [
            e.jsx("h2", {
              className:
                "font-bold text-lg text-[var(--letra)] overflow-hidden text-ellipsis whitespace-nowrap max-w-[135px]",
              children: a,
            }),
            e.jsx("div", {
              className:
                "badge font-bold text-[var(--letra)] border-[var(--letra)] border border-solid pulse cursor-pointer",
              style: { backgroundColor: l },
              children: i.length,
            }),
          ],
        }),
        e.jsxs("span", {
          className: "flex gap-2 pr-1",
          children: [
            e.jsx("span", {
              className: "cursor-pointer pulse pt-[1px]",
              onClick: () => h(!0),
              children: e.jsx(ne, {
                className: "h-[18px] w-[18px] text-[var(--letra)]",
                strokeWidth: 0.4,
              }),
            }),
            !t &&
              b !== "Etiquetas" &&
              e.jsx("span", {
                ref: x,
                className: "cursor-pointer pulse",
                onClick: () => u(e.jsx(Xs, { id: s, color: l }), x),
                children: e.jsx(Ye, {
                  className: "h-5 w-5 text-[var(--letra)]",
                }),
              }),
          ],
        }),
      ],
    }),
    C = e.jsxs("div", {
      className: "w-full flex items-center bg-[#ffffff2e] gap-1 rounded-lg p-1",
      children: [
        e.jsx("span", {
          className: "cursor-pointer pulse",
          children: e.jsx(ne, {
            className: "h-[18px] w-[18px] text-[var(--letra)]",
            strokeWidth: 0.4,
          }),
        }),
        e.jsx("input", {
          type: "text",
          value: o,
          onChange: (d) => m(d.target.value),
          placeholder: "Pesquisar...",
          className:
            "w-full !bg-transparent h-5 text-[var(--letra)] placeholder:text-[var(--letra)] pb-1",
          autoFocus: !0,
        }),
        e.jsx("span", {
          className: "cursor-pointer pulse",
          onClick: f,
          children: e.jsx(Qe, {
            className: "h-[18px] w-[18px] text-[var(--letra)]",
          }),
        }),
      ],
    })
  return e.jsx("div", {
    "data-id": "Header-CardList",
    className: "w-64 rounded-t-lg p-1 pl-2 justify-between flex items-center",
    style: { backgroundColor: l },
    children: c ? C : j,
  })
}
function st() {
  const { language: s, ativeCRM: t } = M(),
    { setIzi: a } = A(),
    { userTabs: i, setUserTabs: n } = S(),
    { setCrm: r } = E(),
    l = (h, o, m) => {
      switch ((h.preventDefault(), h.stopPropagation(), t)) {
        case "Abas":
          b(o, m)
          break
        case "Etiquetas":
          u(o, m)
          break
        default:
          c(t, o, m)
          break
      }
    },
    b = (h, o) => {
      const m = [...i]
      for (let x = 0; x < i.length; x++)
        if (m[x].tag === h) {
          m[x].chats = m[x].chats.filter((f) => f.id !== o)
          break
        }
      n(m),
        a({
          type: "Success",
          title: s.success,
          message: s.CRM_removeCard,
          position: "topRight",
        })
    },
    u = (h, o) => {
      ;(o = o.length > 15 ? o + "@g.us" : o + "@c.us"),
        L("Labels", "addOrRemoveLabels", {
          id: o,
          label: { labelId: h, type: "remove" },
        }),
        a({
          type: "Success",
          title: s.success,
          message: s.CRM_removeCard,
          position: "topRight",
        })
    },
    c = (h, o, m) => {
      r((x) =>
        x.map((f) => {
          if (f.id === h) {
            const j = f.list.map((C) => {
              if (C.id === o) {
                const d = C.chats.filter((g) => g.id !== m)
                return { ...C, chats: d }
              }
              return C
            })
            return { ...f, list: j }
          }
          return f
        })
      )
    }
  return l
}
function tt({ cardListID: s, card: t }) {
  const a = st(),
    i = (r) => {
      let l = 0
      return (
        r.forEach((b) => {
          l += parseFloat(b.valor)
        }),
        l
      )
    }
  return e.jsxs("div", {
    className: "flex flex-col items-end justify-between",
    children: [
      e.jsx("div", {
        onClick: (r) => a(r, s, t.id),
        children: e.jsx("span", {
          className: "pulse !cursor-pointer",
          children: e.jsx(me, { className: "h-5 w-5 text-[var(--icon)]" }),
        }),
      }),
      e.jsx("div", {
        children: e.jsx("div", {
          className:
            "stat-value text-[12px] text-[var(--icon)] font-bold !leading-none",
          children: t.entrada && Xe.converterData(t.entrada),
        }),
      }),
      e.jsx("div", {
        children: e.jsx("div", {
          className:
            "stat-value text-[12px] text-[var(--icon)] font-bold !leading-none",
          children:
            t.valNegocio &&
            t.valNegocio.length !== 0 &&
            i(t.valNegocio).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            }),
        }),
      }),
    ],
  })
}
const at = ({ card: s }) => {
  const [t, a] = p.useState(!1),
    [i, n] = p.useState(!1),
    r = e.jsx("span", {
      children:
        s.id.length > 17
          ? e.jsx(X, { style: "w-10 h-10" })
          : e.jsx(ee, { style: "w-10 h-10" }),
    }),
    [l, b] = p.useState(r),
    u = e.jsx("div", {
      className: "w-10 rounded-full",
      children: e.jsx("img", { src: s.picture }),
    }),
    c = async () => {
      try {
        ;(await fetch(s.picture, { method: "HEAD" })).ok ? b(u) : b(r)
      } catch {
        b(r)
      }
    }
  p.useEffect(() => {
    s.picture && s.picture !== "undefined" ? c() : b(r)
  }, [s]),
    p.useEffect(
      () => (
        chrome.runtime.onMessage.addListener(h),
        () => {
          chrome.runtime.onMessage.removeListener(h)
        }
      ),
      [t, i]
    )
  const h = function (o, m, x) {
    switch (o.action) {
      case "chat.presence_change":
        const f = JSON.parse(o.model)
        f.id.split("@")[0] === s.id && (a(f.isOnline), n(f.state === "typing"))
        break
    }
  }
  return e.jsx("div", {
    className: "avatar indicator " + (t ? "online" : ""),
    children: l,
  })
}
function nt({ card: s }) {
  return e.jsxs("div", {
    className: "flex items-center gap-2",
    children: [
      e.jsx(at, { card: s }),
      e.jsx("div", {
        children: e.jsx("div", {
          className: "h-[21px] relative",
          children: e.jsx("span", {
            className:
              "block flex-auto overflow-hidden text-ellipsis whitespace-nowrap max-w-[170px] absolute",
            children: s.name,
          }),
        }),
      }),
    ],
  })
}
function rt({ userId: s }) {
  const { userTabs: t, setUserTabs: a } = S(),
    { modalOptions: i, setModalOptions: n } = P(),
    { setModal: r } = I(),
    { userLogado: l } = $(),
    b = async (u, c, h) => {
      const o = await L("Utils", "getContato", s)
      let m = { id: s, name: o.name, etiqueta: o.labels }
      const x = t.map((f) => ({ ...f, chats: [...f.chats] }))
      for (let f = 0; f < x.length; f++) {
        const j = x[f]
        if (j.tag === c) {
          const C = j.chats.find((d) => d.id === s)
          !C && u
            ? x[f].chats.unshift(m)
            : C && !u && (x[f].chats = j.chats.filter((d) => d.id !== s))
          break
        }
      }
      a(x)
    }
  return e.jsx(es, { userTabs: t, userId: s, submit: b })
}
function ot({ labels: s, submit: t }) {
  const { variaveisWA: a } = ae(),
    i = e.jsx("div", {
      className: "p-4",
      children: e.jsx("span", {
        children:
          "Crie Pelo menos uma etiqueta para poder inserir contatos nelas",
      }),
    }),
    n = e.jsx("div", {
      className: a.modalOptions.content3 + "overflow-auto",
      style: { maxHeight: "calc(100vh - 200px)" },
      children: s
        .slice()
        .sort((r, l) => r.name.localeCompare(l.name))
        .map((r, l) =>
          e.jsx(
            "div",
            {
              className: a.listagem.content1 + "hoverShadown",
              children: e.jsx("li", {
                tabIndex: 1,
                className: a.listagem.content2,
                "data-animate-dropdown-item": "true",
                style: { opacity: 1 },
                children: e.jsx("label", {
                  htmlFor: "user_labels&" + l,
                  children: e.jsxs("div", {
                    className: a.listagem.content3,
                    children: [
                      e.jsx("div", {
                        className: a.listagem.content4,
                        children: e.jsx(ss, {
                          id: "user_labels&" + l,
                          estado: r.active,
                          checkedUpdade: () => {
                            t(!r.active, r.id, l)
                          },
                        }),
                      }),
                      e.jsx("span", {
                        className: a.listagem.content5,
                        children: e.jsxs("div", {
                          className: "flex gap-4",
                          children: [
                            e.jsxs("div", {
                              className: "pr-1",
                              children: [
                                e.jsx("span", { children: r.name }),
                                e.jsx("span", {
                                  className: a.aba + "tam-aba ml-1",
                                  style: { backgroundColor: "var(--primaria)" },
                                  children: r.count,
                                }),
                              ],
                            }),
                            e.jsx("span", {
                              children: e.jsx(se, {
                                className: "w-6 h-6",
                                style: { color: r.hexColor },
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            },
            l
          )
        ),
    })
  return s.length > 0 ? n : i
}
function ye({ userId: s, setUserLabels: t, userLabels: a }) {
  const [i, n] = p.useState([]),
    { isBusiness: r } = M(),
    [l, b] = p.useState(a)
  p.useEffect(() => {
    r &&
      (async () => {
        try {
          const h = await L("Labels", "getAllLabels"),
            o = await L("Utils", "getContato", s),
            m = o.labels
              .map((f) => h.find((j) => j.hexColor && j.id === f))
              .filter(Boolean)
              .map(({ id: f, name: j, hexColor: C }) => ({
                id: f,
                name: j,
                color: C,
              }))
          let x = []
          h.forEach((f) => {
            const j = o.labels.find((C) => C === f.id)
            x.push({ ...f, active: !!j })
          }),
            t && t(m),
            n(x)
        } catch (h) {
          console.error("Erro ao buscar labels:", h)
        }
      })()
  }, [s])
  const u = (c, h, o) => {
    n((j) => {
      const C = [...j],
        d = C.findIndex((g) => g.id === h)
      return d !== -1 && (C[d] = { ...C[d], active: c }), C
    })
    const m = l.map((j) => ({ ...j }))
    if (c) {
      const j = i.find((C) => C.id === h)
      m.unshift({ id: j.id, name: j.name, color: j.hexColor }), b(m), t && t(m)
    } else {
      const j = m.filter((C) => C.id !== h)
      b(j), t && t(j)
    }
    chrome.runtime.sendMessage({ action: "update-card", userId: s }),
      window.postMessage({ action: "update-card", userId: s })
    const x = { labelId: h, type: c ? "add" : "remove" },
      f = s.length > 15 ? `${s}@g.us` : `${s}@c.us`
    L("Labels", "addOrRemoveLabels", { id: f, label: x })
  }
  return e.jsx(ot, { labels: i, submit: u })
}
function it({ card: s, CloseModal: t }) {
  const { variaveisWA: a } = ae(),
    { menuLateral: i } = U(),
    { userTabs: n, setUserTabs: r } = S(),
    { isBusiness: l } = M(),
    { modalOptions: b, setModalOptions: u } = P(),
    c = p.useRef(null),
    h = p.useRef(null),
    o = p.useRef(null),
    [m, x] = p.useState(0),
    [f, j] = p.useState(null)
  p.useEffect(() => {
    l &&
      (async () => {
        try {
          const y = await L("Labels", "getAllLabels"),
            N = (await L("Utils", "getContato", s.id)).labels
              .map((w) => y.find((_) => _.hexColor && _.id === w))
              .filter(Boolean)
              .map(({ id: w, name: _, hexColor: R }) => ({
                id: w,
                name: _,
                color: R,
              }))
          j(N)
        } catch (y) {
          console.error("Erro ao buscar labels:", y)
        }
      })()
  }, [s.id]),
    p.useEffect(() => {
      ;(() => {
        const y = n.reduce((k, N) => {
          const w = N.chats.some((_) => _.id === s.id)
          return k + (w ? 1 : 0)
        }, 0)
        x(y)
      })()
    }, [s, n])
  const C = (v, y) => {
      u({
        isOpen: !0,
        placement: "bottom",
        offset: [5, 15],
        children: v,
        fatherElement: y,
        icoElement: null,
      })
    },
    d = e.jsx("div", {
      className: "avatar",
      children:
        s.picture && s.picture !== "undefined"
          ? e.jsx("div", {
              className: "w-10 rounded-full",
              children: e.jsx("img", { src: s.picture }),
            })
          : e.jsx("span", {
              children:
                s.id.length > 17
                  ? e.jsx(X, { style: "w-10 h-10" })
                  : e.jsx(ee, { style: "w-10 h-10" }),
            }),
    })
  return e.jsxs("div", {
    className:
      "h-[60px] bg-[var(--panel-header-background)] px-4 py-[10px] flex justify-between shadow-lg " +
      (i.children.length !== 0 ? "rounded-ss-lg" : "rounded-t-lg"),
    children: [
      e.jsxs("div", {
        className: "flex items-center justify-center gap-4",
        children: [
          d,
          e.jsx("div", {
            className: "h-[21px] relative",
            children: e.jsx("span", {
              className:
                "block flex-auto overflow-hidden text-ellipsis whitespace-nowrap max-w-[170px] absolute",
              id: "chatName",
              children: s.name,
            }),
          }),
        ],
      }),
      e.jsxs("div", {
        className: "flex items-center justify-center gap-2",
        children: [
          e.jsx("div", {
            className: a.confgIcone + "pulse",
            ref: c,
            children: e.jsxs("div", {
              onClick: () => C(e.jsx(rt, { userId: s.id }), c),
              "aria-disabled": "false",
              role: "button",
              tabIndex: 0,
              className: "_3ndVb fbgy3m38 ft2m32mm oq31bsqd nu34rnf1",
              children: [
                m > 0 &&
                  e.jsx("div", {
                    className: "absolute",
                    children: e.jsx("span", {
                      className:
                        a.aba +
                        "relative -top-3 -left-3 tam-aba bg-[var(--primaria)]",
                      children: m,
                    }),
                  }),
                e.jsx("span", {
                  children: e.jsx(Y, {
                    className: "w-6 h-6 text-[var(--icon)]",
                  }),
                }),
              ],
            }),
          }),
          l
            ? e.jsx("div", {
                className: a.confgIcone + "pulse ",
                ref: h,
                style: { borderRadius: "8px" },
                children: e.jsx("div", {
                  onClick: () =>
                    C(
                      e.jsx(ye, {
                        userId: s.id,
                        setUserLabels: j,
                        userLabels: f,
                      }),
                      h
                    ),
                  "aria-disabled": "false",
                  role: "button",
                  tabIndex: 0,
                  className: "_3ndVb fbgy3m38 ft2m32mm oq31bsqd nu34rnf1",
                  children:
                    f && f.length > 0
                      ? e.jsx("div", {
                          className: "flex",
                          children: f.map((v, y) =>
                            e.jsx(
                              "span",
                              {
                                style: y !== 0 ? { marginLeft: "-1rem" } : null,
                                children: e.jsx(se, {
                                  className: "w-6 h-6",
                                  style: { color: v.color },
                                }),
                              },
                              y
                            )
                          ),
                        })
                      : e.jsx(V, { className: "w-6 h-6 text-[var(--icon)]" }),
                }),
              })
            : void 0,
          e.jsx("div", {
            className: a.confgIcone + "pulse",
            ref: o,
            children: e.jsx("div", {
              onClick: () => C(e.jsx(ts, { userId: s.id, plugin_page: !0 }), o),
              "aria-disabled": "false",
              role: "button",
              tabIndex: 0,
              className: "_3ndVb fbgy3m38 ft2m32mm oq31bsqd nu34rnf1",
              children: e.jsx("span", {
                children: e.jsx(as, {
                  className: "w-6 h-6 text-[var(--icon)]",
                }),
              }),
            }),
          }),
          e.jsx("div", { children: e.jsx(ns, { name: "Fechar", funcao: t }) }),
        ],
      }),
    ],
  })
}
function lt({ children: s, position: t }) {
  return e.jsx("div", {
    className: "chat " + (t ? "chat-end" : "chat-start"),
    children: e.jsx("div", {
      className:
        "chat-bubble text-[var(--primary-strong)] shadow-sm max-w-lg " +
        (t
          ? "bg-[var(--outgoing-background)]"
          : "bg-[var(--incoming-background)]"),
      children: e.jsx("span", {
        dangerouslySetInnerHTML: {
          __html: s
            .replace(/\*\_(.*?)\_\*/g, '<strong class="italic">$1</strong>')
            .replace(/\*(.*?)\*/g, "<strong>$1</strong>")
            .replace(/\n/g, "<br>"),
        },
        style: { overflowWrap: "break-word" },
      }),
    }),
  })
}
function ct({ children: s, id: t, position: a }) {
  const [i, n] = p.useState("")
  return (
    p.useEffect(() => {
      ;(async () => {
        const u = (await L("Chat", "downloadMedia", t)).split(",")[1],
          c = atob(u),
          h = new Uint8Array(c.length)
        for (let m = 0; m < c.length; m++) h[m] = c.charCodeAt(m)
        const o = new Blob([h], { type: "image/jpeg" })
        n(URL.createObjectURL(o))
      })()
    }, []),
    e.jsx("div", {
      className: "chat " + (a ? "chat-end" : "chat-start"),
      children: e.jsxs("div", {
        className:
          "chat-bubble text-[var(--primary-strong)] shadow-sm max-w-lg " +
          (a
            ? "bg-[var(--outgoing-background)]"
            : "bg-[var(--incoming-background)]"),
        children: [
          e.jsx("img", {
            src: i,
            className: "h-[330px] rounded-lg m-auto shadow-lg",
          }),
          s &&
            e.jsx("span", {
              dangerouslySetInnerHTML: {
                __html: s
                  .replace(
                    /\*\_(.*?)\_\*/g,
                    '<strong class="italic">$1</strong>'
                  )
                  .replace(/\*(.*?)\*/g, "<strong>$1</strong>")
                  .replace(/\n/g, "<br>"),
              },
              style: { overflowWrap: "break-word" },
            }),
        ],
      }),
    })
  )
}
function dt({ children: s, id: t, position: a }) {
  const [i, n] = p.useState("")
  return (
    p.useEffect(() => {
      ;(async () => {
        for (
          var u = (await L("Chat", "downloadMedia", t)).split(",")[1],
            c = atob(u),
            h = new Uint8Array(c.length),
            o = 0;
          o < c.length;
          o++
        )
          h[o] = c.charCodeAt(o)
        var m = new Blob([h], { type: "video/mp4" })
        n(URL.createObjectURL(m))
      })()
    }, []),
    e.jsx("div", {
      className: "chat " + (a ? "chat-end" : "chat-start"),
      children: e.jsxs("div", {
        className:
          "chat-bubble text-[var(--primary-strong)] shadow-sm max-w-lg " +
          (a
            ? "bg-[var(--outgoing-background)]"
            : "bg-[var(--incoming-background)]"),
        children: [
          e.jsx("video", {
            src: i,
            className: "rounded-lg m-auto shadow-lg",
            controls: !0,
          }),
          s &&
            e.jsx("span", {
              dangerouslySetInnerHTML: { __html: s.replace(/\n/g, "<br>") },
            }),
        ],
      }),
    })
  )
}
function ut({ id: s, position: t, from: a }) {
  const i = p.useRef(null),
    [n, r] = p.useState(!1),
    [l, b] = p.useState(""),
    [u, c] = p.useState()
  p.useEffect(() => {
    ;(async () => {
      c(await L("Contact", "getProfilePictureUrl", a.split("@")[0]))
      const f = (await L("Chat", "downloadMedia", s)).split(",")[1],
        j = atob(f),
        C = new Uint8Array(j.length)
      for (let g = 0; g < j.length; g++) C[g] = j.charCodeAt(g)
      const d = new Blob([C], { type: "audio/mp3" })
      b(URL.createObjectURL(d))
    })()
  }, [])
  const h = () => {
    n ? i.current.pause() : i.current.play(), r(!n)
  }
  return e.jsx("div", {
    className: "chat " + (t ? "chat-end" : "chat-start"),
    children: e.jsx("div", {
      className:
        "chat-bubble text-[var(--primary-strong)] shadow-sm max-w-lg " +
        (t
          ? "bg-[var(--outgoing-background)]"
          : "bg-[var(--incoming-background)]"),
      children: e.jsxs("div", {
        className: "flex gap-1 items-center",
        children: [
          e.jsx("div", {
            className: "avatar",
            children:
              u && u !== "undefined"
                ? e.jsx("div", {
                    className: "w-10 rounded-full",
                    children: e.jsx("img", { src: u }),
                  })
                : e.jsx("span", {
                    children:
                      a.split("@")[0].length > 17
                        ? e.jsx(X, { style: "w-10 h-10" })
                        : e.jsx(ee, { style: "w-10 h-10" }),
                  }),
          }),
          e.jsxs("div", {
            className: "flex gap-2",
            children: [
              e.jsx("span", {
                className: "cursor-pointer pulse",
                onClick: h,
                children: n
                  ? e.jsx(rs, {
                      className: "h-5 w-5 text-[var(--audio-control-incoming)]",
                    })
                  : e.jsx(os, {
                      className: "h-5 w-5 text-[var(--audio-control-incoming)]",
                    }),
              }),
              e.jsx("span", {
                children: e.jsx("div", {
                  className: "h8id8 relative flex-1 w-[150px]",
                  children: e.jsx("div", {
                    className: "ajgl1lbb",
                    children: e.jsxs("div", {
                      className:
                        "_3SpYC YZRf3 relatuve top-[-1px] flex items-center w-full h-[21px] overflow-hidden",
                      children: [
                        e.jsx("div", {
                          className:
                            "_1EsIB bg-[var(--audio-track-outgoing)] absolute w-full h-[3px]",
                        }),
                        e.jsx("span", {
                          className:
                            "_2HJjp bg-[var(--audio-progress-played-outgoing)] absolute left-0 w-0 h-[3px] ",
                          style: { width: " 0%" },
                        }),
                        e.jsx("div", {
                          className: "_3ZhaQ flex w-full",
                          children: e.jsx("div", {
                            className: "_2MvVt relative left-[-6.5px] w-full",
                            style: { transform: "translateX(0%)" },
                            children: e.jsx("div", {
                              className:
                                "_2TVHO bg-[var(--audio-progress-played-outgoing)] h-[13px] w-[13px] rounded-full ml-2",
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            ],
          }),
          e.jsx("audio", {
            ref: i,
            src: l,
            className:
              "rounded-lg m-auto shadow-lg bg-[var(--bg-chat)] hidden ",
            controls: !0,
          }),
        ],
      }),
    }),
  })
}
function pt({ children: s }) {
  const t = s.filename.lastIndexOf("."),
    a = s.filename.slice(0, t),
    i = s.filename.slice(t + 1)
  return e.jsx("div", {
    className: "chat " + (s.id.fromMe ? "chat-end" : "chat-start"),
    children: e.jsx("div", {
      className:
        "chat-bubble text-[var(--primary-strong)] shadow-sm max-w-lg " +
        (s.id.fromMe
          ? "bg-[var(--outgoing-background)]"
          : "bg-[var(--incoming-background)]"),
      children: e.jsxs("div", {
        className: "flex items-center",
        children: [
          e.jsx("span", {
            "data-icon": "preview-generic",
            children: e.jsxs("svg", {
              viewBox: "0 0 88 110",
              height: "110",
              width: "88",
              preserveAspectRatio: "xMidYMid meet",
              children: [
                e.jsx("g", {
                  transform: "translate(4 3)",
                  children: e.jsx("path", {
                    "stroke-opacity": "0.08",
                    stroke: "#000",
                    d: "M3-.5h56.929a5.5 5.5 0 0 1 3.889 1.61l15.071 15.072a5.5 5.5 0 0 1 1.611 3.89V101a3.5 3.5 0 0 1-3.5 3.5H3A3.5 3.5 0 0 1-.5 101V3A3.5 3.5 0 0 1 3-.5z",
                    fill: "#FFF",
                    "fill-rule": "evenodd",
                  }),
                }),
                e.jsx("path", {
                  d: "M65.5 3.5v15a3 3 0 0 0 3 3h15",
                  "stroke-opacity": "0.12",
                  stroke: "#000",
                  fill: "#FFF",
                }),
              ],
            }),
          }),
          e.jsxs("div", {
            className: "flex flex-col",
            children: [
              e.jsx("span", {
                className: "font-bold text-xl w-[350px]",
                style: { overflowWrap: "break-word" },
                children: a,
              }),
              e.jsxs("span", { className: "text-sm", children: ["Tipo: ", i] }),
            ],
          }),
        ],
      }),
    }),
  })
}
function mt({ children: s }) {
  const [t, a] = p.useState("")
  return (
    p.useEffect(() => {
      ;(async () => {
        a(
          await L(
            "Contact",
            "getProfilePictureUrl",
            s.body.match(/waid=(\d+)/)[1]
          )
        )
      })()
    }, []),
    e.jsx("div", {
      className: "chat " + (s.id.fromMe ? "chat-end" : "chat-start"),
      children: e.jsx("div", {
        className:
          "chat-bubble text-[var(--primary-strong)] shadow-sm max-w-lg " +
          (s.id.fromMe
            ? "bg-[var(--outgoing-background)]"
            : "bg-[var(--incoming-background)]"),
        children: e.jsxs("div", {
          className: "flex items-center gap-2",
          children: [
            t && t !== "undefined"
              ? e.jsx("div", {
                  className: "avatar",
                  children: e.jsx("div", {
                    className: "w-12 rounded-full  ring-offset-2",
                    children: e.jsx("img", { src: t }),
                  }),
                })
              : e.jsx("div", {
                  className: "avatar placeholder",
                  children: e.jsx("div", {
                    className: "bg-base-100 rounded-full w-12",
                    children: e.jsx(he, {
                      className: "w-12 h-12 text-[var(--avatarBackground)]",
                    }),
                  }),
                }),
            e.jsxs("div", {
              className: "flex flex-col",
              children: [
                e.jsx("span", {
                  className: "font-bold text-xl",
                  children: s.vcardFormattedName,
                }),
                e.jsx("span", {
                  className: "text-sm",
                  children: s.body.match(/waid=(\d+)/)[1],
                }),
              ],
            }),
          ],
        }),
      }),
    })
  )
}
function ht({ viewMidia: s }) {
  const { language: t } = M(),
    i = ((l) => {
      var b = new Blob([l], { type: l.type }),
        u = URL.createObjectURL(b)
      return u
    })(s.content)
  let n
  switch (s.type) {
    case "image/*":
      n = e.jsx("img", {
        src: i,
        className: "m-auto rounded",
        style: { height: "calc(100vh - 260px)" },
      })
      break
    case "video/*":
      n = e.jsx("video", {
        src: i,
        className: "m-auto rounded",
        style: { height: "calc(100vh - 260px)" },
        controls: !0,
      })
      break
    case "audio/*":
      n = e.jsx("div", {
        style: { height: "calc(100vh - 260px)" },
        children: e.jsx("video", { src: i, controls: !0 }),
      })
      break
    default:
    case "*":
      n = e.jsxs("div", {
        style: { height: "calc(100vh - 260px)" },
        className: "flex flex-col justify-center items-center",
        children: [
          e.jsx("span", {
            "data-icon": "preview-generic",
            children: e.jsxs("svg", {
              viewBox: "0 0 88 110",
              height: "110",
              width: "88",
              preserveAspectRatio: "xMidYMid meet",
              children: [
                e.jsx("g", {
                  transform: "translate(4 3)",
                  children: e.jsx("path", {
                    "stroke-opacity": "0.08",
                    stroke: "#000",
                    d: "M3-.5h56.929a5.5 5.5 0 0 1 3.889 1.61l15.071 15.072a5.5 5.5 0 0 1 1.611 3.89V101a3.5 3.5 0 0 1-3.5 3.5H3A3.5 3.5 0 0 1-.5 101V3A3.5 3.5 0 0 1 3-.5z",
                    fill: "#FFF",
                    "fill-rule": "evenodd",
                  }),
                }),
                e.jsx("path", {
                  d: "M65.5 3.5v15a3 3 0 0 0 3 3h15",
                  "stroke-opacity": "0.12",
                  stroke: "#000",
                  fill: "#FFF",
                }),
              ],
            }),
          }),
          e.jsx("span", {
            className: "font-medium text-2xl",
            children: t.previewUnavailable,
          }),
          e.jsxs("div", {
            className: "f8jlpxt4 ",
            children: [
              (s.content.size / (1024 * 1024)).toFixed(2),
              " MB - ",
              s.content.name.split(".")[0],
            ],
          }),
        ],
      })
      break
  }
  return e.jsx("div", {
    className: "relative",
    children: e.jsx("div", {
      className: "h-full mt-1 p-1 overflow-auto ",
      style: { height: "calc(100vh - 213px)" },
      children: e.jsx("div", { className: "m-auto", children: n }),
    }),
  })
}
function xt({ userId: s }) {
  const { menuVerticalOpen: t, setMenuVerticalOpen: a, language: i } = M(),
    { menuLateral: n, setMenuLateral: r } = U(),
    { setModal: l } = I(),
    b = (c) => {
      l({ isOpen: !0, children: c, btnClose: !0 })
    },
    u = [
      {
        id: 1,
        title: i.modal_createAReminder_title,
        ico: e.jsx(is, {
          className: "w-6 h-6 text-[var(--primaria)] mb-[3px]",
        }),
        funcao: () => b(e.jsx(ds, { userId: s, plugin_page: !0 })),
      },
      {
        id: 2,
        title: i.note_list_title,
        ico: e.jsx(xe, { className: "w-6 h-6 fill-[var(--primaria)]" }),
        funcao: () => b(e.jsx(be, { userId: s, plugin_page: !0 })),
      },
      {
        id: 3,
        title: i.modal_schedulingCallendar_title,
        ico: e.jsx(ls, { className: "w-6 h-6 text-[var(--primaria)]" }),
        funcao: () => b(e.jsx(us, { plugin_page: !0 })),
      },
      {
        id: 4,
        title: i.agendamento_title,
        ico: e.jsx(fe, { className: "w-6 h-6 text-[var(--primaria)]" }),
        funcao: () => b(e.jsx(ge, { userId: s, plugin_page: !0 })),
      },
      {
        id: 4,
        title: i.modal_contactProfile,
        ico: e.jsx(cs, { className: "w-6 h-6 text-[var(--primaria)]" }),
        funcao: () => r({ ...n, children: "perfilContato" }),
      },
    ]
  return e.jsxs("div", {
    className:
      "z-[1] absolute bottom-[10px] left-2 gap-2 flex items-center flex-col-reverse",
    children: [
      e.jsx("li", {
        className: "lg:tooltip  lg:tooltip-right",
        "data-tip": i.chat_horizontal_btn,
        children: e.jsx("div", {
          className:
            "pulse cursor-pointer bg-[var(--dropdown-background)] rounded-full w-9 h-9 shadow-lg flex items-center justify-center",
          onClick: () => a(!t),
          children: e.jsx("span", {
            children: e.jsx("img", {
              src: chrome.runtime.getURL("label/icons/icon.png"),
              className: "w-10 rounded-full",
            }),
          }),
        }),
      }),
      t &&
        u.map(({ id: c, title: h, ico: o, funcao: m }) =>
          e.jsx(
            "li",
            {
              className: "lg:tooltip  lg:tooltip-right",
              "data-tip": h,
              children: e.jsx("div", {
                className:
                  "pulse cursor-pointer bg-[var(--dropdown-background)] rounded-full w-9 h-9 shadow-lg flex items-center justify-center",
                onClick: m,
                children: e.jsx("span", { children: o }),
              }),
            },
            c
          )
        ),
    ],
  })
}
const ft = ({ chat: s, removeScript: t }) => {
  p.useState(!1)
  let a
  switch (s.type) {
    case "chat":
      a = e.jsx(lt, { position: s.id.fromMe, children: s.body })
      break
    case "image":
      a = e.jsx(ct, {
        position: s.id.fromMe,
        id: s.id._serialized,
        children: s.caption,
      })
      break
    case "video":
      a = e.jsx(dt, {
        position: s.id.fromMe,
        id: s.id._serialized,
        children: s.caption,
      })
      break
    case "audio":
    case "ptt":
      a = e.jsx(ut, {
        position: s.id.fromMe,
        from: s.from,
        id: s.id._serialized,
      })
      break
    case "document":
      a = e.jsx(pt, { children: s })
      break
    case "vcard":
      a = e.jsx(mt, { children: s })
      break
  }
  return e.jsx("div", {
    className:
      "w-full flex items-center gap-2 relative " +
      (s.id.fromMe ? "justify-end" : "justify-start"),
    children: a,
  })
}
function bt({ userID: s, viewMidia: t }) {
  const [a, i] = p.useState([]),
    n = async () => {
      const c = await L("Chat", "getMessages", { id: s, quant: 20 })
      JSON.stringify(c) !== JSON.stringify(a) && i(c.reverse())
    }
  p.useEffect(() => {
    n()
  }, []),
    p.useEffect(
      () => (
        chrome.runtime.onMessage.addListener(r),
        () => {
          chrome.runtime.onMessage.removeListener(r)
        }
      ),
      [a]
    )
  const r = function (c, h, o) {
      switch (c.action) {
        case "chat.new_message":
          const m = JSON.parse(c.model)
          if (m.id.remote.split("@")[0] === s) {
            const f = [m, ...a]
            i(f)
          }
          break
      }
    },
    l = (c) => {},
    b = e.jsxs("div", {
      children: [
        e.jsx("div", {
          className: "relative",
          children: e.jsx("div", {
            className:
              "bg-whatsFundo absolute dark:contrast-0 contrast-50 h-full",
            style: { width: "calc(100% - 6px)", height: "calc(90vh - 110px)" },
          }),
        }),
        e.jsx("div", {
          className:
            "h-full overflow-auto bg-[var(--conversation-panel-background)] px-[50px] py-4 flex flex-col-reverse",
          style: { height: "calc(90vh - 110px)" },
          children: a.map((c, h) =>
            e.jsx(
              "div",
              {
                tabIndex: h,
                children: e.jsx(ft, { chat: c, removeScript: l }),
              },
              h
            )
          ),
        }),
        e.jsx("div", {
          className: "relative",
          children: e.jsx(xt, { userId: s }),
        }),
      ],
    }),
    u = e.jsx("div", {
      className:
        "bg-[var(--background-document-with-captions)] p-2 shadow-lg h-full w-full",
      style: { height: "calc(80vh - 107px)" },
      children: e.jsx(ht, { viewMidia: t }),
    })
  return t.open ? u : b
}
const gt = p.memo(bt),
  q = "h-5 w-5 text-[var(--icon)]",
  jt = [
    { name: "Imagem", ico: e.jsx(ps, { className: q }), type: "image/*" },
    { name: "Video", ico: e.jsx(ms, { className: q }), type: "video/*" },
    { name: "Audio", ico: e.jsx(hs, { className: q }), type: "audio/*" },
    { name: "Documento", ico: e.jsx(xs, { className: q }), type: "*" },
    {
      name: "Contato",
      ico: e.jsx(he, { className: "h-6 w-6 text-[var(--icon)]" }),
      type: "contato",
    },
  ]
function vt({ setViewMidia: s, userID: t }) {
  const { modalOptions: a, setModalOptions: i } = P(),
    n = p.useRef(null)
  let r
  const l = (c) => {
      c === "contato" ||
        (n.current.setAttribute("accept", c), (r = c), n.current.click())
    },
    b = async (c) => {
      switch ((i({ ...a, isOpen: !1, children: void 0 }), r)) {
        case "*":
          L("Chat", "sendDoc", {
            id: t,
            name: c.target.files[0].name,
            base64: await z(c.target.files[0]),
          })
          break
        case "audio/*":
          L("Chat", "sendAudio", { id: t, base64: await z(c.target.files[0]) })
          break
        default:
          s({ open: !0, type: r, content: c.target.files[0] })
          break
      }
    }
  return e.jsxs("div", {
    children: [
      jt.map((c, h) =>
        e.jsx(
          "span",
          {
            children: e.jsx(T, {
              content: c.name,
              icon: c.ico,
              setFunction: () => l(c.type),
              stroke: "1",
            }),
          },
          h
        )
      ),
      e.jsx("input", {
        className: "hidden",
        type: "file",
        ref: n,
        onChange: b,
      }),
    ],
  })
}
function Ct({ viewMidia: s, setViewMidia: t, userID: a, name: i }) {
  const { variaveisWA: n } = ae(),
    { language: r } = M(),
    { menuLateral: l, setMenuLateral: b } = U(),
    { CheckUserFreeLock: u } = $(),
    { setModalOptions: c } = P(),
    { setModal: h } = I(),
    [o, m] = p.useState(""),
    [x, f] = p.useState({ name: "", active: !1, init: !0 }),
    j = p.useRef(null),
    C = p.useRef(null)
  p.useEffect(() => {
    const w = j.current
    w &&
      w.scrollHeight > 32 &&
      w.scrollHeight < 120 &&
      ((w.style.height = "auto"), (w.style.height = `${w.scrollHeight + 6}px`)),
      w && w.style && o.length === 0 && (w.style.height = "32px")
  }, [o]),
    p.useEffect(() => {
      const w = (_) => {
        _.key === "Enter" && !_.shiftKey && (_.preventDefault(), v())
      }
      return (
        j && j.current && j.current.addEventListener("keydown", w),
        () => {
          j && j.current && j.current.removeEventListener("keydown", w)
        }
      )
    }, [o, s]),
    p.useEffect(() => {
      x.init && localStorage.getItem("assinatura")
        ? ((x.init = !1), f(JSON.parse(localStorage.getItem("assinatura"))))
        : ((x.init = !1), localStorage.setItem("assinatura", JSON.stringify(x)))
    }, [x])
  const d = () => {
      c({
        isOpen: !0,
        placement: "top",
        offset: [15, 10],
        children: e.jsx(vt, { setViewMidia: t, userID: a }),
        fatherElement: C,
        icoElement: null,
      })
    },
    g = (w) =>
      x.active && x.name.length !== 0
        ? (w = `*_${x.name}:_*
${w}`)
        : w,
    v = async () => {
      const w = a.length > 15 ? a + "@g.us" : a + "@c.us"
      switch (s.type) {
        case "image/*":
          L("Chat", "sendImage", {
            id: w,
            msg: g(o),
            base64: await z(s.content),
          })
          break
        case "video/*":
          L("Chat", "sendVideo", {
            id: w,
            msg: g(o),
            base64: await z(s.content),
          })
          break
        default:
          o.length !== 0 && L("Chat", "sendTxt", { id: w, msg: g(o) })
          break
      }
      t({ open: !1, type: "", content: "" }), m("")
    },
    y = () => {
      m((w) => w + " " + i)
    },
    k = (w) => {
      h({ isOpen: !0, btnClose: !0, children: w })
    }
  return e.jsx("div", {
    className: "relative h-[55px] z-[2]",
    children: e.jsx("div", {
      className:
        "absolute p-3  w-full bg-[var(--rich-text-panel-background)] bottom-0 shadow-lg " +
        (l.children.length !== 0 ? "rounded-es-lg" : "rounded-b-lg"),
      children: e.jsxs("div", {
        className: "flex items-center gap-3",
        children: [
          e.jsx("div", {
            className: "flex-auto pulse cursor-pointer",
            ref: C,
            onClick: d,
            children: e.jsx(fs, { className: "h-7 w-7 text-[var(--icon)]" }),
          }),
          e.jsx("div", {
            className: n.confgIcone + "cursor-pointer lg:tooltip",
            "data-tip": r.menuFooter_colarNome,
            children: e.jsx("div", {
              className: "_3ndVb fbgy3m38 ft2m32mm oq31bsqd nu34rnf1",
              children: e.jsx("div", {
                className: "bo8jc6qi p4t1lx4y brjalhku",
                onClick: y,
                children: e.jsx("span", {
                  children: e.jsx(bs, {
                    className: "h-6 w-6 text-[var(--icon)]",
                    strokeWidth: 1,
                  }),
                }),
              }),
            }),
          }),
          e.jsx("div", {
            className: n.confgIcone + "cursor-pointer lg:tooltip",
            "data-tip": r.menuFooter_Ass,
            children: e.jsx("div", {
              onClick: () =>
                k(
                  e.jsx(Ns, {
                    assinatura: x,
                    setAssinatura: f,
                    plugin_page: !0,
                  })
                ),
              className: "_3ndVb fbgy3m38 ft2m32mm oq31bsqd nu34rnf1",
              children: e.jsx("div", {
                className: "bo8jc6qi p4t1lx4y brjalhku",
                children: e.jsx("span", {
                  children: e.jsx(gs, {
                    className: "text-[var(--icon)]",
                    style: x.active
                      ? {
                          color: "var(--wds-teal-500)",
                          width: "22px",
                          height: "22px",
                        }
                      : { width: "22px", height: "22px" },
                  }),
                }),
              }),
            }),
          }),
          e.jsx("div", {
            className: "w-full",
            children: e.jsx(js, {
              textRef: j,
              type: "textarea",
              position: "top",
              placeholder: "Digite uma mensagem",
              text: o,
              setText: (w) => m(w),
              heightCamp: 32,
              heightTextArea: 390,
              plugin_page: !0,
            }),
          }),
          e.jsxs("div", {
            className: "flex-auto flex gap-3",
            children: [
              e.jsx("span", {
                className: "pulse cursor-pointer",
                children: e.jsx(vs, {
                  className: "h-6 w-6 text-[var(--icon)]",
                  onClick: v,
                }),
              }),
              e.jsx("span", {
                className: "pulse cursor-pointer",
                onClick: () => b({ ...l, children: "RespostaRapida" }),
                children:
                  l.children === "RespostaRapida" || l.children === "Categoria"
                    ? e.jsx(Cs, {
                        className: "w-[25px] h-[25px] text-[var(--primaria)]",
                      })
                    : e.jsx(ws, {
                        className: "w-[25px] h-[25px] text-[var(--icon)]",
                      }),
              }),
            ],
          }),
        ],
      }),
    }),
  })
}
const wt = () => {
  const { menuLateral: s, setUserId: t } = U(),
    [a, i] = p.useState(e.jsx(e.Fragment, {}))
  return (
    p.useEffect(() => {
      switch (s.children) {
        case "RespostaRapida":
          i(e.jsx(ks, { plugin_page: !0 }))
          break
        case "perfilContato":
          i(e.jsx(ys, { plugin_page: !0 }))
          break
        default:
          i(e.jsx(e.Fragment, {}))
          break
      }
    }, [s]),
    e.jsx("div", { className: "relative z-[100]", children: a })
  )
}
function Nt() {
  return e.jsx(wt, {})
}
function yt({ card: s, CloseModal: t }) {
  const { setUserId: a } = U()
  a(s.id)
  const [i, n] = p.useState({ open: !1, type: "", content: "" })
  return e.jsxs("div", {
    className: "h-[90vh] w-[80vw] m-auto max-w-[1200px] max-h-[1200px] flex",
    children: [
      e.jsxs("div", {
        className: "w-full h-full",
        children: [
          e.jsx("header", { children: e.jsx(it, { card: s, CloseModal: t }) }),
          e.jsx("main", {
            children: e.jsx(gt, { userID: s.id, viewMidia: i }),
          }),
          e.jsx("footer", {
            children: e.jsx(Ct, {
              setViewMidia: n,
              viewMidia: i,
              userID: s.id,
              name: s.name,
            }),
          }),
        ],
      }),
      e.jsx(Nt, {}),
    ],
  })
}
const kt = p.memo(yt)
function Mt({ card: s }) {
  const { open: t } = P(),
    { open: a, close: i } = G(),
    { open: n, close: r } = I(),
    { isBusiness: l } = M(),
    b = p.useRef(null),
    { agendamentos: u } = Ms(),
    [c, h] = p.useState(0)
  p.useEffect(() => {
    const C = u.filter((d) => d.userID === s.id)
    h(C.length)
  }, [u])
  const { notes: o } = Rs(),
    [m, x] = p.useState(0)
  p.useEffect(() => {
    const C = o.filter((d) => d.userID === s.id)
    x(C.length)
  }, [o])
  const f = e.jsx("div", {
    className: "flex pulse pr-2 !cursor-pointer",
    ref: b,
    onClick: () => t(e.jsx(ye, { userId: s.id, userLabels: s.labels }), b),
    children:
      s.labels && s.labels.length > 0
        ? e.jsx("div", {
            className: "flex",
            children: s.labels.map((C, d) =>
              e.jsx(
                "span",
                {
                  style: d !== 0 ? { marginLeft: "-1rem" } : null,
                  children: e.jsx(se, {
                    className: "h-5 w-5 text-[var(--icon)]",
                    style: { color: C.hexColor },
                  }),
                },
                d
              )
            ),
          })
        : e.jsx("span", {
            children: e.jsx(V, { className: "h-5 w-5 text-[var(--icon)]" }),
          }),
  })
  return e.jsxs("div", {
    className: "flex items-end pt-1",
    children: [
      l && f,
      e.jsxs("div", {
        className: "flex gap-2",
        children: [
          e.jsxs("div", {
            className: "indicator pulse !cursor-pointer",
            onClick: () => n(e.jsx(be, { userId: s.id, plugin_page: !0 })),
            children: [
              m !== 0 &&
                e.jsx("span", {
                  className:
                    "indicator-item badge bg-[var(--primaria)] badge-xs indicator-bottom indicator-end rounded-full text-[var(--letra)] h-4",
                  children: m,
                }),
              e.jsx(xe, {
                className:
                  "h-5 w-5 fill-[var(--icon)] stroke-[var(--icon)] stroke-[45px]",
              }),
            ],
          }),
          e.jsxs("div", {
            className: "indicator pulse !cursor-pointer",
            onClick: () =>
              n(e.jsx(ge, { userId: s.id, plugin_page: !0, name: s.name })),
            children: [
              c !== 0 &&
                e.jsx("span", {
                  className:
                    "indicator-item badge bg-[var(--primaria)] badge-xs indicator-bottom indicator-end rounded-full text-[var(--letra)] h-4 ",
                  children: c,
                }),
              e.jsx(fe, {
                className: "h-5 w-5 text-[var(--icon)]",
                strokeWidth: 2.2,
              }),
            ],
          }),
          e.jsx("div", {
            className: "indicator pulse !cursor-pointer",
            onClick: () => a(e.jsx(kt, { card: s, CloseModal: i })),
            children: e.jsx(Ls, { className: "h-5 w-5 text-[var(--icon)]" }),
          }),
        ],
      }),
    ],
  })
}
function Rt({
  userCard: s,
  index: t,
  style: a,
  provided: i,
  isDragging: n,
  is_inbox: r,
  cardListID: l,
  setCardsList: b,
}) {
  const { perfil: u } = _s(),
    [c, h] = p.useState(s),
    o = async () => {
      const j = await L("Utils", "get-card", c.id),
        C = u.find((g) => g.userID === c.id),
        d = {
          ...s,
          picture: j.picture,
          name: j.name,
          labels: j.labels,
          valNegocio: C ? C.valNegocio : [],
          entrada: C ? C.entrada : "",
        }
      h(d), b((g) => g.map((v) => (v.id === s.id ? d : v)))
    }
  p.useEffect(() => {
    o()
  }, [u]),
    p.useEffect(
      () => (
        window.addEventListener("message", m),
        chrome.runtime.onMessage.addListener(x),
        () => {
          window.removeEventListener("message", m),
            chrome.runtime.onMessage.removeListener(x)
        }
      ),
      [s]
    )
  const m = async (j) => {
      j.data.action === "update-card" &&
        j.data.userId === c.id &&
        setTimeout(() => o(), 1500)
    },
    x = function (j, C, d) {
      j.action === "update-card" &&
        j.userId === c.id &&
        setTimeout(() => o(), 1500)
    }
  return e.jsx("div", {
    "data-index": t,
    "data-testid": c.id,
    ref: i.innerRef,
    ...i.draggableProps,
    ...i.dragHandleProps,
    "data-is-dragging": n,
    style: { ...a, ...i.draggableProps.style },
    children: e.jsxs("div", {
      className:
        "rounded-lg border border-[var(--conversation-header-border)] border-solid w-full !h-[80px] flex justify-between p-1 gap-1 hover:bg-[var(--background-default-active)]",
      style: { backgroundColor: n ? "var(--background-default-active)" : "" },
      children: [
        e.jsxs("div", {
          className: "w-full",
          children: [e.jsx(nt, { card: c }), e.jsx(Mt, { card: c })],
        }),
        !r && e.jsx(tt, { cardListID: l, card: c }),
      ],
    }),
  })
}
const ke = p.memo(Rt),
  Lt =
    (s, t, a, i) =>
    ({ index: n, style: r }) => {
      const l = s[n],
        b = `${t}_x_${l.id}`,
        u = { ...r, top: r.top, left: r.left }
      return e.jsx(
        te,
        {
          index: n,
          draggableId: b,
          children: (c, h) =>
            e.jsx(ke, {
              index: n,
              userCard: l,
              provided: c,
              style: u,
              isDragging: h.isDragging,
              is_inbox: i,
              cardListID: t,
              setCardsList: a,
            }),
        },
        b
      )
    }
function _t({ children: s, id: t, is_inbox: a, setCardsList: i }) {
  const { zoom: n, language: r } = M(),
    l = e.jsx(Z, {
      droppableId: `${Date.now()}`,
      direction: "vertical",
      type: "Cards",
      children: (u, c) =>
        e.jsx(
          te,
          {
            index: 0,
            draggableId: "0",
            children: (h, o) =>
              e.jsxs("div", {
                className:
                  "flex flex-col justify-center items-center rounded-b-lg border border-[var(--conversation-header-border)] border-solid p-1 pb-3",
                children: [
                  e.jsx("span", {
                    children: e.jsx(As, {
                      className: "h-10 w-10 text-[var(--icon)]",
                      strokeWidth: 0.2,
                    }),
                  }),
                  e.jsx("span", {
                    className:
                      "text-[15px] text-[var(--icon)] text-center w-[240px]",
                    style: { overflowWrap: "break-word" },
                    children: r.CRM_inboxEmpty,
                  }),
                ],
              }),
          },
          0
        ),
    }),
    b = e.jsx("div", {
      "data-id": "Body-CardList",
      className:
        "w-[246px] h-full shadow-sm flex flex-col gap-1 overflow-x-hidden",
      style: { maxHeight: "calc(100% - 37px)", overflow: "visible" },
      children: e.jsx(Z, {
        droppableId: t,
        direction: "vertical",
        type: "Card",
        mode: "virtual",
        renderClone: (u, c, h) =>
          e.jsx("div", {
            style: { zoom: n + "%" },
            children: e.jsx(ke, {
              userCard: s[h.source.index],
              index: h.source.index,
              provided: u,
              isDragging: c.isDragging,
              is_inbox: a,
              cardListID: t,
              setCardsList: i,
            }),
          }),
        children: (u, c) =>
          e.jsx(Es, {
            children: ({ width: h, height: o }) =>
              e.jsx(Is, {
                width: h,
                height: o,
                className:
                  "border border-[var(--conversation-header-border)] border-solid rounded-b-lg min-h-[90px] !w-64 pl-1 pt-1 " +
                  (s.length === 0 ? "!h-[90px]" : ""),
                rowCount: s.length,
                rowHeight: 84,
                ...u.droppableProps,
                ref: (m) => {
                  if (m) {
                    const x = Ps.findDOMNode(m)
                    x instanceof window.HTMLElement && u.innerRef(x)
                  }
                },
                rowRenderer: Lt(s, t, i, a),
              }),
          }),
      }),
    })
  return a && s.length === 0 ? l : b
}
const At = p.memo(_t)
function W({
  id: s,
  index: t,
  name: a,
  cards: i,
  is_inbox: n,
  color: r = "var(--primaria)",
}) {
  const [l, b] = p.useState(i)
  return (
    p.useEffect(() => {
      b(i)
    }, [i]),
    e.jsx(
      te,
      {
        draggableId: s,
        index: t,
        children: (c, h) =>
          e.jsxs("div", {
            "data-id": "CardList",
            ref: c.innerRef,
            ...c.draggableProps,
            ...c.dragHandleProps,
            children: [
              e.jsx(et, {
                id: s,
                is_inbox: n,
                name: a,
                cardsOriginal: i,
                cards: l,
                setCardsList: b,
                color: r,
              }),
              e.jsx(At, { id: s, is_inbox: n, setCardsList: b, children: l }),
            ],
          }),
      },
      s
    )
  )
}
function Et() {
  const { language: s, ativeCRM: t } = M(),
    { setIzi: a } = A(),
    { userTabs: i, setUserTabs: n, orderLabels: r, setOrderLabels: l } = S(),
    { userLogado: b } = $(),
    { setModal: u } = I(),
    { crm: c, setCrm: h } = E(),
    o = (d) => {
      if (
        !(
          d.type === "CRM" &&
          (d.draggableId === "Inbox" || d.destination.index === 0)
        ) &&
        d.destination.droppableId !== "Inbox"
      )
        switch (
          (d.type === "CRM" &&
            ((d.source.index = d.source.index - 1),
            (d.destination.index = d.destination.index - 1)),
          t)
        ) {
          case "Abas":
            f(d)
            break
          case "Etiquetas":
            j(d)
            break
          default:
            C(d)
            break
        }
    },
    m = (d) => (b.estado ? !1 : i.find((v) => v.tag === d).chats.length >= 5),
    x = (d) =>
      b.estado
        ? !1
        : c.find((v) => v.id === t).list.find((v) => v.id === d).chats.length >=
          5,
    f = async (d) => {
      if (d.type === "CRM") {
        const g = Array.from(i),
          [v] = g.splice(d.source.index, 1)
        g.splice(d.destination.index, 0, v), n(g)
        return
      }
      if (d.destination.droppableId === d.source.droppableId) {
        const g = [...i]
        for (let v = 0; v < i.length; v++)
          if (g[v].tag === d.destination.droppableId) {
            const [y] = g[v].chats.splice(d.source.index, 1)
            g[v].chats.splice(d.destination.index, 0, y)
          }
        n(g)
        return
      }
      if (d.source.droppableId === "Inbox") {
        const g = [...i],
          v = d.draggableId.split("_x_")[1],
          y = await L("Utils", "getContato", v)
        let k = {
            id: v,
            name: y.name,
            picture: await L("Contact", "getProfilePictureUrl", v),
            etiqueta: y.labels,
            dataEntrada: Date.now(),
          },
          N = g.find((w) => w.tag === d.destination.droppableId)
        if (((N = N.chats.find((w) => w.id === v)), N)) {
          a({
            type: "Error",
            title: s.error,
            message: "Contato já existente na aba",
            position: "topRight",
          })
          return
        }
        for (let w = 0; w < i.length; w++)
          if (g[w].tag === d.destination.droppableId) {
            g[w].chats = [
              ...g[w].chats.slice(0, d.destination.index),
              k,
              ...g[w].chats.slice(d.destination.index),
            ]
            break
          }
        n(g)
        return
      }
      if (d.destination.droppableId !== d.source.droppableId) {
        const g = [...i],
          v = d.draggableId.split("_x_")[1],
          y = g.find((N) => N.tag === d.destination.droppableId)
        if (y && y.chats.some((N) => N.id === v)) {
          a({
            type: "Error",
            title: "Erro",
            message: "Contato já existente na aba",
            position: "topRight",
          })
          return
        }
        let k
        for (const N of g)
          if (N.tag === d.source.droppableId) {
            ;(k = N.chats.find((w) => w.id === v)),
              (N.chats = N.chats.filter((w) => w.id !== v))
            break
          }
        for (const N of g)
          if (N.tag === d.destination.droppableId) {
            N.chats.splice(d.destination.index, 0, k)
            break
          }
        n(g)
        return
      }
    },
    j = async (d) => {
      if (d.type === "CRM") {
        const y = Array.from(r),
          [k] = y.splice(d.source.index, 1)
        y.splice(d.destination.index, 0, k), l(y)
        return
      }
      const g = d.draggableId.split("_x_")[1],
        v = g.length > 15 ? g + "@g.us" : g + "@c.us"
      if (d.source.droppableId === "Inbox") {
        L("Labels", "addOrRemoveLabels", {
          id: v,
          label: { labelId: d.destination.droppableId, type: "add" },
        })
        return
      }
      if (d.destination.droppableId !== d.source.droppableId) {
        L("Labels", "addOrRemoveLabels", {
          id: v,
          label: [
            { labelId: d.source.droppableId, type: "remove" },
            { labelId: d.destination.droppableId, type: "add" },
          ],
        })
        return
      }
    },
    C = async (d) => {
      if (d.type === "CRM") {
        const g = Array.from(c.find((y) => y.id === t).list),
          [v] = g.splice(d.source.index, 1)
        g.splice(d.destination.index, 0, v),
          h(
            (y) => (
              y.forEach((k, N) => {
                k.id === t && (y[N] = { ...k, list: g })
              }),
              [...y]
            )
          )
        return
      }
      if (d.destination.droppableId === d.source.droppableId) {
        const g = Array.from(c.find((v) => v.id === t).list)
        for (let v = 0; v < g.length; v++)
          if (g[v].id === d.destination.droppableId) {
            const [y] = g[v].chats.splice(d.source.index, 1)
            g[v].chats.splice(d.destination.index, 0, y)
          }
        h(
          (v) => (
            v.forEach((y, k) => {
              y.id === t && (v[k] = { ...y, list: g })
            }),
            [...v]
          )
        )
        return
      }
      if (d.source.droppableId === "Inbox") {
        const g = Array.from(c.find((k) => k.id === t).list),
          v = d.draggableId.split("_x_")[1]
        let y = g.find((k) => k.id === d.destination.droppableId)
        if (((y = y.chats.find((k) => k.id === v)), y)) {
          a({
            type: "Error",
            title: s.error,
            message: "Contato já existente na aba",
            position: "topRight",
          })
          return
        }
        for (let k = 0; k < g.length; k++)
          if (g[k].id === d.destination.droppableId) {
            g[k].chats = [
              ...g[k].chats.slice(0, d.destination.index),
              { id: v },
              ...g[k].chats.slice(d.destination.index),
            ]
            break
          }
        h(
          (k) => (
            k.forEach((N, w) => {
              N.id === t && (k[w] = { ...N, list: g })
            }),
            [...k]
          )
        )
        return
      }
      if (d.destination.droppableId !== d.source.droppableId) {
        const g = Array.from(c.find((N) => N.id === t).list),
          v = d.draggableId.split("_x_")[1]
        let y = g.find((N) => N.id === d.destination.droppableId)
        if (((y = y.chats.find((N) => N.id === v)), y)) {
          a({
            type: "Error",
            title: "Erro",
            message: "Contato já existente na aba",
            position: "topRight",
          })
          return
        }
        let k
        for (let N = 0; N < g.length; N++)
          if (g[N].id === d.source.droppableId) {
            ;(k = g[N].chats[d.source.index]),
              g[N].chats.splice(d.source.index, 1)
            break
          }
        for (let N = 0; N < g.length; N++)
          if (g[N].id === d.destination.droppableId) {
            g[N].chats = [
              ...g[N].chats.slice(0, d.destination.index),
              k,
              ...g[N].chats.slice(d.destination.index),
            ]
            break
          }
        h(
          (N) => (
            N.forEach((w, _) => {
              w.id === t && (N[_] = { ...w, list: g })
            }),
            [...N]
          )
        )
        return
      }
    }
  return o
}
function It(s) {
  const { ativeCRM: t } = M(),
    { userTabs: a } = S(),
    { crm: i } = E(),
    n = async () => {
      const l = await L("Chat", "List")
      switch (t) {
        case "Abas":
          let u = a.reduce((f, j) => f.concat(j.chats), []).map((f) => f.id)
          s(l.filter((f) => !u.includes(f.id)))
          break
        case "Etiquetas":
          let h = (await L("Contact", "List", "allLabels")).map((f) => f.id)
          s(l.filter((f) => !h.includes(f.id)))
          break
        default:
          if (i.length === 0 || !t) {
            s(l)
            return
          }
          let x = Array.from(i.find((f) => f.id === t).list)
            .reduce((f, j) => f.concat(j.chats), [])
            .map((f) => f.id)
          s(l.filter((f) => !x.includes(f.id)))
          break
      }
    }
  p.useEffect(() => {
    n()
  }, [t, a, i])
  const r = function (l, b, u) {
    switch (l.action) {
      case "update-inbox":
        n()
        break
      case "chat.new_message":
        n()
        break
    }
  }
  p.useEffect(
    () => (
      chrome.runtime.onMessage.addListener(r),
      () => {
        chrome.runtime.onMessage.removeListener(r)
      }
    ),
    [t, a]
  )
}
function Pt({ children: s }) {
  const { menu: t, zoom: a, ativeCRM: i } = M(),
    n = Et(),
    [r, l] = p.useState([])
  return (
    It(l),
    e.jsxs("div", {
      className:
        "flex gap-1 h-[100vh] " +
        (t === "Right"
          ? "flex-row-reverse"
          : t === "Bottom"
          ? "flex-col-reverse"
          : t === "Top"
          ? "flex-col"
          : ""),
      children: [
        e.jsx(Js, {}),
        e.jsx("div", {
          "data-id": "Painel",
          className: "h-full",
          style:
            t === "Top" || t === "Bottom"
              ? { maxHeight: "calc(100vh - 52px)", marginBottom: "auto" }
              : { width: "calc(100vw - 52px)" },
          children: e.jsx(Ss, {
            onDragEnd: n,
            children: e.jsx(Z, {
              droppableId: "CRM",
              direction: "horizontal",
              type: "CRM",
              children: (u) =>
                e.jsxs("div", {
                  "data-id": "Container",
                  className:
                    "flex h-full p-4 gap-4 overflow-x-auto overflow-y-hidden",
                  style: { zoom: `${a}%` },
                  ...u.droppableProps,
                  ref: u.innerRef,
                  children: [
                    e.jsx(W, {
                      id: "Inbox",
                      index: 0,
                      name: "Inbox",
                      cards: r,
                      is_inbox: !0,
                    }),
                    s,
                  ],
                }),
            }),
          }),
        }),
      ],
    })
  )
}
function Me() {
  const { ativeCRM: s, language: t } = M(),
    { setIzi: a } = A(),
    i = Q({ plugin_page: !0 }),
    n = Ne(),
    r = () => {
      switch (s) {
        case "Abas":
          i()
          break
        case "Etiquetas":
          a({
            type: "Info",
            title: t.Atencao,
            message:
              "A função adicionar etiqueta só está disponivel pelo seu app do whatsapp. Pegue o seu celular e crie a etiqueta desejada para ser exibida no whatsapp web",
            position: "topRight",
          })
          break
        default:
          n()
          break
      }
    }
  return e.jsx("div", {
    className: "w-full m-auto text-center flex justify-center",
    children: e.jsxs("div", {
      className:
        "grid gap-4 shadow-lg rounded-lg p-4 border border-dashed border-[var(--conversation-header-border)] w-fit",
      children: [
        e.jsx(D, { children: t.CRM_emptyAba }),
        e.jsx(J, { name: t.CRM_addAba, funcao: r }),
      ],
    }),
  })
}
function St() {
  const { userTabs: s } = S(),
    [t, a] = p.useState([])
  return (
    p.useEffect(() => {
      const n = s.map((r) => ({
        ...r,
        chats: r.chats.map((l) => {
          const { picture: b, dataEntrada: u, ...c } = l
          return c
        }),
      }))
      a(n)
    }, [s]),
    e.jsx(e.Fragment, {
      children:
        t.length !== 0
          ? t.map((n, r) =>
              e.jsx(W, { id: n.tag, index: r + 1, name: n.tag, cards: n.chats })
            )
          : e.jsx(Me, {}),
    })
  )
}
function Ot() {
  const { orderLabels: s, setOrderLabels: t } = S(),
    [a, i] = p.useState([]),
    [n, r] = p.useState([]),
    [l, b] = p.useState({}),
    u = p.useCallback(async () => {
      const o = await L("Labels", "getAllLabels")
      i(o)
      const m = o.map((j) => j.id),
        f = [
          ...s.filter((j) => m.includes(j)),
          ...m.filter((j) => !s.includes(j)),
        ]
      JSON.stringify(f) !== JSON.stringify(s) && t(f)
    }, [a, s])
  p.useEffect(() => {
    u()
  }, []),
    p.useEffect(() => {
      const o = setInterval(u, 4e4)
      return () => clearInterval(o)
    }, [a]),
    p.useEffect(() => {
      const o = [...a]
      o.sort((m, x) => s.indexOf(m.id) - s.indexOf(x.id)), r(o)
    }, [a, s]),
    p.useEffect(() => {
      ;(async () => {
        let m = {}
        for (let x = 0; x < n.length; x++) {
          const f = await L("Contact", "List", {
            type: "withLabels",
            id: n[x].id,
          })
          m[n[x].id] = f
        }
        b(m)
      })()
    }, [n, s]),
    p.useEffect(
      () => (
        chrome.runtime.onMessage.addListener(c),
        () => {
          chrome.runtime.onMessage.removeListener(c)
        }
      ),
      [a]
    )
  const c = function (o, m, x) {
    switch (o.action) {
      case "chat.update_label":
        u()
        break
    }
  }
  return e.jsx(e.Fragment, {
    children: n.map((o, m) =>
      e.jsx(W, {
        id: o.id,
        index: m + 1,
        name: o.name,
        color: o.hexColor,
        cards: l[o.id] ? l[o.id] : [],
      })
    ),
  })
}
function Tt() {
  const { ativeCRM: s } = M(),
    { crm: t } = E(),
    [a, i] = p.useState()
  return (
    p.useEffect(() => {
      i(t.find((r) => r.id === s))
    }, [t, s]),
    Q({ plugin_page: !0 }),
    e.jsx(e.Fragment, {
      children:
        a && a.list.length !== 0
          ? a.list.map((r, l) =>
              e.jsx(W, {
                id: r.id,
                index: l + 1,
                name: r.name,
                color: r.hexColor,
                cards: r.chats,
              })
            )
          : e.jsx(Me, {}),
    })
  )
}
function Bt() {
  const { ativeCRM: s } = M(),
    [t, a] = p.useState()
  return (
    p.useEffect(() => {
      switch (s) {
        case "Abas":
          a(e.jsx(St, {}))
          break
        case "Etiquetas":
          a(e.jsx(Ot, {}))
          break
        default:
          a(e.jsx(Tt, {}))
          break
      }
    }, [s]),
    e.jsx(Pt, { children: t })
  )
}
const Ut = () => {
  const s = document.createElement("link")
  return (
    (s.rel = "stylesheet"),
    (s.type = "text/css"),
    (s.href = chrome.runtime.getURL(`label/css/${K.name}.css`)),
    document.head.appendChild(s),
    (document.querySelector("#title").innerHTML = K.name + " CRM"),
    e.jsx(e.Fragment, {
      children: e.jsx(Os, {
        children: e.jsx(Ds, {
          children: e.jsx(Ts, {
            children: e.jsx(Bs, {
              children: e.jsx(Us, {
                children: e.jsx(qs, {
                  children: e.jsx(Fs, {
                    children: e.jsx(zs, { children: e.jsx(Bt, {}) }),
                  }),
                }),
              }),
            }),
          }),
        }),
      }),
    })
  )
}
function qt() {
  const s = document.querySelector("#app")
  if (!s) throw new Error("Can not find #app")
  je(s).render(e.jsx(Ut, {}))
}
qt()
