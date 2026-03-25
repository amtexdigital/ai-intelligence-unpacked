import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";

const CHANNEL_ID = "UCI9_I_PyDnhrnb2EXP5aN0g";
const RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`;

interface VideoItem {
  title: string;
  link: string;
  thumbnail: string;
  pubDate: string;
  guid: string;
}

function extractVideoId(link: string): string {
  try {
    const url = new URL(link);
    return url.searchParams.get("v") || "";
  } catch {
    return "";
  }
}

const LatestEpisodes = () => {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok" && data.items) {
          setVideos(
            data.items.slice(0, 6).map((item: any) => ({
              title: item.title,
              link: item.link,
              thumbnail: item.thumbnail || `https://i.ytimg.com/vi/${extractVideoId(item.link)}/hqdefault.jpg`,
              pubDate: item.pubDate,
              guid: item.guid,
            }))
          );
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="py-24 bg-card/50 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            LATEST <span className="text-primary text-glow-cyan">EPISODES</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Catch up on what you missed — or rewatch your favorites.
          </p>
        </motion.div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-xl bg-background border border-border animate-pulse">
                <div className="aspect-video bg-muted rounded-t-xl" />
                <div className="p-4 space-y-2">
                  <div className="h-4 bg-muted rounded w-3/4" />
                  <div className="h-3 bg-muted rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : videos.length > 0 ? (
          <>
            {/* Featured latest video */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto mb-8"
            >
              <div className="relative rounded-xl overflow-hidden border border-border bg-background">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${extractVideoId(videos[0].link)}`}
                    title={videos[0].title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-sm font-semibold tracking-wider line-clamp-2">
                    {videos[0].title}
                  </h3>
                  <p className="text-muted-foreground text-xs mt-1">
                    {new Date(videos[0].pubDate).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Older episodes grid */}
            {videos.length > 1 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {videos.slice(1).map((video, i) => {
                  const videoId = extractVideoId(video.link);
                  return (
                    <motion.a
                      key={video.guid}
                      href={video.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="group rounded-xl overflow-hidden border border-border bg-background hover:border-primary/40 transition-all duration-300"
                    >
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                          alt={video.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-background/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <svg className="w-12 h-12 text-primary" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-display text-xs font-semibold tracking-wider line-clamp-2 group-hover:text-primary transition-colors">
                          {video.title}
                        </h3>
                        <p className="text-muted-foreground text-xs mt-1">
                          {new Date(video.pubDate).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            )}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-10"
            >
              <a
                href="https://www.youtube.com/@DetectingIntelligence"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-display text-sm font-semibold tracking-wider text-primary hover:underline"
              >
                VIEW ALL EPISODES <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </>
        ) : (
          <p className="text-center text-muted-foreground">No episodes found. Check back soon!</p>
        )}
      </div>
    </section>
  );
};

export default LatestEpisodes;
