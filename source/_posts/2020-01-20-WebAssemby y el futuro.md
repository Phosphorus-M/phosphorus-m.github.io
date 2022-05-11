---
date: 2020-1-20 5:21:12
layout: post
title: "WebAssembly y el futuro"
description: El porque ando dedicando tiempo a esto
subtitle: El porque ando dedicando tiempo a esto
category: 'Análisis'
tags: 
- HTML
- CSS
- JS
- JavaScript
- Rust
- C++
- Framework
- Java
- C#
- Web
- charla
- WebAssembly
twitter_text: El porque ando dedicando tiempo a esto
introduction: El porque ando dedicando tiempo a esto
image: https://i.imgur.com/wAMi37X.png
optimized_image: https://i.imgur.com/wAMi37X.png
paginate: false
---

## *DISCLAIMER*:
Quiero que se me tenga paciencia escribí esto intermitentemente entre viajes, de igual manera lo que quiero explicar esta bien detallado a que si solo lean.


El verdadero motivo por el cual los lenguajes de bajo nivel, si bien nunca salieron del foco ahora tienen nuestra plena atención es porqué la llegada de la tecnología de *WebAsembly* hace que nuevamente brillen.

[La W3C anuncio que finalmente *WebAssembly* como estándar](https://www.w3.org/2019/12/pressrelease-wasm-rec.html.en) con todo lo que se necesita saber.
[Las especificaciones del core](https://www.w3.org/TR/2019/REC-wasm-core-1-20191205/), [la implementación del Web Api](https://www.w3.org/TR/2019/REC-wasm-web-api-1-20191205/), y [la interfaz de JavaScript](https://www.w3.org/TR/2019/REC-wasm-js-api-1-20191205/).

Además de [las cosas en que se trabajara](https://github.com/WebAssembly/design/blob/376bcc4b9cba79280d79be023d71e30d0b00ba47/FutureFeatures.md).

Finalmente la trinidad se rompió y abré paso a... Un cuadrado? Un cuarteto? Si... Algo así el punto es ...

Tenemos a disposición una nueva tecnología con la que jugar.

Los lenguajes estandarizados para Web ahora son *HTML*, *CSS*, *JavaScript* y *WebAsembly*.

*HTML* estructura, *CSS* estilos, *JavaScript* interactividad y *WebAsembly* es un conjunto de herramientas que trae un montón de cositas interesante pero la más destacada perfomance.

*WebAsembly* no es como que venga a remplazar *JavaScript* o algo así. Si bien se puede hacer algo así no es la idea.

Esta pensado para hacer ciertas cosas más performantes.

*WebAsembly* es complicado, bastante de hecho.
Pero por suerte hay lenguajes que permiten una ¿transpilación? ¿compilación?. No estoy muy seguro.

```
Fe de erratas: WASM es la abreviatura de WebAssembly
```

Si bien *WASM* es un binario también es lenguaje, como la idea del *bytecode* que finalmente es interpretado por la *JVM*.
Java compila a *Bytecode*.

El punto es que hay muy bajas posibilidad de que programe alguien en WebAsembly o más bien imposible.
Lo más seguro es que se programe en Rust ya que este tiene herramientas que permiten compilar a WebAsembly de forma sencilla.

Cómo ya dije a corto plazo es muy poco posible que *JavaScript* pase a la historia por *WASM*.
Imposible.


Pero si con el tiempo saldrán cosas para hacer páginas enteras mucho más performantes y no solo algunos features.
Cómo es el caso de *[Yew](https://yew.rs/)*.
<img src="https://i.imgur.com/4Rb3Yla.png" alt="Yew conference" />

Un framework que emula el sistema de templates de [React](https://es.reactjs.org) pero programable en *Rust* y listo para exportar a WebAsembly.

Si bien aún estoy comenzando en esta tecnología considero que es fundamental para lo que se está por venir.

Esto podría ser un antes y un después marcando la *Web 4.0*, como sistemas enteros en Web.
Ya que ahora pocas cosas serían las que impidieran que cosas como Photoshop se ejecuten en un navegador.
O el uso del binario en el browser empiece a ser un servicio.

Me parecía importante nombrar que aplicaciones más allá de optimizar tendrá y para mí esta es una.
Además de tal vez dejar de ser necesario utilizar aplicaciones de celular. Tal vez se pueda empezar a ejecutar en web cualquier aplicación.

Muy importante esto ya empieza a dejar atrás definitivamente a lenguaje como *Java*, ya que cada vez su *JVM* y su Runtime en general inhabilitan o lo vuelven una mala práctica el usarlo en web.

¿Sería posible usar *Java* como *WebAsembly*?
Si pero sería inútil perderías el chiste de WebAsembly ya que para ejecutar código *Java* necesitarás levantar la *JVM* que debería estar incluida en la compilación en *WebAsembly* o tal vez se pueda hacer un Bridge diciendo que la aplicación solo es ejecutable si tienes una versión de *Java* instalada en la pc y de esa forma acceder al disco y levantar la *JVM*.
Pero a esto se le suma levantar el *Garbage Collector*.

Es una suma de cosas que quitan perfomance.

¿*C#* podrá? Tal vez.
*C#* para ejecutarse necesita pasarse a un bridge language.
Esto implica que ese Bridge language es similar a el *bytecode* de *Java*.
A diferencia que es Bridge language a más bajo nivel.

La diferencia fundamental por la cual *C#* es más performante es porque ese intérprete es el sistema operativo mismo.
Razón por la que fue un gran trabajo el crear *.Net Core*.
No fue tan sencillo como *dockerizar*.
Representó el aislamiento de una parte fundamental del sistema operativo Windows.
Tenían que agarrar algo con raíces muy fuertes en Windows y portear para que sea compatible con cualquier SO.

No estoy seguro como se lo está consiguiendo hoy en día pero si hay proyectos de *C#* to *WebAsembly*.

Principalmente hablo de *Unity* cuyo principal objetivo es portear juegos a web.

*C* y *C++* son completamente posibles pero no tiene tanto sentido, menos teniendo Rust. Que a su vez es interoperativo con *C* e incluso cuando se quiere prescindir de *C* se obtiene una perfomance muy similar.

Hay muchos benchmarks al respecto. La comunidad de Rust vive en una lucha eterna para alcanzar a *C* y performance a más bajo nivel, hay muchas discusiones interesantes, bastante complejas y que de notan que la gente que esta trabajando en esto es gente con muchos años de experiencia en bajo nivel. 

PERSONALMENTE. Me dejan con la boca abierta cada vez que veo un análisis de esta gente. Siempre se aprende algo de ver esos análisis, un problema, un algoritmo, diferencias sutiles que la gente de alto nivel desconoce completamente. 

En fin mi postura es obvia el bajo nivel está de moda de nuevo.
Desde otra perspectiva pero es así.

Y se va a poner más de moda.
Es cuestión de tiempo.