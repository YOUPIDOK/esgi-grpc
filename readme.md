# ESGI - GRPC Project
> Car racing manager
## Groupes
- Léo STEVENOT
- Nathan PONCET
- Mohamed BENALIA
- Bastien BREVET
## Functionalities
- 3 APIs
- Auth
- Workflow requiring an inter-api call
- Dockerisation
- APIs with certificates
## Docker services
- Mysql
- Car API
- Race API
- Driver API
## Installation
### APIs
#### Car API
>[Car API Installation](api/car-api/readme.md)
#### Race API
>[Race API Installation](api/race-api/readme.md)
#### driver API
>[Driver API Installation](api/driver-api/readme.md)
#### Token generation
> All APIs use the same secret to verify the token.
> The secret is contained in the .env file and is passed in environment variables for each API.
> The token is a bearer token
```shell
# In api/car-api/ or api/driver-api/ or api/race-api/
# Generate token
node src/command/api.token-genrator.ts
```
### App
#### Env vars
```shell
# Set env vars
cp .env.example .env
```
#### Stubs
```shell
# Install stubs
cd protos
npm install -g @bufbuild/buf  
sh export.sh
```
#### Certs
```shell
# Install certificates
cd certs
mkcert -install

## Car API
mkcert car-api localhost
mv car-api+1.pem car-api.pem
mv car-api+1-key.pem car-api-key.pem

## Driver API
mkcert driver-api localhost
mv driver-api+1.pem driver-api.pem
mv driver-api+1-key.pem driver-api-key.pem

## Race API
mkcert race-api localhost
mv race-api+1.pem race-api.pem
mv race-api+1-key.pem race-api-key.pem
```
#### Docker
```shell
# Install services
sudo docker-compose up -d 
```
## MLD
![MLD](documentation/mld.png)

