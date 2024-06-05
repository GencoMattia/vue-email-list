# vue-email-list

Descrizione:
Attraverso l'apposita API di Boolean, usando axios, con chiamata GET a questo indirizzo https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.


----- PASSAGGI -----
- creare un method per gestire l'API
    - usare un ciclo for per ripetere la chiamata all'API 10 volte
- creare un hook per il metodo di chiamata email alla creazione
- creare un data array in cui pushare le 10 email.
- usando un v-for, stampare in pagina tutte le mail presenti nell'array