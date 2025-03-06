#!/usr/bin/env bash

echo "Launching $NODE_ENV"

case $NODE_ENV in
  development)

    echo "Starting bash shell"
    bash
  ;;
  production)
    echo "Running npm server"

    npm run build

  ;;
