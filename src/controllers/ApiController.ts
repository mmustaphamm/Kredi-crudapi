import { Request, Response } from "express";
import axios from "axios"
import { ResourceAttributes } from "../interface/resourceInterface";

export class Entryapi {
    
    static async getAllEntries(req: Request, res: Response) {
        try {
          const response = await axios.get("https://api.publicapis.org/entries");
          const data = response.data.entries;

          res.send(data)
        } catch (error) {
          res.status(500).json({ error });
        }
      }

      static  async getFilteredEntries(req: Request, res: Response) {
        const response = await axios.get("https://api.publicapis.org/entries");
        const data = response.data.entries;

        const results = data.filter((result:ResourceAttributes) => result.Cors === 'yes');
    
        if (results) {
          res.json(results);
        } else {
          res.status(404).json({ error: 'result not found' });
        }
      }

      static  async getCategory(req: Request, res: Response) {
        const {category} = req.params
        const response = await axios.get("https://api.publicapis.org/entries");
        const data = response.data.entries;

        const results = data.filter((api:ResourceAttributes) => api.Category === category);
    
        if (results) {
          res.json(results);
        } else {
          res.status(404).json({ Error });
        }
      }


}