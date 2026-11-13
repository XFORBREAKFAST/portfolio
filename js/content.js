// Isi bawaan website. Dipakai kalau database Firebase masih kosong.
// Setelah kamu simpan dari /admin, isi dari database yang dipakai.
window.DEFAULT_CONTENT = {
  hero: {
    status: "Terbuka untuk project baru",
    title1: "Video editor &",
    title2: "motion graphic",
    title3: "animator.",
    lead: "Halo, aku Dzaky. Aku bantu brand dan kreator bikin video yang enak ditonton: dari reels & TikTok, video landscape, sampai animasi infografis dan logo."
  },
  facts: [
    { title: "Video & Motion", sub: "Edit + animasi" },
    { title: "9:16 · 16:9 · 1:1", sub: "Semua format" },
    { title: "Indonesia", sub: "Kerja remote" }
  ],
  showreel: { title: "Showreel 2026", url: "", duration: "1:12", thumb: "" },
  services: [
    { title: "Reels & TikTok", desc: "Video vertikal yang cepat, rapi, dan pas sama tren.", shape: "portrait" },
    { title: "Video Landscape", desc: "YouTube, event recap, iklan, dan video brand.", shape: "landscape" },
    { title: "Infografis", desc: "Data dan penjelasan yang ribet jadi gampang dipahami.", shape: "square" },
    { title: "Logo & UI Motion", desc: "Animasi logo, company profile, dan demo aplikasi.", shape: "circle" }
  ],
  reels: [
    { title: "Promo Kafe", url: "", duration: "0:28", thumb: "" },
    { title: "Review Skincare", url: "", duration: "0:15", thumb: "" },
    { title: "Tips Singkat", url: "", duration: "0:32", thumb: "" },
    { title: "Behind the Scene", url: "", duration: "0:22", thumb: "" },
    { title: "Konten Kuliner", url: "", duration: "0:18", thumb: "" },
    { title: "Launching Produk", url: "", duration: "0:25", thumb: "" },
    { title: "Event Highlight", url: "", duration: "0:30", thumb: "" },
    { title: "Info Edukasi", url: "", duration: "0:40", thumb: "" }
  ],
  works: [
    { title: "Company Profile Perusahaan", cat: "logo", url: "", duration: "2:10", thumb: "" },
    { title: "Infografis Laporan Tahunan", cat: "info", url: "", duration: "0:45", thumb: "" },
    { title: "Video Recap Event", cat: "video", url: "", duration: "1:40", thumb: "" },
    { title: "Animasi Logo Brand", cat: "logo", url: "", duration: "0:08", thumb: "" },
    { title: "Iklan Produk", cat: "video", url: "", duration: "0:30", thumb: "" },
    { title: "Explainer Aplikasi", cat: "info", url: "", duration: "1:05", thumb: "" }
  ],
  about: {
    quote: "Buatku, video yang bagus itu yang *enak diikuti*: ritmenya pas, gerakannya punya alasan, dan pesannya nyampe.",
    bio: "Aku Dzaky Arif Muttaqin, video editor dan motion graphic animator. Aku ngerjain konten pendek untuk media sosial sampai animasi untuk presentasi dan company profile."
  },
  tools: ["After Effects", "Premiere Pro", "Illustrator", "Photoshop", "CapCut", "Canva"],
  steps: [
    { title: "Brief", desc: "Ngobrolin tujuan, penonton, dan referensi." },
    { title: "Konsep", desc: "Susun alur, naskah, dan contoh gaya visual." },
    { title: "Produksi", desc: "Edit dan animasi, timing diselaraskan dengan musik." },
    { title: "Revisi & kirim", desc: "Dirapikan sesuai masukan, diekspor sesuai platform." }
  ],
  settings: { cloudName: "", uploadPreset: "" },
  watermark: { on: "off", type: "pattern", text: "dzakyarif.my.id", logo: "", pattern: "", density: "mid", pos: "south_east", opacity: "40", size: "22" },
  contact: {
    heading: "Punya ide video? Yuk kerjain bareng.",
    text: "Ceritain project kamu lewat salah satu kontak di bawah.",
    email: "", instagram: "", whatsapp: "", youtube: ""
  }
};

window.CATS = { video: "Video", info: "Infografis", logo: "Logo & UI" };

// Baca link YouTube / Google Drive / file video jadi thumbnail + embed
// watermark Cloudinary (teks atau logo), ditempel lewat URL, file asli nggak berubah
window.WM = null;
window.wmLayer = function (wm) {
  wm = wm || window.WM;
  if (!wm || wm.on !== "on") return "";
  const o = Math.max(10, Math.min(100, +wm.opacity || 60));
  const w = Math.max(5, Math.min(60, +wm.size || 22)) / 100;
  const g = wm.pos || "south_east";
  const off = g === "center" ? "" : ",x_0.04,y_0.04";
  let layer;
  const pid = (u) => { const m = (u || "").match(/\/image\/upload\/(?:[^/]+\/)*?(?:v\d+\/)?([^.]+)\.[a-z0-9]+$/i); return m ? m[1].replace(/\//g, ":") : ""; };
  if (wm.type === "pattern") {
    const id = pid(wm.pattern);
    if (!id) return "";
    // satu gambar pola transparan, dibentangkan menutup seluruh video
    return `/l_${id},o_${o}/c_fill,fl_relative,w_1.0,h_1.0/fl_layer_apply,g_center`;
  }
  if (wm.type === "logo" && wm.logo) {
    const m = wm.logo.match(/\/image\/upload\/(?:[^/]+\/)*?(?:v\d+\/)?([^.]+)\.[a-z0-9]+$/i);
    if (!m) return "";
    layer = `l_${m[1].replace(/\//g, ":")},o_${o}`;
  } else {
    const t = (wm.text || "").trim();
    if (!t) return "";
    const enc = encodeURIComponent(t).replace(/%2C/gi, "%252C").replace(/%2F/gi, "%252F");
    layer = `l_text:Arial_80_bold:${enc},co_white,o_${o}`;
  }
  return `/${layer}/c_scale,fl_relative,w_${w}/fl_layer_apply,g_${g}${off}`;
};
window.parseMedia = function (url, wm) {
  url = (url || "").trim();
  if (!url) return null;
  let m = url.match(/(?:youtu\.be\/|[?&]v=|shorts\/|embed\/|live\/)([\w-]{11})/);
  if (m) {
    const id = m[1];
    return {
      type: "youtube", id,
      thumbs: [`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`, `https://i.ytimg.com/vi/${id}/hqdefault.jpg`],
      thumbsPortrait: [`https://i.ytimg.com/vi/${id}/oardefault.jpg`, `https://i.ytimg.com/vi/${id}/hqdefault.jpg`],
      embed: `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1&iv_load_policy=3&color=white`
    };
  }
  m = url.match(/drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?id=)([\w-]+)/);
  if (m) {
    const id = m[1];
    const t = [`https://drive.google.com/thumbnail?id=${id}&sz=w1280`];
    return { type: "drive", id, thumbs: t, thumbsPortrait: t, embed: `https://drive.google.com/file/d/${id}/preview` };
  }
  // video upload Cloudinary: bisa dipotong & dikompres lewat URL
  m = url.match(/^(https:\/\/res\.cloudinary\.com\/[^/]+\/video\/(?:upload|private|authenticated)\/)(.+)$/);
  if (m) {
    // buang tanda tangan & transformasi lama dari link, sisakan versi + nama file
    const base = m[1], rest = m[2].replace(/^s--[^/]+--\//, "").replace(/^(?:[a-z]{1,3}_[^/]+\/)+/, "");
    const noExt = rest.replace(/\.[a-z0-9]+$/i, "");
    const t = (tr, ext) => `${base}${tr}/${ext ? noExt + "." + ext : rest}`;
    const L = window.wmLayer(wm);
    return {
      type: "file", cloud: true, wm: !!L,
      plain: L ? null : t("q_auto", "mp4"),
      thumbs: [t("so_1,w_1280,q_auto", "jpg")],
      thumbsPortrait: [t("so_1,w_720,q_auto", "jpg")],
      preview: t("w_960,q_auto:eco,du_12,ac_none" + L, "mp4"),
      previewPortrait: t("w_400,q_auto:eco,du_8,ac_none" + L, "mp4"),
      embed: t("q_auto" + L, "mp4"),
      wmFrame: t("so_1,w_960,q_auto" + L, "jpg")
    };
  }
  if (/\.(mp4|webm|mov)(\?|$)/i.test(url)) return { type: "file", thumbs: [], thumbsPortrait: [], preview: url, previewPortrait: url, embed: url };
  return { type: "link", thumbs: [], thumbsPortrait: [], embed: url };
};
