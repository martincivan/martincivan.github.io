---
layout: zadanie
title: "Transformácia vybraného dokumentu do formátu DocBook"
date: 2019-03-24
cislo: 1
stahuj: https://github.com/martincivan/docbook/archive/master.zip

---
Predmetom 2. zadania je spracovanie vybraného dokumentu (ideálne bakalárskeho projektu) z pôvodného ľubovoľného (Word, OpenOffice, LaTeX, …) formátu do formátu DocBook a vygenerovanie cieľového tvaru v PDF. Výsledný dokument bude mať rozsah minimálne 10 a maximálne 15 strán. Do rozsahu sa nezapočítavajú úvodné strany (obsah, zoznamy obrázkov a tabuliek), použitá literatúra a prílohy.


 
Pôvodný dokument napísaný v službe Overleaf (online Latex), bol vyexportovaný do PDF súboru, následne naimportovaný do Microsoft Wordu,
exportovaný ako .docx dokument a skonvertovaný do DocBooku pomocou [webovej služby XMLMind](http://www.xmlmind.com/w2x/docx_to_docbook.html).

Text je členený na kapitoly `<chapter>` a sekcie `<section>`. Taktiež obsahuje špeciálne časti navyše `<abstract>`.

Z pôvodnej šablóny bolo odstránené logo školy na prvej strane a následne bolo opravené jej formátovanie.
Tiež bolo zakázané rozdeľovanie slov v hlavičke a opravené kapitalizovanie nadpisov pomocou tipu zo stránky predmetu.
Nakoniec bolo pridané generovanie zoznamu obrázkov a tabuliek. Taktiež bol preložený pojem `Vedoucí` na `Vedúci`.

Bibliografia bola vytvorená značkami `<bibliography>` a `<bibliomixed>`, citovaná značkou `<citation>`.

Obrázky boli vložené ako `<figure>` s `<mediaoobject>` a `<imageobject>` a odkazovaný bol pomocou značky `<xref>`.

Text bol zvýrazneny pomocou `<emphasis>`.

Zoznam pojmov bol vložený ako `<index>` a pojmy doň boli pridané ako `<indexterm>` s `<primary>` a `<secondary>`.

Oproti pôvodnému dokumentu boli pridané poznámky pod čiarou boli pridané ako `<footnote>` a tabuľka `<table>`.

Na zoznamy bol použitý `<itemizedlist>` s `<listitem>`.