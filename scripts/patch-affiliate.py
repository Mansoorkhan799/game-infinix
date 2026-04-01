#!/usr/bin/env python3
import pathlib

ROOT = pathlib.Path(__file__).resolve().parents[1] / "src"
OLD = "https://pkcardrummy.com/?from_gameid=6276686&channelCode=6191689"
IMPORT = "import { DOWNLOAD_URL } from '@/lib/site';"

for path in sorted(ROOT.rglob("*.tsx")):
    text = path.read_text(encoding="utf-8")
    if OLD not in text:
        continue
    t = text
    t = t.replace(f'href="{OLD}"', "href={DOWNLOAD_URL}")
    t = t.replace(f"href='{OLD}'", "href={DOWNLOAD_URL}")
    t = t.replace(f'"downloadUrl": "{OLD}"', '"downloadUrl": DOWNLOAD_URL')
    if t == text:
        continue
    if IMPORT not in t and "DOWNLOAD_URL" in t:
        lines = t.splitlines(keepends=True)
        idx = 0
        for i, line in enumerate(lines):
            if line.startswith("import "):
                idx = i + 1
        lines.insert(idx, IMPORT + "\n")
        t = "".join(lines)
    path.write_text(t, encoding="utf-8")
    print("ok", path.relative_to(ROOT.parent))
