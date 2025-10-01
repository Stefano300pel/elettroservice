import { Suspense } from 'react';
import ProgettiContent from './ProgettiContent';

export default function Progetti() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Caricamento...</div>}>
            <ProgettiContent />
        </Suspense>
    );
}