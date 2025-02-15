module.exports = {
  apps: [
    {
      name: 'rendezvous',
      script: './node_modules/.bin/rendezvous',
      args: 'start -b http://192.168.1.28:3100',
      instances: 1,
      autorestart: false,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
