---
date: 2021-11-21 18:10:57
layout: post
title: "Mi opinion de Rust"
description: "Solo algunas reflexiones de Rust"
subtitle: "Solo algunas reflexiones de Rust"
category: 'Análisis'
tags: 
- C++
- GoLang
- C
- Rust
twitter_text: "Solo algunas reflexiones de Rust"
introduction: "Solo algunas reflexiones de Rust"
image: https://i.imgur.com/ZdMfFwo.png
optimized_image: https://i.imgur.com/ZdMfFwo.png
paginate: false
two_columns_layout: false
---

Como habrán visto en otras publicaciones, he estado ingresando de a poco en este nuevo lenguaje de programación.
En aquel momento he hablado del lenguaje como una herramienta para exportar código a WebAssembly pero a día de hoy creo que tengo más conocimiento y más practica sobre el lenguaje.

Rust es un lenguaje de programación de uso general pero sobre todo enfocado en seguridad, esto lo consigue con un diseño confiable desde base, compite fuertemente contra Go y C++. Plantea ser el remplazo de este ultimo. 
 
Hay muchos aspectos positivos, pero también demuestra tener algunos defectos que tienen que ver con su estructura interna, tanto técnica como social.

De todo este post me gustaría resaltar tres aspectos que me han gustado y dos que no, comparándolo con otros lenguajes que tengo o tengo experimentado.

¿Por qué Rust?

Rust fue diseñado de base para no tener errores, considera que las excepciones no pueden existir, el código tiene que funcionar siempre, no se da el lugar a los errores, si existen ciertas casuisticas para generarlos apropósito pero estos casos deben hacer que el programa termine unicamente si es lo que se desea, no se puede permitir que ocurra en otras circunstancias.

La segunda gran fortaleza que tiene el lenguaje es su potencia, es considerado uno de los lenguajes más rápidos de todos, solo compitiendo contra C y C++ pero en muchos casos se ha demostrado superar a C++. En parte consigue esto de la misma manera que C y C++, no teniendo una maquina virtual por ejemplo, no teniendo un  garbage collector, etc.
Tiene metodos muy diversos para conseguir su velocidad.

Rust es un lenguaje multiparadigma, actualmente no es un lenguaje funcional pero si tiene muchas de sus particularidades e incluso puede adoptar el funcionamiento de un lenguaje funcional mediante crates (Paquetes/Bibliotecas/Librerias), estos crates funcionan realmente bien porque el lenguaje tiene una característica que es abstracción de coste cero.
No obstante como dije hay ciertas cosas adoptadas de funcional, debido a que Rust ha tenido mucha influencia por parte de este paradigma. 

La estructura que tiene Rust lo hace muy versátil, tanto para la programación orientada a objetos como a la programación funcional, lo que lo hace competir contra diversos lenguajes y una misma tarea se puede lograr completar de varias maneras diferentes, seguramente una más novedosa que la otra.

Incluso es versátil para otros lenguajes, se pueden importar funciones y tipos de otros lenguajes a Rust.
Rust principalmente tiene dos o tres lenguajes con los que se lleva especialmente bien, Python, C y JavaScript.

Python porque se ha buscado utilizar Rust para procesamiento de datos, a tal punto se ha llegado que actualmente instalando un crate uno puede escribir Python dentro de Rust utilizando macros.
Rust cuando surgió decía que era una alternativa  a C y C++ por lo que tiene bindings especiales para que esta migración de código sea más llevadera.
Y JavaScript debido a WebAssembly, intento muchísimas veces lograr que la comunicación entre JavaScript y Rust sea muy sencilla exportando el código a web. En efecto se ha conseguido. 

Rust es fácil de mantener, tiene una documentación bien estructurada y tiene una comunidad muy activa, tiene una plataforma, Rust Playground, que permite jugar con el lenguaje, ver cómo se comporta, por lo que esta herramienta es muy buena para compartir codigo, inclusive funciona con crates y puedes seleccionar la version de Rust y el numero de compilación del lenguaje si deseas.

¿Por qué no Rust?
Nunca, en la gran mayoría de casos personalmente deberíamos de optar por usarlo, no obstante, supuse que era importante señalar estos puntos.
Es de tipado fuerte, muy fuerte, es estático, es un lenguaje que por su diseño confiable tiene que ser muy restrictivo, y esto lo hace que sea algo más lento que otros lenguajes (En parte).
Personalmente se vuelve muy llevadero debido a que tiene una cierta inferencia de tipos, pero no obstante hay que tipar, sino te gusta esto, estas en problemas. Puedes evitar un poco esto usando genericos o crates que generen los tipos de forma automatica pero no es recomendable.

El tiempo de compilación en proyectos con muchas librerias (Al menos la primera vez), tarda un rato, al menos es mi caso compilando un juego llamado Veloren, juego open source hecho totalmente en Rust.

Rust es un lenguaje que tiene que ser leído, no es solo ver un video y ya, se practica y se lee, es muy difícil aprenderlo por la naturaleza del lenguaje como sucede en otros lenguajes como Python, JavaScript o Java, tiene otro nivel de dificultad. Una vez superada esa curva creo que se soluciona este problema pero en un comienzo todo va a ser preguntas. 
Como es de notar Rust no es un lenguaje para principiantes, sin embargo, hay muchas librerías y ejemplos para aprenderlo.

El playground no tiene modo oscuro como tal solo en el editor, no en la pagina entera.
Y no tiene casi documentación en español.

Muchos de los puntos que digo en esta lista tiene peros muy grandes, esto es porque realmente el lenguaje se esta consolidando como uno de los lenguajes con base más fuerte en la historia, desde la comunidad que es muy amable, los mantenedores del proyecto que aceptan feedback de forma constante, la documentación, las buenas practicas por las que optaron desde un comienzo, las ideas desde las que surge el lenguaje.

Realmente los únicos peros que encontré en el año que vengo intentando introducirme más en el entorno de desarrollo del lenguaje solo encontré esos motivos.
Un ultimo motivo, no menos importante pero si que creo que se va a ir solucionando con el tiempo, es que esta un poco eclipsado por un lenguaje como Go Lang donde la comunidad suele competir con Rust, sin mucho sentido a decir verdad porque son campos distintos, uno es un lenguaje low level que intenta escribirse como high level y otro es un lenguaje que parte desde el high level e intenta quitar abstracciones para llegar a una performance de low level. En algún punto lograran encontrarse pero hasta entonces son completamente diferentes.

No tienen punto de comparación, Go nació con marketing, librerías estándar, una empresa enorme detrás y personalmente con el paso del tiempo no esta logrando dar la talla, todo fue una parafernalia solo para que Google demuestre tener poder pero el lenguaje tiene una serie de problemas de base que denotan el porque Rust suele ser mejor que Go en la mayoría de cosas. 

---

Rust nació con una comunidad pequeña, el asincronismo fue uno de los grandes problemas por tanto la construcción de frameworks web y todo este tema fue un desastre durante bastante tiempo con la llegada de Deno el lenguaje empezó a sentar unas bases fuertes en el tema y por fin se están viendo frameworks web competentes en Rust.

Actualmente es posiblemente el lenguaje que más fuerte esta pegando en el mundo del CLI debido a lo fácil que se esta volviendo hacer buenos programas e interactuar con la consola.

Rust está logrando encontrar un nicho muy grande en CLI, en sistemas embebidos, computación en la nube, procesamiento, WebAssembly y ahora inclusive en sistemas operativos siendo adoptado por Windows, Linux, Android y actualmente nada oficial pero Mac ha estado contratando desarrolladores en este lenguaje.



 







