---
outline: deep
---

# Rage Multiplayer - Probleme generale

##  Probleme generale

### Erori de la moduri

- Dacă întâmpini una din erorile `ERROR: Your game version is not supported by RAGE Multiplayer.`, `ERROR: You try to open RAGE Multiplayer with an altered version of Grand Theft Auto V` sau `DLC File missing or corrupted in your game` vă recomandăm să stergeți ultimele moduri instalate.
- Dacă ai avut Network Graphics și l-ai dezinstalat în continuare ți-au rămas niște fisiere injectate în GTA V. Pentru a le înlătura trebuie să ștergeți ce este în folderul user_resources din RAGEMP.
- Dacă problema persista un reinstall la clientul RAGEMP + Verify game files la GTA V va rezolva problema.

### Versiunea jocului tău nu este compatibilă cu RAGE Multiplayer

- Dacă ai descărcat o versiune piratată a jocului, nu poți utiliza RAGE Multiplayer.
- Dacă ai achiziționat o copie a jocului Grand Theft Auto V, mergi în folderul GTA V și șterge fișierul `GTA5.exe`, apoi rulează `PlayGTA5.exe` și lasă jocul să ruleze. După aceea, închide jocul și încearcă să rulezi din nou RAGE.

### Eroarea: "Clientside packages checksums mismatch! Trying again..."

- Șterge fișierul `client_packages` din directorul unde ai instalat RAGE Multiplayer și încearcă să te conectezi din nou.

[Click aici](#T1) pentru tutorial.

### Eroarea: Offline Mode

- Eroarea aceasta apare în mod uzual în momentul în care adresa IP este banată pe serverele Rockstar. Schimbarea adresei IP va rezolva problema.

### Eroarea: "Failed to retrieve the install directory"

- Path-ul către GTA V nu este setat corect. Apasă pe Ok și selectează calea unde se află jocul GTA V.

### RAGE Multiplayer se blochează când intru pe server

- RAGE nu poate lansa `GTA V`, de obicei, acest lucru se întâmplă deoarece jocul tău are actualizări în așteptare pentru descărcare și, prin urmare, nu poate rula. Încearcă să rulezi GTA V în modul `single-player` și vezi ce se întâmplă. După ce reușești să intri în `single-player`, încearcă să folosești din nou `RAGE`.

### Interfețe duble

- Asigurați-vă în primă fază că aveți opțiunea `Accelerated CEF Rendering` dezactivată.
- Dezactivează `Radeaon Anti-Lag` / `Radeaon Boost`.

### Intrare in single-player când intru pe server

- Asigură-te că `RAGE` rulează cu privilegii de administrator și că `Windows` este actualizat.

### După ce se deschide RAGE nu se întamplă nimic

- Uneori, problema poate fi legată de faptul că conexiunea ta este blocată de serverul `RAGE`. Încearcă să folosești un `VPN` și reintră în RAGE după ce te-ai conectat la VPN.
- Software-ul antivirus poate fi, de asemenea, o problemă, blocând conexiunea ta sau ștergând fișierele `RAGE`, ceea ce împiedică lansarea corectă a acestuia.
- Rezolvarea este valabilă și pentru cazul în care resursele nu se descarcă.

### Mouse-ul este blocat în centrul ecranului

- Intră în jocul single-player Grand Theft Auto V și du-te la Setări și schimbă `Mouse Input Method` la `Raw Input`.

### Eroarea: "Please launch RAGE Multiplayer as admin"

- Închide Steam/Epic Games/Rockstar Launcher și lasă RAGE:MP să ruleze jocul.

### Se deschide RAGE și stă într-un infinit loading screen

- Mută RAGE:MP pe un alt drive, s-ar putea să fie nevoie să reinstalezi Rockstar Launcher.

### Crash la conectarea pe server

- Încearcă să dezactivezi orice software care ar putea fi considerat abuziv, cum ar fi cheat-uri, Sandboxie, VM-uri etc.

### Windows Defender vede RAGE:MP ca malware

- Dacă ai descărcat `RAGE Multiplayer` de pe site-ul oficial, nu ar trebui să ai niciun motiv de îngrijorare, deoarece este doar o detectare falsă datorită fișierelor noi. Poți să adaugi manual exe-ul în `whitelist` sau să-l trimiți anonim ca utilizator pentru o submisie falsă pozitivă la https://www.microsoft.com/en-us/wdsi/filesubmission (de obicei durează până la 3 ore pentru ca Microsoft să revizuiască și să elimine FP).

### Crash-uri

- Verificați integritatea fișierelor. În funcție de platforma pe care aveți jocul (steam/epic games/rockstar games), căutați pe Youtube un video de verify game integrity specific.
- Stergeți resursele din RAGEMP <[Tutorial](#T1)>
- Asigurați-vă că dezactivați `Discord Overlay` sau alte overlay-uri (steam, msi afterburner, rivatuner, xbox gamebar, etc). De asemenea, programele de înregistrare precum OBS pot cauza crashuri.
- Dezactivați moduri pentru GTA 5 daca aveți.
- Update la ultima versiune de Windows și ultimul driver al plăcii video.

### Fixuri generale

- Texturi care nu se incarca Setați Texture Quality pe High. De asemenea, recomandăm ca jocul și RAGEMP să fie instalate pe un SSD.
- FPS-uri scazute `Recomandăm MSAA - off` și `VSync - ON`, alături de niște setări grafice mai slabe în funcție de computerul vostru.
- După ce dau clic pe un server pentru a mă conecta, GTA V se deschide cu un ecran negru și apoi se închide Următi toți pașii de la sectiunea Crash-uri de mai sus și asigurați-vă că din setările  RAGE aveți toate opțiunile dezactivate din zona Advanced.
- Interfete dublate/multiplicate asigurați-vă că din setările RAGE aveți toate opțiunile dezactivate din zona Advanced. Pentru posesorii de plăci video AMD puteți să dezactivați `Radeon Boost` si `Radeon Anti-Lag`.
- Mouse-ul meu este blocat în mijlocul ecranului și nu se poate mișca Deschide Grand Theft Auto V în modul single player și accesează Setările, apoi setează Mouse Input Method pe (Raw Input)
- Probleme la autentificarea in Rockstar Games Launcher Dezactivează optiunea Real-Time Protection din Windows.




## Tutoriale

### <a id="T1"></a>Tutorial stergere resursele serverului
<div class="rule-box rule-green">

1. In folderul de instalare al RAGE Multiplayer, deschide folderul `client_resources`.
2. Sterge toate folderele ce le vezi acolo, acestea sunt resursele serverului, iar daca le stergi, clientul RAGE Multiplayer va descarca resursele noi de pe server, iar daca problema era cauzata de o resursa corupta, aceasta metoda o sa rezolve problema.
</div>

