const mealsWeek1: string[] = []
const mealsWeek2: string[] = []
const mealsWeek3: string[] = []
const mealsWeek4: string[] = []

// elemente aus dem html holen und in variablen speichern
const mealNameInputElement = document.querySelector("#meal-name-input") as HTMLInputElement;
// as HTMLInputElement -> nennt sich "Type Casting" -> wir geben typescript zusätzliche informationen über den typen des elements, damit wir alle methoden und eigenschaften, die bei Input Elementen verfügbar sind, verwenden können 
const addMealButtonElement = document.querySelector("#add-meal-btn")
const selectWeekElement = document.querySelector("#select-week") as HTMLSelectElement;
const weekHeadlineElement = document.querySelector("#week-headline")
const weekUlElement = document.querySelector("#week-list")

// so könnte typescript z.b. von selbst erkennen, dass es sich um ein HTMLInputElement handelt - aber diese lösung wird in der regel nicht verwendet, da wir ein spezifisches element ansprechen wollen (über ID oder klasse)
// const inputElement = document.querySelector("input")
// if (inputElement){
//     const inputValue = inputElement.value
// }


// funktion erstellen, um ein meal hinzuzufügen -------------------------------------

function addMeal(event: Event): void {
    event.preventDefault() // verhindert in diesem fall das neuladen der seite

    // wenn das select element oder das input element nicht vorhanden sind -> verlasse die funktion
    if(!selectWeekElement || !mealNameInputElement) return; 

    // input feld auslesen -------------------------------------
    const mealNameInput = mealNameInputElement.value.trim();

    // ermitteln in welcher woche wir uns befinden -------------------------------------
    const selectedWeek = selectWeekElement.value;

    // console.log(mealNameInput);
    // console.log(selectedWeek);

    // wenn der ausgelesene wert aus dem input element nicht existiert oder leer ist -> verlasse die funktion 
    if (!mealNameInput) return;
    
    // das relevante meals array ermitteln (für die entsprechende woche) -------------------------------------
    const currentWeekMeals = getCurrentWeekMeals(selectedWeek)

    // die ursprüngliche / alte version (ohne ausgelagerte funktion)
    // let currentWeekMeals: string[] = [];
    // switch (selectedWeek) {
    //     case "1":
    //         currentWeekMeals = mealsWeek1
    //         break;
    //     case "2":
    //         currentWeekMeals = mealsWeek2
    //         break;
    //     case "3":
    //         currentWeekMeals = mealsWeek3
    //         break;
    //     case "4":
    //         currentWeekMeals = mealsWeek4
    //         // mealsWeek4.push(mealNameInput)
    //         break;
    // }

    // input value in das relevante array pushen -------------------------------------
    currentWeekMeals.push(mealNameInput)
    // console.log(mealsWeek1);
    
    // im html anzeigen lassen -------------------------------------
    // funktion mit argumenten aufrufen, die fürs anzeigen im html verantwortlich ist
    renderMealsList(selectedWeek, currentWeekMeals)
    // input feld leeren (die nutzer-eingabe entfernen)
    mealNameInputElement.value = ""
}

// eventListener auf den button setzen -------------------------------------
if (addMealButtonElement){
    addMealButtonElement.addEventListener("click", addMeal)
}

// funktion, die fürs anzeigen im html verantwortlich ist
// bekommt als parameter die ausgewählte woche und das relevante meals-array
function renderMealsList(selectedWeek: string, currentWeekMeals: string[]): void {
    if (weekHeadlineElement && weekUlElement){
        weekHeadlineElement.innerHTML = `Week ${selectedWeek}`

        // Ul element leeren (um doppelungen zu vermeiden)
        weekUlElement.innerHTML = ""

        // für jedes meal aus dem meals-array...
        currentWeekMeals.forEach((meal) => {
            const newListItem = document.createElement("li") // .. ein li element erstellen
            newListItem.innerText = meal // .. als text das meal zuordnen
            weekUlElement.appendChild(newListItem) // .. das li element als child an das ul element anheften

            // alternative:
            // weekUlElement.innerHTML += `<li>${meal}</li>`
        })
    }
}


// funktion erstellen, um die wochenansicht zu ändern -------------------------------------
function changeWeek(event: Event): void {
    event.preventDefault()

    // ermitteln in welcher woche wir uns befinden -------------------------------------
    const selectedWeek = selectWeekElement.value;

    // das relevante meals array ermitteln (für die entsprechende woche) -------------------------------------
    const currentWeekMeals = getCurrentWeekMeals(selectedWeek)

    // die ursprüngliche / alte version (ohne ausgelagerte funktion)
    // let currentWeekMeals: string[] = [];
    // switch (selectedWeek) {
    //     case "1":
    //         currentWeekMeals = mealsWeek1
    //         break;
    //     case "2":
    //         currentWeekMeals = mealsWeek2
    //         break;
    //     case "3":
    //         currentWeekMeals = mealsWeek3
    //         break;
    //     case "4":
    //         currentWeekMeals = mealsWeek4
    //         // mealsWeek4.push(mealNameInput)
    //         break;
    // }

    // die anzeige im html aktualisieren -------------------------------------
    renderMealsList(selectedWeek, currentWeekMeals)
}

// eventListener auf select element setzen -------------------------------------
selectWeekElement.addEventListener("change", changeWeek)


// funktion zur ermittlung des relevanten arrays je nach ausgewählter woche
function getCurrentWeekMeals(selectedWeek: string): string[] {
    switch (selectedWeek) {
        case "1":
            return mealsWeek1
        case "2":
            return mealsWeek2
        case "3":
            return mealsWeek3
        case "4":
            return mealsWeek4
        default:
            return []
    }
}