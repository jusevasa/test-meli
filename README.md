## Prueba MELI

Bienvenidos a mi prueba, la verdad he disfrutado mucho realizando esta prueba. Desde mi perspectiva se pudieron mejorar bastantes cosas sin embargo, me enfoque mucho en el entregable y los criterios de aceptación.

Para resolver esta prueba hice uso de las siguientes herramientas:

- Nextjs (Framework de react)
- Tailwind (Framework CSS)
- Axios (Fetching)

Comprendo que se mencionaba el uso de sass, sin embargo por temas de tiempo vi como opcion el uso de tailwind.
## Ejecutar la aplicación 

Para poder correr la aplicación es necesario instalar depencias

```bash
yarn install
#or
yarn
```

Despues se debe ejecutar el entorno local de desarrollo con el siguiente comando:
```bash
yarn dev
```

Para la ejecucion de pruebas:
```bash
yarn test
```
Ver coverage de la aplicación
```bash
yarn test:coverage
```

Para la ejecucion de pruebas automatizadas:
```bash
yarn cypress
```

## ¿Comó desarrolle la prueba?
Lo primero fue visualizar cada una de las vistas, ver que componentes iba a reutilizar y donde realizar el fetching.

Asi que empece con el desarrollo, separando vistas de componentes dejando solo una responsabilidad para las vistas, las cuales son encargadas de realizar el fetching desde el servidor.

realice un scheme folding por si llegaba a necesitar ciertas cosas, sin embargo, no fue necesario, no complejice tanto la aplicación.

adicionalmente, he realizado algunos test basicos para comprobar los flujos completos de la aplicacion.


## ¿Puntos de mejora?
Hubo muchas cosas que me hubiese gustado implementar y mejorear, por ejemplo el tema de los servicios hubiese sido interesante implementar SWR para el manejo de cache para no saturar tanto la API. Mejorar y implementar un mejor adaptador para los servicios.

Hubiese sido interesante poder correr analizis de codigo estatico con sonarQube.




