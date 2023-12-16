// // #1 - Sort 10 schools around your house by distance: Insertion Sort porque es un tamaño de entrada pequeño, y en estos casos este algoritmo es muy eficaz, además si la entrada está (o casi) ordenada será aún más rápido.

// // #2 - eBay sorts listings by the current Bid amount: Radix or Counting Sort porque es un número en un rango, por lo que podremos aprovechar sus rápidas ejecuciones con números, además de ser un valor entero, además de que al ser en eBay no será un valor como un billón, serán valores más pequeños.

// // #3 - Sport scores on ESPN: Quick Sort porque a veces tiene decimales, distintos formatos para el fútbol, tenis, etc. Será el más eficiente, porque a pesar de preocuparnos en el peor caso porque sus entradas pueden ser distintas, es importante preocuparnos por el espacio en memoria que ocuparemos.

// // #4 - Massive database (can't fit all into memory) needs to sort through past year's user data: Merge Sort porque no estaremos ordenando en memoria debido a que la data es muy grande, y debido a que el tamaño es masivo debemos priorizar la complejidad de tiempo.

// // #5 - Almost sorted Udemy review data needs to update and add 2 new reviews: Insertion Sort porque la información está casi ordenada, y sólo estamos agregando 2 reviews.

// // #6 - Temperature Records for the past 50 years in Canada: Radix or Counting Sort porque no tienen decimales, y suelen ser números de 2 digitos, lo que nos permitirá aprovechar los recursos haciendo uso de estos algoritmos.

// // #7 - Large user name database needs to be sorted. Data is very random: Merge Sort si tenemos suficiente memoria, o Quick Sort si no nos preocupamos por el peor caso y podemos seleccionar un buen pivote.

// // #8 - You want to teach sorting for the first time: Bubble Sort, Selection Sort porque son los más sencillos.


// // ANSWERS:
// //#1 - Sort 10 schools around your house by distance:
// insertion sort

// //#2 - eBay sorts listings by the current Bid amount:
// radix or counting sort

// //#3 - Sport scores on ESPN
// quick sort

// //#4 - Massive database (can't fit all into memory) needs to sort through past year's user data
// merge sort

// //#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
// insertion sort

// //#6 - Temperature Records for the past 50 years in Canada
// radix or counting sort
// quick sort if decimal places

// //#7 - Large user name database needs to be sorted. Data is very random.
// quick sort

// //#8 - You want to teach sorting for the first time
// bubble sort