# Obteniendo más entrevistas

## Lista de elementos necesarios para crear tu curriculum

- Usar un diseño predefinido de algún sitio web.
- Que todo esté en una y sólo una página.
- Incluir palabras de la descripción del trabajo al que se está aplicando al inicio del CV.
- Incluir el nombre de la compañía a la que se está aplicando.
- ¿El primer item de tu CV refleja qué está buscando la compañía?
- Describir tu experiencia demuestra valor (resaltar el puesto, no el nombre de la compañía en la que se trabajó).
- Tener un enlace a algún sitio online (portafolio, GitHub, etc).
- No decir "Yo" en el CV.
- No usar palabras de moda describiendo qué tan bueno soy.
- Usar palabras de acción, es decir no sólo decir qué lenguajes sé, sino también indicar tareas como "Testing, mantenimiento y soporte de servidores de producción" que concluyan en el resultado final.
- Menciona todo en términos de impacto, no sólo describir las responsabilidades.
- Conocimiento y habilidades técnicas deben incluir qué busca la compañía, sólo mostrar años si causa impresión/impacto.
- Sólo incluir secciones/items que causan impresión: Experiencia, proyectos, educación, habilidades técnicas, etc.
- Evitar la mala gramática y errores ortográficos.

Enlaces para elementos útiles:
- [Plantilla para CV](https://www.resumemaker.online/es)
- [Herramienta para verificar mi CV](https://www.jobscan.co/)
- [Más plantillas](https://www.cakeresume.com/Engineering-resume-samples)
- [Otra plantilla](https://thisresumedoesnotexist.com/)
- [Guía de StackOverflow para hacer mi CV](https://stackoverflow.blog/2020/11/25/how-to-write-an-effective-developer-resume-advice-from-a-hiring-manager/)


### Demostrar experiencia

- GitHub.
- Website.
- 1 o 2 proyectos grandes.
- Blog.


# Big O

Nos permite validar el tiempo de ejecución usando la cantidad de elementos y la cantidad de operaciones. A continuación una gráfica mostrando qué tan buena es una complejidad Big O.

![Gráfica Big O](https://i.ibb.co/CMHHnKC/image.png)

También una tabla con toda la información de la complejidad de las operaciones para cada estructura de dato:

![Tabla estructuras de datos](https://i.ibb.co/C6t3zn4/image.png)

Y por último la complejidad de algunos algoritmos que ordenan los datos de los arreglos:

![Tabla algoritmos arreglos](https://i.ibb.co/4J72hRj/image.png)

## Reglas Big O

### 1. Peor caso
Siempre nos concentramos en el peor caso con $O$ ya que $\Omega$ sólo representa el mejor de los casos y $\Theta$ el caso promedio. Esto lo hacemos ya que al tener el cálculo del peor caso podremos validar el valor máximo de tiempo de ejecución de nuestro código para tener una buena escalabilidad.

### 2. Eliminar constantes
Siempre hacer nuestros cálculos con base a $n$ si nuestro Big O no es $O(1)$, es decir olvidarnos de las constantes.

### 3. Diferentes términos para valores de entrada
Si hay una entrada $n$ y una entrada $m$ en nuestro código, es importante hacer nuestros cálculos de Big O usando variables distintas. Así sean 1 ciclo `for` para cada arreglo el Big O final será $O(n + m)$, no $O(n)$ y para 1 ciclo dentro de otro el Big O final será $O(n * m)$ y no $O(n^2)$.

### 4. Eliminar no dominantes
Siempre dejar el Big O dominante, descartar los otros, recordar que nos interesa el Big O mayor, por lo que si tenemos un $O(n^2 + 3n)$ el Big O final será $O(n^2)$.

Con todas estas recomendaciones y tips podemos decir que para mejorar nuestro código debemos usar estructuras de datos y algoritmos, entendiendo que las estructuras de datos son alternativas para guardar nuestra información y los algoritmos son formas de usar nuestras estructuras de código para escribir nuestro código.


## Ejemplos de Big O

### $O(1)$ 
Bloques de código sin ciclos.
```
const boxes = [0, 1, 2, 3, 4, 5];

function logFirstTwoBoxes(boxes) {
	console.log(boxes[0]);
	console.log(boxes[1]);
}

logFirstTwoBoxes(boxes);
```

### $O(log_n)$
Usualmente algoritmos de búsqueda tienen $log_n$ si estos están ordenados (Binary search) (no aplica para Hash Maps).
```
// Level 0: 2^0 = 1;
// Level 1: 2^1 = 2;
// Level 2: 2^2 = 4;
// Level 3: 2^3 = 8;
// # of nodes = 2^h - 1
// log nodes = height (log 100 = 2 => 10^2 = 100)
```

### $O(n)$
Bloques de código con ciclos de un nivel.
```
const nemo = ["nemo"];
const everyone = ["dory", "bruce", "marlin", "nemo", "gill", "bloat", "nigel", "squirt", "darla", "hank"];
const large = new Array(100000).fill("nemo");

function findNemo(array) {
	for(let i = 0; i < array.length; i++) {
		if(array[i] === "nemo") {
			console.log("Found NEMO!");
		}
	}
}

findNemo(large);
```

### $O(n * log_n)$
Suelen ser algoritmos con operaciones de ordenamiento.

### $O(n^2)$
Cada elemento en una colección necesita ser comparado con cada uno de los restantes, por ende se necesitan 2 ciclos.
```
const boxes = ["a", "b", "c", "d", "e"];

function logAllPairsOfArray(array) {
	for(let i = 0; i < array.length; i++) {
		for(let j = 0; j < array.length; j++) {
			console.log(i, j);
		}
	}
}

logAllPairsOfArray(boxes);
```

### $O(2^n)$
Algoritmos recursivos que resuelven un problema de tamaño $n$.

### $O(n!)$
Se agrega un ciclo para cada elemento en $n$.
```
function breakMyBrowser(n) {
	for(let i = 0; i < n; i++) {
		breakMyBrowser(n - 1);
	}
}

breakMyBrowser(7);
```


## Pilares de la programación

### 1. Legible
El código se entiende bien, es código limpio, claro, conciso y no tenemos código repetido, si es así debemos refactorizar para que quede en funciones y así optimizar el código.

### 2. Escalable
- **Velocidad:** Qué tan rápido es nuestro tiempo de ejecución, cuántas operaciones se deben ejecutar.
- **Memoria:** Las computadoras tienen memoria limitada, por lo que debemos tener cuidado con nuestro código con **space complexity**. Es importante tener presente que si queremos usar menos memoria tendremos que sacrificar la velocidad o **time complexity** y si queremos mejorar nuestro tiempo de ejecución requeriremos usar más memoria.


## Space complexity

Cuando un programa se ejecuta, tiene 2 formas de recordar las cosas, el heap (montón) y stack (pila). El montón es donde usualmente guardamos variables con los valores que les asignamos y la pila donde solemos seguir los llamados de nuestras funciones.

Las cosas que incrementan nuestro **space complexity** son:
- Variables.
- Estructuras de datos.
- Llamados de funciones.
- Asignaciones.

Y a continuación un ejemplo de código donde el space complexity de nuestro código es $O(1)$ ya que la única asignación que se realiza es en el `for` para la variable $i$ y el `i++` no se tiene en cuenta ya que a pesar de alterar la variable sigue siendo el mismo espacio en memoria asignado desde un principio:
```
function booooo(n) {
	for(let i = 0; i < n.length; i++) {
		console.log("boooooo!");
	}
}

booooo([1, 2, 3, 4, 5]);
```

Y para el ejemplo 2 un space complexity de $O(n)$ por la asignación de variable en cada iteración para la variable `hiArray` ya que estamos requiriendo más espacios en memoria para cada elemento $i$ que iteramos:
```
function arrayOfHiNTimes(n) {
	let hiArray = [];

	for(let i = 0; i < n; i++) {
		hiArray[i] = "hi";
	}

	return hiArray;
}

arrayOfHiNTimes(6);
```


# ¿Cómo resolver problemas de código?

## ¿Qué buscan las compañías?

- **Habilidades analíticas:** Cómo puedes pensar en un problema y analizar cosas para solucionar. Cuando estoy en una entrevista técnica es importante decir lo que estoy pensando, eso les interesa.
- **Habilidades de programación:** Qué tan bueno es mi código, si es limpio, organizado, legible.
- **Habilidades técnicas:** Conocimiento técnico, si sé los fundamentos, si entiendo los pros y contras de las diferentes soluciones o si sólo memorizo cosas.
- **Habilidades de comunicación:** Si mi personalidad hace juego con la personalidad de la compañía, si soy bueno para liderar, trabajar en equipo, etc.


## ¿Qué necesitamos para las entrevistas técnicas?

### Estructuras de datos
- Arrays (arreglos).
- Stacks (pilas).
- Queues (colas).
- Linked Lists (listas enlazadas).
- Trees (árboles).
- Tries.
- Graphs (grafos).
- Hash Tables (tablas hash).

### Algoritmos
- Sorting (ordenamiento).
- Dynamic Programming (programación dinámica).
- BFS + DFS (Searching) (algoritmos de búsqueda en grafos).
- Recursion.


## Paso a paso para responder

- **1.** Cuando el entrevistador dice la pregunta, escribir los puntos claves al inicio (por ejemplo arreglo ordenado). Estar seguro que tengo todos los detalles. Mostrar qué tan organizado soy.
- **2.** Asegurarme de hacer un doble chequeo: Cuáles son las entradas, cuáles son las salidas.
- **3.** ¿Cuál es el que más se quiere optimizar en el problema? Tiempo, espacio y memoria, etc. ¿Cuál es el objetivo principal?
- **4.** No preocuparme porque hago muchas preguntas.
- **5.** Empezar con la fuerza bruta. Lo primero que se me venta a la mente. Eso demuestra que estoy dispuesto a pensar bien y críticamente (no necesito escribir el código, sólo mencionarlo).
- **6.** Decirles por qué mi intento no es el mejor (por ejemplo es $O(n^2)$ o superior, no legible, etc).
- **7.** Ir sobre mi enfoque, comentar cosas y ver cómo puedo romper las cosas. Cualquier repetición, cuellos de botella como $O(n^2)$, o trabajo innecesario. ¿Usé toda la información que el entrevistador me dió? Cuellos de botella son parte del código con el mayor Big O. Enforcarme en ello. A veces esto también ocurre con el trabajo repetido.
- **8.** Antes de empezar a escribir código, ir a través de mi código y escribir los pasos que voy a seguir.
- **9.** Modularizar mi código desde el principio. Dividir mi código en pequeñas lindas piezas y sólo comentarlo si lo necesito.
- **10.** Ahora empezar a escribir el código. Tener en mente que cuanto más me prepare y entienda lo que debo solucionar, mejor me irá en el tablero. Así que nunca empezar a solucionar el problema en el tablero sin estar seguro de cómo deben funcionar las cosas. Eso es una receta para un desastre. Tener en mente: Muchas entrevistas preguntan cosas que no responderé completamente a tiempo. Así que debo pensar: ¿Qué puedo mostrar en función de indicar qué puedo hacer y por qué soy mejor que otros programadores? Dividir en funciones (si no puedo recordar un método, sólo inventar una función y al menos estará ahí). Escribir algo y comenzar con el resto.
- **11.** Pensar en la validación de errores y cómo puedo romper mi código. Nunca asumir sobre la entrada. Asumir que las personas están tratando de romper mi código y que ese Darth Vades está usando mi función. ¿Cómo lo aseguraré? Siempre chequear falsas entradas que yo no quiero. Aquí hay un truco: Comentar en código, las validaciones que yo quiero hacer... escribir la función, decirle al entrevistador que yo escribiría pruebas ahora para hacer mi función fallar (pero no necesitaré actualmente escribir las pruebas).
- **12.** No usar nombres confusos para las variables (ejemplo i o j). Escribir código que se pueda leer bien.
- **13.** Probar mi código: Validar no envío de parámetros, 0, undefined, null, arreglos masivos, código asíncrono, etc... Preguntar al entrevistador si puedo hacer suposiciones sobre el código. ¿Puedo hacer la respuesta retornar un error? Cavar agujeros en mi solución. ¿Estoy repitiéndome?
- **14.** Finalmente decirle al entrevistador dónde mejoraría mi código, ¿Funciona? ¿Hay diferentes enfoques? ¿Es legible? ¿Qué Googlearía para mejorar? ¿Cómo puede mejorar el rendimiento? Posiblemente: Preguntar al entrevistador cuál fue la solución más interesante que ha visto para ese problema.
- **15.** Si el entrevistar está feliz con la solución, la entrevista suele finalizar aquí. También es común que el entrevistador me pregunte más cosas, por ejemplo cómo manejaría el problema si toda la entrada es demasiado grande para caber en memoria, o si la entrada llega como un flujo. Esta es una pregunta de seguimiento común en Google, donde se preocupan mucho por la escala. La respuesta suele ser un enfoque de divide y vencerás: realiza un procesamiento distribuido de los datos y solo lee ciertos resquicios de la entrada del disco en la memoria, escribe la salida de nuevo en el disco y combínalos más tarde.


## Lista para buen código

- Funciona.
- Buen uso de las estructuras de datos.
- Reusar código, no repetir.
- Modular - el código es legible, testeable y mantenible.
- Menos de $O(n^2)$. Queremos evitar ciclos anidados si podemos. 2 ciclos separados son mejores que tenerlos unidos.
- Baja complejidad espacial - Recursión puede causar "stack overflow", copia de grandes arreglos podría superar la memoria de la máquina.


## Heurísticas para resolver la pregunta
- Hash Tables suelen ser la respuesta para mejorar nuestra complejidad de tiempo.
- Si es un arreglo ordenado, usar árboles binarios para conseguir $O(log_n)$. Dividir y conquistar - Dividir la información en pequeñas partes y repetir el proceso con pequeñas partes de información. Búsqueda binaria es un gran ejemplo de esto.
- Intentar ordenar el valor de entrada.
- Hash Tables e información precomputada (por ejemplo ordenada) son unos de los mejores caminos para optimizar el código.
- Hacer una comparación tiempo vs espacio. A veces guardar cierta data extra en nuestra memoria puede mejorar el tiempo (tiempo de ejecución).
- Si el entrevistador me está dando algún aviso/consejo/tip hacerle caso y seguirlo.
- Compensaciones espacio tiempo: Hash Tables suelen solucionar esto la mayoría de las veces. Usas más espacio pero puedes conseguir una mejora en el tiempo. En programación, a veces puedes usar un poco más de espacio para ser más veloces en tiempo.


# Estructuras de datos

## Arrays

| Estructura de dato | Lookup | Push | Insertar| Eliminar|
|--|--|--|--|--|
| Arreglo | $O(1)$ | $O(1)$ | $O(n)$ | $O(n)$ |

```
const strings = ["a", "b", "c", "d"];
// 4*4 = 16 bytes de almacenamiento
// Recordar que una variable ("a" por ejemplo) requiere 32 bits de almacenamiento, es decir 4 bytes

// Acceso
strings[2]; // O(1)

// Push (insertar al final)
strings.push("e"); // O(1)

// Pop (eliminar el último)
strings.pop(); // O(1)

// Unshift (insertar al inicio)
strings.unshift("x"); // O(n)

// Splice (insertar elemento en arreglo en posición específica)
strings.splice(2, 0, "alien"); // O(n/2) => O(n)
```

### Arreglos estáticos vs arreglos dinámicos
- **Arreglos estáticos:** Tiene un tamaño fijo, necesitas especificar el número de elementos que deseas que tenga el arreglo.
- **Arreglos dinámicos:** Nos permiten copiar y rehacer un arreglo en una nueva ubicación de memoria si necesitamos más espacio, esto quiere decir que el tamaño es flexible.

**Ejemplo:**
```
// Arreglos estáticos (C++)
int a[20];
int b[5] = {1, 2, 3, 4, 5}

// Arreglos dinámicos (JavaScript)
let a = [];
a.push(5);
```

Aunque a grandes rasgos los arreglos dinámicos parecen mejores debemos tener en cuenta que si necesitamos tener un control estricto de la memoria será más fácil controlar la complejidad espacial con arreglos estáticos.

**Nota:** Siempre en las entrevistas técnicas ver los `strings` como `arreglos`.

![Imagen arreglos](https://media.geeksforgeeks.org/wp-content/uploads/C-Arrays.jpg)

#### Ventajas
- Rápidas búsquedas.
- Rápidas inserciones y eliminaciones en el último elemento.
- Si está ordenado es bueno porque tiene todo ubicado cercanamente en memoria, lo que lo hace rápido.

#### Desventajas
- Inserciones lentas para posiciones diferentes a la última ya que se debe reescribir los índices de los demás elementos para poder acceder a ellos.
- Eliminaciones lentas por la misma razón que las inserciones.
- Si se usan arreglos estáticos tienes un tamaño fijo.


## Hash tables

| Estructura de dato | Lookup | Buscar | Insertar | Eliminar|
|--|--|--|--|--|
| Hash table | $O(1)$ | $O(1)$ | $O(1)$ | $O(1)$ |

Las tablas Hash o más conocidas como Hash tables están en casi todos los lenguajes de programación modernos, en Python son los diccionarios, en JavaScript objetos, etc.

Las funciones Hash reciben un string y la función genera un patrón aleatorio.

```
let user = {
	age: 54,
	name: "Kylie",
	magic: true,
	scream: function {
	console.log("ahhhhhhh!");
};

user.age; // O(1)
user.spell = "abra kadabra"; // O(1)
user.scream(); // O(1)

// Collision => O(n/k) => O(n)

// Map permite guardar cualquier tipo de dato como una llave del map, además mantienen el orden de inserción
const a = new Map();

// Set sólo guarda las llaves, no los valores
const b = new Set();
```

![Imagen Hash Tables](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Hash_table_5_0_1_1_1_1_1_LL.svg/450px-Hash_table_5_0_1_1_1_1_1_LL.svg.png)

#### Ventajas (buena resolución de colisión necesaria)
- Búsquedas rápidas.
- Inserciones rápidas.
- Llaves flexibles.

#### Desventajas
- No tiene orden.
- Si quiero recorrer todas las llaves es lento.


## Linked Lists

| Estructura de dato | Prepend (agregar al inicio) | Append | Lookup | Insert | Delete |
|--|--|--|--|--|--|
| Linked List | $O(1)$ | $O(1)$ | $O(n)$ | $O(n)$ | $O(n)$ |

Las Listas Enlazadas o Linked Lists son elementos que están relacionados/relacionados con otros, generando una conexión 1 a 1 para cada elementos de nuestra estructura de datos. Estos datos pueden estar ordenados o desordenados.

Las Listas Enlazadas pueden tener una gran ventaja si las comparamos con los arreglos, y es que si agregamos un elemento al inicio de un arreglo va a ser necesario reposicionar los demás elementos para poder tener el orden de índices correcto, mientras que con las Listas Enlazadas no, ya que no cuentan con índices y son los elementos los que están relacionados directamente.

La ventana de las Listas Enlazadas sobre Tablas Hash es que de cierta forma hay un orden, mientras que en Hash Tables sólo hay elementos ubicados en espacios de memoria sin relación alguna.

La gran diferencia entre Listas Enlazadas y Listas Doblemente Enlazadas es que las sencillas permiten hacer una rápida inserción cuando se hace al inicio o al final ya que estas operaciones son $O(1)$, y con las dobles es que al tener una relación bidireccional podemos hacer recorridos en ambos sentidos, y esto nos permite poner al reverso la lista sin problema.

```
const basket = ["apples", "grapes", "pears"];

// Linked List: apples --> grapes --> pears
// Ejemplo de ubicación en memoria
// apples
// 8947 --> grapes
//          8742 --> pears
//                   372 --> null

const obj1 = {a: true};
const obj2 = obj1;
obj1.a = "booya";
delete obj1;
// console.log("1", obj1);
console.log("2", obj2); // No se borra
```

![Imagen Linked Lists](https://res.cloudinary.com/practicaldev/image/fetch/s--QTk9XbRm--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/kvnpce96zqdxu73hp6oe.png)

#### Ventajas
- Rápidas inserciones (si tenemos referencias directas como inicio y final).
- Rápidas eliminaciones (si tenemos referencias directas como inicio y final).
- Puede ser ordenado.
- Tamaño flexible.

#### Desventajas
- Búsqueda lenta.
- Requiere de más memoria.


## Stacks

| Estructura de dato | Lookup | Pop | Push | Peek |
|--|--|--|--|--|
| Stack | $O(n)$ | $O(1)$ | $O(1)$ | $O(1)$ |

Las pilas o stacks es un tipo de estructura de data que son como platos, tenemos una pieza de información y luego ponemos otra encima, y así sucesivamente, y al tener toda esta información apilada sólo puedes ir extrayéndola desde la última a la primera, así es LIFO (Last In First Out). Son muy útiles cuando por ejemplo necesitas visualizar el último elemento agregado a la pila, otro ejemplo es el historial de tu navegador, y para regresar usas una pila y vas eliminando el primero cada vez que das atrás.

![Imagen Stacks](https://cdn.programiz.com/sites/tutorial2program/files/stack.png)

#### Ventajas
- Rápidas operaciones.
- Acceso rápido al primer/último elemento.
- Ordenado.

#### Desventajas
- Búsqueda lenta.

## Queues

| Estructura de dato | Lookup | Enqueue | Dequeue | Peek |
|--|--|--|--|--|
| Queue | $O(n)$ | $O(1)$ | $O(1)$ | $O(1)$ |

Las colas o pilas son como una fila, y la primera persona en llegar entra, ese es su funcionamiento, así es FIFO (First In First Out). Otro ejemplo es Uber cuando una persona solicita un servicio de transporte y luego otra, le va a dar prioridad con la primera y una vez asigna el transporte para esta seguirá con la segunda y así sucesivamente. No es recomendable usar arreglos para crear colas, ya que al eliminar el primer elemento requerimos de actualizar los índices de todos los demás elementos.

![Imagen Queues](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221213113312/Queue-Data-Structures.png)

#### Ventajas
- Rápidas operaciones.
- Acceso rápido al primer/último elemento.
- Ordenado.

#### Desventajas
- Búsqueda lenta.


## Trees

Los árboles son nodos que pueden tener n cantidad de hijos, tienen un nodo raíz y cada uno de los hijos desciende de este nodo, la relación entre padre e hijo es unidireccional y hay nodos hojas que son aquellos que no tienen hijos. Un ejemplo de implementación de árboles es el HTML siendo la etiqueta `html` la raíz de todo.

![Imagen Trees](https://algorithmtutor.com/images/tree.png)

### Binary Tree

Cada nodo puede tener sólo 0, 1 o 2 nodos, y cada hijo sólo puede tener un padre.

Un árbol binario perfecto es parejo, es decir que todos los nodos hoja están llenos y no hay ningún nodo que tenga un sólo hijo, es decir que pueden tener 0 o 2 hijos, además el último nivel del árbol está lleno de nodos hoja. Cada nivel tiene la doble cantidad de nodos que el nivel anterior.

Un árbol binario completo es aquel donde todos los nodos tienen 0 o 2 hijos, pero no necesariamente es parejo.

### Binary Search Tree

Su máxima desventaja es que pueden quedar muy disparejos los niveles de los nodos ya que un lado puede quedar mucho más cargado de datos que el otro.

| Estructura de dato | Lookup | Insert | Delete |
|--|--|--|--|
| Binary Search Tree | $O(log_n)$ | $O(log_n)$ | $O(log_n)$ |
| Binary Search Tree muy cargado de un lado | $O(n)$ | $O(n)$ | $O(n)$ |

![Imagen Binary Search Trees](https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Binary_search_tree.svg/1200px-Binary_search_tree.svg.png)

#### Ventajas
- Mejor que $O(n)$.
- Ordenado.
- Tamaño flexible.

#### Desventajas
- No hay operaciones constantes, es decir $O(1)$.

### Balanced Search Trees

Usualmente en producción querremos usar árboles de búsqueda balanceados, ya que si un árbol es desbalanceado como el de la sección anterior puede darse que las operaciones sean $O(n)$ y no $O(log_n)$, lo cual afectaría drásticamente nuestro rendimiento.

#### AVL Trees
Son árboles balanceados que validan en cada inserción/eliminación la longitud de ambos lados del árbol, y al tener una diferencia de longitud en ambos lados reestructurará el árbol dirigiendo el padre del elemento que estamos agregando como padre de su padre, a continuación una representación:
```
      15             
     /  \            
   6       50        
  / \     /  \       
4    7  23    71     
 \              \    
  5              77
```

Y al insertar el elemento 80 haría este proceso:
```
      15             
     /  \            
   6       50        
  / \     /  \       
4    7  23    71     
 \              \    
  5              77  
                   \ 
                   80
```

```
      15           
     /  \          
   6       50      
  / \     /  \     
4    7  23     77  
 \            /  \ 
  5          71  80
```

![Imagen AVL Trees](https://www.programiz.com/sites/tutorial2program/files/avl-tree_update-bf.png)

#### Red Black Trees
Para estos árboles se indica un color para cada nodo, la raíz siempre debe ser de color negro y van a ir cambiando los colores por cada nivel.

**Propiedades:**
1.  El autoequilibrio se proporciona pintando cada nodo con dos colores (rojo o negro).
2.  Cuando se modifica el árbol, se reorganiza y pinta un nuevo árbol.
3.  Requiere 1 bit de información de color para cada nodo en el árbol.
4.  Complejidad temporal: $O(log_n)$.

**Restricciones:**
1.  La raíz siempre es negra.
2.  Todas las hojas NULL son negras y los dos hijos de un nodo rojo son negros.
3.  Todo camino simple desde un nodo dado a cualquiera de sus hojas descendientes contiene el mismo número de  
    nodos negros.
4.  El camino desde la raíz hasta la hoja más lejana no es más del doble que el camino desde la raíz hasta la hoja más cercana.
5.  Complejidad temporal: $O(log_n)$.

 Por ejemplo, si tenemos el siguiente árbol:

```
  9(n)          
   \          
   10(r)
```

Y queremos agregar el nodo 11, se hará el siguiente proceso

```
  9(n)        
   \          
   10(r)
     \          
     11(r)
```

```
  10(n)        
 /  \          
9(r) 11(r)
```

![Imagen Red Black Trees](https://cs.lmu.edu/~ray/images/redblacktree.png)

#### AVL trees vs Red Black Trees
Tanto los árboles rojo-negro como los árboles AVL son los árboles de búsqueda binarios equilibrados más utilizados y admiten la inserción, eliminación y búsqueda en tiempo $O(log_n)$ garantizado. Sin embargo, hay los siguientes puntos de comparación entre los dos:

- Los árboles AVL tienen un equilibrio más rígido y, por lo tanto, proporcionan búsquedas más rápidas. Por lo tanto, para una tarea intensiva de búsqueda, use un árbol AVL.
- Para tareas intensivas de inserción, utilice un árbol rojo-negro.
- Los árboles AVL almacenan el factor de equilibrio en cada nodo. Esto toma $O(n)$ espacio extra. Sin embargo, si sabemos que las claves que se insertarán en el árbol siempre serán mayores que cero, podemos usar el bit de signo de las claves para almacenar la información de color de un árbol rojo-negro. Por lo tanto, en tales casos, el árbol rojo-negro no ocupa espacio adicional.

Los árboles rojo-negros son de uso más general. Lo hacen relativamente bien en agregar, eliminar y buscar, pero los árboles AVL tienen búsquedas más rápidas a costa de agregar/eliminar más lento.

### Binary Heaps

#### Binary Heap
Binary Heaps son árboles que van ordenados de mayor a menor o menor a mayor, es decir que la raíz es el valor más grande de todos o en el caso contrario el valor más pequeño, no tiene un orden en sí por nodo, sino que va priorizado por el valor dependiendo de si es Max Heap o Min heap.

| Estructura de dato | Lookup | Insert | Delete |
|--|--|--|--|
| Binary Heap | $O(n)$ | $O(log_n)$ | $O(log_n)$ |

```
     101    
   /    \   
 72      33 
/  \    /  \
2  45   5   1
```

Son muy buenos en operaciones de comparación cuando son valores cercanos, por ejemplo podríamos decir que queremos insertar personas que tienen un valor alrededor de 33, porque en ese caso simplemente podemos grabar esos items al inicio del árbol sin necesidad de buscar hasta lo más profundo de este mismo.

Tener en cuenta que Memory Heap no es lo mismo que Binary Heap.

##### Priority Queue
Es el mismo comportamiento de las colas pero existe la prioridad, es decir que pueden llegar valores de últimos con mayor prioridad que serán operados primero, pero esto se construye con ayuda de árboles (Binary Heaps) por lo que el orden no será por los valores, será por su prioridad.

![Imagen Binary Heaps](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221220165711/MinHeapAndMaxHeap1.png)

#### Ventajas
- Mejor que $O(n)$.
- Priorizado.
- Tamaño flexible.
- Rápida inserción

#### Desventajas
- Búsquedas lentas.

### Trie

Es un árbol especializado en búsqueda, sobretodo con textos, y en algunos casos puede superar a los árboles de búsqueda binaria, tablas hash y otras estructuras de datos.

Los Tries nos permiten saber si una palabra, o parte de una palabra existe en un string. La raíz en sí no tiene valor, y de ella se desprenden las letras, y cada letras tendrá las demás letras asociadas a la letra raíz de la palabra que estamos insertando. Con esta estructura de datos podemos hacer sugerencias ha que al buscar las palabras que está colocando el usuario podemos ir conectando con nuestros datos. Su complejidad de tiempo es $O(n)$ donde $n$ es la longitud de la palabra.

![Imagen Tries](https://theoryofprogramming.files.wordpress.com/2015/01/trie12.jpg)


## Graphs

Los Grafos son unas de las estructuras de datos más usadas en ciencias de la computación. Es simplemente un conjunto de valores que están relacionados en pares, es como una pequeña red con distintos nodos/vértices y estos están conectados mediante sus aristas. Podemos usar los Grafos para representar redes en la World Wide Web, árboles genealógicos, o incluso para representar caminos, como hace Google Maps indicando las conexiones entre vértices para llegar de un punto A a un punto B.

![Imagen Graphs](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/6n-graf.svg/1200px-6n-graf.svg.png)

Hay varios tipos de Grafos, los dirigidos y no dirigidos, los dirigidos indican en qué sentido va la conexión, los no dirigidos simplemente están conectados sin indicar si estos van en sentido de un nodo a otro.

![Imagen Directed and Undirected Graphs](http://4.bp.blogspot.com/-gjVEx8DXip0/UnPt3mA039I/AAAAAAAAAFs/2mek_diAbi8/s1600/10.png)

También están los Weighted y Unweighted Graphs, que son aquellos que tienen o no tienen un valor de costo en las aristas que conectan los distintos nodos.

![Imagen Weighted and Unweighted Graphs](https://global-uploads.webflow.com/5d0dc87aac109e1ffdbe379c/60e19743a601cb5dff42ce85_jd.png)

Y también están los Grafos cíclicos y acíclicos, estos son los que tienen o no conexiones que permiten ir en círculos alrededor de los nodos como se representa en la imagen.

![Imagen Cyclic and Acyclic Graphs](https://www.codingeek.com/wp-content/uploads/2016/11/cyclic.png)

### ¿Cómo representar Grafos en código?

Supongamos que queremos construir el siguiente Grafo:
```
  2 - 0     
 / \          
1 - 3
```

Podríamos hacer lo siguiente en JavaScript:
```
// Edge List
const graph = [[0, 2], [2, 3], [2, 1], [1, 3]];

// Adjacent List (el index del arreglo es el valor del actual nodo del grafo)
const graph = [[2], [2, 3], [0, 1, 3], [1, 2]];

// Adjacent Matrix (el index del arreglo es el valor del actual nodo del grafo y los 0 significa que no hay conexión, el 1 que sí la hay)
const graph = [
	[0, 0, 1, 0],
	[0, 0, 1, 1],
	[1, 1, 0, 1],
	[0, 1, 1, 0]
];
// O también
const graph = {
	0: [0, 0, 1, 0],
	1: [0, 0, 1, 1],
	2: [1, 1, 0, 1],
	3: [0, 1, 1, 0]
};
```

#### Ventajas
- Al ser relacionado nos permite conectar elementos unos con otros fácilmente.

#### Desventajas
- Escalamiento difícil.


# Algoritmos

## Recursividad

Es una función que se llama a sí misma para solucionar un problema, es importante definir los parámetros para detener la función, ya que si no lo hacemos la función seguirá ejecutándose infinitamente. Para crear una función recursiva se deben tener en cuenta los siguientes aspectos:

- Identificar la base, es decir cuándo parar la ejecución.
- Identificar el llamado recursivo, para garantizar que el algoritmo sea correcto.
- Usar la palabra reservada `return` siempre que sea necesario, ya que sólo así podremos extraer el valor que estamos calculando en los llamados, por ende debemos hacer un `return` en el caso de parada y también en cada llamado que se hace a la función nuevamente por lo que generalmente son 2 `return`.

### Recursividad vs programación iterativa

Cualquier cosa que hagamos con recursividad puede ser implementada con programación iterativa (ciclos).

Con recursividad tendremos problemas de rendimiento ya que pueden tender a tener complejidad espacial de $O(2^n)$ pero también nos permite tener un código más legible eliminando los ciclos que pueden confundirnos.

A pesar de que la recursividad es una herramienta potente que nos permite hacer implementaciones fácilmente no siempre es la mejor opción.

#### Ventajas
- DRY (Don't repeat yourself).
- Legible, es sencillo y normalmente son bloques de código pequeños.

#### Desventajas
- Amplia pila, podremos obtener problemas de Stack Overflow ya que a medida que crece el valor de entrada la ejecución será mucho más lenta.
- Recursividad y complejidad espacial no se llevan muy bien juntos.

A pesar de la gran desventaja que tiene recursividad, algunos lenguajes de programación como JavaScript han implementado algo llamado Tail Code Optimization, el cual viene en ES6 y nos permite hacer llamados recursivos sin que se incremente innecesariamente la pila de ejecución.

### ¿Cuándo utilizar recursividad?

En algunos casos, como los algoritmos de BFS y DSF (Searching) la recursividad es muy útil, incluso más eficiente que la programación iterativa, para saber si programar con recursividad es la mejor opción podemos seguir las siguientes recomendaciones:

#### Dividir y conquistar usando recursividad
Cada vez que usemos un árbol o convirtamos algo en un árbol, considerar recursión:

1. Dividir en un número de subproblemas que son pequeñas instancias del mismo problema (divide and conquer).
2. Cada instancia del subproblema es idéntica naturalmente.
3. Las soluciones de cada subproblema pueden ser combinadas para resolver problemas a la mano.


## Ordenamiento

Los problemas de ordenamiento y búsqueda son de los más importantes en el mundo de la programación, y hay numerosos algoritmos que cumplen con estas funciones. Algunos son más eficientes que otros dependiendo del tamaño de entrada, y aunque los lenguajes de programación tienen su propia función `sort()` estas no son las más óptimas. A continuación un ejemplo de por qué la función `.sort()` de JavaScript no siempre es la más óptima:

```
const letters = ["a", "d", "z", "e", "r", "b"];
const basket = [2, 65, 34, 2, 1, 7, 8];
const spanish = ["único", "árbol", "cosas", "fútbol"];

letters.sort(); // ["a", "b", "d", "e", "r", "z"]
basket.sort(); // [1, 2, 2, 34, 65, 7, 8]
basket.sort((a, b) => {
	return a - b;
}); // [1, 2, 2, 7, 8, 34, 65]
spanish.sort(); // ["cosas", "fútbol", "árbol", "único"]
spanish.sort((a, b) => {
	return a.localeCompare(b);
}); // ["árbol", "cosas", "fútbol", "único"]
```

Es por esto que para garantizar que el `.sort()` funcione correctamente debemos crear una función para validar los valores, y al tener que alterar la función nativa no tendremos siempre la misma complejidad de tiempo y espacial.

### Bubble Sort

Básicamente verifica posición por posición 2 elementos y los va cambiando si el de la izquierda es menor que el de la derecha hasta que el arreglo queda ordenado completamente. A continuación la tabla con sus características:

| Algoritmo | Mejor | Promedio | Peor | Peor complejidad espacial |
|--|--|--|--|--|
| Bubble Sort | $\Omega(n)$ | $\Theta(n^2)$ | $O(n^2)$ | $O(1)$ |

Y también una imagen para entender el proceso paso a paso:

![Imagen Bubble Sort](http://www.computersciencebytes.com/wp-content/uploads/2016/10/bubble_sort.png)

En general nunca se usa debido, sólo para fines educativos, pero en proyectos reales es mejor ver otras opciones.

![Imagen Bubble Sort](https://i.stack.imgur.com/XNbE0.gif)

### Selection Sort

Es muy parecido al Bubble Sort, con la diferencia de que aquí no se van cambiando todos directamente, se usan 2 ciclos para ir colocando los valores menores al inicio del arreglo. A continuación la tabla con sus características:

| Algoritmo | Mejor | Promedio | Peor | Peor complejidad espacial |
|--|--|--|--|--|
| Selection Sort | $\Omega(n^2)$ | $\Theta(n^2)$ | $O(n^2)$ | $O(1)$ |

Y también una imagen para entender el proceso paso a paso:

![Imagen Selection Sort](https://he-s3.s3.amazonaws.com/media/uploads/2888f5b.png)

Lo mismo que Bubble Sort, no es usado, sólo para fines educativos.

![Imagen Selection Sort](https://cdn.devdojo.com/images/september2021/selectionsortgif_madebyme.gif)

### Insertion Sort

No es el más eficiente pero hay casos en los que es bastante rápido, este algoritmo es útil cuando estás bastante seguro de que los datos de entrada están ordenados (o casi). Su funcionamiento consiste en recorrer los datos de entrada posición por posición, y a medida que valida cada valor en cada posición crea un subarreglo ordenado, lo que nos permite ir agregando los valores en las posiciones correctas. A continuación la tabla con sus características:

| Algoritmo | Mejor | Promedio | Peor | Peor complejidad espacial |
|--|--|--|--|--|
| Insertion Sort | $\Omega(n)$ | $\Theta(n^2)$ | $O(n^2)$ | $O(1)$ |

Y también una imagen para entender el proceso paso a paso:

![Imagen Insertion Sort](https://static.packt-cdn.com/products/9781785888731/graphics/image_13_008.jpg)

Se recomienda usar Insertion Sort cuando el tamaño de la entrada es pequeño o cuando estamos seguros de que el arreglo está (o casi) ordenado.

![Imagen Insertion Sort](https://upload.wikimedia.org/wikipedia/commons/9/9c/Insertion-sort-example.gif)

### Merge Sort

Está basado en dividir y conquistar, toma una entrada muy grande y la divide en pequeños problemas hasta que quedan entradas de longitud 1 y ahí empieza a organizar correctamente. A continuación la tabla con sus características:

| Algoritmo | Mejor | Promedio | Peor | Peor complejidad espacial |
|--|--|--|--|--|
| Merge Sort | $\Omega(n*log_n)$ | $\Theta(n*log_n)$ | $O(n*log_n)$ | $O(n)$ |

Y también una imagen para entender el proceso paso a paso:

![Imagen Merge Sort](https://www.programiz.com/sites/tutorial2program/files/merge-sort-example_0.png)

Es muy bueno porque usa dividir y conquistar, además de su complejidad de tiempo $O(n*log_n)$. Es muy rápido y aunque sea el peor caso siempre va a ser la misma complejidad de tiempo por lo que cuando es incierto saber o sabemos que el orden de la entrada va a ser muy desordenado es muy recomendable usarlo. Sin embargo, por su complejidad espacial vamos a requerir de muchos recursos, ya que en el peor de los casos será $O(n)$.

![Imagen Merge Sort](https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif?20151222172210)

### Quick Sort

Al igual que Merge Sort está basado en dividir y conquistar, la diferencia es que este usa un pivote que permite ir organizando un elemento en el arreglo, es decir que una vez verificado este elemento con todos los demás sabremos que su posición final (dejando a la izquierda los valores menores y a la derecha los mayores) va a ser correcta, lo que nos permite luego hacer el mismo proceso para los subarreglos que salen si dividimos el arreglo inicial en la posición donde tenemos nuestro elemento ya organizado. A continuación la tabla con sus características:

| Algoritmo | Mejor | Promedio | Peor | Peor complejidad espacial |
|--|--|--|--|--|
| Quick Sort | $\Omega(n*log_n)$ | $\Theta(n*log_n)$ | $O(n^2)$ | $O(log_n)$ |

Y también una imagen para entender el proceso paso a paso:

![Imagen Quick Sort](https://favtutor.com/resources/images/uploads/mceu_46432632011643441346270.png)

Es mejor que Merge Sort en el caso promedio y en complejidad espacial, su desventaja es el peor caso, por lo que si no asignamos correctamente el pivote para realizar las operaciones es muy posible que nuestro proceso de ordenamiento sea muy muy lento.

![Imagen Quick Sort](https://upload.wikimedia.org/wikipedia/commons/9/9c/Quicksort-example.gif)

A pesar de que el mejor resultado que obtenemos por ordenamiento con cada uno de estos en el peor de los casos es $O(n*log_n)$ hay 2 opciones para mejorar esta complejidad de tiempo, basándose en el ordenamiento sin hacer comparaciones, dichos algoritmos son Counting Sort y Radix Sort, pero cabe resaltar que estos algoritmos sólo funcionan con valores numéricos, específicamente enteros.

### Heap Sort

Este algoritmo consiste en almacenar todos los elementos del vector a ordenar en un heap, y luego extraer el nodo que queda como nodo raíz del montículo (cima) en sucesivas iteraciones obteniendo el conjunto ordenado. Basa su funcionamiento en una propiedad de los montículos, por la cual, la cima contiene siempre el menor elemento (o el mayor, según se haya definido el montículo) de todos los almacenados en él. El algoritmo, después de cada extracción, recoloca en el nodo raíz o cima, la última hoja por la derecha del último nivel. Lo cual destruye la propiedad heap del árbol. Pero, a continuación realiza un proceso de "descenso" del número insertado de forma que se elige a cada movimiento el mayor de sus dos hijos, con el que se intercambia. Este intercambio, realizado sucesivamente "hunde" el nodo en el árbol restaurando la propiedad montículo del árbol y dejando paso a la siguiente extracción del nodo raíz. A continuación la tabla con sus características:

| Algoritmo | Mejor | Promedio | Peor | Peor complejidad espacial |
|--|--|--|--|--|
| Heap Sort | $\Omega(n*log_n)$ | $\Theta(n*log_n)$ | $O(n*log_n)$ | $O(1)$ |

Y también una imagen para entender el proceso paso a paso:

![Imagen Merge Sort](https://upload.wikimedia.org/wikipedia/commons/f/fe/Heap_sort_example.gif)

### Radix Sort

Es un algoritmo que permite ordenar números enteros sin hacer comparaciones, para esto ordena los números enteros procesando sus dígitos de forma individual, es decir que hace algo parecido a lo que se puede ver a continuación:

```
25 57 48 37 12 92 86 33

// Asignamos los elementos en colas basadas en el dígito menos significativo de cada uno de ellos.
0:  
1:  
2:12 92  
3:33  
4:  
5:25  
6:86  
7:57 37  
8:48  
9:

Después de la primera pasada, la ordenación queda:
12 92 33 25 86 57 37 48
Colas basadas en el dígito más significativo.
0:  
1:12  
2:25  
3:33 37  
4:48  
5:57  
6:  
7:  
8:86  
9:92

Lista ordenada:
12 25 33 37 48 57 86 92
```

| Algoritmo | Mejor | Promedio | Peor | Peor complejidad espacial |
|--|--|--|--|--|
| Radix Sort | $\Omega(nk)$ | $\Theta(nk)$ | $O(nk)$ | $O(n + k)$ |

Y también una imagen para entender el proceso paso a paso:

![Imagen Quick Sort](https://ds055uzetaobb.cloudfront.net/brioche/uploads/IEZs8xJML3-radixsort_ed.png?width=1200)

### Counting Sort

Es un algoritmo de ordenamiento en el que se cuenta el número de elementos de cada clase para luego ordenarlos. Solo puede ser utilizado por tanto para ordenar elementos que sean contables (como los números enteros en un determinado intervalo, pero no los números reales, por ejemplo).

El primer paso consiste en averiguar cuál es el intervalo dentro del que están los datos a ordenar (valores mínimo y máximo). Después se crea un vector de números enteros con tantos elementos como valores haya en el intervalo [_mínimo_, _máximo_], y a cada elemento se le da el valor 0 (0 apariciones). Tras esto se recorren todos los elementos a ordenar y se cuenta el número de apariciones de cada elemento (usando el vector que hemos creado). Por último, basta con recorrer este vector para tener todos los elementos ordenados. El proceso se puede ver a continuación:

```
Lista sin ordenar: 2, 5, 3, 2, 7, 5, 3, 2, 2

Para ordenarla con este algoritmo, seguimos estos pasos:
- Buscar el mínimo y el máximo
 Mínimo = 2
 Máximo = 7

- Crear el vector auxiliar
 vaux = nuevo vector(2,7) de enteros

- Recorrer la lista de números y contar elementos, debe fijarse como el valor en la lista de entrada se usa como índice en el vector auxiliar
 Al final, 
   vAux(2) = 4  porque aparece 4 veces en la lista
   vAux(3) = 2  porque aparece 2 veces en la lista
   vAux(4) = 0  porque no aparece en la lista ninguna vez
   vAux(5) = 2  porque aparece 2 veces en la lista
   vAux(6) = 0  porque no aparece en la lista ninguna vez
   vAux(7) = 1  porque aparece 1 vez en la lista 

- Recorriendo el vector auxiliar obtenemos la lista de números ordenada
   listaValores(0) = 2  El valor 2, se repite 4 veces.
   listaValores(1) = 2
   listaValores(2) = 2
   listaValores(3) = 2
   -
   listaValores(4) = 3  El valor 3 se repite 2 veces
   listaValores(5) = 3
   -
   listaValores(6) = 5  El valor 5 se repite 2 veces
   listaValores(7) = 5  
   -
   listaValores(8) = 7  El valor 7 solo aparece 1 vez
   -
   -
   Lista ordenada = 2, 2, 2, 2, 3, 3, 5, 5, 7
```

| Algoritmo | Mejor | Promedio | Peor | Peor complejidad espacial |
|--|--|--|--|--|
| Counting Sort | $\Omega(n+k)$ | $\Theta(n+k)$ | $O(n+k)$ | $O(k)$ |

Y también una imagen para entender el proceso paso a paso:

![Imagen Quick Sort](https://d18l82el6cdm1i.cloudfront.net/uploads/hrUDdYC7OH-countingsort.gif)


## Búsqueda

La búsqueda es algo que realizamos mucho en las computadoras. Buscamos por archivos, control F para buscar, en Google, YouTube, Twitter, etc.

### Búsqueda Lineal

Búsqueda Lineal es un método para encontrar un valor en un conjunto de datos verificando todos los elementos en el peor caso, por lo que su complejidad de tiempo es $O(n)$.

![Imagen Linear Search](https://i.pinimg.com/originals/5a/9a/42/5a9a4231aa995d2bec0781c6972f6032.gif)

### Búsqueda Binaria

Búsqueda Binaria nos permite buscar un elemento en un arreglo ordenado, es necesario que esté ordenado para garantizar el correcto funcionamiento del algoritmo. Consiste en ir buscando por mitades (dividir y conquistar) hasta encontrar el elemento, lo que permite tener una complejidad de tiempo de $O(log_n)$. El arreglo al final se convierte en un árbol de búsqueda binaria.

![Imagen Binary Search](https://blog.penjee.com/wp-content/uploads/2015/04/binary-and-linear-search-animations.gif)

## Tree y Graph Traversal

Para hacer esto tendremos 2 opciones (para ambas estructuras de datos), esas son Breadth First Search (BFS) y Depth First Search (DFS), y su complejidad de tiempo es $O(n)$ ya que requerimos ingresar a cada nodo.

### BFS (búsqueda por amplitud)

Este algoritmo realiza una comparación de los elementos por cada nivel, es decir primero el inicio del árbol/grafo, luego el segundo nivel, después el tercero, etc.

Este algoritmo usa memoria adicional porque es necesario tener en cuenta los nodos hijos de todos los nodos que estamos verificando.

#### Ventajas
- Podremos encontrar el camino más corto.
- Nodos cercanos primero.

#### Desventajas
- Requiere más memoria.

### DFS (búsqueda por profundidad)

Este algoritmo se basa en hacer una búsqueda por profundidad, es decir que siempre va por todo el lado izquierdo y va pasando progresivamente al lado derecho hasta cubrir todo el árbol/grafo.

DFS puede ser implementado de 3 formas, estas son `PreOrder, InOrder, PostOrder`. InOrder retorna el arreglo ordenado, PreOrder devuelve un arreglo con los nodos del árbol en el orden en el que fueron ingresados, esto nos sirve para recrear un árbol, y por último PostOrder retorna primero los nodos hoja de la izquierda, luego su padre, hace lo mismo para el lado derecho y así sucesivamente hasta llegar al nodo raíz.

#### Ventajas
- Menos memoria.
- Podremos responder la pregunta ¿existe el camino?

#### Desventajas
- Puede volverse lento.

A continuación una imagen donde se puede ver cómo funcionan ambos:

![Imagen BFS y DFS](https://iq.opengenus.org/content/images/2020/05/dfs-vs-bfs.gif)

## Camino más corto

Hay 2 algoritmos muy populares que nos permiten encontrar el camino más corto en un grafo, estos son `Dijkstra` y `Bellman-Ford`. Estos son útiles ya que el algoritmo DFS no tiene en cuenta los costos de las aristas para llegar del nodo A al nodo B.

Estos 2 algoritmos nos permiten encontrar el camino de un grafo entre 2 nodos cuyas aristas tienen un valor, un ejemplo es Google Maps, ya que puede tener en cuenta el tiempo que tarda un vehículo en una calle, qué tanto tráfico hay, etc.

A continuación una representación del algoritmo `Dijkstra`:

![Imagen Dijkstra](https://i.makeagif.com/media/4-06-2019/BlbFEM.gif)

Y una imagen del algoritmo `Bellman-Ford`:

![Imagen Bellman-Ford](https://upload.wikimedia.org/wikipedia/commons/7/77/Bellman%E2%80%93Ford_algorithm_example.gif)

El algoritmo de `Bellman-Ford` es más efectivo para encontrar el camino corto que el algoritmo `Dijkstra`, ya que este puede tener en cuenta aristas con costo negativo, mientras que el último algoritmo no está diseñado para tener en cuenta estos casos. Sin embargo, el algoritmo `Bellman-Ford` toma más tiempo ejecutándose si hablamos de complejidad, y no es el algoritmo más eficiente, su complejidad de tiempo en el peor caso es de $O(n^2)$, mientras que el algoritmo `Dijkstra` es un poco más rápido y eficiente que este.

## ¿Qué tener en cuenta para hacer búsquedas en arreglos y strings?

Ya teniendo todo esto en cuenta podremos hacer las siguientes conclusiones:

- Si el arreglo está ordenado podremos hacer uso del dividir y conquistar, específicamente de la búsqueda binaria, ya que tendríamos una complejidad de tiempo $O(log_n)$
- Si no está ordenado y ordenándolo no mejoraría el rendimiento podríamos hacer uso de la búsqueda lineal, cuya complejidad de tiempo es $O(n)$.
- Si es un string podríamos hacer uso de la estructura de dato Trie para ver si con esto podemos optimizar el rendimiento.2


# Programación dinámica

Es una técnica de optimización que usa caché para optimizar algunos algoritmos (especialmente los recursivos), la técnica principal es llamada Memoization.

## Memoization

Para entender qué es Memoization es importante tener claro lo que significa Caching, y simplemente es una forma de guardar valores a los que podrás acceder después, Memoization es simplemente esto, una forma de guardar información en nuestro código.

Un claro ejemplo es cuando programamos una función recursiva que devuelva la secuencia de Fibonacci, ya que al ejecutar el fibonacci de 5 se calculará múltiples veces el fibonacci de 2 y 3, con Memoization podemos guardar esta información para que nuestro algoritmo no tenga que hacer el cálculo múltiples veces, sino que lo haga una vez y guarde esta información para poder seguir accediendo a esta sin necesidad de calcular nuevamente los valores.

![Imagen árbol fibonacci](https://i.stack.imgur.com/2dxLl.png)

En conclusión la programación dinámica es como una combinación de dividir y conquistar y Memoization.

## ¿Cómo saber si un problema puede ser resuelto con programación dinámica?

Hay 5 pasos que podremos tener en cuenta para tomar esta decisión, a continuación la lista:

- Puede ser dividido en subproblemas.
- Solución recursiva.
- ¿Hay subproblemas repetidos?
- Usar Memoization en subproblemas.
- Nos permite solicitar aumentos porque ahorraremos muchos cálculos.


# Entrevistas no técnicas

Hay algunas cosas a tener en cuenta sumamente importantes en las entrevistas no técnicas, muchas veces nos puede ganas la ansiedad, pero debemos tener en cuenta lo siguiente:

## Mentalidad

No es la última chance, no se trata de pasar o fallar, hay que tomarlo todo como una experiencia de aprendizaje, para entender qué tan bueno es mi código, qué tan bueno soy en entrevistas, qué tan bien me expreso ante el entrevistador. Debemos llegar a la entrevista con mucha energía, estando felices y emocionados de estar ahí. Hay 3 preguntas que siempre estarán en las entrevistas:

- ¿Puedes hacer el trabajo?
- ¿Pueden trabajar conmigo?
- ¿Mejorarás en el trabajo?

Para estar preparado para la entrevista es bueno tener de 2 a 4 historias preparadas, y esto debe demostrarle al entrevistador ver que tengo estas 4 habilidades que ellos buscan:

- **Técnico:** Una historia que demuestra que soy muy bueno técnicamente hablando y que conozco sobre ellos.
- **Éxito:** Indicar que soy alguien exitoso, un ejemplo sería que fui ascendido a un puesto Senior.
- **Liderazgo:** Debo demostrar que tengo habilidades de liderazgo.
- **Retos:** Ellos quieren saber qué problemas he tenido en el pasado en proyectos y cómo logré solucionarlos.

## Hablar sobre mí

Debo redirigir la conversación cuando me hagan la pregunta hacia donde quiero que me hagan preguntas. No dar una respuesta muy extensa ni muy corta.

- Mis señales de éxito.
- Mencionar cosas que quiero que ellos me pregunten.
- Habilidades que deberían ser relevantes para el trabajo.

Debo demostrar que serán muy afortunados de tenerme, y también cómo todo lo que he hecho en el pasado hace que este trabajo sea perfecto para mí.

## ¿Por qué nosotros?

Debo demostrarle al entrevistador que de verdad me gusta la empresa, que admiro su forma de trabajar y que no estoy buscando un trabajo temporal, al contrario busco un trabajo a largo plazo donde pueda crecer profesionalmente.

- Hacerles notar que quieres crecer.
- Demostrar por qué soy la mejor opción.

## ¿Por qué pienso dejar mi trabajo?

No ser negativo, no hablar sobre mis compañeros de trabajo, mis jefes, etc. Debo ser tan positivo como sea posible, por ejemplo puedo decir que quiero nuevos retos, aprender cosas nuevas para crecer profesionalmente, trabajar con personas muy inteligentes como las que tiene la empresa contratadas.

## Cuéntame sobre algún problema que hayas tenido y cómo lo solucionaste

Cuando nos hagan preguntas debemos iniciar dando contexto de cómo era el proyecto, el problema que tuve, y luego la solución que apliqué para este problema.

- Tener esta respuesta bien preparada.
- Tener métricas y números, por ejemplo que mejoré el rendimiento de un sitio web o incrementé el número de usuarios, no usar porcentajes, números exactos.
- Escalamiento, rendimiento y seguridad, puedo usar al menos alguna de estas para indicar cómo mejoré el proyecto en dicho aspecto.
- Mostrar por qué soy diferente.
- Relacionar todo lo que digo con el trabajo al que estoy aplicando.

## ¿Cuál es mi mayor debilidad?

Respuesta real y mostrar cómo lo mejoro. Por ejemplo puedo decir algo como "a veces cuando tengo un problema empiezo a escribir código por montones sin pensar en realmente qué estoy solucionando, por lo que en determinado punto me doy cuenta de esto y me detengo para analizar detenidamente el problema".

## ¿Tengo alguna pregunta para el entrevistador?

- Enfocarme en el entrevistador, no en mí.
- Mencionar algo que ellos hayan dicho.

Por ejemplo "¿cuál fue el mayor error que cometiste en tu primer mes trabajando aquí y cómo lo solucionaste?", o "¿dónde crees que estará la compañía en 3 años? Quiero estar aquí por un tiempo, pero tú ya trabajas aquí y tienes más conocimiento sobre la compañía, y me gustaría ver hacia dónde se dirige la empresa", o "¿por qué decidiste trabajar en la compañía?", y otro ejemplo es "¿has notado que tus habilidades han mejorado el año pasado?".

Un recurso interesante es el siguiente link de GitHub que contiene preguntas que puedo realizarle al entrevistador: [Reverse Interview](https://github.com/viraptor/reverse-interview).

## Arma secreta

- Simplicidad por encima de complejidad, es decir que hablar en términos simples, muchas veces contamos cosas que hemos solucionado en términos tan técnicos que al final sólo lo entendemos nosotros.
- La optimización prematura es la raíz de todos los males, siempre queremos optimizar nuestro código, el rendimiento pero debemos trabajar con nuestro tiempo limitado, debo demostrarle al entrevistador que soy el tipo de persona que entiende el valor del tiempo, recursos y dinero y cómo estoy preparado para trabajar en cosas donde estas características importan sin necesidad de obsesionarnos con esto.
- Objetivo general, no en pequeñeces, tener en cuenta todo, no sólo enforcarnos en una cosa, por ejemplo tenemos una semana para entregar nuestra parte del proyecto pero nos enfocamos tanto en hacer buen código que nos olvidamos del límite de tiempo, y aunque no sea algo del todo malo debemos entender las consecuencias empresariales de lo que hacemos.
- No quejarnos sobre el cliente/código/etc.
- Sin egos.

## Después de la entrevista

Primero agradecer al reclutador o entrevistador y demostrar que estoy emocionado, debemos iniciar y finalizar la entrevista con una buena impresión. Si puedo, solicitar comentarios específicos sobre el desempeño de mi entrevista.

- No usar mucho la palabra "yo".
- Hablar sobre el entrevistador.
- Expresar cómo soy el candidato ideal.
- No presumir.
- Si no logré resolver algo puedo enviar un correo luego de la entrevista indicando que encontré información sobre el problema y hallé una solución al respecto y hablar un poco sobre ella.


# Oferta y negociación

## Manejo del rechazo

Los rechazos nunca son señales de no éxito, 99 rechazos y una oferta son mejores que 2 rechazos y ninguna oferta. Si somos rechazados, mirar si podemos extraer información del desempeño de la compañía. Decirles que estoy constantemente buscando mejorar y que me gustaría algún resumen de mi desempeño. Después de esto podría preguntarles cuándo estaría bien aplicar nuevamente si sigo interesado.

## Negociando

Si me preguntan cuál es mi expectativa salarial puedo decir algo como "bueno...en X lugar el salario promedio de un ingeniero de software es de Y, así que podríamos comenzar en este punto".

- No finalizar la conversación.
- Dar razones para todo, por ejemplo si en determinado tiempo en la compañía nos dicen "estamos dispuestos a ofrecerte X anualmente" podríamos responder algo como "gracias por esta oferta tan generosa, y estoy muy emocionado de empezar a trabajar con ustedes, sin embargo, esta es una gran decisión familiar y estoy buscando  trabajar con una compañía por muchos años, así que me gustaría discutir esto con mis padres/esposa, etc y tener un tiempo para asegurarnos de que eso es algo con lo que todos no sentimos cómodos".
- Siempre negociar.
- Ser positivo.
- Tener apuestas, es decir tener un as bajo la manga si no hay riesgo y estoy seguro de que firmarán mi contrato o aceptarán el salario, sino se preguntarán qué incentivo tendrían para ofrecerme más si saben que estoy desesperado y es el único trabajo que puedo tomar. Debo demostrar que tengo múltiples ofertas.

## Manejo de una oferta

- Recordar no finalizar la conversación.
- Ser positivo.
- Pedir más tiempo para tomar la decisión.
- Dejarle saber a las otras compañías que tengo una oferta.
- Encontrar el salario exacto que quiero.
- ¿Qué valor proporciono a la compañía?
- Siempre iniciar con un valor más alto al que quiero.

## Manejo de múltiples ofertas

1. ¿Hay alguna oferta con la que sienta que no está calificado?
2. Potencial crecimiento a largo plazo.
3. ¿Respetarás a las personas que te rodean?
4. Salario y beneficios.
5. ¿Está basada la decisión en desesperación?

## Obtener un aumento

- Preguntar por un aumento.
- Demostrar que soy alguien muy valioso para ellos, no decirlo. Esto se puede hacer con un documento, un email, etc.