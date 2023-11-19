import { useEffect, useState } from 'react'
import './App.scss'

function App() {
  const [starting1, setStarting1] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const [Astyle1, setAstyle1] = useState({ opacity: 1 });
  const [Astyle2, setAstyle2] = useState({ opacity: 1 });
  const [Astyle3, setAstyle3] = useState({ opacity: 1 });

  
  useEffect(() => {
    if (isOpen) {
      setTimeout(function () {
          setAstyle1({ opacity: 0, display: "flex" });
          setTimeout(() => {
            setAstyle1({ opacity: 1, display: "flex" });
          }, 250);
      }, 250);
    } else {
        setTimeout(function () {
        setAstyle1({ opacity: 0 });
        setTimeout(() => {
          setAstyle1({ opacity: 0, display: "none" });
        }, 250);
      }, 0);
      }
  }, [isOpen]);

  useEffect(() => {
    setTimeout(function () {
      if (isOpen) {
          setAstyle2({ opacity: 0, display: "flex" });
          setTimeout(() => {
            setAstyle2({ opacity: 1, display: "flex" });
          }, 250);
      } else {
        setAstyle2({ opacity: 0 });
        setTimeout(() => {
          setAstyle2({ opacity: 0, display: "none" });
        }, 250);
      }
    }, 125);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
        setTimeout(() => {
          setAstyle3({ opacity: 0, display: "flex" });
          setTimeout(() => {
            setAstyle3({ opacity: 1, display: "flex" });
          }, 250);
      }, 0);
      } else {
        setTimeout(function () {
        setAstyle3({ opacity: 0 });
        setTimeout(() => {
          setAstyle3({ opacity: 0, display: "none" });
        }, 250);
      }, 250);
      }
  }, [isOpen]);


  
  return (
    <>
      <div className='start' style={{display: starting1 ? "none" : "flex"}}>
        <h1>Presentazione di TPSIT</h1>
        <button onClick={() => setStarting1(true)}>Inizia</button>
      </div>
      <nav className='navbar'>
        <span>Presentazione da 10</span>
        <div className={isOpen ? "menu" : "menu disabled"}>
          <a href='#1' 
          style={Astyle1} >
            <div></div>
            <span>Inizio presentazione</span>
            <div></div>
          </a>
          <a href="#2"
          style={Astyle2}>
            <div></div>
            <span>La comunicazione nel web</span>
            <div></div>
          </a>
          <a href="#3"
          style={Astyle3}>
            <div></div>
            <span>Il livello applicativo</span>
            <div></div>
          </a>
          <button className="button"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>
      </nav>
      <div className="main-container" style={{display: starting1 ? "flex" : "none"}}>
        
        <div className="first" id="1">
          <div className="autori">
            <span>Giacomo Abbruciati</span>
            <span>Damiano Ramerino</span>
            <span>Rolf Karol Seifert</span>
          </div>
          <div className="title">
            <span>Presentazione di TPSIT sul Capitolo 1</span>
            <a href='#2'>Comincia</a>
          </div>
          <div className="video-container">
            <video className='initial-video' autoPlay muted preload loop>
              <source src='../media/Untitled video - Made with Clipchamp.mp4' type='video/mp4'/>
            </video>
          </div>
        </div>
        <div className="second" id="2">
          <h2>La comunicazione nel web con protocollo HTTP</h2>

          <h3>Differenze tra frontend e backend {"(client / server)"}</h3>
          <p>
            Nelle applicazioni Web si possono riconoscere due principali entità:
          </p>
          <p>
            <ul>
              <li>
                Il <b>frontend</b> è la <em>parte visibile</em> e interattiva di {"un'applicazione web"}, gestita sul dispositivo {"dell'utente"}, questa entità viene definita <em>“client”</em>. Per realizzare {"l'interfaccia "}utente (UI) delle pagine web vengono utilizzati HTML, CSS e JavaScript, che può interagire con il backend tramite richieste HTTP.
              </li>
              <li>
                Il <b>backend</b> è la <em>parte nascosta</em> che gestisce la logica di business, le richieste provenienti dal front end e, in caso esso sia presente, interagisce con il database. La comunicazione anche qui avviene tramite richieste HTTP. Per lo sviluppo di {"un'applicazione "}backend possono essere usate molte tecnologie e linguaggi, tra cui NodeJS, PHP, .NET, Go, C, Python, Java, ecc…
              </li>
            </ul>
            <img src="../media/frontend-backend-Copy.png" alt="sium" />
          </p>

          <div className="sep"></div>

          <h3>Le richieste HTTP</h3>
          <p className='sub'>
          <h4>
            <b>{"Cos'è l'HTTP?"}</b> <em className='no'>(HyperText Transfer Protocol)</em> <br />
          </h4>
            HTTP è il <em>protocollo</em> che viene utilizzato ogni volta che si visualizza un sito Web, o si vuole interagire con il backend. Questo protocollo definisce {"l'insieme"} di regole utilizzate per comunicare con i server web per la trasmissione dei dati delle pagine web, siano esse pagine HTML, immagini, video, ecc.
          </p>
          <p className='sub'>
          <h4>
            <b>{"Cos'è l'HTTPS?"}</b> <em className='no'>(HyperText Transfer Protocol Secure)</em> <br />
          </h4>
          {"L'HTTPS"} è la versione <em>sicura</em> di HTTP. I dati HTTPS sono crittografati, protetti dagli attacchi del tipo <em>“man in the middle”</em> tramite un sistema a doppia chiave pubblica/privata. Inoltre molto spesso vengono utilizzate delle tecniche per reindirizzare il traffico da HTTP ad HTTPS, solitamente il servizio che permette {"l'hosting "}di un sito su una macchina permette questa funzionalità, ad esempio in Apache configurando un router nel file .htaccess.
          </p>
          <p className='sub'>
            <h4>
              <b>{"Cos'è l'SSL?"}</b> <em className='no'>(Secure Socket Layer)</em> <br />
            </h4>
          I certificati SSL sono dei piccoli file contenuti nel server che fornisce le pagine web, essi contengono alcune informazioni riguardo la durata di questo certificato, la chiave pubblica e {"l'ente"} che lo ha rilasciato. Si possono ottenere i certificati SSL sia gratuitamente, ad esempio tramite una associazione chiamata <em>{"Let's Encrypt"}</em>, che fornisce certificati gratuiti con una validità di 3 mesi, oppure sotto pagamento, consentendo {"l'estensione"} della validità di circa un anno.
          </p>
          <p className='sub'>
            <h4>
              <b>{"Cos'è un URL"}</b> <em className='no'>(Uniform Resource Locator)</em> <br />
            </h4>
            Un URL è una stringa che identifica il percorso della risorsa al quale si vuole accedere. <br /> Questa è la struttura di un URL:
            <img src="../media/Frame_58.png" alt="rock" />
          </p>

          <p className="sub">
            <h4>
              <em>Alcune Definizioni...</em>
            </h4>
            <p>
              <b>
              {"Protocollo: "}
              </b>
            indica quale protocollo utilizzare per accedere alla risorsa, ad esempio, HTTP , HTTPS, FTP (File Transfer Protocol), ecc...
            </p>
            <p>
              <b>
                {"Host: "}
              </b>
                il nome di dominio o {"l'indirizzo"} IP del server a cui desideri accedere.
            </p>
            <p>
              <b>
              {"Port: "}
              </b>
              la porta a cui si desidera accedere (80 per HTTP, 443 per HTTPS, etc…)
            </p>
            <p>
              <b>
                {"Path: "}
              </b>
                il nome del file o il percorso della risorsa a cui stai tentando di accedere.
            </p>
            <p>
              <b>
                {"Query String: "}
              </b>
               stringa di informazioni aggiuntive che possono essere inviate al percorso richiesto. Il path e la querystring sono separati da un punto interrogativo  <em>“?”</em>. Queste informazioni sono rappresentate tramite lo schema chiave-valore, separando le due con il simbolo di uguale <em>“=”</em>, le varie coppie invece debbono essere separate con un ampersand <em>“&”</em>.
            </p>
            <p>
              <b>
              {"Fragment: "}
              </b>
                questo è un riferimento a una posizione nella pagina effettiva richiesta. Viene comunemente utilizzato per le pagine con contenuti lunghi e può avere una determinata parte della pagina direttamente collegata ad essa, quindi è visualizzabile {"dall'utente"} non appena accede alla pagina.
            </p>
          </p>

          <p className='sub'>
            <h4>
              <b>{"URL Encode"}</b>
            </h4>
            Ogni parte di un URL deve essere codificata se presenta caratteri che non sono presenti nello standard ASCII, per questo si utilizza una tecnica chiamata URLEncode che converte tutti i simboli non permessi convertendo il carattere in token UTF-8, ogni token è preceduto dal simbolo di percentuale <em>“%”</em>.
            <InteractiveEncode />
          </p>

          <p className='sub'>
            <h4>
              <b>{"HTTP Status Codes"}</b>
            </h4>
            Nella risposta HTTP da parte di un server è contenuto un codice di stato, esso informa il client {"dell'esito"} della sua richiesta e potenzialmente anche come gestirla. 
            I codici di stato possono essere suddivisi in 5 intervalli diversi:
            <ul>
              <li> <b>100-199</b> - Risposta informativa
101 - Switching protocols.
</li>
              <li> <b>200-299</b> - Successo
201 - Created / {"E'"} stata creata una risorsa (ad esempio un nuovo utente o un nuovo post sul blog).
</li>
              <li> <b>300-399</b> - Redirection
301 - Moved Permanently / Reinderizza il browser del client a una nuova pagina web.
</li>
              <li> <b>400-499</b> - Client Errors
	400 - Bad Request / la richiesta inviata contiene sintassi della richiesta malformata, framing del messaggio di richiesta non valido, o routing della richiesta ingannevole
401 - Unauthorized / non ti viene consentito di accedere alla risorsa perchè non sei autenticato
404 - Page not found / la risorsa richiesta non esiste
405 - Method not allowed / la risorsa non consente il metodo utilizzato
429 - Too many requests / sono state inviate troppe richieste ed al client è stato imposto un timeout.
</li>
              <li> <b>500-599</b> - Server Errors
500 - Internal Server Error / il server ha riscontrato qualche tipo di errore con la tua richiesta che non sa come gestire correttamente
503 - Service Unavailable / Questo server non può gestire la tua richiesta perchè è in sovraccarico.
</li>
            </ul>
          </p>

          <p className='sub'>
            <h4>
              <b>{"La nascita dei Cookies"}</b>
            </h4>
            La connessione HTTP viene definita <em>stateless</em>, ossia priva di uno stato che permette {"l'identificazione"} di un utente, per questo furono creati i cookie.
          </p>
          <p className='sub'>
            <h4>
              <b>{"Cosa sono i Cookies"}</b>
            </h4>
            I cookies sono delle stringhe, memorizzate sul dispositivo quando viene visitato un sito web. Queste stringhe vengono lette dal sito ogni volta che viene visitato e permettono, in alcuni casi di rendere migliore {"l'esperienza dell'utente"} nel sito, in quanto possono fornire informazioni utili ai proprietari del sito web. I cookies possono venire utilizzati anche per rubare informazioni {"all'utente"}, per questo in Italia è stato stilato un Regolamento: il <em>GDPR</em> (25 maggio 2018), che serve a proteggere la privacy {"dell'utente"}, imponendo alcuni obblighi agli amministratori dei siti web.
          </p>

          <div className="sep"></div>

        </div>
        <div className="third" id="3">
          <h2 className='rem'>Le applicazioni di rete <br />(il livello applicazione)</h2>
          <p className='sub'>
            <h4>
              <b>{"Il livello applicazione"}</b>
            </h4>
            Il livello applicazione è {"l'ultimo"} livello dei modelli di riferimento <em>ISO/OSI</em> e <em>TCP/IP</em> e si occupa di fornire i servizi di rete direttamente {"all'utente"} finale.
Esso fornisce le interfacce utente, i servizi di rete, implementa i protocolli di applicazione, gestisci la risoluzione dei nomi di dominio (<em>DNS</em>), e gestisce la sicurezza delle comunicazioni (<em>HTTPS, SSL</em> sono due protocolli che permettono di crittografare i dati). Ogni protocollo applicativo opera in questo livello e troviamo quindi protocolli come: <em>IMAP, POP3, SMTP, FTP</em>.
          </p>
          <p className='sub'>
            <h4>
              <b>{"IMAP, POP3, SMTP, FTP…"}</b>
            </h4>
             (Internet Message Access Protocol), <em>POP3</em> (Post Office Protocol version 3), <em>SMTP</em> (Simple Mail Transfer Protocol), e <em>FTP</em> (File Transfer Protocol) sono tutti protocolli di rete che agiscono nel livello di rete, utilizzati per diverse funzionalità di comunicazione e trasferimento di dati.
             <em>IMAP</em> e <em>POP3</em> sono protocolli di posta elettronica che gestiscono {"l'accesso"} alle caselle di posta, <em>SMTP</em> è utilizzato per {"l'invio di e-mail"}, mentre <em>FTP</em> è utilizzato per il trasferimento di file tra dispositivi.
             <em>IMAP</em> è un protocollo di accesso alle caselle di posta elettronica, che consente agli utenti di recuperare e visualizzare i messaggi di posta elettronica memorizzati su un server remoto.
             <em>POP3</em> è sempre un protocollo di accesso alle caselle di posta elettronica che scarica i dati da un server a un dispositivo locale, conservando quindi i dati localmente, permettendo di accederci anche offline. <em>SMTP</em> è un protocollo utilizzato per inviare e-mail. Si occupa della trasmissione dei messaggi di posta elettronica dal client al server.
Quindi <em>IMAP</em> e <em>POP3</em> si occupano della ricezione della posta elettronica, <em>IMAP</em> accedendo direttamente al server e <em>POP3</em> scaricando i dati su un dispositivo locale e <em>SMTP</em> si occupa {"dell'invio "}della posta elettronica.
Poi esiste il protocollo <em>FTP</em> (File Transfer Protocol) utilizzando per il trasferimento di file tra un server e un client.
          </p>
          <p className='sub'>
            <h4>
              <b>{"Socket"}</b>
            </h4>
            Un <em>socket</em> è una rappresentazione astratta di un canale di comunicazione tra due programmi di computer, rappresentato da <em>Indirizzo IP</em> e numero di porta. Esso sfrutta protocolli di trasporto tra cui <em>UDP</em> (connection-less) e <em>TCP</em> (connection oriented)
            Vengono utilizzate delle <em>API socket</em> per implementare la comunicazione. Queste forniscono {"un'interfaccia"} di programmazione per la creazione e la gestione delle socket, facilitando la comunicazione tra i processi su una rete.
          </p>
          <p className='sub'>
            <h4>
              <b>{"UDP e TCP differenze"}</b>
            </h4>
            <em>UDP</em>
             (connection less) <em>TCP</em> (connection oriented).
             <em>TCP</em> (Transmission Control Protocol)  essendo orientato alla connessione è:
             <ul>
              <li>
              affidabile (utilizza un meccanismo di acknowledgement <em>ACK</em>) che si assicura che tutti i dati vengono ricevuti correttamente
              </li>
              <li>
              controllo di flusso e congestione (ad esempio {"l'algoritmo"} di <em>Slow Start</em>) che permette di non perdere dati durante la trasmissione, regolando la velocità di invio, in quanto gli host possono ricevere un numero limitato di dati.
              </li>
              <li>
              più lento, in quanto si preoccupa {"dell'affidabilità"} i numerosi algoritmi che permettono di rendere <em>TCP</em> efficace lo rallentano.
              </li>
             </ul>
<em>UDP</em> (User Datagram Protocol):
<ul>
              <li>
              non affidabile, quindi i dati possono venire persi
              </li>
              <li>
              non ci sono algoritmi di controllo
              </li>
              <li>
              scambio di dati più veloce e senza connessione.
              </li>
             </ul>
          </p>
          <p className='sub'>
            <h4>
              <b>{"P2P e Client-Server"}</b>
            </h4>
            <b>P2P</b> sta per <em>{'"Peer-to-Peer"'}</em>, che significa <em>{'"da pari a pari"'}</em> in italiano. Si tratta di un modello di rete in cui i computer o i dispositivi collegati tra loro, chiamati <em>{'"peer"'}</em> o <em>{'"nodi"'}</em>, collaborano direttamente tra loro senza la necessità di un server centrale. Ogni peer può funzionare sia come client che come server, condividendo risorse e servizi tra di loro.
Nel modello client-server invece ci sono due ruoli principali: il client e il server. Il {'"client"'} è un dispositivo (come un computer o un telefono) che richiede servizi o risorse da un altro dispositivo sulla rete.
Il <em>{'"server"'}</em> è un dispositivo o un programma che fornisce servizi o risorse in risposta alle richieste dei client.
Il client fa le richieste e il server è in ascolto e in attesa delle richieste del client, che una volta ricevute elabora e invia delle risposte appropriate.
          </p>
        </div>
        <div className="footer">
          <div className="contain">
            Realizzato con amore utilizzando: 
            <img src="../media/Vitejs-logo.svg.png" alt="" className='logo'/> +
            <img src="../media/React-icon.svg.png" alt="" className='logo'/> +
            <img src="../media/github-pages.png" alt="" className='logo'/>
          </div>
        </div>
        <div className='black'>giacomo suca</div>
      </div>
    </>
  )
}

export default App

function InteractiveEncode() {
  const [plainText, setPlainText] = useState("ysad è èa asd");
  const [encodedText, setEncodedText] = useState("");

  function handlePlainChange(e) {
    setPlainText(e.target.value);
    setEncodedText(encodeURIComponent(e.target.value));
  }

  function handleEncodedChange(e) {
    setEncodedText(e.target.value);
    setPlainText(decodeURIComponent(e.target.value));
  }

  return (
    <div className="interactive-encode">
      <textarea
        cols="30"
        rows="10"
        onChange={handlePlainChange}
        value={plainText}
      />
      <svg width="166" height="112" viewBox="0 0 166 112" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 86C1.34315 86 0 84.6569 0 83V29C0 27.3431 1.34315 26 3 26H106.582C108.239 26 109.582 24.6569 109.582 23V3.47399C109.582 0.769355 112.88 -0.55423 114.749 1.39982L165.015 53.9258C166.125 55.0858 166.125 56.9142 165.015 58.0742L114.749 110.6C112.88 112.554 109.582 111.231 109.582 108.526V89C109.582 87.3431 108.239 86 106.582 86H3Z" fill="url(#paint0_linear_4431_6)"/>
      <defs>
      <linearGradient id="paint0_linear_4431_6" x1="166.625" y1="56" x2="1.50115" y2="57.5023" gradientUnits="userSpaceOnUse">
      <stop stopColor="#FFC107"/>
      <stop offset="1" stopColor="#FFC107" stopOpacity="0"/>
      </linearGradient>
      </defs>
      </svg>

      <textarea
        cols="30"
        rows="10"
        onChange={handleEncodedChange}
        value={encodedText}
      />
    </div>
  );
}

