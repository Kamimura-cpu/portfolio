"use client";

import Link from "next/link";
import { Wrench, BrainCircuit, Smartphone, Network, BadgeCheck, Briefcase, TrendingUp, Package, Cpu, Plane, Fish, MonitorSmartphone, Mountain, Tent, Bike } from "lucide-react";

export default function Home() {
  return (
    <div style={{ background: "#fff", color: "#111", minHeight: "100vh", fontFamily: "'Helvetica Neue', Arial, 'Hiragino Sans', sans-serif" }}>

      {/* Nav */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: "rgba(255,255,255,0.9)", backdropFilter: "blur(8px)",
        borderBottom: "1px solid #ebebeb",
      }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 32px", height: "56px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: "15px", fontWeight: 700 }}>KK</span>
          <div style={{ display: "flex", gap: "32px" }}>
            {[["About", "#about"], ["Projects", "#projects"], ["Skills", "#skills"], ["Hobbies", "#hobbies"], ["Contact", "#contact"]].map(([label, href]) => (
              <a key={label} href={href} style={{ fontSize: "14px", color: "#777", textDecoration: "none" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#111")}
                onMouseLeave={e => (e.currentTarget.style.color = "#777")}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "100px 32px 80px", maxWidth: "960px", margin: "0 auto" }}>
        <div style={{ flex: "1 1 55%" }}>
          <p style={eyebrow}>PORTFOLIO</p>
          <h1 style={{ fontSize: "clamp(48px, 8vw, 84px)", fontWeight: 200, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "24px" }}>
            Kamimura<br />Koga
          </h1>
          <p style={{ fontSize: "18px", color: "#888", letterSpacing: "0.1em", marginBottom: "12px" }}>上村 航我</p>
          <p style={{ fontSize: "15px", color: "#666", lineHeight: 1.9, marginBottom: "56px" }}>
            長野大学 企業情報学部 田中ゼミ / 個人事業主
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="#projects" style={{ padding: "12px 28px", background: "#111", color: "#fff", borderRadius: "4px", textDecoration: "none", fontSize: "14px" }}>Projects</a>
            <a href="https://techmate-repair.vercel.app/" target="_blank" rel="noopener noreferrer"
              style={{ padding: "12px 28px", border: "1px solid #ccc", color: "#111", borderRadius: "4px", textDecoration: "none", fontSize: "14px" }}>
              TechMate Repair ↗
            </a>
          </div>
        </div>
        <div style={{ flex: "1 1 45%", display: "flex", justifyContent: "flex-end" }}>
          <img
            src="/images/profile.png"
            alt="上村 航我"
            style={{ width: "320px", height: "320px", maxWidth: "100%", borderRadius: "50%", objectFit: "cover" }}
          />
        </div>
      </section>

      <HR />

      {/* About */}
      <section id="about" style={sec}>
        <div style={two}>
          <div>
            <img
              src="/images/profile.png"
              alt="上村 航我"
              style={{ width: "120px", height: "120px", borderRadius: "50%", objectFit: "cover", marginBottom: "24px" }}
            />
            <p style={eyebrow}>About</p>
            <h2 style={h2}>自己紹介</h2>
          </div>
          <div>
            <p style={body}>
              長野大学 企業情報学部 田中ゼミに所属。在学中から個人事業主として活動し、スマートフォン・PCの修理・売買事業「TechMate」を運営。
              ビジネスと技術を両軸で実践しながら、AR開発やローカルLLMの研究にも取り組んでいます。
            </p>
            <p style={{ ...body, marginTop: "16px" }}>
              課題を発見し、技術とビジネス視点で解決できる人材を目指しています。
            </p>
            <div style={{ marginTop: "48px", display: "flex", gap: "48px" }}>
              {[
                { v: "700万+", l: "売上実績", s: "2025年度", c: "#2a7a4e" },
                { v: "2年+",   l: "事業歴",   s: "個人事業", c: "#3a5fa8" },
                { v: "2件",    l: "資格取得", s: "電気・危険物", c: "#a05a1a" },
              ].map(({ v, l, s, c }) => (
                <div key={l}>
                  <p style={{ fontSize: "32px", fontWeight: 300, color: c, letterSpacing: "-0.02em" }}>{v}</p>
                  <p style={{ fontSize: "13px", color: "#444", marginTop: "4px", fontWeight: 600 }}>{l}</p>
                  <p style={{ fontSize: "12px", color: "#999" }}>{s}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <HR />

      {/* Projects */}
      <section id="projects" style={sec}>
        <p style={eyebrow}>Projects</p>
        <h2 style={{ ...h2, marginBottom: "56px" }}>主なプロジェクト</h2>
        {[
          {
            num: "01", color: "#c0392b", slug: "ar-museum",
            icon: <Smartphone size={20} strokeWidth={1.5} />,
            title: "AR博物館展示アプリ",
            period: "2023 — 2024",
            badge: "夢チャレンジ採択",
            desc: "iPhone の ObjectCapture で博物館展示物を3Dスキャン・AR化。来場者がスマートフォンでインタラクティブに体験できるアプリを1〜2年次にかけて開発。新技術を文化施設へ実装した。",
            tags: ["Swift", "ObjectCapture", "RealityKit", "iOS", "AR"],
          },
          {
            num: "02", color: "#2563a8", slug: "tameike-ai",
            icon: <BrainCircuit size={20} strokeWidth={1.5} />,
            title: "TAMEIKE AI",
            period: "2024 — 現在",
            badge: "研究中",
            desc: "長野大学の論文・研究データを学習させた独自LLMを構築。機密データも扱うため NVIDIA DGX Spark 上でローカル運用する構成を設計・実装。大学の知見をAIとして集約するプロジェクト。",
            tags: ["Local LLM", "DGX Spark", "Python", "データエンジニアリング"],
          },
          {
            num: "03", color: "#2a7a4e", slug: "techmate",
            icon: <Wrench size={20} strokeWidth={1.5} />,
            title: "TechMate リペアサービス",
            period: "2023 — 現在",
            badge: "運営中",
            desc: "スマートフォン・PCの修理・買い取り・販売・輸出を手掛ける個人事業。仕入れから販売まで一貫して運営し、2025年度はスマートフォン輸出が好調で売上700万円超を達成。",
            tags: ["修理・ネットワーク", "ビジネス運営", "輸出", "顧客対応"],
            externalLink: "https://techmate-repair.vercel.app/",
          },
        ].map((p, i, arr) => (
          <div key={p.num} style={{ display: "grid", gridTemplateColumns: "64px 1fr", gap: "32px", padding: "48px 0", borderBottom: i < arr.length - 1 ? "1px solid #ebebeb" : "none", alignItems: "start" }}>
            <div>
              <p style={{ fontSize: "24px", fontWeight: 700, color: p.color, fontFamily: "monospace" }}>{p.num}</p>
              <span style={{ display: "inline-block", marginTop: "12px", color: p.color }}>{p.icon}</span>
            </div>
            <div>
              {/* Thumbnail */}
              <Link href={`/projects/${p.slug}`} style={{ textDecoration: "none", display: "block", marginBottom: "20px" }}>
                <div style={{ borderRadius: "10px", overflow: "hidden", background: "#f5f5f5", paddingTop: "48%", position: "relative", border: "1px solid #ebebeb" }}>
                  <img
                    src={`/images/projects/${p.slug}/main.jpg`}
                    alt={p.title}
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                    onError={e => { e.currentTarget.parentElement!.style.display = "none"; }}
                  />
                </div>
              </Link>
              <div style={{ display: "flex", alignItems: "baseline", gap: "14px", flexWrap: "wrap", marginBottom: "4px" }}>
                <h3 style={{ fontSize: "22px", fontWeight: 600 }}>{p.title}</h3>
                <span style={{ fontSize: "13px", color: p.color, fontWeight: 600 }}>{p.badge}</span>
              </div>
              <p style={{ fontSize: "13px", color: "#aaa", marginBottom: "16px" }}>{p.period}</p>
              <p style={body}>{p.desc}</p>
              <div style={{ marginTop: "18px", display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
                {p.tags.map(t => (
                  <span key={t} style={{ fontSize: "12px", padding: "4px 12px", border: "1px solid #ddd", borderRadius: "999px", color: "#555" }}>{t}</span>
                ))}
                {"externalLink" in p && p.externalLink && (
                  <a href={p.externalLink} target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: "13px", color: "#111", textDecoration: "none", borderBottom: "1px solid #111", paddingBottom: "1px", marginLeft: "4px" }}>
                    サイトを見る ↗
                  </a>
                )}
                <Link href={`/projects/${p.slug}`}
                  style={{ fontSize: "13px", color: p.color, textDecoration: "none", borderBottom: `1px solid ${p.color}`, paddingBottom: "1px", marginLeft: "4px" }}>
                  詳細を見る →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      <HR />

      {/* Skills */}
      <section id="skills" style={sec}>
        <p style={eyebrow}>Skills</p>
        <h2 style={{ ...h2, marginBottom: "56px" }}>スキル・資格</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "48px 64px" }}>
          {[
            {
              title: "Business", color: "#7048b0",
              icon: <Briefcase size={16} strokeWidth={1.5} />,
              items: [
                { label: "仕入れ・在庫管理・販売", icon: <Package size={14} /> },
                { label: "スマートフォン・PC輸出", icon: <TrendingUp size={14} /> },
                { label: "顧客対応・出張サービス", icon: <Briefcase size={14} /> },
                { label: "個人事業の収支・税務管理", icon: <Briefcase size={14} /> },
              ],
            },
            {
              title: "Technical", color: "#2563a8",
              icon: <Cpu size={16} strokeWidth={1.5} />,
              items: [
                { label: "ローカルLLM 構築・運用", icon: <BrainCircuit size={14} /> },
                { label: "DGX Spark 環境構築", icon: <Cpu size={14} /> },
                { label: "ObjectCapture / AR 開発", icon: <Smartphone size={14} /> },
                { label: "Swift / iOS アプリ開発", icon: <Smartphone size={14} /> },
                { label: "PC・スマートフォン修理", icon: <Wrench size={14} /> },
                { label: "ネットワーク設定・対応", icon: <Network size={14} /> },
              ],
            },
            {
              title: "Certifications", color: "#a05a1a",
              icon: <BadgeCheck size={16} strokeWidth={1.5} />,
              items: [
                { label: "第二種電気工事士", icon: <BadgeCheck size={14} /> },
                { label: "危険物取扱者 乙種第4類", icon: <BadgeCheck size={14} /> },
              ],
            },
          ].map(g => (
            <div key={g.title}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
                <span style={{ color: g.color }}>{g.icon}</span>
                <p style={{ fontSize: "16px", fontWeight: 700, color: g.color, letterSpacing: "1px" }}>{g.title}</p>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {g.items.map(item => (
                  <li key={item.label} style={{ fontSize: "15px", color: "#333", padding: "11px 0", borderBottom: "1px solid #f0f0f0", display: "flex", gap: "10px", alignItems: "center" }}>
                    <span style={{ color: "#aaa", flexShrink: 0 }}>{item.icon}</span>
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <HR />

      {/* Hobbies */}
      <section id="hobbies" style={sec}>
        <p style={eyebrow}>Hobbies</p>
        <h2 style={{ ...h2, marginBottom: "48px" }}>趣味</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
          {[
            { label: "旅行",         slug: "travel",     icon: <Plane size={28} strokeWidth={1.2} />,            color: "#2563a8" },
            { label: "アクアリウム", slug: "aquarium",   icon: <Fish size={28} strokeWidth={1.2} />,             color: "#0e7f7f" },
            { label: "自作PC",       slug: "pc",         icon: <MonitorSmartphone size={28} strokeWidth={1.2} />, color: "#555" },
            { label: "釣り",         slug: "fishing",    icon: <Fish size={28} strokeWidth={1.2} />,             color: "#7a5a1a" },
            { label: "スキー・スノボ", slug: "ski", icon: <Mountain size={28} strokeWidth={1.2} />, color: "#3a6ea8" },
            { label: "キャンプ",     slug: "camping",    icon: <Tent size={28} strokeWidth={1.2} />,             color: "#3a6a3a" },
            { label: "バイク",       slug: "bike",       icon: <Bike size={28} strokeWidth={1.2} />,             color: "#8a3a1a" },
          ].map(({ label, slug, icon, color }) => (
            <HobbyCard key={label} label={label} slug={slug} icon={icon} color={color} />
          ))}
        </div>
      </section>

      <HR />

      {/* Contact */}
      <section id="contact" style={{ ...sec, textAlign: "center" }}>
        <p style={eyebrow}>Contact</p>
        <h2 style={{ ...h2, marginBottom: "16px" }}>お問い合わせ</h2>
        <p style={{ fontSize: "15px", color: "#666", marginBottom: "48px", lineHeight: 1.9 }}>
          就業・プロジェクト・コラボレーションなどお気軽にどうぞ。
        </p>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
          <a href="mailto:supaazusaexi@gmail.com"
            style={{ fontSize: "16px", color: "#111", textDecoration: "none", borderBottom: "1px solid #ccc", paddingBottom: "2px" }}>
            supaazusaexi@gmail.com
          </a>
          <a href="tel:08088801568"
            style={{ fontSize: "16px", color: "#111", textDecoration: "none", borderBottom: "1px solid #ccc", paddingBottom: "2px" }}>
            080-8880-1568
          </a>
        </div>
        <a href="https://techmate-repair.vercel.app/" target="_blank" rel="noopener noreferrer"
          style={{ padding: "14px 36px", background: "#111", color: "#fff", borderRadius: "4px", textDecoration: "none", fontSize: "14px" }}>
          TechMate から連絡する ↗
        </a>
      </section>

      <footer style={{ textAlign: "center", padding: "32px", fontSize: "13px", color: "#bbb", borderTop: "1px solid #ebebeb" }}>
        &copy; 2025 Kamimura Koga
      </footer>
    </div>
  );
}

/* ---- Shared styles ---- */
const sec: React.CSSProperties = { maxWidth: "960px", margin: "0 auto", padding: "96px 32px" };
const two: React.CSSProperties = { display: "grid", gridTemplateColumns: "1fr 2fr", gap: "64px", alignItems: "start" };
const h2: React.CSSProperties = { fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 300, letterSpacing: "-0.01em" };
const body: React.CSSProperties = { fontSize: "15px", color: "#444", lineHeight: 1.9 };
const eyebrow: React.CSSProperties = { fontSize: "13px", color: "#e07b54", letterSpacing: "3px", marginBottom: "14px", fontWeight: 700 };

function HR() {
  return <hr style={{ border: "none", borderTop: "1px solid #ebebeb", maxWidth: "960px", margin: "0 32px" }} />;
}

function HobbyCard({ label, slug, color }: { label: string; slug: string; icon: React.ReactNode; color: string }) {
  const src = `/images/hobbies/${slug}/main.jpg`;
  return (
    <Link href={`/hobbies/${slug}`} style={{ textDecoration: "none", color: "inherit", width: "200px", flexShrink: 0 }}>
      <div style={{ borderRadius: "12px", cursor: "pointer", border: "1px solid #e8e8e8", padding: "10px", background: "#fff" }}>
        <div style={{ position: "relative", paddingTop: "75%", background: "#f5f5f5", borderRadius: "8px", overflow: "hidden" }}>
          <img
            src={src}
            alt={label}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            onError={e => { e.currentTarget.style.display = "none"; }}
          />
        </div>
        <div style={{ padding: "10px 4px 4px" }}>
          <p style={{ fontSize: "15px", fontWeight: 600, color: color }}>{label}</p>
        </div>
      </div>
    </Link>
  );
}

