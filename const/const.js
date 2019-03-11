var Constants = {
	oracle : { 
		address : {mainnet:"0x6cd13f1ca8758cb7b264cbc7674f2b5fa1f4ef1c",rinkeby:"0x0"},
		abi : [
			{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
			{"constant":false,"inputs":[{"name":"a","type":"address"},{"name":"allow","type":"bool"}],"name":"changeAsk","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
			{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},
			{"constant":false,"inputs":[{"name":"campaignContract","type":"address"},{"name":"idRequest","type":"bytes32"},{"name":"likes","type":"uint64"},{"name":"shares","type":"uint64"},{"name":"views","type":"uint64"}],"name":"answer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
			{"constant":false,"inputs":[{"name":"typeSN","type":"uint8"},{"name":"idPost","type":"string"},{"name":"idUser","type":"string"},{"name":"idRequest","type":"bytes32"}],"name":"ask","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
			{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
			{"constant":false,"inputs":[{"name":"token","type":"address"},{"name":"to","type":"address"},{"name":"val","type":"uint256"}],"name":"transferToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
			{"payable":true,"stateMutability":"payable","type":"fallback"},
			{"anonymous":false,"inputs":[{"indexed":true,"name":"idRequest","type":"bytes32"},{"indexed":false,"name":"typeSN","type":"uint8"},{"indexed":false,"name":"idPost","type":"string"},{"indexed":false,"name":"idUser","type":"string"}],"name":"AskRequest","type":"event"},
			{"anonymous":false,"inputs":[{"indexed":true,"name":"idRequest","type":"bytes32"},{"indexed":false,"name":"likes","type":"uint64"},{"indexed":false,"name":"shares","type":"uint64"},{"indexed":false,"name":"views","type":"uint64"}],"name":"AnswerRequest","type":"event"}
		]
	},
	campaign : { 
		address : {mainnet:"0x73b9a4c9dca22402ae685b3838ac1682b06ef774",rinkeby:"0x0"},
		abi : [
			{"constant":true,"inputs":[{"name":"idCampaign","type":"bytes32"}],"name":"getProms","outputs":[{"name":"cproms","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},
			{"constant":false,"inputs":[{"name":"idCampaign","type":"bytes32"}],"name":"endCampaign","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
			{"constant":false,"inputs":[{"name":"idRequest","type":"bytes32"},{"name":"likes","type":"uint64"},{"name":"shares","type":"uint64"},{"name":"views","type":"uint64"}],"name":"update","outputs":[{"name":"ok","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},
			{"constant":false,"inputs":[{"name":"idCampaign","type":"bytes32"}],"name":"getRemainingFunds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
			{"constant":false,"inputs":[{"name":"idCampaign","type":"bytes32"}],"name":"updateCampaignStats","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
			{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
			{"constant":false,"inputs":[{"name":"dataUrl","type":"string"},{"name":"startDate","type":"uint64"},{"name":"endDate","type":"uint64"}],"name":"createCampaign","outputs":[{"name":"idCampaign","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},
			{"constant":true,"inputs":[{"name":"idProm","type":"bytes32"}],"name":"getResults","outputs":[{"name":"creq","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},
			{"constant":true,"inputs":[{"name":"typeSN","type":"uint8"},{"name":"idPost","type":"string"},{"name":"idUser","type":"string"}],"name":"getIsUsed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},
			{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"results","outputs":[{"name":"idProm","type":"bytes32"},{"name":"likes","type":"uint64"},{"name":"shares","type":"uint64"},{"name":"views","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"},
			{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"isAlreadyUsed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},
			{"constant":false,"inputs":[{"name":"dataUrl","type":"string"},{"name":"startDate","type":"uint64"},{"name":"endDate","type":"uint64"},{"name":"likeRatio","type":"uint256"},{"name":"viewRatio","type":"uint256"},{"name":"token","type":"address"},{"name":"amount","type":"uint256"}],"name":"createPriceFundYt","outputs":[{"name":"idCampaign","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},
			{"constant":false,"inputs":[{"name":"a","type":"address"}],"name":"setOracle","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
			{"constant":true,"inputs":[{"name":"idCampaign","type":"bytes32"}],"name":"getRatios","outputs":[{"name":"types","type":"uint8[]"},{"name":"likeRatios","type":"uint256[]"},{"name":"shareRatios","type":"uint256[]"},{"name":"viewRatios","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},
			{"constant":false,"inputs":[{"name":"token","type":"address"},{"name":"accepted","type":"bool"}],"name":"modToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
			{"constant":false,"inputs":[{"name":"idProm","type":"bytes32"}],"name":"validateProm","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
			{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},
			{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"campaigns","outputs":[{"name":"advertiser","type":"address"},{"name":"dataUrl","type":"string"},{"name":"startDate","type":"uint64"},{"name":"endDate","type":"uint64"},{"name":"nbProms","type":"uint64"},{"name":"nbValidProms","type":"uint64"},{"components":[{"name":"token","type":"address"},{"name":"amount","type":"uint256"}],"name":"funds","type":"tuple"}],"payable":false,"stateMutability":"view","type":"function"},
			{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"proms","outputs":[{"name":"influencer","type":"address"},{"name":"idCampaign","type":"bytes32"},{"name":"isAccepted","type":"bool"},{"components":[{"name":"token","type":"address"},{"name":"amount","type":"uint256"}],"name":"funds","type":"tuple"},{"name":"typeSN","type":"uint8"},{"name":"idPost","type":"string"},{"name":"idUser","type":"string"},{"name":"nbResults","type":"uint64"},{"name":"prevResult","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},
			{"constant":false,"inputs":[{"name":"idCampaign","type":"bytes32"}],"name":"startCampaign","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
			{"constant":true,"inputs":[{"name":"_from","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"tokenFallback","outputs":[{"name":"hash","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},
			{"constant":false,"inputs":[{"name":"idCampaign","type":"bytes32"},{"name":"dataUrl","type":"string"},{"name":"startDate","type":"uint64"},{"name":"endDate","type":"uint64"}],"name":"modCampaign","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
			{"constant":false,"inputs":[{"name":"idProm","type":"bytes32"}],"name":"getGains","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
			{"constant":false,"inputs":[{"name":"idCampaign","type":"bytes32"},{"name":"token","type":"address"},{"name":"amount","type":"uint256"}],"name":"fundCampaign","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
			{"constant":false,"inputs":[{"name":"idCampaign","type":"bytes32"},{"name":"typeSN","type":"uint8"},{"name":"idPost","type":"string"},{"name":"idUser","type":"string"}],"name":"applyCampaign","outputs":[{"name":"idProm","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},
			{"constant":false,"inputs":[{"name":"typeSN","type":"uint8"},{"name":"idPost","type":"string"},{"name":"idUser","type":"string"},{"name":"idRequest","type":"bytes32"}],"name":"ask","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
			{"constant":false,"inputs":[{"name":"idCampaign","type":"bytes32"},{"name":"typeSN","type":"uint8"},{"name":"likeRatio","type":"uint256"},{"name":"shareRatio","type":"uint256"},{"name":"viewRatio","type":"uint256"}],"name":"priceRatioCampaign","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
			{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
			{"constant":false,"inputs":[{"name":"token","type":"address"},{"name":"to","type":"address"},{"name":"val","type":"uint256"}],"name":"transferToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
			{"payable":true,"stateMutability":"payable","type":"fallback"},
			{"anonymous":false,"inputs":[{"indexed":true,"name":"id","type":"bytes32"},{"indexed":false,"name":"startDate","type":"uint64"},{"indexed":false,"name":"endDate","type":"uint64"},{"indexed":false,"name":"dataUrl","type":"string"}],"name":"CampaignCreated","type":"event"},
			{"anonymous":false,"inputs":[{"indexed":true,"name":"id","type":"bytes32"}],"name":"CampaignFundsSpent","type":"event"},
			{"anonymous":false,"inputs":[{"indexed":true,"name":"id","type":"bytes32"},{"indexed":true,"name":"prom","type":"bytes32"}],"name":"CampaignApplied","type":"event"}
		]
	},
	token : {
		address : {mainnet:"0x47333a2dfc39ca1802c4220d8fc8db830abea5b6",rinkeby:"0x0"},
		abi : [
			{"constant":false,"inputs":[{"name":"newSellPrice","type":"uint256"},{"name":"newBuyPrice","type":"uint256"}],"name":"setPrices","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
			{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},
			{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},
			{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
			{"constant":false,"inputs":[{"name":"target","type":"address"},{"name":"givenAmount","type":"uint256"}],"name":"giveToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
			{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},
			{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},
			{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
			{"constant":true,"inputs":[],"name":"sellPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
			{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
			{"constant":true,"inputs":[],"name":"buyPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
			{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},
			{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},
			{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},
			{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"},{"name":"data","type":"bytes"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},
			{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
			{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"sell","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
			{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
			{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},
			{"payable":true,"stateMutability":"payable","type":"fallback"},
			{"anonymous":false,"inputs":[{"indexed":false,"name":"a","type":"address"},{"indexed":false,"name":"v","type":"uint256"}],"name":"Buy","type":"event"},
			{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":true,"name":"data","type":"bytes"}],"name":"Transfer","type":"event"}
		]
	}
}
module.exports = Constants;