IMAGE=miurhawk/gebla
PACKAGE_NAME=miurhawk/gebla
BUILDVERSION=v1.7

.PHONY: build test start push

all: build start
start:
	yarn install
	yarn parcel app/index.html

build:
	yarn install
	yarn run build
	docker build \
		-t "$(IMAGE):$(BUILDVERSION)" \
		--file Dockerfile .

push:
	docker push $(IMAGE):$(BUILDVERSION)
login:
	aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 788017480756.dkr.ecr.us-east-2.amazonaws.com

run:
	 docker run --name gebl -d -p 8080:80 $(IMAGE):$(BUILDVERSION)
