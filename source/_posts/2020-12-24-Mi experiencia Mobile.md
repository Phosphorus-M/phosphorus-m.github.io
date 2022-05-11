---
date: 2020-12-24 20:21:12
layout: post
title: "Mi experiencia mobile"
description: Explico mi percepción del mundo mobile
subtitle: Explico mi percepción del mundo mobile
category: 'Análisis'
tags: 
- Mobile
- Android
- Kotlin
- Flutter
- iOS
- React
- React Native
- Framework
- Java
- C#
- Web
- opinión
twitter_text: Explico mi percepción del mundo mobile
introduction: Explico mi percepción del mundo mobile
image: https://i.imgur.com/SU59vTO.png
optimized_image: https://i.imgur.com/zsznuJ1.png
paginate: false
two_columns_layout: false
---

Desde hace dos años o un poco antes he estado revisando el mundo mobile un poco distante, haciendo pruebas en Java, luego Kotlin, luego Flutter, finalmente hace unos meses React Native.

Ha cambiado bastante ya el mundo mobile no es lo que era antes diría a decir verdad, esto se debe particularmente a que ahora Google si busca abarcar también el mercado iOS de manera más sencilla.

Paso a explicar mi experiencia con cada herramienta.

### Java

Java es mi principal problema, detesto trabajar con XML.

Ha decir verdad he crecido como desarrollador y actualmente tengo una cierta fácilidad para programar en Java usando esos horribles XML.

Logre manejar mejor ciertos conceptos pero la verdad es que me disgusta mucho y el hecho de que no puedas portear apps Java pensadas en Android a iOS se volvio motivo de descarte para mi y para muchos otros, además de todos los problemas que trae el tema de las APIs de Android. 

Posiblemente es de las peores opciones junto a PhoneGap...

### PhoneGap

Bueno que decir, uno de los precursores en la idea de usar tecnología web para desarrollo mobile.

¿Qué es PhoneGap? Diría que la mejor idea seria un framework como tal, no tiene mucho más.

Funciona como un superset de un modulo nativo en Android, el WebView, cumple esa función, simplifica todo lo que seria modificar a mano todos los WebView para poder cargar nuestra aplicación entera (Lo he hecho manualmente un par de veces y debo decir que es horrible, problemas para cargar imágenes inclusive).

Sirvió para poblar un poco el mundo Android de apps pero a día de hoy es inviable, incluso peor que Java.
Poco tiempo después de ser comprado por Adobe salieron cosas mejores.

### Ionic / Capacitor

Los puse a los dos en la misma categoría porque bueno.

Muy buenos ambos, se esfuerzan mucho en hacer que las cosas funcionen pero primer problema cuando estaba Ionic estábamos forzados a usar Angular. Algo que no me había interesado mucho, ya desde ese momento incluso Angular no tenia taaan buenas opiniones. 

Con la llegada de Capacitor mejoro mucho, ya no estábamos ligados a Angular como tal y aparecieron proyectos como Quazar, que la verdad daban gusto usarlos, no obstante nos perdíamos de mucho al no ser nativo. Aunque sea algo nativo.

### Kotlin

Kotlin fue la llegada de soluciones, muchas a decir verdad pero seguíamos con la manera tradicional de trabajo, un designer y nosotros si queríamos editar cosas en detalles tal vez debíamos tocar el XML.

Soluciono temas relacionados con Java, primero que nada nos da una interoperatividad para que una migración sea más sencilla. Luego simplifica mucho el código, a decir verdad sin entrar en mucha profundidad he notado que el código se puede duplicar de forma muy sencilla en Android si utilizas Java. Kotlin no es que sea una solución mágica, pero reduce mucho las posibilidades de duplicar el código al simplificar tanto el uso del lenguaje, si quieres wrappear objetos el lenguaje te da esa posibilidad para conseguirlo en unas breves lineas.

Aparte de todo eso el principal problema de Java era el cambio de versiones de Android, distintos SDK y distintas API, eso traía problemas al subir de versiones. Kotlin promete solucionar eso con mucha sencillez y elegancia.

### Xamarin

Cuando arranque con C# decidí probar Xamarin, la verdad fue el que menos probé. Note que no estaba mal, un designer como Android Studio, XML, C# en vez de Java, era casi lo mismo pero se notaba mucho la diferencia. 

Más que nada por ese motivo no decidí seguí intentándolo, funcionaba bien pero bueno era demasiado raro y se notaba que no me iba a interesar hacer algo en Xamarin posiblemente nunca. 

### Flutter...

Con el paso del tiempo apareció Flutter, pero siento que no es adecuado hablar de Flutter si no hablamos de React Native primero, a que si bueno...

### React Native

El desarrollo de React Native es ágil, fluido, es magia negra realmente, funciona de maravilla.
Sobre todo trajo algo que no podía traer nadie más, la idea de que con un solo código vas a poder ejecutar aplicaciones iOS y Android, fue una revolución. 

¿Lenguaje de programación? JavaScript, TypeScript si eres una persona más cautelosa. 

React Native en las primeras versiones si bien funcionaba traía muchos más problemas de los que tiene ahora, debo decir que hoy en día es una delicia trabajar con React Native. Da gusto.

Y cuando digo muchos más problemas digo muchísimos más problemas, estoy siendo generoso, pero el paso del tiempo le ha ayudado muchísimo a madurar, empresas como Airbnb cometieron dos errores muuy grandes en mi opinión. Empezar el desarrollo de sus aplicaciones en React Native cuando era una versión muy nueva... y por otra parte abandonarlo cuando ya estaba bastante maduro... 

Proyectos como los de ellos si bien deben ser muy grandes debieron de tener otros problemas de buenas practicas supongo, falta de una buena arquitectura, no usar TypeScript y demás.

Ellos han aportado bastante al desarrollo de React Native en las primeras versiones pero no obstante no se supieron mantener en mi opinión.

Dejando del lado el tema de Airbnb React Native es interoperable con Java y no estoy seguro con Kotlin, Switft supongo que también tiene soporte pero es mundo aparte iOS para mi.

### Flutter ahora si...

Flutter ha tomado un buen camino y ha hecho trampa ligeramente. 
Explico lo que sucede, hasta ahora Java y Kotlin se centraban en hacer Apps que funcionen y tengan lógica, no se centraban tanto en lo visual, ni mucho menos en la portabilidad, se ejecuta sobre una JVM técnicamente son compatibles con todo ya. 

Bueno con la llegada React Native pensaron he no es tan mala idea ir a iOS también... y ¿Por qué es tan popular React Native? En eso encontraron que es más declarativa la programación, mucho más customizable la interfaz, más bonita, etc.
Sin embargo no es totalmente Nativo por decirlo así, ellos se apoyan en que si bien usan módulos nativos hay algunas cosas que necesitan un transpilador para operar con los módulos nativos.

Entonces ellos se les ocurre hacer Flutter para competir contra la tecnología de Facebook. 
Curiosamente Kotlin y React Native salen casi al mismo tiempo y el anuncio de Flutter no mucho después. 

Entonces ¿Qué es Flutter? Es más bien un SDK, debido a que funciona como Framework pero también como compiler de su lenguaje a módulos nativos.

¿Qué lenguaje debemos aprender si queremos usar Flutter? Dart. Si, salio Flutter anunciaron esto y todos dijimos que es Dart. La verdad es un lenguaje viejo parece, no fue muy popular al parecer, cumple un poco la función de CoffeeScript y de TypeScript, ser un super set de JavaScript.

No obstante Dart no tiene nada que ver con JavaScript, pero se nota mucha semejanza. 

¿Qué caracteriza a Flutter? Como framework es muuuy bonito, principalmente eso.
Lo curioso de esto es que hace un poco de trampa debido a que su interfaz es muuy bonita, pero tal vez no sea los más optimo, sin embargo se ve muy fluido, su mecánica para hacer que se vea tan fluida las apps es aprovechar GPU.

Flutter utiliza el motor de Unity (Si el de los jueguitos), de forma parcial claro, pero lo usa para crear su propia JVM por decirlo así, de esa forma ser mucho más portable y tener animaciones muuy fluidas.

### Análisis general

Java esta muy muerto, ya no es recomendable seguir usándolo para Android, muy engorroso, muchos problemas, nula portabilidad a iOS.

PhoneGap, lo mismo que Java, muertisimo, fuera.

Ionic y Capacitor, están ahí, se pueden usar, diría que para usar eso es mejor usar React Native, pero otros frameworks no se benefician tanto como React. No tuve experiencia con cosas como NativeScript pero puede ser una alternativa si quiere conseguir un mejor control, calculo que más engorroso pero esta ahí la opción.

Si usas Vue recomiendo apoyarse mucho en Quazar, si bien es Capacitor, el framework (Quazar) esta muy construido como para simular que no existe, dudo mucho que haya un framework de UI tan completo como Quazar en Vue. 

Kotlin... Parece ser el único en su tipo, la principal ventaja que vamos a tener con esto es que es Java pero mejor en todos los sentidos.

Xamarin, es una alternativa, dudo mucho que sea muuy mala, es distinta, supongo que si sabes C# y no estas pensando en aprender otra cosa es una opción muuy viable y la seguramente.

React Native, es genial, no hay nada que decir, sus animaciones tal vez no sean lo mejor del mundo pero bueno, funciona bastante bien para casi todo.

Flutter al igual React Native esta pensando para ser la vista, no para que se realice mucha lógica como tal, si bien en ambos casos se puede no es la idea, la idea es usar servicios para realizar lógica, APIs Web.

React Native como ya dije puede ser usado para iOS y Android, tiene una gran comunidad, y ayuda mucho a simplificar el stack tecnológico, es el primer bastión para un freelancer todo terreno o una Start Up.

Empodera mucho el hecho de que exista React para Web, Electron para desktop, React Native para Web y para mobile. 
En cualquier caso con un mismo lenguaje vas a poder abarcar todo el mercado, muchos puntos para las tecnologías de Facebook. Incluso hay un proyecto llamado Proton Native para hacer programas de escritorios nativos usando JSX.

Hasta el año pasado uno veía esto y no había forma que el resto compitiera contra el mundo JS. 

Al final y al cabo las mejores opciones eran React Native, Kotlin, Flutter.
Y el único que tenia tal nivel de portabilidad era React Native. Ganaba React Native sin dudarlo.

Este año en una Google Keynote a la que tuve a suerte de asistir con la comunidad de [Google Developers Group Buenos Aires](https://twitter.com/gdgbsas?lang=es) nos enteramos que por parte de Google que ahora iba a ser posible usar Flutter para todo lo que React Native ya venia haciendo.

Es decir Flutter ahora iba a ser compatible con Web, Desktop y Mobile, es decir digo esas palabras porque generalizo.
Esto incluye web, MacOS, Linux, Windows, iOS y Android, finalmente Flutter era un gran competidor.

Y unos meses antes me había enterado por parte de unos desarrolladores de Kotlin que habían organizado un evento que se estaba haciendo un branch de desarrollo dentro de lo que es Kotlin para portear apps de Android a iOS también.

Es decir con Kotlin se iba a poder portear a iOS.
Kotlin también es viable usarse para lo que es Backend por si les interesa. 

Flutter por su parte es unicamente lógica frontend.

Es decir sigue estando en desventaja pero se ha reducido muchisimo la diferencia entre tecnologías.

Por otra parte uno de los problemas de Kotlin que era usar el designer y las vistas con XML, ahora por lo que he escuchado ya no es necesario. No lo he comprobado pero viene de una fuente confiable. 
Un divulgador del desarrollo en Android, [José Dimas Luján](https://twitter.com/josedlujan).

### Opinión personal

React Native sigue ganando, Flutter se quiere vender como algo genial. No noto que sea como lo intentan vender, va traer muchos problemas para mi el hecho de que se lo quiera usar para desarrollo Web por parte de Google, no es un estándar y terminara siendo un transpiler que ocasionara problemas.

Sabiendo JS/TS uno puede abarcar todo, backend, frontend, etc. esta bien que se deben agregar capas como React y React Native pero es una genialidad lo bueno que puede ser como un stack tecnológico. 

Kotlin por otra parte me parece que no es una mala opción. 
Es muy viable su uso ya que le veo más utilidad a hacer backend y mobile, por lo menos más que con Flutter hacer frontend parcialmente, debido a que dependes en totalidad a las utilidades que da el SDK y en Kotlin dependes del lenguaje.

El hecho de que sea bonito por defecto y tenga animaciones más fluidas, no lo veo razonable, además que es uso de GPU para lograr esa fluidez. 

En fin de momento seguiré desarrollando en React Native pero estoy considerando el uso de Kotlin en un futuro debido a ese ultimo cambio en el que las vistas se volverán más declarativas y además sera posible portear a iOS.

Gracias por leer, pueden compartir su opinión al respecto en los comentarios si desean o contar algo más acerca del tema. 