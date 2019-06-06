# Dynamic HTTP server with express.js

## Auteurs: Gaetan Bacso et Remy Vuagniaux

## Réalisation:

Pour cette partie nous avons suivis les webcast de cette partie.  Pour ce serveur nous utilisons le port 3000. 

Il y a deux dossier cluster qui définissent le même serveur mais avec une différence dans le code ce qui nous permêt de les différencier. Cela nous est utile pour les parties secondaires.

Les données renvoyées par ce serveur sont de type json et modélisent des jeux vidéos.

Voici un exemple de données:

```json
[
    {
        "game":"Cluster 2",
        "type":"rpg"
    },
    {
        "game":"Cluster 2",
        "type":"action"
    },
    {
        "game":"Cluster 2",
        "type":"fps"
    }
]
```

Le nom du jeu contiendra toujours le nom du cluster. 

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

