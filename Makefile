build:
	yarn build
start:
	pm2 start "PORT=3003 node .output/server/index.mjs"
restart:
	pm2 restart 8
rebuild: build restart

