// * localStorage ist auch Teil des BOM, weil ich da auf den internen
// * Speicherplatz des Browsers zugreife

// * kann ich in der Dev-Tools unter Application einsehen
// ? localStorage speichert für eine URL Daten fest im Browser
const languageSettings = { language: 'German', subTitleLanguage: 'English' };
// * mit setItem kann ich etwas in die lokale Datenbank des Browsers schreiben
const settingsAsJson = JSON.stringify(languageSettings);
localStorage.setItem('languageSetting', settingsAsJson);

// * mit getItem hole ich es wieder heraus
const settingsFromLocalStorage = localStorage.getItem('languageSetting');
if (settingsFromLocalStorage) {
  const realLanguageSettingsObject = JSON.parse(settingsFromLocalStorage);
  console.log(realLanguageSettingsObject);
}

// * es gibt auch einen Session Storage, der genauso benutzbar ist und
// * die gleiche Logik hat
// ! einziger Unterschied: wenn ich den Tab oder Browser schließe ist der
// ! Eintrag weg
// ? wenn ich wirklich nur temporär etwas speichern will, nutze ich lieber das

const languageSettings2 = { language: 'English', subTitleLanguage: 'English' };
const settings2Json = JSON.stringify(languageSettings2);

// ? soll in den sessionStorage
sessionStorage.setItem('languageSetting', settings2Json);

const setting2FromSessionStorage = sessionStorage.getItem('languageSetting');
if (setting2FromSessionStorage) {
  const realSettingsObject = JSON.parse(setting2FromSessionStorage);
  console.log(realSettingsObject);
}
