install i:
	@echo "[Makefile] Installing dependencies ..."
	@npm install

dev d:
	@echo "[Makefile] Starting developing mode ..."
	@npm run dev

deploy:
	@echo "[Makefile] Deploying to production ..."
	@fly deploy
 
