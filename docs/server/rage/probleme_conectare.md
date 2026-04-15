---
outline: deep
---

## P1 - Probleme la conectare

### P1.1 - `Server closed the connection`

- dezactivare VPN
- Dezactivare firewall din Windows - Click [aici](#T1) pentru tutorial
- Setare DNS-uri Cloudflare - Click [aici](#T2) pentru tutorial

---

### P1.2 - Numele de cont `Numele pus de voi` este deja inregistrat.

- Numele pus de voi exista deja si este luat deja de alt jucator, ce trebuie sa faceti este sa va schimbati nickname-ul din launcher, apasand F1, inchideti jocul din X-ul din dreapta sus, deschideti launcher-ul, schimbati-va nickname-ul si incercati sa va conectati din nou.
- Daca primiti aceasta eroare si aveti deja un cont la noi pe server, poate insemna ca ati intrat cu contul gresit de Rockstar.

<span style="color: #60ffb1;">*Când intrați pe server și apare eroarea din imaginea de mai jos, puteți vedea în acea imagine și Social Club ID-ul cu care încercați să vă conectați.*</span>

<details>
  <summary>Problema Social Club ID</summary>
  <img src="https://assets.b-zone.ro/wiki/problem_scid.png" alt="Problema Social Club ID">
</details>

---

### P1.3 - Eroare dreapta sus la crearea contului `An account with this Social Club is already registered!`.

- Daca primesti aceasta eroare, inseamna ca contul tau de Social Club este deja inregistrat pe server (adica ai deja un cont inregistrat la noi), ceea ce inseamna ca ai mai jucat pe serverul nostru cu acelasi cont de Rockstar, iar daca nu iti amintesti parola, poti sa o resetezi de pe site-ul [gta5.ro](https://gta5.ro/account/forgot-password), iar daca nu iti amintesti username-ul, poti sa faci un ticket pe server-ul nostru de discord.

<details>
  <summary>Social Club Registered</summary>
  <img src="https://assets.b-zone.ro/wiki/sc_registered.png" alt="Social Club Registered">
</details>


<span style="color: #60ffb1;">*Când deschideți un ticket pe Discord, asigurați-vă că aveți acces la adresa de e-mail asociată contului de pe server, deoarece nu veți putea recupera parola fără acces la această adresă.*</span>

---

### P1.4 - Nu imi amintesc parola

- Daca nu iti amintesti parola, poti sa o resetezi de pe site-ul [gta5.ro](https://gta5.ro/account/forgot-password), iar daca nu iti amintesti username-ul, poti sa faci un ticket pe server-ul nostru de discord. Când deschideți un ticket pe Discord, asigurați-vă că aveți acces la adresa de `e-mail` asociată contului de pe server, deoarece nu veți putea recupera parola fără acces la această adresă.

---

### P1.5 - Nu imi amintesc username-ul

- Poti sa faci un ticket pe server-ul nostru de discord, iar un membru al staff-ului te va ajuta sa iti recuperezi `username-ul`, dar asigura-te ca ai acces la adresa de `e-mail` asociată contului de pe server, deoarece nu vei putea recupera `username-ul` fără acces la această adresă.

---

### P1.6 - `Connection has been closed`

- Daca dupa `Finishing Handshake` primesti aceasta eroare, poate insemna ca cineva este deja conectat cu acel `Username` sau poate insemna ca ai o conexiune instabila la internet.

---

### P1.7 - Numele de cont `WierdNewbie` nu este permis.

- Pentru a te putea conecta pe server, alege un numet format doar din litere si cifre, Caracterele speciale *(spatiu, punct, minus, bara jos, etc.)* nu sunt permise.
-  Apasa F1, inchide jocul din X-ul din dreapta sus, deschide launcher-ul, schimba-ti nickname-ul si incearca sa te conectezi din nou.


## Tutoriale

### <a id="T1"></a>Tutorial Dezactivare firewall din Windows
<div class="rule-box rule-green">

1. Apasa tasta `Windows + R`, scrie `control` si apasa Enter pentru a deschide Panoul de Control.
2. In Panoul de Control, selecteaza "Sistem și securitate" (sau "System and Security" daca ai Windows in engleza).
3. Apoi, selecteaza `Windows Defender Firewall` (sau `Windows Defender Firewall`).
4. In partea stanga a ferestrei, apasa pe `Activare sau dezactivare Windows Defender Firewall` (sau `Turn Windows Defender Firewall on or off`).
5. In fereastra care se deschide, selecteaza `Dezactivare Windows Defender Firewall (nu este recomandat)` (sau `Turn off Windows Defender Firewall (not recommended)`) pentru ambele setari, atat pentru rețelele private, cat si pentru cele publice.
6. Apasa pe `OK` pentru a salva modificarile.
</div>

---

### <a id="T2"></a>Tutorial Setare DNS-uri Cloudflare
<div class="rule-box rule-green">

- Apasa tasta `Windows + R`, scrie `ncpa.cpl` si apasa Enter pentru a deschide conexiunile de rețea.
- In fereastra care se deschide, gaseste conexiunea ta de rețea activa (de obicei este denumita "Ethernet" sau "Wi-Fi"), da click dreapta pe ea si selecteaza `Proprietati` (sau `Properties`).
- In fereastra de proprietati, deruleaza in jos si selecteaza `Protocol Internet versiunea 4 (TCP/IPv4)` (sau `Internet Protocol Version 4 (TCP/IPv4)`).
- In fereastra care se deschide, selecteaza `Utilizează următoarele adrese de server DNS` (sau `Use the following DNS server addresses`) si introdu urmatoarele adrese:
    - Server DNS preferat: `1.1.1.1`
    - Server DNS alternativ: `1.0.0.1`
- Apasa pe `OK` pentru a salva modificarile, apoi inchide toate ferestrele deschise.
</div>