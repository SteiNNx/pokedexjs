FROM php:7.3-apache

ENV APACHE_DOCUMENT_ROOT ${APACHE_DOCUMENT_ROOT:-"/var/www/html"}

RUN apt-get update
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_11.x  | bash -
RUN apt-get -y install nodejs

