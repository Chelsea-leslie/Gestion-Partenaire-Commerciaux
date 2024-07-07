import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography, Checkbox, FormControlLabel } from '@mui/material';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ProjectEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [charges, setCharges] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [partners, setPartners] = useState([]);
  const [selectedPartners, setSelectedPartners] = useState([]);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/projets/${id}`);
        if (response.ok) {
          const text = await response.text();
          const data = text ? JSON.parse(text) : {};
          setTitle(data.title || '');
          setDescription(data.description || '');
          setAmount(data.amount || '');
          setCharges(data.charges || '');
          setStartDate(data.start_date ? data.start_date.split('T')[0] : '');
          setEndDate(data.end_date ? data.end_date.split('T')[0] : '');
          setSelectedPartners(data.partners || []);
        } else {
          console.error('Erreur lors de la récupération du projet');
        }
      } catch (error) {
        console.error('Erreur lors de la récupération du projet', error);
      }
    };

    const fetchPartners = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/partenaire/obt');
        if (response.ok) {
          const text = await response.text();
          const data = text ? JSON.parse(text) : [];
          setPartners(data);
        } else {
          console.error('Erreur lors de la récupération des partenaires');
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des partenaires', error);
      }
    };

    fetchProject();
    fetchPartners();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/projets/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          description,
          amount,
          charges,
          start_date: startDate,
          end_date: endDate,
          partners: selectedPartners
        }),
      });

      if (response.ok) {
        navigate('/Listproject');
      } else {
        console.error('Erreur lors de la mise à jour du projet');
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour du projet', error);
    }
  };

  const handlePartnerChange = (partnerId) => {
    setSelectedPartners(prevSelected =>
      prevSelected.includes(partnerId)
        ? prevSelected.filter(id => id !== partnerId)
        : [...prevSelected, partnerId]
    );
  };

  return (
    <Box>
      <Button
        startIcon={<ArrowBackIcon />}
        variant="outlined"
        color="secondary"
        onClick={() => navigate(-1)}
      >
        Retour
      </Button>
      <Typography variant="h4">Modifier Projet</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Titre"
          variant="outlined"
          fullWidth
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          margin="normal"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          label="Montant"
          variant="outlined"
          fullWidth
          margin="normal"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <TextField
          label="Charges"
          variant="outlined"
          fullWidth
          margin="normal"
          value={charges}
          onChange={(e) => setCharges(e.target.value)}
        />
        <TextField
          label="Date de Début"
          type="date"
          variant="outlined"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <TextField
          label="Date de Fin"
          type="date"
          variant="outlined"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <Typography variant="h6" margin="normal">
          Assigner des Partenaires :
        </Typography>
        {partners.map((partner) => (
          <FormControlLabel
            key={partner._id}
            control={
              <Checkbox
                checked={selectedPartners.includes(partner._id)}
                onChange={() => handlePartnerChange(partner._id)}
              />
            }
            label={partner.name}
          />
        ))}
        <Button type="submit" variant="contained" color="primary">
          Enregistrer
        </Button>
      </form>
    </Box>
  );
};

export default ProjectEdit;
