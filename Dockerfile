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
# Cypress Verify
# ----------------------------------
RUN npx cypress verify

# Verzeichnis für Reports vorbereiten
RUN mkdir -p /app/results /app/cypress/screenshots /app/cypress/videos

# Environment Variables default
ENV CYPRESS_baseUrl="http://localhost:3000"
ENV CYPRESS_loginPath="/login"
ENV CYPRESS_dashboardPath="/dashboard"

# ----------------------------------
# Local Tests Execution
# ----------------------------------
CMD ["npx", "cypress", "run", "--browser", "chrome", "--headless"]