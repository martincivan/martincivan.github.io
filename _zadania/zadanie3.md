---
layout: zadanie
title: "Prezentácia vo formáte XML"
date: 2019-04-29
cislo: 3
stahuj: https://github.com/martincivan/wpub-xml-prezentacia/archive/master.zip

---
Predmetom 3. zadania je vytvorenie prezentácie vo formáte XML a jej tranformácie do PDF a XHTML dokumentov.

Na transformácie sa používajú nástroje SAXON alebo XEP.

Koreňovým elementom prezentácie je element `prezentacia`.
Ten obsahuje povinné elementy `nadpis`, `podnadpis`, `autor` a `zaver`. Ktore predstavuju nadpis a podnadpis prezentacie, meno jej autora a nadpis na poslednom slajde.
Slajdy prezentacie sú v elemente `slajdy`.
Každý slajd má element `slajd` s atribútom nadpis.
Slajd môže obsahovať `obrazok`, `zoznam` alebo text.
`Zoznam` obsahuje elementy `polozka` a môže mať atribút `cislovany="true"`, aby bol číslovaný.
`Obrazok` obsahuje cestu k súboru s obrázkom v atribúte `kde`.

Parametre sú v súbore parametre.xml, kde koreňový element `parametre` obsahuje 2 elementy: `znak-zoznamu`, ktorý predstavuje znak
odrážky v nečíslovanom zozname a element `pismo`, ktorý obsahuje rodinu písma použitú vo výsledných dokumentoch. 
Rodina písma musí byť podporovaná webovým prehliadačom a musí byť správne nastavená v xep.xml v nástroji XEP. 