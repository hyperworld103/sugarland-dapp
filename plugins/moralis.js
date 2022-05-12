import Moralis from 'moralis';

export default ({ $config: { moralis_key, moralis_url } }, inject) => {
    Moralis.initialize(moralis_key);
    Moralis.serverURL = moralis_url

    inject('moralis', Moralis)

}