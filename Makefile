IMAGE=miurhawk/gebla
PACKAGE_NAME=miurhawk/gebla
BUILDVERSION=v0.8

.PHONY: build test start push package

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

package:
	 docker build -t "miurhawk/gebla:v0.7" --file Dockerfile .

run:
	 docker run --name gebl -d -p 8080:80 gebla:v0.7
