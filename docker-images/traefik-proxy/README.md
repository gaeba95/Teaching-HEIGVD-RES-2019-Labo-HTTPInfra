# Dynamic cluster management

## Auteurs: Gaetan Bacso et Remy Vuagniaux

## Réalisation:

Pour cette partie nous avons décidé d'utiliser l'outil traefik. Nous avons donc mis en place ce reverse proxy qui gère dynamiquement les clusters. 

Nous avons effectué la configuration avec docker-compose. Cela nous permet de créer toute l'infrastructure d'un seul coups et de pouvoir configurer les containers de manière précise. 

Le serveur de reverse proxy  a une addresse statique qui est 172.20.0.10

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

