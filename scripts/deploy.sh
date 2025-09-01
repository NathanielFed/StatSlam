#!/bin/bash
echo "Deploying StatSlam..."
cd backend
npm run build
npm run deploy
echo "Backend deployed successfully!"

cd ../frontend
npm run build
echo "Frontend built successfully!"