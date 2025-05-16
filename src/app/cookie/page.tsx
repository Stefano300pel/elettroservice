"use client"
import Navbar from "../components/navbar";
import PreFooter from "../components/prefooter";
import CircuitoAnimato from "../components/CircuitoAnimato";
import { CookiesProvider } from 'react-cookie';

export default function CookiePolicy() {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="cookie-policy-container max-w-4xl mx-auto px-4 py-8 bg-white">
          <h1 className="text-3xl font-bold mb-6 text-center underline decoration-2 underline-offset-4">COOKIE POLICY</h1>
          <h2 className="text-2xl font-bold mb-6 text-center">ELETTROSERVICE</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 underline decoration-1 underline-offset-2">INFORMATIVA SULL'UTILIZZO DEI COOKIE</h3>
            <p className="mb-2">ai sensi dell'art. 13 del Regolamento UE 2016/679 (GDPR) e del Provvedimento del Garante per la protezione dei dati personali dell'8 maggio 2014</p>
          </div>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 underline decoration-1 underline-offset-2">1. COSA SONO I COOKIE</h3>
            <p className="mb-4">
              I cookie sono piccoli file di testo che i siti visitati inviano al dispositivo dell'utente (computer, tablet, smartphone, notebook), dove vengono memorizzati, per poi essere ritrasmessi agli stessi siti alla visita successiva.
            </p>
            <p>
              I cookie permettono a un sito web di garantire il corretto funzionamento delle pagine e migliorare l'esperienza di navigazione dell'utente.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 underline decoration-1 underline-offset-2">2. TIPOLOGIE DI COOKIE UTILIZZATI</h3>
            
            <div className="mb-6">
              <h4 className="font-bold mb-2">2.1 Cookie tecnici (obbligatori)</h4>
              <p className="mb-3">
                Il nostro sito utilizza <strong>esclusivamente cookie tecnici obbligatori</strong> necessari per il corretto funzionamento del sito web. Questi cookie sono indispensabili per navigare e utilizzare le funzionalità essenziali del sito. Non raccolgono informazioni personali identificabili e non vengono utilizzati per scopi di tracciamento.
              </p>
              <p className="mb-3">
                I cookie tecnici obbligatori comprendono:
              </p>
              <ul className="list-disc pl-8 mb-3">
                <li><span className="font-bold">Cookie di navigazione:</span> garantiscono la normale navigazione e fruizione del sito web</li>
                <li><span className="font-bold">Cookie di funzionalità:</span> permettono all'utente la navigazione in funzione di una serie di criteri selezionati (ad esempio, la lingua) al fine di migliorare il servizio reso</li>
                <li><span className="font-bold">Cookie di sessione:</span> vengono eliminati ogni volta che il browser viene chiuso</li>
              </ul>
              <p>
                Questi cookie non richiedono il consenso dell'utente per essere installati ed utilizzati in quanto strettamente necessari per il funzionamento del sito.
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-bold mb-2">2.2 Cookie analitici</h4>
              <p className="mb-3">
                <strong>Il nostro sito non utilizza cookie analitici</strong> per la raccolta di informazioni statistiche sull'utilizzo del sito.
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-bold mb-2">2.3 Cookie di profilazione</h4>
              <p className="mb-3">
                <strong>Il nostro sito non utilizza cookie di profilazione</strong> e non raccoglie informazioni per creare profili relativi all'utente o per inviare messaggi pubblicitari.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-2">2.4 Cookie di terze parti</h4>
              <p className="mb-3">
                <strong>Il nostro sito non utilizza cookie di terze parti</strong> per il tracciamento o la profilazione dell'utente.
              </p>
            </div>
          </section>
          
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 underline decoration-1 underline-offset-2">3. DURATA DEI COOKIE</h3>
            <p className="mb-4">
              I cookie tecnici obbligatori che utilizziamo possono essere memorizzati sul dispositivo dell'utente come:
            </p>
            <ul className="list-disc pl-8">
              <li><span className="font-bold">Cookie di sessione:</span> vengono cancellati automaticamente quando si chiude il browser di navigazione</li>
              <li><span className="font-bold">Cookie persistenti:</span> rimangono memorizzati sul dispositivo dell'utente fino alla loro scadenza naturale o fino alla cancellazione da parte dell'utente</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 underline decoration-1 underline-offset-2">4. GESTIONE DEI COOKIE</h3>
            <p className="mb-4">
              L'utente può decidere se accettare o meno i cookie utilizzando le impostazioni del proprio browser. Attenzione: la disabilitazione dei cookie tecnici obbligatori può compromettere l'utilizzo delle funzionalità del sito.
            </p>
            <p className="mb-4">
              L'impostazione può essere definita in modo specifico per i diversi siti e applicazioni web.
            </p>
            <p className="mb-4">
              Di seguito le risorse che spiegano come procedere per i principali browser:
            </p>
            <ul className="list-disc pl-8">
              <li>Google Chrome: <a href="https://support.google.com/chrome/answer/95647?hl=it" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 underline">Gestire i cookie in Chrome</a></li>
              <li>Mozilla Firefox: <a href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 underline">Attivare e disattivare i cookie</a></li>
              <li>Safari: <a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 underline">Gestire i cookie in Safari</a></li>
              <li>Internet Explorer: <a href="https://support.microsoft.com/it-it/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 underline">Eliminare e gestire i cookie</a></li>
              <li>Microsoft Edge: <a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 underline">Eliminare i cookie in Microsoft Edge</a></li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 underline decoration-1 underline-offset-2">5. INFORMATIVA SUI COOKIE TECNICI OBBLIGATORI</h3>
            <p className="mb-4">
              Quando si accede al sito, verrà visualizzato un banner informativo che notifica l'utilizzo dei soli cookie tecnici obbligatori necessari per il funzionamento del sito.
            </p>
            <p>
              Poiché utilizziamo esclusivamente cookie tecnici obbligatori necessari al funzionamento della piattaforma, non è richiesto il consenso esplicito dell'utente per la loro installazione.
            </p>
          </section>
          
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 underline decoration-1 underline-offset-2">6. TITOLARE DEL TRATTAMENTO</h3>
            <div className="mb-4">
              <p className="font-bold mb-2">Elettroservice</p>
              <ul className="list-none pl-0">
                <li>Sede legale: Via Mario Paitoni, 33 - 25010 Remedello (BS)</li>
                <li>Sede operativa: Via Turche, 5 - 25010 Remedello (BS)</li>
                <li>Tel: 030 99 53 315</li>
                <li>Fax: 030 95 79 535</li>
                <li>Email: info@elettroservice.eu</li>
                <li>P.IVA: 02131260982</li>
              </ul>
            </div>
          </section>
          
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 underline decoration-1 underline-offset-2">7. DIRITTI DELL'INTERESSATO</h3>
            <p className="mb-4">
              In qualsiasi momento, l'utente può esercitare i diritti previsti dal Regolamento UE 2016/679, tra cui il diritto di:
            </p>
            <ul className="list-disc pl-8">
              <li>Ottenere la conferma dell'esistenza o meno di dati personali che lo riguardano</li>
              <li>Conoscere il contenuto e l'origine dei dati</li>
              <li>Verificarne l'esattezza e richiederne l'integrazione o l'aggiornamento</li>
              <li>Ottenere la cancellazione, la trasformazione in forma anonima o il blocco dei dati trattati in violazione di legge</li>
              <li>Opporsi per motivi legittimi al trattamento dei dati personali che lo riguardano</li>
            </ul>
            <p className="mt-4">
              Le richieste vanno rivolte al Titolare del trattamento utilizzando i recapiti indicati nella sezione "Titolare del trattamento".
            </p>
          </section>
          
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 underline decoration-1 underline-offset-2">8. AGGIORNAMENTI DELLA COOKIE POLICY</h3>
            <p>
              Il Titolare del trattamento si riserva il diritto di modificare questa Cookie Policy in qualsiasi momento. Gli utenti sono pregati di controllare regolarmente questa pagina per verificare eventuali aggiornamenti. La data dell'ultimo aggiornamento è indicata in fondo alla pagina.
            </p>
          </section>

          <div className="mt-10 pt-6 border-t border-gray-200 text-center italic">
            <p>Ultimo aggiornamento: 8 maggio 2025</p>
          </div>
        </div>
      </div>
      <CircuitoAnimato />
      <PreFooter />
    </>
  );
}