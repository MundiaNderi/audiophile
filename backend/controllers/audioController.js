import audioModel from '../models/audioModel.js';
import fs from 'fs'; // prebuilt in Node.js

// add audio item
const addAudio = async (req, res) => {
    try {
        // Log the entire request body to see what is being received
        console.log('req.body:', req.body);

        // Assuming req.file.filename contains the filename of the uploaded image
        let image_filename = req.file.filename;

        // Construct the image object
        const image = {
            mobile: `/uploads/${image_filename}`,
            desktop: `/uploads/${image_filename}`
        };

        // Check if req.body.includes is an array or a string
        let includes = [];
        if (req.body.includes) {
            if (Array.isArray(req.body.includes)) {
                includes = req.body.includes.map(include => {
                    const [quantity, ...itemArr] = include.split(' ');
                    const item = itemArr.join(' ');
                    return { quantity: parseInt(quantity, 10), item };
                });
            } else {
                const [quantity, ...itemArr] = req.body.includes.split(' ');
                const item = itemArr.join(' ');
                includes = [{ quantity: parseInt(quantity, 10), item }];
            }
        }

        const audio = new audioModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: image,
            includes: includes,
            features: req.body.features
        });

        await audio.save();
        res.status(201).json({ message: 'Audio item added successfully', audio });
    } catch (error) {
        console.error('Error adding audio item:', error); // Improved logging
        res.status(500).json({ message: 'Error adding audio item', error: error.message });
    }
};


// list all audio

const listAudio = async (req, res) => {
    try {
        const audio = await audioModel.find({});
        res.json({success: true, data:audio})
    } catch (error) {
        console.log(error)
        res.json({success:false, message: 'Error'})
    }
}

// delete audio item

const removeAudio = async(req, res) => {
    try {
        const audio = await audioModel.findById(req.body.id);
        // delete image from uploads folder
        fs.unlink(`uploads/${audio.image}`, () => {})

        await audioModel.findByIdAndDelete(req.body.id)
        res.json({success: true, message: "Food Removed"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message: "Error"})
    }
}

export { addAudio , listAudio, removeAudio};
