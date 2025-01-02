---
outline: deep
---

# RAGE Multiplayer

## Probleme RAGEMP

### ℹ️ Versiunea jocului tău nu este compatibilă cu RAGE Multiplayer

- Dacă ai descărcat o versiune piratată a jocului, nu poți utiliza **RAGE Multiplayer**.
- Dacă ai achiziționat o copie a jocului Grand Theft Auto V, mergi în folderul **GTA V** și șterge fișierul **'GTA5.exe'**, apoi rulează 'PlayGTA5.exe' și lasă jocul să ruleze. După aceea, închide jocul și încearcă să rulezi din nou RAGE.

### ℹ️ Eroarea: "Clientside packages checksums mismatch! Trying again..."

- Șterge fișierul **'client_packages'** din directorul unde ai instalat RAGE Multiplayer și încearcă să te conectezi din nou.

### ℹ️ Eroarea: Offline Mode

- Eroarea aceasta apare în mod uzual în momentul în care adresa IP este banată pe serverele Rockstar. Schimbarea adresei IP va rezolva problema.

### ℹ️ Eroarea: "Failed to retrieve the install directory"

- Path-ul către GTA V nu este setat corect. Apasă pe **Ok** și selectează calea unde se află jocul GTA V.

### ℹ️ RAGE Multiplayer se blochează când intru pe server

- RAGE nu poate lansa GTA V, de obicei, acest lucru se întâmplă deoarece jocul tău are actualizări în așteptare pentru descărcare și, prin urmare, nu poate rula. Încearcă să rulezi GTA V în modul single-player și vezi ce se întâmplă. După ce reușești să intri în single player, încearcă să folosești din nou RAGE.

### ℹ️ Intrare in single-player când intru pe server

- Asigură-te că RAGE rulează cu privilegii de administrator și că Windows este actualizat.

### ℹ️ După ce se deschide RAGE nu se întamplă nimic

- Uneori, problema poate fi legată de faptul că conexiunea ta este blocată de serverul RAGE. Încearcă să folosești un **VPN** și reintră în RAGE după ce te-ai conectat la VPN.
- Software-ul antivirus poate fi, de asemenea, o problemă, blocând conexiunea ta sau ștergând fișierele RAGE, ceea ce împiedică lansarea corectă a acestuia.

### ℹ️ Mouse-ul este blocat în centrul ecranului

- Intră în jocul single-player Grand Theft Auto V și du-te la Setări și schimbă "Mouse Input Method" la "Raw Input".

### ℹ️ Eroarea: "Please launch RAGE Multiplayer as admin"

- Închide **Steam/Epic Games/Rockstar Launcher** și lasă RAGE:MP să ruleze jocul.

### ℹ️ Se deschide RAGE și stă într-un infinit loading screen

- Mută RAGE:MP pe un alt drive, s-ar putea să fie nevoie să reinstalezi Rockstar Launcher.

### ℹ️ Crash la conectarea pe server

- Încearcă să dezactivezi orice software care ar putea fi considerat abuziv, cum ar fi cheat-uri, Sandboxie, VM-uri etc.

### ℹ️ Windows Defender vede RAGE:MP ca malware

- Dacă ai descărcat RAGE Multiplayer de pe site-ul oficial, nu ar trebui să ai niciun motiv de îngrijorare, deoarece este doar o detectare falsă datorită fișierelor noi. Poți să adaugi manual exe-ul în whitelist sau să-l trimiți anonim ca utilizator pentru o submisie falsă pozitivă la https://www.microsoft.com/en-us/wdsi/filesubmission (de obicei durează până la 3 ore pentru ca Microsoft să revizuiască și să elimine FP)

### ℹ️ Crash-uri

- Verificați integritatea fișierelor. În funcție de platforma pe care aveți jocul (steam/epic games/rockstar games), căutați pe Youtube un video de **verify game integrity** specific.
- Stergeți resursele din **RAGEMP** > **client_resources** > folderul cu numele **59f5754b9c3434968574e2758fe8da1c**
- Asigurați-vă că dezactivați **Discord Overlay** sau **alte overlay-uri** (steam, msi afterburner, rivatuner, xbox gamebar, etc). De asemenea, programele de înregistrare precum OBS pot cauza crashuri.
- Dezactivați moduri pentru GTA 5 daca aveți.
- Update la ultima versiune de Windows și ultimul driver al plăcii video.

### ⚠️ Fixuri generale

- **Texturi care nu se incarca**
Setați **Texture Quality** pe **Normal**. De asemenea, recomandăm ca jocul și RAGEMP să fie instalate pe un **SSD**.
- **FPS-uri scazute**
Recomandăm **MSAA off** și **VSync ON**, alături de niște setări grafice mai slabe în funcție de computerul vostru.
- **După ce dau clic pe un server pentru a mă conecta, GTA V se deschide cu un ecran negru și apoi se închide**
Următi toți pașii de la sectiunea **Crash-uri** de mai sus și asigurați-vă că din setările RAGE aveți toate opțiunile dezactivate din zona Advanced.
- **Interfete dublate/multiplicate**
Asigurați-vă că din setările RAGE aveți toate opțiunile dezactivate din zona Advanced.
**Pentru posesorii de plăci video AMD** puteți să dezactivați **Radeon Boost** si **Radeon Anti-Lag**.
- **Mouse-ul meu este blocat în mijlocul ecranului și nu se poate mișca**
Deschide Grand Theft Auto V în modul single player și accesează Setările, apoi setează **Mouse Input Method** pe **(Raw Input)**
- **Frame dropuri la peste 150 fps-uri**
Jocul nu se descurcă foarte bine la peste 150 fps-uri și s-ar putea să facă FPS drop. Recomandăm limitarea FPS-urilor la 144/150 fps-uri din joc sau alte programe terte"
- **Probleme la autentificarea in Rockstar Games Launcher**
Dezactivează optiunea **Real-Time Protection** din Windows.

### ⚠️ Dacă problema ta nu se găsește mai sus mai avem niște soluții generale:

- Reinstalează **RAGE Multiplayer** (Șterge tot din folderul RAGE, cu excepția fișierului 'updater.exe', și rulează acel fișier).
- Nu instala **RAGE** în interiorul folderului GTA V.
- Asigură-te că nu ai moduri instalate.
- Reinstalează **GTA V** sau verifică integritatea fișierelor jocului.
- Rulează **RAGE cu drepturi de administrator**.
- Asigură-te că ai instalate pachetele necesare:
* Microsoft Visual C++ 2015 Redistributable
* Microsoft .NET Framework 4.6.2
- Instalează **RAGE** și **GTA V** pe același drive (de exemplu, **C:/**).
- Instalează **RAGE** și **GTA V** pe drive-uri diferite (de exemplu, GTA V pe **C:/** și RAGE pe **D:/**).
- Asigură-te că ai un fișier de salvare existent pentru modul single player (Dacă începi single player și jocul pornește cu misiunile introductive, înseamnă că nu ai unul).
- Dezactivează **antivirusul/firewall-ul** sau adaugă o excepție (Câteva software-uri antivirus vor continua să ruleze chiar dacă le „dezactivezi”, așa că poate fi necesar să le dezinstalezi temporar pentru a verifica).
- Actualizează **Windows 10** la cea mai recentă versiune.
- Conectează-te la un **VPN** și lansează RAGE, apoi conectează-te la server prin VPN.
- Dezactivează salvarea în Cloud în cadrul Rockstar Games Launcher.

### ℹ️ Dacă nu ai găsit soluția la problema ta, te rugăm să ne contactezi pe Discord.