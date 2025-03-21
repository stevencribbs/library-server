import { Express } from 'express';
import { VerseService } from './VerseService';

function setupVerseRoutes(app: Express) {
  app.get('/verses', async (req, res) => {
    const verseService = new VerseService();
    const verses = await verseService.getVerses();
    res.send(verses);
  });
  app.get('/verses/:id', async (req, res) => {
    const verseService = new VerseService();
    const verseId = parseInt(req.params.id);
    const verse = await verseService.getVerseById(verseId);
    res.send(verse);
  });
}

export default setupVerseRoutes;
