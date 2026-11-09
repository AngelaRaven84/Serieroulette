# Vecka 45 - Mitt drömprojekt

**Källa:** [Övningsrepots README](https://github.com/fu-fullstack-webb25/week-45-exercise-react-typescript), läst 2 november 2026.
**Avslut 3 november:** Serieroulettes grundövning är klar för denna veckas omfattning enligt Sara. Sökning, kandidatval, turvis bortval, vinnare och omstart fungerar. Första responsiva stylingen och tomma sökresultat är klara. Sara rapporterar felfri lint och build efter senaste ändringarna. Fortsatt refaktorering är valfri om tid finns. Se [aktuell STATUS](serieroulette/STATUS.md).

## Uppgift

Bygg en valfri webbapplikation i React och TypeScript med data från ett API och ett användarflöde. Att enbart visa API-data räcker inte: användaren ska exempelvis kunna söka, filtrera, välja eller hantera innehåll.

## Krav att följa upp

- [x] React och TypeScript.
- [x] Egna interfaces och/eller types för data.
- [x] Hämta och presentera extern data från ett API.
- [x] useState för applikationens tillstånd.
- [x] Typade props mellan komponenter.
- [x] Ett interaktivt användarflöde.
- [x] Inga any-typer utan tydlig motivering.
- [x] Första stylade gränssnittet är på plats och manuellt testat av Sara; lärarens slutbedömning återstår.

## Frivilliga power-ups

LocalStorage, fler användarflöden, Zustand eller Redux Toolkit, React Router, fler API-anrop, generics/union types/utility types (Pick, Omit, Partial) och experiment med tsconfig.app.json. Dessa är förslag, inte grundkrav.

## Tillåtna datakällor och arbetssätt

Publika API:er, egna tidigare Express-/AWS-API:er eller egen JSON-data publicerad via GitHub Pages är tillåtna. Läraren länkar till [Public APIs](https://github.com/public-apis/public-apis).

Projektförslagen omfattar väder, länder, webbshop, textbaserat RPG, rymddatabas, quiz, musik och recept. Idén är valfri. Börja enkelt och bygg vidare stegvis. AI får användas som stöd, men du ska förstå koden.

## Öppna frågor

README anger ingen deadline eller inlämningsform och fastslår inte att övningen är kursens individuella examination. API-upplägg och eventuella tillval återstår att fastställa.

## Nästa steg

Grundomfattningen är klar enligt Sara. Följ [aktuell STATUS](serieroulette/STATUS.md); typad Button och CSS-refaktorering är valfria om tid finns.

## Vald idé - Serieroulette

**Beslut 2 november 2026:** Sara har valt Serieroulette för veckans övning. Arbetet är påbörjat; aktuell status finns ovan.

Planerat första användarflöde:

1. Sök efter serier och välj kandidater till en omgång.
2. Två personer vid samma app turas om att välja bort en serie.
3. När en serie återstår visas vinnaren med bild och beskrivning.

Föreslagen datakälla: [TVmaze](https://www.tvmaze.com/api). API-anrop och datamodell är nu provade av Sara. Ingen realtidsfunktion mellan enheter är planerad.


## Genomgångarna mottagna 2 november

[Kursintroduktionen](../anteckningar/KURSINTRO_2026-11-02.md) bekräftar att detta är en veckoövning med anpassningsbar omfattning. Den individuella examinationen beskrivs i stället som en reflekterande uppgift kopplad till grupprojektet. [React-genomgången](../anteckningar/REACT_TYPESCRIPT_2026-11-02.md) slutar med tid för eget arbete. Tidigare vänteläge ovan är historik: Sara har bett att börja Serieroulette. Vite-start och API-sökning har därefter bekräftats av Sara. Fortsätt enligt aktuell STATUS.
