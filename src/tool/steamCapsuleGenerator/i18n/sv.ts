import { createSteamContent } from './shared';

export const content = createSteamContent({
  slug: 'steam-kapselgenerator',
  title: 'Steam kapselgenerator',
  description: 'Skapa fyra Steam förhandsvisningar från en masterbild, justera fokuspunkten, kontrollera säkra zoner och ladda ner PNG eller ZIP lokalt.',
  ui: { uploadTitle: 'Släpp din masterbild', uploadHint: 'En högupplöst bild blir ett komplett Steam set direkt i webbläsaren.', chooseFile: 'Välj bild', minimumSize: 'Minsta storlek', supportedFormats: 'PNG, JPEG eller WebP', invalidImage: 'Välj en bild på minst 1920 gånger 1080 pixlar.', sourcePreview: 'Masterbild', focalPoint: 'Fokuspunkt', focalHint: 'Klicka på bilden eller använd reglagen så att det viktiga motivet finns kvar i varje beskärning.', horizontalFocus: 'Horisontellt', verticalFocus: 'Vertikalt', resetFocus: 'Centrera fokus', outputPreview: 'Steam utdata', safeZone: 'Säker zon', dimensions: 'pixlar', downloadPng: 'PNG', downloadZip: 'Ladda ner ZIP', buildingZip: 'Skapar lokalt ZIP arkiv...', zipReady: 'Steam kapslar är klara', localOnly: 'Sekretess från början. Bilden stannar i webbläsaren.', headerCapsule: 'Headerkapsel', mainCapsule: 'Huvudkapsel', verticalCapsule: 'Vertikal kapsel', communityIcon: 'Communityikon', ready: 'Klar', downloadError: 'Arkivet kunde inte skapas. Prova PNG knapparna.', },
  seo: [
    { type: 'title', text: 'Skapa ett enhetligt Steam kapselset från en bild', level: 2 },
    { type: 'paragraph', html: 'En illustration kan fungera i ett brett format och ändå förlora figuren i ett vertikalt utsnitt. Verktyget visar fyra utsnitt från samma masterbild: header 460 gånger 215, huvud 616 gånger 353, vertikalt 374 gånger 448 och en kvadratisk communityikon på 184 gånger 184 pixlar. Fokuspunkten bestämmer vilken del av bilden som ska vara synlig.' },
    { type: 'paragraph', html: 'Bilden behandlas lokalt med canvas. Den skickas inte iväg och inget konto behövs. När markören flyttas uppdateras alla förhandsvisningar så att logotyp, ansikte, figur och kontrast kan kontrolleras före export.' },
    { type: 'title', text: 'Ett praktiskt arbetssätt för spelgrafik', level: 2 },
    { type: 'list', items: ['Börja med en masterbild på minst 1920 gånger 1080 pixlar.', 'Placera markören på motivet, inte alltid i bildens geometriska mitt.', 'Kontrollera det vertikala och kvadratiska formatet först.', 'Använd de säkra zonerna som marginal och jämför med aktuella Steamworks mallar.'] },
    { type: 'paragraph', html: 'Säkra zoner är kompositionshjälpmedel och ingen garanti för varje Steam vy. Håll logotyper och titlar borta från röriga kanter och läs Valves regler för text på kapslar.' },
    { type: 'tip', html: 'Spara en master med utrymme runt motivet. Om ett utsnitt kräver en annan logotyp placering ska du ändra källan och skapa om setet.' },
  ],
  faq: [
    { question: 'Lämnar bilden min enhet?', answer: 'Nej. Den läses och ritas i webbläsaren. Ingen uppladdning eller konto behövs.' },
    { question: 'Vilken masterbild ska jag använda?', answer: 'PNG, JPEG eller WebP på minst 1920 gånger 1080 pixlar ger utrymme för beskärning.' },
    { question: 'Vad ändrar fokuspunkten?', answer: 'Den flyttar källans beskärning i alla resultat och skyddar huvudmotivet.' },
    { question: 'Är de säkra zonerna officiella?', answer: 'De är praktiska guider. Jämför alltid med de aktuella Steamworks mallarna.' },
  ],
  howTo: [
    { name: 'Välj en masterbild', text: 'Släpp en PNG, JPEG eller WebP på minst 1920 gånger 1080 pixlar.' },
    { name: 'Ställ in fokus', text: 'Klicka i förhandsvisningen eller flytta de horisontella och vertikala reglagen.' },
    { name: 'Kontrollera utsnitten', text: 'Granska header, huvud, vertikal och kvadratisk ikon.' },
    { name: 'Ladda ner setet', text: 'Ladda ner separata PNG filer eller skapa ett lokalt ZIP arkiv.' },
  ],
});
