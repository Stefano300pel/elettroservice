
"use client"
import Navbar from "../components/navbar";
import PreFooter from "../components/prefooter";
import CircuitoAnimato from "../components/CircuitoAnimato";
import Form from "../components/form";





export default function Home() {
  return (


    <>
      <Navbar />
      <div className="bg-white">
        <div className="privacy-policy-container max-w-4xl mx-auto px-4 py-8 bg-white">
          <h1 className="text-3xl font-bold mb-6 text-center">PRIVACY POLICY</h1>
          <h2 className="text-2xl font-bold mb-6 text-center">ELETTROSERVICE</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">INFORMATIVA SUL TRATTAMENTO DEI DATI PERSONALI</h3>
            <p className="mb-2">ai sensi degli artt. 13-14 del Regolamento UE 2016/679 (GDPR)</p>
          </div>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4">1. TITOLARE DEL TRATTAMENTO</h3>
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
            <p>
              In qualità di Titolare del trattamento dei dati personali, Elettroservice (di seguito "Titolare") si impegna a rispettare la privacy degli utenti e a trattare i dati personali in conformità con il Regolamento UE 2016/679 (GDPR) e altre normative applicabili in materia di protezione dei dati personali.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4">2. FINALITÀ E BASE GIURIDICA DEL TRATTAMENTO</h3>
            <p className="mb-4">I dati personali degli utenti vengono raccolti e trattati per le seguenti finalità:</p>

            <div className="mb-4">
              <p className="font-bold">a) Esecuzione di un contratto o misure precontrattuali (art. 6, par. 1, lett. b del GDPR):</p>
              <ul className="list-disc pl-8">
                <li>Fornitura dei servizi e prodotti richiesti</li>
                <li>Gestione degli ordini e delle consegne</li>
                <li>Assistenza tecnica e supporto clienti</li>
                <li>Gestione dei pagamenti</li>
              </ul>
            </div>

            <div className="mb-4">
              <p className="font-bold">b) Adempimento di obblighi legali (art. 6, par. 1, lett. c del GDPR):</p>
              <ul className="list-disc pl-8">
                <li>Obblighi fiscali e contabili</li>
                <li>Obblighi derivanti dalla normativa sulla garanzia dei prodotti</li>
                <li>Altri obblighi previsti dalla legge</li>
              </ul>
            </div>

            <div className="mb-4">
              <p className="font-bold">c) Legittimo interesse del Titolare (art. 6, par. 1, lett. f del GDPR):</p>
              <ul className="list-disc pl-8">
                <li>Miglioramento dei servizi offerti</li>
                <li>Analisi statistiche in forma aggregata</li>
                <li>Tutela dei diritti del Titolare in sede giudiziaria</li>
                <li>Sicurezza informatica</li>
              </ul>
            </div>

            <div className="mb-4">
              <p className="font-bold">d) Consenso dell'interessato (art. 6, par. 1, lett. a del GDPR):</p>
              <ul className="list-disc pl-8">
                <li>Invio di comunicazioni commerciali e promozionali</li>
                <li>Marketing diretto</li>
                <li>Profilazione a fini di marketing</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4">3. CATEGORIE DI DATI TRATTATI</h3>
            <p className="mb-4">Il Titolare raccoglie e tratta le seguenti categorie di dati:</p>
            <ul className="list-disc pl-8">
              <li><span className="font-bold">Dati identificativi:</span> nome, cognome, indirizzo, numero di telefono, email</li>
              <li><span className="font-bold">Dati fiscali:</span> codice fiscale, partita IVA</li>
              <li><span className="font-bold">Dati di pagamento:</span> coordinate bancarie, dati delle carte di credito/debito (in caso di pagamenti online)</li>
              <li><span className="font-bold">Dati di navigazione:</span> indirizzo IP, dati di accesso, cookies tecnici</li>
              <li><span className="font-bold">Altri dati:</span> informazioni sugli acquisti effettuati, preferenze, richieste di assistenza</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4">4. MODALITÀ DI TRATTAMENTO</h3>
            <p className="mb-4">
              Il trattamento dei dati personali avviene mediante strumenti manuali, informatici e telematici, con logiche strettamente correlate alle finalità sopra indicate e, comunque, in modo da garantire la sicurezza e la riservatezza dei dati stessi.
            </p>
            <p>
              Il Titolare adotta misure tecniche e organizzative adeguate per proteggere i dati personali da accessi non autorizzati, perdita, alterazione o distruzione accidentale.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4">5. PERIODO DI CONSERVAZIONE DEI DATI</h3>
            <p className="mb-4">I dati personali saranno conservati per il tempo necessario a conseguire le finalità per cui sono stati raccolti e in ogni caso:</p>
            <ul className="list-disc pl-8">
              <li>Per le finalità contrattuali: per tutta la durata del rapporto contrattuale e per i successivi 10 anni ai fini fiscali e contabili</li>
              <li>Per le finalità di marketing: fino alla revoca del consenso e comunque non oltre 24 mesi dalla raccolta</li>
              <li>Per le finalità di legittimo interesse: fino al perseguimento della relativa finalità o fino all'opposizione dell'interessato, ove accolta</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4">6. DESTINATARI DEI DATI</h3>
            <p className="mb-4">I dati personali potranno essere comunicati a:</p>
            <ul className="list-disc pl-8">
              <li>Personale interno del Titolare autorizzato al trattamento</li>
              <li>Soggetti esterni che svolgono attività per conto del Titolare in qualità di Responsabili del trattamento (es. fornitori di servizi IT, spedizionieri, istituti bancari)</li>
              <li>Soggetti pubblici e privati a cui la comunicazione è obbligatoria per legge (es. Autorità fiscali)</li>
              <li>Altri soggetti terzi, previo specifico consenso dell'interessato</li>
            </ul>
            <p className="mt-4">
              I dati non saranno oggetto di diffusione, salvo esplicito consenso dell'interessato.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4">7. TRASFERIMENTO DEI DATI ALL'ESTERO</h3>
            <p className="mb-4">
              I dati personali sono trattati e conservati su server ubicati all'interno dell'Unione Europea.
            </p>
            <p>
              Qualora si rendesse necessario il trasferimento dei dati verso Paesi terzi, tale trasferimento avverrà nel rispetto delle garanzie appropriate previste dal GDPR (decisioni di adeguatezza, clausole contrattuali standard, norme vincolanti d'impresa).
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4">8. DIRITTI DEGLI INTERESSATI</h3>
            <p className="mb-4">In relazione ai dati personali trattati, l'interessato può esercitare i seguenti diritti:</p>
            <ul className="list-disc pl-8">
              <li><span className="font-bold">Diritto di accesso</span> (art. 15 GDPR): ottenere la conferma dell'esistenza di dati personali che lo riguardano e riceverne copia</li>
              <li><span className="font-bold">Diritto di rettifica</span> (art. 16 GDPR): ottenere la correzione dei dati inesatti o l'integrazione di quelli incompleti</li>
              <li><span className="font-bold">Diritto alla cancellazione</span> (art. 17 GDPR): ottenere la cancellazione dei dati nei casi previsti dalla legge</li>
              <li><span className="font-bold">Diritto di limitazione</span> (art. 18 GDPR): ottenere la limitazione del trattamento nei casi previsti dalla legge</li>
              <li><span className="font-bold">Diritto alla portabilità</span> (art. 20 GDPR): ricevere i dati in formato strutturato e trasmetterli ad altro titolare</li>
              <li><span className="font-bold">Diritto di opposizione</span> (art. 21 GDPR): opporsi in qualsiasi momento al trattamento per motivi connessi alla sua situazione particolare</li>
              <li><span className="font-bold">Diritto di revoca del consenso</span> (art. 7 GDPR): revocare il consenso in qualsiasi momento senza pregiudicare la liceità del trattamento basata sul consenso prestato prima della revoca</li>
              <li><span className="font-bold">Diritto di reclamo</span> (art. 77 GDPR): proporre reclamo all'Autorità Garante per la Protezione dei Dati Personali</li>
            </ul>

            <p className="mt-4">
              Per esercitare i propri diritti, l'interessato può inviare una richiesta al Titolare utilizzando i seguenti recapiti:
            </p>
            <ul className="list-none pl-0 mt-2">
              <li>Email: info@elettroservice.eu</li>
              <li>Posta ordinaria: Elettroservice, Via Mario Paitoni, 33 - 25010 Remedello (BS)</li>
            </ul>

            <p className="mt-4">
              Il Titolare risponderà alle richieste nel termine di un mese, salvo proroga di due mesi in casi di particolare complessità.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4">9. COOKIE POLICY</h3>
            <p>
              Il sito web del Titolare utilizza cookie tecnici necessari al corretto funzionamento del sito e cookie analitici, previo consenso dell'utente, per analizzare il traffico e migliorare l'esperienza di navigazione.
            </p>
            <p className="mt-4">
              Per maggiori informazioni sui cookie utilizzati e per gestire le preferenze, è possibile consultare la Cookie Policy disponibile sul sito web.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4">10. MODIFICHE ALLA PRIVACY POLICY</h3>
            <p>
              Il Titolare si riserva il diritto di modificare, aggiornare o integrare la presente Privacy Policy in qualsiasi momento, anche a seguito di modifiche normative o organizzative.
            </p>
            <p className="mt-4">
              Le modifiche saranno pubblicate sul sito web e saranno efficaci dal momento della pubblicazione. Si invitano gli utenti a consultare periodicamente la Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4">11. CONTATTI</h3>
            <p>
              Per qualsiasi informazione o chiarimento sulla presente Privacy Policy o sul trattamento dei dati personali, è possibile contattare il Titolare ai seguenti recapiti:
            </p>
            <ul className="list-none pl-0 mt-2">
              <li>Email: info@elettroservice.eu</li>
              <li>Telefono: 030 99 53 315</li>
              <li>Indirizzo: Via Mario Paitoni, 33 - 25010 Remedello (BS)</li>
            </ul>
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
