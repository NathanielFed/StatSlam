# StatSlam Development Setup

## Prerequisites
- Node.js version 18.0.0+
- AWS CLI configured
- Docker (for local development)
- Git

## Quick Start
1. Clone the repository
2. Run `npm run install:all`
3. Copy `.env.example` files and configure
4. Start local services: `docker-compose up -d`
5. Run development servers: `npm run dev`

## AWS Setup
1. Configure AWS CLI with your credentials
2. Install AWS CDK: `npm install -g aws-cdk`
3. Bootstrap CDK: `cdk bootstrap`
4. Deploy: `npm run deploy`

## Development Workflow
- Frontend: http://localhost:5173
- Backend API: http://localhost:3001
- Local DynamoDB: http://localhost:8000