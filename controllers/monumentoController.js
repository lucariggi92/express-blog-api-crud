import { monumentiSanCataldo } from "../data.js";

///---------index
function index(req, res) {

    //creo filtro con query string params
    const tag = req.query.tag;

    let filteredMonumenti = monumentiSanCataldo;
    if (tag != undefined) {
        filteredMonumenti = monumentiSanCataldo.filter((monumento) =>
            monumento.tags.includes(tag))
    }



    const risposta = {
        info: {
            total: filteredMonumenti.length,
        },
        results: filteredMonumenti
    }
    res.json(risposta)
}

//----------show
function show(req, res) {
    const id = parseInt(req.params.id);
    const monumento = monumentiSanCataldo.find(monumento => monumento.id === id);
    if (monumento === undefined) {
        res.status(404);
        return res.json({ message: "monumento non disponibile" })
    }
    res.json(monumento)
}

//-----------store
function store(req, res) {
    const dati = req.body
    const newId = monumentiSanCataldo[monumentiSanCataldo.length - 1].id + 1;
    console.log(newId)


    const newMonumento = {
        id: newId,
        titolo: dati.name,
        descrizione: dati.descrizione,
        image: dati.image
    }
    monumentiSanCataldo.push(newMonumento)
    res.status(201)
    res.json(newMonumento)
}

//------------update
function update(req, res) {
    const dati = req.body;
    console.log(dati);
    const monumento = monumentiSanCataldo.find((monumento)=> monumento.id === id);

    if(monumento === undefined){
        return res.json({
            message: "not found"
        })
    }

    monumento.titolo= dati.titolo;
     monumento.descrizione= dati.descrizione;
      monumento.image= dati.image;

  
    res.json(monumento)
}

//-----------modify
function modify(req, res) {
    const id = parseInt(req.params.id)
    res.send("aggiorna parzialmente info del monumento n." + id)
}

//----------destroy
function destroy(req, res) {
    const id = parseInt(req.params.id)
    const monumentoIndex = monumentiSanCataldo.findIndex((monumento) => monumento.id === id)

    if (monumentoIndex === -1) {
        res.status(404)
        return req.json({
            message: "monumento non disponibile"
        })
    }
    monumentiSanCataldo.splice(monumentoIndex, 1)
    res.sendStatus(204)
}
const controller = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}

export default controller