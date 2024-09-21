#!make
env ?= .env
include $(env)
export $(shell sed 's/=.*//' $(env))

version:
	@echo $(VERSION)

login:
	@docker login $(DOCKER_REPO)

build-front:
	echo $(FRONT_DOCKER_IMAGE)
	@docker build -t $(FRONT_DOCKER_IMAGE) ./front-end

build-back:
	@docker build -t $(BACKEND_DOCKER_IMAGE) ./back-end

build: build-front build-back
	
push: version login build
	@echo 'publish $(VERSION) to $(DOCKER_REPO)'
	@docker push $(FRONT_DOCKER_IMAGE)
	@docker push $(BACKEND_DOCKER_IMAGE)