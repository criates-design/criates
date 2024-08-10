import useClient from '@/lib/useClient'

export default async function getUserCredits(requesterId: string) {
    console.log('requesterId', requesterId)
    const client = useClient()
    const response = await client.getUserCredits(requesterId)
    return response.credits
}