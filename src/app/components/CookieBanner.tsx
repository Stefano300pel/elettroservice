'use client';

import React from 'react';
import CookieConsent from 'react-cookie-consent';

export default function CookieBanner() {
    return (
        <CookieConsent
            location="bottom"
            buttonText="Accetto"
            cookieName="my-site-cookie-consent"
            style={{
                background: '#164194', 
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                borderTop: '2px solid #E20613',  // Bordo rosso in alto
                animation: 'slideIn 0.5s ease-in-out',
               
            }}
            buttonStyle={{ background: '#E20613', color: '#ffff', fontSize: '13px',  borderRadius: '10px', }}
            expires={150}
        >
            Questo sito utilizza cookie obbligatori. Nessun cookie per il tracciamento{' '}
            <a href="/cookie" style={{ color: '#fff', textDecoration: 'underline' }}>
                Scopri di più
            </a>
        </CookieConsent>
    );
}
