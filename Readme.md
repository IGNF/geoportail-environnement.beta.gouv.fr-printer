# Service pour la génération de rapport

## Lancer le service en local

```bash
docker compose up
```

Le service est disponible à l'adresse suivante:

### Version HTML
```text
http://localhost:3000/pdf/generate-html?forestName=Ma-Forets&type=rapport.agriculture&type=rapport.eau
```

### Version PDF

```bash
curl -X POST http://localhost:3000/pdf/generate-pdf -H "Content-Type: application/json" -d '{"forestName": "test", "type": ["rapport.eau", "rapport.biodiversite"]}' --output Rapport_Foreg.pdf
```


TODO : 

- [ ] Changer les chemins d'accès en /api-rapport ? On laisse le rapport html ? 
- [ ] Ajouter la map ?
- [ ] Modifier le template ? (une maquette du rapport pourrais aider)
- [ ] Comment/Où récuperer les informations à définir pour implementer les service nécessaire