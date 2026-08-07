import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { GoogleGenAI, Type } from "@google/genai"

dotenv.config() //Reads the ENV file

const app = express() ///sets up express server as the backend
const port = process.env.PORT || 3000

app.use(cors()) //Enable CORS
app.use(express.json({limit: "50mb"})) //Increasing the file acception size
app.use(express.static(".")) 

const ai = new GoogleGenAI({})

const schema = {
    type: Type.OBJECT,
    properties:{
        brandName: {
            type: Type.STRING,
            description: "Brand or Manufacturer name visible on the label"
        },
        productType: {
            type: Type.STRING,
            description: "Tell if it is a fertilizer or pesticide or insecticide or herbiside etc and what is the main active ingredient."
        },
        useCase: {
            type: Type.STRING,
            description: "Tell for what general purpose the chemical or solution shown is used in 300 words. Do not list any precautions during use or dilution requirements if any."
        },
        precautions: {
            type: Type.ARRAY,
            items: {
                type: Type.BOOLEAN
            },
            description: "A list of all the precautions which need to be taken when using the product. Only answer 3 main ones which are need of mask, eyewear and PPE and label each as true/false depending on the requirement."
        },
        techDetails: {
            type: Type.STRING,
            description: "Give the description of the npk values, as well as give percentages of other micronutrients present if any."
        }
    }
} 

//We are setting a custom proxy api call whcih the browser can access while ensuring the security to be maintained
app.post("/api/describe", async (req, res) => { //This makes a post request to the google sdk
    const { mimeType, base64Data, langName} = req.body
    if (!mimeType || !base64Data){
        return res.status(400).json({error: "Missing image data or image type is invalid"})
    }
    try{
        const response = await ai.models.generateContent({
            model: "gemini-3.1-flash-lite",
            contents: [
                {
                    inlineData: {
                        mimeType: mimeType,
                        data: base64Data
                    }
                },
                `The image shown is of an agricultural chemical agent like a fertilizer, insecticide, pesticide etc so please give the asked data accordingly. Make sure to keep in mind that this data is being shown to a rural farmer so explain things in simple language only giving the practical implications without diving too deep into the scientific theory while maintaining all the technical nuances which an informed farmer might actually want to know. Put keys of the json in english and put the values in ${langName}`
            ],
            config: {
                temperature: 0.3,
                responseMimeType: "application/json",
                responseSchema: schema
            }
        })
        res.json({ description: response.text})
    }
    catch (error){
        console.log("Gemini API Error:", error)
        res.status(500).json({error: "Failed to process image"})
    }
})

app.listen(port, () => {console.log(`The server is running on port ${port}`)}) //Asks the backend to allow traffic from a specific port ie run the backend on the specified port