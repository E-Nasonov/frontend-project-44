# Makefile

install:
	@echo "Установка зависимостей..."
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
	
lint-fix:
	npx eslint --fix .

.PHONY: install brain-games publish lint