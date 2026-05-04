import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "HOME" },
  { to: "/episodes", label: "EPISODES" },
  { to: "/frontiers", label: "FRONTIERS" },
  { to: "/signals", label: "SIGNALS" },
  { to: "/submit", label: "SUBMIT" },
];

const SiteNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/60">
      <nav className="container mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="font-display text-[10px] sm:text-xs tracking-widest neon-text-cyan">
          DETECTING.INTEL
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `font-display text-[9px] tracking-widest transition-colors ${
                  isActive ? "neon-text-magenta" : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-foreground p-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `font-display text-[10px] tracking-widest ${
                    isActive ? "neon-text-magenta" : "text-muted-foreground"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default SiteNav;
