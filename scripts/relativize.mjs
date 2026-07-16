// Post-export: rewrite absolute /_next/ references to relative so the static
// build works at any base path — the custom-domain root (lobstercomputer.com)
// and the project subpath (lobsterco.github.io/www/) — from one set of files.
//
//  - HTML: src/href "/_next/..." -> "<prefix>_next/..." where <prefix> is the
//    "../" ladder up to the site root for that page's depth. Pages are
//    directories (trailingSlash): the root page (out/index.html) resolves at
//    "./", a one-level route (out/privacy/) at "../", "/reef/zoom/" at "../../".
//    A fixed "./" only works for the root page, so nested routes need depth.
//  - CSS:  url(/_next/static/media/...) -> url(../media/...) (relative to the
//    stylesheet at _next/static/css/, where the fonts live one dir over).
import { readdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { join, relative, dirname, sep } from "node:path";

const OUT = "out";
let html = 0;
let css = 0;

// "../" ladder from a page's directory up to the OUT root ("./" at the root).
function prefixFor(htmlPath) {
    const depth = relative(OUT, dirname(htmlPath))
        .split(sep)
        .filter(Boolean).length;
    return depth === 0 ? "./" : "../".repeat(depth);
}

function walk(dir) {
    for (const entry of readdirSync(dir)) {
        const p = join(dir, entry);
        if (statSync(p).isDirectory()) walk(p);
        else if (p.endsWith(".html")) {
            const s = readFileSync(p, "utf8");
            const prefix = prefixFor(p);
            const out = s.replace(/(src|href)="\/_next\//g, `$1="${prefix}_next/`);
            if (out !== s) {
                writeFileSync(p, out);
                html++;
            }
        } else if (p.endsWith(".css")) {
            const s = readFileSync(p, "utf8");
            const out = s.replaceAll("/_next/static/media/", "../media/");
            if (out !== s) {
                writeFileSync(p, out);
                css++;
            }
        }
    }
}

walk(OUT);
console.log(`relativize: rewrote ${html} html, ${css} css file(s)`);
