import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";

const CHANNEL_ID = "UCI9_I_PyDnhrnb2EXP5aN0g";
const RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`;

interface VideoItem {
  title: string;
  link: string;
  thumbnail: string;
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

const EpisodesPage = () => {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Episodes — Detecting Intelligence";
    fetch(API_URL)
      .then((r) => r.json())
      .then((data) => {
        if (data.status === "ok" && data.items) {
          setVideos(
            data.items.map((it: any) => ({
              title: it.title,
              link: it.link,
              thumbnail: it.thumbnail || `https://i.ytimg.com/vi/${extractVideoId(it.link)}/hqdefault.jpg`,
              pubDate: it.pubDate,
              guid: it.guid,
              description: it.description || "",
            }))
          );
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteNav />
      <main className="flex-1 py-16 container mx-auto px-6">
        <header className="text-center mb-12">
          <h1 className="font-display text-xl md:text-2xl mb-4">
            ALL <span className="neon-text-cyan">EPISODES</span>
          </h1>
          <p className="text-muted-foreground font-body text-xl max-w-2xl mx-auto">
            Live every Friday at 9AM ET. Replays + clips + sources here.
          </p>
        </header>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-video bg-card/50 border-2 border-border animate-pulse" />
            ))}
          </div>
        ) : videos.length === 0 ? (
          <p className="text-center text-muted-foreground font-body text-xl">
            No episodes found.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {videos.map((v, i) => {
              const id = extractVideoId(v.link);
              return (
                <motion.div
                  key={v.guid}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    to={`/episodes/${id}`}
                    className="block group border-2 border-border hover:border-secondary transition-all hover:shadow-[0_0_20px_hsl(var(--neon-cyan)/0.4)]"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
                        alt={v.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-4 bg-card/70">
                      <h3 className="font-display text-[9px] tracking-wider leading-relaxed line-clamp-2 group-hover:neon-text-cyan transition-colors">
                        {v.title}
                      </h3>
                      <p className="text-muted-foreground font-mono text-sm mt-2">
                        {new Date(v.pubDate).toLocaleDateString("en-US", {
                          month: "short", day: "numeric", year: "numeric",
                        })}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default EpisodesPage;
