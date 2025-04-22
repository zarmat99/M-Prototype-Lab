# Landing Page per Servizio di Prototipazione Elettronica

Landing page moderna e accattivante per promuovere un servizio di prototipazione elettronica su misura.

## Caratteristiche

- Design moderno e tech con tema scuro e accenti neon
- Layout responsive adatto a tutti i dispositivi
- Animazioni fluide per migliorare l'esperienza utente
- Form di contatto funzionale
- Struttura ottimizzata per la conversione

## Come utilizzare questa landing page

1. Clona o scarica questi file nel tuo server o hosting
2. Personalizza il contenuto in base alle tue esigenze:
   - Modifica i testi e le descrizioni nell'HTML
   - Aggiorna le informazioni di contatto
   - Sostituisci i placeholder del portfolio con i tuoi progetti reali
   - Aggiungi la tua foto nel profilo
3. Configura il form di contatto per inviare le richieste alla tua email (dovrai implementare il backend per questo)
4. Testa la pagina su diversi dispositivi e browser

## Struttura dei File

- `index.html` - La struttura principale della landing page
- `styles.css` - Tutti gli stili CSS per il design
- `script.js` - Le funzionalità JavaScript per animazioni e interazioni

## Personalizzazione

### Colori

I colori principali sono definiti come variabili CSS in `styles.css`. Puoi modificarli facilmente:

```css
:root {
    --bg-dark: #0a0e17;
    --bg-darker: #060a12;
    --bg-light: #121824;
    --text-light: #f5f5f7;
    --text-dim: #a0a0a5;
    --neon-blue: #00e5ff;
    --neon-green: #00ff9d;
    --accent-color: var(--neon-blue);
    /* ... */
}
```

### Icone

La landing page utilizza Font Awesome per le icone. Puoi sostituire qualsiasi icona cercando quella che preferisci su [Font Awesome](https://fontawesome.com/).

### Form di Contatto

Per rendere funzionante il form di contatto, dovrai implementare un backend per processare i dati inviati e inoltrarli alla tua email. Alcune opzioni:

- Formspree
- Netlify Forms
- Implementare un backend personalizzato (PHP, Node.js, ecc.)

## Note Tecniche

- Il logo con la lettera "M" può essere facilmente modificato
- Cliccando sul logo si alternano i colori neon
- La navigazione evidenzia automaticamente la sezione corrente
- Il form simula un invio e mostra un messaggio di successo

## Licenza

Questo progetto è libero da utilizzare per scopi personali e commerciali.

## Supporto

Per domande o supporto, puoi contattare l'autore originale. 