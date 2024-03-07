import request.request as req

def add_critique(data):
    print(data, flush=True)
    if (not "commentaire" in data or data["commentaire"] == ""):
        return False
    
    if (not "note" in data or data["note"] == ""):
        return False

    if (not "nom" in data or data["nom"] is None):
        return False

    if (not "prenom" in data or data["prenom"] == ""):
        return False
      
    if ("id" in data and data["id"]):
      requete = f"UPDATE critique SET commentaire='{data['commentaire']}', note='{data['note']}', nom={data['nom']}, prenom={data['prenom']} WHERE id = {data['id']}"
      req.insert_in_db(requete)
      id = data['id']
    else:
      requete = "INSERT INTO critique (commentaire, note, nom, prenom) VALUES (?, ?, ?, ?)"
      id = req.insert_in_db(requete, (data["commentaire"], data["note"], data["nom"], data["prenom"]))

    return id

def get_all_critiques():
    json = req.select_from_db("SELECT * FROM critique")
    
    return json

def get_critiques(id):
    if (not id):
        return False

    json = req.select_from_db("SELECT * FROM critique WHERE attraction = ?", (id,))

    return json

def delete_critiques(id):
    if (not id):
        return False

    req.delete_from_db("DELETE FROM critique WHERE id = ?", (id,))

    return True