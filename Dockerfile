# Basis-Image mit Node.js und Cypress
FROM cypress/base:18

WORKDIR /app

# Package installieren
COPY package.json package-lock.json ./
RUN npm ci

# Testdateien kopieren
COPY cypress/ ./cypress/
COPY cypress.config.js ./

# Cypress Tests ausführen
CMD ["npx", "cypress", "run", "--browser", "chrome", "--headless"]