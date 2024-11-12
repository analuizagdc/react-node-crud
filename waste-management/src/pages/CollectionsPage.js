import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CollectionsPage = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await axios.get('/api/collections');
        setCollections(response.data);
      } catch (error) {
        console.error('Erro ao buscar coletas:', error);
      }
    };

    fetchCollections();
  }, []);

  return (
    <div>
      <h2>Coletas de Resíduos</h2>
      <ul>
        {collections.map((collection) => (
          <li key={collection.id}>
            {collection.route} - {collection.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollectionsPage;
