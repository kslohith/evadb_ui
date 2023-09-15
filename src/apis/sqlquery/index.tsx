import { useMutation } from 'react-query'
import { executeQuery } from './api'

const SQLQuery: any = (onSuccess: any) => {
    return useMutation({
        mutationFn: (content: string) => executeQuery(content),
        onSuccess: (data) => {
            onSuccess(JSON.stringify(data))
        },
    })
}

export default SQLQuery
