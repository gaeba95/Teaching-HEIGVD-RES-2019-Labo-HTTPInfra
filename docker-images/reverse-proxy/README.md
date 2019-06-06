# Reverse proxy with apache (static configuration)

## Auteurs: Gaetan Bacso et Remy Vuagniaux

## Réalisation:

Pour cette partie nous avons d'abort suivit les webcasts. Nous avons en premier créer une configuration static du serveur, c'est à dire, que les adresses des serveurs dynamic et static sont entrées en dur dans les fichiers de configurations.
A la fin du dernier webcast nous avons une configuration plus dynamic ou les adresses des serveurs étaient entrée en argument lors du build du serveur.
Nous avons, pour finir, créer un fichier Docker-compose qui est un script qui crée tous les containers que nous avons besoin dynamiquement. Quand il crée le reverse-proxy, il lui passe les adresses des containers des serveurs en argument du build.
Dans ce Docker-compose nous attribuons des adresses static à chaque server.
En plus du serveur dynamic et static nous avons aussi ajouter un serveur "portainer" qui permet de gérer les containers et images.

Le serveur reverse-proxy a toujours une adresse static a 172.20.0.10

Pour le load balancing, nous avons du changer la configuration du fichier config-template.php comme ceci :

```
<?php
$static_app1 = getenv('STATIC_APP1');
$static_app2 = getenv('STATIC_APP2');
$dynamic_app1 = getenv('DYNAMIC_APP1');
$dynamic_app2 = getenv('DYNAMIC_APP2');
$portainer = getenv('PORTAINER');
?>
<VirtualHost *:80>

	ServerName demo.res.ch

	Header add Set-Cookie "ROUTE=.%{BALANCER_WORKER_ROUTE}e; path=/" env=BALANCER_ROUTE_CHANGED
	<Proxy balancer://staticCluster>
	    BalancerMember http://<?php print "$static_app1"?> loadfactor=1 route=static1
	    BalancerMember http://<?php print "$static_app2"?> loadfactor=1 route=static2
	    ProxySet lbmethod=byrequests
	    ProxySet stickysession=ROUTE
	</Proxy>

	<Proxy balancer://dynamicCluster>
	    BalancerMember http://<?php print "$dynamic_app1"?> loadfactor=1 route=dynamic1
	    BalancerMember http://<?php print "$dynamic_app2"?> loadfactor=1 route=dynamic2
	    ProxySet lbmethod=byrequests
	    ProxySet stickysession=ROUTE
	</Proxy>

	ProxyPreserveHost On

	ProxyPass '/portainer/' http://<?php print "$portainer"?>/
	ProxyPassReverse '/portainer/' http://<?php print "$portainer"?>/

	ProxyPass '/api/games/' balancer://dynamicCluster/
	ProxyPassReverse '/api/games/' balancer://dynamicCluster/
	
	ProxyPass '/' balancer://staticCluster/
	ProxyPassReverse '/' balancer://staticCluster/
		
</VirtualHost>
```

Au début on attribue au variable local les variables d'environnement correspondant au adresse ip de chaque serveur.
Après nous déclarons un virtual host sur le port 80 appelé demo.res.ch.
Donc si nous avons configuré notre fichier hosts pour que l'adresse 172.20.0.10 mappe demo.res.ch, nous pouvons nous connecter en tappant http://demo.res.ch/

Nous créons 2 cluster, l'un contenant 2 serveur static et l'autre 2 serveur dynamic. Quand une requete est faite sur le serveur static ou dynamic, le reverse-proxy choisi sur quel serveur du cluster il va envoié la requete.

Nous donnons un cookie au client quand il se connecte à un serveur pour qu'il reste connecté au même durant la durée de vie de la session (sticky session).

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
