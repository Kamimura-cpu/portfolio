"use client";

import Link from "next/link";
import { useState, useEffect, use } from "react";

const projects: Record<string, Project> = {
  "ar-museum": {
    num: "01",
    color: "#c0392b",
    title: "AR博物館展示アプリ",
    period: "2023 — 2024",
    badge: "夢チャレンジ採択",
    tags: ["Swift", "Object Capture API", "LiDAR", "iOS", "AR"],
    overview: "茅野市八ヶ岳総合博物館と連携し、館内の剥製標本やバックヤードに保管された非公開展示物をスマートフォンで3D AR鑑賞できるアプリを開発。ガラス越しの平面展示にインタラクティブな要素を加え、来館者に新しい展示体験を提供することを目的としました。",
    background: "博物館の展示物は通常ガラス越しに見るだけで、実際の大きさや質感を体感しにくい状況があります。また、バックヤードに保管された標本は来館者の目に触れる機会すらありません。こうした展示の制約を、誰もが持つスマートフォンとAR技術で解決できないかと考えたことがきっかけです。",
    role: "3Dスキャン・モデル計測を中心に、資金調達（助成制度の申請・獲得）、チームマネジメント、タスク管理、博物館との外部折衝を担当。実装はチームで分担しながら進めました。",
    challenge: "AR品質の確保のため、サードパーティ製ゲームエンジンは使わずApple純正のObject Capture APIとSwiftのみで実装。iOSデバイスに最適化したシームレスなAR体験を実現しています。また、スキャン精度を高めるため、事前に札幌・鹿児島の埋蔵文化財センターへ赴き現地調査を実施。そこで得たノウハウをもとに、2024年12月には博物館で2日間にわたるLiDARスキャンと3D計測を行いました。",
    result: "ここに成果・結果を書いてください。",
    program: {
      name: "夢チャレンジ制度",
      desc: "長野大学後援会が運営する学生支援制度。「大学時代にこんなことがしてみたい」という学生の企画を審査し、採択されると最高20万円の奨励金が支給されます。好奇心とチャレンジ精神を持つ学生の夢を資金面からバックアップすることを目的としており、毎年6件前後が採択されています。",
      url: "https://www.nagano.ac.jp/campus_life/tution/dream_challenge/",
    },
  },
  "tameike-ai": {
    num: "02",
    color: "#2563a8",
    title: "長野大学 知見集約型独自LLM「TAMEIKE AI」",
    period: "2024 — 現在",
    badge: "研究中",
    tags: ["Python", "RAG", "Dify", "Weaviate", "Ollama", "Docker", "DGX Spark", "PostgreSQL"],
    overview: "「TAMEIKE」は Technology-driven Analytics and Machine-learning Engineering Innovative Knowledge Environment の頭文字から命名。長野大学が蓄積してきた論文・研究データを集約し、大学独自の知見を最大限に活用できるローカルLLMの構築を目指すプロジェクトです。機密性の高い研究データを安全に扱うため、外部クラウドAPIに依存せず、学内の NVIDIA DGX Spark を活用した完全ローカル運用のインフラを設計・実装しています。",
    background: "レポートや論文の参考文献として長野大学のこれまでの研究成果を確認しようとすると、図書館で大量の資料の中から探したり、研究室に問い合わせて取り寄せてもらったりする必要があり、そこに時間を取られるという課題がありました。誰でも長野大学の研究データに簡単にアクセスできる仕組みを作りたいと考えたのが、TAMEIKE AI立ち上げのきっかけです。\n\n当初は大学全体の研究データを一括収集する計画でしたが、学部ごとのデータ管理状況の差や権利関係の調整など、組織的な課題に直面しました。\n\nそこで学内でアンケートを実施したところ、最も要望が大きかったのが「履修登録アシスタント」でした。まずはこの機能に絞って実績を積み、段階的に対象を広げていく戦略に転換。全授業シラバス（847授業分）をデータソースとしたRAGチャットボットの開発から着手し、技術基盤を固めながらスケールアップを進めています。",
    role: "プロジェクトディレクションとAIシステム開発・インフラ構築を担当。\n\n・学内交渉・関係各所との折衝（研究データ収集に向けたコンタクト）\n・スクレイピングスクリプトの設計・実装（Python）\n・RAGパイプライン全体の構築（Dify + Weaviate + Ollama）\n・インフラ構築（Docker Compose、GPU推論環境の最適化）",
    challenge: "① データ型不一致による検索エラーの解消\nRAGの検索が機能しない問題が発生。ナレッジベースの設定が誤ってJSON文字列として保存されていることを特定し、PostgreSQLを直接操作してデータ型を修正しました。\n\n② チャンク最適化によるハルシネーション防止\n同名授業が複数存在する場合にAIが担当教員を混同する問題が発生。チャンクサイズを4,000から10,000トークンに拡張し「1授業＝1セグメント」に収まるよう調整。システムプロンプトのルール化と組み合わせ、回答精度を大幅に改善しました。\n\n③ 会話変数を活用した文脈依存クエリの処理\n「この授業はレポートある？」といったフォローアップ質問に対応するため、Difyの会話変数で直前の質問を保持し、コードノードで検索クエリを動的に書き換えるロジックを実装しました。\n\n④ 予算制約下でのハードウェア調達とマルチGPU環境への移行\n予算の関係で新規GPUの購入は難しく、ゼミ内で使われていなかった GTX 1080（11GB）1枚・GTX 1070（8GB）2枚の計3枚を組み合わせた自作PCで開発をスタート。推論の高速化・安定化のため RTX 4060 Ti × 2枚（32GB VRAM）構成へ増設し、VRAMと推論バッファのバランスを調整しながら最適なモデルサイズを選定しました。その後、ゼミの研究費でNVIDIA DGX Sparkを導入し、より安定した本格運用基盤へ移行しています。",
    result: "847授業分のシラバスデータをベクトル化し、授業名・担当教員・評価方法などをチャットで即座に照会できる完全ローカル動作システムを実現。開発環境をDockerでコンテナ化し、環境の再現性と運用効率を確保しました。\n\n現在は履修登録アシスタントの運用実績を足がかりとして、本来の目的である各学部の論文・研究データの集約に向けた学内調整を継続中です。",
  },
  "techmate": {
    num: "03",
    color: "#2a7a4e",
    title: "TechMate リペアサービス",
    period: "2023 — 現在",
    badge: "運営中",
    tags: ["iPhone・Mac・PC修理", "出張サポート", "買取・販売", "古物商"],
    overview: "長野県上田市周辺を中心に展開する、店舗を持たない出張型のスマートフォン・PC修理および買取・販売サービスです。iPhone・Mac・Windows PCを対象とした画面割れ修理やバッテリー交換などのハードウェア対応に加え、現地に赴く出張型ならではの柔軟なITサポートを提供。無店舗型で家賃や人件費を削減し、低価格でのサービス提供を実現しています。",
    background: "大学で情報技術や電子工学を学ぶ中で、その知識を直接社会に役立てたいと考えたのが始まりです。一般的な修理店の「店舗に行く手間がかかる」「誰が直しているか分からない」といった課題に加え、IT機器に詳しくない方が抱える「設定や使い方がわからない」という悩みに着目。作業する本人が直接自宅や指定場所へ出向き、修理だけでなく設定周りの不安もまるごと解消できる、透明性の高いサービスを提供したいという思いから立ち上げました。",
    role: "事業主（長野県公安委員会許可 第481102500050号）として、サービスの企画・立ち上げから実作業までの全工程を一人で担当。LINEを通じた事前相談・見積もり、出張修理作業、端末の買取査定を実施。さらに自動通知システムを活用した中古端末の効率的な仕入れから、整備済端末の販売運用までを一貫して担っています。",
    challenge: "個人運営サービスとして信頼を得るための最大の工夫が、出張型の強みを活かした「細やかで柔軟な対応」です。単なる修理・部品交換で終わらせず、初期セットアップの代行、ご自宅のWi-Fi接続サポート、アプリのインストール手順の解説など、IT知識に不安がある方でも安心して機器を使えるようになるまでのトータルサポートを心がけています。お客様と直接対面するからこそできる、対話を通じた課題解決を大切にしています。",
    result: "出張費無料・スピーディな対応が可能な地域密着型サービスとして稼働。対面での親身なサポートが評価され、IT機器に不慣れな方にも支持されています。古物商許可を取得して正規の買取・販売ルートを確立し、2025年度はスマートフォン輸出が好調で売上700万円超を達成。自身の専門知識を活かした独自のビジネスモデルを形にすることができました。",
    link: "https://techmate-repair.vercel.app/",
  },
};

type Project = {
  num: string;
  color: string;
  title: string;
  period: string;
  badge: string;
  tags: string[];
  overview: string;
  background: string;
  role: string;
  challenge: string;
  result: string;
  link?: string;
  program?: { name: string; desc: string; url: string };
};

function HeroImage({ src, alt }: { src: string; alt: string }) {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div style={{ marginBottom: "64px", borderRadius: "12px", overflow: "hidden", background: "#f5f5f5", paddingTop: "48%", position: "relative" }}>
      <img
        src={src}
        alt={alt}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        onError={() => setVisible(false)}
      />
    </div>
  );
}

function GallerySection({ slug, alt, color }: { slug: string; alt: string; color: string }) {
  const srcs = Array.from({ length: 6 }, (_, i) => `/images/projects/${slug}/${i + 1}.jpg`);
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
  }, [slug]);

  if (loaded.length === 0) return null;

  return (
    <div style={{ marginTop: "64px" }}>
      <hr style={{ border: "none", borderTop: "1px solid #ebebeb", marginBottom: "48px" }} />
      <p style={{ fontSize: "12px", letterSpacing: "3px", color, marginBottom: "24px", fontWeight: 700 }}>GALLERY</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
        {loaded.map(src => (
          <div key={src} style={{ borderRadius: "8px", overflow: "hidden", background: "#f5f5f5", paddingTop: "66%", position: "relative" }}>
            <img src={src} alt={alt} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = projects[slug];

  if (!project) {
    return (
      <div style={{ padding: "120px 32px", textAlign: "center", fontFamily: "sans-serif" }}>
        <p>Not found</p>
        <Link href="/#projects">← Back</Link>
      </div>
    );
  }

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
          <Link href="/#projects" style={{ fontSize: "14px", color: "#777", textDecoration: "none" }}>← Projects</Link>
        </div>
      </nav>

      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "120px 32px 100px" }}>
        {/* Header */}
        <p style={{ fontSize: "13px", color: project.color, letterSpacing: "3px", marginBottom: "16px", fontWeight: 700 }}>
          {project.num} — {project.badge.toUpperCase()}
        </p>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 300, letterSpacing: "-0.02em", marginBottom: "12px" }}>
          {project.title}
        </h1>
        <p style={{ fontSize: "14px", color: "#aaa", marginBottom: "32px" }}>{project.period}</p>

        {/* Tags */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "56px" }}>
          {project.tags.map(t => (
            <span key={t} style={{ fontSize: "12px", padding: "4px 12px", border: "1px solid #ddd", borderRadius: "999px", color: "#555" }}>{t}</span>
          ))}
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: "12px", padding: "4px 12px", border: `1px solid ${project.color}`, borderRadius: "999px", color: project.color, textDecoration: "none" }}>
              サイトを見る ↗
            </a>
          )}
        </div>

        {/* Hero image */}
        <HeroImage src={`/images/projects/${slug}/main.jpg`} alt={project.title} />

        <hr style={{ border: "none", borderTop: "1px solid #ebebeb", marginBottom: "56px" }} />

        {/* Content */}
        {[
          { label: "概要",       content: project.overview },
          { label: "背景・きっかけ", content: project.background },
          { label: "担当した役割",   content: project.role },
          { label: "課題と工夫",     content: project.challenge },
          { label: "成果",           content: project.result },
        ].map(({ label, content }, i, arr) => (
          <div key={label} style={{ marginBottom: i < arr.length - 1 ? "56px" : "0" }}>
            <p style={{ fontSize: "12px", color: project.color, letterSpacing: "3px", marginBottom: "12px", fontWeight: 700 }}>
              {label.toUpperCase()}
            </p>
            <p style={{ fontSize: "16px", color: "#444", lineHeight: 1.9, whiteSpace: "pre-line" }}>{content}</p>
          </div>
        ))}

        {/* Program info */}
        {project.program && (
          <div style={{ marginTop: "64px" }}>
            <hr style={{ border: "none", borderTop: "1px solid #ebebeb", marginBottom: "48px" }} />
            <p style={{ fontSize: "12px", color: project.color, letterSpacing: "3px", marginBottom: "16px", fontWeight: 700 }}>ABOUT THE PROGRAM</p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: 600 }}>{project.program.name}</h3>
              <a href={project.program.url} target="_blank" rel="noopener noreferrer"
                style={{ fontSize: "13px", color: project.color, textDecoration: "none", borderBottom: `1px solid ${project.color}`, paddingBottom: "1px", whiteSpace: "nowrap" }}>
                公式サイト ↗
              </a>
            </div>
            <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.9 }}>{project.program.desc}</p>
          </div>
        )}

        {/* Gallery */}
        <GallerySection slug={slug} alt={project.title} color={project.color} />
      </div>

      <footer style={{ textAlign: "center", padding: "32px", fontSize: "13px", color: "#bbb", borderTop: "1px solid #ebebeb" }}>
        &copy; 2025 Kamimura Koga
      </footer>
    </div>
  );
}
