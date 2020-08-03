IMAGE=788017480756.dkr.ecr.us-east-2.amazonaws.com/offwidth-app
PACKAGE_NAME=github.com/miurhawk/chalk
BUILDVERSION=v0.0.1

.PHONY: build test start push

all: build start
start:
	yarn install
	yarn parcel app/index.html

build:
	yarn install
	yarn run prod
	docker build \
		--pull -t "$(IMAGE):$(BUILDVERSION)" \
		--file Dockerfile .

push:
	docker push $(IMAGE):$(BUILDVERSION)
login:
	aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 788017480756.dkr.ecr.us-east-2.amazonaws.com

