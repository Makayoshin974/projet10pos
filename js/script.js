

function chargement() {
	gapi.client.load('youtube', 'v3', chargeapi);
}

function chargeapi() {
	console.log('chargeapi fired');
    gapi.client.setApiKey('AIzaSyAG8sEcOGR52Mng-muBG63QAXDijYqVEGM');
    affiche();
}
function affiche(){
	var request = gapi.client.youtube.playlistItems.list(
	    {
	    	playlistId: 'PLb84-3f0TwkON1MRBUzd_QJw2m_Yzr-09',
	    	part: 'snippet',
	    	maxResults: 5
	    }
    );
     request.execute(reponse);
}
function reponse(response){
	console.log(response);
}