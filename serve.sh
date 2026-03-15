#!/bin/bash
# Deploy Palisades website

cd ~/.openclaw/workspace/palisades/src

echo "Starting local server..."
echo "Visit: http://localhost:8000"
echo ""
echo "To deploy to Netlify:"
echo "1. Go to https://app.netlify.com/drop"
echo "2. Drag this folder: ~/.openclaw/workspace/palisades/src"
echo ""
python3 -m http.server 8000
