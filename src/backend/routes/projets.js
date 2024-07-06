const express = require("express");
const router = express.Router();
const Project = require("../models/project");

// Ajouter un projet
router.post("/add", async (req, res) => {
  const project = new Project(req.body);
  try {
    await project.save();
    res.status(201).send(project);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Obtenir tous les projets
router.get("/obtproj", async (req, res) => {
  try {
    const obtprojects = await Project.find();
    res.send(obtprojects);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Obtenir un projet par ID
router.get("/:idproj", async (req, res) => {
  try {
    const Obproject = await Project.findById(req.params.idproj);
    if (!Obproject) {
      return res.status(404).send();
    }
    res.send(Obproject);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Mettre à jour un projet par ID
router.put("/:idMj", async (req, res) => {
  try {
    const Majproject = await Project.findByIdAndUpdate(req.params.idMj, req.body, {
      new: true,
      runValidators: true,
    });
    if (!Majproject) {
      return res.status(404).send();
    }
    res.send(Majproject);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Supprimer tous les projets
router.delete("/SuppA", async (req, res) => {
  try {
    const SuppProject = await Project.deleteMany();
    if (!SuppProject) {
      return res.status(404).send();
    }
    res.send({ message: "All Projects are deleted" });
  } catch (err) {
    res.status(500).send(err);
  }
});

// Supprimer un projet par ID
router.delete("/:idSupp", async (req, res) => {
  try {
    const Suppproject = await Project.findByIdAndDelete(req.params.idSupp);
    if (!Suppproject) {
      return res.status(404).send();
    }
    res.send({ message: "Project deleted" });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
