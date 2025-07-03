# Weiterführende Anleitungen
## Schreiben mit Visual Studio Code
Man kann seine Arbeit auch bequem mit VS Code schreiben, statt mit Texmaker. Ob VS Code oder Texmaker besser zum Schreiben der Arbeit geeignet ist, muss jeder selbst wissen.

1. VS Code installieren: https://code.visualstudio.com/Download
2. Die VS Code Erweiterung "LaTeX Workshop" installieren
3. Die LaTex-Vorlage öffnen: "Datei -> Ordner öffnen..."
4. Sobald man eine .tex-Datei in der Vorlage ändert und speichert, wird ein Build-Vorgang gestartet.

Sehr zu empfehlen: Die VS Code Erweiterung "Spell Right" liefert eine Rechtschreibprüfung.

## Hinzufügen von weiteren Quellenarten
Standardmäßig gibt es im Quellenverzeichnis die Abschnitte Bücher, Sammelwerke, Artikel, Internetquellen, Interviews und interne Quellen. Man kann weitere Quellenarten hinzufügen.
Um die Anleitung etwas anschaulicher zu machen, wird als Beispiel wissenschaftliche Arbeiten als neue Quellenart angelegt.

1. Den passenden BIBTEX Database Entry Type wählen. <br> http://tug.ctan.org/info/biblatex-cheatsheet/biblatex-cheatsheet.pdf<br>
Für wissenschaftliche Arbeiten ist der Typ ```@thesis``` am besten geeignet. Falls kein Typ so richtig passt, kann man ```@misc``` nehmen.
2. In der Vorlage die Datei "text/references.tex" öffnen und folgenden Code hinzufügen:
```
\defbibheading{Arbeiten}{\noindent\large\textbf{Wissenschaftliche Arbeiten}} 
\printbibliography[type=thesis, heading=Arbeiten]
```
Mit dem Parameter "type" wird der Typ definiert, den wir im ersten Schritt gewählt haben.
3. Einen Eintrag in die Datei "text/content/bibliography.bib" hinzufügen, z. B. so:
```
@thesis{Meier2005,
  author       = {Linus Meier}, 
  title        = {LaTex in wissenschaftlichen Arbeiten},
  school       = {DHBW Lörrach},
  year         = 2005,
} 
```
4. Wenn der Eintrag zitiert wird, erscheint im Quellenverzeichnis der Abschnitt "Wissenschaftliche Arbeiten".

## Linux
Unter Linux muss man statt MiKTeX eine andere TeX-Distribution, z. B. TeX Live, installieren. Mit folgendem Befehl wird TeX Live installiert:
```
sudo apt-get install texlive-bibtex-extra biber texlive-lang-german texlive-latex-extra fonts-crosextra-carlito texlive-luatex texinfo
```
Danke @Zoidbart für diesen Beitrag (Issue #1)

