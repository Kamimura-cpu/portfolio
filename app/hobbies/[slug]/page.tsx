"use client";

import Link from "next/link";
import { useEffect, useState, use } from "react";

const hobbies: Record<string, { label: string; color: string; galleryCount: number }> = {
  travel:    { label: "旅行",         color: "#2563a8", galleryCount: 6 },
  aquarium:  { label: "アクアリウム", color: "#0e7f7f", galleryCount: 6 },
  pc:        { label: "自作PC",       color: "#555",    galleryCount: 6 },
  fishing:   { label: "釣り",         color: "#7a5a1a", galleryCount: 6 },
  ski:       { label: "スキー・スノボ", color: "#3a6ea8", galleryCount: 6 },
  camping:   { label: "キャンプ",     color: "#3a6a3a", galleryCount: 6 },
  bike:      { label: "バイク",       color: "#8a3a1a", galleryCount: 6 },
};

function GalleryImage({ src, alt }: { src: string; alt: string }) {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div style={{ borderRadius: "8px", overflow: "hidden", background: "#f5f5f5", paddingTop: "75%", position: "relative" }}>
      <img
        src={src}
        alt={alt}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        onError={() => setVisible(false)}
      />
    </div>
  );
}

export default function HobbyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const hobby = hobbies[slug];

  if (!hobby) {
    return (
      <div style={{ padding: "120px 32px", textAlign: "center", fontFamily: "sans-serif" }}>
        <p>Not found</p>
        <Link href="/#hobbies">← Back</Link>
      </div>
    );
  }

  const mainSrc = `/images/hobbies/${slug}/main.jpg`;
  const gallerySrcs = Array.from({ length: hobby.galleryCount }, (_, i) => `/images/hobbies/${slug}/${i + 1}.jpg`);

  return (
    <div style={{ background: "#fff", color: "#111", minHeight: "100vh", fontFamily: "'Helvetica Neue', Arial, 'Hiragino Sans', sans-serif" }}>
      {/* Nav */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: "rgba(255,255,255,0.9)", backdropFilter: "blur(8px)",
        borderBottom: "1px solid #ebebeb",
      }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 32px", height: "56px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ fontSize: "15px", fontWeight: 700, textDecoration: "none", color: "#111" }}>KK</Link>
          <Link href="/#hobbies" style={{ fontSize: "14px", color: "#777", textDecoration: "none" }}>← Hobbies</Link>
        </div>
      </nav>

      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "96px 32px 100px" }}>
        {/* Header */}
        <p style={{ fontSize: "13px", color: hobby.color, letterSpacing: "3px", marginBottom: "12px", fontWeight: 700 }}>HOBBIES</p>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 300, letterSpacing: "-0.02em", marginBottom: "48px" }}>
          {hobby.label}
        </h1>

        {/* Hero image */}
        <HeroImage src={mainSrc} alt={hobby.label} />

        {/* Gallery */}
        <GallerySection srcs={gallerySrcs} alt={hobby.label} />
      </div>

      <footer style={{ textAlign: "center", padding: "32px", fontSize: "13px", color: "#bbb", borderTop: "1px solid #ebebeb" }}>
        &copy; 2025 Kamimura Koga
      </footer>
    </div>
  );
}

function HeroImage({ src, alt }: { src: string; alt: string }) {
  const [visible, setVisible] = useState(true);
  return (
    <div style={{ marginBottom: "48px", borderRadius: "12px", overflow: "hidden", background: "#f5f5f5", paddingTop: visible ? "52%" : "0", position: "relative", minHeight: visible ? undefined : "0" }}>
      {visible && (
        <img
          src={src}
          alt={alt}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          onError={() => setVisible(false)}
        />
      )}
    </div>
  );
}

function GallerySection({ srcs, alt }: { srcs: string[]; alt: string }) {
  const [loaded, setLoaded] = useState<string[]>([]);

  useEffect(() => {
    const check = async () => {
      const results: string[] = [];
      for (const src of srcs) {
        await new Promise<void>(resolve => {
          const img = new Image();
          img.onload = () => { results.push(src); resolve(); };
          img.onerror = () => resolve();
          img.src = src;
        });
      }
      setLoaded(results);
    };
    check();
  }, [srcs]);

  if (loaded.length === 0) return null;

  return (
    <div>
      <p style={{ fontSize: "12px", letterSpacing: "3px", color: "#aaa", marginBottom: "24px", fontWeight: 600 }}>GALLERY</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px" }}>
        {loaded.map(src => (
          <GalleryImage key={src} src={src} alt={alt} />
        ))}
      </div>
    </div>
  );
}
