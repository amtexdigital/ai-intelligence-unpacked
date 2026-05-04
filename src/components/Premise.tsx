import { motion } from "framer-motion";

const Premise = () => {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-sm sm:text-base md:text-lg leading-relaxed neon-text-magenta mb-8"
        >
          “Are humans getting dumber while other intelligences emerge around us?”
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="font-body text-xl md:text-2xl text-foreground/85 leading-relaxed"
        >
          Each week we investigate{" "}
          <span className="neon-text-cyan font-semibold">consciousness</span>,{" "}
          <span className="neon-text-magenta font-semibold">UAPs / NHI</span>, and the{" "}
          <span className="text-accent font-semibold">AGI timeline toward 2027</span>.
        </motion.p>
      </div>
    </section>
  );
};

export default Premise;
