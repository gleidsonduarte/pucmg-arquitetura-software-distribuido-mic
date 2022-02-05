SHELL := /bin/bash

.PHONY: nodemon up down ps test

nodemon:
	@nodemon ./src/server.ts

up:	docker-compose.yaml
	docker-compose up --build

down: docker-compose.yaml
	@docker-compose down

ps:
	@docker-compose ps

test:
	@docker exec -it pucmg-mic-api npm run test
