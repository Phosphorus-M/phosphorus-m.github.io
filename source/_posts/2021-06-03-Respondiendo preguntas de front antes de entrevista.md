---
date: 2021-6-3 10:41:12
layout: post
title: "Respondiendo preguntas de frontend antes de entrevista"
description: "Respondiendo preguntas de frontend antes de entrevista"
subtitle: "Respondiendo preguntas de frontend antes de entrevista"
category: 'Análisis'
tags: 
- Web
- CSS
- Frontend
twitter_text: "Respondiendo preguntas de frontend antes de entrevista"
introduction: "Respondiendo preguntas de frontend antes de entrevista"
image: https://i.imgur.com/u1jgB1w.jpeg
optimized_image: https://i.imgur.com/u1jgB1w.jpeg
paginate: false
two_columns_layout: false
---

## General

- What did you learn yesterday/this week?

Aprendí a modularizar mejor Angular y utilizar de forma eficiente la tabla de Material Angular. 

- What excites or interests you about coding?

Proyectos personales más que nada, por lo general es donde más me doy libertad de experimentar y por tanto donde más aprendo cosas, cambiar de tecnología e ir un paso adelante, investigar sobre que es humo y que no. 
Tratar mejor conceptos abstractos como arquitectura.

- What is a recent technical challenge you experienced and how did you solve it?

Por lo general soy responsable con las cosas que hago pero esa cuota de responsabilidad se cumple por lo general los últimos días, no obstante este sprint he tenido muchas tareas a que si tuve que abordar desafíos como la migración de frontends en una versión de Angular 7 y 8, migrarlos a 11 con todo lo que representa. 

Logre resolver todos los problemas y además tenia tareas de desarrollo y sobre futuras implementaciones debido a que ahora ando liderando un pequeño equipo. Para hacerme de tiempo adicional logre cubrir todas mis tareas del sprint y del próximo, en cuestión de una semana. 

Me pareció desafiante por que me puse como tiempo limite justamente, una semana y me llevo 4 días. 
4 días de trabajo continuo prácticamente pero logre adelantar mucho trabajo y ahora debería de empezar a documentar todo el proceso pero bueno.

- When building a new web site or maintaining one, can you explain some techniques you have used to increase performance?

Por lo general intento hacer refactors de cosas antiguas, si logro re utilizar código de forma eficiente, es decir separado en componentes más pequeños, funciones, clases, cosas pequeñas que pueda implementar el día a día y sean auto descriptivas mejor, intento realmente que mi código se pueda leer de corrido y sea auto descriptivo.

Eso ayuda realmente a obtener una mayor facilidad a la hora de debuggear si hay algún problema, para el tema del perfomance utilizo dependiendo del caso algunas herramientas del inspector de elementos del chrome, hay una sección muy específicamente en experimentos, en el que uno puede reflejar los cambios en el renderizado en tiempo real, eso ayuda a encontrar problemas a veces, en algunas ocasiones podemos identificar que partes del front son las que cuestan más renderizar. 

Intento limitar la cantidad de bucles y utilizar de forma correcta HOF, Higher Order Functions, para algo tienen nombres auto descriptivos, cada uno representa algo y no en todos los casos uno debe usar por ejemplo un map para recorrer un arreglo, siento que últimamente se ha tomado mucho, tal vez por influencia de React, el recorrer los arreglos con la función map, la cual no siempre es correcta para lo que uno debe hacer.

- Can you describe some SEO best practices or techniques you have used lately?

El uso adecuado de Open Graph, utilizar las correctas etiquetas semanticas que existen hoy en día luego de HTML5.
Utilizar distintas meta etiquetas para etiquetar el contenido, de la misma forma que utilizar practicas como ARIA.

Sino recuerdo mal el colocar rutas absolutas ayuda a mejorar la indexación y también el colocar sitemap en footer o en la cabeza haciendo referencia a que es el mapa de rutas.

Un buen bots.txt ayuda a que el SEO no mate no mate tu pagina. 

Si se puede reducir la cantidad de JS mejor, un pre renderizado, algún tipo de procesamiento que transforme el codigo como un output HTML plano tal vez, server siderending si el dinero lo permite. 


- Can you explain any common techniques or recent issues solved in regards to front-end security?

Lo tuve que buscar realmente, al parecer existe CSRF que este lo conocia, no lo aplicaba creo pero si sabia de su existencia y la solución era parametrizar bien los request, y XSS que lo conozco pero lo aplico a medias supongo. 
Hay cosas que las hago de forma automaticas.

- What actions have you personally taken on recent projects to increase maintainability of your code?

Refactors, muchos refactors de codigo de compañeros que ya no estan, una mejor documentación DENTRO y FUERA del codigo, diagramas de secuencia, diagramas de clase, diagramas de flujo, descripción, GIFs, lo que se necesite para entender bien como avanza el proyecto.

Emprolijamiento de los test, no mucho más que eso, una mejor modulación.

- Talk about your preferred development environment.

No estoy seguro a que se refiere, por lo general me gusta trabajar con CSS in JS para los estilos, no tengo problema en usar algún tipo de esquema como BEM o algo así, me gusta trabajar con React, React Native, todo su ecosistema me parece muy comodo.


## HTML Questions


- What does a doctype do?

Básicamente significa la versión de HTML que deberia de usarse para renderizar correctamente la pagina. 

- How do you serve a page with content in multiple languages?

Uno puede definir el lenguaje de la pagina en la etiqueta `<html>` con el atributo `lang`, uno puede definir también la orientación usando `rtl` o `ltr` como el valor del atributo `dir` que a su vez es un atributo global. 

Esta el atributo `hreflang` para definir por ejemplo el idioma de el hiperenlace.
Existe la codificación de caracteres, por defecto lo mejor seria definirlo como UTF-8.

- What kind of things must you be wary of when design or developing for multilingual sites?

Principalmente en que codificación de caracteres esta la pagina. En la etiqueta `meta` con el atributo `charset`, la orientación.

- What are data- attributes good for?

En realidad se usan para declarar valores dentro del HTML sin romper el esquema establecido. 
Principalmente es esa la función, declarar datos no visibles para el usuario pero que tienen una relevancia.

- Describe the difference between a cookie, sessionStorage and localStorage.

Principalmente el uso es de que las cookies son más bien para uso en conjunto del backend, es decir si uno tiene que enviar cierta información las cookies pueden resultar buenas, porque se adhieren al header del request. 

SessionStorage es especificamente pensado para datos de sesión. 
 
localStorage esta pensando para jugar con los datos de forma local, en esa PC.

Digamos que hay varias diferencias, entre el tamaño, en el tipo de almacenaje que tienen, por ejemplo el localStorage almacena solo texto plano, mientras que en sessionStorage uno puede almacenar objetos complejos si lo desea. En localStorage también pero debe tener en cuenta que se deben stringifiar? se tienen que parsear a string a eso me refiero. 

También cada uno acepta un tamaño maximo, el sessionStorage a diferencia de los demás es unico para la pestaña en la que sea abra, es decir en cada instancia de tab, se crea un sessionStorage distinto mientras que en el resto se comparte la información.

- Describe the difference between `<script>`, `<script async>` and `<script defer>`.

El basico es bloqueante y descarga apenas se lee la etiqueta, mientras que al agregar el atributo `async` uno permite que la descarga de forma asincrona pero cuando lo obtenga bloquee el renderizado de la pagina si es necesario. Mientras que el defer es asincrono pero además no bloquea el renderizado de la pagina cuando termina de descargar, sino que espera a terminar todo el renderizado.


- Why is it generally a good idea to position CSS `<link>`s between `<head></head>` and JS `<script>`s just before `</body>`? Do you know any exceptions?

Basicamenta la idea de poner un `link` es optimar el tiempo de descargas del CSS, permite una mejora en SEO el tener bien componetizado los CSS y cargarlos en pedazos con el `link`. Se establece arriba de todo para que apenas entre en la pagina los estilos se descarguen y de esa forma obtener una visualización más cercana a la final desde el comienzo.

En el caso de `script` se pone al final por una cuestión de que el contenido de la etiqueta `script` puede llegar a ser bloqueante, eso quiere decir de que si uno pone la etiqueta arriba o en el medio del HTML, corta de forma abrupta el renderizado y empieza a ejecutar el JS. Por lo que hasta que no termine la ejecución de JavaScript no continuara renderizando la pagina. 

Se puede colocar arriba en el caso de que sea una dependencia estricta de la pagina. 

- What is progressive rendering?

Es intentar de que la pagina renderice apenas pueda, es decir aligerar todo lo posible el uso del renderizado, si tenemos imagenes las imagenes las podemos volver `lazy` para lograr un renderizado mucho más rapido. 

Todo el JS que podamos no usar en un primer renderizado al menos evitar mostrarlo para no tener procesos bloqueantes. 

- Why you would use a srcset attribute in an image tag? Explain the process the browser uses when evaluating the content of this attribute.

El atributo es para lograr cargar imagenes dependiendo de el dispositivo en que se cargue la pagina, es como media queries adaptadas para el HTML. 

- Have you used different HTML templating languages before?

Si, he usado PUG, Twig, Jade, XML, JSX, CHTML, JSP.


## CSS Questions

- What is CSS selector specificity and how does it work?

Los selectores CSS permiten agregar estilos a partes especificas de la web, esto asigna una serie de puntos dependiendo de que tan especifico es el selector, se puede hacer un selector por etiqueta, por clase, por ID, usando atributos inclusive y usando pseudo selectores. 

El valor que tiene un selector es equivalente a la suma de especifcidad. 
Un selector de tag y pseudo tag tiene valor 0. 
Un selector de clase, atributo o pseudo clase tiene valor 1. 
Un selector de ID tiene valor 2.

Si uno desea forzar un estilo CSS, y un selector de menor especificidad tiene `!important` hara que esa linea del estilo tenga un valor superior en el selector, es decir lograra tener especificidad 999.

- Describe Floats and how they work.

Floats posiciona un elemento de un lado u otro pero lo quita del flujo normal del CSS en el navegador.

- Describe z-index and how stacking context is formed.

Z-index es una linea de estilo que se le puede agregar a un selector, esto en teoria agrega un valor al posicionamiento, permitiendo stackear contextos uno encima del otro, si uno especifica un z-index este se sumara al anterior contexto.

- Describe BFC (Block Formatting Context) and how it works.

Es el contexto en el que se van mostrando los bloques y el como interactuan con otras partes del codigo.

Utilizando bien algunas de las bondades de esto uno puede hacer un layout sencillo.

- What are the different ways to visually hide content (and make it available only for screen readers)?

Tu puedas usar los ARIA que son atributos que se le ponen a las etiquetas HTML con alguna descripción y esos atributos descriptivos, similares al atributo `alt` permiten tener un texto descriptivo en el caso de los screen readers. 

- Have you ever used a grid system, and if so, what do you prefer?

He usado grid systems usando blocks, flexbox y grid css.
Particularmente prefiero el Grid CSS, siento que tiene más bondades que flexbox, flexbox esta pensado para diseños unidimensionales, mientras que Grid CSS puede constar de dos dimensiones para utilizar.

- Have you used or implemented media queries or mobile specific layouts/CSS?

Si he usado media queries para hacer layouts espeicificos para algunos dispositivos, un ejemplo de dispositivos especial seria la impresora, un televisor, mediaqueries espeicificas para saber si un dispositivo esta paiseado o esta en formato vertical.

- Are you familiar with styling SVG?

No, muy poco a decir verdad, he jugado con el tema de los fills, los colores y las formas pero no he implementado el tema de diseñar SVG desde cero por mis propias manos. 

- Can you give an example of an @media property other than screen?

Por `@media ` features para identificar si se tienen algunas cosas o se accede desde un dispositivo especifico.
Un caso de ejemplo seria `@media print` que es una propiedad especifica para impresoras. 


- What are the advantages/disadvantages of using CSS preprocessors?
    - Describe what you like and dislike about the CSS preprocessors you have used.

Puede darse el caso de que al usar un pre procesador de CSS se genere codigo extra, no obstante por ejemplo agrega los estilos especificos en los selectores para los navegadores disponibles en algunas ocaciones, existen propiedades especificas para algunos navegadores y los pre procesadores ayudan a completarlo. 

Se puede escribir menos lineas y componetizar/modularizar los estilos en distintos archivos de forma más optima.

Personalmente me gusta usar los pre procesadores por las facilidades que brinda a la hora de escribir CSS. 


- How would you implement a web design comp that uses non-standard fonts?

Importo el archivo desde css con font-face, defino los estilos y con font-family en donde quiera usar la fuente escribo el nombre de la fuente.


- Describe pseudo-elements and discuss what they are used for.

Un pseudo elemento es usado para agregar pequeños trucos a la hora de mostrar la pagina, agrega un elemento antes, despues y de forma interna en un tag. 

- Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.

Permite definir que el tamaño tomaran los elementos van a variar dependiendo de si se cuenta desde el contenido o incluyendo el borde. 

- What does `* { box-sizing: border-box; }` do? What are its advantages?

Esto agrega la especificación de como se va a medir el tamaño del elemento, en este caso estamos usando border-box lo que significa que terminariamos calculado el ancho y el alto incluyendo el borde.

- What is the CSS `display` property and can you give a few examples of its use?

La propiedad CSS `display` permite mostrar de ciertas formas un contenido. 

Es decir si uno agrega como valor de la propiedad `flex`, lo que uno obtiene es un bloque de HTML el cual sera flexible con respecto a alguna dimensión. 

Si uno define `grid` entonces el contenido del bloque se mostrara como grilla, por defecto el valor de columnas y filas creo que es 1fr y auto pero no recuerdo con exactitud.

En el caso de block sino recuerdo mal es el valor por defecto de la mayoria de los componentes HTML para la mayoria de navegadores.

- Have you used CSS Grid?

Si


# JavaScript Questions

- Explain event delegation.

Si un evento no es definido dentro del scope de la pagina el evento sera tomado por defecto por el navegador.

- Explain how `this` works in JavaScript.
    - Can you give an example of one of the ways that working with this has changed in ES6?

El `this` funciona como una referencia al contexto en el que se esta ejecutando algo.

En el caso de ejecutar un `this` sin scope definido se toma el `this` del objeto `window`, en el caso de ejecutarlo dentro de una función el `this` toma el valor de la misma función. 

Si ejecutamos dentro de una clase, a la hora de instanciarlo el `this` tomara el valor del mismo objeto.

A diferencia de el `this` dentro de una función si uno ejecuta un arrow function en ES6 el `this` toma el valor de el scope anterior.


- What’s the difference between a variable that is: null, undefined or undeclared?
    - How would you go about checking for any of these states?

El valor null significa que objeto tiene un valor nulo, vacio, pero esta declarado y definido de alguna manera.

El valor undefined aparece cuando declaramos una variable pero esa variable no tiene un valor definido. 

En el caos de undeclared significa que no esta declada la variable a la que se intenta acceder.

Se puede comprobar el caso de null y undefined preguntando si el valor es falsy por ejemplo o en el caso de null si el valor que tiene la variable es null, en el caso de undefined se puede preguntar si el typeof de la variable es estrictamente "undefined". 


- What is a closure, and how/why would you use one?

Closure es una technique para encapsular el comportamiento y la escencia del objeto o función. 


- What language constructions do you use for iterating over object properties and array items?

Se puede usar cualquier bucle, se puede iterar un arreglo con el metodo heredado del prototipo Array `forEach`, o también un foreach tradicional utilizando la palabra reservada `in`.

- Can you describe the main difference between the Array.forEach() loop and Array.map() methods and why you would pick one versus the other?

El forEach como ventaja tiene de que uno puede recorrer el arreglo sin retornar ningún dato adicional.
En el caso de el metodo map uno siempre retorna otro arreglo en consecuencia.

El HOF de map se supone que la idea es hacer una transformación vectorial mientras que el forEach solamente esta pensado para iterar.


- What’s a typical use case for anonymous functions?

La verdad no estoy seguro, se puede decir que para utilizar closure, ejecutar callbacks, comprobar si el navegador cargo completamente la pagina. 

- What’s the difference between host objects and native objects?

Los objetos nativos son los que se proveen mediante el navegador o el entorno de ejecución, en el caso de un navegador un objeto nativo por ejemplo seria el objeto window, console o document, mientras que si el entorno de ejecución es Node.js por ejemplo el objeto windows es remplazado por otro objeto nativo llamado global. 

- Explain the difference between: `function Person(){}`,`var person = Person()`, and `var person = new Person()`?

Suponiendo que la idea es ejecutar la primera sentencia, la segunda sentencia ejecuta la primera y tercera sentencia lo que haria seria crear una instancia de la ejecución la función de la primera sentencia. 

- Explain the differences on the usage of foo between `function foo() {}` and `var foo = function() {}`

En el caso de la primera sentencia yo declaro una función con nombre foo, mientras que en la segunda sentencia yo estoy asignando a la variable foo como valor una función anonima. 

- Can you explain what Function.call and Function.apply do? What’s the notable difference between the two?








