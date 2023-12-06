up:
	docker-compose -f docker-compose.yml up --build

down:
	docker-compose down

clean:
	docker-compose down
	@echo "=============cleaning up============="
	docker system prune -f
	docker volume prune -f
	docker images prune -a

dev:
	yarn install && \
	yarn dev

build:
	yarn build

start:
	yarn start

editor:
	yarn editor
