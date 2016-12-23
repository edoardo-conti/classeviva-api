# registroElettronico
Applicazione interattiva con Registro Elettronico ClasseViva
Sviluppata da Lorenzo, Edoardo, Luca.


## API

* *Connessione*
  * Raggiungere `<address>:3000/PSIT0008/usercode/password`
  * Di seguito verrà restituito un JSON simile strutturalmente al seguente:<br />
    ` {"status":"OK", "sessionId":"<codice alfanumerico di 32 caratteri>"}` <br />
    Ora occorre passare all'indirizzo sopra citato il codice precendemente ottenuto<br />
    `<address>:3000/<codice alfanumerico di 32 caratteri>`<br />
    A questo punto si è stabilita una connessione e la pagina sopra citata restituirà il nome dell'alunno e la scuola frequentante
* *Voti*<br />
  Per visualizzare i voti dello studente accedere alla pagina:<br />
  `address:3000/<codice alfanumerico di 32 caratteri>/voti`
* *Attività giornaliera*<br />
	Per visualizzare gli argomenti affrontati nella giornata odierna:<br />
  `<address>:3000/<codice alfanumerico di 32 caratteri>/oggi`
* *Agenda*<br />
  Per visualizzare il planner settimanale:<br />
  `<address>:3000/<codice alfanumerico di 32 caratteri>/agenda`
* *File*<br />
  Per visualizzare i file caricati dai professori per la classe:<br />
  `<address>:3000/<codice alfanumerico di 32 caratteri>/didattica`
* *Assenze*<br />
  Per controllare le assenze:
  `<address>:3000/<codice alfanumerico di 32 caratteri>/assenze`

