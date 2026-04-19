const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/60 relative">
      <div className="neon-divider absolute top-0 left-0 right-0" />
      <div className="container mx-auto px-6 text-center">
        <p className="font-display text-[8px] neon-text-cyan tracking-wider">
          DETECTING INTELLIGENCE © {new Date().getFullYear()}
        </p>
        <p className="text-muted-foreground text-lg font-body mt-2">
          Live weekdays at 9AM EST on YouTube, X & Twitch
        </p>
      </div>
    </footer>
  );
};

export default Footer;
