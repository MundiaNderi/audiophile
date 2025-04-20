import express from 'express'
import { addAudio, listAudio, removeAudio } from '../controllers/audioController.js'
import multer from 'multer' // image storage system

const audioRouter = express.Router()

// image Storage engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({ storage: storage })

audioRouter.post('/add', upload.single("image"), addAudio)
audioRouter.get('/list', listAudio)
audioRouter.delete('/remove', removeAudio)



export default audioRouter