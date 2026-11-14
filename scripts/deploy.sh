#!/usr/bin/env bash
# Runs ON the EC2 server (as the ubuntu user) after the latest main is checked out.
set -euo pipefail

cd /home/ubuntu/app/backend
echo "Deploying commit $(git rev-parse --short HEAD)"

npm ci --omit=dev --no-audit --no-fund
pm2 reload realestateai-api --update-env
pm2 save

sleep 3
curl -fsS -o /dev/null http://127.0.0.1:5000/api/properties
echo "Health check OK"
