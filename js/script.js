new Vue({
    el: '#app',
    data: {
        currentIndex : 0,
        search : '',
        newMessage : '',
        contacts: [
            {
                name: 'Michele',
                avatar: 'img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: 'img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
        
            {
                name: 'Samuele',
                avatar: 'img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: 'img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],

        
    },
    methods: {

        getprofilePictures : function(){

        },

        mex: function(element){
            let classList = [];
            if (element == 'received'){
                classList.push('received-messages');
            }else{
                classList.push('sent-messages');
            }return classList;
        },
        mex2: function(element){
            let classList = [];
            if (element == 'sent'){
                classList.push('row-reverse');
            }else{
                classList.push('');
            }return classList;
        },

        click : function(index){
            this.currentIndex = index
        },

        addMessage : function(){
            if(this.newMessage !== ''){

            this.contacts[this.currentIndex].messages.push({
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                text: this.newMessage,
                status: 'sent',
            })
            this.newMessage = ''
            setTimeout(() => {
                this.contacts[this.currentIndex].messages.push({
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    text: 'ok',
                    status: 'received',
                })
            }, 1100);
        }

        }

    },
})