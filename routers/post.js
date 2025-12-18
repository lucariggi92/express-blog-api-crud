import express from "express";
import monumentoController from "../controllers/monumentiControllers.js"

const router = express.Router();

//index
router.get("/", monumentoController.index)



//SHOW
router.get("/:id", monumentoController.show)



//STORE
router.post("/", monumentoController.store)


//UPDATE
router.put("/:id", (req,res)=>{
    const id =req.params.id;
    res.send("aggiorna card monumento n."+ id)
})

//MODIFY
router.patch("/:id", (req,res)=>{
    const id =req.params.id;
    res.send("aggiorna parzialemte card monumento n."+ id)
})

//DESTROY
router.delete("/:id", (req,res)=>{
        const id =req.params.id;
        res.send("cancella card monumento n."+ id)
})


export default router;