import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ListItemText,
  Paper,
  Snackbar,
  Alert,
  Grid,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ProjectForm = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [charges, setCharges] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [partners, setPartners] = useState([]);
  const [selectedPartners, setSelectedPartners] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const handlePartnerChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedPartners(typeof value === "string" ? value.split(",") : value);
  };

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/partenaire/obt"
        );
        if (response.ok) {
          const text = await response.text();
          const data = text ? JSON.parse(text) : [];
          setPartners(data);
        } else {
          console.error("Erreur lors de la récupération des partenaires");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des partenaires", error);
      }
    };

    fetchPartners();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/projets/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          amount,
          charges,
          start_date: startDate,
          end_date: endDate,
          partners: selectedPartners,
        }),
      });

      if (response.ok) {
        const text = await response.text();
        const data = text ? JSON.parse(text) : null;
        if (data) {
          setTitle("");
          setDescription("");
          setAmount("");
          setCharges("");
          setStartDate("");
          setEndDate("");
          setSelectedPartners([]);
          setOpenSnackbar(true);
          setTimeout(() => {
            navigate("/Listproject");
          }, 2000);
        }
      } else {
        const text = await response.text();
        const errorData = text ? JSON.parse(text) : {};
        console.error("Erreur lors de la création du projet", errorData);
      }
    } catch (error) {
      console.error("Erreur lors de la création du projet", error);
    }
  };

  return (
    <Box>
      <Paper
        elevation={3}
        sx={{
          padding: 2,
          maxWidth: 500,
          width: "100%",
          margin: "0 auto",
          position: "relative",
          top: 37,
        }}
      >
        <Button
          startIcon={<ArrowBackIcon />}
          variant="outlined"
          color="secondary"
          size="small"
          onClick={() => navigate(-1)}
          sx={{
            marginBottom: 2,
            transition: "all 0.3s",
            "&:hover": {
              transform: "translateX(-5px)",
            },
          }}
        >
          Retour
        </Button>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            textAlign: "center",
            fontSize: "30px",
            fontWeight: "bold",
            fontFamily: "Montserrat",
          }}
        >
          Créer un Projet
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                label="Titre"
                variant="outlined"
                fullWidth
                margin="dense"
                value={title || ""}
                onChange={(e) => setTitle(e.target.value)}
                InputLabelProps={{ style: { color: "#888" } }}
                InputProps={{
                  style: { color: "black" },
                  sx: {
                    "& fieldset": { borderColor: "#888" },
                    "&:hover fieldset": { borderColor: "white" },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                variant="outlined"
                fullWidth
                margin="dense"
                value={description || ""}
                onChange={(e) => setDescription(e.target.value)}
                InputLabelProps={{ style: { color: "#888" } }}
                InputProps={{
                  style: { color: "black" },
                  sx: {
                    "& fieldset": { borderColor: "#888" },
                    "&:hover fieldset": { borderColor: "white" },
                  },
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Montant"
                variant="outlined"
                fullWidth
                margin="dense"
                value={amount || ""}
                onChange={(e) => setAmount(e.target.value)}
                InputLabelProps={{ style: { color: "#888" } }}
                InputProps={{
                  style: { color: "black" },
                  sx: {
                    "& fieldset": { borderColor: "#888" },
                    "&:hover fieldset": { borderColor: "white" },
                  },
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Charges"
                variant="outlined"
                fullWidth
                margin="dense"
                value={charges || ""}
                onChange={(e) => setCharges(e.target.value)}
                InputLabelProps={{ style: { color: "#888" } }}
                InputProps={{
                  style: { color: "black" },
                  sx: {
                    "& fieldset": { borderColor: "#888" },
                    "&:hover fieldset": { borderColor: "white" },
                  },
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Date de Début"
                type="date"
                variant="outlined"
                fullWidth
                margin="dense"
                InputLabelProps={{
                  shrink: true,
                  style: { color: "#888" },
                }}
                InputProps={{
                  style: { color: "black" },
                  sx: {
                    "& fieldset": { borderColor: "#888" },
                    "&:hover fieldset": { borderColor: "white" },
                  },
                }}
                value={startDate || ""}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Date de Fin"
                type="date"
                variant="outlined"
                fullWidth
                margin="dense"
                InputLabelProps={{
                  shrink: true,
                  style: { color: "#888" },
                }}
                InputProps={{
                  style: { color: "black" },
                  sx: {
                    "& fieldset": { borderColor: "#888" },
                    "&:hover fieldset": { borderColor: "white" },
                  },
                }}
                value={endDate || ""}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="subtitle1"
                margin="normal"
                style={{ color: "black" }}
              >
                Assigner des Partenaires :
              </Typography>
              <FormControl fullWidth variant="outlined" margin="dense">
                <InputLabel id="partner-select-label">
                  Select Partners
                </InputLabel>
                <Select
                  labelId="partner-select-label"
                  id="partner-select"
                  multiple
                  value={selectedPartners}
                  onChange={handlePartnerChange}
                  renderValue={(selected) =>
                    selected
                      .map((id) => partners.find((p) => p._id === id)?.name)
                      .join(", ")
                  }
                  label="Select Partners"
                >
                  {partners.map((partner) => (
                    <MenuItem key={partner._id} value={partner._id}>
                      <Checkbox
                        checked={selectedPartners.includes(partner._id)}
                      />
                      <ListItemText primary={partner.name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ marginTop: 1 }}
              >
                Créer
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Enregistré avec succès
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ProjectForm;
