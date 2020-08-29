PORT=8080
APP_NAME=tsnode-template

# HELP
# This will output the help for each task
.PHONY: help

help: ## This help.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.DEFAULT_GOAL := help

build: ## Build the container
	docker build -t $(APP_NAME) .

run: ## Run container on port configured
	docker run -d -t --rm -p=$(PORT):$(PORT) --name="$(APP_NAME)" $(APP_NAME)

stop: ## Stop and remove a running container
	docker stop $(APP_NAME)
