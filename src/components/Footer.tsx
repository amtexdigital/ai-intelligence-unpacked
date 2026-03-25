const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="font-display text-sm text-muted-foreground tracking-wider">
          DETECTING INTELLIGENCE © {new Date().getFullYear()}
        </p>
        <p className="text-muted-foreground text-xs mt-2">
          Live weekdays at 9AM EST on YouTube, X & Twitch
        </p>
      </div>
    </footer>
  );
};

export default Footer;
