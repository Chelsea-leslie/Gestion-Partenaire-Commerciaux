import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography } from '@mui/material';

const PartnerEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    const fetchPartner = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/partenaire/${id}`);
        const data = await response.json();
        setName(data.name);
        setEmail(data.email);
        setPhone(data.phone);
        setAddress(data.address);
      } catch (error) {
        console.error('Erreur lors de la récupération du partenaire', error);
      }
    };
    fetchPartner();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/partenaire/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, address }),
      });
      if (response.ok) {
        navigate('/Listpartners');
      } else {
        console.error('Erreur lors de la mise à jour du partenaire');
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour du partenaire', error);
    }
  };

  return (
    <Box>
      <Typography variant="h4">Modifier Partenaire</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nom"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Téléphone"
          variant="outlined"
          fullWidth
          margin="normal"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          label="Adresse"
          variant="outlined"
          fullWidth
          margin="normal"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Enregistrer
        </Button>
      </form>
    </Box>
  );
};

export default PartnerEdit;
