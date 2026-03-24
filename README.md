# Cypress End-to-End Test Automation Portfolio

Dieses Portfolio demonstriert eine modulare und skalierbare Architektur für End-to-End-Testautomatisierung mit Cypress.
Die Lösung basiert auf dem Page Object Model Ansatz, Custom Commands und einer strukturierten Testarchitektur.
Die E2E-Tests sind containerisiert mit Docker, kontinuierlich in CI/CD-Pipelines über Gitlab CI integriert und für eine skalierbare, cloud-native Ausführung in Kubernetes-Clustern konzipiert.

## Architektur
- Page Object Model (POM): Strukturierung der UI-Interaktionen in wiederverwendbare Seitenobjekte zur Kapselung von Selektoren und Aktionen sowie zur Verbesserung von Wartbarkeit und Lesbarkeit
- Custom Commands: wiederverwendbare Befehle zur Reduzierung von Redundanz und Erhöhung der Testklarheit
- Fixtures: Externe Verwaltung von Testressourcen wie Testdaten und UI-Selektoren zur klaren Trennung von Testlogik
- Utilities: Helper Funktionen, Environment Handling  

## CI/CD
- GitLab CI/CD Pipeline mit build und test stages  
- Artefakt-Sicherung: Screenshots, Videos und Reports  
- MR-Trigger und Headless Execution  

## Kubernetes & Containerization
- Dockerfile: Cypress + Browser Container  
- Kubernetes Job: skalierbare, reproduzierbare Testausführung

## Lizenz

Dieses Projekt steht unter einer benutzerdefinierten Lizenz.

Weitere Details finden Sie in der Datei LICENSE.

Die Nutzung ist ausschließlich zu Lern- und Demonstrationszwecken erlaubt.

## Autor
M.Sc. Thanh-Trung Tran
