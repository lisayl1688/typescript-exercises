# Git Vertiefung

Ziel: Wie kann ich mit mehreren Leuten an einem Git-Repository arbeiten

Code siehe Repository: https://github.com/VZ-WD-24-01/git-vertiefung.git

## Allgemeine Befehle

1. ** git status ** -> aktuelle Änderungen anzeigen

aus Commit Ansicht herauskommen: :q

## Git Branches

1. **git branch** -> zeigt alle lokalen Branches/Zweige an
2. **git branch Branchname** -> legt einen neuen Branch mit dem Namen an
3. **git branch -d Branchname** -> löscht den Branch
4. **git checkout Branchname** -> wechselt zum Branch mit dem Namen
   -> Abkürzung für beides zusammen: **git checkout -b Branchname** →> legt einen neuen Branch an und wechselt
5. a) **git push origin Branchname** -> legt den Branch auch in Github an - das muss ich jedes Mal schreiben
6. b) **git push --set-upstream origin Branchname** -> legt den Branch in Github an und verheiratet direkt die Branches
   d.h. bei den nächsten Pushes muss ich nur noch git push 6. Änderungen machen und wie immer mit: git add, git commit, git push zu Github hochschicken

## Git Merge

Wir gehen zu dem Branch, wo die Änderung rein soll: main

1. **git checkout main** -> wechselt zum main branch
2. **git merge Branchname** -> integriert den Branch in Main bzw. führt sie zusammen
   -> Zusammenführen findet erstmal lokal auf dem Rechner statt
3. **git push** -> schiebt die zusammengeführten Dateien (Ergebnis des Merges) zu Github
4. **git branch -d Branchname** -> wenn erfolgreich gemergt wurde, kann ich ggf. den Branch wieder löschen

## Hilfe - ich will was lokal rückgängig machen

ACHTUNG - macht wirklich rückgängig - es gibt keinen Weg zurück

1. **git reset --hard HEAD~1** -> macht den letzten Commit rückgängig
2. **git reset --hard HEAD** -> macht alles lokal rückgängig bis zum letzten push
3. **git reset --hard 0ad5a7a6** -> macht alles bis zur angegebenen Commit-Id rückgängig
   -> Commit-Id finden mit **git log —oneline**

## Hilfe - ich komme nicht aus der Commit oder Merge-Ansicht raus

1. Bei **git log** -> Taste q
2. Bei **git commit** oder **git merge** -> mit :q oder :wq! für quit oder write&quit

## Hilfe - alles ist kaputt

1. Neuen Ordner erstellen und das Projekt einmal komplett neu von Github holen
2. ** git clone https://github.com/Alex1234567/ts-basic.git**
