## scrollbar-gutter

**/* Initial value */**
***'Der Anfangswert. Klassische Bildlaufleisten erzeugen eine Rinne, wenn "Überlauf" auf "Blättern" eingestellt ist, oder wenn "Überlauf" auf "Automatisch" eingestellt ist und das Feld überläuft. Overlay-Scrollbars verbrauchen keinen Platz.'***

scrollbar-gutter: auto; 

**'/* "stable" keyword, with optional modifier */'**
***'Bei der Verwendung von klassischen Bildlaufleisten ist die Rinne vorhanden, wenn der Überlauf auf "Auto", "Scroll" oder "Ausgeblendet" eingestellt ist, auch wenn das Feld nicht überläuft. Bei der Verwendung von Overlay-Rollbalken wird die Rinne nicht angezeigt.'***

scrollbar-gutter: stable;

**'stable both-edges keyword'**
***'Wenn eine Rinne an einer der Inline-Start-/Endkanten des Kastens vorhanden ist, wird auch an der gegenüberliegenden Kante eine Rinne vorhanden sein.'***

scrollbar-gutter: stable both-edges;


/* Global values */
scrollbar-gutter: inherit;
scrollbar-gutter: initial;
scrollbar-gutter: revert;
scrollbar-gutter: revert-layer;
scrollbar-gutter: unset;