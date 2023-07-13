# Race API
## Installation
```bash
cp .env.example .env # Copy and config .env
npm install
npm install -g prisma 
prisma migrate dev --name init  
```

## Running the app
```bash
# development
npm run start
# watch mode
npm run start:dev
# production mode
npm run start:prod
```

## Command
```bash
# generate API token
node src/command/api.token-genrator.ts
```
