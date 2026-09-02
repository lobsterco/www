import { TEAM } from "@/data/team";
import Member from "./Member";

export default function Team() {
    return (
        <section className="team">
            <div className="grid">
                {/* heading cell fills the first slot in the team ledger */}
                <article className="cell title-cell">
                    <div className="cell-top">
                        <span className="role">Engineering studio</span>
                    </div>
                    <div className="cell-body title-body">
                        <h2 className="title-h">The team</h2>
                    </div>
                </article>

                {TEAM.map((m, i) => (
                    <Member key={m.name} member={m} index={i} />
                ))}
            </div>
        </section>
    );
}
