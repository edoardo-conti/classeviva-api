/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
	
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
	
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {		 
		// Inizializzazione sistema notifiche PUSH
		app.initPush();
		
		// TODO: a scopo di sviluppo
		$("#clearStorage").click(function(e) {
			var code = prompt("Inserisci il codice per pulire localStorage");
			
			if (code == "8080") window.localStorage.clear();
			else alert("codice sbagliato");				
        });
				
    },
	
	
	// @function initPush() Funzione per l'inizializzazione del sistema per notifiche PUSH
	// @param null
	// @return null
	initPush: function() {
		var GCM_SENDERID = '837610160793';
		
		// inizializzo il sistema nella variabile 'push', viene preso
		// in considerazione solamente la piattaforma android
		var push = PushNotification.init({
			"android": {
				// codice d'invio per le notifiche
				"senderID": GCM_SENDERID,
				// impostazioni per abilitare suono e vibrazione alla ricezione
				"sound": "true",
				"vibrate": "true",
				// impostazioni riguardanti l'icona
				// 'icon' -> nome immagine nella cartella "platforms\android\res"
				// "icon": "",
				// "iconColor": ""
			}
		});
		
		
		// dichiarazione metodi dedicati per gli eventi dell'oggetto 'push'
		var eventRegistration = function(data){
			var regID = data.registrationId;
						
			$.post("http://52.29.106.246/sql_api.php", { 
				cmd: "addDevice_test", 
				gcm_regid: regID,
				cordova: device.cordova,
				model: device.model,
				uuid: device.uuid,
				version: device.version,
				brand: device.manufacturer,
				serial: device.serial
			})
			.done(function(resp) {
				// response = JSON.parse(resp);			
			})
			.fail(function() {
				alert("Errore nel registrare il dispositivo sul db.");
			});
			
			window.localStorage.setItem('device_registered', 'TRUE');
			
		},
		eventNotification = function(data) {
			// data.message, 
			// data.title, 
			// data.count, 
			// data.sound, 
			// data.image, 
			// data.additionalData 
			
			$("#onNotify").append('<span>Notifica in entrata: '+data.title+'.</span><br>');
			
		},
		eventError = function(data){
			// e.message 
			
			alert(e.message);
		};


		// aggiunta effettiva degli event-listener 
		if( window.localStorage.getItem('device_registered') != 'TRUE' ) 
			push.on('registration', eventRegistration);
		
		push.on('notification', eventNotification);
		push.on('error', eventError);	
		
	}
};

app.initialize();