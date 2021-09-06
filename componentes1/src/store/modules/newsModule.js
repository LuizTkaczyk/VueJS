export default{
    state:{
          //array que estava em appSectionNews
          news: [
            {
                id: 1,
                title: "Mortal Kombat x Street Figher",
                content:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eius maiores recusandae debitis. Culpa, reprehenderit voluptatibus ex, ab, illum tenetur ipsum quaerat accuLorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eius maiores recusandae debitis. Culpa, reprehenderit voluptatibus ex, ab, illum tenetur ipsum quaerat accuLorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eius maiores recusandae debitis. Culpa, reprehenderit voluptatibus ex, ab, illum tenetur ipsum quaerat accusantium sapiente neque tempora doloremque. Iusto, eos illo!",
                date: "2021-09-03",
                img: "streetgif.gif",
                imgInfo: "Noticia1",
            },
            {
                id: 2,
                title: "Mortal Kombat XII lançado",
                content:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eius maiores recusandae debitis. Culpa, reprehenderit voluptatibus ex, ab, illum tenetur ipsum quaerat accuLorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eius maiores recusandae debitis. Culpa, reprehenderit voluptatibus ex, ab, illum tenetur ipsum quaerat accuLorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eius maiores recusandae debitis. Culpa, reprehenderit voluptatibus ex, ab, illum tenetur ipsum quaerat accusantium sapiente neque tempora doloremque. Iusto, eos illo!",
                date: "2021-09-03",
                img: "mortalgif.gif",
                imgInfo: "Noticia2",
            },
            {
                id: 3,
                title: "TKOF - Campeonato aberto",
                content:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eius maiores recusandae debitis. Culpa, reprehenderit voluptatibus ex, ab, illum tenetur ipsum quaerat accuLorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eius maiores recusandae debitis. Culpa, reprehenderit voluptatibus ex, ab, illum tenetur ipsum quaerat accuLorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eius maiores recusandae debitis. Culpa, reprehenderit voluptatibus ex, ab, illum tenetur ipsum quaerat accusantium sapiente neque tempora doloremque. Iusto, eos illo!",
                date: "2021-09-03",
                img: "tkgif.gif",
                imgInfo: "Noticia3",
            },
        ]
    },
    getters:{
        getNews(state){
            return state.news
        },
        getNewsFromId: state => id => {
            let notice = state.news.find(item =>{
                return (item.id == id)
            })
            return notice
        }
    }
}