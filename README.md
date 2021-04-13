vue-boolflix
Milestone 1:
Creare un l ayout b ase con u na s earchbar (una i nput e u n b utton) i n c ui possiamo
scrivere completamente o p arzialmente il n ome di u n f ilm. P ossiamo, cliccando i l
bottone, cercare s ull’API tutti i f ilm c he c ontengono c iò c he h a s critto l ’utente.
Vogliamo dopo l a r isposta d ell’API v isualizzare a schermo i seguenti valori p er o gni
film trovato:
1. Titolo
2. Titolo Originale
3. Lingua
4. Voto
Milestone 2:
Trasformiamo l a s tringa statica della l ingua i n u na vera e p ropria bandiera d ella
nazione c orrispondente, g estendo il c aso in c ui n on abbiamo l a bandiera della
nazione r itornata dall’API ( le f lag non c i sono i n F ontAwesome).
Allarghiamo p oi la r icerca a nche a lle s erie tv. C on l a stessa azione d i r icerca
dovremo p rendere s ia i f ilm c he c orrispondono alla q uery, s ia l e s erie t v, s tando
attenti ad avere a lla fine d ei v alori s imili (le s erie e i f ilm h anno c ampi nel J SON d i
risposta d iversi, simili m a n on s empre i dentici)
Qui un esempio d i c hiamata per le s erie t v:
https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=s
crubs
Milestone 3:
In questa milestone c ome p rima cosa a ggiungiamo la c opertina del f ilm o della s erie
al nostro elenco. Ci v iene p assata dall’API s olo la p arte finale dell’URL, q uesto
perché p oi p otremo g enerare d a q uella porzione d i URL t ante d imensioni d iverse.
Dovremo prendere q uindi l ’URL base delle i mmagini d i TMDB:
https://image.tmdb.org/t/p/ p er p oi aggiungere l a d imensione c he v ogliamo g enerare
(troviamo t utte l e d imensioni p ossibili a q uesto l ink:
https://www.themoviedb.org/talk/53c11d4ec3a3684cf4006400) p er p oi aggiungere l a
parte f inale dell’URL p assata d all’API.
Esempio d i U RL:
https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png
Trasformiamo p oi i l v oto da 1 a 1 0 d ecimale i n un numero i ntero da 1 a 5 , c osì da
permetterci d i s tampare a schermo un numero d i stelle p iene c he v anno d a 1 a 5 ,
lasciando l e restanti v uote (troviamo le i cone in F ontAwesome).
Arrotondiamo s empre per eccesso a ll’unità s uccessiva, non g estiamo i cone m ezze
piene (o m ezze v uote : P)
Milestone 4:
Trasformiamo q uello c he a bbiamo f atto f ino a d o ra i n una v era e p ropria w ebapp,
creando u n l ayout c ompleto s imil-Netflix:
● Un h eader c he c ontiene logo e s earch b ar
● Dopo a ver r icercato qualcosa n ella searchbar, i r isultati a ppaiono s otto f orma
di “ card” i n c ui l o sfondo è r appresentato dall’immagine d i c opertina ( c onsiglio
la p oster_path c on w 342 )
● Andando c on il m ouse s opra una c ard ( on h over), a ppaiono l e i nformazioni
aggiuntive g ià p rese n ei p unti p recedenti p iù l a o verview
Mockup:
Mockup (on h over s ul p rimo e lemento):
Consigli:
1. Andate i n fila, s eguendo le m ilestone, n on pensate a ll’interfaccia g rafica fino
al p unto 4
2. Non p ensate a ll’interfaccia g rafica f ino a l p unto 4 ( si, l ’ho s critto d ue v olte),
tutto p uò essere r isolto c on u na < ul> n on s tilizzata
3. Ricordatevi q uanto imparato f inora c on l e d iverse e sercitazioni:
○ Affrontate sempre p rima i l caso base m inimo, s enza c omplicazioni ( ad
es. “ S e i l t itolo originale è u guale a l t itolo, m agari d ovrei n asconderlo” ,
“ Se f accio u na ricerca c he non h a n essun risultato dovrei scrivere
qualcosa” sono d omande d a N ON FARSI f ino a q uando n on s i è fatto
completamente u n c aso b ase)
○ Se t i viene v olta d i copiare/incollare c odice, N ON F ARLO, f ai u na
funzione! Q uei p ochi m inuti r isparmiati renderanno i l t uo codice meno
leggibile ed ogni volta c he d ovrai i ntervenire su q uella p arte p erderai
molto p iù t empo
○ Prima d i a ndare a vanti, assicurati d i aver risolto q uella p arte nel m iglior
modo p ossibile ( codice n on ripetuto, m inimo c odice p ossibile, funzioni
chiare e riutilizzabili). R isparmierai t antissimo tempo r isolvendo gli
esercizi s uccessivi
○ Meglio risolvere u na milestone i n meno, m a c on codice scritto b ene
4. P er avere l a l ista d elle l ingue u tilizzare:
https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
SE HAI FINITO LE M ILESTONE P RECEDENTI E V UOI A NDARE OLTRE, P UOI
FARE L E MILESTONE S UCCESSIVE, M A SONO FACOLTATIVE:
Milestone 5 ( Opzionale):
Partendo d a u n f ilm o da una s erie, richiedere a ll'API quali s ono gli attori che fanno
parte d el cast a ggiungendo alla n ostra s cheda F ilm / S erie SOLO i p rimi 5 r estituiti
dall’API c on Nome e C ognome, e i g eneri a ssociati a l f ilm c on q uesto s chema:
“Genere 1, G enere 2 , … ”.
Milestone 6 ( Opzionale):
Creare una l ista di g eneri r ichiedendo q uelli d isponibili all'API e c reare d ei f iltri con i
generi tv e movie p er m ostrare/nascondere l e s chede o ttenute c on la r icerca.
