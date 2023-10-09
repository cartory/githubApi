import { useState, useEffect, useCallback } from 'react'

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        error: null,
        loading: true,
    })

    const refetch = useCallback(() => {
        fetch(url)
            .then(async res => {
                setState({
                    error: null,
                    loading: false,
                    data: await res.json(),
                })
            })
            .catch(err => {
                setState({
                    data: null,
                    error: err,
                    loading: false,
                })
            })
    }, [url])

    useEffect(() => {
        state.loading && refetch()
    }, [refetch, state.loading])

    return {
        state,
        refetch,
    }
}