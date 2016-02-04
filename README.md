# registroElettronico
Applicazione interattiva con Registro Elettronico.

## API

* ## Connessione
  * Raggiungere `http://54.149.146.220:3000/PSIT0008/usercode/password`
  * Di seguito verrà restituito un JSON simile strutturalmente al seguente:
    > {"status":"OK", "sessionId":"<codice alfanumerico di 32 caratteri>"}
    Ora occorre passare all'indirizzo sopra citato il codice precendemente ottenuto
    `http://54.149.146.220:3000/<codice alfanumerico di 32 caratteri>`
    A questo punto si è stabilita una connessione e la pagina sopra citata restituirà il nome dell'alunno e la scuola frequentante
* Voti
  Per visualizzare i voti dello studente accedere alla pagina:
  `http://54.149.146.220:3000/<codice alfanumerico di 32 caratteri>/votes`
* Attività giornaliera
	Per visualizzare gli argomenti affrontati nella giornata odierna:
  `http://54.149.146.220:3000/<codice alfanumerico di 32 caratteri>/oggi`
* Agenda
  Per visualizzare il planner settimanale:
  `http://54.149.146.220:3000/<codice alfanumerico di 32 caratteri>/agenda`
* File
  Per visualizzare i file caricati dai professori per la classe:
  `http://54.149.146.220:3000/<codice alfanumerico di 32 caratteri>/files`
- 
