# Static HTTP server with apache httpd

## Auteurs: Geatan Bacso et Remy Vuagniaux

## Realisation:

Nous avons suivit le webcast pour d'abort comprendre comment créer un serveur apache http static.
Nous avons donc utiliser une image docker disponible qui contient un serveur apache.
Il n'y a pas eu de configuration a faire il fallais juste placer les fichiers de la page html au bonne endroit.
Nous avons aussi du trouver une nouvelle template.

Pour les objectifs secondaires nous avons du créer 2 dossiers qui définissent le même serveur, mais qui affiche un nom différent dans la page html, pour pouvoir les différenciers.

## Build:

Pour créer un cluster il faut aller dans le dossier du cluster et lancer la commande:

Build image:

```
docker build -t server-name .
```

Run container:

```
docker run -d image-name
```

