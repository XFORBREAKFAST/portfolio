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
  tools: ["After Effects", "Premiere Pro", "Illustrator", "Photoshop"],
  steps: [
    { title: "Brief", desc: "Ngobrolin tujuan, penonton, dan referensi." },
    { title: "Konsep", desc: "Susun alur, naskah, dan contoh gaya visual." },
    { title: "Produksi", desc: "Edit dan animasi, timing diselaraskan dengan musik." },
    { title: "Revisi & kirim", desc: "Dirapikan sesuai masukan, diekspor sesuai platform." }
  ],
  contact: {
    heading: "Punya ide video? Yuk kerjain bareng.",
    text: "Ceritain project kamu lewat salah satu kontak di bawah.",
    email: "", instagram: "", whatsapp: "", youtube: ""
  }
};

window.CATS = { video: "Video", info: "Infografis", logo: "Logo & UI" };

// Baca link YouTube / Google Drive / file video jadi thumbnail + embed
window.parseMedia = function (url) {
  url = (url || "").trim();
  if (!url) return null;
  let m = url.match(/(?:youtu\.be\/|[?&]v=|shorts\/|embed\/|live\/)([\w-]{11})/);
  if (m) {
    const id = m[1];
    return {
      type: "youtube", id,
      thumbs: [`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`, `https://i.ytimg.com/vi/${id}/hqdefault.jpg`],
      thumbsPortrait: [`https://i.ytimg.com/vi/${id}/oardefault.jpg`, `https://i.ytimg.com/vi/${id}/hqdefault.jpg`],
      embed: `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1&modestbranding=1`
    };
  }
  m = url.match(/drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?id=)([\w-]+)/);
  if (m) {
    const id = m[1];
    const t = [`https://drive.google.com/thumbnail?id=${id}&sz=w1280`];
    return { type: "drive", id, thumbs: t, thumbsPortrait: t, embed: `https://drive.google.com/file/d/${id}/preview` };
  }
  if (/\.(mp4|webm|mov)(\?|$)/i.test(url)) return { type: "file", thumbs: [], thumbsPortrait: [], embed: url };
  return { type: "link", thumbs: [], thumbsPortrait: [], embed: url };
};
