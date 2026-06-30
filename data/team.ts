export type Member = {
    name: string;
    role: string;
    key: string;
    bio: string;
    linkedin: string;
    /** optical scale for the portrait inside its cell (default 1) */
    scale?: number;
};

export const TEAM: Member[] = [
    {
        name: "Dave Morin",
        role: "Co-founder",
        key: "/portraits/key-dave.png",
        bio: "Dave co-created Facebook Platform and Connect, founded Path, and has spent the years since backing early founders as a seed investor.",
        linkedin: "https://www.linkedin.com/in/davemorin",
    },
    {
        name: "James Higa",
        role: "Co-founder",
        key: "/portraits/key-james.png",
        bio: "James spent more than a decade at Apple in Steve Jobs' inner circle, where he helped build the iTunes Store and the products of that era.",
        linkedin: "https://www.linkedin.com/in/jameshiga",
    },
    {
        name: "Nicole Emanuel",
        role: "CFO & COO",
        key: "/portraits/key-nicole.png",
        bio: "Nicole runs finance and operations for the studio, after co-founding the beverage brand 21Seeds and serving as a fund CFO.",
        linkedin: "https://www.linkedin.com/in/nicole-hantas-emanuel-3741537",
        scale: 0.93,
    },
    {
        name: "Joseph Gilley",
        role: "Founding engineer",
        key: "/portraits/key-joe.png",
        bio: "Joe founded the YC-backed startup Bandit and spent six years at Uber building the real-time geospatial systems behind its pricing.",
        linkedin: "https://www.linkedin.com/in/jogly",
        scale: 0.93,
    },
    {
        name: "Trey Lawrence",
        role: "Founding engineer",
        key: "/portraits/key-trey.png",
        bio: "Trey led machine learning platform at Reddit and earlier co-founded Spell, building infrastructure to train and run models at scale.",
        linkedin: "https://www.linkedin.com/in/treylawrence",
        scale: 0.93,
    },
];
