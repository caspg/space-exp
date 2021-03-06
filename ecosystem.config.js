const user = 'caspg'

module.exports = {
  apps: [
    {
      name: 'space-exp',
      script: './server/index.js',
      env: {
        COMMON_VARIABLE: 'true',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
  deploy: {
    production: {
      user,
      host: '144.217.161.18',
      ref: 'origin/master',
      repo: 'git@github.com:caspg/space-exp.git',
      path: `/home/${user}/applications/space-exp`,
      'post-deploy': 'yarn install && yarn run build && pm2 startOrRestart ecosystem.config.js --env production',
    },
  },
}
