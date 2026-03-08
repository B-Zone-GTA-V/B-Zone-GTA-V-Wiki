---
outline: deep
lastUpdated: true
---

# Programe Interzise

## <a id="C1.1"></a>C1.1  - Cheats

Reprezintă folosirea programelor pentru a îți crea avantaje sau pentru a deranja ceilalți jucători pentru propriul amuzament. Este interzisă utilizarea oricăror programe sau instrumente care modifică în mod intenționat conexiunea la internet, fișierele jocului în timpul sesiunilor de joc, cu scopul de a obține un avantaj sau de a perturba experiența altor jucători.

În cazul în care sunteți suspectat ca jucati cu cheat-uri, veți fi luați la teste; acestea pot fi refuzate, însă veți fi sancționați cu <strong style="color: red">BAN PERMANENT</strong>. În cazul în care jucatorul face parte dintr-o organizație (mafie, poliție, medici) acesta va fi scos cu 30 de zile Faction Punish. Pe langa cele 30 de zile de Faction Punish jucătorul are interdicție 30 de zile de a intra într-o mafie sau de a ține armă în mână, în caz contrar jucatorul va fi banat de coduri.

<div class="rule-box rule-sanction">
    <div class="title">Sanctiuni:</div>

| Abaterea | Cost Unban   |  Sanctiune  |
| -------- | ------------ | --------- |
| 1        | 20.000 Gold  | Ban Permanent |
| 2        | 40.000 Gold  | Ban Permanent |
| 3        | 80.000 Gold  | Ban Permanent |
| 4        | 160.000 Gold | Ban Permanent |
| 5        | 320.000 Gold | Ban Permanent |

⚠️ Costul se dublează la fiecare abatere.


<strong style="color: #e87a5f">Echipa administrativă își rezervă dreptul de a bana și fără drept de plată.</strong>
</div>

## <a id="C2.1"></a>C2.1 - Moduri ilegale

Reprezintă folosirea de moduri ce alterează starea jocului cu scopul de a vă oferii avantaje față de alți jucători.

<div class="rule-box rule-red">
    <div class="title">Exemple de moduri ilegale:</div>
    - moduri ce modifica ciclul de zi-noapte al jocului (zi permanenta, etc.)<br>
    - moduri de efecte pe hituri de gloante<br>
    - moduri de tracere pentru gloante<br>
    - moduri ce scot texturi sau elemente de mapping<br>
    - moduri ce coloreaza tinta cand e pusă pe un jucator
</div>

<div class="rule-box rule-sanction">
    <div class="title">Sanctiuni:</div>
        <table>
        <thead>
            <tr>
                <th>Abaterea</th>
                <th>Sancțiune</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>1</td>
            <td>Warn + eliminarea modurilor</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Ban 30 de zile</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Ban permanent</td>
            </tr>
        </tbody>
        </table>
</div>

## <a id="C3.1"></a>C3.1 - Afiliere comunitate cheats

Se consideră afiliere, promovare sau colaborare orice asociere cu o comunitate, website, server de Discord sau grup care distribuie, vinde sau promovează programe de tip cheat, hack ori orice alt software ce oferă un avantaj în joc.

<div class="rule-box rule-sanction">
    <div class="title">Sanctiuni:</div>
                <table>
                <thead>
            <tr>
                <th>Abaterea</th>
                <th>Sancțiune</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>1</td>
            <td>Warn + dovadă cu părăsirea respectivelor comunități</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Ban 30 de zile + dovadă cu părăsirea respectivelor comunități</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Ban permanent</td>
            </tr>
        </tbody>
        </table>
</div>

##  <a id="C4.1"></a>C4.1 - Actualizare Obligatorie – Setări Windows
📅 **Începând cu 05.07.2025**, toți jucătorii trebuie să aibă anumite servicii Windows activate pentru a putea juca în condiții corecte și fără riscuri.
<div class="rule-box rule-green">
        <div class="title">Servicii necesare (trebuie să fie `Running`)</div>

        - PcaSvc
        - CDPSvc
        - DPS
        - SSDPSRV
        - DiagTrack
        - SysMain
        - EventLog
        - CDPUserSvc_*
        - Appinfo
        - WSearch
</div>

<div class="rule-box rule-yellow">
<div class="title">Cum verifici?</div>

1. Deschide **PowerShell ca Administrator**
2. Rulează următoarea comandă:

```powershell
get-service | findstr -i "pcasvc";
get-service | findstr -i "DPS";
get-service | findstr -i "Diagtrack";
get-service | findstr -i "sysmain"; 
get-service | findstr -i "eventlog"; 
get-service | findstr -i "sgrmbroker"; 
get-service | findstr -i "cdpusersvc"; 
get-service | findstr -i "appinfo"; 
get-service | findstr -i "WSearch"
```
</div>
<div class="rule-box rule-yellow">
    <div class="title">Așa trebuie să arate sistemele când rulați comanda în PowerShell.</div>
    <img src="https://assets.b-zone.ro/wiki/system-example.png" alt="System Example">
</div>
<div class="rule-box rule-sanction">
    <div class="title">⚠️Tentativele de a dezactiva aceste servicii pentru a ascunde moduri/programe interzise vor duce la:</div>
    ➡️ Ban permanent
</div>
<br>
<br>
<div class="rule-box rule-yellow">
Acest regulament a fost scris și gândit de către administrația serverului B-Zone.
</div>