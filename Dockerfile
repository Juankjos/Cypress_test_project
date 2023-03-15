FROM cypress/browsers:node18.12.0-chrome107
#Creo el directorio que vamos a usar para trabajar y en el workdir digo en dónde se va a trabajar
RUN mkdir /cypress-test
WORKDIR /cypress-test
#Copiamos el contenido de package.json, cypress.json y todo el contenido de la carpeta de Cypress al contenedor
COPY ./package.json .
COPY ./cypress.config.js .
COPY ./cypress ./cypress
RUN npm install
ENTRYPOINT ["npx", "cypress", "run"]
CMD [""]