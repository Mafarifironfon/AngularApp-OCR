export class AppareilService {
    appareils = [
        {
            id: 1,
            name: "Machine à laver",
            status: "éteint"
        }, {
            id: 2,
            name: "Television",
            status: "Allumé"
        }, {
            id: 3,
            name: "Frigo",
            status: "éteint"
        }
    ]

    getAppareilById(id: Number){
        const appareil = this.appareils.find(
            (appareilObject) => {
                return appareilObject.id === id
            }
        )
        return appareil;
    }

    switchOnAll() {
        for (let appareil of this.appareils) {
            appareil.status = 'Allumé'
        }
    }

    switchOffAll() {
        for (let appareil of this.appareils) {
            appareil.status = 'éteint'
        }
    }

    switchOnOne(index : number) {
        this.appareils[index].status='Allumé'
    }

    switchOffOne(index : number) {
        this.appareils[index].status='éteint'
    }
}