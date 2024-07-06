import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const PartnerForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/partenaire/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, address }),
      });

      if (response.ok) {
        // Handle success (e.g., reset form, show success message, etc.)
        setName('');
        setEmail('');
        setPhone('');
        setAddress('');
        alert('Partenaire ajouté avec succès!');
      } else {
        // Handle errors
        const errorData = await response.json();
        console.error('Erreur lors de l’ajout du partenaire', errorData);
      }
    } catch (error) {
      console.error('Erreur lors de l’ajout du partenaire', error);
    }
  };

  return (
    <Box>
      <Typography variant="h4">Ajouter un Partenaire</Typography>
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
        <Button type="submit" variant="contained" color="primary">Ajouter</Button>
      </form>
    </Box>
  );
};

export default PartnerForm;
