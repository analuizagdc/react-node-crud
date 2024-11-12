
const Collection = require('../models/Collection'); // Importa o model de coleta

// Controlador para obter todas as coleções
exports.getAllCollections = async (req, res) => {
  try {
    const collections = await Collection.findAll();
    res.status(200).json(collections);
  } catch (error) {
    res.status(500).json({ message: 'Error ao buscar coletas', error });
  }
};

// Controlador para criar uma nova coleção
exports.createCollection = async (req, res) => {
  try{
    const { date, route, materials, weight, vehicle, documents, createdBy } = req.body;
    const newCollection = await Collection.create({ date, route, materials, weight, vehicle, documents, createdBy });
    res.status(201).json(newCollection);
  } catch(error){
    res.status(400).json({ message: 'Erro ao criar coleta', error });
  }
};

// Controlador para atualizar uma coleção existente
exports.updateCollection = async (req, res) => {
  try{
    const { id } = req.params;
    const { date, route, materials, weight, vehicle, documents, createdBy } = req.body; 
    const collection = await Collection.findByPk(id);
    if(!collection) {
      return res.status(404).json({ message: 'Coleta não encontrada' });
    }

    collection.date = date;
    collection.route = route;
    collection.materials = materials;
    collection.weight = weight;
    collection.vehicle = vehicle;
    collection.documents = documents;
    collection.createdBy = createdBy;
    await collection.save();

    res.status(200).json(collection);

  } catch(error){
    res.status(400).json({ message: 'Erro ao atualizar coleta', error });
  } 
};

// Controlador para deletar uma coleção
exports.deleteCollection = async (req, res) => {
  const { id } = req.params;
  const collection = await Collection.findByPk(id);
  if(!collection) {
    return res.status(404).json({ message: 'Coleta não encontrada' });
  } 
  await collection.destroy();
  res.status(200).json({ message: 'Coleta deletada com sucesso!' });
};