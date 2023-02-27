const modeloDisciplina = requite('../modelos/disciplina_modelo'); 

function isEmptyObject(obj){
    return !Object.keys(obj).length;
}

function consultarDisciplina(codigo){
    const promise = new Promise ((resolve, reject) => {
        modeloDisciplina.consultarDisciplina(codigo).then(disciplina =>{
            if (typeof aluno !== 'undefined' && !isEmptyObject (disciplina)) {
                resolve(disciplina);
            }
            else {
                reject ("Nenhuma disciplina com este código encontrada");
            }
        });
    });

    return promise;
}



module.exports = {
    consultarDisciplina,
}