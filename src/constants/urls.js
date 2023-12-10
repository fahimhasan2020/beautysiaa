var oauthTimestamp = Math.floor(Date.now() / 1000);
const baseUri = {
    'host': 'https://demo.beautysiaa.com/wp-json/',
    'hostExtend': 'https://demo.beautysiaa.com/wp-json/wc/v3/',
    'authorization':'oauth_consumer_key=ck_077969c2bff1ebad6b170d801af988f801b8a7a4&oauth_signature_method=HMAC-SHA1&oauth_timestamp='+oauthTimestamp+'&oauth_nonce=FelKrT75VPc&oauth_version=1.0&oauth_signature=LanpsawRnSW594pIBRwXFmdZzTM%3D',
    'hostSingle':'https://beautysiaa.com',
    'consumerKey':'ck_077969c2bff1ebad6b170d801af988f801b8a7a4',
    'consumerSecret':'cs_75275354b96c844bee205b73bf3529a36d83563a'
}


export default baseUri;