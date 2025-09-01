#!/bin/bash
echo "Setting up StatSlam development environment..."
npm install
npm install --workspace=frontend
npm install --workspace=backend
echo "Setup complete!"