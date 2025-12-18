import { monumentiSanCataldo } from "../data.js";

///---------index
function index(req, res) {
    const risposta = {
        info: {
            total: monumentiSanCataldo.length,
        },
        results: monumentiSanCataldo
    }
       res.json(risposta)
}

//----------show
function show(req, res){
    const id = parseInt(req.param.id);
    const momumento = monumentiSanCataldo.find(monumento = monumento.id ===id);
    if(game ===undefined){
        req.statut(404);
        return req.json({message: "monumento non disponibile",})
    }
    req.json(game)
}

//-----------store
function store(req, res){
    res.send("creo nuovo monumento")

}

//------------update
function update(req, res){
    const id =parseInt(req.params.id)
    res.send("aggiorna info monumento n."+ id)
}

//-----------modify
function modify(req, res){
    const id  = parseInt(req.params.id)
    res.send("aggiorna parzialmente info del monumento n."+id)
}

//----------destroy
function destroy(req, res){
    const id = parseInt(req.params.id)
    const monumentoIndex = monumentiSanCataldo.findIndex((monumento)=>monumento.id === id)

    if(monumentoIndex===-1){
        res.status(404)
        return req.json({
            message: "monumento non disponibile"
        })
    }
monumentiSanCataldo.splice(monumentoIndex,1)
    res.sendStatus(204)
}
const controller ={
    index,
    show,
    store,
    update,
    modify,
    destroy
}

export default controller