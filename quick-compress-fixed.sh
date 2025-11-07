#!/bin/bash

# 🚀 COMPRESSIONE VELOCE E SEMPLICE
# Script minimalista per ridurre le dimensioni delle immagini

echo "🚀 COMPRESSIONE RAPIDA IMMAGINI"
echo "================================"

# Verifica ImageMagick
if ! command -v magick >/dev/null 2>&1 && ! command -v convert >/dev/null 2>&1; then
    echo "❌ ImageMagick non installato!"
    echo ""
    echo "💻 INSTALLAZIONE RAPIDA:"
    echo "macOS:    brew install imagemagick"
    echo "Ubuntu:   sudo apt install imagemagick"
    echo "Windows:  https://imagemagick.org/script/download.php#windows"
    echo ""
    exit 1
fi

# Usa 'magick' se disponibile, altrimenti 'convert' (versioni più vecchie)
if command -v magick >/dev/null 2>&1; then
    CMD="magick"
else
    CMD="convert"
fi

echo "✅ ImageMagick trovato! ($CMD)"
echo ""

# Funzione di compressione
compress_folder() {
    local folder="$1"
    local name="$2"
    
    if [ ! -d "$folder" ]; then
        echo "📁 $folder non trovata, salto..."
        return
    fi
    
    echo "📸 Comprimendo $name..."
    local count=0
    
    # Lista delle estensioni da processare
    for ext in jpg jpeg png JPG JPEG PNG; do
        # Cerca file con questa estensione
        for img in "$folder"/*.$ext; do
            # Controlla se il file esiste davvero
            if [ -f "$img" ]; then
                echo "  🔄 $(basename "$img")"
                
                # Backup veloce
                cp "$img" "$img.backup" 2>/dev/null
                
                # Compressione aggressiva
                $CMD "$img" \
                    -strip \
                    -quality 75 \
                    -resize '1000x750>' \
                    "$img.tmp" 2>/dev/null
                
                # Sostituisci se funziona
                if [ -f "$img.tmp" ]; then
                    mv "$img.tmp" "$img"
                    echo "  ✅ Compresso!"
                    count=$((count + 1))
                else
                    echo "  ❌ Errore, mantengo originale"
                    rm -f "$img.backup" 2>/dev/null
                fi
            fi
        done
    done
    
    echo "  🎉 $count file compressi in $name"
    echo ""
}

# Comprimi le cartelle principali
compress_folder "./public/QUADRI" "Quadristica"
compress_folder "./public/FVT" "Fotovoltaico"
compress_folder "./public/ILLUMINAZIONE" "Illuminazione"

# Prova anche cartelle alternative (senza ./public)
compress_folder "./QUADRI" "Quadristica (alternativo)"
compress_folder "./FVT" "Fotovoltaico (alternativo)"
compress_folder "./ILLUMINAZIONE" "Illuminazione (alternativo)"

echo "🎊 FINITO!"
echo ""
echo "💡 RISULTATO:"
echo "  ✅ Immagini compresse con qualità 75%"
echo "  📏 Ridimensionate max 1000x750px"
echo "  💾 Backup creati (.backup)"
echo "  🚀 Il sito dovrebbe essere più veloce!"
echo ""
echo "🧹 Per rimuovere i backup:"
echo "  find . -name '*.backup' -delete"