# ----------------------------------
# Base Image mit Node + Browsern
# ----------------------------------
FROM cypress/browsers:node18.12.0-chrome107-ff106

# ----------------------------------
# Arbeitsverzeichnis
# ----------------------------------
WORKDIR /app

# ----------------------------------
# Package Files kopieren
# ----------------------------------
COPY package.json package-lock.json ./

# ----------------------------------
# Dependencies installieren
# ----------------------------------
RUN npm ci

# ----------------------------------
# Restlichen Code kopieren
# ----------------------------------
COPY . .

# ----------------------------------
# Cypress Cache vorbereiten
# ----------------------------------
RUN npx cypress verify

# Environment Variables default
ENV CYPRESS_baseUrl="http://localhost:3000"
ENV CYPRESS_loginPath="/login"
ENV CYPRESS_dashboardPath="/dashboard"

# ----------------------------------
# Standard Command (CI Execution)
# ----------------------------------
CMD ["npx", "cypress", "run", "--browser", "chrome", "--headless"]