FROM php:7.3.5-apache

COPY conf/ /etc/apache2
COPY apache2-foreground /usr/local/bin/
COPY templates /var/apache2/templates

RUN apt-get update
RUN a2enmod proxy proxy_http proxy_balancer lbmethod_byrequests headers
RUN a2ensite 000-* 001-*
RUN service apache2 restart
