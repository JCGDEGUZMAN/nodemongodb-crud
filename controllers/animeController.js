import mongoose from 'mongoose';
import Anime from '../models/anime.js';

export const list = async (reg, res) => {
    try {
        const anime = await Anime.find();

        res.status(200).json(anime);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const store = async (req, res) => {
    const anime = req.body;

    const newAnime = new Anime(anime);

    try {
        await newAnime.save();

        res.status(201).json(newAnime);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const modify = async (req, res) => {
    const { id } = req.params;
    const anime = req.body;

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({ message: "record id not valid!" });
    }

    try {
        const updatedAnime = await Anime.findByIdAndUpdate(id, anime, { new: true });

        res.status(201).json(updatedAnime);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const destroy = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({ message: "record id not valid!" });
    }

    try {
        await Anime.findByIdAndRemove(id);

        res.status(204).json({ message: "record deleted!" });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const view = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({ message: "record id not valid!" });
    }

    try {
        const anime = await Anime.findById(id);

        res.status(201).json(anime);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}