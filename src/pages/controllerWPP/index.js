var E = Object.defineProperty
var M = (e, a, t) =>
  a in e
    ? E(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (e[a] = t)
var _ = (e, a, t) => (M(e, typeof a != "symbol" ? a + "" : a, t), t)
WPPConfig = {
  deviceName: "WaTidy",
  liveLocationLimit: 10,
  disableGoogleAnalytics: !1,
  googleAnalyticsId: "G-ZYW97K5TDS",
  sendStatusToDevice: !0,
}
WPP.prependListener(
  "chat.new_message",
  (...e) => {
    window.postMessage(
      { type: "Ev", action: "chat.new_message", model: JSON.stringify(e[0]) },
      "*"
    )
  },
  { objectify: !0 }
)
WPP.on("chat.presence_change", (e) => {
  window.postMessage(
    { type: "Ev", action: "chat.presence_change", model: JSON.stringify(e) },
    "*"
  )
})
WPP.on("chat.update_label", (e) => {
  window.postMessage(
    { type: "Ev", action: "chat.update_label", model: JSON.stringify(e) },
    "*"
  )
})
const N = async (e) => {
  let a
  switch ((e == null ? void 0 : e.type) || e) {
    case "onlyUsers":
      a = await WPP.chat.list({ onlyUsers: !0 })
      break
    case "onlyGroups":
      a = await WPP.chat.list({ onlyGroups: !0 })
      break
    case "onlyCommunities":
      a = await WPP.chat.list({ onlyCommunities: !0 })
      break
    case "nao-lido":
      ;(a = await WPP.chat.list()),
        (a = a.filter((o) => o.__x_hasUnread && !o.archive))
      break
    case "1:1":
      ;(a = await WPP.chat.list()),
        (a = a.filter((o) => !o.isGroup && !o.archive))
      break
    case "getContatosGrupos":
      a = (await WPP.chat.list({ onlyGroups: !0 }))
        .find((o) => {
          if (o.__x_id.user === e.id) return o
        })
        .__x_groupMetadata.participants._models.filter(
          (o) => o.__x_id.server === "c.us"
        )
      break
    case "all":
    default:
      a = await WPP.chat.list()
      break
  }
  const t = []
  for (let s of a) {
    let i = {
      id: s.__x_id.user,
      labels: s.__x_labels || s.__x_contact.__x_labels,
      picture: s.picture,
      name:
        s.__x_contact.__x_displayName ||
        s.__x_contact.__x_name ||
        s.__x_contact.__x_pushname ||
        s.__x_contact.__x_shortName ||
        s.__x_contact.__x_verifiedName ||
        s.__x_contact.formattedName ||
        s.__x_formattedTitle ||
        s.__x_id.user,
    }
    t.push(i)
  }
  return t
}
async function P(e) {
  let a
  switch (e.action) {
    case "sendTxt":
      try {
        a = await WPP.chat.sendTextMessage(e.dados.id, e.dados.msg, {
          createChat: !0,
          detectMentioned: !0,
        })
      } catch (t) {
        a = t
      }
      break
    case "sendTextReplay":
      try {
        a = await WPP.chat.sendTextMessage(e.dados.id, e.dados.msg, {
          quotedMsg: e.dados.replayID,
          detectMentioned: !0,
        })
      } catch {
        a = !1
      }
      break
    case "sendDoc":
      try {
        a = await WPP.chat.sendFileMessage(e.dados.id, e.dados.base64, {
          createChat: !0,
          type: "document",
          filename: e.dados.name,
        })
      } catch {
        a = !1
      }
      break
    case "sendImage":
      try {
        a = await WPP.chat.sendFileMessage(e.dados.id, e.dados.base64, {
          createChat: !0,
          type: "image",
          caption: e.dados.msg,
        })
      } catch {
        a = !1
      }
      break
    case "sendVideo":
      try {
        a = await WPP.chat.sendFileMessage(e.dados.id, e.dados.base64, {
          createChat: !0,
          type: "video",
          caption: e.dados.msg,
        })
      } catch {
        a = !1
      }
      break
    case "sendAudio":
      try {
        a = await WPP.chat.sendFileMessage(e.dados.id, e.dados.base64, {
          createChat: !0,
          type: "audio",
          isPtt: !0,
        })
      } catch {
        a = !1
      }
      break
    case "sendContact":
      try {
        a = await WPP.chat.sendVCardContactMessage(e.dados.id, {
          id: e.dados.phone,
          name: e.dados.name,
        })
      } catch {
        a = !1
      }
      break
    case "arquivar":
      a = await WPP.chat.archive(e.dados)
      break
    case "openChatBottom":
      a = WPP.chat.openChatBottom(e.dados)
      break
    case "getActiveChat":
      if (((a = WPP.chat.getActiveChat()), !a)) return (a = void 0)
      e.dados === "@" ? (a = a.__x_id._serialized) : (a = a.__x_id.user)
      break
    case "List":
      a = await N(e.dados)
      break
    case "markIsComposing":
      a = await WPP.chat.markIsComposing(e.dados.id, e.dados.timer)
      break
    case "markIsRecording":
      a = await WPP.chat.markIsRecording(e.dados.id, e.dados.timer)
      break
    case "getMessages":
      a = await WPP.chat.getMessages(
        e.dados.id.length > 15 ? e.dados.id + "@g.us" : e.dados.id + "@c.us",
        { count: e.dados.quant }
      )
      break
    case "downloadMedia":
      a = await WPP.chat.downloadMedia(e.dados).then(WPP.util.blobToBase64)
      break
  }
  return a
}
async function L(e) {
  let a
  switch (e.action) {
    case "getMyUserId":
      ;(a = WPP.conn.getMyUserId()),
        e.dados === "@" ? (a = a._serialized) : (a = a.user)
      break
    case "joinWebBeta":
      a = await WPP.conn.joinWebBeta(!0)
      break
  }
  return a
}
const S = async (e) => {
  let a
  switch ((e == null ? void 0 : e.type) || e) {
    case "withLabels":
      a = await WPP.contact.list({ withLabels: [e.id] })
      break
    case "onlyMyContacts":
      a = await WPP.contact.list({ onlyMyContacts: !0 })
      break
    case "allLabels":
      a = []
      const s = await WPP.contact.list()
      for (let i of s) i.__x_labels.length !== 0 && a.push(i)
      break
    case "all":
    default:
      a = await WPP.contact.list()
      break
  }
  const t = []
  for (let s of a)
    if (s.id.server !== "lid") {
      let i = {
        labels: s.__x_labels,
        id: s.__x_id.user,
        name:
          s.__x_displayName ||
          s.__x_searchName ||
          s.__x_name ||
          s.__x_formattedTitle ||
          s.__x_id.user,
      }
      t.push(i)
    }
  return t
}
async function x(e) {
  let a
  switch (e.action) {
    case "List":
      a = await S(e.dados)
      break
    case "getProfilePictureUrl":
      a = await WPP.contact.getProfilePictureUrl(
        e.dados.length > 15 ? e.dados + "@g.us" : e.dados + "@c.us"
      )
      break
    case "queryExists":
      a = await WPP.contact.queryExists(e.dados)
      break
    case "getBusinessProfile":
      a = await WPP.contact.getBusinessProfile(e.dados)
      break
  }
  return a
}
async function I(e) {
  let a = "Error",
    t
  switch (
    ((t = await WPP.chat.list()),
    t.filter((s) => !s.archive).forEach((s) => (s.__x_shouldAppearInList = !0)),
    e.action)
  ) {
    case "tudo":
      a = "Success"
      break
    case "grupos":
      ;(t = await WPP.chat.list()),
        t
          .filter((o) => !o.isGroup && !o.archive)
          .forEach((o) => (o.__x_shouldAppearInList = !1)),
        (a = "Success")
      break
    case "nao-lido":
      ;(t = await WPP.chat.list()),
        t
          .filter((o) => !o.__x_hasUnread && !o.archive)
          .forEach((o) => (o.__x_shouldAppearInList = !1)),
        (a = "Success")
      break
    case "1:1":
      ;(t = await WPP.chat.list()),
        t
          .filter((o) => o.isGroup && !o.archive)
          .forEach((o) => (o.__x_shouldAppearInList = !1)),
        (a = "Success")
      break
    case "UserTabs":
      const s = e.dados
      ;(t = await WPP.chat.list()),
        t
          .filter((o) => !s.some((d) => d.id === o.id.user) && !o.archive)
          .forEach((o) => (o.__x_shouldAppearInList = !1)),
        (a = "Success")
      break
    case "UserLabels":
      const i = await WPP.chat.list({ withLabels: [e.dados] })
      ;(t = await WPP.chat.list()),
        t
          .filter((o) => !i.some((d) => d.id.user === o.id.user) && !o.archive)
          .forEach((o) => (o.__x_shouldAppearInList = !1)),
        (a = "Success")
      break
  }
  return a
}
async function A(e) {
  let a
  switch (e.action) {
    case "isBusiness":
      a = await WPP.profile.isBusiness()
      break
  }
  return a
}
async function p(e) {
  let a
  switch (e.action) {
    case "getAllLabels":
      let t = await WPP.labels.getAllLabels(),
        s = []
      for (let i of t)
        (i.color = 0),
          i.hexColor || (i.hexColor = "var(--terciaria)"),
          s.push(i)
      a = s
      break
    case "addOrRemoveLabels":
      a = await WPP.labels.addOrRemoveLabels(e.dados.id, e.dados.label)
      break
  }
  return a
}
const D = (e) => {
    if (!e) return "Desconhecido"
    const a = e.slice(0, 2),
      t = e.slice(2, 4),
      s = e.slice(4, 9),
      i = e.slice(9)
    return `+${a} ${t} ${s}-${i}`
  },
  O = async (e) => {
    function a(i) {
      if (!e) return
      const o = i.slice(0, 2),
        d = i.slice(2, 4),
        c = i.slice(4, 9),
        n = i.slice(9)
      return `+${o} ${d} ${c}-${n}`
    }
    const t = await WPP.contact.list()
    let s = { name: a(e), labels: [], number: "" }
    for (let i of t)
      if (i.__x_id.user == e || i.__x_id._serialized == e) {
        s = {
          name:
            i.__x_displayName ||
            i.__x_name ||
            i.__x_verifiedName ||
            i.__x_shortName ||
            i.__x_pushname ||
            a(e),
          labels: i.__x_labels,
          number: a(e),
        }
        break
      }
    return s
  },
  R = async (e) => {
    const a = await WPP.contact.list()
    for (let t of e) {
      const s = a.find((i) => i.__x_id.user === t.id)
      s &&
        ((s.name = t == null ? void 0 : t.name),
        (s.searchName = t == null ? void 0 : t.name),
        (s.searchVerifiedName = t == null ? void 0 : t.name),
        (s.verifiedName = t == null ? void 0 : t.name))
    }
  },
  T = async (e) => {
    const t = (await WPP.contact.list()).find((s) => s.__x_id.user === e.id)
    t &&
      ((t.name = e.name),
      (t.searchName = e.name),
      (t.searchVerifiedName = e.name),
      (t.verifiedName = e.name))
  },
  F = async (e) => {
    var s
    const t = (await WPP.chat.list()).find((i) => i.__x_id.user === e)
    return (s = t == null ? void 0 : t.__x_draftMessage) == null
      ? void 0
      : s.text
  },
  U = async (e) => {
    const t = (await WPP.chat.list()).find((s) => s.__x_id.user === e)
    return (
      t &&
        t.__x_draftMessage &&
        t.__x_draftMessage.text &&
        (t.__x_draftMessage.text = void 0),
      !0
    )
  },
  B = async (e) => {
    const a = (c) => {
        if (!e) return
        const n = c.slice(0, 2),
          l = c.slice(2, 4),
          u = c.slice(4, 9),
          f = c.slice(9)
        return `+${n} ${l} ${u}-${f}`
      },
      t = (c, n) => n.filter((l) => c.includes(l.id)),
      s = await WPP.contact.list(),
      i = await WPP.labels.getAllLabels(),
      o = []
    for (let c of i)
      (c.color = 0), c.hexColor || (c.hexColor = "var(--terciaria)"), o.push(c)
    let d = {
      id: e,
      name: a(e),
      labels: [],
      number: a(e),
      picture: await WPP.contact.getProfilePictureUrl(
        e.length > 15 ? e + "@g.us" : e + "@c.us"
      ),
    }
    for (let c of s) {
      const {
        __x_id: n,
        __x_displayName: l,
        __x_name: u,
        __x_pushname: f,
        __x_shortName: k,
        __x_verifiedName: C,
        __x_labels: W,
      } = c
      if (n.user === e || n._serialized === e) {
        d = {
          id: e,
          name: l || u || C || k || f || a(e),
          labels: t(W, o),
          number: d.number,
          picture: d.picture,
        }
        break
      }
    }
    return d
  },
  $ = async (e) => {
    const a = await WPP.contact.list(),
      t = []
    for (let s of e) {
      const i = a.find((o) => o.id.user === s.id)
      i &&
        t.push({
          ...s,
          name:
            i.__x_displayName ||
            i.__x_name ||
            i.__x_shortName ||
            i.__x_verifiedName ||
            i.__x_pushname ||
            D(s.id),
          labels: i.__x_labels,
        })
    }
    return t
  }
async function v(e) {
  let a
  switch (e.action) {
    case "getContato":
      a = await O(e.dados)
      break
    case "contatoInit":
      a = await R(e.dados)
      break
    case "contatoSave":
      a = await T(e.dados)
      break
    case "loadPictureChat":
      const t = await WPP.chat.list()
      for (let n = 0; n < t.length; n++) {
        if (t[n].picture) return
        t[n].picture = await WPP.contact.getProfilePictureUrl(
          t[n].__x_id._serialized
        )
      }
      a = "Success"
      break
    case "getListContact":
      const s = await WPP.chat.list(),
        i = []
      for (let n of s) {
        let l = {
          picture: n.picture,
          labels: n.__x_labels,
          id: n.__x_id.user,
          name:
            n.__x_contact.__x_displayName ||
            n.__x_contact.__x_searchName ||
            n.__x_name ||
            n.__x_formattedTitle,
        }
        i.push(l)
      }
      a = i
      break
    case "listGroupParticipants":
      const o = await WPP.chat.list({ onlyGroups: !0 }),
        d = (n) => {
          const l = []
          for (let u of n) {
            let f = {
              labels: u.__x_labels,
              id: u.__x_id.user,
              name:
                u.__x_displayName ||
                u.__x_searchName ||
                u.__x_name ||
                u.__x_formattedTitle ||
                u.__x_id.user,
            }
            l.push(f)
          }
          return l
        },
        c = []
      for (let n of o) {
        let l = {
          participants: d(n.__x_groupMetadata.participants._models),
          labels: n.__x_labels,
          id: n.__x_id.user,
          name:
            n.__x_contact.__x_displayName ||
            n.__x_contact.__x_searchName ||
            n.__x_name ||
            n.__x_formattedTitle,
        }
        c.push(l)
      }
      a = c
      break
    case "rascunho":
      a = await F(e.dados)
      break
    case "rascunho-clear":
      a = await U(e.dados)
      break
    case "get-card":
      a = await B(e.dados)
      break
    case "get-crmContatos":
      a = await $(e.dados)
      break
    default:
      a = "Error tipo desconhecido"
      break
  }
  return a
}
async function z(e) {
  const a = r.active.config
  if ((a.arquivar && P({ action: "arquivar", dados: e.id }), a.removeLabels)) {
    const { labels: t } = await v({ action: "getContato", dados: e.id })
    if (t.length !== 0) {
      const s = t.map((i) => ({ labelId: i, type: "remove" }))
      await p({ action: "addOrRemoveLabels", dados: { id: e.id, label: s } })
    }
  }
  a.insertLabel &&
    a.labelID.length !== 0 &&
    p({
      action: "addOrRemoveLabels",
      dados: { id: e.id, label: [{ labelId: a.labelID, type: "add" }] },
    }),
    (a.removeCRM || a.insertCRM) &&
      window.postMessage(
        {
          channel: "EnvioEmMassa",
          model: JSON.stringify({
            type: "update-crm",
            id: e.id.includes("@g.us")
              ? e.id.replace("@g.us", "")
              : e.id.includes("@c.us")
              ? e.id.replace("@c.us", "")
              : e.id,
            removeCRM: a.removeCRM,
            insertCRM: a.insertCRM,
            crmID: a.crmID,
            abaID: a.abaID,
          }),
        },
        "*"
      )
}
function h(e, a) {
  const t = () => {
      const d = [
          "Olá, tudo bem?",
          "Olá, tudo bom?",
          "Oi, tudo bem?",
          "Oi, tudo bom?",
          "E ai, tudo bem?",
          "E ai, tudo bom?",
        ],
        c = Math.floor(Math.random() * d.length)
      return d[c]
    },
    s = () => {
      const c = new Date().getHours()
      let n
      return (
        c >= 6 && c < 12
          ? (n = "Bom dia")
          : c >= 12 && c < 18
          ? (n = "Boa tarde")
          : (n = "Boa noite"),
        n
      )
    }
  try {
    ;(a = a.replaceAll("#saudação", t)),
      (a = a.replaceAll("#periodo-dia", s)),
      (a = a.replaceAll("#primeiroNome", e.name.split(" ")[0])),
      (a = a.replaceAll("#nome", e.name)),
      (a = a.replaceAll(
        "#numero",
        e.id.replace("@g.us", "").replace("@c.us", "")
      ))
  } catch {
    console.error("Erro ao validar existência de uma variável")
  }
  for (var i in e)
    if (e.hasOwnProperty(i)) {
      var o = e[i]
      a = a.replaceAll("#" + i, o)
    }
  return a
}
const g = (e, a) => {
  const t = {
    id: r.index,
    nome: a.name,
    phone: a.id.includes("@g.us")
      ? a.id.replace("@g.us", "")
      : a.id.includes("@c.us")
      ? a.id.replace("@c.us", "")
      : a.id,
    status: "Erro",
    hora: Date.now(),
  }
  e
    ? ((t.status = "Enviado"),
      r.updateContatos("success", r.contatos.success + 1),
      z(a))
    : ((t.status = "Erro"), r.updateContatos("erro", r.contatos.erro + 1)),
    window.postMessage(
      {
        channel: "EnvioEmMassa",
        model: JSON.stringify({
          type: "dados-send",
          send: t,
          campanha: r.contatos,
          index: r.index,
          id: r.id,
        }),
      },
      "*"
    ),
    r.updateIndex()
}
async function G() {
  const e = r.active.chats[0]
  if (
    ((e.id = e.id + (e.id.length > 16 ? "@g.us" : "@c.us")),
    window.postMessage(
      {
        channel: "EnvioEmMassa",
        model: JSON.stringify({
          type: "info",
          status: r.estado,
          info: `Enviando para ${e.name}`,
        }),
      },
      "*"
    ),
    e.imported && !(await x({ action: "queryExists", dados: e.id })))
  ) {
    g(!1, e)
    return
  }
  let a = !0
  for (let t of r.active.script) {
    let s
    switch (t.type) {
      case "txt":
        s = { action: "sendTxt", dados: { id: e.id, msg: h(e, t.mensagem) } }
        break
      case "image":
        s = {
          action: "sendImage",
          dados: { id: e.id, base64: t.base64, msg: h(e, t.mensagem) },
        }
        break
      case "video":
        s = {
          action: "sendVideo",
          dados: { id: e.id, base64: t.base64, msg: h(e, t.mensagem) },
        }
        break
      case "audio":
        s = { action: "sendAudio", dados: { id: e.id, base64: t.base64 } }
        break
      case "contact":
        s = {
          action: "sendContact",
          dados: { id: e.id, phone: t.phone, name: t.name },
        }
        break
      default:
      case "doc":
        s = {
          action: "sendDoc",
          dados: { id: e.id, base64: t.base64, name: t.base64Name },
        }
        break
    }
    let i = await P(s)
    ;(!i || !i.id) && (a = !1)
  }
  g(a, e)
}
const J = "CampanhaAndamentoDB",
  m = "CampanhaAndamento"
async function j(e) {
  return new Promise((a, t) => {
    const s = indexedDB.open(J, 1)
    ;(s.onerror = function (i) {
      console.error("Erro ao abrir o banco de dados."),
        t("Erro ao abrir o banco de dados.")
    }),
      (s.onupgradeneeded = function (i) {
        i.target.result.createObjectStore(m, {
          keyPath: "id",
          autoIncrement: !0,
        })
      }),
      (s.onsuccess = function (i) {
        const o = i.target.result,
          c = o.transaction([m], "readwrite").objectStore(m)
        c.clear()
        const n = c.add(e)
        ;(n.onsuccess = function () {
          a(!0), o.close()
        }),
          (n.onerror = function () {
            console.error("Worker Erro ao salvar os dados da camapanha."), a(!1)
          })
      })
  })
}
async function b(e) {
  await j(e ? [] : r)
}
async function y() {
  if (
    (r.index % parseInt(r.active.config.pausa) == 0 && r.index > 0
      ? (window.postMessage({
          channel: "EnvioEmMassa",
          model: JSON.stringify({
            type: "info",
            status: r.estado,
            info: `Em pausa de envio por ${r.active.config.tempoPausa} segundos`,
          }),
        }),
        await w(parseInt(r.active.config.tempoPausa) * 1e3))
      : (window.postMessage({
          channel: "EnvioEmMassa",
          model: JSON.stringify({
            type: "info",
            status: r.estado,
            info: `Em intervalo de envio por ${r.active.config.intervalo} segundos`,
          }),
        }),
        await w(parseInt(r.active.config.intervalo) * 1e3)),
    await G(),
    await b(!1),
    r.active.chats[0] === void 0 || r.estado === "Finalized")
  ) {
    ;(r.estado = "Finalized"),
      window.postMessage({
        channel: "EnvioEmMassa",
        model: JSON.stringify({
          type: "info",
          status: "Finalized",
          info: "Envio das mensagens finalizado",
        }),
      }),
      r.cleanSender(),
      await b(!0)
    return
  }
  switch (r.estado) {
    case "Paused-Process":
      ;(r.estado = "Paused"),
        window.postMessage({
          channel: "EnvioEmMassa",
          model: JSON.stringify({
            type: "info",
            status: "Paused",
            info: "Envio das mensagens Pausado ",
          }),
        })
      break
    case "Canceled":
      await b(!0), r.cleanSender()
      break
    case "Atived":
      y()
      break
  }
}
function w(e) {
  return new Promise((a) => setTimeout(a, e))
}
class V {
  constructor() {
    _(this, "id")
    _(this, "active")
    _(this, "estado", "Finalized")
    _(this, "sessionSend")
    _(this, "index")
    _(this, "contatos")
    ;(this.id = 0),
      (this.active = {
        script: [],
        chats: [],
        config: {
          intervalo: "10",
          pausa: "10",
          tempoPausa: "60",
          arquivar: !1,
          removeLabels: !1,
          insertLabel: !1,
          labelID: "",
          removeCRM: !1,
          insertCRM: !1,
          crmID: "abas",
          abaID: "",
        },
      }),
      (this.index = 0),
      (this.sessionSend = 0),
      (this.contatos = { total: 0, erro: 0, success: 0 })
  }
  updateEstado(a) {
    this.estado = a
  }
  updateIndex() {
    ;(this.index = this.index + 1), this.active.chats.shift()
  }
  updateSessionSend(a) {
    this.sessionSend = a
  }
  updateContatos(a, t) {
    this.contatos = { ...this.contatos, [a]: t }
  }
  startEnvio() {
    ;(this.estado = "Atived"), y()
  }
  cleanSender() {
    ;(this.id = 0),
      (this.active = {
        script: [],
        chats: [],
        config: {
          intervalo: "10",
          pausa: "10",
          tempoPausa: "60",
          arquivar: !1,
          removeLabels: !1,
          insertLabel: !1,
          labelID: "",
          removeCRM: !1,
          insertCRM: !1,
          crmID: "abas",
          abaID: "",
        },
      }),
      (this.index = 0),
      (this.sessionSend = 0),
      (this.contatos = { total: 0, erro: 0, success: 0 }),
      (this.estado = "Finalized")
  }
  Rebooted(a) {
    ;(this.id = a.id),
      (this.active = a.active),
      (this.index = a.index),
      (this.sessionSend = a.sessionSend),
      (this.contatos = a.contatos),
      (this.estado = "Paused")
  }
}
const r = new V()
async function H(e) {
  var s
  const a = (s = e.dados) == null ? void 0 : s.envio
  let t
  switch (e.action) {
    case "Started":
      r.cleanSender(),
        (r.active = a),
        (r.id = Date.now()),
        r.updateContatos("total", a.chats.length),
        r.startEnvio(),
        (t = !0)
      break
    case "Rebooted":
      r.Rebooted(a), (t = !0)
      break
    case "Paused":
      r.updateEstado("Paused-Process")
      break
    case "Continued":
      r.startEnvio()
      break
    case "Canceled":
      r.updateEstado("Canceled")
      break
    default:
      t = "Error tipo desconhecido"
      break
  }
  return t
}
window.addEventListener("message", async function (e) {
  if (e.source === window.parent && e.data.model === "WPP") {
    let a
    switch (e.data.type) {
      case "Chat":
        a = await P(e.data)
        break
      case "Contact":
        a = await x(e.data)
        break
      case "Conn":
        a = await L(e.data)
        break
      case "ListChat":
        a = await I(e.data)
        break
      case "Profile":
        a = await A(e.data)
        break
      case "Labels":
        a = await p(e.data)
        break
      case "Utils":
        a = await v(e.data)
        break
      case "EnvioEmMassa":
        a = await H(e.data)
        break
      default:
        a = "Error tipo desconhecido"
        break
    }
    a == null ? (a = JSON.stringify("undefined")) : (a = JSON.stringify(a)),
      window.parent.postMessage(
        { type: "WPP", id: e.data.id, response: a },
        "*"
      )
  }
})
