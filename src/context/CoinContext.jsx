import { createContext, useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {

    const [allCoin, setAllCoin] = useState([]);
    const [currency, setCurrency] = useState({
        name: 'usd',
        symbol: '$'
    })

    const fetchAllCoin = async () => {
        const url = 'https://api.coingecko.com/api/v3/coins/markets';
        const options = { method: 'GET', headers: { 'x-cg-demo-api-key': '<api-key>' }, body: undefined };

        try {
            const response = await fetch(url, options);
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    const contextValue = {}

    return (
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    )
}

export default CoinContextProvider;