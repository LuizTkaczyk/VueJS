export default{
    methods: {
        formatDate(date){
            let newDate = new Date(date)
            //retorna o padrão de hora do brasil
            return newDate.toLocaleDateString()
        }
    },
}