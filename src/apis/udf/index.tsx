import { useMutation } from 'react-query'
import { fetchUDFs } from './api'

const UdFQuery: any = (onSuccess: any) => {
    return useMutation({
        mutationFn: fetchUDFs,
        onSuccess: (data) => {
            onSuccess(data)
        },
    })
}

export default UdFQuery
