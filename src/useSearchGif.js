import { useState } from "react";

export const useSearchGifs = () => {
    const [valorInput, setvalorInput] = useState();
    const [gifs, setGifs] = useState([]);

    const onChange = (evento) => {
        const valor = evento.target.value;
        setvalorInput(valor);
    }

    const getGifs = async (query) => {
        const url = 'https://api.giphy.com/v1/gifs/search?api_key=9qTpF4z84SP4hikgfY1blJIHDjPAOBUV&q=Code Geass' + query;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        return data.data
    }

    const onSubmit = async (evento) => {
        evento.preventDefault()
        const gifs = await getGifs(valorInput)
        setGifs(gifs)
    }
    return {
        onSubmit,
        onChange,
        valorInput,
        gifs,
    }
}