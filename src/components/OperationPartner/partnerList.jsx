import React, { useState, useEffect } from 'react';
import { Box, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const PartnerList = () => {
  const [partners, setPartners] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPartners = async () => {
      const response = await fetch('http://localhost:5000/api/partenaire/obt');
      const text = await response.text();
      const data = text ? JSON.parse(text) : [];
      setPartners(data);
    };
    fetchPartners();
  }, []);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/partenaire/${id}`, { method: 'DELETE' });
    setPartners(partners.filter(partner => partner._id !== id));
  };

  const handleEdit = (id) => {
    navigate(`/edit-partner/${id}`);
  };

  return (
    <Box>
      <Typography variant="h4">Liste des Partenaires</Typography>
      <List>
        {partners.map((partner) => (
          <ListItem key={partner._id}>
            <ListItemText primary={partner.name} secondary={partner.email} />
            <ListItemSecondaryAction>
              <IconButton edge="end" onClick={() => handleEdit(partner._id)}>
                <Edit />
              </IconButton>
              <IconButton edge="end" onClick={() => handleDelete(partner._id)}>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default PartnerList;
