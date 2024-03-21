var oauthTimestamp = Math.floor(Date.now() / 1000);
const baseUri = {
    'host': 'https://beautysiaa.com/wp-json/',
    'hostExtend': 'https://beautysiaa.com/wp-json/wc/v3/',
    'authorization':'oauth_consumer_key=ck_1264e378688ded3e9e4f868b9bcc8a7ee66fd7d8&oauth_signature_method=HMAC-SHA1&oauth_timestamp='+oauthTimestamp+'&oauth_nonce=FelKrT75VPc&oauth_version=1.0&oauth_signature=LanpsawRnSW594pIBRwXFmdZzTM%3D',
    'hostSingle':'https://beautysiaa.com',
    'consumerKeyOld':'ck_077969c2bff1ebad6b170d801af988f801b8a7a4',
    'consumerSecretOld':'cs_75275354b96c844bee205b73bf3529a36d83563a',
    'consumerKey':'ck_1264e378688ded3e9e4f868b9bcc8a7ee66fd7d8',
    'consumerSecret':'cs_cc7bb9cb102550cbe95031d55cb4607f8f52970e',
    'appVersion':'v1.0.6'
}


export default baseUri;