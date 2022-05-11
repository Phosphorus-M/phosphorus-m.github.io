---
date: 2020-12-02 5:14:52
layout: post
title: "Mi experiencia con Angular"
description: Explico la experiencia que tuve con Angular
subtitle: Explico la experiencia que tuve con Angular
category: 'Análisis'
tags: 
- Angular
- Frontend
- Framework
- Web
- opinión
twitter_text: Explico la experiencia que tuve con Angular
introduction: Explico la experiencia que tuve con Angular
image: https://i.imgur.com/0DgaGnG.png
optimized_image: https://i.imgur.com/0DgaGnG.png
paginate: false
two_columns_layout: true
---

Bueno la verdad no estoy seguro que escribir, si se busca una opinión en resumen:

#### Si están trabajando con Angular huyan de ahí!

Ahora si, dicho esto si quieren profundizar en porque pienso eso voy a seguir escribiendo.

En resumidas cuentas arranque en noviembre de 2019 en un proyecto de desarrollo, debía liderar un equipo en su momento.
Yo tenia nula experiencia con Angular, pero como el resto tenia incluso menos experiencia que yo tome el rol por unos meses.

En ningún momento fue mi idea hacerlo en Angular, todo lo contrario, propuse hacerlo en React pero el Arquitecto me pidió que no sea así.

La verdad que ganas de hacernos perder el tiempo.
Muy innecesario incluso para su momento.

El proyecto arranco con muchas dudas, el cliente no sabia que quería exactamente si una pagina sabana, una de esas Landing Page con secciones o un producto separado por paginas. 

Como estaba sin definir hasta casi 4 meses después, decidí hacer una especie de inyector.
Esto funcionaba así.

Empece a seguir un estándar de [Atomic Design](https://creativity.babel.es/creativity/atomic-design/), pero mis compañeros no podían seguirlo.

Trate de respetar los estándares de [Angular](https://angular.io/guide/styleguide) para mantener las buenas practicas, todo tipado, las paginas en la carpeta de paginas, componentes chiquitos en carpeta de componentes chiquitos, [estándar de commits](https://www.conventionalcommits.org/en/v1.0.0/). 

Al no tener esa definición que era importante para saber que tan util iba a ser el [Router](https://angular.io/guide/router) decidí desarrollar y un componente que cumpliera la función de inyectar bloques de código, que inyectara otros componentes en lugares específicos al pasarle un [Observable](https://rxjs-dev.firebaseapp.com/guide/observable).

El Observable cumpliría el rol de una lista de tipo Bloque (Una Interfaz o super clase que había construido para crear un comportamiento común entre varios componentes, más específicamente los que estén dentro de la carpeta pages), por cada iteración del Observable inyectaría un Bloque en el componente App.

De esta forma se podía crear una pagina entera sin tener que pensar en los if, y otras cosas, de eso se encargaba el servicio que construía el observable.
El observable se creaba a partir de una respuesta del backend para generar todo de forma dinámica, debido que el producto pedía ser flexible y tener una gestión desde fuera del código.

Habría un backoffice que permitiría gestionar todo eso.

Nada, cree un bloque con un div y unos atributos definidos en el .TS de ese componente  y pushie eso.

A todo esto mis compañeros no estoy seguro en que andaban.
Creo que algo del backend. Muchos andaban tomando cursos todavía, yo me los pude saltear todos pero es una larga explicación.

En fin teníamos un [Walking Skeleton](https://devops.stackexchange.com/questions/712/what-is-a-walking-skeleton)

![Walking Skeleton](https://i.imgur.com/PiUzLql.gif)

Muy parcialmente pero estaba ahí!
Todo mockeado pero bueno para empezar a hacer productivos ya funcionaba.

La estimación fue una semana más o menos para tener esto.
Esto fue a finales de diciembre de ese año más o menos, a que si se cumplió en una semana.

En general ahí esta bien pero no tarde en encontrarme problemas.
La forma de crear componentes es muy distinta a la de React, en Angular por defecto (No tengo ni idea si se puede desactivar), pero encapsula a los componentes en una especie de div pero no es un div, es otra cosa, tiene el nombre de la etiqueta del componente, es decir...

El nombre de la etiqueta del componente no solo define como lo vas a manejar internamente sino también de forma externa, supongo que no es mala idea, pero estimo que genera peso adicional al DOM y la idea de que es un componente aislado es falsa al final y al cabo, el CSS y el JS los afecta también por defecto.

A menos que declares la encapsulación como Shadow DOM no actuara como una burbuja aislada del DOM.
Y el declarar algo como Shadow DOM si influye en más peso al DOM por lo tanto Lighthouse te restara puntos por un DOM muy grande.

El bundle me ha parecido que termina pesando muchísimo. 
Lo sentí con poco apoyo de la comunidad cuando buscaba como resolver errores o cosas así.

Realmente no sentí un acompañamiento por parte de Angular.
Podría nombrar muchísimas cosas así, como lo sencillo que es que se ensucie el código haciendo un pasamanos infinito sin tener un gestor de estados. Una alternativa es el hecho de usar servicios pero se volvería un infierno comunicar distintos componentes usando servicios en gran parte, habría muchísimos servicios por doquier. 

El Walking Skeleton que había armado era lo suficientemente robusto para solucionar muchos problemas que ibamos a tener pero sin embargo problemas relacionados al testing por ejemplo iban a salir a la luz en algún momento.

Teníamos un error de un lag increíble en algunos componentes cuando movíamos el mouse, supongo que eso igualmente se debe a un error de programación nuestro pero realmente nos complicaba la vida un par de veces. 

Si bien la organización del proyecto fue super fluida todo lo demás fue nos costo un poco más de lo esperado, quiero destacar mucho que no existe el autocompletado entre archivos HTML y TS, no existe esa forma de que entienda esto es este componente, autocompleta atributos o valores públicos. No hay forma.

El hecho de que haya perdido mucho tiempo en el Frontend me hizo perder un poco de idea de como avanzaba el backend. 
La verdad no era nada agradable la toma decisiones que estaban tomando y la verdad no me iba a tomar la molestia de discutirlo.

Fue ahí cuando me di cuenta lo difícil que es ser líder técnico siendo menor de edad que tus compañeros y esperar que no caigan en democracia ante la primera oportunidad.

No obstante de manera como hobby decidí liderar un equipo no relacionado a mi trabajo y la verdad estoy bastante orgulloso de como se avanzo.

Insisto seré muy hater de Angular pero no me parece nada sencillo como herramienta, no tengo tantas limitantes pero si problemas para implementar las ideas. 
TypeScript si bien es un gran beneficio por default no es lo suficiente plus para todos los problemas que me trajo lo demás.

En fin nada, si quieren dejar una opinión o algo lo escriben. 