import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const PartnerEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  useEffect(() => {
    const fetchPartner = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/partenaire/${id}`
        );
        const data = await response.json();
        setName(data.name);
        setEmail(data.email);
        setPhone(data.phone);
        setAddress(data.address);
      } catch (error) {
        console.error("Erreur lors de la récupération du partenaire", error);
      }
    };
    fetchPartner();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/api/partenaire/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, phone, address }),
        }
      );
      if (response.ok) {
        setOpenSnackbar(true);
        setTimeout(() => {
          navigate("/Listpartners");
        }, 2000);
      } else {
        console.error("Erreur lors de la mise à jour du partenaire");
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour du partenaire", error);
    }
  };

  return (
    <>
      <div className="container">
        <Box>
          <Paper
            elevation={3}
            sx={{ padding: 4, maxWidth: 500, width: "100%", opacity: 1 }}
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
              variant="h4"
              gutterBottom
              sx={{ fontFamily: "Montserrat", fontWeight: "bold" }}
            >
              Modifier Partenaire
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Nom"
                variant="outlined"
                fullWidth
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
                InputLabelProps={{ style: { color: "#888" } }}
                InputProps={{
                  style: { color: "black" },
                  sx: {
                    "& fieldset": { borderColor: "#888" },
                    "&:hover fieldset": { borderColor: "white" },
                  },
                }}
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputLabelProps={{ style: { color: "#888" } }}
                InputProps={{
                  style: { color: "black" },
                  sx: {
                    "& fieldset": { borderColor: "#888" },
                    "&:hover fieldset": { borderColor: "white" },
                  },
                }}
              />
              <TextField
                label="Téléphone"
                variant="outlined"
                fullWidth
                margin="normal"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                InputLabelProps={{ style: { color: "#888" } }}
                InputProps={{
                  style: { color: "black" },
                  sx: {
                    "& fieldset": { borderColor: "#888" },
                    "&:hover fieldset": { borderColor: "white" },
                  },
                }}
              />
              <TextField
                label="Adresse"
                variant="outlined"
                fullWidth
                margin="normal"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                InputLabelProps={{ style: { color: "#888" } }}
                InputProps={{
                  style: { color: "black" },
                  sx: {
                    "& fieldset": { borderColor: "#888" },
                    "&:hover fieldset": { borderColor: "white" },
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ marginTop: 2 }}
              >
                Enregistrer
              </Button>
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
      </div>
    </>
  );
};

export default PartnerEdit;
