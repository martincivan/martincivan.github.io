---
layout: default
title: Dokumentacia stranky
---

Dokumentacia stranky
===

Stránka bola vytvorená pomocou nástroja Jekyll.

Má 3 layouty:
- hlavny layout `default`, ktorý obsahuje navigačné prvky a základnú štruktúru
  - `post` - tento layout je určeny pre články v blogu a pridáva dátum, nadpis, galéru a podobne
  - layout pre `zadanie` - tento layout určený pre zadania. Generuje nadpis s čislom zadania,
  obsahuje znenie zadania, link na stiahnutie a dokumentáciu..
  
Na štyly bol použitý [dark bootstrap](https://bootswatch.com/darkly/).

Použité premenné
---
- `title` - nadpisy
- `date` - dátumy (kde som v tom videl zmysel)
- `order` - poradie položiek v hlavnom menu, pokiaľ nie je uvedené, tak stránka nie je v hlavnom menu
- `obrazky` - zoznam obrazkov v blogovom príspevku
    - `src` - relatívna cesta k obrázku
    - `text` - popis obrázku
- `cislo` - číslo zadania
- `stahuj` - link na stiahnutie zadania
- `dokumentacia` - relativna cesta k dokumentacii

Kolekcie
---
- `blogy` - zoznam príspevkov v blogu
- `zadania` - zoznam vypracovaných zadaní v sekcii Webové publikovanie

Filtre a tagy
---
- `assign` na vytvorenie zoznamu stránok v hlavnom menu
- `sort` na zoradenie stránok v hlavnom menu
- `for` na prechádzanie zoznamu stránok, kolekcií, obrázkov atď.
- `if` na zistenie, či sa má stránka zobraziť v hlavnom menu
- `date_to_string` na formátovanie dátumu
- `relative_url` na vyskladanie relatívnych odkazov
- `reverse` na preusporiadanie článkov blogu

Plugin
---
- `jekyll-sitemap` - na generovanie `sitemap.xml`
- [`liquid_reading_time`](https://github.com/bdesham/reading_time) - na zrátanie slov článkov a odhad doby čítania