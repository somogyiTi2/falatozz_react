## CRUD Falatozz.hu Webalkalmazás feladat.

### Navigáció

A webalkalmazás két oldalból áll, ahogy a feladatban is le van írva. 
Egy Read oldalból mely a "/" (Home) oldala is magának a weboldalnak,
illetve egy "/create". oldalnak. 

Ezek természetesen az URL sávban is láthatóak, és meghívhatóak. 
Kényelmesebb, megoldást nyújt azonban az oldal alján található, 
navigációs sáv.

Az oldal ezen felül tartalmaz egy rejtett, hiba oldalt. 
Amennyiben hibásan hívjuk meg magát az oldalt, 
ez jelenik meg számunkra, és itt is található egy navigációs sáv.

A navigációs sávon az épp aktuális oldal lesz alá húzva.
(ehhez react-router-dom csomagot használtam, illetve az  URL ágak létre hozásához.)

# Read (Homepage)
A termékek középen kártyaszerű felületbe vannak téve, egymás alá igazítva.
Felül A termék neve
Alatta a termék leírása
Legalul, a termékből található mennyiség látható.
A termék darab száma mellet balra egy szerkesztő gomb található,
jobbra pedig egy törlő gomb.

### Szerkesztés
 A szerkesztés gomb megnyomásakor egy CSS-ben létrehozott, ablak jelenik meg.
 A felületen 3 bemeneti hely található, a termék adatival kitöltve,
 illetve egy mégse és egy frissítés gomb.
 Amennyiben üresen, hagyunk valamelyik vagy több beviteli felületet,
 szöveges figyelmeztetést kapunk, illetve,
 inaktívvá válik a frissítés gomb.

 Amennyiben sikeresen mindent kitöltöttünk, a Frissítés gombra kattintva, 
 frissül az adatbázisban a termék. 

 Amennyiben a mégsére, a felület eltűnik és újból a "read" felületet látjuk.

 ### Törlés
 Amennyiben egy terméket törölni szeretnénk, nyomjunk a kis kuka gombra. 
 Egy CSS-ben készült ablak ugrik fel, melyen 
 felül egy "Biztos törli?" felirat,
 középen a termék neve
 alul egy mégse (vissza read oldalra) és egy Biztos törlés gomb található

 Amennyiben a biztos törlés gombra kattint a termék törlődik az adatbázisból.

 # Creat (Létrehozás)
A Creat oldalon, új terméket lehet létrehozni.
A felületen felül egy "Új termék hozzá adása:" felirat szerepel,
Alatta a 3 kötelezően kitöltendő input sávok,
Legalul pedig egy Küldés gomb.

Amennyiben üresen vagy nem teljesen kitöltve szeretnénk beküldeni a felületet,
ezt az oldal nem engedélyezi.
A felületen is és egy alert is jelzi hol és mi üres. 

Amennyiben sikeresen beírtunk minden adatot, a küldésgombot megnyomva 
újrból a Read felületre navigál minket a weboldal, ahol a termékünk megjelenik.

#### Eszközök
A feladatban használtam a react alap mappát, illetve react-router-dom-ot bővítményt , és firebase backendet használtam.


#### BRANCH 

Egy keresőt adtam, hozzá.
A keresőbe szórészletet is írhatunk, és mindegy, hogy kis vagy nagybetüvel, ugyan úgy működik.
