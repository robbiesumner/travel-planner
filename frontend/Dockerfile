FROM node:24-alpine as builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

ARG CONFIGURATION=production

RUN npx ng build --configuration ${CONFIGURATION}


FROM nginx:latest

COPY --from=builder /app/dist/frontend/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]