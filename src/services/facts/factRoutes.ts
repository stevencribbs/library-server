import { Express } from 'express';
import { FactService } from './FactService';

function setupFactRoutes(app: Express) {
  app.get('/facts', async (req, res) => {
    const factService = new FactService();
    const facts = await factService.getFacts();
    res.send(facts);
  });
  app.get('/facts/:id', async (req, res) => {
    const factService = new FactService();
    const factId = parseInt(req.params.id);
    const fact = await factService.getFactById(factId);
    res.send(fact);
  });
}

export default setupFactRoutes;
