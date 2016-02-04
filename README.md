# registroElettronico
Applicazione interattiva con Registro Elettronico.

## API

* *Connessione*
  * Raggiungere `http://registroelettronico.ddns.net:3000/PSIT0008/usercode/password`
  * Di seguito verrà restituito un JSON simile strutturalmente al seguente:<br />
    ` {"status":"OK", "sessionId":"<codice alfanumerico di 32 caratteri>"}` <br />
    Ora occorre passare all'indirizzo sopra citato il codice precendemente ottenuto<br />
    `http://registroelettronico.ddns.net:3000/<codice alfanumerico di 32 caratteri>`<br />
    A questo punto si è stabilita una connessione e la pagina sopra citata restituirà il nome dell'alunno e la scuola frequentante
* *Voti*<br />
  Per visualizzare i voti dello studente accedere alla pagina:<br />
  `http://registroelettronico.ddns.net:3000/<codice alfanumerico di 32 caratteri>/votes`
* *Attività giornaliera*<br />
	Per visualizzare gli argomenti affrontati nella giornata odierna:<br />
  `http://registroelettronico.ddns.net:3000/<codice alfanumerico di 32 caratteri>/oggi`
* *Agenda*<br />
  Per visualizzare il planner settimanale:<br />
  `http://registroelettronico.ddns.net:3000/<codice alfanumerico di 32 caratteri>/agenda`
* *File*<br />
  Per visualizzare i file caricati dai professori per la classe:<br />
  `http://registroelettronico.ddns.net:3000/<codice alfanumerico di 32 caratteri>/files`
