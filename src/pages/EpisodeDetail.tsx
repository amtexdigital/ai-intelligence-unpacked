import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink, Mail } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";

const CHANNEL_ID = "UCI9_I_PyDnhrnb2EXP5aN0g";
const RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`;

interface VideoItem {
  title: string;
  link: string;
  pubDate: string;
  guid: string;
  description: string;
}

function extractVideoId(link: string): string {
  try {
    return new URL(link).searchParams.get("v") || "";
  } catch {
    return "";
  }
}

const EpisodeDetail = () => {
  const { videoId } = useParams<{ videoId: string }>();
  const [video, setVideo] = useState<VideoItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((r) => r.json())
      .then((data) => {
        if (data.status === "ok" && data.items) {
          const found = data.items.find((it: any) => extractVideoId(it.link) === videoId);
          if (found) {
            setVideo({
              title: found.title,
              link: found.link,
              pubDate: found.pubDate,
              guid: found.guid,
              description: found.description || "",
            });
            document.title = `${found.title} — Detecting Intelligence`;
          }
        }
      })
      .finally(() => setLoading(false));
  }, [videoId]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteNav />
      <main className="flex-1 py-12 container mx-auto px-6 max-w-4xl">
        <Link
          to="/episodes"
          className="inline-flex items-center gap-2 font-display text-[9px] tracking-widest text-muted-foreground hover:text-secondary mb-8"
        >
          <ArrowLeft className="w-3 h-3" /> ALL EPISODES
        </Link>

        {loading ? (
          <div className="aspect-video bg-card/50 border-2 border-border animate-pulse" />
        ) : !video ? (
          <p className="text-center text-muted-foreground font-body text-xl">
            Episode not found.{" "}
            <Link to="/episodes" className="neon-text-cyan underline">Browse all episodes →</Link>
          </p>
        ) : (
          <article>
            <h1 className="font-display text-base md:text-xl tracking-wider leading-relaxed mb-2">
              {video.title}
            </h1>
            <p className="text-muted-foreground font-mono text-sm mb-6">
              {new Date(video.pubDate).toLocaleDateString("en-US", {
                weekday: "long", month: "long", day: "numeric", year: "numeric",
              })}
            </p>

            <div className="aspect-video border-2 border-secondary mb-8 shadow-[0_0_24px_hsl(var(--neon-cyan)/0.35)]">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            <section className="mb-10">
              <h2 className="font-display text-xs tracking-wider mb-3 neon-text-magenta">THESIS</h2>
              <p className="text-foreground/85 font-body text-xl leading-relaxed">
                {video.description?.replace(/<[^>]+>/g, "").slice(0, 400) ||
                  "Frank & Ronnie unpack this week's signals across human cognition, non-human intelligence, and AGI progress."}
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-xs tracking-wider mb-3 neon-text-cyan">KEY CLIPS</h2>
              <p className="text-muted-foreground font-body text-lg">
                Highlight reels are added after each live show — check back shortly.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-display text-xs tracking-wider mb-3 text-accent">SOURCES</h2>
              <a
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-secondary hover:underline"
              >
                Watch on YouTube <ExternalLink className="w-3 h-3" />
              </a>
            </section>

            <section className="border-2 border-border bg-card/60 p-6 text-center">
              <p className="font-display text-[10px] tracking-wider mb-3">
                GET THE NEXT EPISODE FIRST
              </p>
              <Link
                to="/#newsletter"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-display text-[9px] tracking-wider neon-shadow-cyan hover:translate-y-[-2px] transition-all"
              >
                <Mail className="w-3 h-3" /> JOIN THE NEWSLETTER
              </Link>
            </section>
          </article>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default EpisodeDetail;
