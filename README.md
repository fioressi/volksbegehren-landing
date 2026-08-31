# Volksbegehren Landingpage

Erste statische Azure-taugliche Landingpage fuer ein moegliches Volksbegehren.

## Inhalt

- `index.html` - Startseite
- `styles.css` - Layout und Gestaltung
- `script.js` - kleine Interaktionen
- `staticwebapp.config.json` - Azure Static Web Apps Konfiguration

## Lokal testen

Die Seite ist statisch. Es reicht ein einfacher Dateiserver.

Beispiel:

```bash
cd /data/.openclaw/workspace/volksbegehren-landing
python3 -m http.server 8080
```

Dann `http://localhost:8080` aufrufen.

## Deployment nach Azure Static Web Apps

Die vorbereitete GitHub Action liegt unter:

`/data/.openclaw/workspace/volksbegehren-landing/.github/workflows/deploy.yml`

Noetiges GitHub Secret:

- `AZURE_STATIC_WEB_APPS_API_TOKEN`

Vor produktivem Einsatz anpassen:

- echte Domain in den Share-Links statt `https://example.org`
- Impressum
- Datenschutz
- finale Texte und Forderungen
