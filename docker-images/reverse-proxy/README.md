# Reverse proxy with apache (static configuration)

## Auteurs: Gaetan Bacso et Remy Vuagniaux

## Réalisation:

Pour cette partie nous avons d'abort suivit les webcasts. Nous avons en premier créer une configuration static du serveur, c'est à dire, que les adresses des serveurs dynamic et static sont entrées en dur dans les fichiers de configurations.
A la fin du dernier webcast nous avons une configuration plus dynamic ou les adresses des serveurs étaient entrée en argument lors du build du serveur.
Nous avons, pour finir, créer un fichier Docker-compose qui est un script qui crée tous les containers que nous avons besoin dynamiquement. Quand il crée le reverse-proxy, il lui passe les adresses des containers des serveurs en argument du build.
Dans ce Docker-compose nous attribuons des adresses static à chaque server.
En plus du serveur dynamic et static nous avons aussi ajouter un serveur "portainer" qui permet de gérer les containers et images.

Le serveur reverse-proxy a toujours une adresse static a 172.20.0.10

## Build:

Pour créer l'infrastructure complète, il suffit de lancer:

run infra:

```
docker-compose up 
```

run and build infra

```
docker-compose up --build
```

delete infra:

```
docker-compose down
```
