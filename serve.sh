#!/bin/bash
# Local preview — full marketing site (palisades-package)

ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT/site" || exit 1

echo "Starting local server (full site)..."
echo "Visit: http://localhost:8000"
echo ""
echo "Deploy to Netlify (from repo root):"
echo "  netlify deploy --prod --dir site"
echo ""
python3 -m http.server 8000
