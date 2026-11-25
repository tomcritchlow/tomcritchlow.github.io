#!/bin/bash
# Builds the site and compares every published file against _tools/url-baseline.txt.
# Usage: _tools/check-urls.sh            show what the current tree adds/removes
#        _tools/check-urls.sh --accept   also overwrite the baseline with the current output
set -euo pipefail
cd "$(dirname "$0")/.."
mise exec -- bundle exec jekyll build --quiet 2>&1 | grep -v "Liquid Warning" || true
mkdir -p .jekyll-cache
current=.jekyll-cache/urls-current.txt
(cd _site && find . -type f | sed 's#^\./#/#' | LC_ALL=C sort) > "$current"
removed=$(LC_ALL=C comm -23 _tools/url-baseline.txt "$current")
added=$(LC_ALL=C comm -13 _tools/url-baseline.txt "$current")
echo "Published files: $(wc -l < "$current" | tr -d ' ') (baseline $(wc -l < _tools/url-baseline.txt | tr -d ' '))"
echo "--- Removed since baseline ($(printf '%s' "$removed" | grep -c . || true))"; printf '%s\n' "$removed"
echo "--- Added since baseline ($(printf '%s' "$added" | grep -c . || true))"; printf '%s\n' "$added"
if [ "${1:-}" = "--accept" ]; then cp "$current" _tools/url-baseline.txt; echo "Baseline updated."; fi
