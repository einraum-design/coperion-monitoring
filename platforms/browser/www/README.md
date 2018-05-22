Anleitung Füllstand-Formen erstellen:

1. Box positionieren (irgendeinen farbigen Hintergrund einstellen)
2. Screenshot machen
3. Screenshot genau auf die Größe der Box zuschneiden
4. Pfad zeichen (hab das in Sketch gemacht)
5. Pfad als SVG exportieren
6. Datei: convert_svg_values.php öffnen, SVG-Pfad dort eintragen, Breite und Höhe sind die Breite und die Höhe des Screenshots von der Box
7. PHP Script im Browser aufrufen, die Pfadpunkte werden in relative Punkte (0 bis 1) umgerechnet
8. In index.html bei den anderen clip-paths eintragen
9. Im CSS verwenden (siehe anlage.css