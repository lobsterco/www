"use client";

import { useEffect, useRef } from "react";
import type { Member as M } from "@/data/team";

export default function Member({ member, index }: { member: M; index: number }) {
    const ref = useRef<HTMLElement>(null);

    // reveal the photo when the cell scrolls into view (staggered via CSS delay)
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
            el.classList.add("in");
            return;
        }
        const io = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((e) => {
                    if (!e.isIntersecting) return;
                    el.classList.add("in");
                    obs.unobserve(el);
                });
            },
            { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    // stagger by grid column so each row reveals left→right, in order of
    // appearance. The title cell occupies column 0, shifting members by one.
    const column = (index + 1) % 3;
    const style = {
        "--img-scale": member.scale ?? 1,
        "--reveal-delay": `${column * 0.1}s`,
    } as React.CSSProperties;

    return (
        <article ref={ref} className="cell" style={style}>
            <div className="cell-top">
                <span className="role">{member.role}</span>
            </div>
            <div className="cell-photo">
                <img src={member.key} alt={`Portrait of ${member.name}`} />
            </div>
            <div className="cell-body">
                <h3 className="cell-name">{member.name}</h3>
                <p className="cell-bio">{member.bio}</p>
                <a className="cell-link" href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn ↗
                </a>
            </div>
        </article>
    );
}
