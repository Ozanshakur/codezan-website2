#!/bin/bash

# Print environment variables (excluding secrets)
echo "Printing non-secret environment variables:"
env | grep -v -e PASSWORD -e SECRET -e KEY

# Check if POSTGRES_PRISMA_URL is set
if [ -z "$POSTGRES_PRISMA_URL" ]; then
  echo "Error: POSTGRES_PRISMA_URL is not set"
  exit 1
fi

# Run database migrations
echo "Running database migrations"
DATABASE_URL="$POSTGRES_PRISMA_URL" npx prisma migrate deploy

# Generate Prisma Client
echo "Generating Prisma Client"
npx prisma generate

# Build Next.js app
echo "Building Next.js app"
npm run build

