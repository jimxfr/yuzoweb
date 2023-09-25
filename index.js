function confirmar() {
    var message = confirm('¿Quieres unirte al servidor de soporte?')
    if(message){
        window.location.href = "https://discord.com/oauth2/authorize?client_id=711763299913433165&scope=bot&permissions=8"
    }
}